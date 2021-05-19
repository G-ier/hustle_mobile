<template>
    <div class="shop">
        <v-navigation-drawer
        v-model="drawer"
        app
        color="white"
        temporary
        bottom
        class="mobile-non"
        >
            <div class="drawer-container remove-scroll-wheel" >
            <div class="sidebar sidebar-side">
               <div class="sidebar-links mb-4 mt-1">
                   <h4 class="qs secondary--text ma-0 pa-0">Kompjutera dhe teknologji</h4>
                   <div class="sideline"></div>
                   <div class="sidebar-link">
                       <nuxt-link class="qs secondary--text btn-c-o ma-0 pa-0" to="/kategorite/computers/computers">Kompjutera dhe tableta</nuxt-link>
                       <v-icon color="secondary" size="20">mdi-arrow-right-drop-circle</v-icon>
                   </div>
                   <div class="sidebar-link">
                       <nuxt-link class="qs secondary--text btn-c-o ma-0 pa-0" to="/kategorite/computers/monitor">Monitora</nuxt-link>
                       <v-icon color="secondary" size="20">mdi-arrow-right-drop-circle</v-icon>
                   </div>
                   <div class="sidebar-link">
                       <nuxt-link class="qs secondary--text btn-c-o ma-0 pa-0" to="/kategorite/computers/pjese">Pjese kompjuterike</nuxt-link>
                       <v-icon color="secondary" size="20">mdi-arrow-right-drop-circle</v-icon>
                   </div>
               </div>
               <div class="sidebar-links mb-4">
                   <v-col class="my-4">
                        <v-btn small class="white--text mb-4" color="secondary" @click="applyPrice">Apliko filtrin</v-btn>
                        <v-btn small class="white--text mb-4" color="secondary" @click="resetFilter">Reset</v-btn>
                        <p class="qs secondary--text">Zgjidh filtrat dhe aplikoji</p>
                    </v-col>
                   <div class="sidebar-valuator">
                       <p class="qs s15 secondary--text">Masat</p>
                        <div class="repeatable">
                                <v-checkbox
                                    v-model="checkbox1"
                                    light
                                    label="xs"
                                    class="ma-0"
                                    style="margin: 0 0 0 0;"
                                    color="secondary"
                                    @click="checkBox1"
                                ></v-checkbox>
                                <v-checkbox
                                    v-model="checkbox2"
                                    light
                                    label="s"
                                    class="ma-0"
                                    style="margin: 0 0 0 0;"
                                    color="secondary"
                                    @click="checkBox2"
                                ></v-checkbox>
                                <v-checkbox
                                    v-model="checkbox3"
                                    light
                                    label="m"
                                    class="ma-0"
                                    style="margin: 0 0 0 0;"
                                    color="secondary"
                                    @click="checkBox3"
                                ></v-checkbox>
                                <v-checkbox
                                    v-model="checkbox4"
                                    light
                                    label="l"
                                    class="ma-0"
                                    style="margin: 0 0 0 0;"
                                    color="secondary"
                                    @click="checkBox4"
                                ></v-checkbox>
                                <v-checkbox
                                    v-model="checkbox5"
                                    light
                                    label="xl"
                                    class="ma-0"
                                    style="margin: 0 0 0 0;"
                                    color="secondary"
                                    @click="checkBox5"
                                ></v-checkbox>
                                <v-checkbox
                                    v-model="checkbox6"
                                    light
                                    label="xxl"
                                    class="ma-0"
                                    style="margin: 0 0 0 0;"
                                    color="secondary"
                                    @click="checkBox6"
                                ></v-checkbox>
                                <v-checkbox
                                    v-model="checkbox7"
                                    light
                                    label="xxxl"
                                    class="ma-0"
                                    style="margin: 0 0 0 0;"
                                    color="secondary"
                                    @click="checkBox7"
                                ></v-checkbox>
                        </div>
                   </div>
                   <div class="sidebar-valuator">
                       <p class="qs s15 secondary--text">Ngjyrat</p>
                        <div class="repeatable">
                                <v-checkbox
                                    v-model="white"
                                    light
                                    class="ma-0"
                                    style="margin: 0 0 0 0;"
                                    color="secondary"
                                    :value="white"
                                    @click="whiteColor"
                                >
                                    <template v-slot:label>
                                        <div style="border: 1px solid #a1a1a1; backgroun-color: white;">
                                            <v-avatar size="20" rounded color="white"></v-avatar>
                                        </div>
                                    </template>
                                </v-checkbox>
                                <v-checkbox
                                    v-model="yellow"
                                    light
                                    label="E verdhe"
                                    class="ma-0"
                                    style="margin: 0 0 0 0;"
                                    color="secondary"
                                    :value="yellow"
                                    @click="yellowColor"
                                >
                                    <template v-slot:label>
                                        <div style="background-color: #e8d820;">
                                            <v-avatar size="20" rounded color="#e8d820"></v-avatar>
                                        </div>
                                    </template>
                                </v-checkbox>
                                <v-checkbox
                                    v-model="red"
                                    light
                                    label="E kuqe"
                                    class="ma-0"
                                    style="margin: 0 0 0 0;"
                                    color="secondary"
                                    :value="red"
                                    @click="redColor"
                                >
                                    <template v-slot:label>
                                        <div style="background-color: #d61114;">
                                            <v-avatar size="20" rounded color="#d61114"></v-avatar>
                                        </div>
                                    </template>
                                </v-checkbox>
                                <v-checkbox
                                    v-model="blue"
                                    light
                                    label="Blu"
                                    class="ma-0"
                                    style="margin: 0 0 0 0;"
                                    color="secondary"
                                    :value="blue"
                                    @click="blueColor"
                                >
                                    <template v-slot:label>
                                        <div style="background-color: #240ac9;">
                                            <v-avatar size="20" rounded color="#240ac9"></v-avatar>
                                        </div>
                                    </template>
                                </v-checkbox>
                                <v-checkbox
                                    v-model="jeshile"
                                    light
                                    label="Jeshile"
                                    class="ma-0"
                                    style="margin: 0 0 0 0;"
                                    color="secondary"
                                    :value="jeshile"
                                    @click="greenColor1"
                                >
                                    <template v-slot:label>
                                        <div style="background-color: #119e22;">
                                            <v-avatar size="20" rounded color="#119e22"></v-avatar>
                                        </div>
                                    </template>
                                </v-checkbox>
                        </div>
                   </div>
                   <div class="sidebar-valuator-2">
                       <p class="qs s15 secondary--text">Cmimi</p>
                        <v-col class="px-4">
                            <v-text-field
                                label="Cmimi minimal"
                                color="secondary"
                                light
                                v-model="range[0]"
                                @change="pricer"
                                :error-messages="num1Errors"
                                @input="$v.num1.$touch()"
                            >
                                <template slot="append-outer">
                                    <p class="qs secondary--text">ALL</p>
                                </template>
                            </v-text-field>
                            <v-text-field
                                label="Cmimi maksimal"
                                color="secondary"
                                light
                                v-model="range[1]"
                                @change="pricer"
                                :error-messages="num2Errors"
                                @input="$v.num2.$touch()"
                            >
                                <template slot="append-outer">
                                    <p class="qs secondary--text">ALL</p>
                                </template>
                            </v-text-field>
                            <p class="qs secondary--text">Min: {{range[0]}} | Max: {{range[1]}}</p>
                        </v-col>
                   </div>
               </div>
           </div>
            </div>
        </v-navigation-drawer>
        
        <div class="tracks">
            <div class="tracky">
                <nuxt-link to="/" class="secondary--text qs btn-c-o">Faqja kryesore <v-icon color="secondary" size="18">mdi-arrow-right-drop-circle</v-icon> </nuxt-link>
                <p class="qs s12 secondary--text pa-0 ma-0 ml-1"> {{nameting}}</p>
            </div>
        </div>
        <div class="market-new mb-3">
           <div class="sidebar">
               <div class="sidebar-links mb-4">
                   <h4 class="qs secondary--text ma-0 pa-0">{{nameting}}</h4>
                   <div class="sideline"></div>
                   <div v-for="link in links" :key="link.id" style="width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                       <div v-if="link.kategoria == catting" style="width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                            <div class="sidebar-link" v-for="ting in link.nenkategorite" :key="ting.id">
                                <p class="qs secondary--text btn-c-o ma-0 pa-0" style="cursor: pointer;" @click="sender(ting.link, ting.emri)">{{ting.emri}}</p>
                                <v-icon color="secondary" size="20">mdi-arrow-right-drop-circle</v-icon>
                            </div>  
                        </div>
                   </div>
               </div>
               <div class="sidebar-links mb-4">
                   <v-col class="my-4">
                        <v-btn small class="white--text mb-4" color="secondary" @click="applyFilters">Apliko filtrin</v-btn>
                        <v-btn small class="white--text mb-4" color="secondary" @click="resetFilter">Reset</v-btn>
                        <p class="qs secondary--text">Zgjidh filtrat dhe aplikoji</p>
                    </v-col>
                   <div class="sidebar-valuator" v-for="filter in dumb" :key="filter.id">
                       <p class="qs s15 secondary--text">{{filter.emri}}</p>
                        <div class="repeatable">
                            
                                <v-checkbox
                                    v-for="sta in filter.values"
                                    :key="sta.id"
                                    v-model="sta.checked"
                                    light
                                    :label="sta.emri"
                                    class="ma-0"
                                    style="margin: 0 0 0 0;"
                                    color="secondary"
                                    @change="checkBox(sta.emri, filter.emri, sta.checked)"
                                    
                                ></v-checkbox>
                        </div>
                   </div>
                   
                   <div class="sidebar-valuator-2">
                       <p class="qs s15 secondary--text">Cmimi</p>
                        <v-col class="px-4">
                            <b-field>
                                <b-slider v-model="range" :min="0" :max="30000" :step="2" @change="pricer">
                                </b-slider>
                            </b-field>
                            <p class="qs secondary--text">Min: {{range[0]}} | Max: {{range[1]}}</p>
                        </v-col>
                   </div>
               </div>
           </div>
           <div class="main-area">
               <div class="causal-ad" :style="{'background-image': 'url(https://cdn.wallpapersafari.com/14/56/Cb8S0T.jpg)'}">
                   <h1 class="qs secondary--text ma-0 pa-o">The New Samsung S7/S7 Edge</h1>
                   <p class="qs secondary--text ma-0 pa-0">Floating style smartphone</p>
               </div>
               <div class="marketplace">
                   <div class="marketplace-starter mt-5 mb-5">
                       <p class="qs secondary--text ma-0 pa-0">Ketu jane {{prods.length}} produkte</p>
                        <v-menu
                        rounded
                        offset-y
                        transition="slide-y-transition"
                        light
                        >  
                            <template v-slot:activator="{ on, attrs }">
                                <div class="rendit">
                                    <p class="qs secondary--text ma-0 pa-0 mr-2">Rendesi: </p>
                                    <v-btn
                                        class="white qs btn-c-o secondary--text"
                                        color="white"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                        small
                                        >
                                        {{renditja}} <span class="white--text">---</span> <v-icon size="15" color="secondary--text">mdi-arrow-down-drop-circle</v-icon>
                                    </v-btn>
                                    <v-spacer class="grid-buttons"></v-spacer>
                                    <v-btn icon class="btn-c-o grid-buttons" @click="drawer = true">
                                        <v-icon color="secondary">mdi-dots-grid</v-icon>
                                    </v-btn>
                                </div>
                            </template>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-title class="qs secondary--text" style="cursor: pointer;" @click="()=>{filterPrice(); renditja = 'Cmimit: Lire - Shtrenjt'}">Cmimi: Lire - Shtrenjt</v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title class="qs secondary--text" style="cursor: pointer;" @click="()=>{filterPriceDes(); renditja = 'Cmimi: Shtrenjt - Lire'}">Cmimi: Shtrenjt - Lire</v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title class="qs secondary--text" style="cursor: pointer;" @click="()=>{filterReviews();renditja = 'Sipas vleresimit'}">Sipas vleresimit</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                   </div>
                   <div class="marketplace-item" v-if="prods.length > 0">
                       <div class="marketplace-vendor" v-for="prod in prods" :key="prod.id">
                           <div class="fullscreen-img">
                               <v-img :aspect-ratio="1/1" :src="prod.details.photos[0].src" @click="product(prod.spot)">
                                <v-chip
                                    v-if="prod.creationTime + 172800000 >= Date.now()"
                                    class="ma-2"
                                    color="green"
                                    label
                                    >
                                    I ri
                                </v-chip>
                               </v-img>
                           </div>
                           <div class="fullscreen-ting">
                               <p class="qs secondary--text s20">{{prod.details.name}}</p>
                               <v-rating
                                    empty-icon="mdi-star-outline"
                                    full-icon="mdi-star"
                                    half-icon="mdi-star-half-full"
                                    hover
                                    length="5"
                                    size="25"
                                    half-increments
                                    readonly
                                    :value="prod.details.likes/prod.details.likers"
                                    class="mx-0"
                                    small
                                ></v-rating>
                                <p class="qs secondary--text mb-3">{{'(' + prod.details.likers + ')'}}</p>
                                <p class="qs primary--text pricey" v-if="prod.details.priceLow">{{prod.details.priceLow}} ALL <span class="miniature grey--text text-decoration-line-through" v-if="prod.details.priceLow != null">{{prod.details.price}} ALL</span></p>
                                <p class="qs primary--text pricey" v-if="prod.details.priceLow == null">{{prod.details.price}} ALL</p>
                                
                           </div>
                       </div>
                   </div>
                   <div class="marketplace-item" v-else>
                       <v-row justify="center">
                           <p class="qs secondary--text">Asnje produkt i lidhur me kerkimin.</p>
                       </v-row>
                   </div>
                   <v-spacer></v-spacer>
                   <v-btn text color="secondary" class="qs secondary--text mt-10" v-if="prods.length > 0" @click="loadMore">Trego me shume</v-btn>
               </div>
           </div>
        </div>
        <v-snackbar
        v-model="snackbar"
        timeout="3000"
        color="primary"
        >
        Item added to cart.

        <template v-slot:action="{ attrs }">
            <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbar = false"
            >
            Close
            </v-btn>
        </template>
        </v-snackbar>
        <v-snackbar
        v-model="snackbar2"
        timeout="3000"
        color="secondary"
        >
        Item added to favourites.

        <template v-slot:action="{ attrs }">
            <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbar2 = false"
            >
            Close
            </v-btn>
        </template>
        </v-snackbar>
        <v-snackbar
        v-model="itemFaved"
        timeout="3000"
        color="secondary"
        >
        Item already in favourites.

        <template v-slot:action="{ attrs }">
            <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="itemFaved = false"
            >
            Close
            </v-btn>
        </template>
        </v-snackbar>
        <v-btn
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            fixed
            bottom
            right
            color="primary"
            @click="toTop"
          >
            <v-icon color="white">mdi-arrow-up</v-icon>
          </v-btn>
    </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Cookies from 'js-cookie';
import {validationMixin} from 'vuelidate'
import {numeric} from 'vuelidate/lib/validators'
export default {
    mixins: [validationMixin],
    async asyncData({$axios, route}){
        var katrequest = route.query.name;
        var categ = route.query.kategoria;

        //const data = await $axios.post('http://34.65.32.131/products_and_filters', null, {
        //    params: {
        //        category: katrequest,
        //        last: 9
        //    },
            
        //});
        
        const data = await $axios({
            method: "post",
            url: "http://34.65.32.131/products_and_filters",
            params: {
                category: katrequest,
                last: 9
            },
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        })

        const prods = data.data.produktet.slice(0, 9);
        const filters = data.data.filtrat; 

        console.log(JSON.stringify(filters));

        var dumb = [];

        filters.forEach((el) => {
            dumb.push({
                emri: el.emri,
                value: el.value,
                values: el.values
            });
        });

        console.log("Skr:" + JSON.stringify(dumb));
        

        return {
            all: data.data.produktet,
            prods: prods,
            filters: filters,
            last: 9,
            nameting: data.data.kategoria,
            catting: categ,
            dumb: dumb
        }
    },
    head(){
        return{
            title: this.nameting,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Gjerat t emira te bukra tek ne'
                }
            ]
        }
    },
    data(){
        return{
            selected: [],
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
              {'kategoria': 'Elektroshtepiake', 'nenkategorite': [{'emri': 'Kondicioner', 'link': 'elektroshtepiake-kondicioner'}, {'emri': 'Produkte Smart', 'link': 'elektroshtepiake-produkte-smart'}]}
            ],
            overload: false,
            fab: false,
            chip4: true,
            page: 1,
            range: [100, 30000],
            range1: [100, 30000],
            snackbar: false,
            snackbar2: false,
            itemFaved: false,
            drawer: false,
            drawer2: false, 
            group: false,
            group1: false,
            renditja: "Pa renditje",
            checkbox1: false,
            checkbox2: false,
            checkbox3: false,
            checkbox4: false,
            checkbox5: false,
            checkbox6: false,
            checkbox7: false,
            white: false,   
            jeshile: false,
            blue: false,
            red: false,
            yellow: false,
            saved: [],
            isSaved: false,
            sizes: [],
            newProds: [],
            newSaved: [],
            isSized: false,
            chooseFilters: false,
            prodsCopy: [],
            firstTime: true,
            colorList: [],
            priceList: [],
            masaList: [],
            colorCopy: []
        }
    },
    validations: {
        
        num1: {
            numeric
        },
        num2: {
            numeric
        }
        
    },
    computed: {
        num1Errors () {
            const errors = []
            if (!this.$v.num1.$dirty) return errors
            this.$v.num1.numeric&& errors.push('Duhet te jete numer')
            return errors
        },
        num2Errors () {
            const errors = []
            if (!this.$v.num2.$dirty) return errors
            this.$v.num2.numeric&& errors.push('Duhet te jete numer')
            return errors
        },
    },
    methods: {
        
        //loadMore: async function(){
        //    console.log(this.last);
        //    const pageData2 = await firebase.firestore().collection('aksesore').orderBy("details.likes").startAfter(this.last).limit(3).get();
        //    const newStuff = pageData2.docs.map(doc => doc.data());
        //    console.log(newStuff);
        //    const last = this.last + 3;
        //    this.last = last;
        //    
        //    const newProds = this.prods.concat(newStuff);
        //    const unique = newProds.filter((value, index)=>{
        //      return newProds.indexOf(value) === index;
        //    });
            
        //    this.prods = unique;
            
            
        //},
        async product(spot){
            const currRoute = this.$route.path;
            this.$router.push({path: currRoute + "/" + spot.toLowerCase(), query:{name: spot}});
        },
        async applyFilters(){
            
            var priceChecker = this.selected.filter((doc)=>{
                return doc.kategoria == "price";
            })

            if(priceChecker.length == 0){
                this.selected.push({
                    kategoria: "price",
                    min_value: this.range[0],
                    max_value: this.range[1]
                });
            }

            var bodyFormData = new FormData();

            bodyFormData.append('filter_data', JSON.stringify({
                filters: this.selected,
                category: this.nameting,
                last: this.last
            }));

            var obj = await this.$axios({
                method: "post",
                url: "http://34.65.32.131/filter",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" },
            })

            this.prods = obj.data.produktet;

            console.log("skr2: "+ JSON.stringify(obj.data.produktet));
        },
        sender(link, emri){
            this.$router.push({path: "/kategorite/"+link, query:{name: emri, kategoria: this.kategoria}});
        },
        loadMore: function(){
            const newProds = this.all.slice(this.last, this.last+6);
            if(this.overload == true){
                return;
            }
            if(this.last+6>this.all.length){
                this.overload = true;
            }
            const newProds2 = this.prods.concat(newProds);
            this.prods = newProds2;

            if(this.renditja == "Cmimit: Lire - Shtrenjt"){
                this.filterPrice();
            } else if(this.renditja == "Cmimi: Shtrenjt - Lire"){
                this.filterPriceDes();
            } else if(this.renditja == "Sipas vleresimit") {
                this.filterReviews();
            }  

            if(this.renditja == "Cmimit: Lire - Shtrenjt"){
                this.filterPrice();
            } else if(this.renditja == "Cmimi: Shtrenjt - Lire"){
                this.filterPriceDes();
            } else if(this.renditja == "Sipas vleresimit") {
                this.filterReviews();
            }   
        },
        onScroll (e) {
            if (typeof window === 'undefined') return
            const top = window.pageYOffset ||   e.target.scrollTop || 0
            this.fab = top > 20
        },
        toTop () {
            this.$vuetify.goTo(0)
        },
        onScroll (e) {
            if (typeof window === 'undefined') return
            const top = window.pageYOffset ||   e.target.scrollTop || 0
            this.fab = top > 20
        },
        toTop () {
            this.$vuetify.goTo(0);
        },
        addToCart: async function(emri, seller, price, times, desc){
            var currentCartJSON = Cookies.get("cart_hustle");
            
            if(typeof currentCartJSON === 'undefined'){
                currentCart = [];
            } else {
                var currentCart = JSON.parse(currentCartJSON);
            }

            const cartNewDetails = {
                cartEmri: emri,
                cartTimes: times,
                currentCart: currentCart
            }
            currentCart.forEach((doc) => {
                if(doc.prodEmri == emri){
                    this.$store.dispatch("users/updateCart", cartNewDetails);
                    return;
                }
            })

            await this.$store.dispatch("users/addToCart", {
                emri: emri,
                seller: seller,
                price: price,
                times: times,
                desc: desc,
                currentCart: currentCart
            });
            console.log(currentCart);

            this.snackbar = true;
        },
        sendToProduct: function (slug1, slug2){
            this.$router.push({path: "/kategorite" + slug1 + "/" + slug2});
        },
        filterPrice: function(){
            this.prods.sort((doc1, doc2) => {
                if(doc1.details.priceLow && doc2.details.priceLow){
                    return doc1.details.priceLow - doc2.details.priceLow;
                } else if (doc1.details.priceLow && !doc2.details.priceLow){
                    return doc1.details.priceLow - doc2.details.price;
                } else if (!doc1.details.priceLow && doc2.details.priceLow){
                    return doc1.details.price - doc2.details.priceLow;
                } else {
                    return doc1.details.price - doc2.details.price;
                }
            })
        },
        filterPriceDes: function(){
            this.prods.sort((doc1, doc2) => {
                if(doc2.details.priceLow && doc1.details.priceLow){
                    return doc2.details.priceLow - doc1.details.priceLow;
                } else if (doc2.details.priceLow && !doc1.details.priceLow){
                    return doc2.details.priceLow - doc1.details.price;
                } else if (!doc2.details.priceLow && doc1.details.priceLow){
                    return doc2.details.price - doc1.details.priceLow;
                } else {
                    return doc2.details.price - doc1.details.price;
                }
            })
        },
        filterReviews: function(){
            this.prods.sort((doc1, doc2) => {
                if((doc2.details.likes)/(doc2.details.likers) > (doc1.details.likes)/(doc1.details.likers)){
                    console.log("case 1");
                    return 1;
                } else if((doc2.details.likes)/(doc2.details.likers) < (doc1.details.likes)/(doc1.details.likers)){
                    console.log("case 2");
                    return -1;
                } else {
                    if(doc2.details.likers > doc1.details.likers){
                        return 1;
                    } else if(doc2.details.likers < doc1.details.likers) {
                        return -1;
                    } else {
                        if(doc2.details.likes){
                            return 1;
                        } else {
                            return -1;
                        }
                    }
                }
            });
        },
        resetFilter(){
            this.dumb.forEach((el) => {
                el.values.forEach(doc => {
                    doc.checked = false;
                })
            });
            this.selected = [];
            this.prods = this.all;
        },
        greenColor1: function(){
            try{
                this.white = false;
                this.red = false;
                this.yellow = false;
                this.blue = false;

                if(this.jeshile == true){
                    if(this.firstTime == true){
                        this.prodsCopy = this.prods;
                    }
                    const needed = this.prods.filter((item)=>{
                        return item.details.ngjyra == "Jeshile";
                    });

                    var newColorList = this.colorList.concat(needed);

                    newColorList = [...new Set([...this.colorList, ...needed])];

                    console.log(JSON.stringify(newColorList));

                    this.colorList = newColorList;

                } else {
                    const needed = this.prodsCopy.filter((item)=>{
                        return item.details.ngjyra != "Jeshile" || item.details.ngjyra == "Jeshile";
                    });

                    this.colorList = needed;
                }
                
            } catch(e){
                console.log(e);
            }
        },
        yellowColor: function(){
            try{
                this.white = false;
                this.red = false;
                this.blue = false;
                this.jeshile = false;

                if(this.yellow == true){
                    if(this.firstTime == true){
                        this.prodsCopy = this.prods;
                    }
                    const needed = this.prods.filter((item)=>{
                        return item.details.ngjyra == "E verdhe";
                    });

                    var newColorList = this.colorList.concat(needed);

                    newColorList = [...new Set([...this.colorList, ...needed])];

                    console.log(JSON.stringify(newColorList));

                    this.colorList = newColorList;

                } else {
                    const needed = this.prodsCopy.filter((item)=>{
                        return item.details.ngjyra != "E verdhe" || item.details.ngjyra == "E verdhe";
                    });

                    this.colorList = needed;
                }
                
            } catch(e){
                console.log(e);
            }
        },
        blueColor: function(){
            try{
                this.white = false;
                this.red = false;
                this.yellow = false;
                this.jeshile = false;

                if(this.blue == true){
                    if(this.firstTime == true){
                        this.prodsCopy = this.prods;
                    }
                    const needed = this.prods.filter((item)=>{
                        return item.details.ngjyra == "Blu";
                    });

                    var newColorList = this.colorList.concat(needed);

                    newColorList = [...new Set([...this.colorList, ...needed])];

                    console.log(JSON.stringify(newColorList));

                    this.colorList = newColorList;

                } else {
                    const needed = this.prodsCopy.filter((item)=>{
                        return item.details.ngjyra != "Blu" || item.details.ngjyra == "Blu";
                    });

                    this.colorList = needed;
                }
                
            } catch(e){
                console.log(e);
            }
        },
        whiteColor: function(){
            try{
                this.blue = false;
                this.red = false;
                this.yellow = false;
                this.jeshile = false;

                if(this.white == true){
                    if(this.firstTime == true){
                        this.prodsCopy = this.prods;
                    }
                    const needed = this.prods.filter((item)=>{
                        return item.details.ngjyra == "E bardhe";
                    });

                    var newColorList = this.colorList.concat(needed);

                    newColorList = [...new Set([...this.colorList, ...needed])];

                    console.log(JSON.stringify(newColorList));

                    this.colorList = newColorList;

                } else {
                    const needed = this.prodsCopy.filter((item)=>{
                        return item.details.ngjyra != "E bardhe" || item.details.ngjyra == "E bardhe";
                    });

                    this.colorList = needed;
                }
                
            } catch(e){
                console.log(e);
            }
        },
        redColor: function(){
            try{
                this.white = false;
                this.blue = false;
                this.yellow = false;
                this.jeshile = false;

                if(this.red == true){
                    if(this.firstTime == true){
                        this.prodsCopy = this.prods;
                    }
                    const needed = this.prods.filter((item)=>{
                        return item.details.ngjyra == "E kuqe";
                    });

                    var newColorList = this.colorList.concat(needed);

                    newColorList = [...new Set([...this.colorList, ...needed])];

                    console.log(JSON.stringify(newColorList));

                    this.colorList = newColorList;

                } else {
                    const needed = this.prodsCopy.filter((item)=>{
                        return item.details.ngjyra != "E kuqe" || item.details.ngjyra == "E kuqe";
                    });

                    this.colorList = needed;
                }
                
            } catch(e){
                console.log(e);
            }
        },
        checkBox(value, emri, regulator){
            if(regulator == true){
                this.selected.push({
                    kategoria: emri,
                    value: value
                });
            } else {
                this.selected = this.selected.filter((doc)=>{
                    return doc.value != value;
                });
            }
        },
        checkBox1: function(){
            try{

                if(this.checkbox1 == true){
                    if(this.firstTime == true){
                        this.firstTime = false;
                        this.prodsCopy = this.prods;
                    }
                    const needed = this.prods.filter((item)=>{
                        return item.details.masa == "XS";
                    });

                    var newMasaList = this.masaList.concat(needed);

                    newMasaList = [...new Set([...this.colorList, ...needed])];

                    this.masaList = newMasaList;

                } else {
                    const needed = this.prodsCopy.filter((item)=>{
                        return item.details.masa != "XS" || item.details.masa == "XS";
                    });

                    this.masaList = needed;
                }
                
            } catch(e){
                console.log(e);
            }
        },
        checkBox2: function(){
            try{

                if(this.checkbox2 == true){
                    if(this.firstTime == true){
                        this.firstTime = false;
                        this.prodsCopy = this.prods;
                    }
                    const needed = this.prods.filter((item)=>{
                        return item.details.masa == "S";
                    });

                    var newMasaList = this.masaList.concat(needed);

                    newMasaList = [...new Set([...this.colorList, ...needed])];

                    this.masaList = newMasaList;

                } else {
                    const needed = this.prodsCopy.filter((item)=>{
                        return item.details.masa != "S" || item.details.masa == "S";
                    });

                    this.masaList = needed;
                }
                
            } catch(e){
                console.log(e);
            }
        },
        checkBox3: function(){
            try{

                if(this.checkbox3 == true){
                    if(this.firstTime == true){
                        this.firstTime = false;
                        this.prodsCopy = this.prods;
                    }
                    const needed = this.prods.filter((item)=>{
                        return item.details.masa == "M";
                    });

                    var newMasaList = this.masaList.concat(needed);

                    newMasaList = [...new Set([...this.colorList, ...needed])];

                    this.masaList = newMasaList;

                } else {
                    const needed = this.prodsCopy.filter((item)=>{
                        return item.details.masa != "M" || item.details.masa == "M";
                    });

                    this.masaList = needed;
                }
                
            } catch(e){
                console.log(e);
            }
        },
        checkBox4: function(){
            try{

                if(this.checkbox4 == true){
                    if(this.firstTime == true){
                        this.firstTime = false;
                        this.prodsCopy = this.prods;
                    }
                    const needed = this.prods.filter((item)=>{
                        return item.details.masa == "L";
                    });

                    var newMasaList = this.masaList.concat(needed);

                    newMasaList = [...new Set([...this.colorList, ...needed])];

                    this.masaList = newMasaList;

                } else {
                    const needed = this.prodsCopy.filter((item)=>{
                        return item.details.masa != "L" || item.details.masa == "L";
                    });

                    this.masaList = needed;
                }
                
            } catch(e){
                console.log(e);
            }
        },
        checkBox5: function(){
            try{

                if(this.checkbox5 == true){
                    if(this.firstTime == true){
                        this.firstTime = false;
                        this.prodsCopy = this.prods;
                    }
                    const needed = this.prods.filter((item)=>{
                        return item.details.masa == "XL";
                    });

                    var newMasaList = this.masaList.concat(needed);

                    newMasaList = [...new Set([...this.colorList, ...needed])];

                    this.masaList = newMasaList;

                } else {
                    const needed = this.prodsCopy.filter((item)=>{
                        return item.details.masa != "XL" || item.details.masa == "XL";
                    });

                    this.masaList = needed;
                }
                
            } catch(e){
                console.log(e);
            }
        },
        checkBox6: function(){
            try{

                if(this.checkbox6 == true){
                    if(this.firstTime == true){
                        this.firstTime = false;
                        this.prodsCopy = this.prods;
                    }
                    const needed = this.prods.filter((item)=>{
                        return item.details.masa == "2XL";
                    });

                    var newMasaList = this.masaList.concat(needed);

                    newMasaList = [...new Set([...this.colorList, ...needed])];

                    this.masaList = newMasaList;

                } else {
                    const needed = this.prodsCopy.filter((item)=>{
                        return item.details.masa != "2XL" || item.details.masa == "2XL";
                    });

                    this.masaList = needed;
                }
                
            } catch(e){
                console.log(e);
            }
        },
        checkBox7: function(){
            try{

                if(this.checkbox7 == true){
                    if(this.firstTime == true){
                        this.firstTime = false;
                        this.prodsCopy = this.prods;
                    }
                    const needed = this.prods.filter((item)=>{
                        return item.details.masa == "3XL";
                    });

                    var newMasaList = this.masaList.concat(needed);

                    newMasaList = [...new Set([...this.colorList, ...needed])];

                    this.masaList = newMasaList;

                } else {
                    const needed = this.prodsCopy.filter((item)=>{
                        return item.details.masa != "3XL" || item.details.masa == "3XL";
                    });

                    this.masaList = needed;
                }
                
            } catch(e){
                console.log(e);
            }
        },
        pricer: function(){
            try{
                this.selected.push({
                    kategoria: "price",
                    min_value: this.range[0],
                    max_value: this.range[1]
                })
                this.priceList = [];



                const needed = this.prods.filter((doc)=>{
                    return parseInt(doc.details.price) >= parseInt(this.range[0]) && parseInt(doc.details.price) <= parseInt(this.range[1]);
                });


                const newPriceList = this.priceList.concat(needed);



                this.priceList = newPriceList;
                
            } catch(e){
                console.log(e);
            }


        },
        favorite: function(product){
            if(process.browser){
                var favs = localStorage.getItem("products");
            }

            if(!favs){
                pavs = [];
            } else {
                var pavs = JSON.parse(favs);
                pavs.forEach((fav) => {
                    if(product.details.name == fav.details.name && product.details.price == fav.details.price){
                        this.itemFaved = true;
                        throw "exit";
                    }
                });
            }
            
            pavs.push(product);
            localStorage.setItem("products", JSON.stringify(pavs));
            this.itemFaved = true;
        }
    }
    
}
</script>

<style scoped>
.display-none{
    display: none;
}
.display-flex{
    display: flex;
}
.remove-scroll-wheel {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}
.remove-scroll-wheel::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
.tracks{
    display: flex;
    justify-content: space-between;
    width: 90%;

}
.tracky{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0 10px 0;
}
.shop{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    min-height: 81vh;
    background-color: white;
}
.sets{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 90%;
    padding: 15px 0 8px 0;
}
.market-new{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
}
.sidebar{
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 95%;
}
.sidebar-side{
    display: flex;
}
.sidebar-links{
    border: 1px solid #f2f2f2;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 10px;
}
.sidebar-links h4{
    text-align: left;
    width: 90%;
}
.sideline{
    height: 1px;
    background-color: #f2f2f2;
    width: 100%;
    margin-top: 10px;
}
.sidebar-valuator{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 90%;
}
.sidebar-valuator-2{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 90%;
}
.repeatable{
    display: grid;
    grid-template-columns: 45% 45%;
    grid-column-gap: 10%;
    width: 90%;
}
.sidebar-link{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 10px 0 5px 0;
    border-bottom: 1px solid #f2f2f2;
}
.main-area{
    width: 100%;
}
 .causal-ad{
    width: 100%;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
    border-radius: 15px;
    background-size: cover;
    background-position-y: top;
    background-position-x: left;
} 
.marketplace{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.marketplace-starter{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 10px;
    padding: 15px;
}
.rendit{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    width: 100%;
}
.grid-buttons{
    display: block;
}
.marketplace-item{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.marketplace-vendor{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
}
.fullscreen-img{
    width: 100%;

}   
.fullscreen-ting{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-top: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.drawer-container{
    position: absolute;
    top: 0vh;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: scroll;
}
.drawer-container {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}
.sidebar-side::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
@media only screen and (min-width: 900px){
    .drawer-container{
        display: none;
    }
    .mobile-non{
        display: none;
    }
    .grid-buttons{
        display: none;
    }
    .tracks{
        display: flex;
        justify-content: space-between;
        width: 80%;
    }
    .tracky{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .sets{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 75%;
        padding: 15px 0 8px 0;
    }
    .market-new{
        display: grid;
        grid-template-columns: 24% 75%;
        grid-column-gap: 1%;
        align-items: flex-start;
        width: 80%;
    }
    .sidebar{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
    }
    .sidebar-links{
        border: 1px solid #f2f2f2;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        padding: 10px;
    }
    .sidebar-links h4{
        text-align: left;
        width: 90%;
    }
    .sideline{
        height: 1px;
        background-color: #f2f2f2;
        width: 100%;
        margin-top: 10px;
    }
    .sidebar-valuator{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 90%;
    }
    .sidebar-valuator-2{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 90%;
    }
    .repeatable{
        display: grid;
        grid-template-columns: 45% 45%;
        grid-column-gap: 10%;
        width: 90%;
    }
    .sidebar-link{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        padding: 10px 0 5px 0;
        border-bottom: 1px solid #f2f2f2;
    }
    .causal-ad{
        width: 100%;
        height: 230px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 10px;
        border-radius: 15px;
        background-size: cover;
        background-position-y: top;
        background-position-x: left;
    }
    .marketplace{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .marketplace-starter{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #f2f2f2;
        border-radius: 10px;
        padding: 15px;
    }
    .marketplace-starter p {
        margin-bottom: 2px;
    }
    .rendit{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        margin-top: 0px;
    }
    .marketplace-item{
        width: 100%;
        display: grid;
        grid-template-columns: 30% 30% 30%;
        grid-column-gap: 4%;
        grid-row-gap: 10px;
        border-right: 1px solid #f2f2f2;

    }
    .marketplace-vendor{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

    }
    .fullscreen-img{
        width: 100%;

    }   
    .fullscreen-ting{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        margin-top: 15px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
}    
</style>