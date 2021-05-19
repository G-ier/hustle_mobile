<template>
  <v-app light class="bg-white">

    <Header class="site-header" v-if="phone"/>
    <ModernHeader class="site-header-modern" v-if="!phone"/>

    <div id="wholeBody">
      <v-main>
        <v-layout>
          <nuxt />
        </v-layout>
      </v-main>
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import PreHeader from '../components/PreHeader';
import ModernHeader from '../components/ModernHeader';
export default {
  components: {
    Header,
    Footer,
    PreHeader,
    ModernHeader
  },
  data () {
    return {
      phone: false
    }
  },
  mounted(){
    if(document.body.clientWidth <= 850){
        this.phone = true;
    } else {
      this.phone = false;
    }
  }
}
</script>

<style>
body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.fluid-layout{
  width: 100%;
}
.site-header{
  display: none;
}
.site-header-modern{
  display: flex;
}
@media only screen and (max-width: 850px){
.site-header{
  display: block;
}
.site-header-modern{
  display: none;
}
}
</style>
