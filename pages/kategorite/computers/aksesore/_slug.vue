<template>
  <div class="shiiiit">
      <div class="responsive mb-8">
          <div class="n">
              <div class="image-prod">
                  <v-carousel v-model="carousel" height="400" class="make-small" show-arrows-on-hover next-icon="mdi-arrow-right-thin-circle-outline" prev-icon="mdi-arrow-left-thin-circle-outline" hide-delimiter-background delimiter-icon="mdi-circle-medium">
                      <v-carousel-item class="center" v-for="riti in product.details.photos" :key="riti.id">
                          <div class="qualifier">
                              <div class="qualifier-2">
                                <v-img :aspect-ratio="15/16" class="lightgray" :src="riti.src"></v-img>
                            </div>
                          </div>
                      </v-carousel-item>
                  </v-carousel>
              </div>
          </div>
          <div class="details">
              <div class="shithole">
                  <h1 class="qs secondary--text s25">{{product.details.name}}</h1>
                  <v-rating
                    :value="product.details.likes/product.details.likers"
                    readonly
                    background-color="secondary"
                    color="secondary"
                    small
                  >
                  </v-rating>
                  <p class="qs secondary--text">{{'(' + product.details.likers + ')'}}</p>
                  <p class="price-prod" v-if="product.details.priceLow">{{product.details.priceLow}} <span class="mini-span">ALL</span> <span class="text-decoration-line-through qs s14 gray--text">{{product.details.price}}</span> <span class="mini-span gray--text">ALL</span></p>
                  <p class="price-prod" v-if="product.details.priceLow == null">{{product.details.price}} <span class="mini-span">ALL</span></p>
                  <div class="rowting">
                      <v-btn class="white--text rounded-md width-70" color="primary" @click="addToCart(product.details.name, product.details.seller, product.details.price, 1, product.details.desc, product.details.photos[0].src)">Add to Cart</v-btn>
                      <v-btn class="white--text" color="primary" icon @click="favs(product)"><v-icon size="34" color="secondary">mdi-heart-outline</v-icon></v-btn>
                  </div>
              </div>
          </div>
      </div>
      <div class="double-down mb-4">
          <div class="desc-row">
            <div class="details-prod">
                <h3 class="qs secondary--text mb-4">Shitesi</h3>
                <div class="row-center">
                    <v-avatar size="40" color="primary">
                        <img v-if="product.details.sellerPhoto == ''" :src="product.details.sellerPhoto" alt="seller photo">
                    </v-avatar>
                    <p class="qs ma-0 pa-0 ml-4 secondary--text">{{product.details.seller}}</p>
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
                            <p class="qs" v-if="product.details.masa">Masa: {{product.details.masa}}</p>
                            <p class="qs" v-if="product.details.sizey">Dimensionet: {{product.details.sizey}}</p>
                            <p class="qs" v-if="product.details.pesha">Pesha: {{product.details.pesha}}</p>
                            <p class="qs" v-if="product.details.ngjyra">Ngjyra: {{product.details.ngjyra}}</p>
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
                    <v-expansion-panel-content class="contain">
                        <div class="details-prod mb-3" v-if="posted">
                            <div class="jair-2">
                                <p class="qs ma-0 pa-0 mr-4">{{fakeAuthor}}</p>
                                <v-rating x-small :value="fakeRating" color="primary" readonly half-increments background-color="primary"></v-rating>
                            </div>
                            <p class="qs contain">{{fakeReview}}</p>
                        </div>
                        <div class="details-prod mb-3" v-for="review in reviews" :key="review">
                            <div class="jair-2">
                                <p class="qs ma-0 pa-0 mr-4">{{review.author}}</p>
                                <v-rating x-small :value="review.rating" color="primary" readonly half-increments background-color="primary"></v-rating>
                            </div>
                            <p class="qs contain">{{review.text}}</p>
                        </div>
                        <v-row justify="center">
                            <v-btn text color="secondary" small @click="()=>{}">
                                Trego me shume
                            </v-btn>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
      </div>
      <div class="double-down mb-4">
          <div class="desc-row">
            <div class="review-write" v-if="aval == true">
                <h3 class="qs secondary--text mb-5">Jep review-n tende</h3>
                <v-rating
                empty-icon="mdi-star-outline"
                full-icon="mdi-star"
                half-icon="mdi-star-half-full"
                half-increments
                hover
                length="5"
                color="secondary"
                v-model="reviewRating"
                required
                @input="checkErrors"
                class="mb-3"
                ></v-rating>
                <p class="qs primary--text" v-if="error2Yje">Vleresimi minimal eshte 0.5 yje</p>
                <v-textarea outlined color="secondary" dense clearable v-model="reviewText" label="Write your review" light full-width :error-messages="stuffErrors" @input="$v.reviewText.$touch()"></v-textarea>
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
        Review unallowed.
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
        <v-dialog
        v-model="alreadyPosted"
        max-width="240"
        >
        <v-card color="primary">
            <v-card-title class="headline qs">
            Problem.
            </v-card-title>

            <v-card-text class="qs">
            Review-ja mund te jepet vetem 1 here.
            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                color="white"
                text
                @click="alreadyPosted = false"
            >
                Close
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import Cookies from 'js-cookie'
import {validationMixin} from 'vuelidate'
import {minLength, required} from 'vuelidate/lib/validators'
export default {
    name: "product",
    mixins: [validationMixin],
    async asyncData({params}){
        const data = await firebase.firestore().collection('elektronike').doc(params.slug).get();
        const dataParsed = data.data();

        const data2 = await firebase.firestore().collection('users').doc(dataParsed.owner).get();
        const dataParsed2 = data2.data();

        const reviews = await firebase.firestore().collection('reviews').where("post", "==", params.slug).limit(5).get();
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
            reviewRating: 0,
            snack: false,
            snack3: false,
            fav: false,
            slug: this.$route.params.slug,
            carousel: 0,
            main: 5,
            reviewText: "",
            aval: this.$store.state.users.user == null ? false : true,
            error2Yje: false,
            alreadyPosted: false,
            posted: false,
            fakeReview: "",
            fakeRating: 0,
            fakeAuthor: ""
        }
    },
    validations: {
        reviewText: {
            minLength: minLength(1)
        }
    },
    computed: {
        stuffErrors () {
            const errors = []
            if (!this.$v.reviewText.$dirty) return errors
            !this.$v.reviewText.minLength && errors.push('Review too short')
            return errors
        }
    },
    methods: {
        addToCart2: async function (){
            
            var cookie = Cookie.get("cartToken");

            if(!cookie){
                var real = {
                    emri: this.product.details.name,
                    price: this.product.details.price,
                    times: 1,
                    desc: "Item from " + this.product.owner.toLowerCase(),
                    currentCart: []
                }

                console.log("CASE 1");

                await this.$store.dispatch("users/addToCart", real);
            } else {

                var carty = JSON.parse(cookie);
                
                var real = {
                    emri: this.product.details.name,
                    price: this.product.details.price,
                    times: 1,
                    desc: "Item from " + this.product.owner.toLowerCase(),
                    currentCart: carty
                }
                
                console.log("CASE 2");

                carty.forEach(async element => {
                    if(element.prodEmri == this.$store.state.users.cart){
                        await this.$store.dispatch("users/updateCart", {
                            cartEmri: this.product.details.name,
                            cartTimes: 1,
                            currentCart: real
                        })
                    } else {
                        await this.$store.dispatch("users/addToCart", real);
                    }
                });
            }


            this.snack = true;
        },
        addToCart: async function(emri, seller, price, times, desc, photo){
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
                desc: "Produkt nga " + seller,
                photo: photo,
                currentCart: currentCart
            });
            console.log(currentCart);

            this.snack = true;
        },
        send: async function ({params}){
            try{
                
                this.$v.reviewText.$touch();

                if(this.$v.reviewText.$invalid){

                    console.log("fasdfasdfasf")
                    return;
                }
                if(this.reviewRating == 0){
                    console.log("staging")
                    this.error2Yje = true;
                    return;
                }
                const firerev = await firebase.firestore().collection('reviews').doc(this.$store.state.users.user.email).get();
                const rev = firerev.data();
                const fireuser = await firebase.firestore().collection('users').where("email", "==", this.$store.state.users.user.email).get();
                const user = fireuser.docs.map(doc => doc.data());
                const firedata = await firebase.firestore().collection('orders').where("payee_email", "==", this.$store.state.users.user.email).where("orders.item", "==", this.product.spot).get();
                const firedate = firedata.docs.map(doc => doc.data());
                
                if(rev && rev.post == this.product.spot){
                    console.log("already")
                    this.alreadyPosted = true;
                    return;
                }

                if(firedate[0].payee_email == this.$store.state.users.user.email){
                    await firebase.firestore().collection('reviews').doc(this.$store.state.users.user.email).set({
                        text: this.reviewText,
                        rating: this.reviewRating,
                        post: this.$route.params.slug,
                        author: user[0].displaName
                    })
                    


                    await firebase.firestore().collection('elektronike').doc(this.product.spot).update({
                        details: {
                            name: this.product.details.name,
                            price: this.product.details.price,
                            desc: this.product.details.desc,
                            seller: this.product.details.seller,
                            sellerPhoto: this.product.details.sellerPhoto,
                            details: this.product.details.details,
                            kategoria: this.product.details.kategoria,
                            kategorita: this.product.details.kategorita,
                            photos: this.product.details.photos,
                            pesha: this.product.details.pesha,
                            sizey: this.product.details.sizey,
                            masa: this.product.details.masa,
                            ngjyra: this.product.details.ngjyra,
                            likes: this.product.details.likes + this.reviewRating,
                            likers: this.product.details.likers + 1
                        } 
                    })
                } else{
                    this.snack3 = true;
                }


                this.fakeReview = this.reviewText;
                this.fakeRating = this.reviewRating;
                this.fakeAuthor = user[0].displaName;
                this.posted = true;

                this.reviewText = "";
                this.error2Yje = false;
                this.reviewRating = 0;

            } catch(e){
                console.log(e);
                this.snack3 = true;
                return;
            }
            
        },
        favs: function(product){
            if(process.browser){
                var favs = localStorage.getItem("products");
            }

            if(!favs){
                pavs = [];
            } else {
                var pavs = JSON.parse(favs);
                pavs.forEach((fav) => {
                    if(product.details.name == fav.details.name && product.details.price == fav.details.price){
                        this.fav = true;
                        throw "exit";
                    }
                });
            }
            
            pavs.push(product);
            localStorage.setItem("products", JSON.stringify(pavs));
            this.fav = true;
        },
        checkErrors: function(){
            if(this.reviewRating <= 0.5){
                this.error2Yje = true;
            }
        }
    }
}
</script>

<style>
.jair-2{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
}
.contain{
    word-break: break-all;
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
    width: 90%;
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
    width: 100%;
}
.row-center{
    display: flex;
    justify-content: flex-start;
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
.miniature{
  font-size: 13px;
  color: darkgray;
}
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
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        margin-bottom: 15px;
    }
    
}
</style>