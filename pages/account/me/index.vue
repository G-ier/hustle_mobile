<template>
    <div class="admin-base-1">
      <div class="logout-row-1">
          <v-btn class="qs white--text rounded-lg" color="primary" text @click="editProfile">Edit profile</v-btn>
          <v-btn class="qs white--text rounded-lg" @click="logout" color="primary">Logout</v-btn>
      </div>
      
      <div class="admin-starter" v-if="role == 'seller'">
          <div class="container-stuff">
              <h1 class="starter-title qs">Porosite</h1>
                <div class="starter-row">
                    <v-btn text small color="white" class="white--text qs" nuxt @click="toFulfilled">Te permbushura</v-btn>
                    <v-btn class="qs white--text" small text nuxt @click="toOrders">Cdo porosi</v-btn>
                </div>
          </div>
      </div>

      <!--  
      <div class="admin-starter" v-if="role == 'seller'">
          <div class="container-stuff">
              <h1 class="starter-title qs">Payments</h1>
                <div class="starter-row">
                    <v-btn text small color="white" class="white--text qs" nuxt to="/account/drejtuesi/llogaria">Bank details</v-btn>
                    <v-btn class="qs white--text" small text nuxt to="/account/drejtuesi/payments">All payments</v-btn>
                </div>
          </div>
      </div>
        -->
      <div class="admin-starter-1" v-if="role == 'seller'">
          <div class="container-stuff-1">
              <h1 class="starter-title-1 qs">Produktet tuaja</h1>
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

      <div class="admin-starter" v-if="role == 'buyer'">
          <div class="container-stuff">
              <h1 class="starter-title qs">Pagesat tuaja</h1>
              <div class="starter-row-1">
                <div class="simple-listing">
                    <div class="simple-tile">
                        <p class="qs secondary--text simple-m ma-0 pa-0">{{bought.length}} <span class="qs side-m">Blerje</span>  </p>
                    </div>
                </div>
              </div>
                <div class="starter-row">
                    <v-btn class="qs white--text" small text nuxt @click="boughting = true">Cdo pagese</v-btn>
                </div>
          </div>
      </div>

      <v-dialog
        v-model="boughting"
        scrollable
        max-width="300px"
        
        >
        <v-card color="secondary"> 
            <v-card-title>Cdo blerje</v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height: 300px;">
            <div class="lister">
                <div class="lister-item" v-for="pur in bought" :key="pur.id">
                    <p class="qs white--text">Produkti: {{pur.orders.item}}</p>
                    <p class="qs white--text">Totali: {{pur.orders.price}}</p>
                    <p class="qs white--text">Cope: {{pur.orders.quantity}}</p>
                </div>
            </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
            <v-btn
                color="white"
                class="qs"
                text
                @click="boughting = false"
            >
                Mbyll
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>

        <v-dialog
            v-model="editP"
            fullscreen
            style="z-index: 34235456;"
            transition="dialog-bottom-transition"
            class="r"
            >
            
            <v-card>
                <v-toolbar
                dark
                color="primary"
                >
                <v-btn
                    icon
                    dark
                    @click="closeE"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Perpuno detajet</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn
                    dark
                    text
                    @click="realSend"  
                    >
                    Ruaj
                    </v-btn>
                </v-toolbar-items>
                </v-toolbar>
                <v-list
                three-line
                subheader
                >
                <v-subheader>Detajet tuaja</v-subheader>
                <v-list-item>
                    <v-list-item-content>
                        <div class="vert">
                            <v-text-field v-model="emri" class="w-100" placeholder="New name" outlined dense color="white" dark clearable></v-text-field>
                            <p class="qs">Fotoja e profilit</p>
                            <input
                                ref="imageFile"
                                placeholder="Profile photo"
                                accept="image/png, image/jpeg"
                                class="inputFile"
                                type="file"
                                name="file" 
                                @change.prevent="uploadImageFile($event.target.files)"
                            >
                        </div>
                    </v-list-item-content>
                </v-list-item>
                </v-list>
                
            </v-card>   
        </v-dialog>
        <v-dialog
        v-model="dialogE"
        max-width="240"
        >
        <v-card color="secondary">
            <v-card-title class="headline qs">
            Sukses!
            </v-card-title>

            <v-card-text class="qs">
            Perpunimi ishte i sukseshem. Nje rifreskim i browser mund te jete i nevojshem per te shfaqur te dhenat.
            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                color="white"
                text
                @click="dialogE = false"
            >
                Mbyll
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
      
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import Cookie from 'js-cookie';
export default {
    async asyncData({store}){
        var full = store.state.users.user.email.split("@");
        var realting = full[0];
        console.log(realting);

        const datush = await firebase.firestore().collection('users').doc(realting).get();
        const datush2 = datush.data();

        const data = await firebase.firestore().collection('orders').where("payee_email", "==", datush2.email).get();
        const data2 = data.docs.map(doc => doc.data());

        var data4 = [];
        if(store.state.users.role == "seller"){
            const data3 = await firebase.firestore().collection('elektronike').where("owner", "==", datush2.username).get();
            data4 = data3.docs.map(doc => doc.data());
        }

        return{
            bought: data2.length > 0 ? data2 : [],
            prods: data4.length > 0 ? data4 : []
        }
    },
    data(){
        return{
            username: this.$store.state.users.user.email.split('@'),
            data: "asgje",
            editP: false,
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
            boughting: false
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
            this.$router.push({name: "account-me-edit", query: {name: this.username[0]}});
        },
        toCreate: function(){
            this.$router.push({name: "account-me-create", query: {name: this.username[0]}});
        },
        toOrders: function (){
            
            this.$router.push({name: "account-me-all-orders", query: {name: this.username[0]}});
        },
        toFulfilled: function (){
            
            this.$router.push({name: "account-me-fulfilled", query: {name: this.username[0]}});
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