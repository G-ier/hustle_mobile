<template>
  <div class="main">
      
      <div class="done" v-if="paid == true">
        <h1 class="qs primary--text mb-4">Pagesa u procesua.</h1>
        <div class="fatura header-intro">
          <div class="f-header">
            <p class="qs ma-0 py-1">Fatura</p>
          </div>
          <div class="f-contains mt-4">
            <p class="qs secondary--text">Name: {{identity.emri}}</p>
            <p class="qs secondary--text">Numri: {{identity.numri}}</p>
            <p class="qs secondary--text">Adresa: {{identity.adresa}}</p>
            <p class="qs secondary--text">Qyteti: {{identity.qyt}}</p>
            <div class="items" v-for="item in toSell" :key="item.id">
              <p class="qs secondary--text">Produkti {{toSell.indexOf(item)}}</p>
              <p class="qs secondary--text">Produkti: {{item.name}}</p>
              <p class="qs secondary--text">Pershkrimi: {{item.description}}</p>
              <p class="qs secondary--text">Sasia: {{item.quantity}}</p>
              <p class="qs secondary--text">Cmimi: {{item.amount}}</p>
            </div>
          </div>
          <v-btn nuxt to="/account/me/orders" color="primary" class="white--text">Tek lista e blerjeve</v-btn>
        </div>
      </div>
      <h1 class="qs primary--text mb-4" v-if="loading == true">Prisni per procesimin e pageses</h1>
      <v-progress-circular
        :rotate="-90"
        :size="100"
        :width="15"
        :value="value"
        color="primary"
        v-if="loading == true"
      >
      {{ value }}%
    </v-progress-circular>
  </div>
</template>

<script>
import Cookie from 'js-cookie';
import Cookies from 'js-cookie';
import * as firebase from 'firebase';
import 'firebase/firestore';
export default {
    head(){
        return{
            title: "Success",
            meta: [
                {
                    name: "description",
                    hid: "description",
                    content: "Success page"
                }
            ]
        }
    },
    data(){
        return{
            loading: true,
            interval: {},
            value: 0,
            show: false,
            paid: false,
            cookie: null,
            toSell: this.$store.state.users.cart
        }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      const cookieNeu = Cookie.get('paypal_return');
      const cookieId = Cookie.get("payment_identity");

      if(!cookieId && !cookieNeu){
        return;
      }
      //console.log(cookieNeu);
      const cookieD = JSON.parse(cookieNeu);
      const cookieI = JSON.parse(cookieId);
      //console.log(cookieD);
      this.cookie = cookieD;
      this.identity = cookieI;
      const cookiey = JSON.parse(Cookies.get("user"));
      this.toSell.forEach(async fell => {
          var false5 = fell.name.split(" |");
          var fellDesc = fell.description.split("from ");
          var author = fellDesc[1];
          const orderID = Math.random().toString(36).substring(2,30);
          const docName = false5[0] + orderID;
          await firebase.firestore().collection('orders').doc(`${docName}`).set({
              from: cookiey.username,
              payee_email: this.$store.state.users.user.email,
              fulfilled: false,
              onto: author.toLowerCase(),
              address: cookieI.adresa,
              qyteti: cookieI.qyt,
              number: cookieI.numri,
              orderID: docName,
              orders: {
                item: false5[0],
                paid: true,
                price: fell.amount * fell.quantity,
                quantity: fell.quantity,
                type: "online-payment"
              }
          })
      });

      this.$store.dispatch("users/removeCart");
      Cookie.remove("cart_hustle");
      Cookie.remove("payment_identity");
      Cookie.remove("paypal_return");

      this.interval = setInterval(() => {
        if (this.value === 100) {
          this.loading = false;
          this.show = true;
          this.paid = true;
        }
        this.value += 10
      }, 700)
    }
}
</script>

<style>
.main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100vw;
    min-height: 71vh;
    padding: 15px 0 15px 0;
}
.done{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fatura{
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border: 1px solid #bf081d;
}
.f-header{
  background-color: #bf081d;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.f-contains{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}
</style>