<template>
  <div class="aplikimi-container-cu-1">
      <div class="login-modern">
          <v-sheet elevation="15" class="py-4 custom-stepper" color="secondary">
            <h1 class="classy text-center qs v-fsm mb-7">Log in</h1>
            <div class="form-body pb-2">
                <v-form class="pb-7">  
                    <div class="form-holder-1 pb-1">
                        <v-text-field label="Email" outlined class="white--text" color="white" v-model="account.email" :error-messages="emailErrors" required @input="$v.account.email.$touch()"></v-text-field>
                        <v-text-field label="Password" type="password"  color="white" outlined class="white--text" v-model="account.password" @keydown.enter="login"></v-text-field>
                        <v-btn @click="forgotten = true" color="lightgray" text class="qs onHover mb-5">Forgot password</v-btn>
                    </div>
                </v-form>
                <div class="button-side">
                    <v-btn rounded color="white" class="qs secondary--text btn-c v-fsm" nuxt to="/account/register">Register</v-btn>
                    <v-btn rounded color="white" class="btn-c v-fsm" @click="login"><span class="qs secondary--text" v-if = "loading == false">Log In</span><v-progress-circular indeterminate :size="19" color="amber" v-else></v-progress-circular></v-btn>
                </div>
            </div>
        </v-sheet>
      </div>
      <v-dialog v-model="dialog" max-width="240">
            <v-card color="secondary">
                <v-card-title class="qs headline">Unsuccessful!</v-card-title>
                <v-card-text class="qs">Login failed!</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="qs" @click="dialog = false" text >Ok.</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog> 
      <v-dialog
        transition="dialog-top-transition"
        max-width="500"
        v-model="forgotten"
      >
          <v-card color="secondary">
            <v-toolbar
              color="secondary"
              dark
              elevation="0"
            >Emaili ne te cilin konfirmimi i riperseritjes do te cohet.</v-toolbar>
            <v-card-text>
                <v-text-field label="Enter email" outlined v-model="Fmail" color="white" dense class="mt-10" clearable></v-text-field>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="sendConfirm"
              >Send</v-btn>
            </v-card-actions>
          </v-card>
      </v-dialog>
      <v-snackbar v-model="feed">
        Email sent successfully!
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
import firebase from 'firebase'
import 'firebase/auth'
export default {
    mixins: [validationMixin],
    data(){
        return{
            steps: 4,
            currentStep: 1,
            account: {
                email: '',
                password: '',
            },
            error: '',
            loading: false,
            dialog: false,
            forgotten: false,
            feed: false,
            Fmail: "",
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
        login: async function(){
            this.loading = true;
            this.$v.account.email.$touch();
            await this.$store.dispatch("users/login", this.account).catch((err) => {
                this.error = err.code;   
            });
            if(this.$store.state.users.role == "admin"){
                console.log(this.$store.state.users.role);
                location.assign("/account/drejtuesi");
            } else if (this.$store.state.users.role == "buyer" || this.$store.state.users.role == "seller") {
                location.assign("/account/me");
            } else {
                this.dialog = true;
                this.loading = false;
            }
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
    background-image: url('../../assets/img/login.png');
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
        background-image: none;
        
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