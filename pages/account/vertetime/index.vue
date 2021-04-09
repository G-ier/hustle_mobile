<template>
  <div class="mjeket">
    <h1 class="mjeket-title qs">Vertetime te leshuara nga ne</h1>
    <div class="main-con">
      <v-sheet class="mx-auto main-slide" max-width="90%" color="transparent">
              <v-slide-group :show-arrows="false">
                  <v-slide-item v-for="item in messages" :key="item.name">
                      <v-card height="150" width="250" class="ma-3 py-4 cardy" color="white">
                          <v-card-title class="qs blue--text text--darken-4">{{item.name}}</v-card-title>
                          <v-row justify="start" align="center" class="ml-4"><v-icon class="blue--text text--darken-4">mdi-arrow-down-bold-circle-outline</v-icon><a href="/1259441.pdf" download="" class="btn-c-o white--text download"><v-card-text class="qs blue--text text--darken-4">Download</v-card-text></a></v-row>
                      </v-card>
                  </v-slide-item>
              </v-slide-group>
          </v-sheet>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      messages: [
        {
          name: 'Perparim Kotarja',
          url: '1259441.pdf'
        }
      ],
    }),
    head(){
      return{
        titleTemplate: "Vertetime | Klinika Medstar",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Mjeket me te mire, vetem ne Kliniken Medstar.'
          }
        ]
      }
    }
  }
</script>

<style scoped>
.mjeket{
    height: 100vh;
    width: 100%;
    background: #1e65b8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
}
.main-con{
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-slide{
  width: 90%;
}
.expansions{
  width: 70%;
}
.expansion{
  width: 100%;
}
.mjeket-title{
    font-size: 30px;
    color: white;
    text-align: center;
    position: absolute;
    top: 8vh;
}
.download {
    text-decoration: none;
    font-size: 30px;
    color: white;
}
@media screen and (max-width: 650px) {
    .mjeket{
        height: 120vh;
        width: 100%;
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url(../../../assets/img/balls2.png);
        background-size: cover;
    }
    .expansions{
      width: 90%;
    }
}
</style>