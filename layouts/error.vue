<template>
  <v-app dark>
    <div class="e-container">
      <h1 class="ups qs">Ups...</h1>
      <div v-if="error.statusCode === 404" class="center-e">
        <div class="circle-e">
          <h1 class="qs s25 mb-3">{{ pageNotFound }} - Faqja nuk u gjet</h1>
          <v-btn text class="btn-c-o white--text qs">
            <NuxtLink to="/" class="qs btn-c-o link-e">
              Faqja kryesore
            </NuxtLink>
          </v-btn>
        </div>
      </div>
      <div v-else class="center-e">
        <div class="circle-e">
          <h1 class="qs s25">{{ otherError }}</h1>
          <v-btn text class="btn-c-o white--text qs">
            <NuxtLink to="/" class="qs btn-c-o link-e">
              Faqja kryesore
            </NuxtLink>
          </v-btn>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404',
      otherError: 'Faqja nuk u gjet'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      titleTemplate: title + " | Klinika Fertility"
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.ups{
  width: 100%;
  color: #1e65b8;
  text-align: center;
  top: 30px;
  font-size: 40px;
  position: absolute;
}
.e-container{
  width: 100vw;
  height: 100vh;
  background-color: white;
}
.center-e{
  width: 100%;
  height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.circle-e{
  width: 350px;
  border-radius: 50%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1e65b8;
}
</style>
