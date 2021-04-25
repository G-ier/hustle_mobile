<template>
  <nav>
      <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      temporary
      color="red darken-4"
    >
      <v-img :aspect-ratio="16/9" class="bg-secondary">

      </v-img>
      <v-list-item to="/" router exact active-class="white--text">
        <v-list-item-action>
            <v-icon>mdi-circle</v-icon>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title class="v-fsm">Faqja kryesore</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group prepend-icon="mdi-page-previous-outline" :value="false" color="white">
        <template v-slot:activator>
            <v-list-item-title class="v-fsm">Kategorite</v-list-item-title>
        </template>
        <v-list-group sub-group color="white">
          <template v-slot:activator>
              <v-list-item-title class="v-fsm">Elektronike</v-list-item-title>
          </template>
          <v-list-item to="/kategorite/elektronike/tv-dhe-video" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">TV dhe Video</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/elektronike/audio-shtepiake" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Audio-shtepiake</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/elektronike/kamera" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Kamera, Foto, Video</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/elektronike/telefon" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Telefon & Aksesore</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/elektronike/video-lojra" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Video-Lojra</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/elektronike/makina" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Elektronike Makinash</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group sub-group color="white">
          <template v-slot:activator>
              <v-list-item-title class="v-fsm">Kancelari</v-list-item-title>
          </template>
          <v-list-item to="/kategorite/kancelari/zyra" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Produkte zyrash</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/kancelari/shkollore" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Produkte shkollore</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/kancelari/printer" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Printer</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/kancelari/projektor" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Projektor</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group sub-group color="white">
          <template v-slot:activator>
              <v-list-item-title class="v-fsm">Libra</v-list-item-title>
          </template>
          <v-list-item to="/kategorite/libra/libra/" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Libra</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group sub-group color="white">
          <template v-slot:activator>
              <v-list-item-title class="v-fsm">Kompjutera/Teknologji</v-list-item-title>
          </template>
          <v-list-item to="/kategorite/computers/computers" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Kompjutera dhe tableta</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/computers/monitor" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Monitor</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/computers/pjese" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Pjese kompjuterash</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/computers/aksesore" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Aksesore</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group sub-group color="white">
          <template v-slot:activator>
              <v-list-item-title class="v-fsm">Kozmetike</v-list-item-title>
          </template>
          <v-list-item to="/kategorite/kozmetike/kozmetike/" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Kozmetike</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group sub-group color="white">
          <template v-slot:activator>
              <v-list-item-title class="v-fsm">Lodra/Femijje</v-list-item-title>
          </template>
          <v-list-item to="/kategorite/lodra/lodra" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Lodra</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/lodra/bebe" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Bebe</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group sub-group color="white">
          <template v-slot:activator>
              <v-list-item-title class="v-fsm">Sport</v-list-item-title>
          </template>
          <v-list-item to="/kategorite/sport/palester" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Palester & Fitness</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/sport/gjueti" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Gjueti/Peshkim</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/sport/atletike" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Rroba atletike</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/sport/golf" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Golf</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group sub-group color="white">
          <template v-slot:activator>
              <v-list-item-title class="v-fsm">Mobilje/Garden</v-list-item-title>
          </template>
          <v-list-item to="/kategorite/mobilje/shtepiake" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Shtepiake</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/mobilje/kuzhina" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Kuzhina</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/mobilje/dyshek" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Dyshek & Banje</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/mobilje/outdoor" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Kopesht & Outdoor</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/mobilje/kafshesh" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Produkte kafshesh</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/mobilje/vegla" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Vegla pune</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group sub-group color="white">
          <template v-slot:activator>
              <v-list-item-title class="v-fsm">Rroba dhe fashion</v-list-item-title>
          </template>
          <v-list-item to="/kategorite/fashion/meshkuj" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Meshkuj</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/fashion/femra" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Femra</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list-group>
      <v-list-item to="/account/me" router exact active-class="white--text">
        <v-list-item-action>
            <v-icon>mdi-login</v-icon>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title class="v-fsm">Faqja e klientit</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/account/register" router exact active-class="white--text">
        <v-list-item-action>
            <v-icon>mdi-account-plus</v-icon>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title class="v-fsm">Behu shites</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/rreth-nesh" router exact active-class="white--text">
        <v-list-item-action>
            <v-icon>mdi-information-outline</v-icon>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title class="v-fsm">Rreth nesh</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      dark
      color="primary"
      :height="height"
      elevation="0"
      class="index-upper"
    >
      <v-skeleton-loader
        class="mx-auto"
        max-width="300"
        type="card"
        loading
      ></v-skeleton-loader>
      <div class="embed">
        <div class="elem-row">
          <PreHeader />
        </div>
        <div class="main-row">
          <div class="burger-div">
            <div class="inner-burger-2 pt-1">
              <v-btn icon class="btn-c-o menu-btn" @click.stop="drawer = !drawer" height="30" width="30">
                <v-icon color="white" size="28">mdi-menu</v-icon>
              </v-btn>
            </div>
          </div>
          <v-spacer class="spacer-1"></v-spacer>
          <v-toolbar-title>
            <nuxt-link to="/" class="btn-c-o"><span class="ersteSpan white--text qs">COMPANY LOGO</span></nuxt-link>
          </v-toolbar-title>
          <v-spacer />
          
          <v-spacer class="spacer-2"></v-spacer>
          <div class="burger-div-2">
            <div class="inner-burger">
              <v-btn class="qs" icon @click.stop="cartush" width="10" height="10">
                <v-icon color="white">
                  mdi-cart
                </v-icon>
              </v-btn>
            </div>
          </div>
        </div>
        <div class="final-row">
          <div class="good-row">
            <div class="searchy">
              <div class="qs custom-searchy">
                <v-text-field placeholder="Kerko per produkte" class="custom-text-field" color="black" v-model="searchQ" clearable solo dense light rounded height="38" @click:clear="() => {answer = false; searchQ = '';}" @input="changeType" @blur="antiBlur"></v-text-field>
              </div>
              <button class="btn-c-o qs searchy-btn" @click="searchGo"><v-icon color="white">mdi-magnify</v-icon></button>
            </div>
            <div class="results" v-if="answer == true" ref="karuci" @mouseenter="itsover = true" @mouseleave="itsover = false" @mouseout="mouseOut">
              <div class="listings" v-if="sToShow != null">
                <div class="tile" v-for="ting in sToShow.slice(0, 4)" :key="ting.id">
                  <v-btn class="qs secondary--text btn-c-o" text nuxt :to="ting.red" @click="itsover = false; answer = false">{{ting.emri}}</v-btn>
                </div>
                <div class="dontchange" style="display: flex; justify-content: center; align-items: center;">
                  <v-btn small class="white--text rounded-lg" color="secondary" @click="sendToMore">More</v-btn>
                </div>
              </div>
              <div class="listings" v-else>
                <div class="tile">
                  <p class="qs btn-c-o secondary--text">No result.</p>
                </div>
                <div class="dontchange" style="display: flex; justify-content: center; align-items: center;">
                  <v-btn small class="white--text rounded-lg" color="secondary" @click="sendToMore">More</v-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="cartD"
      fixed
      temporary
      right
      color="primary"
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Cart</v-list-item-title>
            <v-list-item-subtitle>Maximum of 10 items</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-list
        dense
        rounded
      >
          <v-list-item v-for="cartItem in cart" :key="cartItem.prodEmri">
            <v-row justify="start" align="center" style="transition: 0.3s">
              <v-col cols="8" align-self="center">
                <v-list-item-title class="qs pb-1"><span class="qs s14">{{cartItem.name}}: {{cartItem.quantity}}</span></v-list-item-title>
              </v-col>
              <v-col cols="2">
                <v-btn icon width="25" height="25" @click="updateCart(cartItem.name, -1)">
                  <v-icon color="white" size="20">mdi-minus</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="2">
                <v-btn icon width="25" height="25" @click="updateCart(cartItem.name, 1)">
                  <v-icon color="white" size="20">mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-list-item>
      </v-list>
      <template v-slot:append v-if="checkoutAval">
        <div class="pa-2">
          <v-btn block color="white" class="qs red--text text--darken-4" nuxt to="/checkout">
            Checkout
          </v-btn>
         </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Gradient from '../assets/img/tilda-gradient.png'
import menuLogo from '../assets/img/HBC.png'
import PreHeader from './PreHeader';
import Cookies from 'js-cookie';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
export default {
    components: {
      PreHeader,
    },
    data(){
        return{
            searchQ: '',
            searchOn: false,
            height: null,
            background: Gradient,
            menuLogo: menuLogo,
            answer: false,
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                icon: 'mdi-apps',
                title: 'Faqja kryesore',
                to: '/'
                },
                {
                icon: 'mdi-chart-bubble',
                title: 'Doktoret',
                to: '/inspire'
                },
                {
                icon: 'mdi-chart-bubble',
                title: 'Teknologjia jone',
                to: '/inspire'
                },
                {
                icon: 'mdi-chart-bubble',
                title: 'Rreth nesh',
                to: '/inspire'
                }
            ],
            miniVariant: false,
            right: true,
            cart: false,
            drop1: false,
            drop2: false,
            drop3: false,
            drop4: false,
            keep1: false,
            keep2: false,
            keep3: false,
            keep4: false,
            sToShow: [],
            cart: this.$store.state.users.cart,
            cartD: false,
            itsover: false
        }
    },
    methods: {
      cartush: function(){
        this.cart = this.$store.state.users.cart;
        
        this.cartD = true;
      },
      searchOnCheck: function(){
        if(this.searchOn == false){
          this.searchOn = true;
        } else {
          this.searchOn = false;
        }
      },
      searchGo: async function(){
        await this.$store.dispatch("users/search", this.searchQ);

        this.answer = true;

        if(this.$store.state.users.red == null){
          this.$router.push({ path: '/search', query: { search: this.searchQ } });
        } else {
          this.$router.push({ path: this.$store.state.users.red });
        }

      },
      sendToMore: function(){
        this.answer = false;

        this.$router.push({ path: '/search', query: { search: this.searchQ } });
      },
      changeType: async function (){
        await this.$store.dispatch("users/change", this.searchQ);

        this.sToShow = this.$store.state.users.result;
        this.answer = true;
        console.log(this.answer);
        console.log(this.sToShow);
      },
      updateCart: async function(cartEmri, cartTimes){

        var cartW = Cookies.get("cart_hustle");

        if(cartW){
          var cartR = JSON.parse(cartW);
        } else {
          var cartR = [];
        }

        const cartNewDetails = {
          cartEmri: cartEmri,
          cartTimes: cartTimes,
          currentCart: cartR
        }
        await this.$store.dispatch("users/updateCart", cartNewDetails);

        this.cart = this.$store.state.users.cart;
      },
      getCart: function (){
        
        var cartToJSONIFY = Cookies.get('cartToken');
        this.cart = JSON.parse(cartToJSONIFY);
        this.cartD = true;
        console.log(JSON.parse(cartToJSONIFY));
      },
      sendTo: function(veni){
        this.$router.push({path: veni});
      },
      antiBlur: function (){
        if(this.itsover == true){
          console.log("itsover" + this.itsover);
        } else {
          this.answer = false;
          this.searchQ = "";
        }
      },
      mouseOut: function (){
        const wholeBody = document.getElementById("wholeBody");
        wholeBody.addEventListener("click", () => {
          this.answer = false;
          this.itsover = false;
        });
      }
    },
    computed: {
      checkoutAval(){
        if((Cookies.get("cart_hustle") == "[]" || !Cookies.get("cart_hustle")) && this.$store.state.users.cart == []){
          return false;
        } if((Cookies.get("cart_hustle") == "[]" || !Cookies.get("cart_hustle")) || this.$store.state.users.cart == []) {
          return false;
        } else {
          return true;
        }
      }
    },
    mounted(){
      this.height = window.innerHeight * 0.19;
    }
}
</script>

<style>

.results{
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-radius: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 30vh;
  transition: 0.3s;
}
.search-p-result{
  cursor: pointer;
}
.listings{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 90%;
}
.tile{
  font-size: 13px;
  color: black;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 3px;
  margin-top: 10px;
  background-color: white;
  transition: 0.3s;
}
.tile p{
  text-align: center;
  padding: 5px 0 5px 10px;
  margin: 0;
}
.tile:hover{
  font-size: 13px;
  display: flex;
  justify-content: flex-start;
  background-color: gray;
}
.dontchange{
  font-size: 13px;
  color: black;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 6px;
  background-color: white;
  transition: 0.3s;
  
}
.embed{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
}
.elem-row{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 23%;
}
.main-row{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95vw;
  height: 32%;
}
.burger-div{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100%;
}
.burger-div-2{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100%;
}
.inner-burger{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
}
.inner-burger-2{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  height: 50%;
}
.final-row{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 45%;
  width: 95vw;
}
.searchy{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
}
.custom-searchy{
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  padding: 7px 15px 7px 16px;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 38px;
}
.custom-searchy:focus{
  outline: none;
  text-decoration: none;
}
.good-row{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 45px;
}
.custom-text-field.v-text-field.v-text-field--enclosed .v-input__control {
  height: 38px;
}
.custom-text-field.v-text-field.v-text-field--enclosed .v-input__control input{
  font-size: 17px;
  padding: 0 0 1px 0;
}
.custom-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
  box-shadow: none;
  padding: 0;
  margin: 0;
  width: 67vw;
}
.searchy-btn{
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #363f4e;
  padding: 7px 16px 7px 15px;
}
.toolbar-s{
  position: absolute;
  z-index: -10;
  top: 100%;
  left: 0;
  width: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}
.toolbar-show{
  width: 100%;
  z-index: 10;
}
.dropdown{
  position: absolute;
  width: 100%;
  height: 0vh;
  background-color: rgba(30, 101, 184, 0.9);
  left: 0;
  top: 7.9vh;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  align-items: center;
  transition: 0.5s;
  padding: 0 0 0 0;
}
.dropshow{
  height: 70vh;
  padding: 10px 0 10px 0;
}
.dropoff{
  height: 0px;
}
.dropshow-2{
  height: 50vh;
  padding: 10px 0 10px 0;
}
.s1{
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}
.s2{
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}
.ON{
 display: flex;
 animation: menuIntro 0.5s;
}
.OFF{
  animation: menuOutro 0.5s;
}
.OFF-2{
  display: none;
}
.center-spaz-1{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.center-spaz-2{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.content-block{
  padding: 10px 0 10px 0;

}
.cb-title{
  font-family: 'fr';
  color: white;
  font-size:25px;
  margin-bottom: 15px;
}
.cb-links{
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}
.v-application ul {
  padding-left: 0;
}
.cb-link{
  text-decoration: none;
  color: white;
  font-family: 'fr';
  font-size: 18px;
}
.linkus{
  color: white;
}
.linkus:hover{
  color: #f1f1f1;
}
.ersteSpan{
    color: white;
    font-size: 1.6em;
}
.zweiteSpan{
    color: #2cc9cb;
    font-size: 1.4em;
}
.link-holder{
  width: 45vw;
}
.links{
  display: flex;
  position: relative;
  left: 4%;
  justify-content: space-between;
  align-items: center;
  width: 90%;
}
.spacer-1{
  display: none;
}
.link{
  margin-top: 5px;
  font-size: 18px;
  color: black;
  text-decoration: none;
  text-align: center;
}
.link:hover{
  color: #2cc9cb;
}
.link:active{
  color: #2cc9cb;
}
.search-input{
  padding-bottom: 3px;
  padding-right: 30px;
  font-family: 'bl';
  outline: none;
  text-align: center;
  width: 0vw;
}
.search{
  height: 90%;
  width: 0vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-btn{
  display: block;
}
.link-holder{
  display: block;
}
.search-btn{
  display: none;
}
.spacer-1{
  display: block;
}
.spacer-2{
  display: none;
}
@media only screen and (min-width: 850px){
  .spacer-1{
    display: flex;
  }
  .menu-btn{
    display: flex;
  }
  .link-holder{
    display: flex;
  }
  .link-holder{
    width: 35vw;
  }
  .search-btn{
    display: none;
  }
  .spacer-2{
    display: none;
  }
  .search-input{
    display: block;
    padding-bottom: 3px;
    font-family: 'bl';
    outline: none;
    text-align: center;
    width: 0vw;
  }
  .results{
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-radius: 15px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 505px;
    height: 30vh;
    transition: 0.3s;
  }
  .search-p-result{
    cursor: pointer;
    width: 100%;
  }
  .search-p-result:hover{
    background-color: white;
  }
  .listings{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 90%;
  }
  .tile{
    font-size: 13px;
    color: black;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 3px;
    margin-top: 10px;
    background-color: white;
    transition: 0.3s;
  }
  .tile p{
    text-align: center;
    padding: 5px 0 5px 10px;
    margin: 0;
  }
  .tile:hover{
    font-size: 13px;
    display: flex;
    justify-content: flex-start;
    background-color: gray;
  }
  .dontchange{
    font-size: 13px;
    color: black;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 6px;
    background-color: white;
    transition: 0.3s;
    
  }
  .embed{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  .elem-row{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 23%;
  }
  .main-row{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 750px;
    height: 32%;
  }
  .burger-div{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 5px 0 0 ;
    height: 100%;
  }
   .burger-div-2{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 5px 0 0 ;
    height: 100%;
  }
  .inner-burger{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 0;
    height: 50%;
  }
  .inner-burger-2{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    height: 50%;
  }
  .final-row{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 45%;
    width: 95vw;
  }
  .searchy{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
  }
  .custom-searchy{
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    padding: 7px 15px 7px 16px;
    background-color: white;
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 38px;
  }
  .custom-searchy:focus{
    outline: none;
    text-decoration: none;
  }
  .good-row{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 45px;
  }
  .custom-text-field.v-text-field.v-text-field--enclosed .v-input__control {
    height: 38px;
  }
  .custom-text-field.v-text-field.v-text-field--enclosed .v-input__control input{
    font-size: 17px;
    padding: 0 0 1px 0;
  }
  .custom-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
    box-shadow: none;
    padding: 0;
    margin: 0;
    width: 430px;
  }
  .searchy-btn{
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    background-color: #363f4e;
    padding: 7px 16px 7px 15px;
  }
  .ersteSpan{
    padding: 0;
    margin: 0;
  }
}
</style>