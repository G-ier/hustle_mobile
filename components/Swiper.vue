<template>
  <div class="mos-i-qr" >
    <!-- component: only render Swiper on browser env -->
    <client-only>
      <swiper
        ref="carousel"
        class="swiper"
        :options="swiperOptions"
        @ready="onSwiperRedied"
        @clickSlide="onSwiperClickSlide"
        @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart"
      >
        <swiper-slide v-for="n in 5" :key="n">
            <div class="deals-body">
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
                        <vac :left-time="time">
                        <span slot="process" slot-scope="{ timeObj }" class="secondary--text"><span class="custom-timer mr-4">{{ `${timeObj.m}`}}m</span><span class="custom-timer">{{ `${timeObj.s}`}}s</span></span>
                        <span slot="finish" class="secondary--text">Offer expired!</span>
                        </vac>
                    </no-ssr>
                    <nuxt-link to="/ofertat" class="secondary--text btn-c-o">Show More</nuxt-link>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </client-only>
    <!-- directive: render origin html on server & render Swiper on browser -->
    <!-- You can get the swiper instance object in current component context by the name: "mySwiper"  -->
    <!--
    <div
      class="swiper"
      v-swiper:myDirectiveSwiper="swiperOptions"
      @ready="onSwiperRedied"
      @click-slide="onSwiperClickSlide"
      @slide-change-transition-start="onSwiperSlideChangeTransitionStart"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="index in 6" :key="index">
          <span>Slide {{ index }}</span>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
    -->
  </div>
</template>

<script>
  import seni from '../assets/img/heads.jpg';
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: 'swiper-nuxt',
    props: ['time'],
    data () {
      return {
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
        seni: seni
      }
    },
    methods: {
      onSwiperRedied(swiper) {
        console.log('Swiper redied!', swiper)
      },
      onSwiperSlideChangeTransitionStart() {
        console.log('SwiperSlideChangeTransitionStart!')
      },
      onSwiperClickSlide(index, reallyIndex) {
        console.log('Swiper click slide!', reallyIndex)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .example {
    height: auto;
    .swiper {
      height: 300px;
      width: 100%;
      .swiper-slide {
        text-align: center;
        font-size: 38px;
        font-weight: 700;
        background-color: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .swiper-pagination {
        > .swiper-pagination-bullet {
          background-color: red;
        }
      }
    }
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
.miniature{
  font-size: 13px;
  color: darkgray;
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
  justify-content: space-evenly;
  align-items: center;
  background-size: cover;
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
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  grid-column-gap: 1%;
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
  padding: 2px 10px 2px 10px;
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
  justify-content: space-evenly;
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
  padding: 2px 10px 2px 10px;
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