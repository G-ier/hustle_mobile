<template>
  <div class="aplikimi-container-cu-1">
    <div class="ch-t">
        <h1 class="qs checkoutTitle">Pagesa</h1>
    </div>
    <v-sheet elevation="12" class="mx-auto py-4 custom-stepper" color="stripe1">
        <div class="form-body pb-2">
          <v-form class="pb-1">  
              <div class="form-holder-1 pb-1">
                  <v-text-field label="Your Email" outlined class="white--text" color="white" v-model="account.email" :error-messages="emailErrors" required @input="$v.account.email.$touch()"></v-text-field>
                  <v-text-field label="Your Password" type="password" color="white" outlined class="white--text" v-model="account.password"></v-text-field>
              </div>
          </v-form>
          <div class="button-side">
              <v-btn rounded color="white" class="btn-c v-fsm" @click="checkout"><span class="qs stripe2--text" v-if = "loading == false">Paguaj me karte</span><v-progress-circular indeterminate :size="19" color="amber" v-else></v-progress-circular></v-btn>
          </div>
          <div class="or-paypal mt-5 py-2">
              <p class="qs white--text">------------or------------</p>
          </div>
          <div class="paypal-divi mt-3" id="paypal-button-container">
              
          </div>
          <div class="or-paypal mt-5 py-2" v-if="user">
              <p class="qs white--text">------------or------------</p>
          </div>
          <div class="paypal-divi mt-3" v-if="user">
              <v-btn large class="qs white--text rounded-lg" color="stripe2" @click="inhandp = true">Paguaj ne dore</v-btn>
          </div>
          <div class="or-paypal mt-5 py-2" v-if="!user">
              <p class="qs white--text">------------or------------</p>
          </div>
          <div class="paypal-divi mt-3" v-if="!user">
              <v-btn large class="qs white--text rounded-lg" color="stripe2" disabled>Logohu per te paguar ne dore</v-btn>
          </div>
        </div>
    </v-sheet> 
      <stripe-checkout
      ref="checkoutRef"
      :pk="pk"
      :items="items"
      :sessionId="sessionId"
      :successUrl="successUrl"
      :cancelUrl="cancelUrl"
      :mode="mode"
    >
      <template slot="checkout-button">
        <button @click="checkout">Shut up and take my money!</button>
      </template>
    </stripe-checkout>
    <v-dialog
        transition="dialog-top-transition"
        max-width="600"
        v-model="inhandp"
        >
            <v-card color="secondary">
            <v-toolbar
                color="secondary"
                dark
            >Make payment to hand.</v-toolbar>
            <v-card-text>
                <v-text-field label="Enter address" outlined v-model="note" dense color="white" class="mt-10" clearable :error-messages="noteErrors" required @input="$v.note.$touch()"></v-text-field>
                <v-text-field label="Enter cellphone number" outlined v-model="num" dense color="white" class="mt-10" clearable :error-messages="numberErrors" required @input="$v.num.$touch()"></v-text-field>
            </v-card-text>
            <v-card-actions class="justify-end">
                <v-btn
                text
                @click="inhand"
                :loading = "loading2"
                >Send</v-btn>
            </v-card-actions>
            </v-card>
    </v-dialog>
    <v-dialog
        transition="dialog-top-transition"
        max-width="300"
        v-model="successToHand"
        >
            <v-card color="secondary">
            <v-card-title>
                Success!
            </v-card-title>
            <v-card-actions class="justify-end">
                <v-btn
                text
                @click="successToHand = false"
                >Close</v-btn>
            </v-card-actions>
            </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required, email, numeric} from 'vuelidate/lib/validators'
import * as firebase from 'firebase/app'
import 'firebase/firestore';
import Cookies from 'js-cookie';
export default {
  mixins: [validationMixin],
  head(){
    return{
      title: "Checkout",
      script: [
        {
          hid: 'stripe',
          src: 'https://js.stripe.com/v3/',
          defer: true,
          // Changed after script load
          callback: () => { this.isStripeLoaded = true } 
        },
        {
            hid: 'paypal',
            src: "https://www.paypal.com/sdk/js?client-id=AfiEGhDW75HGoJvK8PdWKV-BsunzhkTJWi5sCIjW9bU0J9D4ypIvxm6nenlEBVf2-0u7SQa-H9XhRxpd",
            defer: true,
            callback: () => {this.isPaypalLoaded = true}
        }
      ]
    }
  },
  mounted(){
      paypal.Buttons().render('#paypal-button-container');
  },
  data () {
    return {
      pk: process.env.STRIPE_PK,
      user: this.$store.state.users.user,
      inhandp: false,
      note: "",
      email: this.$store.state.users.user ? this.$store.state.users.user.email.split("@") : "undefined",
      sessionId: "",
      isStripeLoaded: false,
      isPaypalLoaded: false,
      mode: "payment",  
      toSell: this.$store.state.users.cart,
      items: [
        
      ],
      lineItems: this.$store.state.users.cart,
      successUrl: 'http://localhost:3000/success',
      cancelUrl: 'http://localhost:3000/cancel',
      account: {
          email: '',
          password: '',
      },
      loading: false,
      loading2: false,
      dialog: false,
      successToHand: false,
      num: null,
      clean: false,
      submitStatus: null
    };
  },
   methods: {
    checkout () {
      this.$refs.checkoutRef.redirectToCheckout({
        sessionId: this.sessionId
      }).then(function(result){
        console.log(result);
      });
    },
    inhand: function(){
        this.$v.num.$touch();
        this.$v.num.$touch();

        if (this.$v.num.$invalid || this.$v.note.$invalid) {
            this.submitStatus = 'ERROR'
            return;
        } else {
            console.log("gucci");
        }

        this.inhandp = true;
        this.loading2 = true;
        this.toSell.forEach(fell => {
            var false5 = fell.name.split("|");
            var false4 = false5[1];
            console.log(false4);
            firebase.firestore().collection('orders').doc(Math.random().toString(36).substring(2,7)).set({
                from: this.email[0],
                fulfilled: false,
                onto: false4,
                address: this.note,
                number: this.num,
                orders: [
                    {
                        item: fell.name,
                        paid: false,
                        price: fell.amount * fell.quantity,
                        type: "tohand"
                    }
                ]
            })
        });

        this.loading2 = false;
        this.inhandp = false;
        this.successToHand = true;
        
        this.$store.dispatch("users/removeCart");
        Cookies.remove("cart_hustle");

    }
  },
  created(){
      this.$axios.post('https://us-central1-fertility-1e091.cloudfunctions.net/checkoutStripe', {
        items: this.lineItems
      }).then((response) => {
        this.sessionId = response.data.id;
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      });

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
      },
      note: {
          required
      },
      num: {
          numeric,
          required
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
      noteErrors () {
          const errors = []
          if (!this.$v.note.$dirty) return errors
          !this.$v.note.required && errors.push('Address is required')
          return errors
      },
      numberErrors () {
          const errors = []
          if (!this.$v.num.$dirty) return errors
          !this.$v.num.required && errors.push('Number is required')
          !this.$v.num.numeric && errors.push('Numbers only!')
          return errors
      },
  },
};
</script>

<style>
.v-text-field input{
    color:  white;
}

.aplikimi-container-cu-1{
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
@media only screen and (min-width: 850px){
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
        justify-content: center;
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
}
</style>