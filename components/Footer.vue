<template>
  <footer
    class="footer1"
  >
    <div class="socialite pb-5">
      <div class="content-block-s">
        <h4 class="cb-title-s">Na ndiqni ne rrjetet sociale</h4>
        <div class="socials">
          <v-btn icon class="btn-c-o"><a href="https://www.facebook.com/klinikafertility" class="btn-c-o"><v-icon color="white" size="40">mdi-facebook</v-icon></a></v-btn>
          <v-btn icon class="btn-c-o ml-5"><a href="https://www.instagram.com/klinikafertility/" class="btn-c-o"><v-icon color="white" size="40">mdi-instagram</v-icon></a></v-btn>
          <v-btn icon class="btn-c-o ml-5"><a href="https://www.twitter.com" class="btn-c-o"><v-icon color="white" size="40">mdi-twitter</v-icon></a></v-btn>
        </div>
      </div>
    </div>
    <!--
    <div class="part1">
      <div class="c1">
        <div class="center-spaz-1">
          <div class="content-block">
          <h4 class="cb-title">Useful links</h4>
          <ul class="cb-links">
            <li class="cb-link"><nuxt-link to="/account/me" class="qs btn-c-o"><span class="linkus">Llogaria juaj</span></nuxt-link></li>
            <li class="cb-link"><nuxt-link to="/account/register" class="qs btn-c-o"><span class="linkus">Rregjistrimi</span></nuxt-link></li>
          </ul>
        </div>
        <div class="content-block">
          <h4 class="cb-title">Rreth nesh</h4>
          <ul class="cb-links">
            <li class="cb-link"><nuxt-link to="/rreth-nesh" class="qs btn-c-o"><span class="linkus">Rreth nesh</span></nuxt-link></li>
          </ul>
        </div>
        </div>
      </div>
  
      <div class="c2">
        <div class="center-spaz-2">

        <div class="content-block">
          <h4 class="cb-title">Na kontaktoni</h4>
          <ul class="cb-links">
            <li class="cb-link">+355 69 6061000</li>
            <li class="cb-link too-long">hbc.ndihma@gmail.com</li>
            <li class="cb-link">fcwscds@gmail.com</li>
          </ul>
        </div>
        <div class="content-block">
          <h4 class="cb-title">Adresa</h4>
          <ul class="cb-links">
            <li class="cb-link">Pallati 298</li>
            <li class="cb-link">Blvd. "Bajram Curri"</li>
            <li class="cb-link">Tirana 1004</li>
          </ul>
        </div>
        </div>
      </div>

    </div>
    -->
    
    <div class="last secondary--text">
      <span>hustle <span style="font-family: Arial">&copy;</span> {{ new Date().getFullYear() }} | All rights reserved.</span>
      <div class="laster">
        <nuxt-link class="btn-c-o secondary--text mr-1" to="/account">Faqja juaj</nuxt-link>
        <nuxt-link class="btn-c-o secondary--text ml-1" to="/account/register">Regjistrohuni tani</nuxt-link>
      </div>
    </div>

  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer1{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
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
    justify-content: center;
    align-items: center;
    padding: 8px 20px 8px 20px;
    font-family: 'fr';
    font-size: 16px;
  }
}
@media screen and (min-width: 360px) {
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
}
@media screen and (min-width: 650px) {
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

</style>