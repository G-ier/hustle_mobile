<template>
  <div class="edit">
      <div class="sets">
            
            <h2 class="classy secondary--text">Perpuno</h2>
            
        </div>
        <div class="lineM"></div>
        <div class="market" v-if="unpaid == false">
            <div class="market-inner">
                <div class="sell-container" v-for="prod in prods" :key="prod.name">
                    <div class="sellable">
                        <v-img :aspect-ratio="1/1" class="market-img secondary-bg" :src="prod.details.photos[0]" @click="sendToProduct(prod.spot)"></v-img>
                        <div class="safety">
                            <div class="sellable-desc">
                                <h4 class="sell-title">{{prod.details.name}}</h4>
                                <p class="qs sell-price">{{prod.details.price}} ALL</p>
                                <div class="func-row">
                                    <v-btn color="secondary" class="rounded-md" small @click="edit(prod, prod.spot)">Perpuno</v-btn>
                                    <v-btn color="primary" class="rounded-md" small @click="remove(prod.id)">Hiq</v-btn>
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
                    @click="upload"
                    >
                    Save
                    </v-btn>
                </v-toolbar-items>
                </v-toolbar>

                <div class="hiddeneye1">
                    <b-steps class="hiddeneye2">
                        <b-step-item label="Details" class="hiddeneye3" step="1" >
                            <v-text-field
                        v-model="namey"
                        label="Titulli"
                        outlined
                        clearable
                        dense
                        light
                        color="secondary"
                        style="grid-area: a;"
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
                        light
                        style="grid-area: b;"
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
                        light
                        style="grid-area: c;"
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
                        style="grid-area: d;"
                        outlined
                        light
                    ></v-textarea>
                        </b-step-item>
                        <b-step-item label="Fotot" class="openup" step="2">
                            <div class="vert" v-for="post in postings" :key="post.id">
                                <p class="qs secondary--text">Fotoja {{postings.indexOf(post)}}</p>
                                <p class="qs secondary--text pa-0 ma-0">Momentalisht: {{post.emri}}</p>
                                <v-row class="mx-auto">
                                    <v-btn x-small color="white" class="secondary--text mb-5 mt-4 mr-2" v-if="post.type != 'trash'" @click="removeImage(post.photo_uuid)">Remove</v-btn>
                                    <v-btn x-small color="white" class="secondary--text mb-5 mt-4 mr-2" v-if="post.type == 'trash'" @click="removeClass(post.photo_uuid)">Remove</v-btn>
                                    <v-btn x-small color="white" class="secondary--text mb-5 mt-4" @click="changePhoto(postings.indexOf(post), post.photo_uuid)">Change</v-btn>
                                </v-row>
                            </div>
                            <v-row justify="center full-width mt-6 custom-right">
                                <v-fab-transition>
                                    <v-btn
                                        fab
                                        small
                                        light
                                        bottom
                                        left
                                        class="v-btn--example ml-3"
                                        color="secondary"
                                        @click="newP = true"
                                    >
                                        <v-icon>mdi-plus</v-icon>
                                    </v-btn>
                                </v-fab-transition>
                            </v-row>
                        </b-step-item>
                        <b-step-item label="Kategoria" class="openup" step="3">
                            <v-select         v-model="kategorita"
                                :items="kateg"
                                label="Kategoria"
                                dense
                                outlined
                                light
                                color="white"
                                :error-messages="katErrors" 
                                required 
                                @input="$v.kategorita.$touch(); overload()"
                            ></v-select>

                            <div class="fab-holder" v-if="responseData != null">
                                <v-select
                                    v-for="item in responseData.filtrat"
                                    :key="item.id"
                                    v-model="responseData.filtrat[responseData.filtrat.indexOf(item)].value"
                                    :items="responseData.filtrat[responseData.filtrat.indexOf(item)].values"
                                    :placeholder="responseData.filtrat[responseData.filtrat.indexOf(item)].emri"
                                    outlined
                                    clearable
                                    dense
                                    light
                                    color="secondary"
                                    class="pc-small"
                                    item-color="white"
                                    @change="likkleting(responseData.filtrat[responseData.filtrat.indexOf(item)].emri, responseData.filtrat[responseData.filtrat.indexOf(item)].value)"
                                ></v-select>
                            </div>
                       
                        </b-step-item>
                    </b-steps>
                </div>
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
            </v-card-actions>
        </v-card>
        </v-dialog>
        <v-dialog
        v-model="changeP"
        max-width="240"
        >
        <v-card color="primary">
            <v-card-title class="headline qs">
            Ndrysho foto
            </v-card-title>

            <v-card-text class="qs">
                <input
                    ref="imageFile"
                    placeholder="Profile photo"
                    accept="image/png, image/jpeg"
                    class="inputFileR ml-1"
                    type="file"
                    name="file"
                    @input="uploadImageFile3($event.target.files)"
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
        <v-dialog
        v-model="dialog2"
        max-width="240"
        >
        <v-card color="secondary">
            <v-card-title class="headline qs">
            Sukses!
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
        <v-dialog
        v-model="loading2"
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
export default {
    mixins: [validationMixin],
    async asyncData({route, router, store, $axios}){
        const data = await firebase.firestore().collection('users').where("email", "==", store.state.users.user.email).get();
        const dataF = data.docs.map(doc => doc.data());

        var obj = await $axios({
                method: "post",
                url: "/api/to_edit_products",
                params: {
                    owner: route.query.name
                },
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            })

        var fotoErsatz = dataF.photo ? dataF.photo : null;

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
            prods: obj.data,
            unpaid: unpaid.value
        }
    },
    data(){
        return{
            loading2: false,
            shit: [],
            changeP: false,
            changeIndex: null,
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
            kategorita: null,
            sound: true,
            widgets: false,
            detailsToEdit: {
                details: {
                    name: null,
                    price: null,
                    photos: null,
                    desc: null,
                    priceLow: null,
                    kategoria: null
                },
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
            prodPhoto: null,
            namey: null,
            pricey: null,
            descy: null,
            detailsy: null,
            postings: [],
            toShow: [],
            kategoritaPrefix: "",
            toDet: [
                {
                    detail: ""
                }
            ],
            eternalName: "",
            pending: null,
            newP: false,
            priceyLow: null,
            likes: 0,
            likers: 0,
            creationTime: null,
            loading: false,
            id: null,
            instructions: null,
            responseData: null,
            operations: [],
            changeId: null
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
    methods: {
        async overload(){

            this.operations = this.operations.filter((fi)=>{
                return fi.identifier != "karllik";
            })

            var bodyFormData = new FormData();

            bodyFormData.append('category', this.kategorita);


            var obj = await this.$axios({
                method: "post",
                url: "/api/categories",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" },
            })
            

            this.responseData = obj.data;

            console.log(JSON.stringify(obj.data));
            
            this.detailsToEdit = {
                details: {
                    name: this.namey,
                    price: this.pricey,
                    photos: this.postings,
                    desc: this.descy,
                    priceLow: this.priceLow,
                    kategoria: this.kategorita
                }
            }

            console.log(this.responseData);
        },
        likkleting(emri, value){
            var key = emri;
            this.detailsToEdit.details[key] = value;
            this.operations.push({
                "fieldname" : key,
                "new_value" : value,
                identifier: "karllik"
            });
        },
        removeImage: function(id){
            this.operations.push({
                "fieldname" : "photos",
                "operation" : "delete",
                "photo_uuid" : id
            });
            this.postings = this.postings.filter((doc)=>{
                return doc.photo_uuid != id;
            });
        },
        removeClass: function(id){
            this.operations.filter((el)=>{
                return el.photo_uuid != id;
            });
            this.postings = this.postings.filter((doc)=>{
                return doc.photo_uuid != id;
            });
        },
        edit: function (prod, spot){



            this.postings = prod.details.photos;
            this.postings.forEach((doc) => {
                doc.index = this.postings.indexOf(doc);
                doc.changed = false;
                doc.type = "refurbished";
            });

            this.id = prod.id;

            this.dialog = true;
        },
        remove: async function (iden){
            
            var obj = await this.$axios({
                method: "post",
                url: "/api/delete_products",
                params: {
                    product_id: iden
                },
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            }).then(()=>{
               this.$buefy.notification.open({
                    message: 'Produkti u fshi!',
                    type: 'is-success'
                })
            })

            this.prods = this.prods.filter((el)=>{
                return el.id != iden;
            })
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
            this.operations = [];

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
            this.loading = true;
            this.newP = false;
            console.log(this.lengy);
            setTimeout(()=>{this.loading = false}, 30000);
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

            if(filey.size >= 33554432){
                alert("Fotoja shume madhe.");
                return;
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

            this.loading = true;

            const uploadTask = imageRef.put(file, metadata1).then((snapshot) => {
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
                    photo_uuid: this.uuidv4(),
                    type: "trash"
                });
                this.postings = this.postings.concat(ting);
                this.operations.push({
                    "fieldname" : "photos",
                    "operation" : "insert",
                    "photo_uuid" : this.uuidv4(),
                    "new_value": {
                        "src": url,
                        "emri": file.name,
                        "photo_uuid": this.uuidv4()
                    }
                });
                this.loading = false;
                this.newP = false;
                console.log(this.postings);
            })

            // When the upload ends, set the value of the blog image URL
            // and signal that uploading is done.
            
            
        },
        uploadImageFile3 (files) {
            if (!files.length) {
                return
            }
            const filey = files[0]

            if (!filey.type.match('image.*')) {
                alert('Please upload an image.')
                return
            }

            if(filey.size >= 33554432){
                alert("Fotoja shume madhe.");
                return;
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

            this.loading = true;

            const uploadTask = imageRef.put(file, metadata1).then((snapshot) => {
                // Once the image is uploaded, obtain the download URL, which
                // is the publicly accessible URL of the image.
                return snapshot.ref.getDownloadURL().then((url) => {
                return url
                })
            }).then( (url) => {
                
                this.postings[this.changeIndex].emri = file.name;
                    this.operations.push({
                        "fieldname" : "photos",
                        "operation" : "update",
                        "photo_uuid" : this.changeId,
                        "new_value": {
                            "src": url,
                            "emri": file.name,
                            "photo_uuid": this.changeId
                        }
                    });
                    this.loading = false;
                    this.newP = false;
                    this.changeP = false;
                    console.log(this.postings);
            })

            // When the upload ends, set the value of the blog image URL
            // and signal that uploading is done.
            
            
        },
        uuidv4() {
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        },
        changePhoto(index, id){
            this.changeIndex = index;
            this.changeId = id;
            this.changeP = true;
        },
        upload: async function(){
            

            
            // When the upload ends, set the value of the blog image URL
            // and signal that uploading is done.

            if(this.namey != null && this.namey != ""){
                this.detailsToEdit.details.name = this.namey;
                this.operations.push({
                    "fieldname": "name",
                    "new_value" : this.namey
                });
            } else {
                delete this.detailsToEdit.details.name;
            }

            if(this.pricey != null && this.pricey != ""){
                this.detailsToEdit.details.price = this.pricey;
                this.operations.push({
                    "fieldname": "price",
                    "new_value" : this.pricey
                });
            } else {
                delete this.detailsToEdit.details.price;
            }

            if(this.descy != null && this.descy != ""){
                this.detailsToEdit.details.desc = this.descy;
                this.operations.push({
                    "fieldname": "desc",
                    "new_value" : this.descy
                });
            } else {
                delete this.detailsToEdit.details.desc;
            }

            if(this.kategorita != null && this.kategorita != ""){
                this.detailsToEdit.details.kategoria = this.kategorita;
                this.operations.push({
                    "fieldname": "kategoria",
                    "new_value" : this.kategorita
                });
            } else {
                delete this.detailsToEdit.details.kategoria;
            }

            if(this.priceyLow != null && this.priceLow != ""){
                this.detailsToEdit.details.priceLow = this.priceyLow;
                this.operations.push({
                    "fieldname": "priceLow",
                    "new_value" : this.priceyLow
                });
            } else {
                delete this.detailsToEdit.details.priceLow;
            }
            
            //this.detailsToEdit.details.photos = this.postings;

            //this.detailsToEdit.details.photos = this.detailsToEdit.details.photos.filter((doc)=>{
            //    return doc.changed == true;
            //});

            //console.log(this.detailsToEdit.details.photos.length)

            //if(this.detailsToEdit.details.photos.length == 0){
            //    delete this.detailsToEdit.details.photos;
            //} 
            //console.log(JSON.stringify(this.detailsToEdit.details))
            

            //console.log(JSON.stringify(this.detailsToEdit.details))

            var bodyFormData = new FormData();

            bodyFormData.append('to_edit', JSON.stringify({
                product_id: this.id,
                operations: this.operations
            }));


            this.loading2 = true;

            var obj = await this.$axios({
                method: "post",
                url: "/api/edit",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" },
            })

            
            
            this.operations = [];
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
            this.loading2 = false;
        }
    }
}
</script>

<style>
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
.v-application ul{
    padding-left: 0;
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
@media screen and (min-width: 850px) {
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
        padding: 25px;
    }
    .classy{
        font-family: 'qs';
        font-size: 20px;
    }
    .custom-right{
        margin-left: 15px;
    }
}    
</style>