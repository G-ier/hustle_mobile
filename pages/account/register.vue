<template>
  <div class="aplikimi-container-cu-2">
      <div class="site-register">
          <v-sheet elevation="12" class=" py-4 custom-stepper rounded-lg" color="secondary">
            <h1 class="classy text-center qs v-fsm mb-7">Register Now</h1>
            <v-tabs
                v-model="tab"
                background-color="secondary"
                centered
                dark
                
                >
                <v-tabs-slider></v-tabs-slider>

                <v-tab href="#tab-1" @click="setRoleToSeller">
                    Behu shites
                </v-tab>

                <v-tab href="#tab-2" @click="setRoleToBuyer">
                    Behu bleres
                </v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                    <v-tab-item value="tab-1" class="secondary">
                        <div class="form-body pb-2">
                            <v-form class="pb-7 width-full" >  
                                <div class="form-holder-1 pb-1">
                                    <v-text-field label="Emri" outlined class="white--text fully ungrouped-shit" color="white" v-model="account.emri" :error-messages="emriErrors" required @input="$v.account.emri.$touch()"></v-text-field>
                                    <v-text-field label="Email" outlined class="white--text fully ungrouped-shit" color="white" v-model="account.email" :error-messages="emailErrors" required @input="$v.account.email.$touch()"></v-text-field>
                                    <b-field grouped class="grouped-shit">
                                        <v-text-field label="Emri" outlined class="white--text fully mr-1" color="white" v-model="account.emri" :error-messages="emriErrors" required @input="$v.account.emri.$touch()"></v-text-field>
                                        <v-text-field label="Email" outlined class="white--text fully ml-1" color="white" v-model="account.email" :error-messages="emailErrors" required @input="$v.account.email.$touch()"></v-text-field>
                                    </b-field>
                                    <v-select :items="items" label="Qyteti" class="fully white--text width-440" color="white" dark outlined v-model="account.qyteti" :error-messages="adresaErrors" required @input="$v.account.adresa.$touch()"></v-select>
                                    <v-text-field label="Rruga" outlined  class="white--text fully ungrouped-shit" color="white" v-model="account.adresa" :error-messages="adresaErrors" required @input="$v.account.adresa.$touch()"></v-text-field>
                                    <v-text-field label="Numri" outlined class="white--text fully ungrouped-shit" color="white" v-model="account.numri" :error-messages="numErrors" required @input="$v.account.numri.$touch()"></v-text-field>
                                    <b-field grouped class="grouped-shit">
                                        <v-text-field label="Rruga" outlined  class="white--text fully mr-1" color="white" v-model="account.adresa" :error-messages="adresaErrors" required @input="$v.account.adresa.$touch()"></v-text-field>
                                        <v-text-field label="Numri" outlined class="white--text fully ml-1" color="white" v-model="account.numri" :error-messages="numErrors" required @input="$v.account.numri.$touch()"></v-text-field>
                                    </b-field>
                                    <v-text-field label="Vendos Password" type="password" color="white" outlined class="white--text fully ungrouped-shit" v-model="account.password" :error-messages="passErrors" required @input="$v.account.password.$touch()"></v-text-field>
                                    <v-text-field label="Perserit Password" type="password" color="white" outlined class="white--text fully ungrouped-shit" v-model="account.passwordR" :error-messages="passErrors" required @input="$v.account.password.$touch()" ></v-text-field>
                                    <b-field grouped class="grouped-shit">
                                        <v-text-field label="Vendos Password" type="password" color="white" outlined class="white--text fully mr-1" v-model="account.password" :error-messages="passErrors" required @input="$v.account.password.$touch()"></v-text-field>
                                        <v-text-field label="Perserit Password" type="password" color="white" outlined class="white--text fully ml-1" v-model="account.passwordR" :error-messages="passErrors" required @input="$v.account.password.$touch()" ></v-text-field>
                                    </b-field>
                                </div>
                            </v-form>
                            <div class="button-side">
                                <v-btn rounded color="white" class="secondary--text qs btn-c v-fsm" to="/account/me">Login</v-btn>
                                <v-btn rounded color="white" class="secondary--text btn-c v-fsm" @click="register"><span class="qs secondary--text" v-if = "loading == false">Register</span><v-progress-circular indeterminate :size="19" color="amber" v-else></v-progress-circular></v-btn>
                            </div>
                        </div>
                    </v-tab-item>
                    <v-tab-item value="tab-2" class="secondary">
                        <div class="form-body pb-2">
                            <v-form class="pb-7">  
                                <div class="form-holder-1 pb-1">
                                    <v-text-field label="Emri" outlined class="white--text fully ungrouped-shit" color="white" v-model="account.emri" :error-messages="emriErrors" required @input="$v.account.emri.$touch()"></v-text-field>
                                    <v-text-field label="Email" outlined class="white--text fully ungrouped-shit" color="white" v-model="account.email" :error-messages="emailErrors" required @input="$v.account.email.$touch()"></v-text-field>
                                    <b-field grouped class="grouped-shit">
                                        <v-text-field label="Emri" outlined class="white--text fully mr-1" color="white" v-model="account.emri" :error-messages="emriErrors" required @input="$v.account.emri.$touch()"></v-text-field>
                                        <v-text-field label="Email" outlined class="white--text fully ml-1" color="white" v-model="account.email" :error-messages="emailErrors" required @input="$v.account.email.$touch()"></v-text-field>
                                    </b-field>
                                    <v-select :items="items" label="Qyteti" class="fully white--text width-440" color="white" dark outlined v-model="account.qyteti" :error-messages="adresaErrors" required @input="$v.account.adresa.$touch()"></v-select>
                                    <v-text-field label="Rruga" outlined  class="white--text fully ungrouped-shit" color="white" v-model="account.adresa" :error-messages="adresaErrors" required @input="$v.account.adresa.$touch()"></v-text-field>
                                    <v-text-field label="Numri" outlined class="white--text fully ungrouped-shit" color="white" v-model="account.numri" :error-messages="numErrors" required @input="$v.account.numri.$touch()"></v-text-field>
                                    <b-field grouped class="grouped-shit">
                                        <v-text-field label="Rruga" outlined  class="white--text fully mr-1" color="white" v-model="account.adresa" :error-messages="adresaErrors" required @input="$v.account.adresa.$touch()"></v-text-field>
                                        <v-text-field label="Numri" outlined class="white--text fully ml-1" color="white" v-model="account.numri" :error-messages="numErrors" required @input="$v.account.numri.$touch()"></v-text-field>
                                    </b-field>
                                    <v-text-field label="Vendos Password" type="password" color="white" outlined class="white--text fully ungrouped-shit" v-model="account.password" :error-messages="passErrors" required @input="$v.account.password.$touch()"></v-text-field>
                                    <v-text-field label="Perserit Password" type="password" color="white" outlined class="white--text fully ungrouped-shit" v-model="account.passwordR" :error-messages="passErrors" required @input="$v.account.password.$touch()" ></v-text-field>
                                    <b-field grouped class="grouped-shit">
                                        <v-text-field label="Vendos Password" type="password" color="white" outlined class="white--text fully mr-1" v-model="account.password" :error-messages="passErrors" required @input="$v.account.password.$touch()"></v-text-field>
                                        <v-text-field label="Perserit Password" type="password" color="white" outlined class="white--text fully ml-1" v-model="account.passwordR" :error-messages="passErrors" required @input="$v.account.password.$touch()" ></v-text-field>
                                    </b-field>
                                </div>
                            </v-form>
                            <div class="button-side">
                                <v-btn rounded color="white" class="secondary--text qs btn-c v-fsm" to="/account/me">Login</v-btn>
                                <v-btn rounded color="white" class="secondary--text btn-c v-fsm" @click="register"><span class="qs secondary--text" v-if = "loading == false">Register</span><v-progress-circular indeterminate :size="19" color="amber" v-else></v-progress-circular></v-btn>
                            </div>
                        </div>
                    </v-tab-item>
                </v-tabs-items>
        </v-sheet> 
      </div>
      <v-dialog v-model="dialog" max-width="240">
            <v-card color="secondary">
                <v-card-title class="qs headline">Disa hapa me shume!</v-card-title>
                <v-card-text class="qs">Hapja e llogarise perfundoi me sukses. Ju lutem konfirmojeni llogarine tuaj duke klikuar ne linkun e nisur ne email-in tuaj.</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="qs" @click="redir" text >To Login</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="uncorrect" max-width="240">
            <v-card color="primary">
                <v-card-title class="qs headline">Rishikoni passwordin!</v-card-title>
                <v-card-text class="qs">Password i vendosur nuk perputhet me passwordin e perseritur.</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="qs" @click="uncorrect = false" text >Mbyll</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
  </div>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required, numeric, email, minLength} from 'vuelidate/lib/validators'
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
    mixins: [validationMixin],
    data(){
        return{
            items: [
                "Bajram Curri",
                "Bajzë",
                "Ballsh",
                "Berat",
                "Bilisht",
                "Bulqizë",
                "Burrel",
                "Cërrik",
                "Çorovodë",
                "Delvinë",
                "Divjakë",
                "Durrës",
                "Elbasan",
                "Ersekë",
                "Fier",
                "Fierzë",
                "Finiq",
                "Fushë-Arrëz",
                "Fushë-Krujë",
                "Gjirokastër",
                "Gramsh",
                "Himarë",
                "Kamëz",
                "Kavajë",
                "Këlcyrë",
                "Klos",
                "Konispol",
                "Koplik",
                "Korçë",
                "Krastë",
                "Krrabë",
                "Krujë",
                "Krumë",
                "Kuçovë",
                "Kukës",
                "Kurbnesh",
                "Laç",
                "Leskovik",
                "Lezhë",
                "Libohovë",
                "Librazhd",
                "Lushnjë",
                "Maliq",
                "Mamurras",
                "Manëz",
                "Memaliaj",
                "Milot",
                "Orikum",
                "Patos",
                "Peqin",
                "Përmet",
                "Peshkopi",
                "Pogradec",
                "Poliçan",
                "Prrenjas",
                "Pukë",
                "Reps",
                "Roskovec",
                "Rrëshen",
                "Rrogozhinë",
                "Rubik",
                "Sarandë",
                "Selenicë",
                "Shëngjin",
                "Shijak",
                "Shkodër",
                "Sukth",
                "Tepelenë",
                "Tirana",
                "Ulëz",
                "Ura Vajgurore",
                "Vau i Dejës",
                "Vlorë",
                "Vorë"
            ],
            account: {
                email: '',
                password: '',
                passwordR: '',
                role: 'seller',
                adresa: "",
                qyteti: "",
                numri: null,
            },
            error: 'None',
            loading: false,
            dialog: false,
            tab: null,
            uncorrect: false
        }
    },
    validations: {
        account: {
            emri: {
                required,
            },
            password: {
                required,
                minLength: minLength(6)
            },
            email: {
                required,
                email
            },
            adresa: {
                required,
            },
            qyteti: {
                required,
            },
            numri: {
                required,
                numeric
            },
            role: {
                required,
            }
        }
    },
    computed: {
        emailErrors () {
            const errors = []
            if (!this.$v.account.email.$dirty) return errors
            !this.$v.account.email.email && errors.push('Must be valid e-mail')
            !this.$v.account.email.required && errors.push('E-mail eshte i detyrueshem')
            return errors
        },
        passErrors () {
            const errors = []
            if (!this.$v.account.password.$dirty) return errors
            !this.$v.account.password.required && errors.push('Passwordi eshte i detyrueshem')
            !this.$v.account.password.minLength && errors.push('Passwordi duhet te kete minimalisht 6 karaktera')
            return errors
        },
        emriErrors () {
            const errors = []
            if (!this.$v.account.emri.$dirty) return errors
            !this.$v.account.emri.required && errors.push('Emri eshte i detyrueshem')
            return errors
        },
        adresaErrors () {
            const errors = []
            if (!this.$v.account.adresa.$dirty) return errors
            !this.$v.account.adresa.required && errors.push('Adresa eshte i detyrueshem')
            return errors
        },
        qytetiErrors () {
            const errors = []
            if (!this.$v.account.qyteti.$dirty) return errors
            !this.$v.account.qyteti.required && errors.push('Qyteti eshte i detyrueshem')
            return errors
        },
        numErrors () {
            const errors = []
            if (!this.$v.account.numri.$dirty) return errors
            !this.$v.account.numri.required && errors.push('Numri eshte i detyrueshem')
            !this.$v.account.numri.numeric && errors.push('Vetem numra pranohen')
            return errors
        },
        roleErrors () {
            const errors = []
            if (!this.$v.account.adresa.$dirty) return errors
            !this.$v.account.adresa.required && errors.push('Field is required')
            return errors
        },
    },
    methods: {
        register: async function(){
            console.log(JSON.stringify(this.account));
            this.loading = true;
            this.$v.account.email.$touch();
            this.$v.account.adresa.$touch();
            this.$v.account.emri.$touch();
            this.$v.account.qyteti.$touch();
            this.$v.account.numri.$touch();
            this.$v.account.password.$touch();
            if (this.$v.account.email.$invalid || this.$v.account.adresa.$invalid || this.$v.account.emri.$invalid || this.$v.account.qyteti.$invalid || this.$v.account.numri.$invalid || this.$v.account.password.$invalid) {
                this.loading = false;
                return;
            }
            if(this.account.password != this.account.passwordR){
                this.loading = false;
                this.uncorrect = true;
                return;
            }
            await this.$store.dispatch("users/register", this.account);
            this.dialog = true;
            this.loading = false;
        },
        redir: function (){
            location.href="/account";
        },
        setRoleToSeller: function (){
            this.account.role = "seller";
            console.log(this.account.role);
        },
        setRoleToBuyer: function (){
            this.account.role = "buyer";
            console.log(this.account.role);
        }
    },
    head(){
        return{
            title: "Register",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Hyrja per ne platformen e-learning"
                },
                {
                    name: "keywords",
                    content: "shkolla e drejtoreve, aplikim, CSL, AMU, AML"
                }
            ]
        }
    }
}
</script>

<style>
.site-register{
    width: 90%;
    min-height: 90%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end; 
    background-image: url('../../assets/img/login.png');
    background-size: cover;
    background-position-y: center;
    background-position-x: center;  
}
.v-text-field input{
    color:  white;
}
.fully{
    width: 220px;
}
.classy{
    font-size: 22px;
}
.aplikimi-container-cu-2{
    width: 100vw;
    min-height: 81vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 0 15px 0;
    
}
.custom-stepper{
    background-color: white;
    width: 500px;
}
.stepper-header{
    width: 80%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
}
.form-body{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.form-holder-1{
    margin-top: 40px;
    width: 20vw;
    animation: changer 0.4s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.form-holder-2{
    display: none;
    width: 20vw;
    margin-top: 40px;
    animation: changer 0.4s;
}
.form-holder-3{
    display: none;
    width: 20vw;
    margin-top: 40px;
    animation: changer 0.4s;
}
.form-holder-4{
    display: none;
    width: 40vw;
    margin-top: 40px;
    animation: changer 0.4s;
}
.stepOn{
    display: block;
}
.stepOff{
    display: none;
}
.btn-c{
  outline: none;
}
.btn-c:focus{
    outline: none;
}
@media only screen and (max-width: 650px){
    .ungrouped-shit{
        display: block;
    }
    .grouped-shit{
        display: none;
    }
    .classy{
        font-size: 22px;
    }
    .site-register{
        width: 90%;
        min-height: 71vh;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: none;
        
    }
    .aplikimi-container{
        height: 100vh;
    }
    .custom-stepper{
        width: 95vw;
    }
    .form-holder-1{
        width: 70vw;
    }
    .form-holder-2{
        width: 70vw;
    }
    .form-holder-3{
        width: 70vw;
    }
    .form-holder-4{
        width: 70vw;
    }
}
@media only screen and (min-width: 650px) and (max-width: 900px){
    .ungrouped-shit{
        display: none;
    }
    .grouped-shit{
        display: block;
    }
    .width-440{
        width: 448px;
    }
    .width-full{
        width: 100%;
    }
    .classy{
        font-size: 22px;
    }
    .site-register{
        width: 90%;
        min-height: 71vh;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: none;   
    }
    .aplikimi-container{
        height: 100vh;
    }
    .custom-stepper{
        width: 95vw;
    }
    .form-holder-1{
        width: 100%;
    }
    .form-holder-2{
        width: 70vw;
    }
    .form-holder-3{
        width: 70vw;
    }
    .form-holder-4{
        width: 70vw;
    }
    
}
@media screen and (min-width: 900px) and (max-width: 1100px){
    
    .classy{
        font-size: 22px;
    }
    .ungrouped-shit{
        display: none;
    }
    .grouped-shit{
        display: block;
    }
    .width-440{
        width: 448px;
    }
    .width-full{
        width: 448px;
    }
    .form-holder-1{
        margin-top: 40px;
        width: 100%;
        animation: changer 0.4s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .site-register{
        width: 90%;
        min-height: 90%;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end; 
        background-image: url('../../assets/img/login.png');
        background-size: cover;
        background-position-y: center;
        background-position-x: center;  
    }
    .v-text-field input{
        color:  white;
    }
    
    .classy{
        font-size: 22px;
    }
    .aplikimi-container-cu-2{
        width: 100vw;
        min-height: 81vh;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 15px 0 15px 0;
        
    }
}
@media screen and (min-width: 1100px) {
    
    .classy{
        font-size: 22px;
    }
    .ungrouped-shit{
        display: none;
    }
    .grouped-shit{
        display: block;
    }
    .width-440{
        width: 448px;
    }
    .width-full{
        width: 448px;
    }
    .form-holder-1{
        margin-top: 40px;
        width: 100%;
        animation: changer 0.4s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .site-register{
        width: 80%;
        min-height: 90%;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end; 
        background-image: url('../../assets/img/login.png');
        background-size: cover;
        background-position-y: center;
        background-position-x: center;  
    }
    .v-text-field input{
        color:  white;
    }
    
    .classy{
        font-size: 22px;
    }
    .aplikimi-container-cu-2{
        width: 100vw;
        min-height: 81vh;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 15px 0 15px 0;
        
    }
}
</style>