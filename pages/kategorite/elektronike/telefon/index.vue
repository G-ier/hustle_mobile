<template>
    <div class="shop">
        <v-navigation-drawer
        v-model="drawer"
        absolute
        color="white"
        temporary
        >
        <v-list
            nav
            dense
        >
            <v-list-item-group
            v-model="group"
            class="primary--text"
            >
            <v-list-item>
                <v-row justify="center"><v-list-item-title><v-btn text color="primary" class="qs rounded-lg white--text" @click="filterPrice">Ascending price</v-btn></v-list-item-title></v-row>
            </v-list-item>

            <v-list-item>
                <v-row justify="center"><v-list-item-title><v-btn text color="primary" class="qs rounded-lg white--text" @click="filterPrice">Ascending price</v-btn></v-list-item-title></v-row>
            </v-list-item>
            </v-list-item-group>
        </v-list>
        </v-navigation-drawer>
        <v-navigation-drawer
        v-model="drawer2"
        absolute
        bottom
        temporary
        color="secondary"
        >
        <v-list
            nav
            dense
        >
            <v-list-item-group
            v-model="group1"
            >
            <v-list-item>
                <v-row justify="center"><v-list-item-title><v-btn text color="white" class="qs rounded-lg white--text" @click="filterPrice">Ascending price</v-btn></v-list-item-title></v-row>
            </v-list-item>

            <v-list-item>
                <v-row justify="center"><v-list-item-title><v-btn text color="white" class="qs rounded-lg white--text" @click="filterPriceDes">Descending price</v-btn></v-list-item-title></v-row>
            </v-list-item>

            </v-list-item-group>
        </v-list>
        </v-navigation-drawer>
        <div class="sets">
            <v-btn icon @click="drawer = !drawer">
                <v-icon color="secondary">mdi-card-text-outline</v-icon>
            </v-btn>
            <h2 class="classy secondary--text">Telefona</h2>
            <v-btn icon @click="drawer2 = !drawer2">
                <v-icon color="secondary">mdi-filter</v-icon>
            </v-btn>
        </div>
        <div class="lineM"></div>
        <div class="market mb-3">
            <div class="market-inner">
                <div class="sell-container" v-for="prod in prods" :key="prod.name">
                    <div class="sellable">
                        <v-img :aspect-ratio="1/1" class="market-img secondary-bg" :src="prod.details.photo" @click="sendToProduct(prod.spot)"></v-img>
                        <div class="safety">
                            <div class="sellable-desc">
                                <h4 class="sell-title">{{prod.details.name}}</h4>
                                <p class="qs sell-price">{{prod.details.price}}$</p>
                                <div class="func-row">
                                    <v-btn color="primary" class="rounded-md" small @click="addToCart(prod.details.name, prod.owner, prod.details.price, 1, prod.details.desc)">Add to cart</v-btn>
                                    <v-btn icon color="secondary" class="rounded-xl" small @click="favorite(prod)"><v-icon color="secondary" size="23">mdi-heart-outline</v-icon></v-btn>
                                </div>
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
        const pageData = await firebase.firestore().collection('elektronike').where("details.kategoria", "==", "Telefon & Aksesore").get();
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
            snackbar: false,
            snackbar2: false,
            itemFaved: false,
            drawer: false,
            drawer2: false, 
            group: false,
            group1: false,
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
        sendToProduct: function (slug){
            this.$router.push({name: 'kategorite-elektronike-tv-dhe-video-slug', params: {slug: slug}});
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
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 15px 0 8px 0;
}
.lineM{
    height: 1px;
    width: 90%;
    background-color: #a10517;
    margin-bottom: 15px;
}
.market{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
}
.market-inner{
    width: 100%;
    padding: 0;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-row-gap: 15px;
}
.sell-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 270px;
}
.sell-link{
    width: 100%;
}
.sellable{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 100%;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    border-radius: 10px;
    overflow: hidden;
}
.market-img{
    width: 100%;
}
.safety{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.sellable-desc{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 90%;
    padding: 10px 0 10px 0;
}
.func-row{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.sell-title{
    color: black;
}
.sell-price{
    color: rgb(48, 48, 48);
    padding: 0;
    margin: 0;
}
@media only screen and (min-width: 850px){
    .sets{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 75%;
        padding: 15px 0 8px 0;
    }
    .lineM{
        height: 1px;
        width: 75%;
        background-color: #a10517;
        margin-bottom: 15px;
    }
    .market{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 830px;
    }
    .market-inner{
        width: 100%;
        padding: 0;
        display: grid;
        grid-template-columns: 33% 33% 33%;
        grid-row-gap: 15px;
    }
    .sell-container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 340px;
        width: 250px;
    }
    .sell-link{
        width: 100%;
    }
    .sellable{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 95%;
        height: 100%;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        border-radius: 10px;
        overflow: hidden;
    }
    .market-img{
        width: 100%;
    }
    .safety{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .sellable-desc{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 90%;
        padding: 10px 0 10px 0;
    }
    .func-row{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .sell-title{
        color: black;
    }
    .sell-price{
        color: rgb(48, 48, 48);
        padding: 0;
        margin: 0 0 10px 0;
    }
}
</style>