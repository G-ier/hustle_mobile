<template>
  <div class="edit">
      <div class="sets">
            
            <h2 class="classy secondary--text">Create new products</h2>
            
        </div>
        <div class="lineM"></div>
        <div class="market">
            <div class="market-inner">
                <h3 class="qs">Start creating now.</h3>
            </div>
        </div>
        <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
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
                <v-toolbar-title>Edit your product</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn
                    dark
                    text
                    @click="upload"
                    >
                    Save
                    </v-btn>
                </v-toolbar-items>
                </v-toolbar>
                <v-list
                three-line
                subheader
                class="white"
                >
                <v-subheader class="secondary--text">Edit details</v-subheader>
                <v-list-item>
                    <v-list-item-content class="hiddeneye">
                    <v-text-field
                        v-model="detailsToEdit.details.name"
                        label="New Name"
                        outlined
                        clearable
                        dense
                        light
                        color="secondary"
                    ></v-text-field>
                    <v-text-field
                        v-model="detailsToEdit.details.price"
                        label="New Price"
                        outlined
                        clearable
                        dense
                        light
                        color="secondary"
                    ></v-text-field>
                    <v-textarea
                        clearable
                        clear-icon="mdi-close-circle"
                        label="New description"
                        v-model="detailsToEdit.details.desc"
                        color="white"
                        outlined
                        light
                    ></v-textarea>
                    </v-list-item-content>
                </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list
                three-line
                subheader
                class="white"
                >
                <v-subheader class="secondary--text">More details</v-subheader>
                <v-list-item>
                    <v-list-item-content>
                    <div class="fab-holder" v-for="item in detailsToEdit.details.details" :key="item">
                        <v-text-field
                            v-model="detailsToEdit.details.details[detailsToEdit.details.details.indexOf(item)]"
                            label="New Detail"
                            outlined
                            clearable
                            dense
                            light
                            color="secondary"
                        ></v-text-field>
                    </div>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-row justify="center full-width">
                        <v-fab-transition>
                            <v-btn
                                fab
                                small
                                dark
                                bottom
                                left
                                class="v-btn--example"
                                color="secondary"
                                @click="newline"
                            >
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </v-fab-transition>
                    </v-row>
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
            Creation success!
            </v-card-title>

            <v-card-text class="qs">
            Creation successful. A reload may be needed to refresh the data.
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
         <v-fab-transition>
            <v-btn
                fab
                large
                dark
                bottom
                left
                class="v-btn--example"
                color="primary"
                @click="dialog = true"
            >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-fab-transition>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/firestore'
export default {
    async asyncData({route}){
        const data = await firebase.firestore().collection('users').doc(route.query.name).get();
        const dataF = data.data();

        var fotoErsatz = dataF.photo ? dataF.photo : null;

        return{
            nameOfS: dataF.username,
            photo: fotoErsatz
        }
    },
    data(){
        return{
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
            detailsToEdit: {
                details: {
                    name: "",
                    price: "",
                    desc: "",
                    seller: "",
                    sellerPhoto: "",
                    details: [
                        ""
                    ]
                },
                spot: ""

            },
            spot: null,
            dialog2: false,
            fab: false,
            hidden: false,
            tabs: null,
            totalD: 1,

        }
    },
    methods: {
        edit: function (prod, spot){
            this.detailsToEdit = prod;
            this.spot = spot;

            this.dialog = true;
        },
        close: function(){
            this.detailsToEdit = {
                details: {
                    name: "",
                    price: "",
                    desc: "",
                    seller: "",
                    sellerPhoto: "",
                    details: [
                        ""
                    ]
                },
                owner: "",
                spot: ""
            };
            this.spot = null;

            this.dialog = false;
        },
        newline: function(){
            this.totalD += 1;

            this.detailsToEdit.details.push("");
        },
        upload: async function(){
            await firebase.firestore().collection('elektronike').doc(this.detailsToEdit.details.name).set({
                details: {
                    name: this.detailsToEdit.details.name,
                    price: this.detailsToEdit.details.price,
                    desc: this.detailsToEdit.details.desc,
                    seller: this.nameOfS,
                    sellerPhoto: this.photo,
                    details: this.detailsToEdit.details.details
                },
                owner: this.nameOfS,
                spot: this.detailsToEdit.details.name
            });

            this.detailsToEdit = {
                details: {
                    name: "",
                    price: "",
                    desc: "",
                    seller: "",
                    sellerPhoto: "",
                    details: [
                        ""
                    ]
                },
                owner: "",
                spot: ""
            };
            this.spot = null;

            this.dialog = false;
            this.dialog2 = true;
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
    .hiddeneye{
        display: flex;
        width: 750px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
}    
</style>