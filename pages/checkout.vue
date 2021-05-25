<template>
  <div class="aplikimi-container-cu-1">
    <v-sheet elevation="12" class="mx-auto py-4 custom-stepper" color="stripe1" v-if="inload == false">
        <div class="form-body pb-2">
          <div class="ch-t">
            <h1 class="qs checkoutTitle white--text">Pagesa</h1>
        </div>
          <div class="paypal-divi mt-3" id="paypal-button-container" :class="{'display-off': dun == false, 'display-on': dun == true}">
              
          </div>
          <div class="paypal-divi display-on mt-3" v-if="dun == false">
              <v-btn class="rounded-lg qs secondary--text" color="white" @click="dunn">Paguaj online</v-btn>
          </div>
          <div class="or-paypal mt-5 py-2" v-if="user">
              <p class="qs white--text">------------or------------</p>
          </div>
          <div class="paypal-divi display-on mt-3" v-if="user">
              <v-btn large class="qs secondary--text rounded-lg" color="white" @click="startUp">Paguaj ne dore</v-btn>
          </div>
          <div class="or-paypal mt-5 py-2" v-if="!user">
              <p class="qs white--text">------------or------------</p>
          </div>
          <div class="paypal-divi display-on mt-3" v-if="!user">
              <v-btn large class="qs white--text rounded-lg" color="stripe2" disabled>Logohu per te paguar ne dore</v-btn>
          </div>
        </div>
    </v-sheet> 
    <v-dialog
        transition="dialog-top-transition"
        max-width="300"
        v-model="inhandp"
        style="z-index: 9898989898987987987987897;"
        >
            <v-card color="white">
            <v-toolbar
                color="secondary"
                dark
                class="qs s20"
            >Kryej pagesen ne dore.</v-toolbar>
            <v-card-text>
                <v-text-field label="Numri i telefonit" outlined v-model="num" :value="num" light dense color="secondary" class="mt-10" clearable :error-messages="numberErrors" required @input="$v.num.$touch()"></v-text-field>
                <v-select :items="itemsy" color="secondary" class="fully secondary--text" label="Qyteti" light outlined v-model="qyteti" :error-messages="qytetiErrors" required @input="$v.qyteti.$touch()"></v-select>
                <v-text-field label="Adresa" outlined v-model="note" dense light color="secondary" class="mt-10" clearable :error-messages="noteErrors" required @input="$v.note.$touch()"></v-text-field>
            </v-card-text>
            <v-card-actions class="justify-end">
                <v-btn
                text
                @click="inhand"
                :loading = "loading2"
                color="secondary"
                >Finalizo</v-btn>
            </v-card-actions>
            </v-card>
    </v-dialog>
    <v-dialog
        transition="dialog-top-transition"
        max-width="300"
        v-model="numryTab"
        style="z-index: 9898989898987987987987897;"
        >
            <v-card color="secondary">
            <v-card-title>
                <h3 class="qs white--text mb-4">Konfirmo te dhenat</h3>
                <v-text-field label="Emri i marresit" outlined v-model="emr" dark dense color="white" class="mt-1" clearable :error-messages="emrErrors" required @input="$v.emr.$touch()"></v-text-field>
                <v-text-field label="Numri i telefonit" outlined v-model="namber" dark dense color="white" class="mt-1" clearable :error-messages="namberErrors" required @input="$v.namber.$touch()"></v-text-field>
                <v-text-field label="Adresa" outlined v-model="rrug" dark dense color="white" class="mt-1" clearable :error-messages="rrugErrors" required @input="$v.rrug.$touch()"></v-text-field>
                <v-text-field label="Qyteti" outlined v-model="qyt" dark dense color="white" class="mt-1" clearable :error-messages="qytErrors" required @input="$v.qyt.$touch()"></v-text-field>            
            </v-card-title>
            <v-card-actions class="justify-end">
                <v-btn
                text
                @click="finalizo"
                >Konfirmo</v-btn>
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
    <v-progress-circular
        :rotate="-90"
        :size="150"
        :width="3"
        color="primary"
        indeterminate
        v-if="inload == true"
      >
        Loading...
    </v-progress-circular>
  </div>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required, email, numeric} from 'vuelidate/lib/validators'
import * as firebase from 'firebase/app'
import 'firebase/firestore';
import Cookies from 'js-cookie';
import Cookie from 'js-cookie';

export default {
  mixins: [validationMixin],
  head(){
    return{
      title: "Checkout",
      script: [
        {
            hid: 'paypal',
            src: "https://www.paypal.com/sdk/js?client-id=ARPCksi8G1iUcJY2fJeJkzPvKF0EmJiCVa4GzfbfJPKvucvg7ezxhXa88tMkK-GzmgYaCyCaw8O6p0kX&currency=USD",
            defer: true,
            callback: () => {this.isPaypalLoaded = true}
        }
      ]
    }
  },
  data () {
    return {
      inload: true,
      dun: false,
      itemsy: [
            "Bajram Curri",
            "Bajzë",
            "Ballsh",
            "Berat",
            "Bilisht",
            "Bulqizë",
            "Burrel",
            "Cërrik",
            "Çorovodë",
            "Delvinë",
            "Divjakë",
            "Durrës",
            "Elbasan",
            "Ersekë",
            "Fier",
            "Fierzë",
            "Finiq",
            "Fushë-Arrëz",
            "Fushë-Krujë",
            "Gjirokastër",
            "Gramsh",
            "Himarë",
            "Kamëz",
            "Kavajë",
            "Këlcyrë",
            "Klos",
            "Konispol",
            "Koplik",
            "Korçë",
            "Krastë",
            "Krrabë",
            "Krujë",
            "Krumë",
            "Kuçovë",
            "Kukës",
            "Kurbnesh",
            "Laç",
            "Leskovik",
            "Lezhë",
            "Libohovë",
            "Librazhd",
            "Lushnjë",
            "Maliq",
            "Mamurras",
            "Manëz",
            "Memaliaj",
            "Milot",
            "Orikum",
            "Patos",
            "Peqin",
            "Përmet",
            "Peshkopi",
            "Pogradec",
            "Poliçan",
            "Prrenjas",
            "Pukë",
            "Reps",
            "Roskovec",
            "Rrëshen",
            "Rrogozhinë",
            "Rubik",
            "Sarandë",
            "Selenicë",
            "Shëngjin",
            "Shijak",
            "Shkodër",
            "Sukth",
            "Tepelenë",
            "Tirana",
            "Ulëz",
            "Ura Vajgurore",
            "Vau i Dejës",
            "Vlorë",
            "Vorë"
      ],
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
      num: "",
      qyteti: "",
      clean: false,
      submitStatus: null,
      numry: null,
      numryTab: false,
      completedP: false,
      loopHole: 0,
      qyt: "",
      namber: "",
      rrug: "",
      emr: "",
      dummy: 0
    };
  },
   methods: {
    dunn: async function(){
        if(this.$store.state.users.user){
            const dddddd = await firebase.firestore().collection('users').doc(this.email[0]).get();
            const d = dddddd.data();

            this.numryTab = true;

            this.rrug = d.location;
            this.namber = d.numri;
            this.qyt = d.qyteti;
            this.emr = d.username;
        } else {
            this.numryTab = true;
        }
    },
    checkout () {
      this.$refs.checkoutRef.redirectToCheckout({
        sessionId: this.sessionId
      }).then(function(result){
        console.log(result);
      });
    },
    startUp: async function(){
        const dddddd = await firebase.firestore().collection('users').doc(this.email[0]).get();
        const d = dddddd.data();

        this.note = d.location;
        this.num = d.numri;
        this.qyteti = d.qyteti;

        this.inhandp = true;
    },
    finalizo: function(){
        this.$v.namber.$touch();
        this.$v.rrug.$touch();
        this.$v.qyt.$touch();
        this.$v.emr.$touch();

        if (this.$v.namber.$invalid || this.$v.rrug.$invalid || this.$v.qyt.$invalid || this.$v.emr.$invalid ) {
            return;
        } else {

            const dora = {
                "numri": this.namber,
                "adresa": this.rrug,
                "qyt": this.qyt,
                "emri": this.emr
            }

            Cookie.set("payment_identity", JSON.stringify(dora));

            this.numryTab = false;
            this.completedP = true;
            this.dun = true;
        }
    },
    /*
    doTheTing: function(details){
        this.numryTab = true;
                
        while (completedP == false) {
            loopHole++;
        }

        this.toSell.forEach(fell => {
            var false5 = fell.name.split("|");
            var false4 = false5[1];
            console.log(false4);
            firebase.firestore().collection('orders').doc(Math.random().toString(36).substring(2,7)).set({
                from: details.payer.given_name,
                fulfilled: false,
                onto: false4,
                address: details.payer.name.address.street_address,
                qyteti: details.payer.name.address.locality,
                number: this.numry,
                orders: [
                    {
                        item: fell.name,
                        paid: true,
                        price: fell.amount * fell.quantity,
                        quantity: fell.quantity,
                        type: "online-payment"
                    }
                ]
            })
        });

        this.$store.dispatch("users/removeCart");
        Cookies.remove("cart_hustle");
    },
    */
    inhand: async function(){

        this.$v.num.$touch();
        this.$v.note.$touch();

        if (this.$v.num.$invalid || this.$v.note.$invalid) {
            this.submitStatus = 'ERROR'
            return;
        } else {
            console.log("gucci");
        }

        const cookie = JSON.parse(Cookies.get("user"));
        this.inhandp = true;
        this.loading2 = true;
        this.toSell.forEach(async (fell) => {
            var false5 = fell.name.split(" |");
            var fellDesc = fell.description.split("from ");
            console.log(fellDesc[1]);
            var author = fellDesc[1];
            console.log(JSON.stringify(fell));
            const orderID = Math.random().toString(36).substring(2,30);
            const docName = false5[0] + orderID;
            await firebase.firestore().collection('orders').doc(`${docName}`).set({
                from: cookie.username,
                fulfilled: false,
                onto: author.toLowerCase(),
                address: this.note,
                qyteti: this.qyteti,
                number: this.num,
                orderId: docName,
                orders: {
                    item: false5[0],
                    paid: false,
                    price: fell.amount * fell.quantity,
                    quantity: fell.quantity,
                    type: "Ne dore"
                },
                payee_email: this.$store.state.users.user.email ? this.$store.state.users.user.email : "Anonim"
            })
        });

        

        //Cookie.set("payment_identity", JSON.stringify(dora));
        this.loading2 = false;
        this.inhandp = false;
        this.successToHand = true;
        
        this.$store.dispatch("users/removeCart");
        Cookies.remove("cart_hustle");

        this.$router.push({path: "/success"});

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
      },
      note: {
          required
      },
      qyteti: {
          required
      },
      num: {
          numeric,
          required
      },
      numry: {
          numeric,
          required
      },
      qyt: {
          required
      },
      namber: {
          numeric,
          required
      },
      rrug: {
          required
      },
      emr: {
          required
      }
  },
  computed: {
      emailErrors () {
          const errors = []
          if (!this.$v.account.email.$dirty) return errors
          !this.$v.account.email.email && errors.push('Must be valid e-mail')
          !this.$v.account.email.required && errors.push('Email eshte i detyrueshem')
          return errors
      },
      noteErrors () {
          const errors = []
          if (!this.$v.note.$dirty) return errors
          !this.$v.note.required && errors.push('Adresa eshte i detyrueshem')
          return errors
      },
      numberErrors () {
          const errors = []
          if (!this.$v.num.$dirty) return errors
          !this.$v.num.required && errors.push('Numri eshte i detyrueshem')
          !this.$v.num.numeric && errors.push('Numbers only!')
          return errors
      },
      numryErrors () {
          const errors = []
          if (!this.$v.numry.$dirty) return errors
          !this.$v.numry.required && errors.push('Numri eshte i detyrueshem')
          !this.$v.numry.numeric && errors.push('Numbers only!')
          return errors
      },
      qytetiErrors () {
          const errors = []
          if (!this.$v.qyteti.$dirty) return errors
          !this.$v.qyteti.required && errors.push('Qyteti eshte i detyrueshem')
          return errors
      },
      qytErrors () {
          const errors = []
          if (!this.$v.qyt.$dirty) return errors
          !this.$v.qyt.required && errors.push('Qyteti eshte i detyrueshem')
          return errors
      },
      namberErrors () {
          const errors = []
          if (!this.$v.namber.$dirty) return errors
          !this.$v.namber.numeric && errors.push('Vetem numra')
          !this.$v.namber.required && errors.push('Numri eshte i detyrueshem')
          return errors
      },
      rrugErrors () {
          const errors = []
          if (!this.$v.rrug.$dirty) return errors
          !this.$v.rrug.required && errors.push('Adresa eshte e detyrueshem')
          return errors
      },
      emrErrors () {
          const errors = []
          if (!this.$v.emr.$dirty) return errors
          !this.$v.emr.required && errors.push('Emri eshte i detyrueshem')
          return errors
      }
  },
  mounted(){
      if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
            this.inload = false;
            localStorage.removeItem('reloaded');
        } else {
            // Set a flag so that we know not to reload the page twice.
            this.inload = true;
            localStorage.setItem('reloaded', '1');
            location.reload();
        }
      paypal.Buttons({
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                    amount: {
                        value: '0.01'
                    }
                    }]
                });
            },
            onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                //alert('Transaction completed by ' + details.payer.name.given_name);
                Cookie.set("paypal_return", details.payer);
                location.href = "/success";
            });
            }
        }).render('#paypal-button-container');
      
  }
};
</script>

<style>
.v-text-field input{
    color:  white;
}
.display-off{
    display: none;
}
.display-on{
    display: flex;
}
.aplikimi-container-cu-1{
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
}
.custom-stepper{
    width: 320px;
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
    justify-content: center;
    align-items: center;
    width: 70%;
}
@media only screen and (min-width: 850px){
.miniature{
        font-size: 13px;
        color: darkgray;
    }
    .full-width{
        width: 100%;
    }
    .display-off{
        display: none;
    }
    .display-on{
        display: flex;
    }
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
        text-align: center;
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
        justify-content: center;
        align-items: center;
        width: 70%;
    }
}
</style>