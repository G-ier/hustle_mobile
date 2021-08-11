<template>
  <div class="edit">
        <div class="sets">
            
            <h2 class="classy secondary--text">Krijo produkte te reja</h2>
            
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
            style="z-index: 34235456;"
            transition="dialog-bottom-transition"
            hide-overlay
            >
            
            <v-card color="white">
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
                    @click="uploadV2"
                    >
                    Ruaj
                    </v-btn>
                </v-toolbar-items>
                </v-toolbar>
                <div class="hiddeneye1">
                    <b-steps class="hiddeneye2">
                        <b-step-item label="Details" class="hiddeneye3" step="1" >
                            <v-text-field
                                    v-model="namey"
                                    style="grid-area: a;"
                                    label="Emri"
                                    outlined
                                    clearable
                                    dense
                                    light
                                    color="secondary"
                                    :error-messages="nameyyErrors" 
                                    required 
                                    @input="$v.namey.$touch()"
                            ></v-text-field>
                            <v-text-field
                                v-model="pricey"
                                label="Cmimi"
                                style="grid-area: b;"
                                outlined
                                clearable
                                dense
                                light
                                color="secondary"
                                :error-messages="priceyErrors" 
                                required 
                                @input="$v.pricey.$touch()"
                            ></v-text-field>
                            <v-text-field
                                v-model="priceyLow"
                                label="Cmimi me ulje"
                                outlined
                                clearable
                                style="grid-area: c;"
                                dense
                                light
                                color="secondary"
                                :error-messages="priceyLowErrors" 
                                required 
                                @input="$v.priceyLow.$touch()"
                            ></v-text-field>
                            <v-textarea
                                clearable
                                clear-icon="mdi-close-circle"
                                style="grid-area: d;"
                                label="Pershkrimi"
                                v-model="descy"
                                color="secondary"
                                outlined
                                light
                            ></v-textarea>
                        </b-step-item>
                        <b-step-item label="Fotot" class="openup" step="2">
                            <v-col class="display-column my-4" style="grid-area: e;">
                                <p class="qs secondary--text">Fotot - e para e detyrueshme</p>
                                <p class="qs secondary--text" v-if="postings.length == 0">Kliko tek plusi per te shtuar</p>
                                <div class="vert" v-for="post in postings" :key="post.id">
                                    <p class="qs secondary--text">Fotoja {{postings.indexOf(post)+1}}</p>
                                    <p class="qs secondary--text pa-0 ma-0">Momentalisht: {{post.emri}}</p>
                                    <v-btn x-small color="white" class="secondary--text mb-5 mt-2" @click="postings.splice(postings.indexOf(post), 1)">Remove</v-btn>
                                </div>
                                <v-row justify="center full-width mt-6 ml-3 custom-right">
                                <v-fab-transition>
                                    <v-btn
                                        fab
                                        small
                                        dark
                                        bottom
                                        left
                                        class="v-btn--example"
                                        color="secondary"
                                        @click="newphoto"
                                    >
                                        <v-icon>mdi-plus</v-icon>
                                    </v-btn>
                                </v-fab-transition>
                                <v-fab-transition>
                                    <v-btn
                                        fab
                                        small
                                        dark
                                        bottom
                                        left
                                        class="v-btn--example ml-4"
                                        color="secondary"
                                        @click="remphoto"
                                    >
                                        <v-icon>mdi-minus</v-icon>
                                    </v-btn>
                                </v-fab-transition>
                                </v-row>
                            </v-col>
                        </b-step-item>
                        <b-step-item label="Kategoria" class="openup" step="3">
                            <v-select
                                v-model="kategorita"
                                :items="kateg"
                                label="Kategoria"
                                class="mt-5"
                                dense
                                outlined
                                light
                                color="whisecondaryte"
                                :error-messages="katErrors" 
                                required 
                                @input="$v.kategorita.$touch(); overload()"
                            ></v-select>
                            <div class="fab-holder mb-5" v-if="responseData != null">
                                <v-select
                                    v-for="item in responseData.filtrat"
                                    :key="item.id"
                                    v-model="responseData.filtrat[responseData.filtrat.indexOf(item)].value"
                                    :items="item.values"
                                    :placeholder="responseData.filtrat[responseData.filtrat.indexOf(item)].emri"
                                    outlined
                                    clearable
                                    dense
                                    light
                                    color="secondary"
                                    class="pc-small"
                                    item-color="white"
                                ></v-select>
                            </div>
                        </b-step-item>
                    </b-steps>
                    
                </div>
                <v-divider></v-divider>
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
                        @input="uploadImageFile1($event.target.files)"
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
        <!-- Loading dialog -->
        <v-dialog
        v-model="loading"
        max-width="240"
        >
        <v-card color="secondary">
            <v-card-title class="headline qs">
            Ju lutem prisni...
            </v-card-title>

            <v-card-text class="qs">
            <v-row justify="center" class="mt-3 pb-5">
                <v-progress-circular
                indeterminate
                color="primary"
                ></v-progress-circular>
            </v-row>
            </v-card-text>
        </v-card>
        </v-dialog>
        <!-- Loading dialog ends-->
         <v-fab-transition>
            <v-btn
                fab
                large
                dark
                bottom
                left
                class="v-btn--example"
                color="primary"
                @click="edit"
                v-if="unpaid == false"
            >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-fab-transition>
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
import 'firebase/storage'
import {validationMixin} from 'vuelidate'
import {required, minLength, numeric} from 'vuelidate/lib/validators'
import Cookie from 'js-cookie';
export default {
    mixins: [validationMixin],
    async asyncData({route, store}){
        const data = await firebase.firestore().collection('users').where("email", "==", store.state.users.user.email).get();
        const dataF = data.docs.map(doc => doc.data());

        var fotoErsatz = dataF[0].photo ? dataF.photo : null;

        var unpaid = {
            value: false
        };
        const tod = new Date();

        if(dataF[0].paid == false || dataF[0].timestamp <= tod.getTime()){
            unpaid.value = true;
        }

        return{
            nameOfS: dataF[0].username,
            photo: fotoErsatz,
            unpaid: unpaid.value
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
                "Dekorime për Krishtlindje",
                "Artikuj Plazhi",
                "Embëlsira dhe biskota",
                "Pajisje Sanitare",
                "Aksesorë bashkues dhe kaseta",
                "Mobilje për banjo",
                "Aksesorë për banjo",
                "Produkte për Njerëz me Aftësi të Kufizuar",
                "Sauna",
                "Përkujdesje Personale",
                "Tapetë për tualet",
                "Higjenë",
                "Pastrim",
                "Pastrim Profesional",
                "Higjenë profesional",
                "Higjenë",
                "Tuba dhe rakorderi",
                "Aksesorë metali",
                "Vegla Ndërtimi",
                "Silikon",
                "Shkarkimi i ujrave të përdorura",
                "Sistemi  i thatë",
                "Izolimi termo-akustik",
                "Inerte dhe aditive",
                "Hidroizolim dhe mbrojtje",
                "Elemente ndërtimtarie bazë",
                "Druri",
                "Streha dhe mbulesa",
                "Shkarkime të përgjithshme",
                "Sisteme ajrimi dhe oxhaqesh",
                "Dyshemetë e jashtme",
                "Hekur dhe profile",
                "Depozita",
                "Sinjalistika",
                "Skela",
                "Makineri ndërtimi",
                "Elektrike",
                "Karburant",
                "Dru dhe Pelet",
                "Alternative",
                "Ambjent Dite",
                "Ambjent Nate",
                "Ambient studimi dhe zyrë",
                "Dekorime",
                "Magazinim dhe organizim",
                "Produkte për bebe",
                "Ambjent i jashtëm",
                "Ambient Kuzhine",
                "Parket",
                "Pllaka",
                "Mokete dhe linoleume",
                "Pajisje për Instalime Elektrike",
                "Sisteme Sigurie",
                "Kabëll dhe Aksesorë",
                "Pajisje Elektrike",
                "Elektrike të Tjera",
                "Pajisje Industriale dhe Profesionale",
                "Ndriçues të brendshem",
                "Ndricues Kopshti",
                "Llamba",
                "Lavapjata",
                "Enë kuzhine",
                "Aksesorë për kuzhina",
                "Pastrues",
                "Pastrim Profesional",
                "Uniforma Pune",
                "Higjenë",
                "Higjenë Profesional",
                "Bisktota -caj",
                "Binare dhe Ristela",
                "Lëndë Zdrukthtarie",
                "Shkallë",
                "Brava/Doreza dhe aksesorë",
                "Dritare",
                "Dyer të brendshme",
                "Dyer të jashtme",
                "Dekorime",
                "Arredim i jashtëm",
                "Lule dhe bimë",
                "Vegla kopshti elektrike",
                "Vegla kopshti me bateri",
                "Vegla kopshti me karburant",
                "Vegla kopshti manuale",
                "Sisteme dhe pajisje për vaditje",
                "Barbekju",
                "Pajisje kantine",
                "Aksesorë",
                "Insekticide",
                "Tuba & Rakorderi",
                "Aksesorë për vegla kopshti",
                "Artikuj Plazhi",
                "Pllaka",
                "Artikuj Plazhi",
                "Pastrim",
                "Bojra per Jashte",
                "Bojra per Brenda",
                "Bojra Dekorative",
                "Bojra Druri",
                "Bojra Metali",
                "Letra Muri",
                "Tretes",
                "Sprai",
                "Ngjites",
                "Vegla Lyerje",
                "Silikon",
                "Vegla ndërtimi",
                "Bojera per Piktor",
                "Penela",
                "Korniza Fotosh dhe  Pikturash",
                "Piktura",
                "Të Tjera",
                "Sisteme Zjarrfikse",
                "Profesionale/Industriale",
                "Tuba dhe Rakorderi",
                "Hardware",
                "Vegla Ndërtimi",
                "Veshje Pune Sigurie",
                "Vegla Elektrike",
                "Vegla Elektrike me Bateri",
                "Aksesorë për Vegla Elektrike",
                "Vegla Mekanike",
                "Vegla Matëse",
                "Vegla makine dhe Aksesore",
                "Produkte sigurie",
                "Materiale Arkivimi",
                "Instrumenta shkrimi",
                "Organizues tavoline",
                "Pajisje lidhëse",
                "Kartoleri dhe Letër",
                "Krijimtari për fëmijë",
                "Tempera, bojëra dhe lapostila",
                "Memorje e jashtme",
                "Të Tjera",
                "Aksesorë zyre",
                "Tabela",
                "Makina llogaritëse",
                "Audio dhe Video",
                "IT",
                "Kabëll",
                "Çanta",
                "Pastrues",
                "Mirëmbajtja",
                "Solucione dhe aditivë",
                "Trajtues sipërfaqesh dhe lustrues",
                "Aksesorë",
                "Llamba Makine",
                "Aksesore udhetimi te montueshem",
                "Mjete peshkimi",
                "Kamping",
                "Biçikleta",
                "Palestra",
                "Artikuj Sportiv",
                "Valixhe dhe çanta udhëtimi",
                "Kamping",
                "Frigoriferë",
                "Lavatriçe & Tharëse",
                "Pajisje Gatimi",
                "Lavastovilie",
                "Elektroshtëpiake të vogla",
                "Fshesa me vakum",
                "TV dhe Audio",
                "Ushqimi",
                "Higjena dhe kozmetika",
                "Shëtitje dhe argëtim",
                "Shtëpia",
                "Të Tjera",
                "Magazinim dhe organizim",
                "Lavanderi",
                "Pastrues",
                "Mësim & Lojëra",
                "Higjenë & Përkujdesje",
                "Mobilje",
                "Tekstile Fjetje",
                "Karrige Makine & Karroca",
                "Ngrënie & Aksesorë",
                "Siguri për bebe",
                "Fjongo",
                "Dekorime muri",
                "Perde dhe metrazhe",
                "Korniza dhe shufra për perde",
                "Grila për dritare",
                "Aksesorë për perde",
                "Qirinj",
                "Tapetë",
                "Mbulesa tavoline",
                "Vazo & Mbajtëse Qiri",
                "Lule & Aromatikë",
                "Kosha & Magazinim",
                "Dhurata & Paketime",
                "Jastekë",
                "Qepje",
                "Ditelindje",
                "Festa",
                "Tekstile Fjetje",
                "Tekstile Banje",
                "Pajisje kantine",
                "Makineri blegtorale",
                "Makineri bujqësore",
                "Femra",
                "Meshkuj",
                "Uniseks",
                "Fëmijë",
                "Pije alkolike",
                "Pije jo-alkolike",
                "Ushqime",
                "Kompjuter",
                "Laptop",
                "Komponente",
                "Printer & Scaner",
                "Adaptor & Kabuj",
                "Pajisje Rrjeti",
                "Software",
                "Periferike",
                "Aksesore",
                "Kancelari",
                "Telefon",
                "Tablet",
                "Aksesore",
                "Smart Watches",
                "Kufje",
                "Pjese per servis",
                "Televizor",
                "Video Projektor",
                "Audio",
                "DEKODER & TV BOX",
                "Aksesore per TV",
                "Produkte DJI",
                "Produkte Feiytech",
                "Produkte Zhiyun",
                "Produkte Xiaomi",
                "Camera",
                "Aksesore te ndryshem",
                "Konsola",
                "Lojera",
                "Controllers",
                "Smart Balance",
                "Scooters",
                "Kondicioner",
                "Produkte Smart"
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
            priceyLow: null,
            loading: false,
            newP: false,
            lengy: null,
            responseData: null
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
        async overload(){
            var bodyFormData = new FormData();

            bodyFormData.append('category', this.kategorita);


            var obj = await this.$axios({
                method: "post",
                url: "http://34.65.32.131/categories",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" },
            })
            

            this.responseData = obj.data;
            console.log(JSON.stringify(obj.data));
            

            console.log(this.responseData);
        },
        edit: function (){

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
        newphoto: function(){
            
            this.newP = true;
        },
        remphoto: function(){

            this.postings.pop();
        },
        addNew: function (){
            this.loading = true;
            this.newP = false;
            console.log(this.lengy);
            setTimeout(()=>{this.loading = false}, 30000);
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
            
            

            const file = filey;
            const metadata1 = metadata;
            const storage = firebase.storage()
            const imageRef = storage.ref(`images/${file.name}`)

            imageRef.put(file, metadata1).then((snapshot) => {
                // Once the image is uploaded, obtain the download URL, which
                // is the publicly accessible URL of the image.
                return snapshot.ref.getDownloadURL().then((url) => {
                return url
                })
            }).then( (url) => {
                var postings = this.postings.filter((doc)=>{
                    return doc.index != 1;
                });
                postings.push({
                    src: url,
                    emri: file.name,
                    index: 1
                });
                this.postings = postings;
                console.log(JSON.parse(this.postings));
            })

            // When the upload ends, set the value of the blog image URL
            // and signal that uploading is done.
            
            
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

            if(filey.size >= 3072000){
                alert("Fotoja shume madhe.");
                return;
            }

            const metadata = {
                contentType: filey.type
            }

            const file = filey;
            const metadata1 = metadata;
            const storage = firebase.storage()
            const imageRef = storage.ref(`images/${file.name}`)

            this.loading = true;

            imageRef.put(file, metadata1).then((snapshot) => {
                // Once the image is uploaded, obtain the download URL, which
                // is the publicly accessible URL of the image.
                return snapshot.ref.getDownloadURL().then((url) => {
                return url
                })
            }).then( (url) => {
                var ting = [];
                ting.push({
                    src: url,
                    emri: file.name,
                    photo_index: this.postings.length
                });
                this.postings = this.postings.concat(ting);
                this.loading = false;
                this.newP = false;
                console.log(this.postings);
            })

            // When the upload ends, set the value of the blog image URL
            // and signal that uploading is done.
            
            
        },
        upload: async function(){
            
            this.$v.namey.$touch();
            this.$v.pricey.$touch();
            this.$v.kategorita.$touch();


            if(this.$v.namey.$invalid || this.$v.pricey.$invalid || this.$v.kategorita.$invalid){
                return;
            } else {
                console.log("hack me fam");
            }
            
            if(this.postings.length <= 0){
                this.photoProb = true;
                
                return;
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

            const currentDate = new Date();
            const timestamp = currentDate.getTime();

            const cookie = Cookie.get("user");
            const cook = JSON.parse(cookie);

            if(this.kategorita == "aksesore"){
                await firebase.firestore().collection('elektronike').doc(this.namey).set({
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
                        ngjyra: this.ngjyra != "" ? this.ngjyra : null,
                        likes: 0,
                        likers: 0
                    },
                    owner: cook.username.toLowerCase(),
                    spot: this.namey,
                    creationTime: timestamp
                });
            } else if(this.kategorita != "aksesore"){
                await firebase.firestore().collection('elektronike').doc(this.namey).set({
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
                        ngjyra: this.ngjyra != "" ? this.ngjyra : null,
                        likes: 0,
                        likers: 0
                    },
                    owner: cook.username.toLowerCase(),
                    spot: this.namey,
                    creationTime: timestamp
                });
            }

            await firebase.firestore().collection('search').doc(this.namey).set({
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
        },
        uploadV2: async function(){
            
            this.$v.namey.$touch();
            this.$v.pricey.$touch();
            this.$v.kategorita.$touch();


            if(this.$v.namey.$invalid || this.$v.pricey.$invalid || this.$v.kategorita.$invalid){
                return;
            } else {
                console.log("hack me fam");
            }
            
            if(this.postings.length < 1){
                this.photoProb = true;
                console.log("hack me error");
                return;
            }
            console.log("hack me fam2");
            // When the upload ends, set the value of the blog image URL
            // and signal that uploading is done.

            const currentDate = new Date();
            const timestamp = currentDate.getTime();

            const cookie = Cookie.get("user");
            const cook = JSON.parse(cookie);

            var toReturn = this.responseData.filtrat.map((doc) => {
                return {
                    emri: doc.emri,
                    value: doc.value
                }
            });

            var bodyFormData = new FormData();

            bodyFormData.append('product_data', JSON.stringify({
                
                    details: {
                        name: this.namey,
                        price: parseInt(this.pricey),
                        priceLow: this.priceyLow ? parseInt(this.priceyLow) : null,
                        desc: this.descy,
                        seller: this.nameOfS,
                        sellerPhoto: this.photo,
                        kategoria: this.kategorita,
                        photos: this.postings,
                        likes: 0,
                        likers: 0
                    },
                    responseData: toReturn,
                    owner: cook.username.toLowerCase(),
                    spot: this.namey,
                    creationTime: timestamp
                
                }));

            await this.$axios({
                method: "post",
                url: "http://34.65.32.131/create_products",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" },
            })
            console.log("hack me fam3");
            await firebase.firestore().collection('search').doc(this.namey).set({
                cilesia: "/kategorite/" + this.kategorita,
                emri: this.namey,
                kat: "/kategorite/" + this.kategorita
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

<style scoped>
.r{
    z-index: 999999998989898787979867987;
}
.openup{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.display-column{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.hiddeneye1{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0 0 0;
    width: 100%;
    height: 90%;
}
.hiddeneye2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 0 0 0;
    width: 100%;
    height: 90%;
}
.hiddeneye3{
    display: grid;
    grid-template-areas: 
    'a b c'
    'd d d'
    ;
    grid-column-gap: 10px;
    padding: 15px 0 0 0;
    width: 100%;
    height: 90%;
}
.classy{
    font-family: 'qs';
    font-size: 20px;
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
    .openup{
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.display-column{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.hiddeneye1{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0 0 0;
    width: 100%;
    height: 90%;
}
.hiddeneye2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 0 0 0;
    width: 100%;
    height: 90%;
}
.hiddeneye3{
    display: grid;
    grid-template-areas: 
    'a b c'
    'd d d'
    ;
    grid-column-gap: 10px;
    padding: 15px 0 0 0;
    width: 100%;
    height: 90%;
}
.miniature{
        font-size: 13px;
        color: darkgray;
    }
    .full-width{
        width: 100%;
    }
    .pc-small{
        width: 400px;
    }
    .classy{
        font-size: 23px;
        font-family: 'qs';
    }
    .sets{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
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
        align-items: flex-start;
        padding: 25px;
    }
    .custom-right{
        margin-left: 15px;
    }
}    
</style>