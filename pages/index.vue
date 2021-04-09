<template>
  <div class="homepage">
    <div class="mini-links">
      <div class="mini-actual-links">
        <div class="al-ting">
          <v-slide-group mobile-breakpoint="560" show-arrows="desktop">
            <v-slide-item>
              <button text class="qs white--text btn-c-o mini-link">
                <nuxt-link class="qs btn-c-o white--text" to="/kategorite/elektronike/kompjuterike">Oferta te nxehta</nuxt-link>
              </button>
            </v-slide-item>
            <v-slide-item>
              <button text class="qs white--text btn-c-o mini-link">
                <nuxt-link class="qs btn-c-o white--text" to="/account/register">Behu shites</nuxt-link>
              </button>
            </v-slide-item>
            <v-slide-item>
              <button text class="qs white--text btn-c-o mini-link" @click="href">
                Faqja e klientit
              </button>
            </v-slide-item>
            <v-slide-item>
              <button text class="qs white--text btn-c-o mini-link">
                <nuxt-link class="qs btn-c-o white--text" to="/rreth-nesh">About Us</nuxt-link>
              </button>
            </v-slide-item>
          </v-slide-group>
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
      <agile ref="carousel" @after-change="getCurrSlide($event)" :autoplay="true" :autoplaySpeed="speed">
        <div class="deals-body" v-for="n in 10" :key="n">
          <div class="deals-image">
            <v-img :aspect-ratio="16/9" :src="seni"></v-img>
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
              <nuxt-link to="/kategorite/elektronike/kompjuterike" class="secondary--text btn-c-o">Show More</nuxt-link>
            </div>
          </div>
        </div>
      </agile>
    </client-only>

    <div class="dealsod1">
      <div class="deals-header-2">
        <div class="deals-header-1">
          <h3 class="qs font-weight-regular pb-1" style="color: #363f4e; text-alignment: center;"><span class="qs font-weight-black">Kategorite </span>me te mira</h3>
        </div>
        <div class="line1">
          <div class="smooth line100"></div>
        </div>
      </div>
      <div class="squaremain">
        <div class="squarecentral">
          <div class="joint">
            <h2 class="qs">Elektronike</h2>
            <div class="line1"></div>
          </div>
          <v-btn class="qs rounded-lg secondary--text" nuxt to="/kategorite/elektronike/kompjuterike" color="white">Vizito tani</v-btn>
        </div>
      </div>
      <div class="squarelikkle">
        <div class="squareside">
          <div class="joint-2">
            <h2 class="qs sq-mini">Produkte</h2>
            <h2 class="qs sq-title secondary--text">Shtepiake</h2>
          </div>
          <v-btn class="qs rounded-lg secondary--text" small nuxt to="/kategorite/elektronike/kompjuterike" color="white">Vizito tani</v-btn>
        </div>
      </div>
      <div class="squarelikkle-2">
        <div class="squareside-2">
          <div class="joint-3">
            <h2 class="qs sq-mini">Produkte</h2>
            <h2 class="qs sq-title secondary--text">Clothing brands</h2>
          </div>
          <v-btn class="qs rounded-lg secondary--text" small nuxt to="/kategorite/elektronike/kompjuterike" color="white">Vizito tani</v-btn>
        </div>
      </div>
      <div class="squarelikkle-3">
        <div class="squareside">
          <div class="joint-2">
            <h2 class="qs sq-mini">Produkte</h2>
            <h2 class="qs sq-title secondary--text">Kozmetike</h2>
          </div>
          <v-btn class="qs rounded-lg secondary--text" small nuxt to="/kategorite/elektronike/kompjuterike" color="white">Vizito tani</v-btn>
        </div>
      </div>
    </div>
    
    <div class="contact">
      <h1 class="con-title">Dedikuar lumturise!</h1>
      <div class="con-controller">
        <div class="wrapper">
          <v-card elevation="4" color="#f5f5f5" width="310" height="250"  tile>
            <v-card-title class="secondary--text qs"><v-icon color="secondary" class="mr-5">mdi-account-group-outline</v-icon>Stafi jone</v-card-title>
            <v-card-text class="secondary--text qs">Stafi jone profesional perbehet nga infermiere dhe punonjes te fokusuar drejt sherbimit te pacienteve si dhe kualitetit te ambientit rreth pacienteve. Pervec formimit te mire profesional, tek stafi jone gjenden dhe vetite me te mira njerezore.</v-card-text> 
          </v-card>
        </div>
        <div class="wrapper">
          <v-card elevation="4" color="#f5f5f5" width="310" height="250"  tile>
            <v-card-title class="secondary--text qs"><v-icon color="secondary" class="mr-5">mdi-doctor</v-icon>Mjeket tek ne</v-card-title>
            <v-card-text class="secondary--text qs">Mjeket tane i perkasin elites profesionale mjekesore italiane po ashtu edhe asaj shqiptare. Doktoret tane kane minimaisht me shume se 20 vite eksperience ne pune dhe asnje rast te pakuruar/perkeqesuar. Misioni i tyre eshte permiresimi i cilesise se jeteses.</v-card-text> 
          </v-card>
        </div>
        <div class="wrapper">
          <v-card elevation="4" color="#f5f5f5" width="310" height="250"  tile>
            <v-card-title class="secondary--text qs"><v-icon color="secondary" class="mr-5">mdi-hospital-building</v-icon>Ambienti jone</v-card-title>
            <v-card-text class="secondary--text qs">E planifikuar nga arkitekte italian dhe e mirembajtur nga nje staf i afte, ambienti jone permbush te gjitha kushtet vecanta te kerkuara nga doktoret tane. Klinika eshte e pajisur me dhoma per cdo sherbim tonin si dhe nje laborator special te dores se fundit.</v-card-text> 
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
    return {
      statedTime: diff,
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
      speed: 7000
    }
  },
  head(){
      return{
        titleTemplate: "Klinika Fertility",
        meta: [
          {
            name: 'description',
            content: 'Klinika me perparuar shqiptare'
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
  width: 90%;
  height: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
}
.deals-header-1{
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
.cta{
  width: 100%;
  height: 93vh;
  background-color: white;
  display: grid;
  grid-template-columns: 50% 50%;
}
.cta-1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  transition: 0.5s;
  overflow: hidden;
}
.cta-2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.cta-3{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;  
}
.cta-4{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.cta-name{
  text-decoration: none;
  font-family: 'qs';
  font-size: 17px;
  color: white;
  outline: none;
  background-color: rgba(17, 17, 17, 0.479);
  width: 100%;
  height: 100%;
  text-align: center;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cta-link-1:hover{
  background-size: 120%;
}
.cta-link-2:hover{
  background-size: 120%;
}
.cta-link-3:hover{
  background-size: 120%;
}
.cta-link-4:hover{
  background-size: 120%;
}
.inside{
  color: white;
  padding: 10px 15px 10px 15px;
  background-color: rgba(32, 89, 155, 0.88);
  border-radius: 5px;
}
.inside-2{
  color: white;
  padding: 10px 15px 10px 15px;
  background-color: rgba(30, 101, 184, 0.88);
  border-radius: 5px;
}
.inside-3{
  color: white;
  padding: 10px 15px 10px 15px;
  background-color: rgba(30, 101, 184, 0.88);
  border-radius: 5px;
}
.inside-4{
  color: white;
  padding: 10px 15px 10px 15px;
  background-color: rgba(30, 101, 184, 0.88);
  border-radius: 5px;
}
.cta-link-1{
  background-image: url(../assets/img/reserve.png);
  background-color: white;
  background-position-x: center;
  background-position-y: center;
  background-size: 100%;
}
.cta-link-2{
  background-image: url(../assets/img/services.png);
  background-color: white;
  background-position-x: center;
  background-position-y: center;
  background-size: 100%;
}
.cta-link-3{
  background-image: url(../assets/img/mjeket.png);
  background-color: white;
  background-size: 100%;
  background-position-x: center;
}
.cta-link-4{
  background-image: url(../assets/img/covid.png);
  background-color: white;
  background-size: 100%;
  background-position-x: center;
  background-position-y: center;
}
.info-medical{
  width: 100%;
  height: 90vh;
  background-color: white;
}
.carousely{
  height: 100%;
}
.c-item{
  background-image: url(../assets/img/warning.png);
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  transition: 0.5s;
}
.c-item-2{
  background-image: url('https://images.pexels.com/photos/3662910/pexels-photo-3662910.jpeg?cs=srgb&dl=pexels-katie-e-3662910.jpg&fm=jpg');
  background-size: cover;
  background-position-x: center;
  transition: 0.5s;
}
.c-item-3{
  background-image: url('https://images.pexels.com/photos/4483327/pexels-photo-4483327.jpeg?cs=srgb&dl=pexels-anna-shvets-4483327.jpg&fm=jpg');
  background-size: cover;
  background-position-x: center;
  transition: 0.5s;
}
.c-controller{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.c-title{
  font-family: 'qs';
  font-size: 25px;
  margin-bottom: 15px;
  color: rgb(202, 8, 73);
}
.colorDiv{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #1e65b8;
  padding: 15px;
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
@media only screen and (max-width: 650px) {
  .cta{
    height: 92vh;
  }
  .cta-link-1{
    background-image: url(../assets/img/reserve.png);
    background-color: white;
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
  }
  .cta-link-2{
    background-image: url(../assets/img/services.png);
    background-color: white;
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
  }
  .cta-link-3{
    background-image: url(../assets/img/mjeket.png);
    background-color: white;
    background-size: cover;
    background-position-x: center;
  }
  .cta-link-4{
    background-image: url(../assets/img/covid2.png);
    background-color: white;
    background-size: cover;
    background-position-x: left;
    background-position-y: center;
  }
  .info-medical{
    height: 180vh;
  }
  .c-item{
    background-image: url(../assets/img/warning.png);
    background-size: cover;
    background-position-x: center;
  }
  .c-title{
    font-family: 'qs';
    font-size: 22px;
    margin-bottom: 15px;
    color: rgb(202, 8, 73);
  }
  .con-title{
    color: white;
    font-family: 'qs';
    font-size: 24px;
    text-align: center;
    margin-bottom: 25px;
  }
  .con-controller{
    width: 100%;
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: 100%;
  }
  .colorDiv{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: rgba(241, 241, 241, 0.76);
    padding: 15px;
  }
  .underside{
    width: 100%;
    height: 30vh;
    display: grid;
    grid-template-columns: 100%;
  }
  .wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
  .blog{
    height: 80vh;
    background-image: url(../assets/img/blog3.png);
    background-size: cover;
    background-position-x: left;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .b-holder{
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .textside{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 100%;
  }
  .image{
    display: none;
  }
}
@media only screen and (min-width: 650px) {
      .cta{
    height: 92vh;
  }
  .cta-link-1{
    background-image: url(../assets/img/reserve.png);
    background-color: white;
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
  }
  .cta-link-2{
    background-image: url(../assets/img/services.png);
    background-color: white;
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
  }
  .cta-link-3{
    background-image: url(../assets/img/mjeket.png);
    background-color: white;
    background-size: cover;
    background-position-x: center;
  }
  .cta-link-4{
    background-image: url(../assets/img/covid2.png);
    background-color: white;
    background-size: cover;
    background-position-x: left;
    background-position-y: center;
  }
  .info-medical{
    height: 180vh;
  }
  .c-item{
    background-image: url(../assets/img/warning.png);
    background-size: cover;
    background-position-x: center;
  }
  .c-title{
    font-family: 'qs';
    font-size: 22px;
    margin-bottom: 15px;
    color: rgb(202, 8, 73);
  }
  .con-title{
    color: white;
    font-family: 'qs';
    font-size: 24px;
    text-align: center;
    margin-bottom: 25px;
  }
  .con-controller{
    width: 100%;
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: 100%;
  }
  .colorDiv{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: rgba(241, 241, 241, 0.76);
    padding: 15px;
  }
  .underside{
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
  }
  .wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
  .blog{
    height: 80vh;
    background-image: url(../assets/img/blog3.png);
    background-size: cover;
    background-position-x: left;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .b-holder{
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .textside{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 100%;
  }
  .image{
    display: none;
  }
  }
  @media only screen and (min-width: 1000px) {
    .cta{
      height: 93vh;
    }
    .c-controller{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cta-link-1{
    background-image: url(../assets/img/reserve.png);
    background-color: white;
    background-position-x: center;
    background-position-y: center;
    background-size: 100%;
  }
  .cta-link-2{
    background-image: url(../assets/img/services.png);
    background-color: white;
    background-position-x: center;
    background-position-y: center;
    background-size: 100%;
  }
  .cta-link-3{
    background-image: url(../assets/img/mjeket.png);
    background-color: white;
    background-size: 100%;
    background-position-x: center;
  }
  .cta-link-4{
    background-image: url(../assets/img/covid.png);
    background-color: white;
    background-size: 100%;
    background-position-x: center;
    background-position-y: center;
  }
  .c-title{
    font-family: 'qs';
    font-size: 25px;
    margin-bottom: 15px;
    color: rgb(202, 8, 73);
  }
  .colorDiv{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: rgba(241, 241, 241, 0.76);
    padding: 15px;
  }
  .info-medical{
    height: 90vh;
  }
  .underside{
    width: 100%;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    height: 30vh;
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
    background-color: #1e65b8;
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
    width: 100%;
  }
  .holderito{
    width: 50%;
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
