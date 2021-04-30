<template>
  <div class="edit">
      <div class="sets">
            
            <h2 class="classy secondary--text">Perpuno</h2>
            
        </div>
        <div class="lineM"></div>
        <div class="market">
            <div class="market-inner">
                <div class="sell-container" v-for="prod in prods" :key="prod.name">
                    <div class="sellable">
                        <v-img :aspect-ratio="1/1" class="market-img secondary-bg" :src="prod.details.photos[0]" @click="sendToProduct(prod.spot)"></v-img>
                        <div class="safety">
                            <div class="sellable-desc">
                                <h4 class="sell-title">{{prod.details.name}}</h4>
                                <p class="qs sell-price">{{prod.details.price}} ALL</p>
                                <div class="func-row">
                                    <v-btn color="secondary" class="rounded-md" small @click="edit(prod, prod.spot)">Edit</v-btn>
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
            class="r"
            >
            
            <v-card >
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
                <v-toolbar-title>Perpuno produktin</v-toolbar-title>
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
                <v-subheader class="white--text">Perpuno detajet</v-subheader>
                <v-list-item>
                    <v-list-item-content class="hiddeneye">
                    <v-text-field
                        v-model="namey"
                        label="Titulli"
                        outlined
                        clearable
                        dense
                        dark
                        color="secondary"
                        :error-messages="nameyyErrors" 
                        required 
                        @input="$v.namey.$touch()"
                    ></v-text-field>
                    <v-text-field
                        v-model="pricey"
                        label="Cmimi"
                        outlined
                        clearable
                        dense
                        dark
                        color="secondary"
                        :error-messages="priceyErrors" 
                        required 
                        @input="$v.pricey.$touch()"
                    ></v-text-field>
                    <v-text-field
                        v-model="priceyLow"
                        label="Cmimi ne ulje - jo i detyrueshem"
                        outlined
                        clearable
                        dense
                        dark
                        color="secondary"
                        :error-messages="priceyLowErrors" 
                        required 
                        @input="$v.priceyLow.$touch()"
                    ></v-text-field>
                    <v-textarea
                        clearable
                        clear-icon="mdi-close-circle"
                        label="Pershkrimi"
                        v-model="descy"
                        color="secondary"
                        outlined
                        dark
                    ></v-textarea>
                    <v-select
                        v-model="kategorita"
                        :items="kateg"
                        label="Kategoria"
                        dense
                        outlined
                        dark
                        color="secondary"
                        :error-messages="katErrors" 
                        required 
                        @input="$v.kategorita.$touch()"
                    ></v-select>
                    <div class="vert" v-for="post in postings" :key="post.id">
                        <p class="qs white--text">Fotoja {{postings.indexOf(post)}}</p>
                        <p class="qs white--text pa-0 ma-0">Momentalisht: {{post.emri}}</p>
                        <v-btn x-small color="white" class="secondary--text mb-5 mt-2" @click="postings.splice(postings.indexOf(post), 1)">Remove</v-btn>
                    </div>
                    <v-row justify="center full-width mt-6 custom-right">
                        <v-fab-transition>
                            <v-btn
                                fab
                                small
                                dark
                                bottom
                                left
                                class="v-btn--example"
                                color="secondary"
                                @click="newP = true"
                            >
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </v-fab-transition>
                    </v-row>
                    </v-list-item-content>
                </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list
                three-line
                subheader
                >
                <v-subheader class="white--text">Detajet - opsionale</v-subheader>
                <v-list-item>
                    <v-list-item-content >
                    <div class="fab-holder">
                        <v-select
                            v-model="masa"
                            :items = masat
                            placeholder="Masa"
                            outlined
                            clearable
                            dense
                            dark
                            color="secondary"
                            class="pc-small"
                            item-color="white"
                        ></v-select>
                        <v-text-field
                            v-model="sizey"
                            label="Dimensionet(psh.: 40x60cm)"
                            outlined
                            clearable
                            dense
                            dark
                            color="secondary"
                            class="pc-small"
                        ></v-text-field>
                        <v-text-field
                            v-model="pesha"
                            label="Pesha(psh.: 200g)"
                            outlined
                            clearable
                            dense
                            dark
                            color="secondary"
                            class="pc-small"
                        ></v-text-field>
                        <v-select
                            v-model="ngjyra"
                            placeholder="Ngjyra"
                            :items="ngjyrat"
                            chips
                            item-color="white"
                            outlined
                            clearable
                            dense
                            dark
                            color="secondary"
                            class="pc-small"
                        >
                            <template #selection="{ item }">
                                <v-chip color="#f2f2f2" text-color="#f2f2f2" v-if="item == 'E bardhe'">-|</v-chip>
                                <p class="qs pa-0 ma-0 white--text" v-if="item == 'E bardhe'">E bardhe</p>
                                <v-chip color="primary" text-color="primary" v-if="item == 'E kuqe'">-|</v-chip>
                                <p class="qs pa-0 ma-0 white--text" v-if="item == 'E kuqe'">E kuqe</p>
                                <v-chip color="blue darken-4" text-color="blue darken-4" v-if="item == 'Blu'">-|</v-chip>
                                <p class="qs pa-0 ma-0 white--text" v-if="item == 'Blu'">Blu</p>
                                <v-chip color="yellow darken-3" text-color="yellow darken-3" v-if="item == 'E verdhe'">-|</v-chip>
                                <p class="qs pa-0 ma-0 white--text" v-if="item == 'E verdhe'">E verdhe</p>
                                <v-chip color="green darken-2" text-color="green darken-2" v-if="item == 'Jeshile'">-|</v-chip>
                                <p class="qs pa-0 ma-0 white--text" v-if="item == 'Jeshile'">Jeshile</p>
                            </template>
                        </v-select>
                    </div>
                    </v-list-item-content>
                </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <!--
                <v-list
                three-line
                subheader
                class="white"
                >
                <v-subheader class="secondary--text">Detajet Ekstra (Opsionale)</v-subheader>
                <v-list-item>
                    <v-list-item-content>
                    <div class="fab-holder" v-for="item in toDet" :key="item">
                        <v-text-field
                            v-model="toDet[toDet.indexOf(item)].detail"
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
                -->
            </v-card> 
        <v-dialog
        v-model="photoProb"
        max-width="240"
        >
        <v-card color="primary">
            <v-card-title class="headline qs">
            Problem.
            </v-card-title>

            <v-card-text class="qs">
                Imazhi i pare eshte i detyrueshem.
            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                color="white"
                text
                @click="photoProb = false"
            >
                Close
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
        <v-dialog
        v-model="newP"
        max-width="240"
        >
        <v-card color="primary">
            <v-card-title class="headline qs">
            Shto foto
            </v-card-title>

            <v-card-text class="qs">
                <input
                    ref="imageFile"
                    placeholder="Profile photo"
                    accept="image/png, image/jpeg"
                    class="inputFileR ml-1"
                    type="file"
                    name="file"
                    @input="uploadImageFile2($event.target.files)"
                    style="width: 200px;"
                >
            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="white"
                text
                @click="newP = false"
            >
                Cancel
            </v-btn>
            <v-btn
                color="white"
                text
                @click="addNew"
            >
                Shto
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
        </v-dialog>
        <v-dialog
        v-model="dialog2"
        max-width="240"
        >
        <v-card color="secondary">
            <v-card-title class="headline qs">
            Perpunimi sukses!
            </v-card-title>

            <v-card-text class="qs">
            Perpunimi u krye me sukses.
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
import 'firebase/storage'
import {validationMixin} from 'vuelidate'
import {required, minLength, numeric} from 'vuelidate/lib/validators'
export default {
    mixins: [validationMixin],
    async asyncData({route}){
        const data = await firebase.firestore().collection('users').doc(route.query.name).get();
        const dataF = data.data();

        const dataE = await firebase.firestore().collection('elektronike').where("details.seller", "==", route.query.name).get();
        const dataFiltered = dataE.docs.map(doc => doc.data());

        var fotoErsatz = dataF.photo ? dataF.photo : null;

        return{
            nameOfS: dataF.username,
            photo: fotoErsatz,
            prods: dataFiltered
        }
    },
    data(){
        return{
            masat: [
                "XS",
                "S",
                "M",
                "L",
                "XL",
                "2XL",
                "3XL"
            ],
            ngjyrat: [
                "E bardhe",
                "Jeshile",
                "E kuqe",
                "Blu",
                "E verdhe",
            ],
            dimensionet : [],
            dialog: false,
            photoProb: false,
            notifications: false,
            kategorita: "",
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
            kateg: [
                "TV & Vidjo",
                "Audjo Shtepish",
                "Kamera, Foto & Vidjo",
                "Telefon & Aksesore",
                "Vidjo Lojra",
                "Elektronike Makine",
                "Produkte Zyrash",
                "Produkte Shkollore",
                "Printer",
                "Projektore",
                "Libra",
                "Kompjutra, Tableta",
                "Monitor",
                "Pjese Kompjuterash",
                "Aksesore",
                "Kozmetike",
                "Lodra",
                "Bebe",
                "Palester & Fitness",
                "Gjueti & Peshkim",
                "Rroba Atletike",
                "Golf",
                "Moblije Shtepie",
                "Kuzhina",
                "Dyshek & Banje",
                "Kopesht & Outdoor",
                "Produkte Kafshesh",
                "Vegla Pune",
                "Rroba femrash",
                "Rroba meshkujsh"
            ],
            prodPhoto: "",
            namey: "",
            pricey: "",
            descy: "",
            detailsy: "",
            postings: [],
            toShow: [],
            kategoritaPrefix: "",
            toDet: [
                {
                    detail: ""
                }
            ],
            pesha: null,
            masa: "",
            sizey: "",
            ngjyra: "",
            eternalName: "",
            pending: null,
            newP: false,
            priceyLow: null

        }
    },
    validations: {
        namey: {
            required,
            minLength: minLength(6)
        },
        pricey: {
            numeric,
            required
        },
        priceyLow: {
            numeric
        },
        kategorita: {
            required
        }
    },
    computed: {
        nameyyErrors(){
            const errors = []
            if (!this.$v.namey.$dirty) return errors
            !this.$v.namey.required && errors.push('Emri eshte i detyrueshem')
            !this.$v.namey.minLength && errors.push('Gjatesia minimale eshte 6 shkronja')
            return errors
        },
        priceyErrors(){
            const errors = []
            if (!this.$v.pricey.$dirty) return errors
            !this.$v.pricey.required && errors.push('Cmimi eshte i detyrueshem')
            !this.$v.pricey.numeric && errors.push('Vetem numra')
            return errors
        },
        priceyLowErrors(){
            const errors = []
            if (!this.$v.priceyLow.$dirty) return errors
            !this.$v.priceyLow.numeric && errors.push('Vetem numra')
            return errors
        },
        katErrors(){
            const errors = []
            if (!this.$v.kategorita.$dirty) return errors
            !this.$v.kategorita.required && errors.push('Kategoria eshte i detyrueshem')
            return errors
        }
    },
    methods: {
        edit: function (prod, spot){
            this.detailsToEdit = prod;
            this.spot = spot;
            this.namey = prod.details.name;
            this.eternalName = spot;
            this.pricey = prod.details.price;
            this.priceyLow = prod.details.priceLow;
            this.descy = prod.details.desc;
            this.detailsy = prod.details.details;
            this.postings = prod.details.photos;
            this.postings.forEach((doc) => {
                this.toShow.push(doc.emri);
            });
            this.toShow.shift();
            this.kategorita = prod.details.kategoria;
            this.pesha = prod.details.pesha;
            this.ngjyra = prod.details.ngjyra;
            this.masa = prod.details.masa;
            this.sizey = prod.details.sizey;

            this.dialog = true;
        },
        close: function(){
            this.namey = "";
            this.pricey = "";
            this.detailsy = "";
            this.kategorita = "";
            this.postings = [];
            this.toShow = [];
            this.descy = "";
            this.selectedFile = null;
            this.selectedMeta = null;
            this.prodPhoto = "";
            this.spot = null;

            this.dialog = false;
            return;
        },
        newline: function(){
            

            this.toDet.push({
                detail: ""
            });
        },
        newphoto: function(){

            this.newP = true;
        },
        addNew: function (param){
            this.postings.push(param);
            console.log(JSON.stringify(param));
            this.newP = false;
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

            const file = this.selectedFile;
            const metadata1 = this.selectedMeta;
            const storage = firebase.storage()
            const imageRef = storage.ref(`images/${file.name}`)

            const uploadTask = imageRef.put(file, metadata1).then((snapshot) => {
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
            uploadTask.then( (url) => {
                this.postings.push({
                    src: url,
                    emri: file.name
                });
            })
            
        },
        uploadImageFile1 (files) {
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

            const file = this.selectedFile;
            const metadata1 = this.selectedMeta;
            const storage = firebase.storage()
            const imageRef = storage.ref(`images/${file.name}`)

            const uploadTask = imageRef.put(file, metadata1).then((snapshot) => {
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
            uploadTask.then( (url) => {
                this.postings.push({
                    src: url,
                    emri: file.name
                });
            })
            
        },
        uploadImageFile2 (files) {
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

            const file = this.selectedFile;
            const metadata1 = this.selectedMeta;
            const storage = firebase.storage()
            const imageRef = storage.ref(`images/${file.name}`)

            const uploadTask = imageRef.put(file, metadata1).then((snapshot) => {
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
            uploadTask.then( (url) => {
                this.pending = {
                    src: url,
                    emri: file.name
                };
                console.log(this.pending);
                this.addNew(this.pending);
            })
            
        },
        upload: async function(){
            
            this.$v.namey.$touch();
            this.$v.pricey.$touch();
            this.$v.kategorita.$touch();
            const mainPhoto = document.getElementById("imazh");


            if(this.$v.namey.$invalid || this.$v.pricey.$invalid || this.$v.kategorita.$invalid){
                return;
            } else {
                console.log("hack me fam");
            }
            
            

            // When the upload ends, set the value of the blog image URL
            // and signal that uploading is done.

            switch(this.kategorita) {
                case "TV & Vidjo":
                    this.kategoritaPrefix = "/elektronike/";
                    break;
                case "Audjo Shtepish":
                    this.kategoritaPrefix = "/elektronike/";
                    break;
                case "Kamera, Foto & Vidjo":
                    this.kategoritaPrefix = "/elektronike/";
                    break;
                case "Telefon & Aksesore":
                    this.kategoritaPrefix = "/elektronike/";
                    break;
                case "Vidjo Lojra":
                    this.kategoritaPrefix = "/elektronike/";
                    break;
                case "Elektronike Makine":
                    this.kategoritaPrefix = "/elektronike/";
                    break;                        
                case "Produkte Zyrash":
                    this.kategoritaPrefix = "/kancelari/";
                    break;
                case "Produkte Shkollore":
                    this.kategoritaPrefix = "/kancelari/";
                    break;
                case "Printer":
                    this.kategoritaPrefix = "/kancelari/";
                    break;
                case "Projektore":
                    this.kategoritaPrefix = "/kancelari/";
                    break;            
                case "Libra":
                    this.kategoritaPrefix = "/libra/";
                    break;
                case "Kompjutra, Tableta":
                    this.kategoritaPrefix = "/computers/";
                    break;
                case "Monitor":
                    this.kategoritaPrefix = "/computers/";
                    break;
                case "Pjese Kompjuterash":
                    this.kategoritaPrefix = "/computers/";
                    break;
                case "Aksesore":
                    this.kategoritaPrefix = "/computers/";
                    break;            
                case "Kozmetike":
                    this.kategoritaPrefix = "/kozmetike/";
                    break;
                case "Lodra":
                    this.kategoritaPrefix = "/lodra/";
                    break;
                case "Bebe":
                    this.kategoritaPrefix = "/lodra/";
                    break;    
                case "Kozmetike":
                    this.kategoritaPrefix = "/kozmetike/";
                    break;
                case "Palester & Fitness":
                    this.kategoritaPrefix = "/sport/";
                    break;
                case "Gjueti & Peshkim":
                    this.kategoritaPrefix = "/sport/";
                    break;
                case "Rroba Atletike":
                    this.kategoritaPrefix = "/sport/";
                    break;
                case "Golf":
                    this.kategoritaPrefix = "/sport/";
                    break;            
                case "Moblije Shtepie":
                    this.kategoritaPrefix = "/mobilje/";  
                    break;
                case "Kuzhina":
                    this.kategoritaPrefix = "/mobilje/";  
                    break;
                case "Dyshek & Banje":
                    this.kategoritaPrefix = "/mobilje/";  
                    break;
                case "Kopesht & Outdoor":
                    this.kategoritaPrefix = "/mobilje/";  
                    break;
                case "Produkte Kafshesh":
                    this.kategoritaPrefix = "/mobilje/";  
                    break;
                case "Vegla Pune":
                    this.kategoritaPrefix = "/mobilje/";  
                    break;                    
                case "Rroba femrash":
                    this.kategoritaPrefix = "/fashion/";  
                    break; 
                case "Rroba meshkujsh":
                    this.kategoritaPrefix = "/fashion/";  
                    break;                           
            } 

            const kat = this.kategorita;

            switch(this.kategorita) {
                case "TV & Vidjo":
                    this.kategorita = "tv-dhe-video";
                    break;
                case "Audjo Shtepish":
                    this.kategorita = "audio-shtepiake";
                    break;
                case "Kamera, Foto & Vidjo":
                    this.kategorita = "kamera";
                    break;
                case "Telefon & Aksesore":
                    this.kategorita = "aksesore";
                    break;
                case "Vidjo Lojra":
                    this.kategorita = "video-lojra";
                    break;
                case "Elektronike Makine":
                    this.kategorita = "makina";
                    break;                    
                case "Produkte Zyrash":
                    this.kategorita = "zyra";
                    break;
                case "Produkte Shkollore":
                    this.kategorita = "shkollore";
                    break;
                case "Printer":
                    this.kategorita = "printer";
                    break;
                case "Projektore":
                    this.kategorita = "projektor";
                    break;              
                case "Libra":
                    this.kategorita = "libra";
                    break;
                case "Kompjutra, Tableta":
                    this.kategorita = "computers";
                    break;
                case "Monitor":
                    this.kategorita = "monitor";
                    break;
                case "Pjese Kompjuterash":
                    this.kategorita = "pjese";
                    break;
                case "Aksesore":
                    this.kategorita = "aksesore";
                    break;            
                case "Kozmetike":
                    this.kategorita = "kozmetike";
                    break;
                case "Lodra":
                    this.kategorita = "lodra";
                    break;
                case "Bebe":
                    this.kategorita = "bebe";
                    break;    
                case "Palester & Fitness":
                    this.kategorita = "palester";
                    break;
                case "Gjueti & Peshkim":
                    this.kategorita = "gjueti";
                    break;
                case "Rroba Atletike":
                    this.kategorita = "atletike";
                    break;
                case "Golf":
                    this.kategorita = "golf";
                    break;            
                case "Moblije Shtepie":
                    this.kategorita = "shtepiake";  
                    break;
                case "Kuzhina":
                    this.kategorita = "kuzhina";  
                    break;
                case "Dyshek & Banje":
                    this.kategorita = "dyshek";  
                    break;
                case "Kopesht & Outdoor":
                    this.kategorita = "outdoor";  
                    break;
                case "Produkte Kafshesh":
                    this.kategorita = "kafshesh";  
                    break;
                case "Vegla Pune":
                    this.kategorita = "vegla";  
                    break;                    
                case "Rroba femrash":
                    this.kategorita = "femra";  
                    break;   
                case "Rroba meshkujsh":
                    this.kategoritaPrefix = "meshkuj";  
                    break;                        
            }

            console.log("sasdfeasdd");
            await firebase.firestore().collection('elektronike').doc(this.eternalName).update({
                details: {
                    name: this.namey,
                    price: this.pricey,
                    priceLow: this.priceyLow ? this.priceyLow : null, 
                    desc: this.descy,
                    seller: this.nameOfS,
                    sellerPhoto: this.photo,
                    details: this.toDet,
                    kategoria: kat,
                    kategorita: this.kategoritaPrefix + this.kategorita,
                    photos: this.postings,
                    pesha: this.pesha != null ? this.pesha : null,
                    sizey: this.sizey != "" ? this.sizey : null,
                    masa: this.masa != "" ? this.masa : null,
                    ngjyra: this.ngjyra != "" ? this.ngjyra : null
                },
                owner: this.eternalName,
                spot: this.namey
            });

            console.log("2nd")
            await firebase.firestore().collection('search').doc(this.eternalName).set({
                cilesia: "/kategorite" + this.kategoritaPrefix + this.kategorita,
                emri: this.namey,
                kat: this.kategorita
            });
            
            
            this.postings = [];
            this.toShow = [];
            this.toDet = [];
            this.namey = "";
            this.pricey = "";
            this.detailsy = "";
            this.kategorita = "";
            this.postings = [];
            this.toShow = [];
            this.descy = "";
            this.spot = null;

            this.dialog = false;
            this.dialog2 = true;

            this.prodPhoto = null;
        }
    }
}
</script>

<style>
.r{
    z-index: 999999998989898787979867987;
}
.border-chip{
    border: 1px solid black;
}
.visibleshit{
    z-index: 9999999989898987879798679873423242;
}
.inputFileR::-webkit-file-upload-button {
    visibility: hidden;
}
.inputFileR::before {
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
.edit{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    min-height: 81vh;
    padding: 15px 0 25px 0;
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
    height: 290px;
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
@media only screen and (min-width: 1000px){
    .pc-small{
        width: 400px;
    }
    .sets{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 950px;
        padding: 15px 0 8px 0;
    }
    .inputFileR::-webkit-file-upload-button {
        visibility: hidden;
    }
    .inputFileR{
        background-color: gray;
        border-radius: 5px;
    }
    .inputFileR::before {
        content: "Zgjidh foto";
        display: inline-block;
        border-radius: 3px;
        padding: 5px 8px;
        outline: none;
        white-space: nowrap;
        -webkit-user-select: none;
        cursor: pointer;
        font-weight: 700;
        font-size: 15px;
        color: white;
        border: 1px solid gray;
    }
    .lineM{
        height: 1px;
        width: 950px;
        background-color: #a10517;
        margin-bottom: 15px;
    }
    .market{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 950px;
    }
    .market-inner{
        width: 100%;
        padding: 0;
        display: grid;
        grid-template-columns: 33% 33% 33%;
        grid-row-gap: 25px;
        justify-content: center;
    }
    .sell-container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 360px;
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
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .custom-right{
        margin-left: 15px;
    }
}    
</style>