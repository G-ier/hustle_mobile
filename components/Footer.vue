<template>
  <footer
    class="footer1"
  >
    
    <div class="stina">
      <div class="dragua">
        <div class="flatra">
          <h5 class="qs white--text mb-8">MENU E SHPEJT</h5>

          <nuxt-link class="pa-0 ma-0 white--text my-2" to="/terms">Termat dhe Kushtet</nuxt-link>
          <nuxt-link class="pa-0 ma-0 white--text my-2" :to="{path:'/kujdesi-ndaj-klienteve', hash: 'kthimi'}">Politikat e kthimit</nuxt-link>
          <nuxt-link class="pa-0 ma-0 white--text my-2" :to="{path:'/kujdesi-ndaj-klienteve', hash: 'qa'}">Pyetje & pergjigje të shpeshta</nuxt-link>
          <nuxt-link class="pa-0 ma-0 white--text my-2" to="/rreth-nesh">Rreth nesh</nuxt-link>
        </div>
      </div>
      <div class="dragua">
        <div class="flatra">
          <h5 class="qs white--text mb-8">FOLLOW US</h5>

          <a href="https://www.facebook.com/jari" class="btn-c-o pa-0 ma-0 white--text my-2"><v-icon color="white darken-3" size="40">mdi-facebook</v-icon> eblej.al</a>
          <a href="https://www.instagram.com/jari" class="btn-c-o pa-0 ma-0 white--text my-2"><v-icon color="white darken-3" size="40">mdi-instagram</v-icon> eblej.al</a>
          <a href="https://www.youtube.com/jari" class="btn-c-o pa-0 ma-0 white--text my-2"><v-icon color="white darken-3" size="40">mdi-youtube</v-icon> eblej.al</a>
        </div>
      </div>
      <div class="dragua">
        <div class="kontakt">
          <h5 class="qs white--text mb-8">KONTAKTI</h5>

          <a class="pa-0 ma-0 btn-c-o white--text my-2" href="tel: +7 (982) 536-50-77"><v-icon size="30" color="white">mdi-phone</v-icon> +7 (982) 536-50-77</a>
          <p class="qs white--text pa-0 ma-0 my-2"><v-icon color="white">mdi-email</v-icon> amazon@gmail.com</p>
        </div>
        <div class="abonohu mt-10">
            <h5 class="qs blacwhitek--text mb-5">NEWSLETTER</h5>

            <div class="abonohu-2">
              <v-text-field label="Email" outlined dense class="white--text rounded-lg" :hide-details="true" color="white" v-model="abonimi" @input="$v.abonimi.$touch()">
                <template slot="append">
                  <v-btn class="qs secondary--text rounded-lg mb-2" color="white" small>Dergo</v-btn>
                </template>
              </v-text-field>
            </div>
        </div>
      </div>
    </div>

    <p class="qs white--text position-f mt-10">Supported by:</p>
    <v-img :src="cards" class="stina1 mb-10" contain :aspect-ratio="584/50">
    </v-img>

    <div class="last white--text">
      <span class="white--text">hustle <span style="font-family: Arial">&copy;</span> {{ new Date().getFullYear() }} | All rights reserved.</span>
      <div class="laster">
        <nuxt-link class="btn-c-o white--text mr-1" to="/account">Faqja juaj</nuxt-link>
        <nuxt-link class="btn-c-o white--text ml-2" to="/account/register">Regjistrohuni tani</nuxt-link>
      </div>
    </div>

  </footer>
</template>

<script>
import cards from "assets/img/payments_all.png"
export default {
    props: ['widthy'],
    data(){
        return{
            abonimi: null,
            cards: cards
        }
    },
    methods: {
        login: async function(){
            this.loading = true;
            this.$v.account.email.$touch();
            await this.$store.dispatch("users/login", this.account).catch((err) => {
                this.error = err.code;   
            });
            if(this.$store.state.users.role == "admin"){
                console.log(this.$store.state.users.role);
                this.$router.push({path: "/account/drejtuesi"});
            } else if (this.$store.state.users.role == "buyer" || this.$store.state.users.role == "seller") {
                this.$router.push({path: "/account/me"});
            } else {
                this.dialog = true;
                this.loading = false;
            }
        },
        sendConfirm: function(){
            this.forgotten = false;
            this.feed = true;
            firebase.auth().sendPasswordResetEmail(this.Fmail);
        }
    }
}
</script>

<style scoped>
.position-f{
  position: relative;
  top: -25px;
}
.stina{
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: space-evenly;
  background-color: #363f4e;
  width: 100%;
  padding: 25px 0 25px 0;
}
.stina1{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #363f4e;
  width: 584px;
  height: 50px;
  padding: 50px 0 50px 0;
}
.photostic{
  width: 50%;
  height: 100%;
}
.dragua{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
}
.flatra{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
}
.kontakt{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}
.abonohu{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}
.abonohu-2{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.position-delayed{
  margin-bottom: 35px;
  margin-left: 10px;
}
.abonohu-2 .v-input .v-input__control .v-input__slot .v-text-field__details{
  display: none;
}
.footer1{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #363f4e;
}
.part1{
  width: 100%;
  min-height: 0vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #363f4e;  
  padding-top: 30px;
  padding-bottom: 30px;
}
.c1{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.c2{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.too-long{
  word-break: break-all;
}
.socialite{
  width: 100%;
  background-color: #363f4e;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0 0 0;
}
.content-block-s{
  padding: 10px 0 10px 0;
  height: 20vh;
  width: 40%;

}
.cb-title-s{
  font-family: 'fr';
  color: white;
  font-size:25px;
  margin-bottom: 15px;
  text-align: center;
}
.center-spaz-1{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.center-spaz-2{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.content-block{
  padding: 10px 0 10px 0;
  height: 20vh;

}
.cb-title{
  font-family: 'fr';
  color: white;
  font-size:25px;
  margin-bottom: 15px;
  }
.cb-links{
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}
.v-application ul {
  padding-left: 0;
}
.cb-link{
  text-decoration: none;
  color: white;
  font-family: 'qs';
  font-size: 16px;
}
.linkus{
  color: white;
}
.linkus:hover{
  color: #f1f1f1;
}
.socials{
  height: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.last{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px 8px 20px;
  font-family: 'fr';
  font-size: 18px;
  width: 90%;
}
.laster{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media screen and (max-width: 360px) {

  .position-delayed{
    margin-bottom: 35px;
    margin-left: 0px;
  }
  .stina1{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #363f4e;
    width: 245px;
    height: 21px;
    padding: 25px 0 25px 0;
  }
  .cb-title{
    font-family: 'fr';
    color: white;
    font-size:19px;
    margin-bottom: 15px;
  }
  .content-block{
    padding: 10px 0 10px 0;
    height: 25vh;

  }
  .content-block-s{
    padding: 10px 0 10px 0;
    height: 20vh;
    width: 80%;
  }
  .last{
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 8px 20px 8px 20px;
    font-family: 'fr';
    font-size: 16px;
  }
  .stina{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #363f4e;
    width: 100%;
    padding: 25px 0 25px 0;
  }
  .dragua{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 25px;
    width: 90%;
  }
  .flatra{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 70%;
  }
  .kontakt{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .abonohu{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .abonohu-2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  
}
@media screen and (min-width: 360px) and (max-width: 650px){
  .position-delayed{
    margin-bottom: 35px;
    margin-left: 0px;
  }
  .stina1{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #363f4e;
    width: 350px;
    height: 30px;
    padding: 25px 0 25px 0;
  }
  .stina{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #363f4e;
    width: 100%;
    padding: 25px 0 25px 0;
  }
  .dragua{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 25px;
    width: 90%;
  }
  .flatra{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 70%;
  }
  .kontakt{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .abonohu{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .abonohu-2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .cb-title{
    font-family: 'fr';
    color: white;
    font-size:23px;
    margin-bottom: 15px;
  }
  .content-block{
    padding: 10px 0 10px 0;
    height: 25vh;
  }
  .content-block-s{
    padding: 10px 0 10px 0;
    height: 20vh;
    width: 80%;
  }
  .cb-link{
    font-size: 14px;
  }
  .last{
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 8px 20px 8px 20px;
    font-family: 'fr';
    font-size: 18px;
    width: 90%;
  }
}
@media screen and (min-width: 650px) and (max-width: 900px) {
  .position-delayed{
    margin-bottom: 35px;
    margin-left: 0px;
  }
  .stina1{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #363f4e;
    width: 584px;
    height: 50px;
    padding: 25px 0 25px 0;
  }
  .stina{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #363f4e;
    width: 100%;
    padding: 25px 0 25px 0;
  }
  .dragua{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    margin-top: 25px;
  }
  .flatra{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 70%;
  }
  .kontakt{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .abonohu{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .abonohu-2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .cb-title{
    font-family: 'fr';
    color: white;
    font-size:25px;
    margin-bottom: 15px;
  }
  .content-block{
    padding: 10px 0 10px 0;
    height: 22vh;
  }
  .content-block-s{
    padding: 10px 0 10px 0;
    height: 20vh;
    width: 40%;
  }
}
@media screen and (min-width: 901px) {
  .position-delayed{
    margin-bottom: 35px;
    margin-left: 10px;
  }
}

</style>