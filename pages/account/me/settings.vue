<template>
  <div class="aplikimi-container-cu-1">
      <div class="login-modern">
          <v-sheet elevation="15" class="py-4 custom-stepper" color="secondary">
            <h1 class="classy text-center qs v-fsm mb-7">Te dhena publike</h1>
            <div class="form-body pb-2">
                <b-field label="Emri" custom-class="white--text" v-model="account.displayName" expanded>
                    <b-input></b-input>
                </b-field>
                <b-field label="Fotoja e profilit" custom-class="white--text">
                    <b-upload v-model="dropFiles"
                        multiple
                        drag-drop
                        @input="uploadImageFile()">
                        <section class="section">
                            <div class="content has-text-centered">
                                <p>
                                    <b-icon
                                        icon="upload"
                                        size="is-large">
                                    </b-icon>
                                </p>
                                <p>Drop your files here or click to upload</p>
                            </div>
                        </section>
                    </b-upload>
                </b-field>
                <div class="tags">
                    <span v-for="(file, index) in dropFiles"
                        :key="index"
                        class="tag is-danger" >
                        {{file.name}}
                        <button class="delete is-small"
                            type="button"
                            @click="deleteDropFile(index)">
                        </button>
                    </span>
                </div>
                <div class="button-side mt-7">
                    <v-btn color="white" text class="qs white--text btn-c v-fsm" @click="change">Ndrysho</v-btn>
                </div>
            </div>
          </v-sheet>
          <v-sheet elevation="15" class="py-4 custom-stepper" color="secondary">
            <h1 class="classy text-center qs v-fsm mb-7">Te dhena private</h1>
            <div class="form-body pb-2">
                <b-field label="Email" custom-class="white--text" expanded>
                    <b-input type="email"
                        value="iwantmytreasure"
                        v-model="account.email">
                    </b-input>
                </b-field>
                <b-field label="Password i ri" custom-class="white--text" expanded>
                    <b-input type="password"
                        value="iwantmytreasure"
                        password-reveal
                        v-model="account.password">
                    </b-input>
                </b-field>
                <div class="button-side mt-7">
                    <v-btn color="white" text class="qs white--text btn-c v-fsm" @click="changeU" >Ndrysho password</v-btn>
                </div>
            </div>
        </v-sheet>
      </div>
      <v-snackbar v-model="feed" color="secondary">
        Te ndryshuara me sukses!
          <template v-slot:action="{ attrs }">
            <v-btn
            color="white"
            class="white--text"
            text
            v-bind="attrs"
            @click="feed = false"
            >
            Close
            </v-btn>
        </template>
      </v-snackbar>
      <v-dialog
        v-model="isUploadingImage"
        max-width="240"
        >
        <v-card color="secondary">
            <v-card-title class="headline qs">
            Ju lutem prisni...
            </v-card-title>

            <v-card-text class="qs">
            <v-row justify="center" class="mt-3">
                <v-progress-circular
                indeterminate
                color="primary"
                ></v-progress-circular>
            </v-row>
            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                color="white"
                text
                @click="dialog2 = false"
            >
                Close
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog> 
  </div>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required, email} from 'vuelidate/lib/validators'
import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/auth'
export default {
    async asyncData({store}){
        const email = store.state.users.user.email;

        const user = await firebase.firestore().collection('users').where("email", "==", email).get();
        const userParsed = user.docs.map(doc => doc.data());

        return{
            user: userParsed[0],
            fumail: userParsed[0].email.split('@'),
            account: {
                displayName: userParsed[0].displaName,
                email: userParsed[0].email,
                password: "",
            }
        }
    },
    mixins: [validationMixin],
    data(){
        return{
            steps: 4,
            currentStep: 1,
            error: '',
            loading: false,
            dialog: false,
            forgotten: false,
            feed: false,
            isUploadingImage: false,
            url: "",
            dropFiles: []
        }
    },
    validations: {
        account: {
            email: {
                required,
                email
            },
            password: {
                required,
            }
        }
    },
    computed: {
        emailErrors () {
            const errors = []
            if (!this.$v.account.email.$dirty) return errors
            !this.$v.account.email.email && errors.push('Must be valid e-mail')
            !this.$v.account.email.required && errors.push('E-mail is required')
            return errors
        },
    },
    methods: {
        change: async function(){

            this.loading = true;

            if(this.account.displayName == "" && this.url == ""){
                return;
            }
            else if(this.account.displayName == "" && this.url != ""){
                await firebase.firestore().collection('users').doc(this.fumail[0]).update({
                    username: this.user.username,
                    email: this.account.email,
                    location: this.user.location,
                    numri: this.user.numri,
                    password: this.user.password,
                    photo: this.url,
                    qyteti: this.user.qyteti,
                    role: this.user.role,
                    displaName: this.user.displaName
                });
            }
            else if(this.account.displayName != "" && this.url == ""){
                await firebase.firestore().collection('users').doc(this.fumail[0]).update({
                    username: this.user.username,
                    email: this.user.email,
                    location: this.user.location,
                    numri: this.user.numri,
                    password: this.user.password,
                    photo: this.user.photo,
                    qyteti: this.user.qyteti,
                    role: this.user.role,
                    displaName: this.account.displayName
                });
            }
            else if(this.account.displayName != "" && this.url != ""){
                await firebase.firestore().collection('users').doc(this.fumail[0]).update({
                    username: this.user.username,
                    email: this.account.email,
                    location: this.user.location,
                    numri: this.user.numri,
                    password: this.user.password,
                    photo: this.url,
                    qyteti: this.user.qyteti,
                    role: this.user.role,
                    displaName: this.account.displayName
                });
            }

            this.loading = false;
            this.feed = true;
        },
        changeU: async function(){

            this.loading = true;

            if(this.account.email == "" && this.account.password == ""){
                return;
            }
            else if(this.account.email == "" && this.account.password != ""){
                await firebase.firestore().collection('users').doc(this.fumail[0]).update({
                    username: this.user.username,
                    email: this.user.email,
                    location: this.user.location,
                    numri: this.user.numri,
                    password: this.account.password,
                    photo: this.url,
                    qyteti: this.user.qyteti,
                    role: this.user.role,
                    displaName: this.user.displaName
                });
            }
            else if(this.account.email != "" && this.account.password == ""){
                await firebase.firestore().collection('users').doc(this.fumail[0]).update({
                    username: this.user.username,
                    email: this.account.email,
                    location: this.user.location,
                    numri: this.user.numri,
                    password: this.user.password,
                    photo: this.user.photo,
                    qyteti: this.user.qyteti,
                    role: this.user.role,
                    displaName: this.user.displaName
                });
            }
            else if(this.account.email != "" && this.account.password != ""){
                await firebase.firestore().collection('users').doc(this.fumail[0]).update({
                    username: this.user.username,
                    email: this.account.email,
                    location: this.user.location,
                    numri: this.user.numri,
                    password: this.account.password,
                    photo: this.user.photo,
                    qyteti: this.user.qyteti,
                    role: this.user.role,
                    displaName: this.user.displaName
                });
            }

            this.loading = false;
            this.feed = true;
        },
        sendConfirm: function(){
            this.forgotten = false;
            this.feed = true;
            firebase.auth().sendPasswordResetEmail(this.Fmail);
        },
        uploadImageFile () {
            if (!this.dropFiles.length) {
                return
            }
            const file = this.dropFiles[0];

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
                this.url = url;
                this.isUploadingImage = false;
                
            })
        }
    },
    head(){
        return{
            title: "Log in | Platforma X",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Ndryshimi i te dhenave"
                }
            ]
        }
    }
}
</script>

<style scoped>
.v-text-field input{
    color:  white;
}
.classy{
    font-size: 22px;
}
.aplikimi-container-cu-1{
    background-size: cover;
    background-position-y: center;
    background-position-x: center;
    width: 100%;
    min-height: 81vh;
    padding: 15px 0 15px 0;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.login-modern{
    width: 80%;
    min-height: 65vh;
    background-color: white;
    display: flex;

    justify-content: space-between;
    align-items: center;
    background-size: cover;
    background-position-y: center;
    background-position-x: center; 
    
}
.custom-stepper{
    background-color: white;
    width: 30vw;
    border-radius: 20px;
}
.stepper-header{
    width: 80%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
}
.form-body{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.form-holder-1{
    margin-top: 40px;
    width: 20vw;
    animation: changer 0.4s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.form-holder-4{
    display: none;
    width: 40vw;
    margin-top: 40px;
    animation: changer 0.4s;
}
.stepOn{
    display: block;
}
.stepOff{
    display: none;
}
.btn-c{
  outline: none;
}
.btn-c:focus{
    outline: none;
}
.onHover:hover{
    color: gray;
}
@media only screen and (max-width: 650px){
    .aplikimi-container-cu-1{
        min-height: 120vh;
        display: flex;
        padding: 15px 0 15px 0;
    }
    .login-modern{
        width: 100%;
        height: 100%;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        
    }
    .custom-stepper{
        width: 95vw;
    }
    .form-holder-1{
        width: 70vw;
    }
    .form-holder-2{
        width: 70vw;
    }
    .form-holder-3{
        width: 70vw;
    }
    .form-holder-4{
        width: 70vw;
    }
    .classy{
        font-size: 22px;
    }
}
</style>