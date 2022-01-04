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
      <v-list-group prepend-icon="mdi-page-previous-outline" :value="false" color="white">
        <template v-slot:activator>
            <v-list-item-title class="v-fsm">Kategorite</v-list-item-title>
        </template>
        <v-list-group sub-group color="white" v-for="department in links" :key="department.id" @click="kategoriaSetter(department.kategoria)">
          <template v-slot:activator>
              <v-list-item-title class="v-fsm">{{department.kategoria}}</v-list-item-title>
          </template>
          <v-list-item v-for="kategori in department.nenkategorite" :key="kategori.id" @click="sender(kategori.link, kategori.emri)" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">{{kategori.emri}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        
      </v-list-group>
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
      :height="height ? height : 150"
      elevation="0"
      class="index-upper header-height"
    >
      
      <div class="embed">
        <div class="elem-row">
          <PreHeader :cart.sync="cart" :cartD.sync="cartD" :drawer.sync="drawer" />
        </div>
        <div class="main-row mt-3">
          <div class="burger-div">
            <div class="inner-burger-2">
              <v-btn icon class="btn-c-o menu-btn" @click.stop="drawer = !drawer" height="30" width="30">
                <v-icon color="white" size="28">mdi-menu</v-icon>
              </v-btn>
            </div>
          </div>
          <v-spacer class="spacer-1"></v-spacer>
          <div class="good-row">
            <div class="searchy">
              <div class="qs custom-searchy">
                <v-text-field placeholder="Kerko per produkte" class="custom-text-field" color="black" v-model="searchQ" clearable solo dense light rounded height="38" @click:clear="() => {answer = false; searchQ = '';}" @keydown.enter="searchGo" @input="changeType" @blur="antiBlur"></v-text-field>
              </div>
              <button class="btn-c-o qs searchy-btn" @click="search22"><v-icon color="white">mdi-magnify</v-icon></button>
            </div>
            <div class="results" v-if="answer == true" ref="karuci" @mouseenter="itsover = true" @mouseleave="itsover = false" @mouseout="mouseOut">
              <div class="listings" v-if="sToShow.length > 0">
                <div class="tile" v-for="ting in sToShow.slice(0, 4)" :key="ting.id">
                  <v-avatar size="40" tile class="rounded-lg" color="primary">
                    <v-img :src="ting.photos.src"></v-img>
                  </v-avatar>
                  <v-col cols="6" class="justify-left">
                    <p class="qs white--text btn-c-o pa-0 ma-0" style="cursor: pointer;" @click="itsover = false; answer = false; itemPressed(ting.kategoria, ting.spot)">{{ting.name}}</p>
                    <p class="qs white--text btn-c-o pa-0 ma-0">Cmimi: {{ting.price}} ALL</p>
                  </v-col>
                </div>
              </div>
              <div class="listings" v-if="sToShow.length == 0 || sToShow == null">
                <div class="tile">
                  <p class="qs btn-c-o white--text">No result.</p>
                </div>
              </div>
            </div>
          </div>
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
        <!--
        <div class="final-row">
          <div class="good-row">
            <div class="searchy">
              <div class="qs custom-searchy">
                <v-text-field placeholder="Kerko per produkte" class="custom-text-field" color="black" v-model="searchQ" clearable solo dense light rounded height="38" @click:clear="() => {answer = false; searchQ = '';}" @input="changeType" @blur="antiBlur"></v-text-field>
              </div>
              <button class="btn-c-o qs searchy-btn" @click="searchGo"><v-icon color="white">mdi-magnify</v-icon></button>
            </div>
            <div class="results" v-if="answer == true" ref="karuci" @mouseenter="itsover = true" @mouseleave="itsover = false" @mouseout="mouseOut">
              <div class="listings" v-if="sToShow.length > 0">
                <div class="tile" v-for="ting in sToShow.slice(0, 4)" :key="ting.id">
                  <v-btn class="qs secondary--text btn-c-o" text nuxt :to="ting.red + '/' + ting.emri" @click="itsover = false; answer = false">{{ting.emri}}</v-btn>
                </div>
              </div>
              <div class="listings" v-else>
                <div class="tile">
                  <p class="qs btn-c-o secondary--text">No result.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        -->
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
            <v-list-item-title>Shporta</v-list-item-title>
            <v-list-item-subtitle>Max.10</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-list
        dense
        rounded
      >
          <v-list-item v-for="cartItem in cart" :key="cartItem.prodEmri">
            <v-row justify="start" align="center" style="transition: 0.3s">
              <v-col cols="2" align-self="center">
                <v-avatar rounded color="secondary" size="30">
                  <v-img :src="cartItem.photo"></v-img>
                </v-avatar>
              </v-col>
              <v-col cols="6" align-self="center">
                <v-list-item-title class="qs pb-0"><span class="qs s14">{{cartItem.name}}</span></v-list-item-title>
              </v-col>
              <v-col cols="2">
                <v-list-item-title class="qs pb-0"><span class="qs s14">{{cartItem.quantity}}</span></v-list-item-title>
              </v-col>
              <v-col cols="2">
                <v-btn icon width="25" height="25" @click="updateCart(cartItem.name, 1)">
                  <v-icon color="white" size="20">mdi-plus</v-icon>
                </v-btn>
                <v-btn icon width="25" height="25" @click="updateCart(cartItem.name, -1)">
                  <v-icon color="white" size="20">mdi-minus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-list-item>
      </v-list>
      <template v-slot:append v-if="checkoutAval">
        <div class="pa-2">
          <p class="qs">Totali: {{sumOfAll}} ALL</p>
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
import firebase from 'firebase';
import 'firebase/firestore';
export default {
    components: {
      PreHeader,
    },
    data(){
        return{
            links: [
              {'kategoria': 'Sezonale', 'nenkategorite': [{'emri': 'Dekorime për Krishtlindje', 'link': 'sezonale-dekorime-për-krishtlindje'}, {'emri': 'Artikuj Plazhi', 'link': 'sezonale-artikuj-plazhi'}, {'emri': 'Embëlsira dhe biskota', 'link': 'sezonale-embëlsira-dhe-biskota'}]},
              {'kategoria': 'Banjo', 'nenkategorite': [{'emri': 'Pajisje Sanitare', 'link': 'banjo-pajisje-sanitare'}, {'emri': 'Aksesorë bashkues dhe kaseta', 'link': 'banjo-aksesorë-bashkues-dhe-kaseta'}, {'emri': 'Mobilje për banjo', 'link': 'banjo-mobilje-për-banjo'}, {'emri': 'Aksesorë për banjo', 'link': 'banjo-aksesorë-për-banjo'}, {'emri': 'Produkte për Njerëz me Aftësi të Kufizuar', 'link': 'banjo-produkte-për-njerëz-me-aftësi-të-kufizuar'}, {'emri': 'Sauna', 'link': 'banjo-sauna'}, {'emri': 'Përkujdesje Personale', 'link': 'banjo-përkujdesje-personale'}, {'emri': 'Tapetë për tualet', 'link': 'banjo-tapetë-për-tualet'}, {'emri': 'Higjenë', 'link': 'banjo-higjenë'}, {'emri': 'Pastrim', 'link': 'banjo-pastrim'}, {'emri': 'Pastrim Profesional', 'link': 'banjo-pastrim-profesional'}, {'emri': 'Higjenë profesional', 'link': 'banjo-higjenë-profesional'}, {'emri': 'Higjenë', 'link': 'banjo-higjenë'}]},
              {'kategoria': 'Materiale Ndërtimi', 'nenkategorite': [{'emri': 'Tuba dhe rakorderi', 'link': 'materiale-ndërtimi-tuba-dhe-rakorderi'}, {'emri': 'Aksesorë metali', 'link': 'materiale-ndërtimi-aksesorë-metali'}, {'emri': 'Vegla Ndërtimi', 'link': 'materiale-ndërtimi-vegla-ndërtimi'}, {'emri': 'Silikon', 'link': 'materiale-ndërtimi-silikon'}, {'emri': 'Shkarkimi i ujrave të përdorura', 'link': 'materiale-ndërtimi-shkarkimi-i-ujrave-të-përdorura'}, {'emri': 'Sistemi  i thatë', 'link': 'materiale-ndërtimi-sistemi--i-thatë'}, {'emri': 'Izolimi termo-akustik', 'link': 'materiale-ndërtimi-izolimi-termo-akustik'}, {'emri': 'Inerte dhe aditive', 'link': 'materiale-ndërtimi-inerte-dhe-aditive'}, {'emri': 'Hidroizolim dhe mbrojtje', 'link': 'materiale-ndërtimi-hidroizolim-dhe-mbrojtje'}, {'emri': 'Elemente ndërtimtarie bazë', 'link': 'materiale-ndërtimi-elemente-ndërtimtarie-bazë'}, {'emri': 'Druri', 'link': 'materiale-ndërtimi-druri'}, {'emri': 'Streha dhe mbulesa', 'link': 'materiale-ndërtimi-streha-dhe-mbulesa'}, {'emri': 'Shkarkime të përgjithshme', 'link': 'materiale-ndërtimi-shkarkime-të-përgjithshme'}, {'emri': 'Sisteme ajrimi dhe oxhaqesh', 'link': 'materiale-ndërtimi-sisteme-ajrimi-dhe-oxhaqesh'}, {'emri': 'Dyshemetë e jashtme', 'link': 'materiale-ndërtimi-dyshemetë-e-jashtme'}, {'emri': 'Hekur dhe profile', 'link': 'materiale-ndërtimi-hekur-dhe-profile'}, {'emri': 'Depozita', 'link': 'materiale-ndërtimi-depozita'}, {'emri': 'Sinjalistika', 'link': 'materiale-ndërtimi-sinjalistika'}, {'emri': 'Skela', 'link': 'materiale-ndërtimi-skela'}, {'emri': 'Makineri ndërtimi', 'link': 'materiale-ndërtimi-makineri-ndërtimi'}]},
              {'kategoria': 'Ngrohje - Ftohje', 'nenkategorite': [{'emri': 'Elektrike', 'link': 'ngrohje---ftohje-elektrike'}, {'emri': 'Karburant', 'link': 'ngrohje---ftohje-karburant'}, {'emri': 'Dru dhe Pelet', 'link': 'ngrohje---ftohje-dru-dhe-pelet'}, {'emri': 'Alternative', 'link': 'ngrohje---ftohje-alternative'}]},
              {'kategoria': 'Mobilje', 'nenkategorite': [{'emri': 'Ambjent Dite', 'link': 'mobilje-ambjent-dite'}, {'emri': 'Ambjent Nate', 'link': 'mobilje-ambjent-nate'}, {'emri': 'Ambient studimi dhe zyrë', 'link': 'mobilje-ambient-studimi-dhe-zyrë'}, {'emri': 'Dekorime', 'link': 'mobilje-dekorime'}, {'emri': 'Magazinim dhe organizim', 'link': 'mobilje-magazinim-dhe-organizim'}, {'emri': 'Produkte për bebe', 'link': 'mobilje-produkte-për-bebe'}, {'emri': 'Ambjent i jashtëm', 'link': 'mobilje-ambjent-i-jashtëm'}, {'emri': 'Ambient Kuzhine', 'link': 'mobilje-ambient-kuzhine'}]},
              {'kategoria': 'Shtrimi', 'nenkategorite': [{'emri': 'Parket', 'link': 'shtrimi-parket'}, {'emri': 'Pllaka', 'link': 'shtrimi-pllaka'}, {'emri': 'Mokete dhe linoleume', 'link': 'shtrimi-mokete-dhe-linoleume'}]},
              {'kategoria': 'Elektrike', 'nenkategorite': [{'emri': 'Pajisje për Instalime Elektrike', 'link': 'elektrike-pajisje-për-instalime-elektrike'}, {'emri': 'Sisteme Sigurie', 'link': 'elektrike-sisteme-sigurie'}, {'emri': 'Kabëll dhe Aksesorë', 'link': 'elektrike-kabëll-dhe-aksesorë'}, {'emri': 'Pajisje Elektrike', 'link': 'elektrike-pajisje-elektrike'}, {'emri': 'Elektrike të Tjera', 'link': 'elektrike-elektrike-të-tjera'}, {'emri': 'Pajisje Industriale dhe Profesionale', 'link': 'elektrike-pajisje-industriale-dhe-profesionale'}]},
              {'kategoria': 'Ndriçimi', 'nenkategorite': [{'emri': 'Ndriçues të brendshem', 'link': 'ndriçimi-ndriçues-të-brendshem'}, {'emri': 'Ndricues Kopshti', 'link': 'ndriçimi-ndricues-kopshti'}, {'emri': 'Llamba', 'link': 'ndriçimi-llamba'}]},
              {'kategoria': 'Kuzhina', 'nenkategorite': [{'emri': 'Lavapjata', 'link': 'kuzhina-lavapjata'}, {'emri': 'Enë kuzhine', 'link': 'kuzhina-enë-kuzhine'}, {'emri': 'Aksesorë për kuzhina', 'link': 'kuzhina-aksesorë-për-kuzhina'}, {'emri': 'Pastrues', 'link': 'kuzhina-pastrues'}, {'emri': 'Pastrim Profesional', 'link': 'kuzhina-pastrim-profesional'}, {'emri': 'Uniforma Pune', 'link': 'kuzhina-uniforma-pune'}, {'emri': 'Higjenë', 'link': 'kuzhina-higjenë'}, {'emri': 'Higjenë Profesional', 'link': 'kuzhina-higjenë-profesional'}, {'emri': 'Bisktota -caj', 'link': 'kuzhina-bisktota--caj'}]},
              {'kategoria': 'Druri', 'nenkategorite': [{'emri': 'Binare dhe Ristela', 'link': 'druri-binare-dhe-ristela'}, {'emri': 'Lëndë Zdrukthtarie', 'link': 'druri-lëndë-zdrukthtarie'}, {'emri': 'Shkallë', 'link': 'druri-shkallë'}, {'emri': 'Brava/Doreza dhe aksesorë', 'link': 'druri-brava/doreza-dhe-aksesorë'}, {'emri': 'Dritare', 'link': 'druri-dritare'}, {'emri': 'Dyer të brendshme', 'link': 'druri-dyer-të-brendshme'}, {'emri': 'Dyer të jashtme', 'link': 'druri-dyer-të-jashtme'}]},
              {'kategoria': 'Kopshtari', 'nenkategorite': [{'emri': 'Dekorime', 'link': 'kopshtari-dekorime'}, {'emri': 'Arredim i jashtëm', 'link': 'kopshtari-arredim-i-jashtëm'}, {'emri': 'Lule dhe bimë', 'link': 'kopshtari-lule-dhe-bimë'}, {'emri': 'Vegla kopshti elektrike', 'link': 'kopshtari-vegla-kopshti-elektrike'}, {'emri': 'Vegla kopshti me bateri', 'link': 'kopshtari-vegla-kopshti-me-bateri'}, {'emri': 'Vegla kopshti me karburant', 'link': 'kopshtari-vegla-kopshti-me-karburant'}, {'emri': 'Vegla kopshti manuale', 'link': 'kopshtari-vegla-kopshti-manuale'}, {'emri': 'Sisteme dhe pajisje për vaditje', 'link': 'kopshtari-sisteme-dhe-pajisje-për-vaditje'}, {'emri': 'Barbekju', 'link': 'kopshtari-barbekju'}, {'emri': 'Pajisje kantine', 'link': 'kopshtari-pajisje-kantine'}, {'emri': 'Aksesorë', 'link': 'kopshtari-aksesorë'}, {'emri': 'Insekticide', 'link': 'kopshtari-insekticide'}, {'emri': 'Tuba & Rakorderi', 'link': 'kopshtari-tuba-&-rakorderi'}, {'emri': 'Aksesorë për vegla kopshti', 'link': 'kopshtari-aksesorë-për-vegla-kopshti'}, {'emri': 'Artikuj Plazhi', 'link': 'kopshtari-artikuj-plazhi'}, {'emri': 'Pllaka', 'link': 'kopshtari-pllaka'}, {'emri': 'Artikuj Plazhi', 'link': 'kopshtari-artikuj-plazhi'}, {'emri': 'Pastrim', 'link': 'kopshtari-pastrim'}]},
              {'kategoria': 'Bojra', 'nenkategorite': [{'emri': 'Bojra per Jashte', 'link': 'bojra-bojra-per-jashte'}, {'emri': 'Bojra per Brenda', 'link': 'bojra-bojra-per-brenda'}, {'emri': 'Bojra Dekorative', 'link': 'bojra-bojra-dekorative'}, {'emri': 'Bojra Druri', 'link': 'bojra-bojra-druri'}, {'emri': 'Bojra Metali', 'link': 'bojra-bojra-metali'}, {'emri': 'Letra Muri', 'link': 'bojra-letra-muri'}, {'emri': 'Tretes', 'link': 'bojra-tretes'}, {'emri': 'Sprai', 'link': 'bojra-sprai'}, {'emri': 'Ngjites', 'link': 'bojra-ngjites'}, {'emri': 'Vegla Lyerje', 'link': 'bojra-vegla-lyerje'}, {'emri': 'Silikon', 'link': 'bojra-silikon'}, {'emri': 'Vegla ndërtimi', 'link': 'bojra-vegla-ndërtimi'}]},
              {'kategoria': 'Art', 'nenkategorite': [{'emri': 'Bojera per Piktor', 'link': 'art-bojera-per-piktor'}, {'emri': 'Penela', 'link': 'art-penela'}, {'emri': 'Korniza Fotosh dhe  Pikturash', 'link': 'art-korniza-fotosh-dhe--pikturash'}, {'emri': 'Piktura', 'link': 'art-piktura'}, {'emri': 'Të Tjera', 'link': 'art-të-tjera'}]},
              {'kategoria': 'Hidraulike', 'nenkategorite': [{'emri': 'Sisteme Zjarrfikse', 'link': 'hidraulike-sisteme-zjarrfikse'}, {'emri': 'Profesionale/Industriale', 'link': 'hidraulike-profesionale/industriale'}, {'emri': 'Tuba dhe Rakorderi', 'link': 'hidraulike-tuba-dhe-rakorderi'}]},
              {'kategoria': 'Vegla dhe Aksesorë', 'nenkategorite': [{'emri': 'Hardware', 'link': 'vegla-dhe-aksesorë-hardware'}, {'emri': 'Vegla Ndërtimi', 'link': 'vegla-dhe-aksesorë-vegla-ndërtimi'}, {'emri': 'Veshje Pune Sigurie', 'link': 'vegla-dhe-aksesorë-veshje-pune-sigurie'}, {'emri': 'Vegla Elektrike', 'link': 'vegla-dhe-aksesorë-vegla-elektrike'}, {'emri': 'Vegla Elektrike me Bateri', 'link': 'vegla-dhe-aksesorë-vegla-elektrike-me-bateri'}, {'emri': 'Aksesorë për Vegla Elektrike', 'link': 'vegla-dhe-aksesorë-aksesorë-për-vegla-elektrike'}, {'emri': 'Vegla Mekanike', 'link': 'vegla-dhe-aksesorë-vegla-mekanike'}, {'emri': 'Vegla Matëse', 'link': 'vegla-dhe-aksesorë-vegla-matëse'}, {'emri': 'Vegla makine dhe Aksesore', 'link': 'vegla-dhe-aksesorë-vegla-makine-dhe-aksesore'}, {'emri': 'Produkte sigurie', 'link': 'vegla-dhe-aksesorë-produkte-sigurie'}]},
              {'kategoria': 'Zyrë dhe Shkollë', 'nenkategorite': [{'emri': 'Materiale Arkivimi', 'link': 'zyrë-dhe-shkollë-materiale-arkivimi'}, {'emri': 'Instrumenta shkrimi', 'link': 'zyrë-dhe-shkollë-instrumenta-shkrimi'}, {'emri': 'Organizues tavoline', 'link': 'zyrë-dhe-shkollë-organizues-tavoline'}, {'emri': 'Pajisje lidhëse', 'link': 'zyrë-dhe-shkollë-pajisje-lidhëse'}, {'emri': 'Kartoleri dhe Letër', 'link': 'zyrë-dhe-shkollë-kartoleri-dhe-letër'}, {'emri': 'Krijimtari për fëmijë', 'link': 'zyrë-dhe-shkollë-krijimtari-për-fëmijë'}, {'emri': 'Tempera, bojëra dhe lapostila', 'link': 'zyrë-dhe-shkollë-tempera,-bojëra-dhe-lapostila'}, {'emri': 'Memorje e jashtme', 'link': 'zyrë-dhe-shkollë-memorje-e-jashtme'}, {'emri': 'Të Tjera', 'link': 'zyrë-dhe-shkollë-të-tjera'}, {'emri': 'Aksesorë zyre', 'link': 'zyrë-dhe-shkollë-aksesorë-zyre'}, {'emri': 'Tabela', 'link': 'zyrë-dhe-shkollë-tabela'}, {'emri': 'Makina llogaritëse', 'link': 'zyrë-dhe-shkollë-makina-llogaritëse'}, {'emri': 'Audio dhe Video', 'link': 'zyrë-dhe-shkollë-audio-dhe-video'}, {'emri': 'IT', 'link': 'zyrë-dhe-shkollë-it'}, {'emri': 'Kabëll', 'link': 'zyrë-dhe-shkollë-kabëll'}, {'emri': 'Çanta', 'link': 'zyrë-dhe-shkollë-çanta'}, {'emri': 'Pastrues', 'link': 'zyrë-dhe-shkollë-pastrues'}]},
              {'kategoria': 'Aksesorë makinash', 'nenkategorite': [{'emri': 'Mirëmbajtja', 'link': 'aksesorë-makinash-mirëmbajtja'}, {'emri': 'Solucione dhe aditivë', 'link': 'aksesorë-makinash-solucione-dhe-aditivë'}, {'emri': 'Trajtues sipërfaqesh dhe lustrues', 'link': 'aksesorë-makinash-trajtues-sipërfaqesh-dhe-lustrues'}, {'emri': 'Aksesorë', 'link': 'aksesorë-makinash-aksesorë'}, {'emri': 'Llamba Makine', 'link': 'aksesorë-makinash-llamba-makine'}, {'emri': 'Aksesore udhetimi te montueshem', 'link': 'aksesorë-makinash-aksesore-udhetimi-te-montueshem'}]},
              {'kategoria': 'Sport dhe hobi', 'nenkategorite': [{'emri': 'Mjete peshkimi', 'link': 'sport-dhe-hobi-mjete-peshkimi'}, {'emri': 'Kamping', 'link': 'sport-dhe-hobi-kamping'}, {'emri': 'Biçikleta', 'link': 'sport-dhe-hobi-biçikleta'}, {'emri': 'Palestra', 'link': 'sport-dhe-hobi-palestra'}, {'emri': 'Artikuj Sportiv', 'link': 'sport-dhe-hobi-artikuj-sportiv'}, {'emri': 'Valixhe dhe çanta udhëtimi', 'link': 'sport-dhe-hobi-valixhe-dhe-çanta-udhëtimi'}, {'emri': 'Kamping', 'link': 'sport-dhe-hobi-kamping'}]},
              {'kategoria': 'Elektroshtëpiake', 'nenkategorite': [{'emri': 'Frigoriferë', 'link': 'elektroshtëpiake-frigoriferë'}, {'emri': 'Lavatriçe & Tharëse', 'link': 'elektroshtëpiake-lavatriçe-&-tharëse'}, {'emri': 'Pajisje Gatimi', 'link': 'elektroshtëpiake-pajisje-gatimi'}, {'emri': 'Lavastovilie', 'link': 'elektroshtëpiake-lavastovilie'}, {'emri': 'Elektroshtëpiake të vogla', 'link': 'elektroshtëpiake-elektroshtëpiake-të-vogla'}, {'emri': 'Fshesa me vakum', 'link': 'elektroshtëpiake-fshesa-me-vakum'}, {'emri': 'TV dhe Audio', 'link': 'elektroshtëpiake-tv-dhe-audio'}]},
              {'kategoria': 'Përkujdesje për kafshët', 'nenkategorite': [{'emri': 'Ushqimi', 'link': 'përkujdesje-për-kafshët-ushqimi'}, {'emri': 'Higjena dhe kozmetika', 'link': 'përkujdesje-për-kafshët-higjena-dhe-kozmetika'}, {'emri': 'Shëtitje dhe argëtim', 'link': 'përkujdesje-për-kafshët-shëtitje-dhe-argëtim'}, {'emri': 'Shtëpia', 'link': 'përkujdesje-për-kafshët-shtëpia'}, {'emri': 'Të Tjera', 'link': 'përkujdesje-për-kafshët-të-tjera'}]},
              {'kategoria': 'Magazinim & Lavanderi', 'nenkategorite': [{'emri': 'Magazinim dhe organizim', 'link': 'magazinim-&-lavanderi-magazinim-dhe-organizim'}, {'emri': 'Lavanderi', 'link': 'magazinim-&-lavanderi-lavanderi'}, {'emri': 'Pastrues', 'link': 'magazinim-&-lavanderi-pastrues'}]},
              {'kategoria': 'Produkte per bebe', 'nenkategorite': [{'emri': 'Mësim & Lojëra', 'link': 'produkte-per-bebe-mësim-&-lojëra'}, {'emri': 'Higjenë & Përkujdesje', 'link': 'produkte-per-bebe-higjenë-&-përkujdesje'}, {'emri': 'Mobilje', 'link': 'produkte-per-bebe-mobilje'}, {'emri': 'Tekstile Fjetje', 'link': 'produkte-per-bebe-tekstile-fjetje'}, {'emri': 'Karrige Makine & Karroca', 'link': 'produkte-per-bebe-karrige-makine-&-karroca'}, {'emri': 'Ngrënie & Aksesorë', 'link': 'produkte-per-bebe-ngrënie-&-aksesorë'}, {'emri': 'Siguri për bebe', 'link': 'produkte-per-bebe-siguri-për-bebe'}, {'emri': 'Fjongo', 'link': 'produkte-per-bebe-fjongo'}]},
              {'kategoria': 'Dekor', 'nenkategorite': [{'emri': 'Dekorime muri', 'link': 'dekor-dekorime-muri'}, {'emri': 'Perde dhe metrazhe', 'link': 'dekor-perde-dhe-metrazhe'}, {'emri': 'Korniza dhe shufra për perde', 'link': 'dekor-korniza-dhe-shufra-për-perde'}, {'emri': 'Grila për dritare', 'link': 'dekor-grila-për-dritare'}, {'emri': 'Aksesorë për perde', 'link': 'dekor-aksesorë-për-perde'}, {'emri': 'Qirinj', 'link': 'dekor-qirinj'}, {'emri': 'Tapetë', 'link': 'dekor-tapetë'}, {'emri': 'Mbulesa tavoline', 'link': 'dekor-mbulesa-tavoline'}, {'emri': 'Vazo & Mbajtëse Qiri', 'link': 'dekor-vazo-&-mbajtëse-qiri'}, {'emri': 'Lule & Aromatikë', 'link': 'dekor-lule-&-aromatikë'}, {'emri': 'Kosha & Magazinim', 'link': 'dekor-kosha-&-magazinim'}, {'emri': 'Dhurata & Paketime', 'link': 'dekor-dhurata-&-paketime'}, {'emri': 'Jastekë', 'link': 'dekor-jastekë'}, {'emri': 'Qepje', 'link': 'dekor-qepje'}, {'emri': 'Ditelindje', 'link': 'dekor-ditelindje'}, {'emri': 'Festa', 'link': 'dekor-festa'}]},
              {'kategoria': 'Tekstile dhe aksesore', 'nenkategorite': [{'emri': 'Tekstile Fjetje', 'link': 'tekstile-dhe-aksesore-tekstile-fjetje'}, {'emri': 'Tekstile Banje', 'link': 'tekstile-dhe-aksesore-tekstile-banje'}]},
              {'kategoria': 'Bujqësi & Blegtori', 'nenkategorite': [{'emri': 'Pajisje kantine', 'link': 'bujqësi-&-blegtori-pajisje-kantine'}, {'emri': 'Makineri blegtorale', 'link': 'bujqësi-&-blegtori-makineri-blegtorale'}, {'emri': 'Makineri bujqësore', 'link': 'bujqësi-&-blegtori-makineri-bujqësore'}]},
              {'kategoria': 'Veshje dhe Modë', 'nenkategorite': [{'emri': 'Femra', 'link': 'veshje-dhe-modë-femra'}, {'emri': 'Meshkuj', 'link': 'veshje-dhe-modë-meshkuj'}, {'emri': 'Uniseks', 'link': 'veshje-dhe-modë-uniseks'}, {'emri': 'Fëmijë', 'link': 'veshje-dhe-modë-fëmijë'}]},
              {'kategoria': 'Ushqime dhe Pije', 'nenkategorite': [{'emri': 'Pije alkolike', 'link': 'ushqime-dhe-pije-pije-alkolike'}, {'emri': 'Pije jo-alkolike', 'link': 'ushqime-dhe-pije-pije-jo-alkolike'}, {'emri': 'Ushqime', 'link': 'ushqime-dhe-pije-ushqime'}]},
              {'kategoria': 'Informatike', 'nenkategorite': [{'emri': 'Kompjuter', 'link': 'informatike-kompjuter'}, {'emri': 'Laptop', 'link': 'informatike-laptop'}, {'emri': 'Komponente', 'link': 'informatike-komponente'}, {'emri': 'Printer & Scaner', 'link': 'informatike-printer-&-scaner'}, {'emri': 'Adaptor & Kabuj', 'link': 'informatike-adaptor-&-kabuj'}, {'emri': 'Pajisje Rrjeti', 'link': 'informatike-pajisje-rrjeti'}, {'emri': 'Software', 'link': 'informatike-software'}, {'emri': 'Periferike', 'link': 'informatike-periferike'}, {'emri': 'Aksesore', 'link': 'informatike-aksesore'}, {'emri': 'Kancelari', 'link': 'informatike-kancelari'}]},
              {'kategoria': 'Telefon & Tablet', 'nenkategorite': [{'emri': 'Telefon', 'link': 'telefon-&-tablet-telefon'}, {'emri': 'Tablet', 'link': 'telefon-&-tablet-tablet'}, {'emri': 'Aksesore', 'link': 'telefon-&-tablet-aksesore'}, {'emri': 'Smart Watches', 'link': 'telefon-&-tablet-smart-watches'}, {'emri': 'Kufje', 'link': 'telefon-&-tablet-kufje'}, {'emri': 'Pjese per servis', 'link': 'telefon-&-tablet-pjese-per-servis'}]},
              {'kategoria': 'Tv Video & Audio', 'nenkategorite': [{'emri': 'Televizor', 'link': 'tv-video-&-audio-televizor'}, {'emri': 'Video Projektor', 'link': 'tv-video-&-audio-video-projektor'}, {'emri': 'Audio', 'link': 'tv-video-&-audio-audio'}, {'emri': 'DEKODER & TV BOX', 'link': 'tv-video-&-audio-dekoder-&-tv-box'}, {'emri': 'Aksesore per TV', 'link': 'tv-video-&-audio-aksesore-per-tv'}]},
              {'kategoria': 'Dron - Kamera - Gimbal', 'nenkategorite': [{'emri': 'Produkte DJI', 'link': 'dron---kamera---gimbal-produkte-dji'}, {'emri': 'Produkte Feiytech', 'link': 'dron---kamera---gimbal-produkte-feiytech'}, {'emri': 'Produkte Zhiyun', 'link': 'dron---kamera---gimbal-produkte-zhiyun'}, {'emri': 'Produkte Xiaomi', 'link': 'dron---kamera---gimbal-produkte-xiaomi'}, {'emri': 'Camera', 'link': 'dron---kamera---gimbal-camera'}, {'emri': 'Aksesore te ndryshem', 'link': 'dron---kamera---gimbal-aksesore-te-ndryshem'}]},
              {'kategoria': 'Lojera & Argetim', 'nenkategorite': [{'emri': 'Konsola', 'link': 'lojera-&-argetim-konsola'}, {'emri': 'Lojera', 'link': 'lojera-&-argetim-lojera'}, {'emri': 'Controllers', 'link': 'lojera-&-argetim-controllers'}, {'emri': 'Smart Balance', 'link': 'lojera-&-argetim-smart-balance'}, {'emri': 'Scooters', 'link': 'lojera-&-argetim-scooters'}]},
              {'kategoria': 'Elektroshtepiake', 'nenkategorite': [{'emri': 'Kondicioner', 'link': 'elektroshtepiake-kondicioner'}, {'emri': 'Produkte Smart', 'link': 'elektroshtepiake-produkte-smart'}]},
              {
                  "kategoria": "VESHJE FEMRASH",
                  "nenkategorite": [
                      {
                          "emri": "Veshje",
                          "link": "veshje-femrash-veshje"
                      },
                      {
                          "emri": "Intimo",
                          "link": "veshje-femrash-intimo"
                      },
                      {
                          "emri": "K\u00ebpuc\u00eb",
                          "link": "veshje-femrash-k\u00ebpuc\u00eb"
                      },
                      {
                          "emri": "Aksesor\u00eb",
                          "link": "veshje-femrash-aksesor\u00eb"
                      },
                      {
                          "emri": "Plazh",
                          "link": "veshje-femrash-plazh"
                      }
                  ]
              },
              {
                  "kategoria": "VESHJE MESHKUJSH",
                  "nenkategorite": [
                      {
                          "emri": "Veshje",
                          "link": "veshje-meshkujsh-veshje"
                      },
                      {
                          "emri": "Intimo",
                          "link": "veshje-meshkujsh-intimo"
                      },
                      {
                          "emri": "K\u00ebpuc\u00eb",
                          "link": "veshje-meshkujsh-k\u00ebpuc\u00eb"
                      },
                      {
                          "emri": "Aksesor\u00eb",
                          "link": "veshje-meshkujsh-aksesor\u00eb"
                      }
                  ]
              },
              {
                  "kategoria": "VESHJE F\u00cbMIJ\u00cbSH",
                  "nenkategorite": [
                      {
                          "emri": "Vajz\u00eb",
                          "link": "veshje-f\u00ebmij\u00ebsh-vajz\u00eb"
                      },
                      {
                          "emri": "Djal\u00eb",
                          "link": "veshje-f\u00ebmij\u00ebsh-djal\u00eb"
                      }
                  ]
              }
            ],
            searchQ: '',
            search2: '',
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
            itsover: false,
            kategoria: null
        }
    },
    methods: {
      kategoriaSetter(kat){
        this.kategoria = kat;
      },
      itemPressed: function(kategoria, emri){
        console.log("fdsajgfkudsajhbf")
        this.$router.push({ path: "/kategorite/" + kategoria + "/" + emri.toLowerCase(), query: {name: emri} });
      },
      sender(link, emri){
        this.$router.push({path: "/kategorite/"+link, query:{name: emri, kategoria: this.kategoria}});
      },
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
      searchGo: function(){

        if(this.searchQ == "" || this.searchQ == " "){
          return;
        }

        this.$router.push({ path: "/search", query: {search: this.searchQ} });

        this.answer = false;

      },
      search22: function(){

        if(this.search2 == "" || this.search2 == " "){
          return;
        }

        this.$router.push({ path: "/search", query: {search: this.search2} });

        this.answer = false;

      },
      sendToMore: function(){
        this.answer = false;

        this.$router.push({ path: '/search', query: { search: this.searchQ } });
      },
      changeType: async function (){

        if(this.searchQ == "" || this.searchQ == " "){
          return;
        }

        this.search2 = this.searchQ;

        var bodyFormData = new FormData();

        bodyFormData.append('query_text', this.searchQ);
        bodyFormData.append('query_products', 5);

        var obj = await this.$axios({
            method: "post",
            url: "http://91.230.254.11/search",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })

        console.log(JSON.stringify(obj.data));
        this.sToShow = obj.data;
        this.answer = true;
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
      },
      sumOfAll(){
        var total = 0;
        this.cart.forEach(element => {
          total += (parseInt(element.amount)*parseInt(element.quantity));
        });
        return total;
      }
    },
    mounted(){
      if(window.innerHeight <= 680){
        this.height = window.innerHeight * 0.17;
      } else {
        this.height = window.innerHeight * 0.14;
      }
    }
}
</script>

<style scoped>
.justify-left{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.header-height{
  padding: 15px 0 15px 0;
}
.results{
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-radius: 15px;
  background-color: #363f4e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  min-height: 250px;
  transition: 0.3s;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}
.results::-webkit-scrollbar{
  display: none;
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
  overflow: hidden;
}
.tile{
  font-size: 13px;
  color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;
  margin-top: 10px;
  background-color: #363f4e;
  transition: 0.3s;
  height: 50px;
}
.tile p{
  text-align: center;
  padding: 5px 0 5px 10px;
  margin: 0;
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
  justify-content: flex-start;
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
  display: none;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100%;
}
.burger-div-2{
  display: none;
  justify-content: center;
  align-items: flex-start;
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
  margin: 10px 0 0 0;
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
  .header-height{
    padding: 15px 0 15px 0;
  }
  .miniature{
    font-size: 13px;
    color: darkgray;
  }
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
    background-color: #363f4e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: scroll;
    width: 505px;
    min-height: 300px;
    transition: 0.3s;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }
  .results::-webkit-scrollbar{
    display: none;
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
    justify-content: flex-start;
    align-items: center;
    width: 95%;

  }
  .tile{
    font-size: 13px;
    color: black;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3px;
    margin-top: 10px;
    background-color: #363f4e;
    transition: 0.3s;
    height: 50px;
  }
  .tile p{
    text-align: center;
    padding: 5px 0 5px 10px;
    margin: 0;
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
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0 0 10px 0;
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
    height: 45px;
  }
  .burger-div{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 5px 3px 0 ;
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
    height: 44px;
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
    height: 44px;
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