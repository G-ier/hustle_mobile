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
      clipped: false,
      drawer: false,
      fixed: false,
      phone: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
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
