<template>
  <div class="aplikimi-container-cu-1">
      <div class="login-modern">
          <v-sheet elevation="15" class="py-4 custom-stepper" color="secondary">
            <h1 class="classy text-center qs v-fsm mb-7">Settings</h1>
            <div class="form-body pb-2">
                <b-field label="Display Name" custom-class="white--text" v-model="account.displayName" expanded>
                    <b-input></b-input>
                </b-field>
                <b-field label="Email" custom-class="white--text"  v-model="account.email" expanded>
                    <b-input></b-input>
                </b-field>
                <div class="button-side mt-7">
                    <v-btn rounded color="white" text class="qs white--text btn-c v-fsm" nuxt >Change password</v-btn>
                    <v-btn rounded color="white" class="btn-c v-fsm" @click="changeU"><span class="qs secondary--text" v-if = "loading == false">Change</span><v-progress-circular indeterminate :size="19" color="amber" v-else></v-progress-circular></v-btn>
                </div>
            </div>
        </v-sheet>
      </div>
      <v-snackbar v-model="feed">
        Te ndryshuara me sukses!
          <template v-slot:action="{ attrs }">
            <v-btn
            color="yellow"
            text
            v-bind="attrs"
            @click="feed = false"
            >
            Close
            </v-btn>
        </template>
      </v-snackbar> 
  </div>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required, email} from 'vuelidate/lib/validators'
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
    async asyncData({store}){
        const email = store.state.users.user.email;

        const user = await firebase.firestore().collection('users').where("email", "==", email).get();
        const userParsed = user.docs.map(doc => doc.data());

        return{
            user: userParsed[0],
            fumail: userParsed[0].email.split('@'),
        }
    },
    mixins: [validationMixin],
    data(){
        return{
            steps: 4,
            currentStep: 1,
            account: {
                dispalyName:'',
                email: '',
                password: '',
            },
            error: '',
            loading: false,
            dialog: false,
            forgotten: false,
            feed: false
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
        changeU: async function(){

            this.loading = true;

            if(this.account.displayName == "" && this.account.email == ""){
                return;
            }
            else if(this.account.displayName == "" && this.account.email != ""){
                await firebase.firestore().collection('users').doc(this.fumail[0]).update({
                    username: this.user.username,
                    email: this.account.email,
                    location: this.user.location,
                    numri: this.user.numri,
                    password: this.user.password,
                    photo: this.user.photo,
                    qyteti: this.user.qyteti,
                    role: this.user.role
                    
                });
            }
            else if(this.account.displayName != "" && this.account.email == ""){
                await firebase.firestore().collection('users').doc(this.fumail[0]).update({
                    username: this.user.username,
                    email: this.user.email,
                    location: this.user.location,
                    numri: this.user.numri,
                    password: this.user.password,
                    photo: this.user.photo,
                    qyteti: this.user.qyteti,
                    role: this.user.role
                    
                });
            }

            this.loading = false;
        },
        sendConfirm: function(){
            this.forgotten = false;
            this.feed = true;
            firebase.auth().sendPasswordResetEmail(this.Fmail);
        }
    },
    head(){
        return{
            title: "Log in | Platforma X",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Hyrja per ne platformen e-learning"
                },
                {
                    name: "keywords",
                    content: "shkolla e drejtoreve, aplikim, CSL, AMU, AML"
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
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.login-modern{
    width: 80%;
    min-height: 71vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    background-image: url('../../../assets/img/tingting.png');
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
        height: 70vh;
        display: flex;
    }
    .login-modern{
        width: 100%;
        min-height: 51vh;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
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