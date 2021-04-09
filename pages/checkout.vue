<template>
  <div class="aplikimi-container-cu">
      <div class="ch-t">
          <h1 class="qs checkoutTitle">Checkout</h1>
      </div>
      <v-sheet elevation="12" class="mx-auto py-4 custom-stepper" color="stripe1">
          <div class="form-body pb-2">
            <v-form class="pb-7">  
                <div class="form-holder-1 pb-1">
                    <v-text-field label="Your Email" outlined class="white--text" color="white" v-model="account.email" :error-messages="emailErrors" required @input="$v.account.email.$touch()"></v-text-field>
                    <v-text-field label="Your Password" type="password" color="white" outlined class="white--text" v-model="account.password"></v-text-field>
                    <v-select :items = "items" v-model="account.role" label="Choose your role" dense outlined></v-select>
                </div>
            </v-form>
            <div class="button-side">
                <v-btn rounded color="white" class="btn-c v-fsm" @click="register"><span class="qs stripe2--text" v-if = "loading == false">Pay</span><v-progress-circular indeterminate :size="19" color="amber" v-else></v-progress-circular></v-btn>
            </div>
            <div class="or-paypal mt-5">
                <p class="qs white--text">------------or-------------</p>
            </div>
            <div class="paypal-divi mt-3">
                <v-btn large class="qs white--text rounded-lg" color="stripe2">PAYPAL</v-btn>
            </div>
          </div>
      </v-sheet> 
      <v-dialog v-model="dialog" max-width="240">
            <v-card color="blue darken-2">
                <v-card-title class="qs headline">Few more steps!</v-card-title>
                <v-card-text class="qs">Account creation is successful. Please verify your email by clicking the link provided to you. In the meantime, please head to the login page.</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="qs" @click="redir" text >To Login</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
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
            items: ["Buyer", "Seller"],
            account: {
                email: '',
                password: '',
                role: '',
            },
            error: 'None',
            loading: false,
            dialog: false,
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
        register: async function(){
            this.loading = true;
            this.$v.account.email.$touch();
            await this.$store.dispatch("users/register", this.account);
            this.dialog = true;
        },
        redir: function (){
            location.href="/account";
        }
    },
    head(){
        return{
            title: "Checkout | Platforma X",
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
    background-image: url('../assets/img/checkout.png');
    background-size: cover;
    background-position-y: center;
    background-position-x: center;
    width: 100%;
    min-height: 71vh;
    padding: 25px 0 25px 0;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
}
.ch-t{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 80vw;
}
.checkoutTitle{
    color: white;
}
.custom-stepper{
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
}
.form-holder-2{
    display: none;
    width: 20vw;
    margin-top: 40px;
    animation: changer 0.4s;
}
.form-holder-3{
    display: none;
    width: 20vw;
    margin-top: 40px;
    animation: changer 0.4s;
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
.or-paypal{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.paypal-divi{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
}
@media only screen and (max-width: 650px){
    .aplikimi-container{
        height: 100vh;
    }
    .custom-stepper{
        width: 80vw;
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