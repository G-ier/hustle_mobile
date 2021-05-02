<template>
  <div class="edit">
        <div class="logout-row-1 mt-5">
            <v-btn class="qs white--text rounded-lg" to="/account/drejuesi/" color="primary">Back</v-btn>
        </div>
        <div class="sets">  
            <h2 class="classy secondary--text">Deals of the day</h2>  
        </div>
        <div class="lineM"></div>
        <div class="market mb-9">
            <div class="market-inner">
                <div class="sell-container" v-for="prod in dotd" :key="prod.id">
                    <div class="sellable">
                        <v-img :aspect-ratio="1/1" class="market-img secondary-bg" :src="prod.photo"></v-img>
                        <div class="safety">
                            <div class="sellable-desc">
                                <h4 class="sell-title">{{prod.details.name}}</h4>
                                <p class="qs sell-price">{{prod.details.marke}}</p>
                                <div class="func-row">
                                    <v-btn color="secondary" class="rounded-md" small @click="edit(prod.details, prod.from)">Perpuno</v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sets">  
            <h2 class="classy secondary--text">Reklamat kryesore</h2>  
        </div>
        <div class="lineM"></div>
        <div class="market">
            <div class="market-inner">
                <div class="sell-container-2" v-for="ad in ads" :key="ad.id">
                    <div class="sellable-2">
                        <div class="safety">
                            <div class="sellable-desc-2">
                                <h4 class="sell-title">{{ad.name}}</h4>
                                <div class="func-row-2">
                                    <v-btn color="secondary" class="rounded-md" small @click="editAd(ad)">Perpuno</v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sets">  
            <h2 class="classy secondary--text">Reklamat ne krahe</h2>  
        </div>
        <div class="lineM"></div>
        <div class="market">
            <div class="market-inner">
                <div class="sell-container-2" v-for="side in sides" :key="side.id">
                    <div class="sellable-2">
                        <div class="safety">
                            <div class="sellable-desc-2">
                                <h4 class="sell-title">{{side.name}}</h4>
                                <div class="func-row-2">
                                    <v-btn color="secondary" class="rounded-md" small @click="editSide(side)">Perpuno</v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sets">  
            <h2 class="classy secondary--text">Paneli kryesor</h2>  
        </div>
        <div class="lineM"></div>
        <div class="market">
            <div class="market-inner">
                <div class="sell-container-2">
                    <div class="sellable-2">
                        <div class="safety">
                            <div class="sellable-desc-2">
                                <h4 class="sell-title">Fotoja kryesore</h4>
                                <div class="func-row-2">
                                    <v-btn color="secondary" class="rounded-md" small @click="editMain(main)">Perpuno</v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="sell-container-2">
                    <div class="sellable-2">
                        <div class="safety">
                            <div class="sellable-desc-2">
                                <h4 class="sell-title">Fotoja ne krahe lart</h4>
                                <div class="func-row-2">
                                    <v-btn color="secondary" class="rounded-md" small @click="editDouble1(side1)">Perpuno</v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="sell-container-2">
                    <div class="sellable-2">
                        <div class="safety">
                            <div class="sellable-desc-2">
                                <h4 class="sell-title">Fotoja ne krahe poshte</h4>
                                <div class="func-row-2">
                                    <v-btn color="secondary" class="rounded-md" small @click="editDouble2(side2)">Perpuno</v-btn>
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
            style="z-index: 34235456;"
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
                        class="mr-5"
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
            v-model="dialogA"
            fullscreen
            
            transition="dialog-bottom-transition"
            style="z-index: 34235456;"
            >
            
            <v-card>
                <v-toolbar
                dark
                color="primary"
                >
                <v-btn
                    icon
                    dark
                    @click="close1"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Perpuno te dhenat</v-toolbar-title>
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
                >
                <v-subheader>Te dhenat e reklames</v-subheader>
                <v-list-item>
                    <v-list-item-content>
                        <div class="show-details">
                            <p class="qs ">Emri: {{adname}}</p>
                            <p class="qs ">Linku: {{adlink}}</p>
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
                    <v-list-item-content class="oat-1">
                    <v-text-field
                        v-model="ademri"
                        label="Emri"
                        outlined
                        color="white"
                        clearable
                        dense
                    ></v-text-field>
                    <v-text-field
                        v-model="adlinku"
                        label="Linku per klientin"
                        outlined
                        color="white"
                        clearable
                        dense
                    ></v-text-field>
                    <input
                        ref="imageFile"
                        placeholder="Profile photo"
                        accept="image/png, image/jpeg"
                        class="inputFile"
                        type="file"
                        name="file" 
                        @change.prevent="uploadImageFile($event.target.files)"
                    >
                    </v-list-item-content>
                </v-list-item>
                </v-list>
            </v-card>   
        </v-dialog>
        <v-dialog
            v-model="dialogAs"
            fullscreen
            
            transition="dialog-bottom-transition"
            style="z-index: 34235456;"
            >
            
            <v-card>
                <v-toolbar
                dark
                color="primary"
                >
                <v-btn
                    icon
                    dark
                    @click="close2"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Perpuno te dhenat</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn
                    dark
                    text
                    @click="update"
                    >
                    Ruaj
                    </v-btn>
                </v-toolbar-items>
                </v-toolbar>
                <v-list
                three-line
                subheader
                >
                <v-subheader>Te dhenat e reklames</v-subheader>
                <v-list-item>
                    <v-list-item-content>
                        <div class="show-details">
                            <p class="qs ">Emri: {{adname}}</p>
                            <p class="qs ">Linku: {{adlink}}</p>
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
                    <v-list-item-content class="oat-1">
                    <v-text-field
                        v-model="ademri"
                        label="Emri"
                        outlined
                        color="white"
                        clearable
                        dense
                    ></v-text-field>
                    <v-text-field
                        v-model="adlinku"
                        label="Linku per klientin"
                        outlined
                        color="white"
                        clearable
                        dense
                    ></v-text-field>
                    <input
                        ref="imageFile"
                        placeholder="Profile photo"
                        accept="image/png, image/jpeg"
                        class="inputFile"
                        type="file"
                        name="file" 
                        @change.prevent="uploadImageFile($event.target.files)"
                    >
                    </v-list-item-content>
                </v-list-item>
                </v-list>
            </v-card>   
        </v-dialog>
        <v-dialog
            v-model="dialogA2"
            fullscreen
            
            transition="dialog-bottom-transition"
            style="z-index: 34235456;"
            >
            
            <v-card>
                <v-toolbar
                dark
                color="primary"
                >
                <v-btn
                    icon
                    dark
                    @click="close3"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Perpuno te dhenat</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn
                    dark
                    text
                    @click="updata"
                    >
                    Ruaj
                    </v-btn>
                </v-toolbar-items>
                </v-toolbar>
                <v-list
                three-line
                subheader
                >
                <v-subheader>Te dhenat e reklames</v-subheader>
                <v-list-item>
                    <v-list-item-content>
                        <div class="show-details">
                            <p class="qs ">Subheader: {{infos.subheader}}</p>
                            <p class="qs ">Header: {{infos.header}}</p>
                            <p class="qs ">Subtext: {{infos.subtext}}</p>
                            <p class="qs ">Linku: {{infos.link}}</p>
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
                    <v-list-item-content class="oat-1">
                    <v-text-field
                        v-model="infos.subheader"
                        label="Subheader"
                        outlined
                        color="white"
                        clearable
                        dense
                    ></v-text-field>
                    <v-text-field
                        v-model="infos.header"
                        label="Header"
                        outlined
                        color="white"
                        clearable
                        dense
                    ></v-text-field>
                    <v-text-field
                        v-model="infos.subtext"
                        label="Subtext"
                        outlined
                        color="white"
                        clearable
                        dense
                    ></v-text-field>
                    <v-text-field
                        v-model="infos.link"
                        label="Linku per klientin"
                        outlined
                        color="white"
                        clearable
                        dense
                    ></v-text-field>
                    <input
                        ref="imageFile"
                        placeholder="Profile photo"
                        accept="image/png, image/jpeg"
                        class="inputFile"
                        type="file"
                        name="file" 
                        @change.prevent="uploadImageFile($event.target.files)"
                    >
                    </v-list-item-content>
                </v-list-item>
                </v-list>
            </v-card>   
        </v-dialog>
        <v-dialog
            v-model="dialogA3"
            fullscreen
            
            transition="dialog-bottom-transition"
            style="z-index: 34235456;"
            >
            
            <v-card>
                <v-toolbar
                dark
                color="primary"
                >
                <v-btn
                    icon
                    dark
                    @click="close4"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Perpuno te dhenat</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn
                    dark
                    text
                    @click="updatei"
                    >
                    Ruaj
                    </v-btn>
                </v-toolbar-items>
                </v-toolbar>
                <v-list
                three-line
                subheader
                >
                <v-subheader>Te dhenat e reklames</v-subheader>
                <v-list-item>
                    <v-list-item-content>
                        <div class="show-details">
                            <p class="qs ">Subheader: {{infos.subheader}}</p>
                            <p class="qs ">Header: {{infos.header}}</p>
                            <p class="qs ">Linku: {{infos.link}}</p>
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
                    <v-list-item-content class="oat-1">
                    <v-text-field
                        v-model="infos1.subheader"
                        label="Subheader"
                        outlined
                        color="white"
                        clearable
                        dense
                    ></v-text-field>
                    <v-text-field
                        v-model="infos1.header"
                        label="Header"
                        outlined
                        color="white"
                        clearable
                        dense
                    ></v-text-field>
                    <v-text-field
                        v-model="infos1.link"
                        label="Linku per klientin"
                        outlined
                        color="white"
                        clearable
                        dense
                    ></v-text-field>
                    <input
                        ref="imageFile"
                        placeholder="Profile photo"
                        accept="image/png, image/jpeg"
                        class="inputFile"
                        type="file"
                        name="file" 
                        @change.prevent="uploadImageFile($event.target.files)"
                    >
                    </v-list-item-content>
                </v-list-item>
                </v-list>
            </v-card>   
        </v-dialog>
        <v-dialog
            v-model="dialogA4"
            fullscreen
            
            transition="dialog-bottom-transition"
            style="z-index: 34235456;"
            >
            
            <v-card>
                <v-toolbar
                dark
                color="primary"
                >
                <v-btn
                    icon
                    dark
                    @click="close4"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Perpuno te dhenat</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn
                    dark
                    text
                    @click="updatei2"
                    >
                    Ruaj
                    </v-btn>
                </v-toolbar-items>
                </v-toolbar>
                <v-list
                three-line
                subheader
                >
                <v-subheader>Te dhenat e reklames</v-subheader>
                <v-list-item>
                    <v-list-item-content>
                        <div class="show-details">
                            <p class="qs ">Subheader: {{infos.subheader}}</p>
                            <p class="qs ">Header: {{infos.header}}</p>
                            <p class="qs ">Linku: {{infos.link}}</p>
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
                    <v-list-item-content class="oat-1">
                    <v-text-field
                        v-model="infos2.subheader"
                        label="Subheader"
                        outlined
                        color="white"
                        clearable
                        dense
                    ></v-text-field>
                    <v-text-field
                        v-model="infos2.header"
                        label="Header"
                        outlined
                        color="white"
                        clearable
                        dense
                    ></v-text-field>
                    <v-text-field
                        v-model="infos2.link"
                        label="Linku per klientin"
                        outlined
                        color="white"
                        clearable
                        dense
                    ></v-text-field>
                    <input
                        ref="imageFile"
                        placeholder="Profile photo"
                        accept="image/png, image/jpeg"
                        class="inputFile"
                        type="file"
                        name="file" 
                        @change.prevent="uploadImageFile($event.target.files)"
                    >
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
                @click="dialog2 = false; dialogAs = false; dialogA2 = false; dialogA3 = false; dialogA4 = false"
            >
                Close
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
export default {
    async asyncData({route}){
        const dataE = await firebase.firestore().collection('basic').get();
        const dataFiltered = dataE.docs.map(doc => doc.data());



        const dotd = dataFiltered[0].ads
        return{
            dotd: dotd,
            ads: dataFiltered[5],
            sides: dataFiltered[4],
            main: dataFiltered[1],
            side1: dataFiltered[2],
            side2: dataFiltered[3]
        }
    },
    data(){
        return{
            dialog: false,
            dialogA: false,
            dialogA2: false,
            dialogA3: false,
            dialogA4: false,
            dialogAs: false,
            notifications: false,
            sound: true,
            widgets: false,
            dotdName: "",
            dotdMarke: "",
            adname: "",
            adlink: "",
            ademri: "",
            adlinku: "",
            adphoto: "",
            adindex: null,
            index: null,
            spot: null,
            dialog2: false,
            selectedFile: null,
            selectedMeta: null,
            infos: {
                header: "",
                link: "",
                subheader: "",
                subtext: ""
            },
            infos1: {
                header: "",
                link: "",
                subheader: "",
                subtext: ""
            },
            infos2: {
                header: "",
                link: "",
                subheader: "",
                subtext: ""
            }

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
        editAd: function (ad){
            this.adindex = ad.index;
            console.log("kariiiii")

            this.dialogA = true;
        },
        editSide: function (ad){
            this.adindex = ad.index;
            this.adname = ad.name;
            this.adlink = ad.link;

            this.dialogAs = true;
        },
        editMain: function (ad){
            this.infos.header = ad.header;
            this.infos.link = ad.link;
            this.infos.subheader = ad.subheader;
            this.infos.subtext = ad.subtext;

            this.dialogA2 = true;
        },
        editDouble1: function (ad){
            this.infos.header = ad.infos.header;
            this.infos.link = ad.infos.link;
            this.infos.subheader = ad.infos.subheader;
            this.infos.subtext = ad.infos.subtext;

            this.dialogA3 = true;
        },
        editDouble2: function (ad){
            this.infos.header = ad.infos.header;
            this.infos.link = ad.infos.link;
            this.infos.subheader = ad.infos.subheader;
            this.infos.subtext = ad.infos.subtext;

            this.dialogA4 = true;
        },
        close4: function(){
            this.infos.header = "";
            this.infos.link = "";
            this.infos.subheader = "";
            this.infos.subtext = "";

            this.dialogA3 = false;
            this.dialogA4 = false;
        },
        close3: function(){
            this.infos.header = "";
            this.infos.link = "";
            this.infos.subheader = "";
            this.infos.subtext = "";

            this.dialogA2 = false;
        },
        close2: function(){
            this.adname = "";
            this.adlink = "";
            this.adphoto = "";

            this.dialogAs = false;
        },
        close1: function(){
            this.adname = "";
            this.adlink = "";
            this.adphoto = "";

            this.dialogA = false;
        },
        close: function(){
            this.index = null;
            this.dotdName = "";
            this.dotdMarke = "";

            this.dialog = false;
        },
        save: async function(){
            this.dotd[this.index].details.name = this.dotdName;
            this.dotd[this.index].details.marke = this.dotdMarke;
            
            await firebase.firestore().collection('basic').doc('dotd').update({
               "ads": this.dotd
            });

            this.detailsToEdit = {};
            this.spot = null;

            this.dialog = false;
            this.dialog2 = true;
        },
        uploadImageFile (files) {
            if (!files.length) {
                return
            }
            const filey = files[0]

            if (!filey.type.match('image.*')) {
                alert('Please upload an image.')
                return
            }

            const metadata = {
                contentType: filey.type
            }
            
            this.selectedMeta = metadata;

            this.selectedFile = filey;

            
        },
        upload: async function(){

            // Create a reference to the destination where we're uploading
            // the file.
            const file = this.selectedFile;
            const metadata = this.selectedMeta;
            const storage = firebase.storage()
            const imageRef = storage.ref(`images/${file.name}`)

            const uploadTask = imageRef.put(file, metadata).then((snapshot) => {
                // Once the image is uploaded, obtain the download URL, which
                // is the publicly accessible URL of the image.
                return snapshot.ref.getDownloadURL().then((url) => {
                return url
                })
            }).catch((error) => {
                console.error('Error uploading image', error)
            })

            // When the upload ends, set the value of the blog image URL
            // and signal that uploading is done.
            uploadTask.then(async(url) => {
                if(this.adindex == 1 ){
                    await firebase.firestore().collection('basic').doc('stingy').update({
                        "ad1": {
                            "name" : this.ademri,
                            "link": this.adlinku,
                            "photo": url,
                            "index": this.adindex
                        },
                    });
                }  else {
                    await firebase.firestore().collection('basic').doc('stingy').update({
                        "ad2": {
                            "name" : this.ademri,
                            "link": this.adlinku,
                            "photo": url,
                            "index": this.adindex
                        },
                    });
                }
            })

            

            this.adname = "";
            this.adphoto = "";
            this.adlink = "";

            this.dialogA = false;
            this.dialog2 = true;
        },
        update: async function(){

            // Create a reference to the destination where we're uploading
            // the file.
            const file = this.selectedFile;
            const metadata = this.selectedMeta;
            const storage = firebase.storage()
            const imageRef = storage.ref(`images/${file.name}`)

            const uploadTask = imageRef.put(file, metadata).then((snapshot) => {
                // Once the image is uploaded, obtain the download URL, which
                // is the publicly accessible URL of the image.
                return snapshot.ref.getDownloadURL().then((url) => {
                return url
                })
            }).catch((error) => {
                console.error('Error uploading image', error)
            })

            // When the upload ends, set the value of the blog image URL
            // and signal that uploading is done.
            uploadTask.then(async (url) => {
                if(this.adindex == 1){
                await firebase.firestore().collection('basic').doc('stangy').update({
                    "ad1": {
                        "name" : this.adname,
                        "link": this.adlink,
                        "photo": url
                    }
                });
            } else if(this.adindex == 2) {
                await firebase.firestore().collection('basic').doc('stangy').update({
                    "ad2": {
                        "name" : this.adname,
                        "link": this.adlink,
                        "photo": url
                    }
                });
            } else if(this.adindex == 3) {
                await firebase.firestore().collection('basic').doc('stangy').update({
                    "ad3": {
                        "name" : this.adname,
                        "link": this.adlink,
                        "photo": url
                    }
                });
            } else {
                await firebase.firestore().collection('basic').doc('stangy').update({
                    "ad4": {
                        "name" : this.adname,
                        "link": this.adlink,
                        "photo": url
                    }
                });
            }
            })

            this.adname = "";
            this.adphoto = "";
            this.adlink = "";

            this.dialogAs = false;
            this.dialog2 = true;
        },
        updata: async function(){

            // Create a reference to the destination where we're uploading
            // the file.
            const file = this.selectedFile;
            const metadata = this.selectedMeta;
            const storage = firebase.storage()
            const imageRef = storage.ref(`images/${file.name}`)

            const uploadTask = imageRef.put(file, metadata).then((snapshot) => {
                // Once the image is uploaded, obtain the download URL, which
                // is the publicly accessible URL of the image.
                return snapshot.ref.getDownloadURL().then((url) => {
                return url
                })
            }).catch((error) => {
                console.error('Error uploading image', error)
            })

            // When the upload ends, set the value of the blog image URL
            // and signal that uploading is done.
            
            uploadTask.then( async (url) => {
                await firebase.firestore().collection('basic').doc('main').set({
                    infos: {
                        "subheader" : this.infos.subheader,
                        "header": this.infos.header,
                        "subtext": this.infos.subtext,
                        "link": this.infos.link
                    },
                    "photo": url
                });

            })

            
            

            this.dialogA2 = false;
            this.dialog2 = true;
        },
        updatei: async function(){

            // Create a reference to the destination where we're uploading
            // the file.
            const file = this.selectedFile;
            const metadata = this.selectedMeta;
            const storage = firebase.storage()
            const imageRef = storage.ref(`images/${file.name}`)

            const uploadTask = imageRef.put(file, metadata).then((snapshot) => {
                // Once the image is uploaded, obtain the download URL, which
                // is the publicly accessible URL of the image.
                return snapshot.ref.getDownloadURL().then((url) => {
                return url
                })
            }).catch((error) => {
                console.error('Error uploading image', error)
            })

            // When the upload ends, set the value of the blog image URL
            // and signal that uploading is done.
            uploadTask.then(async (url) => {
                await firebase.firestore().collection('basic').doc('side-1').update({
                    "infos": {
                        "subheader" : this.infos1.subheader,
                        "header": this.infos1.header,
                        "link": this.infos1.link
                    },
                    "photo": url
                });

            })


            this.dialogA3 = false;
            this.dialog2 = true;
        },
        updatei2: async function(){

            // Create a reference to the destination where we're uploading
            // the file.
            const file = this.selectedFile;
            const metadata = this.selectedMeta;
            const storage = firebase.storage()
            const imageRef = storage.ref(`images/${file.name}`)

            const uploadTask = imageRef.put(file, metadata).then((snapshot) => {
                // Once the image is uploaded, obtain the download URL, which
                // is the publicly accessible URL of the image.
                return snapshot.ref.getDownloadURL().then((url) => {
                return url
                })
            }).catch((error) => {
                console.error('Error uploading image', error)
            })

            // When the upload ends, set the value of the blog image URL
            // and signal that uploading is done.
            uploadTask.then(async (url) => {
                await firebase.firestore().collection('basic').doc('side-2').update({
                    "infos": {
                        "subheader" : this.infos2.subheader,
                        "header": this.infos2.header,
                        "link": this.infos2.link
                    },
                    "photo": url
                });

            })


            this.dialogA4 = false;
            this.dialog2 = true;
        }
    }
}
</script>

<style>
.oat-1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.inputFile::-webkit-file-upload-button {
    visibility: hidden;
}
.inputFile::before {
    content: "Zgjidh foto";
    display: inline-block;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    
    font-weight: 700;
    font-size: 10pt;
}
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
    padding: 15px 0 15px 0;
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
.sell-container-2{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 150px;
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
.sellable-2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 120px;
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
.sellable-desc-2{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    padding: 10px 0 10px 0;
}
.func-row{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.func-row-2{
    width: 100%;
    display: flex;
    justify-content: center;
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
.miniature{
  font-size: 13px;
  color: darkgray;
}
    .oat-1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .inputFile::-webkit-file-upload-button {
        visibility: hidden;
    }
    .inputFile::before {
        content: "Zgjidh foto";
        display: inline-block;
        border-radius: 3px;
        padding: 5px 8px;
        outline: none;
        white-space: nowrap;
        -webkit-user-select: none;
        cursor: pointer;
        
        font-weight: 700;
        font-size: 10pt;
    }
    .logout-row-1{
        justify-content: flex-start;
        width: 70%;
    }
    .edit{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100vw;
        min-height: 81vh;
        padding: 15px 0 15px 0;
        background-color: white;
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
    .sell-container-2{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        height: 150px;
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
    .sellable-2{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 95%;
        height: 120px;
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
    .sellable-desc-2{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 90%;
        padding: 10px 0 10px 0;
    }
    .func-row{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .func-row-2{
        width: 100%;
        display: flex;
        justify-content: center;
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