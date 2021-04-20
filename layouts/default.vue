<template>
  <v-app dark class="bg-white">
    <div class="index-upper">
      <Header />
    </div>
    <v-main>
      <v-layout>
        <nuxt />
      </v-layout>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import PreHeader from '../components/PreHeader';
export default {
  components: {
    Header,
    Footer,
    PreHeader
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
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
  }
}
</script>

<style>
.fluid-layout{
  width: 100%;
}
.index-upper{
  z-index: 99999999999;
}
</style>
