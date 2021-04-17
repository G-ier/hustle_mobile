<template>
  <div class="aplikimi-container-cu">
      <v-sheet elevation="15" class="mx-auto py-4 custom-stepper" color="stripe2">
          <h1 class="big-header-white text-center v-fsm mb-7">Log in</h1>
          <div class="form-body pb-2">
            <v-form class="pb-7">  
                <div class="form-holder-1 pb-1">
                    <v-text-field label="Email" outlined class="white--text" color="white" v-model="account.email" :error-messages="emailErrors" required @input="$v.account.email.$touch()"></v-text-field>
                    <v-text-field label="Password" type="password"  color="white" outlined class="white--text" v-model="account.password"></v-text-field>
                    <v-btn @click="forgotten = true" color="lightgray" text class="qs onHover mb-5">Forgot password</v-btn>
                </div>
            </v-form>
            <div class="button-side">
                <v-btn rounded color="stripe1" class="qs third--text btn-c v-fsm" nuxt to="/account/register">Register</v-btn>
                <v-btn rounded color="stripe1" class="btn-c v-fsm" @click="login"><span class="qs white--text" v-if = "loading == false">Log In</span><v-progress-circular indeterminate :size="19" color="amber" v-else></v-progress-circular></v-btn>
            </div>
          </div>
      </v-sheet>
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
        max-width="600"
        v-model="forgotten"
      >
          <v-card>
            <v-toolbar
              color="blue darken-5"
              dark
            >Write the email you want the password reset confirmation to be sent to.</v-toolbar>
            <v-card-text>
                <v-text-field label="Enter email" outlined v-model="Fmail" dense class="mt-10" clearable></v-text-field>
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
import * as firebase from 'firebase/app'
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
                location.href = "/account/drejtuesi";
            } else if (this.$store.state.users.role == "buyer" || this.$store.state.users.role == "seller") {
                location.href = "/account/me";
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

<style>
.v-text-field input{
    color:  white;
}

.aplikimi-container-cu{
    background-image: url("../../assets/img/reserve.png");
    background-size: cover;
    background-position-y: center;
    background-position-x: center;
    width: 100%;
    min-height: 71vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
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
    .aplikimi-container{
        height: 100vh;
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
}
</style>