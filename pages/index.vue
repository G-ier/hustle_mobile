<template>
  <div class="homepage">
    <div class="mini-links">
      <div class="mini-actual-links">
        <div class="al-ting">
          <v-slide-group mobile-breakpoint="560" show-arrows="desktop">
            <v-slide-item>
              <button text class="qs white--text btn-c-o mini-link">
                <nuxt-link class="qs btn-c-o white--text" to="/ofertat">Oferta te nxehta</nuxt-link>
              </button>
            </v-slide-item>
            <v-slide-item>
              <button text class="qs white--text btn-c-o mini-link">
                <nuxt-link class="qs btn-c-o white--text" to="/account/register">Regjistrohu</nuxt-link>
              </button>
            </v-slide-item>
            <v-slide-item>
              <button text class="qs white--text btn-c-o mini-link" @click="href">
                Faqja juaj
              </button>
            </v-slide-item>
            <v-slide-item>
              <button text class="qs white--text btn-c-o mini-link">
                <nuxt-link class="qs btn-c-o white--text" to="/rreth-nesh">Rreth nesh</nuxt-link>
              </button>
            </v-slide-item>
          </v-slide-group>
        </div>
      </div>
    </div>

    <div class="burst mb-3">
      <div class="burst2">
        <div class="burst3">
          <div class="main-foto">
            
          </div>
          <div class="likkle-div">
            <div class="likkle-1">
              
            </div>
            <div class="likkle-2">
              
            </div>
          </div>
        </div>
        <div class="burst4">
          <div class="explain">
            <v-list-item
            >
              <v-list-item-avatar>
                <v-icon
                  class="white"
                  dark
                  color="secondary"
                  size="40"
                >
                  mdi-car-estate
                </v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="secondary--text">Transport</v-list-item-title>

                <v-list-item-subtitle class="secondary--text">Me te shpejtet</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item> 
            <v-list-item
            >
              <v-list-item-avatar>
                <v-icon
                  class="white"
                  dark
                  color="secondary"
                  size="37"
                >
                  mdi-alpha-g-circle
                </v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="secondary--text">Produktet</v-list-item-title>

                <v-list-item-subtitle class="secondary--text">Me cilesoret ne treg</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>  
            <v-list-item
            >
              <v-list-item-avatar>
                <v-icon
                  class="white"
                  dark
                  color="secondary"
                  size="35"
                >
                  mdi-atlassian
                </v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="secondary--text">Sherbim</v-list-item-title>

                <v-list-item-subtitle class="secondary--text">Te pakonkurueshem ne Shqiperi</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>  
          </div>
        </div>
      </div>
    </div>

    <div class="main-body">
      <div class="main-side">
        <div class="dealsod-2 mb-5">
          <div class="deals-header">
            <div class="deals-header-1-cash">
              <h3 class="qs font-weight-regular main-side-title white--text" style="color: #363f4e; text-alignment: center;"><span class="qs font-weight-black">DEALS </span>of the day</h3>
              <div class="packting">
                <v-btn class="qs" icon>
                  <v-icon color="secondary" size="15">mdi-arrow-left-drop-circle</v-icon>
                </v-btn>
                <v-btn class="qs" icon width="10">
                  <v-icon color="secondary" size="15">mdi-arrow-right-drop-circle</v-icon>
                </v-btn>
              </div>
            </div>
            <div class="line1-main">
              <div class="smooth" :class="{'line10': objCount == 1, 'line20': objCount == 2, 'line30': objCount == 3, 'line40': objCount == 4, 'line50': objCount == 5, 'line60': objCount == 6, 'line70': objCount == 7, 'line80': objCount == 8, 'line90': objCount == 9, 'line100': objCount == 10, }"></div>
            </div>
          </div>
        </div>
        <div class="products-main">
          <div class="product-main" v-for="item in prodis.slice(0,4)" :key="item.id">
            <img class="product-main-image-2" src="https://images.pexels.com/photos/7214835/pexels-photo-7214835.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="iphone">
            <div class="product-main-desc">
              <h3 class="qs secondary--text"><nuxt-link class="qs btn-c-o" :to="'/kategorite/elektronike/tv-dhe-video/' + item.spot">{{item.details.name}}</nuxt-link></h3>
              <v-rating 
              v-model="ratingfake" 
              background-color="yellow darken-2"
              color="yellow"
              x-small
              readonly
              ></v-rating>
              <p class="qs primary--text pricey">{{item.details.price}}L</p>
            </div>
          </div>          
        </div>
      </div>
      <div class="side-side">
        <div class="side-pord">
          <div class="header-pord">
            <v-btn class="qs" icon width="20" height="20" @click="gotoprev">
              <v-icon color="white" size="15">mdi-arrow-left-drop-circle</v-icon>
            </v-btn>
            <p class="qs pa-0 ma-0">Oferta te nxehta</p>
            <v-btn class="qs" icon width="20" height="20" @click="gotonext">
              <v-icon color="white" size="15">mdi-arrow-right-drop-circle</v-icon>
            </v-btn>
          </div>
          <client-only placeholder="Carousel loading..." class="client-80">
            <agile ref="carousel" @after-change="getCurrSlide($event)" class="mos-i-qr-2">
              <div class="deals-body-2" v-for="n in 10" :key="n">
                <div class="deals-image-2">
                  <v-img :aspect-ratio="16/9" max-width="500" :src="seni"></v-img>
                </div>
                <div class="deals-desc">
                  <h4 class="qs d-t">25798445 JBL Headphones</h4>
                  <v-rating
                    v-model="ratings"
                    background-color="yellow darken-2"
                    color="yellow"
                    small
                    readonly
                  ></v-rating>
                  <p class="qs d-p">28$ <span class="qs text-decoration-line-through"> 32$</span></p>
                  <div class="timer-2">
                    <no-ssr>
                      <vac :left-time="statedTime">
                        <span slot="process" slot-scope="{ timeObj }" class="secondary--text"><span class="custom-timer mr-4">{{ `${timeObj.m}`}}m</span><span class="custom-timer">{{ `${timeObj.s}`}}s</span></span>
                        <span slot="finish" class="secondary--text">Offer expired!</span>
                      </vac>
                    </no-ssr>
                    <nuxt-link to="/kategorite/elektronike/tv-dhe-video" class="secondary--text btn-c-o">Show More</nuxt-link>
                  </div>
                </div>
              </div>
              <div class="deals-body-2">
                <div class="deals-image-2">
                  <v-img :aspect-ratio="16/9" max-width="500" src="https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></v-img>
                </div>
                <div class="deals-desc">
                  <h4 class="qs d-t">25798445 JBL Headphones</h4>
                  <v-rating
                    v-model="ratings"
                    background-color="yellow darken-2"
                    color="yellow"
                    small
                    readonly
                  ></v-rating>
                  <p class="qs d-p">28$ <span class="qs text-decoration-line-through"> 32$</span></p>
                </div>
              </div>
            </agile>
          </client-only>
        </div>
      </div>
    </div>

    <div class="stingy mt-2 mb-3">
      <h1 class="qs">Reklame</h1>
      <v-btn color="white" class="primary--text rounded-lg">Vizito tani</v-btn>
    </div> 

    <div class="main-body">
      <div class="main-side">
        <div class="dealsod-2 mb-5">
          <div class="deals-header">
            <div class="deals-header-1-cash">
              <h3 class="qs font-weight-regular main-side-title white--text" style="color: #363f4e; text-alignment: center;"><span class="qs font-weight-black">New </span>products</h3>
              <div class="packting">
                <v-btn class="qs primary--text" small text>
                  Show more 
                </v-btn>
              </div>
            </div>
            <div class="line1-main">
              <div class="smooth" :class="{'line10': objCount == 1, 'line20': objCount == 2, 'line30': objCount == 3, 'line40': objCount == 4, 'line50': objCount == 5, 'line60': objCount == 6, 'line70': objCount == 7, 'line80': objCount == 8, 'line90': objCount == 9, 'line100': objCount == 10, }"></div>
            </div>
          </div>
        </div>
        <div class="products-main-2">
          <div class="product-main">
            <img class="product-main-image" src="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="iphone">
            <div class="product-main-desc">
              <h3 class="qs secondary--text">Product title</h3>
              <v-rating 
              v-model="ratingfake" 
              background-color="yellow darken-2"
              color="yellow"
              small
              readonly
              ></v-rating>
              <p class="qs primary--text pricey">9700L</p>
            </div>
          </div>
          <div class="product-main">
            <img class="product-main-image" src="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="iphone">
            <div class="product-main-desc">
              <h3 class="qs secondary--text">Product title</h3>
              <v-rating 
              v-model="ratingfake" 
              background-color="yellow darken-2"
              color="yellow"
              small
              readonly
              ></v-rating>
              <p class="qs primary--text pricey">9700L</p>
            </div>
          </div>
          <div class="product-main">
            <img class="product-main-image" src="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="iphone">
            <div class="product-main-desc">
              <h3 class="qs secondary--text">Product title</h3>
              <v-rating 
              v-model="ratingfake" 
              background-color="yellow darken-2"
              color="yellow"
              small
              readonly
              ></v-rating>
              <p class="qs primary--text pricey">9700L</p>
            </div>
          </div>
        </div>
      </div>
      <div class="side-side-2">
        <div class="side-pord" style="border: none">
          <div class="reklamat">
            <div class="reklama">
              <h2 class="qs">Reklame</h2>
              <div class="mini-row">
                <v-btn class="primary--text rounded" x-small color="white">Vizito tani</v-btn>
              </div>
            </div>
            <div class="reklama">
              <h2 class="qs">Reklame</h2>
              <div class="mini-row">
                <v-btn class="primary--text rounded" x-small color="white">Vizito tani</v-btn>
              </div>
            </div>
            <div class="reklama">
              <h2 class="qs">Reklame</h2>
              <div class="mini-row">
                <v-btn class="primary--text rounded" x-small color="white">Vizito tani</v-btn>
              </div>
            </div>
            <div class="reklama">
              <h2 class="qs">Reklame</h2>
              <div class="mini-row">
                <v-btn class="primary--text rounded" x-small color="white">Vizito tani</v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="stingy mt-2 mb-3">
      <h1 class="qs">Reklame</h1>
      <v-btn color="white" class="primary--text rounded-lg">Vizito tani</v-btn>
    </div> 

    <div class="main-body">
      <div class="main-side">
        <div class="dealsod-2 mb-5">
          <div class="deals-header">
            <div class="deals-header-1-cash">
              <h3 class="qs font-weight-regular main-side-title white--text" style="color: #363f4e; text-alignment: center;"><span class="qs font-weight-black">New </span>products</h3>
              <div class="packting">
                <v-btn class="qs primary--text" small text nuxt to="/kategorite/elektronike/tv-dhe-video">
                  Show more 
                </v-btn>
              </div>
            </div>
            <div class="line1-main">
              <div class="smooth" :class="{'line10': objCount == 1, 'line20': objCount == 2, 'line30': objCount == 3, 'line40': objCount == 4, 'line50': objCount == 5, 'line60': objCount == 6, 'line70': objCount == 7, 'line80': objCount == 8, 'line90': objCount == 9, 'line100': objCount == 10, }"></div>
            </div>
          </div>
        </div>
        <div class="products-main">
          <div class="product-main" v-for="item in prodis.slice(0,4)" :key="item.id">
            <img class="product-main-image-2" src="https://images.pexels.com/photos/7214835/pexels-photo-7214835.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="iphone">
            <div class="product-main-desc">
              <h3 class="qs secondary--text"><nuxt-link class="qs btn-c-o" :to="'/kategorite/elektronike/tv-dhe-video/' + item.spot">{{item.details.name}}</nuxt-link></h3>
              <v-rating 
              :v-model="ratingfake" 
              background-color="yellow darken-2"
              color="yellow"
              x-small
              readonly
              ></v-rating>
              <p class="qs primary--text pricey">{{item.details.price}}L</p>
            </div>
          </div>          
        </div>
      </div>
      <div class="side-side">
        <div class="side-pord">
          <div class="header-pord">
            <p class="qs pa-0 ma-0">Reccommended</p>
          </div>
          <div class="fucked">
            <div class="fucked-1">
              <img class="fucked-image" src="https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="apple">
              <div class="fucked-desc">
                <p class="qs secondary--text ma-0 pa-0">Lorem ipsum dolor sit amet.</p>
                <v-rating 
                  v-model="ratingfake" 
                  background-color="yellow darken-2"
                  color="yellow"
                  small
                  readonly
                  class="pa-0 ma-0"
                ></v-rating>
                <p class="qs primary--text">3500L</p>
              </div>
            </div>
            <div class="fucked-1">
              <img class="fucked-image" src="https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="apple">
              <div class="fucked-desc">
                <p class="qs secondary--text ma-0 pa-0">Lorem ipsum dolor sit amet.</p>
                <v-rating 
                  v-model="ratingfake" 
                  background-color="yellow darken-2"
                  color="yellow"
                  small
                  readonly
                  class="pa-0 ma-0"
                ></v-rating>
                <p class="qs primary--text">3500L</p>
              </div>
            </div>
            <div class="fucked-1">
              <img class="fucked-image" src="https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="apple">
              <div class="fucked-desc">
                <p class="qs secondary--text ma-0 pa-0">Lorem ipsum dolor sit amet.</p>
                <v-rating 
                  v-model="ratingfake" 
                  background-color="yellow darken-2"
                  color="yellow"
                  small
                  readonly
                  class="pa-0 ma-0"
                ></v-rating>
                <p class="qs primary--text">3500L</p>
              </div>
            </div>
            <div class="fucked-1">
              <img class="fucked-image" src="https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="apple">
              <div class="fucked-desc">
                <p class="qs secondary--text ma-0 pa-0">Lorem ipsum dolor sit amet.</p>
                <v-rating 
                  v-model="ratingfake" 
                  background-color="yellow darken-2"
                  color="yellow"
                  small
                  readonly
                  class="pa-0 ma-0"
                ></v-rating>
                <p class="qs primary--text">3500L</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="dealsod">
      <div class="deals-header">
        <div class="deals-header-1">
          <h3 class="qs font-weight-regular" style="color: #363f4e; text-alignment: center;"><span class="qs font-weight-black">DEALS </span>of the day</h3>
          <div class="packting">
            <v-btn class="qs" icon @click="gotoprev">
              <v-icon color="secondary" size="15">mdi-arrow-left-drop-circle</v-icon>
            </v-btn>
            <v-btn class="qs" icon width="10" @click="gotonext">
              <v-icon color="secondary" size="15">mdi-arrow-right-drop-circle</v-icon>
            </v-btn>
          </div>
        </div>
        <div class="line1">
          <div class="smooth" :class="{'line10': objCount == 1, 'line20': objCount == 2, 'line30': objCount == 3, 'line40': objCount == 4, 'line50': objCount == 5, 'line60': objCount == 6, 'line70': objCount == 7, 'line80': objCount == 8, 'line90': objCount == 9, 'line100': objCount == 10, }"></div>
        </div>
      </div>
    </div>
    <client-only placeholder="Carousel loading..." class="client-90">
      <agile ref="carousel" @after-change="getCurrSlide($event)" class="mos-i-qr">
        <div class="deals-body" v-for="n in 10" :key="n">
          <div class="deals-image">
            <v-img :aspect-ratio="16/9" max-width="500" :src="seni"></v-img>
          </div>
          <div class="deals-desc">
            <h4 class="qs d-t">25798445 JBL Headphones</h4>
            <v-rating
              v-model="ratings"
              background-color="yellow darken-2"
              color="yellow"
              small
              readonly
            ></v-rating>
            <p class="qs d-p">28$ <span class="qs text-decoration-line-through"> 32$</span></p>
            <div class="timer">
              <no-ssr>
                <vac :left-time="statedTime">
                  <span slot="process" slot-scope="{ timeObj }" class="secondary--text"><span class="custom-timer mr-4">{{ `${timeObj.m}`}}m</span><span class="custom-timer">{{ `${timeObj.s}`}}s</span></span>
                  <span slot="finish" class="secondary--text">Offer expired!</span>
                </vac>
              </no-ssr>
              <nuxt-link to="/kategorite/elektronike/tv-dhe-video" class="secondary--text btn-c-o">Show More</nuxt-link>
            </div>
          </div>
        </div>
      </agile>
    </client-only>
    <div class="deals-header-2">
      <div class="deals-header-3">
        <h3 class="qs font-weight-regular pb-1" style="color: #363f4e; text-alignment: center;"><span class="qs font-weight-black">Kategorite </span>me te mira</h3>
      </div>
      <div class="line1-3">
        <div class="smooth line100"></div>
      </div>
    </div>
    <div class="dealsod1">
      <div class="squaremain">
        <div class="squarecentral">
          <div class="joint">
            <h2 class="qs">Elektronike</h2>
            <div class="line1"></div>
          </div>
          <v-btn class="qs rounded-lg secondary--text" nuxt to="/kategorite/elektronike/tv-dhe-video" color="white">Vizito tani</v-btn>
        </div>
      </div>
      <div class="squarelikkle">
        <div class="squareside">
          <div class="joint-2">
            <h2 class="qs sq-mini">Produkte</h2>
            <h2 class="qs sq-title secondary--text">Shtepiake</h2>
          </div>
          <v-btn class="qs rounded-lg secondary--text" small nuxt to="/kategorite/elektronike/tv-dhe-video" color="white">Vizito tani</v-btn>
        </div>
      </div>
      <div class="squarelikkle-2">
        <div class="squareside-2">
          <div class="joint-3">
            <h2 class="qs sq-mini">Produkte</h2>
            <h2 class="qs sq-title secondary--text">Clothing brands</h2>
          </div>
          <v-btn class="qs rounded-lg secondary--text" small nuxt to="/kategorite/elektronike/tv-dhe-video" color="white">Vizito tani</v-btn>
        </div>
      </div>
      <div class="squarelikkle-3">
        <div class="squareside">
          <div class="joint-2">
            <h2 class="qs sq-mini">Produkte</h2>
            <h2 class="qs sq-title secondary--text">Kozmetike</h2>
          </div>
          <v-btn class="qs rounded-lg secondary--text" small nuxt to="/kategorite/elektronike/tv-dhe-video" color="white">Vizito tani</v-btn>
        </div>
      </div>
      <div class="squarelikkle-4">
        <div class="squareside-2">
          <div class="joint-3">
            <h2 class="qs sq-mini">Produkte</h2>
            <h2 class="qs sq-title secondary--text">Clothing brands</h2>
          </div>
          <v-btn class="qs rounded-lg secondary--text" small nuxt to="/kategorite/elektronike/tv-dhe-video" color="white">Vizito tani</v-btn>
        </div>
      </div>
    </div>
    
    <div class="contact">
      <h1 class="con-title">For the people!</h1>
      <div class="con-controller">
        <div class="wrapper">
          <v-card elevation="4" color="#f5f5f5" width="310" height="250" class="rounded-xl" tile>
            <v-card-title class="secondary--text qs"><v-icon color="secondary" class="mr-5">mdi-account-group-outline</v-icon>Stafi jone</v-card-title>
            <v-card-text class="secondary--text qs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptatibus placeat maiores nostrum esse animi nulla nihil non, sed natus repellat fugit ipsam est iste?</v-card-text> 
          </v-card>
        </div>
        <div class="wrapper">
          <v-card elevation="4" color="#f5f5f5" width="310" height="250" class="rounded-xl" tile>
            <v-card-title class="secondary--text qs"><v-icon color="secondary" class="mr-5">mdi-note-text-outline</v-icon>Rregullat tona</v-card-title>
            <v-card-text class="secondary--text qs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod nam quos pariatur rem corrupti odio atque repellat! Ipsum similique error velit excepturi. Nostrum, nisi rerum?</v-card-text> 
          </v-card>
        </div>
        <div class="wrapper">
          <v-card elevation="4" color="#f5f5f5" width="310" height="250" class="rounded-xl" tile>
            <v-card-title class="secondary--text qs"><v-icon color="secondary" class="mr-5">mdi-toolbox</v-icon>Produktet tona</v-card-title>
            <v-card-text class="secondary--text qs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae reiciendis quia labore laborum assumenda quas eos, quam porro, officia nulla architecto sed adipisci minus fuga.</v-card-text> 
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import seni from '../assets/img/heads.jpg';
import * as firebase from 'firebase/app';
import Carousel from '../components/Carousel';
export default {
  components: {
    Carousel
  },
  async asyncData(){
    const data = await firebase.firestore().collection('dod').doc('Headphones').get();
    const parsedData = data.data();
    var diff = parsedData.from.toDate().getTime() - Date.now();

    const data2 = await firebase.firestore().collection('elektronike').get();
    const datas = data2.docs.map(doc => doc.data());
    console.log(datas)
    return {
      statedTime: diff,
      prodis: datas
    }
  },
  data(){
    return{
      seni: seni,
      ratings: 4,
      slickOptions: {
        slidesToShow: 3,
        arrows: false
      },
      objCount: 1,
      speed: 7000,
      ratingfake: 4
    }
  },
  head(){
      return{
        title: "Homepage",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Marketi me i perhapur'
          }
        ]
      }
    },
    methods: {
      gotonext: function(){
        this.$refs.carousel.goToNext();
        if(this.objCount != 10){
          this.objCount++;
        }
      },
      gotoprev: function(){
        this.$refs.carousel.goToPrev();
        if(this.objCount != 1){
          this.objCount--;
        }
      },
      getCurrSlide: function(event){
        this.objCount = event.currentSlide + 1;
      },
      href: function (){
        this.$router.push({name: 'account-me'});
      }
    }
}
</script>

<style scoped>

.sq-title{
  margin-bottom: 25px;
}
.sq-mini{
  position: relative;
  top: 10px;
  font-size: 14px;
  color: white;
}
.squaremain{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 27vh;
  border-radius: 25px;
  background-image: url("../assets/img/electronics.jpg");
  background-position-y: center;
  background-size: cover;
  overflow: hidden;
  margin-top: 1.3rem;
}
.squarelikkle{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 20vh;
  border-radius: 25px;
  background-image: url("../assets/img/2152.jpg");
  background-size: cover;
  overflow: hidden;
  margin-top: 1.3rem;
}
.squarelikkle-2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 20vh;
  border-radius: 25px;
  background-image: url("../assets/img/cos.jpg");
  background-size: cover;
  overflow: hidden;
  margin-top: 1.3rem;
}
.squarelikkle-3{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 20vh;
  border-radius: 25px;
  background-image: url("../assets/img/cos.jpg");
  background-position-y: center;
  background-size: cover;
  overflow: hidden;
  margin-top: 1.3rem;
}
.squarelikkle-4{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 20vh;
  border-radius: 25px;
  background-image: url("../assets/img/cos.jpg");
  background-position-y: center;
  background-size: cover;
  overflow: hidden;
  margin-top: 1.3rem;
}
.squarecentral{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 90%;
}
.squareside{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  height: 100%;
}
.squareside-2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 90%;
  height: 90%;
}
.joint{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40;
}
.joint-2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 40px;
}
.joint-3{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 40px;
}
.smooth{
  transition: 0.5s;
}
.client-90{
  width: 90vw;
  display: flex;
  justify-content: center;
}
.custom-timer{
  border: 1px solid #bf081d;
  border-radius: 3px;
  padding: 3px 6px 3px 6px;
}
.timer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.deals-body{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 60vh;
}
.deals-image{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.deals-desc{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
}
.d-t{
  font-weight: 400;
  font-size: 18px;
  color: #363f4e;
}
.d-p{
  font-weight: 400;
  font-size: 17px;
  color: #363f4e;
}
.v-rating--readonly button {
  padding-left: 0;
}
.d-p span{
  font-weight: 400;
  font-size: 13px;
  color: #808794;
}
.dealsod{
  width: 100vw;
  height: 5vh;
  padding: 40px 0 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.dealsod1{ 
  position: relative;
  top: -30px;
  width: 100vw;
  
  padding: 0px 0 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.deals-header{
  width: 90%;
  height: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
}
.deals-header-2{
  width: 100%;
  height: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh;
}
.deals-header-1{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.deals-header-3{
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.packting{
  display: flex;
  justify-content: center;
  width: 15%;
}
.line1{
  width: 100%;
  height: 1px;
  background-color: #8a919c;
}
.line1-3{
  width: 90%;
  height: 1px;
  background-color: #8a919c;
}
.line10{
  width: 10%;
  height: 1px;
  background-color: #a10517;
}
.line20{
  width: 20%;
  height: 1px;
  background-color: #a10517;
}
.line30{
  width: 30%;
  height: 1px;
  background-color: #a10517;
}
.line40{
  width: 40%;
  height: 1px;
  background-color: #a10517;
}
.line50{
  width: 50%;
  height: 1px;
  background-color: #a10517;
}
.line60{
  width: 60%;
  height: 1px;
  background-color: #a10517;
}
.line70{
  width: 70%;
  height: 1px;
  background-color: #a10517;
}
.line80{
  width: 80%;
  height: 1px;
  background-color: #a10517;
}
.line90{
  width: 90%;
  height: 1px;
  background-color: #a10517;
}
.line100{
  width: 100%;
  height: 1px;
  background-color: #a10517;
}
.line1::before{
  width: 35%;
  height: 1px;
  background-color: #363f4e;
}
.mini-links{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bf081d;
  height: 25px;
  width: 100vw;
}
.mini-actual-links{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #363f4e;
  height: 25px;
  width: 100%;
}
.mini-link{
  padding: 3px 20px 3px 0px;

}
.al-ting{
  width: 90%;
  display: flex;
  justify-content: center;
}
.homepage{
  width: 100%;
  background-color: white;
}
.phone{
  display: flex;
}
.comp{
  display: none;
}
.underside{
  width: 100%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
.u-card{
  display: flex;
  height: 33vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1e65b8;
}
.u-title{
  color: white;
  font-size: 25px;
  text-align: center;
  margin-bottom: 15px;
}
.u-desc{
  color: white;
  font-size: 16px;
  text-align: center;
  margin-bottom: 25px;
}
.contact{
  width: 100%;
  min-height: 60vh;
  background-color: #363f4e;
  background-size: cover;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px 0 30px 0;
  
}
.con-title{
  color: white;
  font-family: 'qs';
  font-size: 24px;
  text-align: center;
  margin-bottom: 15px;
}
.con-controller{
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.blog{
  height: 80vh;
  background-image: url(../assets/img/blog.png);
  background-size: cover;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.b-holder{
  width: 70%;
  height: 50%;
  display: flex;
  justify-content: flex-start;
}
.textside{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 50%;
}
.holderito{
  width: 70%;
}
.b-t{
  font-size: 18px;
  color: white;
  margin-bottom: 15px;
}
.b-t-u{
  font-family: 'qs';
  font-size: 16px;
  color: white;
  margin-bottom: 25px;
}
.b-btn{
  outline: none;
  color: rgb(192, 3, 75);
  background-color: white;
  border-radius: 10px;
  font-family: 'qs';
}
.imageside{
  display: flex;
  justify-content: center;
  align-items: center;
}
.image{
  height: 300px;
  width: 300px;
}
.burst{
  display: none;
}
.main-body{
  display: none;
}
.stingy{
  display: none;
}

@media only screen and (min-width: 850px){
.fucked{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.fucked-1{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.fucked-image{
  width: 80px;
  height: 40px;
  margin-right: 5px;
}
.fucked-desc{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.reklamat{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}  
.reklama{
  width: 100%;
  height: 130px;
  padding: 5px;
  background-color: #bf081d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.mini-row{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 90%;
}
.stingy{
  width: 850px;
  height: 100px;
  background-color: #bf081d;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.products-main{
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.products-main-2{
  width: 100%;
  display: grid;
  grid-template-columns: 45% 45%;
  grid-template-rows: 49% 49%;
  grid-column-gap: 10%;
  grid-row-gap: 2%;
}
.product-main{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid white;
  border-radius: 10px;
  overflow: hidden;
}
.product-main-image{
  width: 100%;
  height: 180px;
}
.product-main-desc{
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
}
.main-body{
  display: grid;
  grid-template-columns: 69% 29%;
  grid-column-gap: 2%;
  width: 850px;
}
.main-side{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.side-side{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.side-side-2{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.main-side-title{
  background-color: #bf081d;
  padding: 0 10px 0 10px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.burst{
  min-height: 79vh;
  width: 100%;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0 15px 0;
}
.burst2{
  width: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.burst3{
  display: grid;
  grid-template-columns: 69% 29%;
  grid-column-gap: 2%;
  width: 100%;
  height: 400px;
}
.main-foto{
  border-radius: 10px;
  overflow: hidden;
  height: 400px;
  background-size: cover;
  background-image: url("../assets/img/main.png");
}
.likkle-div{
  height: 400px;
  display: grid;
  grid-template-rows: 270px 120px;
  grid-row-gap: 10px;
}
.likkle-1{
  height: 270px;
  border-radius: 10px;
  background-size: cover;
  background-image: url("../assets/img/side1.png");
}
.likkle-2{
  height: 120px;
  border-radius: 10px;
  background-size: cover;
  background-position-y: bottom;
  background-image: url("../assets/img/side2.png");
}
.burst4{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px 0 15px 0;
  margin-top: 15px;
  background-color: white;
  border-radius: 10px;
}
.explain{
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.cover{
  display: none;
  height: 100%;
  width: 100%;
  background-color: rgba(46, 46, 46, 0.4);
}
.hovered{
  display: flex;
}
.unhovered{
  display: none;
}
.side-pord{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 1px solid #bf081d;
}
.header-pord{
  background-color: #bf081d;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 7px;
  width: 100%;
  border-radius: 3px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.sq-title{
  margin-bottom: 25px;
}
.sq-mini{
  position: relative;
  top: 10px;
  font-size: 14px;
  color: white;
}
.squaremain{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 650px;
  height: 27vh;
  border-radius: 25px;
  background-image: url("../assets/img/electronics.jpg");
  background-position-y: center;
  background-size: cover;
  overflow: hidden;
  margin-top: 1.3rem;
  grid-area: topth;
}
.squarelikkle{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 20vh;
  border-radius: 25px;
  background-image: url("../assets/img/2152.jpg");
  background-size: cover;
  overflow: hidden;
  margin-top: 1.3rem;
  grid-area: first;
}
.squarelikkle-2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 20vh;
  border-radius: 25px;
  background-image: url("../assets/img/cos.jpg");
  background-size: cover;
  overflow: hidden;
  margin-top: 1.3rem;
  grid-area: second;
}
.squarelikkle-3{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 20vh;
  border-radius: 25px;
  background-image: url("../assets/img/cos.jpg");
  background-position-y: center;
  background-size: cover;
  overflow: hidden;
  margin-top: 1.3rem;
  grid-area: third;
}
.squarelikkle-4{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 20vh;
  border-radius: 25px;
  background-image: url("../assets/img/cos.jpg");
  background-position-y: center;
  background-size: cover;
  overflow: hidden;
  margin-top: 1.3rem;
  grid-area: fourth;
}
.squarecentral{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 90%;
}
.squareside{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  height: 100%;
}
.squareside-2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 90%;
  height: 90%;
}
.joint{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40;
}
.joint-2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 40px;
}
.joint-3{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 40px;
}
.smooth{
  transition: 0.5s;
}
.client-90{
  width: 750px;
  display: none;
  justify-content: center;
}
.client-80{
  width: 245px;
  display: flex;
  justify-content: center;
}
.mos-i-qr{
  width: 750px;
  min-height: 500px;
  margin: 10px 0 10px 0;
  display: none;
}
.mos-i-qr-2{
  width: 245px;
  max-height: 350px;
  margin: 10px 0 10px 0;
}
.custom-timer{
  border: 1px solid #bf081d;
  border-radius: 3px;
  padding: 3px 6px 3px 6px;
}
.timer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.timer-2{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.deals-body{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 750px;
  height: 500px;
}
.deals-body-2{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 245px;
  height: 350px;
}
.deals-image{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 750px;
}
.deals-image-2{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 245px;
}
.deals-desc{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 70%;
}
.d-t{
  font-weight: 400;
  font-size: 18px;
  color: #363f4e;
}
.d-p{
  font-weight: 400;
  font-size: 17px;
  color: #363f4e;
}
.v-rating--readonly button {
  padding-left: 0;
}
.d-p span{
  font-weight: 400;
  font-size: 13px;
  color: #808794;
}
.dealsod{
  width: 850px;
  height: 5vh;
  padding: 40px 0 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.dealsod-2{
  width: 100%;
  height: 5vh;
  padding: 40px 0 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.dealsod1{
  margin-top: 30px;
  width: 850px;
  padding: 0px 0 15px 0;
  display: grid;
  grid-gap: 10px;
  grid-template-areas: 
  'topth topth'
  'first second'
  'third fourth';
}
.deals-header{
  width: 100%;
  height: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
}
.deals-header-cash{
  width: 100%;
  height: 1vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
}
.deals-header-2{
  width: 850px;
  height: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  margin-bottom: 20px;
}
.deals-header-1{
  display: none;
  justify-content: space-between;
  align-items: center;
}
.deals-header-3{
  width: 850px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.deals-header-1-cash{
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.packting{
  display: flex;
  justify-content: center;
  width: 15%;
}
.line1{
  width: 100%;
  height: 1px;
  background-color: #8a919c;
  display: none;
}
.line1-main{
  width: 100%;
  height: 3px;
  background-color: #bf081d;
}
.line1-3{
  width: 850px;
  height: 2px;
  background-color: #bf081d;
}
.line10{
  width: 10%;
  height: 1px;
  background-color: #a10517;
}
.line20{
  width: 20%;
  height: 1px;
  background-color: #a10517;
}
.line30{
  width: 30%;
  height: 1px;
  background-color: #a10517;
}
.line40{
  width: 40%;
  height: 1px;
  background-color: #a10517;
}
.line50{
  width: 50%;
  height: 1px;
  background-color: #a10517;
}
.line60{
  width: 60%;
  height: 1px;
  background-color: #a10517;
}
.line70{
  width: 70%;
  height: 1px;
  background-color: #a10517;
}
.line80{
  width: 80%;
  height: 1px;
  background-color: #a10517;
}
.line90{
  width: 90%;
  height: 1px;
  background-color: #a10517;
}
.line100{
  width: 100%;
  height: 1px;
  background-color: #a10517;
}
.line1::before{
  width: 35%;
  height: 1px;
  background-color: #363f4e;
}
.mini-links{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #bf081d;
  height: 25px;
  width: 100vw;
  
}
.mini-actual-links{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #363f4e;
  height: 25px;
  width: 850px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.mini-link{
  padding: 3px 20px 3px 0px;

}
.al-ting{
  width: 90%;
  display: flex;
  justify-content: center;
}
.homepage{
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.phone{
  display: none;
}
.comp{
  display: flex;
}
.underside{
  width: 100%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
.u-card{
  display: flex;
  height: 33vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1e65b8;
}
.u-title{
  color: white;
  font-size: 25px;
  text-align: center;
  margin-bottom: 15px;
}
.u-desc{
  color: white;
  font-size: 16px;
  text-align: center;
  margin-bottom: 25px;
}
.contact{
  width: 100%;
  min-height: 60vh;
  background-color: #363f4e;
  background-size: cover;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px 0 30px 0;
  
}
.con-title{
  color: white;
  font-family: 'qs';
  font-size: 24px;
  text-align: center;
}
.con-controller{
  width: 80%;
  display: grid;
  justify-content: center;
  grid-template-columns: 33% 33% 33%;
}
.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
}
.blog{
  height: 80vh;
  background-image: url(../assets/img/blog.png);
  background-size: cover;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.b-holder{
  width: 70%;
  height: 50%;
  display: flex;
  justify-content: flex-start;
}
.textside{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 50%;
}
.holderito{
  width: 70%;
}
.b-t{
  font-size: 18px;
  color: white;
  margin-bottom: 15px;
}
.b-t-u{
  font-family: 'qs';
  font-size: 16px;
  color: white;
  margin-bottom: 25px;
}
.b-btn{
  outline: none;
  color: rgb(192, 3, 75);
  background-color: white;
  border-radius: 10px;
  font-family: 'qs';
}
.imageside{
  display: flex;
  justify-content: center;
  align-items: center;
}
.image{
  height: 300px;
  width: 300px;
}
}
@media only screen and (min-width: 1250px){
.fucked{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.fucked-1{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.fucked-image{
  width: 80px;
  height: 40px;
  margin-right: 5px;
}
.fucked-desc{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.reklamat{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}  
.reklama{
  width: 100%;
  height: 130px;
  padding: 5px;
  background-color: #bf081d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.mini-row{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 90%;
}
.stingy{
  width: 1200px;
  height: 100px;
  background-color: #bf081d;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.products-main{
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.products-main-2{
  width: 100%;
  display: grid;
  grid-template-columns: 45% 45%;
  grid-template-rows: 49% 49%;
  grid-column-gap: 10%;
  grid-row-gap: 2%;
}
.product-main{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid white;
  border-radius: 10px;
  overflow: hidden;
}
.product-main-image{
  width: 100%;
  height: 180px;
}
.product-main-image-2{
  
  height: 180px;
}
.product-main-desc{
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
}
.main-body{
  display: grid;
  grid-template-columns: 69% 29%;
  grid-column-gap: 2%;
  width: 1200px;
}
.main-side{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.side-side{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.side-side-2{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.main-side-title{
  background-color: #bf081d;
  padding: 0 10px 0 10px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.burst{
  min-height: 65vh;
  width: 100%;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0 15px 0;
}
.burst2{
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.burst3{
  display: grid;
  grid-template-columns: 69% 29%;
  grid-column-gap: 2%;
  width: 100%;
  height: 400px;
}
.main-foto{
  border-radius: 10px;
  overflow: hidden;
  height: 400px;
  background-size: cover;
  background-position-y: center;
  background-image: url("../assets/img/main.png");
}
.likkle-div{
  height: 400px;
  display: grid;
  grid-template-rows: 270px 120px;
  grid-row-gap: 10px;
}
.likkle-1{
  height: 270px;
  border-radius: 10px;
  background-size: cover;
  background-position-y: top;
  background-image: url("../assets/img/side1.png");

}
.likkle-2{
  height: 120px;
  border-radius: 10px;
  background-size: cover;
  background-position-y: top;
  background-image: url("../assets/img/side2.png");

}
.burst4{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px 0 15px 0;
  margin-top: 15px;
  background-color: white;
  border-radius: 10px;
}
.explain{
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.cover{
  display: none;
  height: 100%;
  width: 100%;
  background-color: rgba(46, 46, 46, 0.4);
}
.hovered{
  display: flex;
}
.unhovered{
  display: none;
}
.side-pord{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 1px solid #bf081d;
}
.header-pord{
  background-color: #bf081d;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 7px;
  width: 100%;
  border-radius: 3px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.sq-title{
  margin-bottom: 25px;
}
.sq-mini{
  position: relative;
  top: 10px;
  font-size: 14px;
  color: white;
}
.squaremain{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 950px;
  height: 27vh;
  border-radius: 25px;
  background-image: url("../assets/img/electronics.jpg");
  background-position-y: center;
  background-size: cover;
  overflow: hidden;
  margin-top: 1.3rem;
  grid-area: topth;
}
.squarelikkle{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 470px;
  height: 20vh;
  border-radius: 25px;
  background-image: url("../assets/img/2152.jpg");
  background-size: cover;
  overflow: hidden;
  margin-top: 1.3rem;
  grid-area: first;
}
.squarelikkle-2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 470px;
  height: 20vh;
  border-radius: 25px;
  background-image: url("../assets/img/cos.jpg");
  background-size: cover;
  overflow: hidden;
  margin-top: 1.3rem;
  grid-area: second;
}
.squarelikkle-3{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 470px;
  height: 20vh;
  border-radius: 25px;
  background-image: url("../assets/img/cos.jpg");
  background-position-y: center;
  background-size: cover;
  overflow: hidden;
  margin-top: 1.3rem;
  grid-area: third;
}
.squarelikkle-4{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 470px;
  height: 20vh;
  border-radius: 25px;
  background-image: url("../assets/img/cos.jpg");
  background-position-y: center;
  background-size: cover;
  overflow: hidden;
  margin-top: 1.3rem;
  grid-area: fourth;
}
.squarecentral{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 90%;
}
.squareside{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  height: 100%;
}
.squareside-2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 90%;
  height: 90%;
}
.joint{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40;
}
.joint-2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 40px;
}
.joint-3{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 40px;
}
.smooth{
  transition: 0.5s;
}
.client-90{
  width: 750px;
  display: none;
  justify-content: center;
}
.client-80{
  width: 240px;
  display: flex;
  justify-content: center;
}
.mos-i-qr{
  width: 750px;
  min-height: 500px;
  margin: 10px 0 10px 0;
  display: none;
}
.mos-i-qr-2{
  width: 240px;
  max-height: 350px;
  margin: 10px 0 10px 0;
}
.custom-timer{
  border: 1px solid #bf081d;
  border-radius: 3px;
  padding: 3px 6px 3px 6px;
}
.timer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.timer-2{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.deals-body{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 750px;
  height: 500px;
}
.deals-body-2{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 240px;
  height: 350px;
}
.deals-image{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 750px;
}
.deals-image-2{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
}
.deals-desc{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 70%;
}
.d-t{
  font-weight: 400;
  font-size: 18px;
  color: #363f4e;
}
.d-p{
  font-weight: 400;
  font-size: 17px;
  color: #363f4e;
}
.v-rating--readonly button {
  padding-left: 0;
}
.d-p span{
  font-weight: 400;
  font-size: 13px;
  color: #808794;
}
.dealsod{
  width: 850px;
  height: 5vh;
  padding: 40px 0 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.dealsod-2{
  width: 100%;
  height: 5vh;
  padding: 40px 0 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.dealsod1{
  margin-top: 30px;
  width: 1200px;
  padding: 0px 0 15px 0;
  display: grid;
  grid-gap: 10px;
  grid-template-areas: 
  'topth topth'
  'first second'
  'third fourth';
}
.deals-header{
  width: 100%;
  height: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
}
.deals-header-cash{
  width: 100%;
  height: 1vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
}
.deals-header-2{
  width: 850px;
  height: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  margin-bottom: 20px;
}
.deals-header-1{
  display: none;
  justify-content: space-between;
  align-items: center;
}
.deals-header-3{
  width: 1200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.deals-header-1-cash{
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.packting{
  display: flex;
  justify-content: center;
  width: 15%;
}
.line1{
  width: 100%;
  height: 1px;
  background-color: #8a919c;
  display: none;
}
.line1-main{
  width: 100%;
  height: 3px;
  background-color: #bf081d;
}
.line1-3{
  width: 1200px;
  height: 2px;
  background-color: #bf081d;
}
.line10{
  width: 10%;
  height: 1px;
  background-color: #a10517;
}
.line20{
  width: 20%;
  height: 1px;
  background-color: #a10517;
}
.line30{
  width: 30%;
  height: 1px;
  background-color: #a10517;
}
.line40{
  width: 40%;
  height: 1px;
  background-color: #a10517;
}
.line50{
  width: 50%;
  height: 1px;
  background-color: #a10517;
}
.line60{
  width: 60%;
  height: 1px;
  background-color: #a10517;
}
.line70{
  width: 70%;
  height: 1px;
  background-color: #a10517;
}
.line80{
  width: 80%;
  height: 1px;
  background-color: #a10517;
}
.line90{
  width: 90%;
  height: 1px;
  background-color: #a10517;
}
.line100{
  width: 100%;
  height: 1px;
  background-color: #a10517;
}
.line1::before{
  width: 35%;
  height: 1px;
  background-color: #363f4e;
}
.mini-links{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #bf081d;
  height: 25px;
  width: 100vw;
  
}
.mini-actual-links{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #363f4e;
  height: 25px;
  width: 1200px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.mini-link{
  padding: 3px 20px 3px 0px;

}
.al-ting{
  width: 90%;
  display: flex;
  justify-content: center;
}
.homepage{
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.phone{
  display: none;
}
.comp{
  display: flex;
}
.underside{
  width: 100%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
.u-card{
  display: flex;
  height: 33vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1e65b8;
}
.u-title{
  color: white;
  font-size: 25px;
  text-align: center;
  margin-bottom: 15px;
}
.u-desc{
  color: white;
  font-size: 16px;
  text-align: center;
  margin-bottom: 25px;
}
.contact{
  width: 100%;
  min-height: 60vh;
  background-color: #363f4e;
  background-size: cover;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px 0 30px 0;
  
}
.con-title{
  color: white;
  font-family: 'qs';
  font-size: 24px;
  text-align: center;
}
.con-controller{
  width: 80%;
  display: grid;
  justify-content: center;
  grid-template-columns: 33% 33% 33%;
}
.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
}
.blog{
  height: 80vh;
  background-image: url(../assets/img/blog.png);
  background-size: cover;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.b-holder{
  width: 70%;
  height: 50%;
  display: flex;
  justify-content: flex-start;
}
.textside{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 50%;
}
.holderito{
  width: 70%;
}
.b-t{
  font-size: 18px;
  color: white;
  margin-bottom: 15px;
}
.b-t-u{
  font-family: 'qs';
  font-size: 16px;
  color: white;
  margin-bottom: 25px;
}
.b-btn{
  outline: none;
  color: rgb(192, 3, 75);
  background-color: white;
  border-radius: 10px;
  font-family: 'qs';
}
.imageside{
  display: flex;
  justify-content: center;
  align-items: center;
}
.image{
  height: 300px;
  width: 300px;
}
}
</style>
