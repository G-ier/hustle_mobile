<template>
    <div class="edit">
        <div class="sets">
            
            <h2 class="classy secondary--text">Porosite tuaja</h2>
            
        </div>
        <div class="lineM"></div>
        <div class="double-down mb-4">
          <div class="desc-row">
            <v-expansion-panels accordion dark>
                <v-expansion-panel class="primary white--text mb-2" v-for="panel in stuff" :key="panel">
                    <v-expansion-panel-header class="qs white--text">
                        <v-row no-gutters align="center">
                            <h2 class="qs white--text ma-0 pa-0">{{stuff.indexOf(panel)+1}}</h2>
                            <v-spacer></v-spacer>
                            <h2 class="qs white--text ma-0 pa-0">Derguar: </h2>
                            <v-icon v-if="panel.fulfilled" color="white" >mdi-check-circle-outline</v-icon>
                            <v-icon v-if="!panel.fulfilled" color="white">mdi-close-octagon-outline</v-icon>
                            <v-spacer></v-spacer>
                        </v-row>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="qs white--text">
                        <div class="order">
                            <div class="peace">
                                <p class="qs">Item: {{panel.orders.item}}</p>
                                <p class="qs">Order payment: {{panel.orders.type}}</p>
                                <p class="qs">Order price: {{panel.orders.price}}</p>
                                <p class="qs">Paid for: {{panel.orders.paid}}</p>
                            </div>
                        </div>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
      </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore'
import Cookies from 'js-cookie';
export default {
    async asyncData({route, store}){
        const cook = route.query.name;

        const ord = await firebase.firestore().collection("orders").where("onto", "==", cook).get();
        const ordeal = ord.docs.map(doc => doc.data());

        return{
            stuff: ordeal
        }
    }
}
</script>

<style>
.edit{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    min-height: 81vh;
    background-color: white;
}
.classy{
    font-family: 'qs';
    font-size: 22px;
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
.desc-row{
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.double-down{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.order{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.peace{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
@media screen and (min-width:850px) {
    .sets{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70%;
        padding: 15px 0 8px 0;
    }
    .lineM{
        height: 1px;
        width: 70%;
        background-color: #a10517;
        margin-bottom: 15px;
    }
    .double-down{
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>