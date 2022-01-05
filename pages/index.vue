<template>
  <div class="homepage">
    <!--
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
    -->

    <div class="card-holder pt-4">
      <div class="card-holder-2">
        <v-sheet rounded elevation="0" class="lite rounded-lg px-6 py-0">
          <v-list-item to="/ofertat">
            <v-list-item-avatar color="primary" size="30" class="rounded-pill"><v-icon size="18" class="mr-0">mdi-fire</v-icon></v-list-item-avatar>
            <div class="gji">
              <h4 class="qs pa-0 ma-0 secondary--text">Oferta te nxehta</h4>
            </div>
          </v-list-item>
        </v-sheet>

        <v-sheet rounded elevation="0" class="lite rounded-lg px-6 py-0">
          <v-list-item to="/new">
            <v-list-item-avatar color="primary" size="30" class="rounded-pill"><v-icon size="18" class="mr-0">mdi-new-box</v-icon></v-list-item-avatar>
            <div class="gji">
              <h4 class="qs pa-0 ma-0 secondary--text">Produkte te reja</h4>
            </div>
          </v-list-item>
        </v-sheet>

        <v-sheet rounded elevation="0" class="lite rounded-lg px-6 py-0">
          <v-list-item to="/worthit">
            <v-list-item-avatar color="primary" size="30" class="rounded-pill"><v-icon size="18" class="mr-0">mdi-star</v-icon></v-list-item-avatar>
            <div class="gji">
              <h4 class="qs pa-0 ma-0 secondary--text">Me te vleresuarat</h4>
            </div>
          </v-list-item>
        </v-sheet>

        <v-sheet rounded elevation="0" class="lite rounded-lg px-6 py-0">
          <v-list-item to="/account/me">
            <v-list-item-avatar color="primary" size="30" class="rounded-pill"><v-icon size="18" class="mr-0">mdi-account-arrow-right</v-icon></v-list-item-avatar>
            <div class="gji">
              <h4 class="qs pa-0 ma-0 secondary--text">Faqja juaj</h4>
            </div>
          </v-list-item>
        </v-sheet>
      </div>
    </div>

    <div class="burst mb-6">
      <div class="burst2">
        <div class="burst3">
          <div class="main-foto">
            <v-img :src="main.photo" class="robshja" position="top">
              <div class="kari">
                <p class="qs secondary--text">{{main.infos.subheader}}</p>
                <h1 class="bushtri">{{main.infos.header}}</h1>
                <h4 class="qs buta">{{main.infos.subtext}}</h4>
                <v-btn class="rounded-lg white--text" color="primary" nuxt :to="main.infos.link">Vizito tani</v-btn>
              </div>
            </v-img>
          </div>
          <!--
          <div class="likkle-div">
            
            <div class="likkle-1" :style="{'background-image': `url(${side1.photo})`}">
                <div class="kari-2" >
                  <h1 class="bushtri-1">{{side1.infos.header}}</h1>
                  <h4 class="qs buta-1 mb-4">{{side1.infos.subheader}}</h4>
                  <v-btn class="rounded-lg white--text" color="primary" nuxt :to="side1.infos.link">Vizito tani</v-btn>
                </div>
            </div>
            <div class="likkle-2" :style="{'background-image': `url(${side2.photo})`}">
                <div class="kari-3">
                  <h1 class="bushtri-1 white--text">{{side2.infos.header}}</h1>
                  <v-btn class="rounded-lg primary--text" color="white" nuxt :to="side2.infos.link">Vizito tani</v-btn>
                </div>
            </div>
            
          </div>
          -->
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
                  mdi-package-variant
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
                  mdi-face-agent
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

    <div class="main-body-f">
      <div class="main-side">
        <div class="dealsod-2 mb-5">
          <div class="deals-header">
            <div class="deals-header-1-cash">
              <h3 class="qs font-weight-regular main-side-title white--text" style="color: #363f4e; text-alignment: center;"><span class="qs font-weight-black">Oferta </span>te nxehta</h3>
              <div class="packting">
                <v-btn class="qs primary--text" small text to="/ofertat">
                  Me shume
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
            <v-img class="product-main-image-2" v-if="item" :src="item.details.photos[0].src" alt="iphone">
              <v-chip
                  v-if="item.creationTime + 172800000 >= Date.now()"
                  class="ma-2"
                  color="green"
                  label
                  >
                  I ri
              </v-chip>
            </v-img>
            <div class="product-main-desc">
              <h3 class="qs secondary--text" @click="reroute(item.spot, item.details.kategoria)">{{item.details.name}}</h3>
              <v-rating 
              :value="item.details.likes/item.details.likers"
              background-color="yellow darken-2"
              color="yellow"
              x-small
              readonly
              ></v-rating>
              <p class="qs primary--text pricey" v-if="item.details.priceLow">{{item.details.priceLow}} ALL <span class="miniature gray--text text-decoration-line-through" v-if="item.details.priceLow != null">{{item.details.price}} ALL</span></p>
              <p class="qs primary--text pricey" v-if="item.details.priceLow == null">{{item.details.price}} ALL</p>
            </div>
          </div>          
        </div>
      </div>
      <!--
      <div class="side-side">
        <div class="side-pord">
          <div class="header-pord">
            <v-btn class="qs" icon width="20" height="20" @click="gotoprev1">
              <v-icon color="white" size="15">mdi-arrow-left-drop-circle</v-icon>
            </v-btn>
            <p class="qs pa-0 ma-0">Deals of the day</p>
            <v-btn class="qs" icon width="20" height="20" @click="gotonext1">
              <v-icon color="white" size="15">mdi-arrow-right-drop-circle</v-icon>
            </v-btn>
          </div>
          <client-only placeholder="Carousel loading..." class="client-80">
            <agile ref="carousels" @after-change="getCurrSlides($event)" class="mos-i-qr-2">
              <div class="deals-body-2" v-for="n in dotd" :key="n.id">
                <div class="deals-image-2">
                  <v-img :aspect-ratio="16/9" max-width="500" :src="n.photo">
                    
                  </v-img>
                </div>
                <div class="deals-desc-1">
                  <h4 class="qs d-t">{{n.details.name}}</h4>
                  <v-rating
                    :value="n.details.rating"
                    background-color="secondary"
                    color="secondary"
                    small
                    readonly
                  ></v-rating>
                  <p class="qs d-p" v-if="n.details.priceLow">{{n.details.priceLow}} ALL<span class="qs text-decoration-line-through"> {{n.details.price}} ALL</span></p>
                    <p class="qs d-p" v-if="n.details.priceLow == null">{{n.details.price}} ALL</p>
                  <div class="timer-2">
                    <no-ssr>
                        <vac :left-time="times[n.index]">
                        <span slot="process" slot-scope="{ timeObj }" class="secondary--text"><span class="custom-timer mr-4">{{ `${timeObj.m}`}}m</span><span class="custom-timer">{{ `${timeObj.s}`}}s</span></span>
                        <span slot="finish" class="secondary--text">Oferta mbaroi!</span>
                        </vac>
                    </no-ssr>
                    <nuxt-link to="/ofertat" class="secondary--text btn-c-o">Show More</nuxt-link>
                  </div>
                </div>
              </div>
            </agile>
          </client-only>
        </div>
      </div>
      -->
    </div>

    <div class="stingy mt-5 mb-6" :style="{'background-image': `url(${basic.ad1.photo})`}">
      <h1 class="qs">{{basic.ad1.name}}</h1>
      <v-btn color="white" class="primary--text rounded-lg" :to="basic.ad1.link">Vizito tani</v-btn>
    </div> 

    <div class="main-body">
      <div class="main-side">
        <div class="dealsod-2 mb-5">
          <div class="deals-header">
            <div class="deals-header-1-cash">
              <h3 class="qs font-weight-regular main-side-title white--text" style="color: #363f4e; text-alignment: center;"><span class="qs font-weight-black">Oferta </span>te nxehta</h3>
              <div class="packting">
                <v-btn class="qs primary--text" small text to="/ofertat">
                  Me shume
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
            <v-img class="product-main-image-2" v-if="item" :src="item.details.photos[0].src" alt="iphone">
              <v-chip
                  v-if="item.creationTime + 172800000 >= Date.now()"
                  class="ma-2"
                  color="green"
                  label
                  >
                  I ri
              </v-chip>
            </v-img>
            <div class="product-main-desc">
              <h3 class="qs secondary--text" @click="reroute(item.spot, item.details.kategoria)">{{item.details.name}}</h3>
              <v-rating 
              :value="item.details.likes/item.details.likers"
              background-color="yellow darken-2"
              color="yellow"
              x-small
              readonly
              ></v-rating>
              <p class="qs primary--text pricey" v-if="item.details.priceLow">{{item.details.priceLow}} ALL <span class="miniature gray--text text-decoration-line-through" v-if="item.details.priceLow != null">{{item.details.price}} ALL</span></p>
              <p class="qs primary--text pricey" v-if="item.details.priceLow == null">{{item.details.price}} ALL</p>
            </div>
          </div>          
        </div>
      </div>
      <div class="side-side-2">
        <div class="side-pord" style="border: none">
          <div class="reklamat">
            <div class="reklama-1" :style="{'background-image': `url(${stangy.ad1.photo})`}">
              <h2 class="qs">{{stangy.ad1.name}}</h2>
              <div class="mini-row">
                <v-btn class="primary--text rounded" x-small color="white" :to="stangy.ad1.link">Vizito tani</v-btn>
              </div>
            </div>
            <div class="reklama-1" :style="{'background-image': `url(${stangy.ad2.photo})`}">
              <h2 class="qs">{{stangy.ad2.name}}</h2>
              <div class="mini-row">
                <v-btn class="primary--text rounded" x-small color="white" :to="stangy.ad2.link">Vizito tani</v-btn>
              </div>
            </div>
            <div class="reklama-1" :style="{'background-image': `url(${stangy.ad3.photo})`}">
              <h2 class="qs">{{stangy.ad3.name}}</h2>
              <div class="mini-row">
                <v-btn class="primary--text rounded" x-small color="white" :to="stangy.ad3.link">Vizito tani</v-btn>
              </div>
            </div>
            <div class="reklama-1" :style="{'background-image': `url(${stangy.ad4.photo})`}">
              <h2 class="qs">{{stangy.ad4.name}}</h2>
              <div class="mini-row">
                <v-btn class="primary--text rounded" x-small color="white" :to="stangy.ad4.link">Vizito tani</v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="stingy mt-5 mb-6" :style="{'background-image': `url(${basic.ad2.photo})`}">
      <h1 class="qs">{{basic.ad2.name}}</h1>
      <v-btn color="white" class="primary--text rounded-lg" :to="basic.ad2.link">Vizito tani</v-btn>
    </div> 

    <div class="main-body-f">
      <div class="main-side">
        <div class="dealsod-2 mb-5">
          <div class="deals-header">
            <div class="deals-header-1-cash">
              <h3 class="qs font-weight-regular main-side-title white--text" style="color: #363f4e; text-alignment: center;"><span class="qs font-weight-black">Me te mirat </span></h3>
              <div class="packting">
                <v-btn class="qs primary--text" small text nuxt to="/worthit">
                  Me shume 
                </v-btn>
              </div>
            </div>
            <div class="line1-main">
              <div class="smooth" :class="{'line10': objCount == 1, 'line20': objCount == 2, 'line30': objCount == 3, 'line40': objCount == 4, 'line50': objCount == 5, 'line60': objCount == 6, 'line70': objCount == 7, 'line80': objCount == 8, 'line90': objCount == 9, 'line100': objCount == 10, }"></div>
            </div>
          </div>
        </div>
        <div class="products-main">
          <div class="product-main" v-for="item in prodis2.slice(0,4)" :key="item.id">
            <v-img class="product-main-image-2" v-if="item" :src="item.details.photos[0].src" alt="iphone">
              <v-chip
                  v-if="item.creationTime + 172800000 >= Date.now()"
                  class="ma-2"
                  color="green"
                  label
                  >
                  I ri
              </v-chip>
            </v-img>
            <div class="product-main-desc">
              <h3 class="qs secondary--text" @click="reroute(item.spot, item.details.kategoria)">{{item.details.name}}</h3>
              <v-rating 
              :value="item.details.likes/item.details.likers"
              background-color="yellow darken-2"
              color="yellow"
              x-small
              readonly
              ></v-rating>
              <p class="qs primary--text pricey" v-if="item.details.priceLow">{{item.details.priceLow}} ALL <span class="miniature gray--text text-decoration-line-through">{{item.details.price}} ALL</span></p>
              <p class="qs primary--text pricey" v-if="item.details.priceLow == null">{{item.details.price}} ALL</p>
            </div>
          </div>          
        </div>
      </div>
    </div>
    <!--
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
    <client-only placeholder="Carousel loading..." class="client-90" >
      <agile ref="carousel" :options="myOptions" @after-change="getCurrSlide($event)" class="mos-i-qr">
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
    -->
    <div class="mos-i-qr">
      <client-only>
      <swiper
        ref="carousel"
        class="swiper"
        :options="swiperOptions"
        
      >
        <swiper-slide v-for="n in dotd" :key="n.id">
            <div class="deals-body">
                <div class="deals-image">
                    <v-img :aspect-ratio="800/640" max-width="500" :src="banner"></v-img>
                </div>
                <!--
                <div class="deals-desc">
                    <h4 class="qs d-t">{{n.details.name}}</h4>
                    <v-rating
                    :value="n.details.rating"
                    background-color="yellow darken-2"
                    color="yellow"
                    small
                    readonly
                    ></v-rating>
                    <p class="qs d-p" v-if="n.details.priceLow">{{n.details.priceLow}} ALL<span class="qs text-decoration-line-through"> {{n.details.price}} ALL</span></p>
                    <p class="qs d-p" v-if="n.details.priceLow == null">{{n.details.price}} ALL</p>
                    <div class="timer">
                    <no-ssr>
                        <vac :left-time="times[n.index]">
                        <span slot="process" slot-scope="{ timeObj }" class="secondary--text"><span class="custom-timer mr-4">{{ `${timeObj.m}`}}m</span><span class="custom-timer">{{ `${timeObj.s}`}}s</span></span>
                        <span slot="finish" class="secondary--text">Oferta mbaroi!</span>
                        </vac>
                    </no-ssr>
                    <nuxt-link to="/ofertat" class="secondary--text btn-c-o">Me shume</nuxt-link>
                    </div>
                </div>
                -->
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </client-only>
    </div>

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
            <h2 class="qs">Aksesore elektronik</h2>
            <div class="line1"></div>
          </div>
          <v-btn class="qs rounded-lg secondary--text" nuxt :to="{path: '/kategorite/informatike-aksesore', query: {name: 'Aksesore', kategoria: 'Informatike'} }" color="white">Vizito tani</v-btn>
        </div>
      </div>
      <div class="squarelikkle">
        <div class="squareside">
          <div class="joint-2">
            <h2 class="qs sq-mini">Instrumente</h2>
            <h2 class="qs sq-title secondary--text">Shkrimi</h2>
          </div>
          <v-btn class="qs rounded-lg secondary--text" small nuxt :to="{path: '/kategorite/zyrë-dhe-shkollë-instrumenta-shkrimi', query: {name: 'Instrumenta shkrimi', kategoria: 'Zyrë dhe Shkollë'} }" color="white">Vizito tani</v-btn>
        </div>
      </div>
      <div class="squarelikkle-2">
        <div class="squareside-2">
          <div class="joint-3">
            <h2 class="qs sq-mini">Aksesore</h2>
            <h2 class="qs sq-title secondary--text">Zyrash</h2>
          </div>
          <v-btn class="qs rounded-lg secondary--text" small nuxt :to="{path: '/kategorite/zyrë-dhe-shkollë-aksesorë-zyre', query: {name: 'Aksesorë zyre', kategoria: 'Zyrë dhe Shkollë'} }" color="white">Vizito tani</v-btn>
        </div>
      </div>
      <div class="squarelikkle-3">
        <div class="squareside">
          <div class="joint-2">
            <h2 class="qs sq-mini">Aksesore</h2>
            <h2 class="qs sq-title secondary--text">Femrash</h2>
          </div>
          <v-btn class="qs rounded-lg secondary--text" small nuxt :to="{path: '/kategorite/veshje-femrash-aksesorë', query: {name: 'Aksesore', kategoria: 'VESHJE FEMRASH'} }" color="white">Vizito tani</v-btn>
        </div>
      </div>
      <div class="squarelikkle-4">
        <div class="squareside-2">
          <div class="joint-3">
            <h2 class="qs sq-mini">Clothing</h2>
            <h2 class="qs sq-title secondary--text">per femra</h2>
          </div>
          <v-btn class="qs rounded-lg secondary--text" small nuxt :to="{path: '/kategorite/veshje-femrash-veshje', query: {name: 'Veshje', kategoria: 'VESHJE FEMRASH'} }" color="white">Vizito tani</v-btn>
        </div>
      </div>
    </div>
    <!--
    <div class="contact">
      <h1 class="con-title">Tregu per ju!</h1>
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
    -->
  </div>
</template>

<script>
import firebase from 'firebase';
import 'firebase/firestore';
import 'swiper/css/swiper.css'
import banner from "../assets/img/adsAmazon2.png"

export default {
  async asyncData({$axios, route}){

    var obj = await $axios({
        method: "post",
        url: "http://91.230.254.11:5000/best_deals",
        params: {
            query_product: 9
        },
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })

    var obj1 = await $axios({
        method: "post",
        url: "http://91.230.254.11:5000/newest",
        params: {
            query_product: 9
        },
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })

    var obj2 = await $axios({
        method: "post",
        url: "http://91.230.254.11:5000/highest_evaluation",
        params: {
            query_product: 9
        },
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
    
    const fata = await firebase.firestore().collection('basic').get();
    const fata2 = fata.docs.map(doc => doc.data());

    const data21 = await firebase.firestore().collection('elektronike').where("details.likes", ">=", 3.5).limit(4).get();
    const datas1 = data21.docs.map(doc => doc.data());

    const timeList = fata2[0].ads.map(doc => doc.from.toDate().getTime() - Date.now());

    console.log(JSON.stringify(obj1.data.produktet))

    return {
      prodis: obj.data.produktet.slice(0, 4),
      prodis2: obj2.data.produktet.slice(0, 4),
      basic: fata2[5],
      main: fata2[1],
      side1: fata2[2],
      side2: fata2[3],
      stingy: fata2[5],
      stangy: fata2[4],
      dotd: fata2[0].ads,
      recom: datas1,
      neue: obj1.data.produktet.slice(0, 4),
      times: timeList
    }
  },
  data(){
    return{
      banner: banner,
      ratings: 4,
      slickOptions: {
        slidesToShow: 3,
        arrows: false
      },
      objCount: 1,
      swiperOptions: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      },
      speed: 7000,
      ratingfake: 4,
      myOptions: {
            navButtons: false,
            
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        dots: false
                    }
                },
                
                {
                    breakpoint: 900,
                    settings: {
                        navButtons: true,
                        dots: true,
                        infinite: false
                    }
                }
            ]
        }
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
    reroute(emri, kategoria){
      this.$router.push({
        path: '/kategorite/' + kategoria + "/" + emri.toLowerCase(),
        query: {
          name: emri,
          kategoria: kategoria
        }
      });
    }, 
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
    gotonext1: function(){
      this.$refs.carousels.goToNext();
      if(this.objCount != 10){
        this.objCount++;
      }
    },
    gotoprev1: function(){
      this.$refs.carousels.goToPrev();
      if(this.objCount != 1){
        this.objCount--;
      }
    },
    getCurrSlides: function(event){
      this.objCount = event.currentSlide + 1;
    },
    href: function (){
      this.$router.push({name: 'account-me'});
    }
  }
}
</script>

<style scoped>
.main-body-f{
  display: none;
  grid-template-columns: 100%;
  width: 800px;
}
.lite{
  background-color: #f2f2f2;
}
.card-holder{
  display: none;
}
.swiper-slide {
  text-align: center;
  height: 260px;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-pagination-bullet {
  background-color: red;
}
.swiper {
  height: 100%;
  width: 100%;
}
.example {
  height: auto;
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
  width: 90%;
  height: 27vh;
  border-radius: 25px;
  background-image: url("https://image.freepik.com/free-psd/headset-with-80s-pink-yellow-headphones_23-2148280782.jpg");
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
  background-image: url("https://image.freepik.com/free-photo/school-supplies-table-composition_23-2148939177.jpg");
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
  background-image: url("https://image.freepik.com/free-photo/top-view-arrangement-natural-material-stationery_23-2148898233.jpg");
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
  background-image: url("https://image.freepik.com/free-photo/pretty-young-woman-casual-clothes-pointing-finger-upper-right-corner-inviting-check-out-product_176420-21796.jpg");
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
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 260px;
  background-color: white;
}
.deals-image{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}
.deals-desc{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
}
.deals-desc-1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
}
.deals-desc-1 h4{
  word-break: break-all;
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
.mos-i-qr{
  width: 100%;
  max-height: 350px;
  margin: 0px 0 10px 0;
  display: block;
}
@media only screen and (min-width: 850px){
.card-holder{
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
}
.card-holder-2{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 750px;
  background-color: white;
}
.v-shit{
  display: flex;
  align-items: center;
}
.gji{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.miniature{
        font-size: 13px;
        color: darkgray;
    }
    .full-width{
        width: 100%;
    }

.fucked{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.kivi{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}
.fucked-1{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
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
  height: 100%;
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
.reklama-1{
  width: 100%;
  height: 130px;
  padding: 5px;
  background-color: #bf081d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background-size: cover;
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
  justify-content: space-between;
  padding: 0 20px 0 20px;
  align-items: center;
  background-size: cover;
}
.products-main{
  width: 100%;
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  grid-column-gap: 1%;
}
.products-main-2{
  min-height: 110%;
  width: 100%;
  display: grid;
  grid-template-columns: 49% 49%;
  grid-template-rows: 49% 49%;
  grid-row-gap: 2%;
  grid-column-gap: 2%;
  justify-content: center;
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
  width: 800px;
}
.main-body-f{
  display: grid;
  grid-template-columns: 100%;
  width: 800px;
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
  padding: 2px 10px 2px 10px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.burst{
  min-height: 79vh;
  width: 100%;
  background-color: white;
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
  grid-template-columns: 100%;
  grid-column-gap: 0%;
  width: 100%;
  height: 400px;
}
.main-foto{
  border-radius: 10px;
  overflow: hidden;
  height: 400px;
  background-position-y: top;
}
.robshja{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background-size: cover;
}
.kari{
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding: 0 0 0 35px;
}
.bushtri{
  font-family: 'qs';
  font-size: 40px;
  color: #363f4e;
}
.buta{
  color: #bf081d;
  margin-bottom: 35px;
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
}
.kari-2{
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.bushtri-1{
  font-family: 'qs';
  font-size: 30px;
  color: #363f4e;
}
.buta-1{
  font-size: 20px;
  color: #363f4e;
}
.likkle-2{
  height: 120px;
  border-radius: 10px;
  background-size: cover;
}
.kari-3{
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 30px;
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
  justify-content: flex-start;
  align-items: center;
  border-radius: 3px;
  border: 1px solid #bf081d;
  height: 100%;
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
  background-image: url("https://image.freepik.com/free-psd/headset-with-80s-pink-yellow-headphones_23-2148280782.jpg");
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
  background-image: url("https://image.freepik.com/free-photo/school-supplies-table-composition_23-2148939177.jpg");
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
  background-image: url("https://image.freepik.com/free-photo/top-view-arrangement-natural-material-stationery_23-2148898233.jpg");
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
  background-image: url("https://image.freepik.com/free-photo/pretty-young-woman-casual-clothes-pointing-finger-upper-right-corner-inviting-check-out-product_176420-21796.jpg");
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
.joint h2{
  font-size: 30px;
  font-family: 'qs';
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
  justify-content: flex-start;
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
  width: 240px;
}
.deals-desc{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 70%;
}
.deals-desc-1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  height: 1px;
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
  margin: 0 5px 0 5px;
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
  .card-holder{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
}
.card-holder-2{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  background-color: white;
}
.fucked{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0 5px 0;
}
.kivi{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}
.fucked-1{
  display: grid;
  grid-template-columns: 30% 70%;
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
  justify-content: space-between;
  padding: 0 20px 0 20px;
  align-items: center;
  background-size: cover;
}
.products-main{
  width: 100%;
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  grid-column-gap: 1%;
}
.products-main-2{
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 25% 25%;
  grid-template-rows: 49% 49%;
  grid-row-gap: 2%;
  justify-content: center;
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
.main-body-f{
  display: grid;
  grid-template-columns: 100%;
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
  padding: 2px 10px 2px 10px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.burst{
  min-height: 65vh;
  width: 100%;
  background-color: white;
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
  grid-template-columns: 100%;
  grid-column-gap: 0%;
  width: 100%;
  height: 400px;
}
.main-foto{
  border-radius: 10px;
  overflow: hidden;
  height: 400px;
  background-size: cover;
}
.robshja{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.kari{
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  padding: 0 0 0 50px;
}
.bushtri{
  font-family: 'qs';
  font-size: 40px;
  color: #363f4e;
}
.buta{
  color: #bf081d;
  margin-bottom: 35px;
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
}
.kari-2{
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.bushtri-1{
  font-family: 'qs';
  font-size: 30px;
  color: #363f4e;
}
.buta-1{
  font-size: 20px;
  color: #363f4e;
}
.likkle-2{
  height: 120px;
  border-radius: 10px;
  background-size: cover;
}
.kari-3{
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 30px;
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
  justify-content: flex-start;
  align-items: center;
  border-radius: 3px;
  border: 1px solid #bf081d;
  height: 100%;
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
  font-size: 25px;
  margin-bottom: 25px;
}
.sq-mini{
  position: relative;
  top: 10px;
  font-size: 15px;
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
  background-image: url("https://image.freepik.com/free-psd/headset-with-80s-pink-yellow-headphones_23-2148280782.jpg");
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
  background-image: url("https://image.freepik.com/free-photo/school-supplies-table-composition_23-2148939177.jpg");
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
  background-image: url("https://image.freepik.com/free-photo/top-view-arrangement-natural-material-stationery_23-2148898233.jpg");
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
  background-position-y: bottom;
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
  background-image: url("https://image.freepik.com/free-photo/pretty-young-woman-casual-clothes-pointing-finger-upper-right-corner-inviting-check-out-product_176420-21796.jpg");
  background-position-y: top;
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
  height: 1px;
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
