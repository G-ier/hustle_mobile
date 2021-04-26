<template>
    <div class="shop">
        <v-navigation-drawer
        v-model="drawer"
        absolute
        color="white"
        
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
                                    v-model="range"
                                    :max="3000000"
                                    :min="0"
                                    hide-details
                                    class="align-center"
                                    track-color="#f2f2f2"
                                    track-fill-color="secondary"
                                    thumb-color="secondary"
                                >
                                    <template v-slot:prepend>
                                    <p class="qs secondary--text ma-0 pa-0">{{range[0]}}</p>
                                    </template>
                                    <template v-slot:append>
                                    <p class="qs secondary--text ma-0 pa-0">{{range[1]}}</p>
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
                   <div class="sidebar-valuator">
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
                   <div class="sidebar-valuator-2">
                       <p class="qs s15 secondary--text">Cmimi</p>
                        <v-col class="px-4">
                            <v-range-slider
                                v-model="range"
                                :max="3000000"
                                :min="0"
                                hide-details
                                class="align-center"
                                track-color="#f2f2f2"
                                track-fill-color="secondary"
                                thumb-color="secondary"
                            >
                                <template v-slot:prepend>
                                <p class="qs secondary--text ma-0 pa-0">{{range[0]}}</p>
                                </template>
                                <template v-slot:append>
                                <p class="qs secondary--text ma-0 pa-0">{{range[1]}}</p>
                                </template>
                            </v-range-slider>
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
                                    <p class="qs secondary--text ma-0 pa-0 mr-2">Rendit me: </p>
                                    <v-btn
                                        class="white qs btn-c-o secondary--text"
                                        color="white"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
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
                                    <v-list-item-title class="qs secondary--text" style="cursor: pointer;" @click="()=>{renditja = 'Lowest price'}">Lowest price</v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title class="qs secondary--text" style="cursor: pointer;" @click="()=>{renditja = 'Highest price'}">Highest price</v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title class="qs secondary--text" style="cursor: pointer;" @click="()=>{renditja = 'Highest rating'}">Highest rating</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                   </div>
                   <div class="marketplace-item">
                       <div class="marketplace-vendor" v-for="prod in prods" :key="prod.id">
                           <div class="fullscreen-img">
                               <v-img :aspect-ratio="1/1" src="https://banner2.cleanpng.com/20180525/exi/kisspng-xbox-one-controller-microsoft-xbox-one-wireless-co-5b078d818d1ac9.139208551527221633578.jpg"></v-img>
                           </div>
                           <div class="fullscreen-ting">
                               <p class="qs secondary--text">XB10 Portable Wireless Speaker ttttttttttttttttttttttttttttttttt</p>
                               <v-rating
                                    empty-icon="mdi-star-outline"
                                    full-icon="mdi-star"
                                    half-icon="mdi-star-half-full"
                                    hover
                                    length="5"
                                    size="25"
                                    half-increments
                                    readonly
                                    value="3"
                                    class="mb-3"
                                ></v-rating>
                                <p class="qs primary--text">399 ALL</p>
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
export default {
    async asyncData(){
        const pageData = await firebase.firestore().collection('elektronike').where("details.kategoria", "==", "Aksesore").get();
        const page = pageData.docs.map(doc => doc.data());

        return {
            prods: page,
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
            range: [100, 3000000],
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
            yellow: false
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
    width: 100%;
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
    width: 95%;
    margin-top: 10vh;
    height: 81vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: scroll;
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