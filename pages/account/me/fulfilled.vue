<template>
    <div class="edit">
        <div class="sets">
            
            <h2 class="classy secondary--text">Fulfilled orders</h2>
            
        </div>
        <div class="lineM"></div>
        <div class="double-down mb-4" v-if="unpaid == false">
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
      <v-sheet class="pa-10 my-auto rounded-lg primary" v-if="unpaid == true">
            <h3 class="qs s20">Ju lutem riabonohuni per te aksesuar faqen.</h3>
            <p class="qs">Abonimi juaj ka mbaruar. Per te aksesuar faqen dhe cdo funksionalitet te sajin ju lutemi te riabonoheni duke kontaktuar shitesin.</p>
            <v-btn class="primary--text rounded-lg qs" color="white" nuxt to="/account/me">Tek faqja kryesore</v-btn>
        </v-sheet>
    </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore'
export default {
    async asyncData({route}){
        const ord = await firebase.firestore().collection("orders").where("onto", "==", route.query.name).get();
        const ordeal = ord.docs.map(doc => doc.data());

        const newordeal = ordeal.filter(doc => {
            return doc.fulfilled == true;
        });

        var unpaid = {
            value: false
        };
        const tod = new Date();

        if(dataF[0].paid == false && dataF[0].timestamp >= tod.getTime()){
            unpaid.value = true;
        }

        return{
            stuff: newordeal,
            unpaid: unpaid.value
        }
    }
}
</script>

<style>
.classy{
    font-family: 'qs';
    font-size: 22px;
}
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
@media screen and (min-width: 850px) {
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