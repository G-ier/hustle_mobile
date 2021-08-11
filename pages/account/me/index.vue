<template>
    <div class="admin-base-1">

      <div class="admin-starter primary" v-if="role == 'seller' && (user.paid == false || user.timestamp <= today.getTime())">
          <div class="container-stuff">
              <h1 class="starter-title-1 s20 qs">Behu shites</h1>
              <p class="qs">Abonimi juaj mbaron ne: {{new Date(user.timestamp).toLocaleString()}}</p>
              <p class="qs" v-if="user.paid == false">Abonimi ka mbaruar...</p>
              <v-btn class="qs primary--text rounded-lg" color="white" small @click="contactSeller = true">Zgjat paketen</v-btn>
          </div>
      </div>
      
      <div class="admin-starter" v-if="role == 'seller'">
          <div class="container-stuff">
              <h1 class="starter-title s20 qs">Porosite</h1>
                <div class="starter-row">
                    <v-btn text small color="white" class="white--text qs" nuxt @click="toFulfilled">Te permbushura</v-btn>
                    <v-btn class="qs white--text" small text nuxt @click="toOrders">Cdo porosi</v-btn>
                </div>
          </div>
      </div>

      
      <div class="admin-starter-1" v-if="role == 'seller'">
          <div class="container-stuff-1">
              <h1 class="starter-title-1 s20 qs">Produktet tuaja</h1>
              <div class="starter-row-1">
                <div class="simple-listing">
                    <div class="simple-tile">
                        <p class="qs secondary--text simple-m ma-0 pa-0">{{prods.length}} <span class="qs side-m">Produkt</span>  </p>
                    </div>
                </div>
              </div>
              <div class="starter-row-1">
                <v-btn text small color="white" class="white--text qs" nuxt @click="toEdit">Edit</v-btn>
                <v-btn class="qs white--text" small text nuxt @click="toCreate">Create</v-btn>
              </div>
          </div>
      </div>

        <v-dialog
        transition="dialog-top-transition"
        max-width="300"
        v-model="contactSeller"
        style="z-index: 9898989898987987987987897;"
        >
            <v-card color="primary">
            <v-card-title>
                <h3 class="qs white--text mb-4">Konfirmo</h3>
                <v-text-field label="Emri juaj" outlined v-model="sugar" dark dense color="white" class="mt-1" clearable :error-messages="sugarErrors" @input="$v.sugar.$touch()"></v-text-field>
                <v-select label="Paketa juaj" outlined v-model="paketa" :items="paketat" dark dense color="white" class="mt-1" clearable :error-messages="pakErrors" @input="$v.paketa.$touch()"></v-select>  
                <v-textarea label="Mesazhe opsional" outlined v-model="hate" dark dense color="white" class="mt-1" clearable></v-textarea>          
            </v-card-title>
            <v-card-actions class="justify-end">
                <v-btn
                text
                @click="sendAdmin"
                >Konfirmo</v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog
        transition="dialog-top-transition"
        max-width="300"
        v-model="ok"
        style="z-index: 9898989898987987987987897;"
        >
            <v-card color="secondary">
            <v-card-title>
                <h3 class="qs white--text mb-4">Mesazhi u dergua</h3>     
            </v-card-title>
            <v-card-text class="qs white--text">
                Ju lutem prisni amazon per tu lidhur ne kontakt me ju.
            </v-card-text>
            <v-card-actions class="justify-end">
                <v-btn
                text
                @click="ok = false"
                >Ne rregulle</v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>

  </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'
import Cookie from 'js-cookie';
import {validationMixin} from 'vuelidate'
import {required} from 'vuelidate/lib/validators'
export default {
    async asyncData({store}){
        var full = store.state.users.user.email.split("@");
        var realting = full[0];

        const datush = await firebase.firestore().collection('users').doc(realting).get();
        const datush2 = datush.data();

        var data4 = [];
        if(store.state.users.role == "seller"){
            const data3 = await firebase.firestore().collection('elektronike').where("owner", "==", datush2.username.toLowerCase()).get();
            data4 = data3.docs.map(doc => doc.data());
        }

        var freeTrial = [];
        if(store.state.users.role == "seller" || datush2.paid == true){
            freeTrial.push({freeTrial: true});
        } else {
            freeTrial.push({freeTrial: false});
        }

        console.log(datush2.timestamp);
        console.log(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+7).getTime());
        return{
            prods: data4.length > 0 ? data4 : [],
            freeTrial: freeTrial[0].freeTrial,
            user: datush2,
            today: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+7)
        }
    },
    data(){
        return{
            contactSeller: false,
            username: this.$store.state.users.user.email.split('@'),
            data: "asgje",
            editP: false,
            paketat: [
                "Nje mujor",
                "Dy mujor",
                "Tre mujor",
                "Gjashte mujor",
                "Dymbedhjete mujor"
            ],
            dialogE: false,
            emri: "",
            foto: "",
            ft: null,
            rules: [
                value => !value || value.size < 9000000 || 'Avatar size should be less than 1 MB!',
            ],
            blog: {},
            isUploadingImage: false,
            isDeletingImage: false,
            url: null,
            role: this.$store.state.users.role,
            boughting: false,
            sugar: null,
            hate: null,
            paketa: null,
            ok: false
        }
    },
    head(){
        return{
            title: "Platforma X",
            meta: [
                {
                    name: 'description',
                    content: 'Platforma me e avancuar dhe komforte per shitesat' 
                }
            ]
        }
    },
    methods: {
        logout: async function () {
            await firebase.auth().signOut();
            await Cookie.remove('access_token');

            location.href = "/account";
        },
        toEdit: function(){
            const cookie = Cookie.get("user");
            const cook = JSON.parse(cookie);
            this.$router.push({name: "account-me-edit", query: {name: cook.username.toLowerCase()}});
        },
        toCreate: function(){
            const cookie = Cookie.get("user");
            const cook = JSON.parse(cookie);
            this.$router.push({name: "account-me-create", query: {name: cook.username.toLowerCase()}});
        },
        toOrders: function (){
            const cookie = Cookie.get("user");
            const cook = JSON.parse(cookie);
            this.$router.push({name: "account-me-all-orders", query: {name: cook.username.toLowerCase()}});
        },
        toFulfilled: function (){
            const cookie = Cookie.get("user");
            const cook = JSON.parse(cookie);
            this.$router.push({name: "account-me-fulfilled", query: {name: cook.username.toLowerCase()}});
        },
        isBlank: function(str) {
            return (!str || /^\s*$/.test(str));
        },
        launchImageFile () {
        // Trigger the file input click event.
        this.$refs.imageFile.click()
        },
        uploadImageFile (files) {
            if (!files.length) {
                return
            }
            const file = files[0]

            if (!file.type.match('image.*')) {
                alert('Please upload an image.')
                return
            }

            const metadata = {
                contentType: file.type
            }

            this.isUploadingImage = true

            // Create a reference to the destination where we're uploading
            // the file.
            const storage = firebase.storage()
            const imageRef = storage.ref(`images/${file.name}`)

            const uploadTask = imageRef.put(file, metadata).then((snapshot) => {
                // Once the image is uploaded, obtain the download URL, which
                // is the publicly accessible URL of the image.
                return snapshot.ref.getDownloadURL().then((url) => {
                return url
                })
            }).catch((error) => {
                console.error('Error uploading image', error)
            })

            // When the upload ends, set the value of the blog image URL
            // and signal that uploading is done.
            uploadTask.then((url) => {
                this.blog.imageUrl = url
                this.isUploadingImage = false
                this.url = url
                this.sendEdited(url)
            })
        },
        editProfile: function (){


            this.editP = true;
        },
        closeE: function (){


            this.editP = false;
        },
        sendEdited: async function (url){

            await firebase.firestore().collection('users').doc(this.username[0]).update({ 
                "displayName": this.isBlank(this.emri) ? this.emri : this.username[0],
                "photo": this.url
            });

        },
        realSend: function (){
            
            this.editP = false;
            this.dialogE = true;

        },
        sendAdmin: async function(){

            if(this.$v.sugar.$invalid || this.$v.paketa.$invalid){
                return;
            }


            this.contactSeller = false;

            var bodyForm = new FormData();

            bodyForm.append("email_data", JSON.stringify({
                emri: this.sugar,
                mesazhi: this.hate,
                email: this.$store.state.users.user.email,
                numri: this.user.numri,
                paketa: this.paketa
            }))

            var obj = await this.$axios({
                method: "post",
                url: "http://34.65.32.131/receive_seller_request",
                data: bodyForm,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })


            this.ok = true;
        }

    },
    mixins: [validationMixin],
    validations: {
        sugar: {
            required
        },
        paketa: {
            required,
        }
    },
    computed: {
        sugarErrors () {
            const errors = []
            if (!this.$v.sugar.$dirty) return errors
            !this.$v.sugar.required && errors.push('Emri eshte i detyrueshem')
            return errors
        },
        pakErrors () {
            const errors = []
            if (!this.$v.paketa.$dirty) return errors
            !this.$v.paketa.required && errors.push('Zgjidhni paketen')
            return errors
        }
    }

}
</script>

<style>
.r{
    z-index: 999999998989898787979867987;
}
.lister{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.lister-item{
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid gray;
    margin-bottom: 20px;
}
.inputFile::-webkit-file-upload-button {
    visibility: hidden;
}
.inputFile::before {
    content: "Zgjidh foto";
    display: inline-block;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    
    font-weight: 700;
    font-size: 10pt;
}
.admin-base-1{
    background-size: cover;
    background-position-y: center;
    background-position-x: center;
    width: 100%;
    min-height: 79vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 0 10px 0;
    
}
.logout-row-1{
    width: 100%;
    padding: 5px 5vw 0 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}
.admin-starter{
    width: 90%;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #363f4e;
    margin-bottom: 15px;
}
.admin-starter-1{
    width: 90%;
    height: 30vh;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #363f4e;
    margin-bottom: 15px;
}
.container-stuff{
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 25px 0 25px 0;
}
.starter-title{
    color: white;
    padding-bottom: 10px;
}
.starter-row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.container-stuff-1{
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 25px 0 25px 0;
}
.starter-title-1{
    color: white;
    padding-bottom: 10px;
}
.starter-row-1{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.simple-listing{
    background-color: white;
    border-radius: 20px;
    width: 40%;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 15px 15px 15px;
    margin-bottom: 10px;
    overflow: hidden;
}
.simple-tile{
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    width: 100%;
    height: 100px;
}
.simple-m{
    font-size: 40px;
    
}
.side-m{
    font-size: 13px;
}
.vert{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.w-100{
    width: 100%;
    border-color: white;
    border: 15px;
    
}
.inputFile {
	width: 100%;
}
::-webkit-file-upload-button {
  background: gray;
  color: #363f4e;
  padding: 10px;
  border-radius: 10px;
  border-width: 0px;
}
@media screen and (min-width:850px) {
    .r{
        z-index: 999999998989898787979867987;
    }
    .inputFile::-webkit-file-upload-button {
        visibility: hidden;
    }
    .inputFile::before {
        content: "Zgjidh foto";
        display: inline-block;
        border-radius: 3px;
        padding: 5px 8px;
        outline: none;
        white-space: nowrap;
        -webkit-user-select: none;
        cursor: pointer;
        
        font-weight: 700;
        font-size: 10pt;
    }
    .logout-row-1{
        width: 750px;
        padding: 5px 5vw 0 5vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }
    .admin-starter{
        width: 750px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #363f4e;
        margin-bottom: 15px;
    }
    .admin-starter-1{
        width: 750px;
        max-height: 230px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        background-color: #363f4e;
        margin-bottom: 15px;
        padding: 0px 0 0 0;
    }
    .container-stuff-1{
        width: 85%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 25px 0 0px 0;
    }
}
</style>