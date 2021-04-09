<template>
    <div class="edit">
        <div class="sets">
            
            <h2 class="classy secondary--text">Your orders</h2>
            
        </div>
        <div class="lineM"></div>
        <div class="double-down mb-4">
          <div class="desc-row">
            <v-expansion-panels accordion dark>
                <v-expansion-panel class="primary white--text mb-2" v-for="panel in stuff" :key="panel">
                    <v-expansion-panel-header class="qs white--text">From: {{panel.from}}</v-expansion-panel-header>
                    <v-expansion-panel-content class="qs white--text">
                        <div class="order" v-for="order in panel.orders" :key="order">
                            <div class="peace">
                                <p class="qs">Item: {{order.item}}</p>
                                <p class="qs">Order payment: {{order.type}}</p>
                                <p class="qs">Order price: {{order.price}}</p>
                                <p class="qs">Paid for: {{order.paid}}</p>
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
import * as firebase from 'firebase/app'
import 'firebase/firestore'
export default {
    async asyncData({route}){
        const ord = await firebase.firestore().collection("orders").where("onto", "==", route.query.name).get();
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
</style>