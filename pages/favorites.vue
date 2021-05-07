<template>
    <div class="shop">
        <div class="sets">
            
            <h2 class="classy secondary--text">Te preferuarat</h2>
            
        </div>
        <div class="lineM"></div>
        <div class="market mb-3" v-if="favs.length > 0">
            <div class="market-inner">
                <div class="sell-container" v-for="prod in favs" :key="prod.name">
                    <div class="sellable">
                        <v-img :aspect-ratio="1/1" class="market-img secondary-bg" :src="prod.details.photos[0]" @click="sendToProduct(prod.spot)"></v-img>
                        <div class="safety">
                            <div class="sellable-desc">
                                <h4 class="sell-title">{{prod.details.name}}</h4>
                                <p class="qs sell-price">{{prod.details.price}}$</p>
                                <div class="func-row">
                                    <v-btn color="primary" class="rounded-md" small @click="addToCart(prod.details.name, prod.owner, prod.details.price, 1, prod.details.desc)">Add to cart</v-btn>
                                    <v-btn icon color="secondary" class="rounded-xl" small @click="unfave(prod)"><v-icon color="secondary" size="23">mdi-heart</v-icon></v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="market-empty" v-else>
            <p class="qs secondary--text">Akoma pa preferenca.</p>
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
        v-model="unfav"
        timeout="3000"
        color="secondary"
        >
        Item removed from favourites.

        <template v-slot:action="{ attrs }">
            <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="unfav = false"
            >
            Close
            </v-btn>
        </template>
        </v-snackbar>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
export default {
    asyncData(){
        console.log("gigi")
        if(process.browser){
            var favs = localStorage.getItem("products");
            console.log(favs)
        }
        if(!favs){
            favs = [];
            return{
                favs: favs,
                empty: true
            }
        } else {
            var pavs = JSON.parse(favs);
            return{
                favs: pavs,
                empty: false
            }
        }
    },
    created(){
        if(process.browser){
            var fave = localStorage.getItem("products");
        }
        if(!fave){
            fave = [];
            this.favs = fave;
            this.empty = true;
        } else {
            var pave = JSON.parse(fave);
            this.favs = pave;
            this.empty = false;
        }
    },
    head(){
        return{
            title: 'Favorites | hustle',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Clients favorites'
                }
            ]
        }
    },
    data(){
        return{
            snackbar: false,
            snackbar2: false,
            drawer2: false, 
            group1: false,
            unfav: false
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
        unfave: function(prod){
            if(process.browser){
                var favs = localStorage.getItem("products");
            }

            if(!favs){
                pavs = [];
            } else {
                var pavs = JSON.parse(favs);
            }
            
            const newPav = pavs.filter((item) => {
                return item.details.name != prod.details.name && item.details.price != prod.details.price;
            });
            localStorage.setItem("products", JSON.stringify(newPav));
            this.favs = this.favs.filter((flam) => {
                return flam.details.name != prod.details.name && flam.details.price != prod.details.price;
            });
            if(this.favs.length == 0){
                this.empty = true;
            }
            this.unfav = true;
        },
        sendToProduct: function (slug){
            this.$router.push({name: 'kategorite-elektronike-tv-dhe-video-slug', params: {slug: slug}});
        }
    }
}
</script>

<style scoped>
.market-empty{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
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
.classy{
    font-family: 'qs';
    font-size: 20px;
}
@media only screen and (min-width: 850px){
.miniature{
        font-size: 13px;
        color: darkgray;
    }
    .full-width{
        width: 100%;
    }
    .classy{
        font-family: 'qs';
        font-size: 23px;
    }
    .sets{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 830px;
        padding: 15px 0 8px 0;
    }
    .lineM{
        height: 1px;
        width: 830px;
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