<template>
    <div class="admin-base-1">
      <div class="logout-row-1">
          <v-btn class="qs white--text rounded-lg" color="primary" text @click="editProfile">Edit profile</v-btn>
          <v-btn class="qs white--text rounded-lg" @click="logout" color="primary">Logout</v-btn>
      </div>
      
      <div class="admin-starter">
          <div class="container-stuff">
              <h1 class="starter-title qs">Orders</h1>
                <div class="starter-row">
                    <v-btn text small color="white" class="white--text qs" nuxt @click="toFulfilled">Fulfilled orders</v-btn>
                    <v-btn class="qs white--text" small text nuxt @click="toOrders">All orders</v-btn>
                </div>
          </div>
      </div>

      <div class="admin-starter">
          <div class="container-stuff">
              <h1 class="starter-title qs">Payments</h1>
                <div class="starter-row">
                    <v-btn text small color="white" class="white--text qs" nuxt to="/account/drejtuesi/llogaria">Bank details</v-btn>
                    <v-btn class="qs white--text" small text nuxt to="/account/drejtuesi/payments">All payments</v-btn>
                </div>
          </div>
      </div>

      <div class="admin-starter-1">
          <div class="container-stuff-1">
              <h1 class="starter-title-1 qs">Items</h1>
              <div class="starter-row-1">
                <div class="simple-listing">
                    <div class="simple-tile">
                        <p class="qs secondary--text simple-m ma-0 pa-0">10 <span class="qs side-m">Items</span>  </p>
                    </div>
                </div>
                <div class="simple-listing">
                    <div class="simple-tile">
                        <p class="qs secondary--text simple-m ma-0 pa-0">10 <span class="qs side-m">Ads</span>  </p>
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
            v-model="editP"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
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
                <v-toolbar-title>Edit your details</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn
                    dark
                    text
                    @click="realSend"  
                    >
                    Save
                    </v-btn>
                </v-toolbar-items>
                </v-toolbar>
                <v-list
                three-line
                subheader
                >
                <v-subheader>Product details</v-subheader>
                <v-list-item>
                    <v-list-item-content>
                        <div class="vert">
                            <v-text-field v-model="emri" class="w-100" placeholder="New name" outlined dense color="white" dark clearable></v-text-field>
                            <p class="qs">New profile photo - under 1Mb</p>
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
            Edit success!
            </v-card-title>

            <v-card-text class="qs">
            Update successful. A reload may be needed to refresh the data.
            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                color="white"
                text
                @click="dialogE = false"
            >
                Close
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
.admin-base-1{
    background-size: cover;
    background-position-y: center;
    background-position-x: center;
    width: 100%;
    min-height: 81vh;
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
</style>