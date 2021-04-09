<template>
    <div class="nothing" v-if="results[0] === 'null'">
        <h1 class="noSearch qs">Kerkimi nuk eshte dhene.</h1>
        <v-btn text class="blue--text text--darken-4 btn-c-o rounded-lg"><nuxt-link to="/" class="btn-c-o qs blue--text text--darken-4">Shko te faqja kryesore</nuxt-link></v-btn>
    </div>
  <div class="search" v-else>
      <div class="fully-txt"><h1 class="search-title qs mb-4">{{count}} rezultate per "{{$route.query.search}}"</h1></div>
      <div class="inner-search" v-if="$route.query.search != null && results.length > 0">
          <div class="search-holder" v-for="result in results" :key="result.name">
              <div class="search-row">
                  <v-row justify="space-between" align="center">
                      <v-card-title class="qs black--text">{{result.name}}</v-card-title>
                      <v-btn class="btn-c-o qs white--text" color="blue darken-4"><nuxt-link :to="result.rd" class="btn-c-o white--text">Trego me shume</nuxt-link></v-btn>
                  </v-row>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'search',
    data(){
        return{
            count: null,
        }
    },
    asyncData({route}){
        var states = [
            {name: 'Fertility', rd: '/'},
            {name: 'Pediatri', rd: '/sherbimet/pediatri'},
            {name: 'Kardiologji', rd: '/sherbimet/kardiologji'},
            {name: 'Kirurgji plastike', rd: '/sherbimet/kirurgji-plastike'},
            {name: 'Kirurgji vaskulare', rd: '/sherbimet/kirurgji-vaskulare'},
            {name: 'Sherbimet', rd: '/sherbimet'},
            {name: 'Paketat', rd: '/paketat'},
            {name: 'Rreth nesh', rd: '/rreth-nesh'},
            {name: 'Mjeket', rd: '/mjeket'},
        ];
        var resultsBevor = states.filter(post => {
            if(route.query.search){
                return post.name.toLowerCase().includes(route.query.search.toLowerCase());
            } else {
                return;
            }
        });
        return{
            results: states.filter(post => {
                if(route.query.search){
                    return post.name.toLowerCase().includes(route.query.search.toLowerCase());
                } else {
                    return "null";
                }
            }),
            count: resultsBevor.length
        }
    }
}
</script>

<style>
.search{
    min-height: 100vh;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.inner-search{
    width: 80%;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 20px 0 20px 0;
}
.fully-txt{
    width: 100%;
}
.search-title{
    font-size: 25px;
    color: #1e65b8;
    text-align: center;

}
.search-holder{
    width: 100%;
    padding: 20px 0 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    transition: 0.5s;
    height: 70px;
}
.search-holder:hover{
    background-color: rgb(236, 236, 236);
}
.search-row{
    width: 80%;
}
.nothing{
    width: 100%;
    height: 92vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
}
.noSearch{
    font-size: 35px;
    color: #1e65b8;
    text-align: center;
    margin-bottom: 30px;
}
@media only screen and (max-width: 650px) {
    .inner-search{
        width: 90%;
        border: 1px solid grey;
        border-radius: 10px;
        padding: 20px 0 20px 0;
    }
    .fully-txt{
        width: 100%;
    }
}
</style>