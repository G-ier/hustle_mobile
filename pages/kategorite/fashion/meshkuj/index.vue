<template>
    <div class="shop">
        <v-navigation-drawer
        v-model="drawer"
        absolute
        color="white"
        temporary
        >
        <v-list
            nav
            dense
        >
            <v-list-item-group
            v-model="group"
            class="primary--text"
            >
            <v-list-item>
                <v-list-item-title class="primary--text">Foo</v-list-item-title>
            </v-list-item>

            <v-list-item>
                <v-list-item-title class="primary--text">Bar</v-list-item-title>
            </v-list-item>

            <v-list-item>
                <v-list-item-title class="primary--text">Fizz</v-list-item-title>
            </v-list-item>

            <v-list-item>
                <v-list-item-title class="primary--text">Buzz</v-list-item-title>
            </v-list-item>
            </v-list-item-group>
        </v-list>
        </v-navigation-drawer>
        <v-navigation-drawer
        v-model="drawer2"
        absolute
        bottom
        temporary
        color="secondary"
        >
        <v-list
            nav
            dense
        >
            <v-list-item-group
            v-model="group"
            >
            <v-list-item>
                <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>

            <v-list-item>
                <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>

            <v-list-item>
                <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>

            <v-list-item>
                <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
            </v-list-item-group>
        </v-list>
        </v-navigation-drawer>
        <div class="sets">
            <v-btn icon @click="drawer = !drawer">
                <v-icon color="secondary">mdi-card-text-outline</v-icon>
            </v-btn>
            <v-btn icon @click="drawer2 = !drawer2">
                <v-icon color="secondary">mdi-filter</v-icon>
            </v-btn>
        </div>
        <div class="lineM"></div>
        <div class="market">
            <div class="market-inner">
                <div class="sell-container" v-for="item in 4" :key="item">
                    <div class="sellable">
                        <nuxt-link class="btn-c-o sell-link" to="/">
                            <v-img :aspect-ratio="1/1" class="market-img secondary-bg" src="https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?cs=srgb&dl=pexels-eprism-studio-335257.jpg&fm=jpg"></v-img>
                        </nuxt-link>
                        <div class="safety">
                            <div class="sellable-desc">
                                <h4 class="sell-title">Titulli</h4>
                                <p class="qs sell-price">38$</p>
                                <div class="func-row">
                                    <v-btn color="primary" class="rounded-md" small @click="snackbar = true">Add to cart</v-btn>
                                    <v-btn icon color="secondary" class="rounded-xl" small @click="snackbar2 = true"><v-icon color="secondary" size="23">mdi-heart-outline</v-icon></v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-snackbar
        v-model="snackbar"
        timeout="3000"
        color="primary"
        >
        Item added to cart.

        <template v-slot:action="{ attrs }">
            <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbar = false"
            >
            Close
            </v-btn>
        </template>
        </v-snackbar>
        <v-snackbar
        v-model="snackbar2"
        timeout="3000"
        color="secondary"
        >
        Item added to favourites.

        <template v-slot:action="{ attrs }">
            <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbar2 = false"
            >
            Close
            </v-btn>
        </template>
        </v-snackbar>
    </div>
</template>

<script>
export default {
    head(){
        return{
            title: 'Kompjuterike | hustle',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Pjeset me te fundit kompjuterike tek ne'
                }
            ]
        }
    },
    data(){
        return{
            snackbar: false,
            snackbar2: false,
            drawer: false,
            drawer2: false, 
        }
    },
    methods: {
        openSets: function (){

        }
    }
}
</script>

<style>
.shop{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    min-height: 81vh;
    background-color: white;
}
.sets{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 15px 0 8px 0;
}
.lineM{
    height: 1px;
    width: 90%;
    background-color: #a10517;
    margin-bottom: 15px;
}
.market{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
}
.market-inner{
    width: 100%;
    padding: 0;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-row-gap: 15px;
}
.sell-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 270px;
}
.sell-link{
    width: 100%;
}
.sellable{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 100%;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    border-radius: 10px;
    overflow: hidden;
}
.market-img{
    width: 100%;
}
.safety{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.sellable-desc{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 90%;
    padding: 10px 0 10px 0;
}
.func-row{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.sell-title{
    color: black;
}
.sell-price{
    color: rgb(48, 48, 48);
    padding: 0;
    margin: 0;
}
</style>