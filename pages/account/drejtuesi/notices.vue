<template>
    <div class="edit">
        <div class="sets">
            
            <h2 class="classy qs secondary--text">Kontaktimet</h2>
            
        </div>
        <div class="double-down mb-4">
          <div class="desc-row">
            <v-expansion-panels accordion dark v-if="stuff.length > 0">
                <v-expansion-panel class="primary white--text rounded-lg mb-2" v-for="panel in stuff" :key="panel">
                    <v-expansion-panel-header class="qs white--text">
                        <v-row no-gutters>
                            <v-col cols="2">
                                <h2 class="qs white--text">{{panel.request.emri}}</h2>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="qs white--text">
                        <div class="order">
                            <div class="peace">
                                <p class="qs">Nga: {{panel.request.emri}}</p>
                                <p class="qs">Paketa: {{panel.request.paketa}}</p>
                                <p class="qs" v-if="mesazhi != ''">Mesazhi: {{panel.request.mesazhi}}</p>
                                <p class="qs" v-if="mesazhi == ''">Pa mesazhe te ngjitur.</p>
                                <p class="qs">Email: {{panel.request.email}}</p>
                                <p class="qs">Numri: {{panel.request.numri}}</p>
                            </div>
                        </div>
                        <v-row class="py-2">
                            <v-spacer></v-spacer>
                            <v-btn class="rounded-lg primary--text" small color="white" @click="remove(panel.id)">Hiqe</v-btn>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            <p class="qs secondary--text" v-if="stuff.length == 0">Nuk keni kontaktime.</p>
            <b-pagination
                :total="total"
                v-model="current"
                :range-before="rangeBefore"
                :range-after="rangeAfter"
                :order="order"
                :size="size"
                :simple="isSimple"
                :rounded="isRounded"
                :per-page="perPage"
                :icon-prev="prevIcon"
                :icon-next="nextIcon"
                aria-next-label="Next page"
                aria-previous-label="Previous page"
                aria-page-label="Page"
                aria-current-label="Current page">

                <template #default="props">
                    <b-button
                        @click="changePage(props.page.number)"
                        >
                        {{props.page.number}}
                    </b-button>
                </template>


                <template #previous="props">
                    <b-button
                        :id = "props.page.number - 1"
                        @click="prevPage"
                        >
                        Previous
                    </b-button>
                </template>

                <template #next="props">
                    <b-button
                        :id = "props.page.number + 1"
                        @click="nextPage"
                        >
                        Next
                    </b-button>
                </template>
            </b-pagination>
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
import firebase from 'firebase'
import 'firebase/firestore'
export default {
    async asyncData({$axios}){

        var obj = await $axios({
            method: "post",
            url: "http://91.230.254.11/fetch_seller_requests"
        })

        console.log(JSON.stringify(obj.data))

        return{
            stuff: obj.data.slice(0, 5),
            all: obj.data,
            total: obj.data.length,
            last: 5
        }
    },
    data(){
        return{
            reassurance: false,
            doc: null,
            docInfo: null,
            current: 1,
            perPage: 10,
            rangeBefore: 3,
            rangeAfter: 1,
            order: '',
            size: '',
            isSimple: false,
            isRounded: false,
            prevIcon: 'chevron-left',
            nextIcon: 'chevron-right'
        }
    },
    methods: {
        async remove(id){
            var obj  = await this.$axios({
                method: "post",
                url: "http://91.230.254.11/delete_seller_requests",
                params: {
                    id: id
                },
                headers: {
                    "Content-Type": "x-www-form-urlencoded"
                }
            })

            this.stuff = this.stuff.filter((doc)=>{
                return doc.id != id;
            })
        },
        changePage: function(num){

            if(num == 0 || num > ((this.total/5) + (this.total%5))){
                return;
            }

            var start = (num-1)*this.last;
            this.stuff = this.all.slice(start, start + 5);
        },
        nextPage: function(){

            if(this.current + 1 > ((this.total/5) + (this.total%5))){
                return;
            }

            var start = (this.current)*this.last;

            console.log(start)
            this.stuff = this.all.slice(start, start + 5);
        },
        prevPage: function(){

            if(this.current - 1  < 0){
                return;
            }

            var start = (this.current-1)*this.last;
            this.stuff = this.all.slice(start, start + 5);
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
.classy{
    font-family: 'qs';
    font-size: 22px;
}
.sets{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    padding: 15px 0 8px 0;
}
.desc-row{
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
.double-down{
    width: 100%;
    height: 100%;
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
        justify-content: center;
        align-items: center;
        width: 70%;
        padding: 15px 0 8px 0;
    }
    .double-down{
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>