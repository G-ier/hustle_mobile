<template>
    <div class="shop">
        <v-navigation-drawer
        v-model="drawer"
        absolute
        color="white"
        temporary
        >
            <div class="drawer-container">
            <div class="sidebar sidebar-side">
                <div class="sidebar-links">
                    <h4 class="qs secondary--text ma-0 pa-0">Elektronike</h4>
                    <div class="sideline"></div>
                    <div class="sidebar-link">
                        <p class="qs secondary--text ma-0 pa-0">TV & Audio</p>
                        <v-icon color="secondary" size="20">mdi-arrow-right-drop-circle</v-icon>
                    </div>
                    <div class="sidebar-link">
                        <p class="qs secondary--text ma-0 pa-0">TV & Audio</p>
                        <v-icon color="secondary" size="20">mdi-arrow-right-drop-circle</v-icon>
                    </div>
                    <div class="sidebar-link">
                        <p class="qs secondary--text ma-0 pa-0">TV & Audio</p>
                        <v-icon color="secondary" size="20">mdi-arrow-right-drop-circle</v-icon>
                    </div>
                    <div class="sidebar-link">
                        <p class="qs secondary--text ma-0 pa-0">TV & Audio</p>
                        <v-icon color="secondary" size="20">mdi-arrow-right-drop-circle</v-icon>
                    </div>
                    <div class="sidebar-link">
                        <p class="qs secondary--text ma-0 pa-0">TV & Audio</p>
                        <v-icon color="secondary" size="20">mdi-arrow-right-drop-circle</v-icon>
                    </div>
                </div>
                <div class="sidebar-links mt-5">
                    <h4 class="qs secondary--text ma-0 pa-0 mb-5">Rendit Nga</h4>
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
                                    ></v-checkbox>
                                    <v-checkbox
                                        v-model="checkbox2"
                                        light
                                        label="s"
                                        class="ma-0"
                                        style="margin: 0 0 0 0;"
                                        color="secondary"
                                    ></v-checkbox>
                                    <v-checkbox
                                        v-model="checkbox3"
                                        light
                                        label="m"
                                        class="ma-0"
                                        style="margin: 0 0 0 0;"
                                        color="secondary"
                                    ></v-checkbox>
                                    <v-checkbox
                                        v-model="checkbox4"
                                        light
                                        label="l"
                                        class="ma-0"
                                        style="margin: 0 0 0 0;"
                                        color="secondary"
                                    ></v-checkbox>
                                    <v-checkbox
                                        v-model="checkbox5"
                                        light
                                        label="xl"
                                        class="ma-0"
                                        style="margin: 0 0 0 0;"
                                        color="secondary"
                                    ></v-checkbox>
                                    <v-checkbox
                                        v-model="checkbox6"
                                        light
                                        label="xxl"
                                        class="ma-0"
                                        style="margin: 0 0 0 0;"
                                        color="secondary"
                                    ></v-checkbox>
                                    <v-checkbox
                                        v-model="checkbox7"
                                        light
                                        label="xxxl"
                                        class="ma-0"
                                        style="margin: 0 0 0 0;"
                                        color="secondary"
                                    ></v-checkbox>
                            </div>
                    </div>
                    <div class="sidebar-valuator mt-4">
                        <p class="qs s15 secondary--text">Ngjyrat</p>
                            <div class="repeatable">
                                    <v-checkbox
                                        v-model="white"
                                        light
                                        label="E bardhe"
                                        class="ma-0"
                                        style="margin: 0 0 0 0;"
                                        color="secondary"
                                    ></v-checkbox>
                                    <v-checkbox
                                        v-model="yellow"
                                        light
                                        label="E verdhe"
                                        class="ma-0"
                                        style="margin: 0 0 0 0;"
                                        color="secondary"
                                    ></v-checkbox>
                                    <v-checkbox
                                        v-model="red"
                                        light
                                        label="E kuqe"
                                        class="ma-0"
                                        style="margin: 0 0 0 0;"
                                        color="secondary"
                                    ></v-checkbox>
                                    <v-checkbox
                                        v-model="blue"
                                        light
                                        label="Blu"
                                        class="ma-0"
                                        style="margin: 0 0 0 0;"
                                        color="secondary"
                                    ></v-checkbox>
                                    <v-checkbox
                                        v-model="jeshile"
                                        light
                                        label="Jeshile"
                                        class="ma-0"
                                        style="margin: 0 0 0 0;"
                                        color="secondary"
                                    ></v-checkbox>
                            </div>
                    </div>
                    <div class="sidebar-valuator-2 mt-4">
                        <p class="qs s15 secondary--text">Cmimi</p>
                            <v-col class="px-4">
                                <v-range-slider
                                    v-model="range1"
                                    :max="30000"
                                    :min="0"
                                    hide-details
                                    class="align-center"
                                    track-color="#f2f2f2"
                                    track-fill-color="secondary"
                                    thumb-color="secondary"
                                >
                                    <template v-slot:prepend>
                                    <p class="qs secondary--text ma-0 pa-0">{{range1[0]}}</p>
                                    </template>
                                    <template v-slot:append>
                                    <p class="qs secondary--text ma-0 pa-0">{{range1[1]}}</p>
                                    </template>
                                </v-range-slider>
                            </v-col>
                    </div>
                </div>
            </div>
            </div>
        </v-navigation-drawer>
        
        <div class="tracks">
            <div class="tracky">
                <nuxt-link to="/" class="secondary--text qs btn-c-o">Faqja kryesore <v-icon color="secondary" size="18">mdi-arrow-right-drop-circle</v-icon> </nuxt-link>
                <p class="qs s12 secondary--text pa-0 ma-0 ml-1"> aksesore</p>
            </div>
        </div>
        <div class="market-new mb-3">
           <div class="sidebar">
               <div class="sidebar-links">
                   <h4 class="qs secondary--text ma-0 pa-0">Elektronike</h4>
                   <div class="sideline"></div>
                   <div class="sidebar-link">
                       <p class="qs secondary--text ma-0 pa-0">TV & Audio</p>
                       <v-icon color="secondary" size="20">mdi-arrow-right-drop-circle</v-icon>
                   </div>
                   <div class="sidebar-link">
                       <p class="qs secondary--text ma-0 pa-0">TV & Audio</p>
                       <v-icon color="secondary" size="20">mdi-arrow-right-drop-circle</v-icon>
                   </div>
                   <div class="sidebar-link">
                       <p class="qs secondary--text ma-0 pa-0">TV & Audio</p>
                       <v-icon color="secondary" size="20">mdi-arrow-right-drop-circle</v-icon>
                   </div>
                   <div class="sidebar-link">
                       <p class="qs secondary--text ma-0 pa-0">TV & Audio</p>
                       <v-icon color="secondary" size="20">mdi-arrow-right-drop-circle</v-icon>
                   </div>
                   <div class="sidebar-link">
                       <p class="qs secondary--text ma-0 pa-0">TV & Audio</p>
                       <v-icon color="secondary" size="20">mdi-arrow-right-drop-circle</v-icon>
                   </div>
               </div>
               <div class="sidebar-links">
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
                            <v-range-slider
                                v-model="range"
                                :max="30000"
                                :min="0"
                                hide-details
                                class="align-center"
                                track-color="#f2f2f2"
                                track-fill-color="secondary"
                                thumb-color="secondary"
                            >
                            </v-range-slider>
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
                   <div class="marketplace-item">
                       <div class="marketplace-vendor" v-for="prod in prods" :key="prod.id">
                           <div class="fullscreen-img">
                               <v-img :aspect-ratio="1/1" :src="prod.details.photos[0].src" @click="sendToProduct(prod.details.kategorita, prod.spot)"></v-img>
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
                                    class="mb-3"
                                    small
                                ></v-rating>
                                <p class="qs primary--text">{{prod.details.price}} ALL</p>
                           </div>
                       </div>
                   </div>
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
    </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Cookies from 'js-cookie';
import { parse } from '~/node_modules/cookieparser/js/cookieparser';
export default {
    async asyncData(){
        const pageData = await firebase.firestore().collection('elektronike').where("details.kategoria", "==", "Aksesore").limit(5).get();
        const page = pageData.docs.map(doc => doc.data());
        return {
            prods: page
        }
    },
    head(){
        return{
            title: 'Kompjuterike | hustle',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Pjeset me te fundit kompjuterike tek ne'
                }
            ]
        }
    },
    data(){
        return{
            range: [100, 30000],
            range1: [100, 30000],
            snackbar: false,
            snackbar2: false,
            itemFaved: false,
            drawer: false,
            drawer2: false, 
            group: false,
            group1: false,
            renditja: "Default",
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
            bG: [],
            bR: [],
            bW: [],
            bY: [],
            bB: [],
            saved: [],
            isSaved: false,
            sizes: [],
            newProds: [],
            newSaved: [],
            isSized: false,
            chooseFilters: false,
            prodsCopy: []
        }
    },
    methods: {
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
                return doc1.details.price - doc2.details.price
            })
        },
        filterPriceDes: function(){
            this.prods.sort((doc1, doc2) => {
                return doc2.details.price - doc1.details.price
            })
        },
        filterReviews: function(){
            this.prods.sort((doc1, doc2) => {
                return doc2.details.likes - doc1.details.likes
            })
        },
        applyPrice: function(){
            
            if(this.isSaved == false){
                this.isSaved = true;
                this.prodsCopy = this.prods;
                if(this.checkbox1 == true || this.checkbox2 == true || this.checkbox3 == true || this.checkbox4 == true || this.checkbox5 == true || this.checkbox6 == true || this.checkbox7 == true){
                    
                    this.prods = this.newProds;
                    this.newProds = [];
                } else {
                    this.chooseFilters = true;
                }
            } else {
                if(this.checkbox1 == true){
                    this.prods = this.newProds;
                    this.newProds = [];
                } else {
                    this.chooseFilters = true;
                }
            }
            
        },
        resetFilter(){
            this.prods = this.prodsCopy;
        },
        greenColor1: function(){
            this.blue = false;
            this.red = false;
            this.yellow = false;
            this.white = false;
            if(this.jeshile == true){
                this.bG = [];
                const jari = this.prods.filter((ele)=>{
                    return ele.details.ngjyra == "Jeshile";
                })
                this.prods.forEach((ele) => {
                    if(ele.details.ngjyra != "Jeshile"){
                        console.log("removed")
                        this.bG.push(ele);
                    } 
                });
                this.prods = jari;
            } else {
                console.log("added");
                this.bG.forEach((item)=>{
                    this.prods.push(item);
                });
            }
        },
        yellowColor: function(){
            this.blue = false;
            this.red = false;
            this.jeshile = false;
            this.white = false;
            if(this.yellow == true){
                this.bY = [];
                const jari1 = this.prods.filter((ele)=>{
                    return ele.details.ngjyra == "E verdhe";
                })
                this.prods.forEach((ele) => {
                    if(ele.details.ngjyra != "E verdhe"){
                        console.log("removed")
                        this.bY.push(ele);
                    } 
                });
                this.prods = jari1;
            } else {
                console.log("added");
                this.bY.forEach((item)=>{
                    this.prods.push(item);
                });
            }
        },
        blueColor: function(){
            this.jeshile = false;
            this.red = false;
            this.yellow = false;
            this.white = false;
            if(this.blue == true){
                this.bB = [];
                const jari2 = this.prods.filter((ele)=>{
                    return ele.details.ngjyra == "Blu";
                })
                this.prods.forEach((ele) => {
                    if(ele.details.ngjyra != "Blu"){
                        console.log("removed")
                        this.bB.push(ele);
                    } 
                });
                this.prods = jari2;
            } else {
                console.log("added");
                this.bB.forEach((item)=>{
                    this.prods.push(item);
                });
            }
        },
        whiteColor: function(){
            this.blue = false;
            this.red = false;
            this.yellow = false;
            this.jeshile = false;
            if(this.white == true){
                this.bW = [];
                const jari3 = this.prods.filter((ele)=>{
                    return ele.details.ngjyra == "White";
                })
                this.prods.forEach((ele) => {
                    if(ele.details.ngjyra != "White"){
                        console.log("removed")
                        this.bW.push(ele);
                    } 
                });
                this.prods = jari3;
            } else {
                console.log("added");
                this.bW.forEach((item)=>{
                    this.prods.push(item);
                });
            }
        },
        redColor: function(){
            this.blue = false;
            this.jeshile = false;
            this.yellow = false;
            this.white = false;
            if(this.red == true){
                this.bR = [];
                const jari4 = this.prods.filter((ele)=>{
                    return ele.details.ngjyra == "E kuqe";
                })
                this.prods.forEach((ele) => {
                    if(ele.details.ngjyra != "E kuqe"){
                        console.log("removed")
                        this.bR.push(ele);
                    } 
                });
                this.prods = jari4;
            } else {
                console.log("added");
                this.bR.forEach((item)=>{
                    this.prods.push(item);
                });
            }
        },
        checkBox1: function(){
            console.log(this.checkbox1);
            try{

                if(this.checkbox1 == true){
                    const newArray1 = this.prods.filter((doc)=>{
                        return doc.details.masa == "XS";
                    });
                    const newArray2 = this.saved.filter((doc)=>{
                        return doc.details.masa == "XS";
                    });
                    
                    //Lista me elemente nga prods dhe saved
                    const superlist = newArray1.concat(newArray2);

                    const newProds = this.newProds.concat(superlist);

                    this.newProds = newProds;

                } else {
                    
                    const newProds = this.newProds.filter((doc)=>{
                        return doc.details.masa != "XS";
                    });

                    this.newProds = newProds;
                }
                
            } catch(e){
                console.log(e);
            }
        },
        checkBox2: function(){
            console.log(this.checkbox1);
            try{

                if(this.checkbox2 == true){
                    const newArray1 = this.prods.filter((doc)=>{
                        return doc.details.masa == "S";
                    });
                    const newArray2 = this.saved.filter((doc)=>{
                        return doc.details.masa == "S";
                    });
                    
                    //Lista me elemente nga prods dhe saved
                    const superlist = newArray1.concat(newArray2);
                    console.log(superlist)

                    const newProds = this.newProds.concat(superlist);

                    this.newProds = newProds;

                } else {
                    
                    const newProds = this.newProds.filter((doc)=>{
                        return doc.details.masa != "S";
                    });

                    this.newProds = newProds;
                }
                
            } catch(e){
                console.log(e);
            }
        },
        checkBox3: function(){
            console.log(this.checkbox1);
            try{

                if(this.checkbox3 == true){
                    const newArray1 = this.prods.filter((doc)=>{
                        return doc.details.masa == "M";
                    });
                    const newArray2 = this.saved.filter((doc)=>{
                        return doc.details.masa == "M";
                    });
                    
                    //Lista me elemente nga prods dhe saved
                    const superlist = newArray1.concat(newArray2);

                    const newProds = this.newProds.concat(superlist);

                    this.newProds = newProds;

                } else {
                    
                    const newProds = this.newProds.filter((doc)=>{
                        return doc.details.masa != "M";
                    });

                    this.newProds = newProds;
                }
                
            } catch(e){
                console.log(e);
            }
        },
        checkBox4: function(){
            console.log(this.checkbox1);
            try{

                if(this.checkbox4 == true){
                    const newArray1 = this.prods.filter((doc)=>{
                        return doc.details.masa == "L";
                    });
                    const newArray2 = this.saved.filter((doc)=>{
                        return doc.details.masa == "L";
                    });
                    
                    //Lista me elemente nga prods dhe saved
                    const superlist = newArray1.concat(newArray2);

                    const newProds = this.newProds.concat(superlist);

                    this.newProds = newProds;

                } else {
                    
                    const newProds = this.newProds.filter((doc)=>{
                        return doc.details.masa != "L";
                    });

                    this.newProds = newProds;
                }
                
            } catch(e){
                console.log(e);
            }
        },
        checkBox5: function(){
            console.log(this.checkbox1);
            try{

                if(this.checkbox5 == true){
                    const newArray1 = this.prods.filter((doc)=>{
                        return doc.details.masa == "XL";
                    });
                    const newArray2 = this.saved.filter((doc)=>{
                        return doc.details.masa == "XL";
                    });
                    
                    //Lista me elemente nga prods dhe saved
                    const superlist = newArray1.concat(newArray2);

                    const newProds = this.newProds.concat(superlist);

                    this.newProds = newProds;

                } else {
                    
                    const newProds = this.newProds.filter((doc)=>{
                        return doc.details.masa != "XL";
                    });

                    this.newProds = newProds;
                }
                
            } catch(e){
                console.log(e);
            }
        },
        checkBox6: function(){
            console.log(this.checkbox1);
            try{

                if(this.checkbox6 == true){
                    const newArray1 = this.prods.filter((doc)=>{
                        return doc.details.masa == "2XL";
                    });
                    const newArray2 = this.saved.filter((doc)=>{
                        return doc.details.masa == "2XL";
                    });
                    
                    //Lista me elemente nga prods dhe saved
                    const superlist = newArray1.concat(newArray2);

                    const newProds = this.newProds.concat(superlist);

                    this.newProds = newProds;

                } else {
                    
                    const newProds = this.newProds.filter((doc)=>{
                        return doc.details.masa != "2XL";
                    });

                    this.newProds = newProds;
                }
                
            } catch(e){
                console.log(e);
            }
        },
        checkBox7: function(){
            console.log(this.checkbox1);
            try{

                if(this.checkbox7 == true){
                    const newArray1 = this.prods.filter((doc)=>{
                        return doc.details.masa == "3XL";
                    });
                    const newArray2 = this.saved.filter((doc)=>{
                        return doc.details.masa == "3XL";
                    });
                    
                    //Lista me elemente nga prods dhe saved
                    const superlist = newArray1.concat(newArray2);

                    const newProds = this.newProds.concat(superlist);

                    this.newProds = newProds;

                } else {
                    
                    const newProds = this.newProds.filter((doc)=>{
                        return doc.details.masa != "3XL";
                    });

                    this.newProds = newProds;
                }
                
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
    height: 81vh;
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