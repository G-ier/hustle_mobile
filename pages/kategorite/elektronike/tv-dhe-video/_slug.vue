<template>
  <div class="shiiiit">
      <div class="responsive mb-8">
          <div class="n">
              <div class="image-prod">
                  <v-carousel v-model="carousel" height="400" class="make-small" show-arrows-on-hover next-icon="mdi-arrow-right-thin-circle-outline" prev-icon="mdi-arrow-left-thin-circle-outline" hide-delimiter-background delimiter-icon="mdi-circle-medium">
                      <v-carousel-item class="center">
                          <div class="qualifier">
                              <div class="qualifier-2">
                                <v-img :aspect-ratio="15/16" class="lightgray" src="https://images.pexels.com/photos/1600128/pexels-photo-1600128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></v-img>
                            </div>
                          </div>
                      </v-carousel-item>
                      <v-carousel-item>
                          <v-img :aspect-ratio="15/16" src="https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></v-img>
                      </v-carousel-item>
                      <v-carousel-item>
                          <v-img :aspect-ratio="15/16" src="https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></v-img>
                      </v-carousel-item>
                  </v-carousel>
              </div>
          </div>
          <div class="details">
              <div class="shithole">
                  <h1 class="qs secondary--text">{{product.details.name}}</h1>
                  <v-rating
                    v-model="rating"
                    readonly
                    background-color="yellow lighten-3"
                    color="yellow"
                    small
                  ></v-rating>
                  <p class="price-prod">{{product.details.price}} <span class="mini-span">ALL</span></p>
                  <div class="rowting">
                      <v-btn class="white--text rounded-md width-70" color="primary" @click="addToCart">Add to Cart</v-btn>
                      <v-btn class="white--text" color="primary" icon @click="favs(product)"><v-icon size="34" color="secondary">mdi-heart-outline</v-icon></v-btn>
                  </div>
              </div>
          </div>
      </div>
      <div class="double-down mb-4">
          <div class="desc-row">
            <v-expansion-panels accordion light>
                <v-expansion-panel>
                    <v-expansion-panel-header class="qs">Description</v-expansion-panel-header>
                    <v-expansion-panel-content class="qs">
                        {{product.details.desc}}
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
      </div>
      <div class="double-down mb-4">
          <div class="desc-row">
            <v-expansion-panels accordion light>
                <v-expansion-panel>
                    <v-expansion-panel-header class="qs">Details</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <div class="details-prod">
                            <p class="qs" v-for="yesu in product.details.details" :key="yesu">{{yesu}}</p>
                        </div>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
      </div>
      <div class="double-down mb-4">
          <div class="desc-row">
            <v-expansion-panels accordion light>
                <v-expansion-panel>
                    <v-expansion-panel-header class="qs">Reviews</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <div class="details-prod mb-3" v-for="review in reviews" :key="review">
                            <p class="qs">From: {{review.author}}</p>
                            <v-rating small v-model="main" color="yellow" background-color="yellow lighten-3"></v-rating>
                            <p class="qs">{{review.text}}</p>
                        </div>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
      </div>
      <div class="double-down mb-4">
          <div class="desc-row">
            <v-expansion-panels accordion light>
                <v-expansion-panel>
                    <v-expansion-panel-header class="qs">Seller</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <div class="details-prod">
                            <div class="row-center">
                                <v-avatar size="50">
                                    <img :src="seller.photo" alt="seller photo">
                                </v-avatar>
                            </div>
                            <p class="qs">Seller: {{seller.displayName}}</p>
                        </div>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
      </div>
      <div class="double-down mb-4">
          <div class="desc-row">
            <div class="review-write" v-if="aval == true">
                <v-textarea outlined color="secondary" dense clearable v-model="reviewText" label="Write your review" light full-width :error-messages="stuffErrors" @change="$v.review.$touch()"></v-textarea>
                <v-btn class="rounded-lg qs white--text" color="primary" @click="send">Send</v-btn>
            </div>
            <div class="review-write" v-else>
                <p class="qs primary--text">Log in to comment</p>
            </div>
        </div>
      </div>
      <v-snackbar
        v-model="snack"
        timeout="3000"
        color="primary"
        >
        Item added to cart.

        <template v-slot:action="{ attrs }">
            <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snack = false"
            >
            Close
            </v-btn>
        </template>
        </v-snackbar>
        <v-snackbar
        v-model="snack3"
        timeout="3000"
        color="primary"
        >
        Not right.

        <template v-slot:action="{ attrs }">
            <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snack3 = false"
            >
            Close
            </v-btn>
        </template>
        </v-snackbar>
        <v-snackbar
        v-model="fav"
        timeout="3000"
        color="primary"
        >
        Added to favorites.

        <template v-slot:action="{ attrs }">
            <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="fav = false"
            >
            Close
            </v-btn>
        </template>
        </v-snackbar>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import Cookies from 'js-cookie'
import {validationMixin} from 'vuelidate'
import {minLength} from 'vuelidate/lib/validators'
export default {
    name: "product",
    mixins: [validationMixin],
    async asyncData({params}){
        const data = await firebase.firestore().collection('elektronike').doc(params.slug).get();
        const dataParsed = data.data();

        const data2 = await firebase.firestore().collection('users').doc(dataParsed.owner).get();
        const dataParsed2 = data2.data();

        const reviews = await firebase.firestore().collection('reviews').where("post", "==", params.slug).get();
        const reviewsParsed = reviews.docs.map(doc => doc.data());
        console.log(params.slug)

        return{
            product: dataParsed,
            reviews: reviewsParsed,
            seller: dataParsed2
        }
    },
    data(){
        return{
            rating: 4,
            snack: false,
            snack3: false,
            fav: false,
            slug: this.$route.params.slug,
            carousel: 0,
            main: 5,
            reviewText: "",
            aval: this.$store.state.users.user == null ? false : true
        }
    },
    validations: {
        review: {
            minLength: minLength(40)
        }
    },
    computed: {
        stuffErrors () {
            const errors = []
            if (!this.$v.review.$dirty) return errors
            !this.$v.review.minLength && errors.push('Review too short')
            return errors
        },
    },
    methods: {
        addToCart: async function (){
            
            var cookie = Cookies.get("cartToken");

            if(!cookie){
                var real = {
                    emri: this.product.details.name,
                    price: this.product.details.price,
                    times: 1,
                    desc: "Item from " + this.product.details.seller,
                    currentCart: []
                }

                await this.$store.dispatch("users/addToCart", real);
            } else {

                var carty = JSON.parse(cookie);
                
                var real = {
                    emri: this.product.details.name,
                    price: this.product.details.price,
                    times: 1,
                    desc: "Item from " + this.product.owner,
                    currentCart: carty
                }

                carty.forEach(element => {
                    if(element.prodEmri == this.$store.state.users.cart){
                        this.$store.dispatch("users/updateCart", {
                            cartEmri: this.product.details.name,
                            cartTimes: 1,
                            currentCart: real
                        })
                    } else {
                        this.$store.dispatch("users/addToCart", real);
                    }
                });
            }


            this.snack = true;
        },
        send: async function (){

            if(this.reviewText.length >= 40){
                await firebase.firestore().collection('reviews').doc(this.$store.state.users.user.email).set({
                    text: this.reviewText
                })
            } else {
                this.snack3 = true;
            }
        },
        favs: function(product){
            if(process.browser){
                var favs = localStorage.getItem("products");
                console.log(favs);
            }

            if(!favs){
                favs = [];
            } else {
                var pavs = JSON.parse(favs);
                pavs.forEach((fav) => {
                    if(product.details.name == fav.details.name && product.details.price == fav.details.price){
                        this.fav = true;
                        throw "exit";
                    }
                });
            }
            
            favs.push(product);
            localStorage.setItem("products", JSON.stringify(favs));
            this.fav = true;
        }
    }
}
</script>

<style>
.shiiiit{
    width: 100vw;
    min-height: 81vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 0 15px 0;
}
.responsive{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 0px 0 0 0;
    height: 100%;
}
.n{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
}
.image-prod{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
}
.details{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 85%;
}
.shithole{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin: 10px 0 0 0;
}
.price-prod{
    color: #363f4e;
    padding: 0;
    margin: 10px 0 0 0;
    font-size: 20px;
}
.mini-span{
    font-size: 11px;
}
.buy{
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.rowting{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.width-70{
    width: 80%;
}
.desc-row{
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.double-down{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.details-prod{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.row-center{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
}
.review-write{
    min-height: 40px;
    padding: 10px 0px 10px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
}
@media only screen and (min-width: 850px){
    .qualifier{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .qualifier-2{
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .shiiiit{
        width: 100vw;
        min-height: 81vh;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0px 0 15px 0;
    }
    .responsive{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        padding: 0px 0 0 0;
        height: 100%;
    }
    .n{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
    }
    .image-prod{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
    }
    .details{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 50%;
    }
    .shithole{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        margin: 10px 0 0 0;
    }
    .price-prod{
        color: #363f4e;
        padding: 0;
        margin: 10px 0 0 0;
        font-size: 20px;
    }
    .mini-span{
        font-size: 11px;
    }
    .buy{
        width: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .rowting{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        
    }
    .width-70{
        width: 50%;
        margin-right: 15px;
    }
    .desc-row{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .double-down{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .details-prod{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .row-center{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 15px;
    }
    
}
</style>