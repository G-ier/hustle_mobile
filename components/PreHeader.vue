<template>
  <div class="main-nav">
        <div class="overall">
            <div class="inner-burger-2 kivi-uno">
              <v-btn icon class="btn-c-o menu-btn" @click.stop="emitDrawer" height="30" width="30">
                <v-icon color="white" size="30">mdi-menu</v-icon>
              </v-btn>
            </div>
            <div class="leftside ml-1">
                <v-menu
                        bottom
                        left
                        light
                        class="index-upper-2"
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            dark
                            icon
                            v-bind="attrs"
                            v-on="on"
                            width="50"
                            height="24"
                            class="nofx px-2 btn-c-o qs"
                        >
                            <img :src="langLogo" alt="english version" width="18" height="18">
                            <v-icon size="12" color="white" class="pr-2">mdi-chevron-down</v-icon>
                        </v-btn>
                        </template>

                        <v-list >
                        <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
                            @click="() => {
                                langLogo = item.flag;
                            }"
                        >
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                        </v-list>
                    </v-menu>

            </div>
            <v-spacer class="spacer-uno"></v-spacer>
            <v-toolbar-title>
                <nuxt-link to="/" class="btn-c-o"><span class="ersteSpan white--text qs">LOGO</span></nuxt-link>
            </v-toolbar-title>
            <v-spacer class="spacer-duo"></v-spacer>
            <div class="rightside mr-3">
                <div class="rightside-mini">
                    <v-btn icon height="23" width="23" nuxt to="/favorites">
                        <v-icon size="23" color="white">
                            mdi-star-circle-outline
                        </v-icon>
                    </v-btn>
                </div>
            </div>
            <div class="burger-div-2 kivi-duo">
            <div class="inner-burger">
              <v-btn class="qs" icon @click.stop="cartushPhone" width="23" height="23">
                <v-icon size="23" color="white">
                  mdi-cart
                </v-icon>
              </v-btn>
            </div>
          </div>
        </div>
  </div>

</template>

<script>
import uklogo from '../assets/img/united-kingdom.png';
import allogo from '../assets/img/albania.png';
export default {
    data(){
        return{
            items: [
                { title: 'English', flag: uklogo},
                { title: 'Shqip', flag: allogo},
            ],
            langLogo: uklogo
        }
    },
    methods: {
        cartushPhone: function(){
            this.$emit('update:cart', this.$store.state.users.cart);
            this.$emit('update:cartD', true);
        },
        emitDrawer: function(){
            this.$emit('update:drawer', true);
        }
    }
}
</script>

<style>
.index-upper-2{
    width: 35px;
}
.results{
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-radius: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  min-height: 250px;
  transition: 0.3s;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}
.results::-webkit-scrollbar{
  display: none;
}
.search-p-result{
  cursor: pointer;
}
.listings{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 90%;
  overflow: hidden;
}
.tile{
  font-size: 13px;
  color: black;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 3px;
  margin-top: 10px;
  background-color: white;
  transition: 0.3s;
  height: 50px;
}
.tile p{
  text-align: center;
  padding: 5px 0 5px 10px;
  margin: 0;
}
.dontchange{
  font-size: 13px;
  color: black;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 6px;
  background-color: white;
  transition: 0.3s;
  
}
.searchy{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
}
.custom-searchy{
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  padding: 7px 15px 7px 16px;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 38px;
}
.custom-searchy:focus{
  outline: none;
  text-decoration: none;
}
.good-row{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 45px;
}
.custom-text-field.v-text-field.v-text-field--enclosed .v-input__control {
  height: 38px;
}
.custom-text-field.v-text-field.v-text-field--enclosed .v-input__control input{
  font-size: 17px;
  padding: 0 0 1px 0;
}
.custom-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
  box-shadow: none;
  padding: 0;
  margin: 0;
  width: 67vw;
}
.searchy-btn{
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #363f4e;
  padding: 7px 16px 7px 15px;
}
.main-nav{
    width: 100vw;
    height: 22px;
    
    display: flex;
    justify-content: center;
    padding-bottom: 5px;
}
.overall{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
}
.leftside{
    display: flex;
    justify-content: left;
    align-items: center;
    width: 35px;
}
.ersteSpan{
    color: white;
    font-size: 1.6em;
}
.rightside{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 35px;
}
.rightside-mini{
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 10%;
}
.lang{
    margin-bottom: 1px;
}
.index-upper-2{
    z-index: 999999999999999999999;
}
.kivi-uno{
    display: flex;
}
.kivi-duo{
    display: flex;
}
.burger-div{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100%;
}
.burger-div-2{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 24px;
}
@media screen and (min-width: 850px) {
    .searchy{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 95%;
        height: 44px;
    }
    .custom-searchy{
        border-bottom-left-radius: 15px;
        border-top-left-radius: 15px;
        padding: 7px 15px 7px 16px;
        background-color: white;
        width: 450px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: 38px;
    }
    .custom-searchy:focus{
        outline: none;
        text-decoration: none;
    }
    .good-row{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 44px;
    }
    .custom-text-field.v-text-field.v-text-field--enclosed .v-input__control {
        height: 38px;
    }
    .custom-text-field.v-text-field.v-text-field--enclosed .v-input__control input{
        font-size: 17px;
        padding: 0 0 1px 0;
    }
    .custom-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 430px;
    }
    .searchy-btn{
        border-bottom-right-radius: 15px;
        border-top-right-radius: 15px;
        background-color: #363f4e;
        padding: 7px 16px 7px 15px;
    }
    .search-input{
        display: block;
        padding-bottom: 3px;
        font-family: 'bl';
        outline: none;
        text-align: center;
        width: 0vw;
    }
    .results{
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        border-radius: 15px;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: scroll;
        width: 505px;
        min-height: 300px;
        transition: 0.3s;
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
    }
    .results::-webkit-scrollbar{
        display: none;
    }
    .search-p-result{
        cursor: pointer;
        width: 100%;
    }
    .search-p-result:hover{
        background-color: white;
    }
    .listings{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 95%;

    }
    .tile{
        font-size: 13px;
        color: black;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 3px;
        margin-top: 10px;
        background-color: white;
        transition: 0.3s;
        height: 50px;
    }
    .tile p{
        text-align: center;
        padding: 5px 0 5px 10px;
        margin: 0;
    }
    
    .dontchange{
        font-size: 13px;
        color: black;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 10px;
        margin-top: 6px;
        background-color: white;
        transition: 0.3s;
    }
    .main-nav{
        width: 100vw;
        height: 22px;
        
        display: flex;
        justify-content: center;
        padding-bottom: 10px;
    }
    .overall{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 750px;
        margin-top: 3px;
    }
    .leftside{
        display: flex;
        justify-content: left;
        align-items: center;
        width: 35px;
    }
    .ersteSpan{
        padding: 0;
        margin: 0;
    }
    .rightside{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 35px;
    }
    .rightside-mini{
        display: flex;
        justify-content: flex-end;
        align-items: center; 
    }
    .lang{
        margin-bottom: 1px;
    }
    .kivi-uno{
        display: none;
    }
    .kivi-duo{
        display: none;
    }
    .burger-div{
        display: none;
        justify-content: flex-start;
        align-items: center;
        padding: 0 5px 3px 0 ;
        height: 100%;
    }
    .burger-div-2{
        display: none;
        justify-content: flex-end;
        align-items: center;
        padding: 0 5px 0 0 ;
        height: 100%;
    }
}

</style>