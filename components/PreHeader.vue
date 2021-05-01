<template>
  <div class="main-nav">
        <div class="overall">
            <div class="leftside">
                <span class="qs mr-5 lang">Lang: </span>
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
                            width="0"
                            height="0"
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
            <div class="rightside">
                <div class="rightside-mini">
                    <v-btn icon height="23" width="23" nuxt to="/favorites">
                        <v-icon size="23" color="white">
                            mdi-star-circle-outline
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
            langLogo: uklogo,
        }
    }
}
</script>

<style>
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
    width: 45vw;
}
.rightside{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 45vw;
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
@media screen and (min-width: 850px) {
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
        width: 45vw;
    }
    .rightside{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 45vw;
    }
    .rightside-mini{
        display: flex;
        justify-content: flex-end;
        align-items: center; 
    }
    .lang{
        margin-bottom: 1px;
    }
}

</style>