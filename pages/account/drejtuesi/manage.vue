<template>
  <div class="edit">
        <div class="logout-row-1 mt-5">
            <v-btn class="qs white--text rounded-lg" to="/account/drejuesi/" color="primary">Back</v-btn>
        </div>
        <div class="sets">
            
            <h2 class="classy secondary--text">Deals of the day</h2>
            
        </div>
        <div class="lineM"></div>
        <div class="market">
            <div class="market-inner">
                <div class="sell-container" v-for="prod in dotd" :key="prod.id">
                    <div class="sellable">
                        <v-img :aspect-ratio="1/1" class="market-img secondary-bg" src="https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?cs=srgb&dl=pexels-eprism-studio-335257.jpg&fm=jpg" @click="sendToProduct(prod.spot)"></v-img>
                        <div class="safety">
                            <div class="sellable-desc">
                                <h4 class="sell-title">{{prod.details.name}}</h4>
                                <p class="qs sell-price">{{prod.details.marke}}$</p>
                                <div class="func-row">
                                    <v-btn color="secondary" class="rounded-md" small @click="edit(prod.details, prod.from)">Perpuno</v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            class="uuuuuuuuup"
            >
            
            <v-card>
                <v-toolbar
                dark
                color="primary"
                >
                <v-btn
                    icon
                    dark
                    @click="close"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Perpuno te dhenat</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn
                    dark
                    text
                    @click="save"
                    >
                    Save
                    </v-btn>
                </v-toolbar-items>
                </v-toolbar>
                <v-list
                three-line
                subheader
                >
                <v-subheader>Te dhenat e produktit</v-subheader>
                <v-list-item>
                    <v-list-item-content>
                        <div class="show-details">
                            <p class="qs ">Name: {{dotdName}}</p>
                            <p class="qs ">Name: {{dotdMarke}}</p>
                        </div>
                    </v-list-item-content>
                </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list
                three-line
                subheader
                >
                <v-subheader>Perpuno te dhenat</v-subheader>
                <v-list-item>
                    <v-list-item-content class="oat">
                    <v-text-field
                        v-model="dotdName"
                        label="Emri"
                        outlined
                        clearable
                        dense
                    ></v-text-field>
                    <v-text-field
                        v-model="dotdMarke"
                        label="Marka"
                        outlined
                        clearable
                        dense
                    ></v-text-field>
                    </v-list-item-content>
                </v-list-item>
                </v-list>
            </v-card>   
        </v-dialog>
        <v-dialog
        v-model="dialog2"
        max-width="240"
        >
        <v-card color="secondary">
            <v-card-title class="headline qs">
            Edit success!
            </v-card-title>

            <v-card-text class="qs">
            Update successful. A reload may be needed to refresh the data.
            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                color="white"
                text
                @click="dialog2 = false"
            >
                Close
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
        const dataE = await firebase.firestore().collection('basic').get();
        const dataFiltered = dataE.docs.map(doc => doc.data());

        const dotd = dataFiltered[0].ads
        return{
            dotd: dotd,
            ads: dataFiltered
        }
    },
    data(){
        return{
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
            dotdName: "",
            dotdMarke: "",
            index: null,
            spot: null,
            dialog2: false

        }
    },
    methods: {
        edit: function (prod, spot){
            this.index = prod.index;
            this.dotdName = prod.name;
            this.dotdMarke = prod.marke;
            this.spot = spot;

            this.dialog = true;
        },
        close: function(){
            this.detailsToEdit = {};
            this.spot = null;

            this.dialog = false;
        },
        save: async function(){
            this.dotd[this.index].details.name = this.dotdName;
            this.dotd[this.index].details.marke = this.dotdMarke;
            
            await firebase.firestore().collection('elektronike').doc('dotd').update({
               "ads": this.dotd
            });

            this.detailsToEdit = {};
            this.spot = null;

            this.dialog = false;
            this.dialog2 = true;
        }
    }
}
</script>

<style>
.logout-row-1{
    justify-content: flex-start;
    width: 70%;

}
.uuuuuuuuup{
    z-index: 9999999999999999999999999999999;
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
.show-details{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: rgb(214, 214, 214);
}
@media only screen and (min-width: 850px){
    .oat{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
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
    .market{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70%;
    }
    .market-inner{
        width: 100%;
        padding: 0;
        display: grid;
        grid-template-columns: 33% 33% 33%;
        grid-row-gap: 15px;
    }
    .sell-container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 340px;
        width: 250px;
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
        margin: 0 0 10px 0;
    }
}    
</style>