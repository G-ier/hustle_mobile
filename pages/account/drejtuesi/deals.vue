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
                    <v-expansion-panel-header class="qs white--text">
                        <v-row no-gutters>
                            <v-col cols="2">
                                <h2 class="qs white--text">{{stuff.indexOf(panel)+1}} | </h2>
                            </v-col>
                            <v-col cols="6">
                                <p class="qs white--text" v-if="panel.fulfilled">I derguar</p>
                                <p class="qs white--text" v-if="!panel.fulfilled">I paderguar</p>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="qs white--text">
                        <div class="order">
                            <div class="peace">
                                <p class="qs">Telefoni: {{panel.number}}</p>
                                <p class="qs">Adresa: {{panel.address}}</p>
                                <p class="qs">Shitesi: {{panel.onto}}</p>
                                <p class="qs">Bleresi: {{panel.from}}</p>
                            </div>
                        </div>
                    </v-expansion-panel-content>
                    <v-expansion-panel-content class="qs white--text">
                        <div class="order">
                            <div class="peace">
                                <p class="qs">Produkti: {{panel.orders.item}}</p>
                                <p class="qs">Pagesa: {{panel.orders.type}}</p>
                                <p class="qs">Cmimi: {{panel.orders.price}}</p>
                                <p class="qs">Sasia: {{panel.orders.quantity}}</p>
                                <p class="qs" v-if="panel.orders.paid">Statusi: I paguar</p>
                                <p class="qs" v-if="panel.orders.paid">Statusi: I papaguar</p>
                            </div>
                        </div>
                        <v-btn class="rounded-lg primary--text" small color="white" @click="uDergua(panel)">U dergua</v-btn>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
      </div>
      <v-dialog
        v-model="reassurance"
        max-width="240"
        >
        <v-card color="secondary">
            <v-card-title class="headline qs">
            A jeni te sigurt?
            </v-card-title>

            <v-card-text class="qs">
            Jeni te sigurte qe dergesa eshte e kryer?
            </v-card-text>

            <v-card-actions>
            <v-btn
                color="white"
                text
                @click="reassurance = false"
            >
                Jo
            </v-btn>
            
            <v-spacer></v-spacer>

            <v-btn
                color="white"
                text
                @click="kryer"
            >
                Po
            </v-btn>
            </v-card-actions>
        </v-card>
     </v-dialog>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/firestore'
export default {
    async asyncData({route}){
        const ord = await firebase.firestore().collection("orders").get();
        const ordeal = ord.docs.map(doc => doc.data());

        return{
            stuff: ordeal
        }
    },
    data(){
        return{
            reassurance: false,
            doc: null,
            docInfo: null
        }
    },
    methods: {
        uDergua: function (doc){
            this.docInfo = doc;
            this.reassurance = true;
            console.log(this.docInfo);
        },
        kryer: async function(){
            await firebase.firestore().collection('orders').doc(this.docInfo.orderID).update({
                address: this.docInfo.address,
                from: this.docInfo.from,
                fulfilled: !this.docInfo.fulfilled,
                number: this.docInfo.number,
                onto: this.docInfo.onto,
                orders: this.docInfo.orders,
                payee_email: this.docInfo.payee_email,
                qyteti: this.docInfo.qyteti
            });

            this.reassurance = false;
        }
    }
}
</script>

<style>
.r{
    z-index: 999999998989898787979867987;
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
    width: 70%;
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