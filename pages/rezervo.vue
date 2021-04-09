<template>
  <div class="aplikimi-container">
      <v-sheet elevation="6" class="mx-auto my-2 py-4 custom-stepper rounded-xl" color="#1e65b8" rounded light>
          <h1 class="text-title v-fsm text-center white--text">Rezervo nje takim</h1>
          <div class="stepper-header">
              <v-btn icon class="btn-c" :class="{'white--text': currentStep == 1}" @click="goTo1"><v-icon>mdi-numeric-1-circle</v-icon></v-btn>
              <v-divider class="white--text"></v-divider>
              <v-btn icon class="btn-c" :class="{'white--text': currentStep == 2}" @click="goTo2"><v-icon>mdi-numeric-2-circle</v-icon></v-btn>
              <v-divider class="white--text"></v-divider>
              <v-btn icon class="btn-c" :class="{'white--text': currentStep == 3}" @click="goTo3"><v-icon>mdi-numeric-3-circle</v-icon></v-btn>
          </div>
          <div class="form-body pb-2">
            <div class="pb-1" ref="form">
                <div class="form-holder-1 pb-1" v-bind:class="{stepOn: currentStep == 1, stepOff:  currentStep != 1}">
                    <v-text-field label="Emri i plote" outlined  class="v-fsm" required :error-messages="nameErrors" @input="$v.emri.$touch()" v-model="emri" color="white"></v-text-field>
                    <v-select v-model="gjinia" :items="gjinit" class="v-fsm" :error-messages="genderErrors" label="Gjinia" outlined required @change="$v.gjinia.$touch()" light color="white"></v-select>
                    <v-text-field label="Nr i telefonit" outlined class="v-fsm" :error-messages="nrpErrors" required @input="$v.nrp.$touch()" v-model="nrp" color="white"></v-text-field>   
                </div>
                <div class="form-holder-5 pb-1" v-bind:class="{stepOn:  currentStep == 2, stepOff:  currentStep != 2}" >
                    <v-row justify="center" class="mb-2"><p class="qs white--text s17">Lini daten e preferuar takimit</p></v-row>
                    <v-row justify="center" class="mb-2"><v-date-picker v-model="picker" color="blue darken-1"></v-date-picker></v-row>
                </div>
                <div class="form-holder-5 pb-1" v-bind:class="{stepOn:  currentStep == 3, stepOff:  currentStep != 3}" >
                    <v-select v-model="checkup" :items="checkUp" class="v-fsm" :error-messages="chupErrors" label="Zgjidhni paketen e check-up" outlined required @change="$v.checkup.$touch()" light color="white"></v-select>
                    <v-textarea outlined label="Shpjegoni problemin qe keni pasur ju ose personi per te cilin po aplikoni" :error-messages="textErrors" required @input="$v.text.$touch()" v-model="text" color="white"></v-textarea>
                    <v-checkbox class="v-fsm" v-model="select1" :error-messages="select1Errors" required @change="$v.select1.$touch()" label="Pranoj kushtet." color="white"></v-checkbox>
                </div>
            </div>
            <div class="button-side">
                <v-btn color="third" text class="white--text btn-c-o v-fsm rounded-lg" @click="back">Kthehu</v-btn>
                <v-btn v-if="currentStep != steps" color="third" text class="btn-c-o white--text v-fsm rounded-lg" @click="next">Vazhdo</v-btn>
                <v-btn v-if="currentStep == steps" color="third" text class="btn-c-o white--text v-fsm rounded-lg" @click="finalizo">Finalizo</v-btn>
            </div>
          </div>
      </v-sheet> 
      <v-dialog v-model="dialog" max-width="290">
          <v-card color="#2cc8cb">
              <v-card-title class="headlline v-fsm">Sukses!</v-card-title>
              <v-card-text class="v-fsm">Aplikimi juaj eshte kryer. Ekipi yne do te ju telefonoj se shpejti per te konfirmuar rezervimin. Faleminderit!</v-card-text>
              <v-card-actions>
                  <v-btn class="ml-3 v-fsm btn-c" text @click="dialog = false">Mbyll</v-btn>
              </v-card-actions>
          </v-card>
      </v-dialog>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {required, minLength, helpers, numeric} from 'vuelidate/lib/validators'
import * as firebase from 'firebase/app'
import 'firebase/firestore'
const date = value => {
  if (typeof value === 'undefined' || value === null || value === '') {
    return true
  }
  return /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(value)
}

export default {
    mixins: [validationMixin],
    validations:{
        emri: {
            required,
            minLength: minLength(3),
        },
        gjinia: {
            required,
        },
        checkup: {
            required,
        },
        text: {
            required,
            minLength: minLength(10),
        },
        nrp: {
            required,
            numeric,
            minLength: minLength(9),
        },
        select1: {
            checked (val) {
                return val
            },
        }
    },
    data(){
        return{
            steps: 3,
            currentStep: 1,
            dialog: false,
            gjinit: [
            "Femer",
            "Mashkull"
            ],
            checkUp: [
            "Asnje",
            "Paketa 1",
            "Paketa 2",
            "Paketa 3",
            ],
            emri: '',
            gjinia: '',
            checkup: '',
            text: '',
            nrp: '',
            select1: false,
            picker: null,
        }
    },
    computed: {
        nameErrors () {
            const errors = []
            if (!this.$v.emri.$dirty) return errors
            !this.$v.emri.minLength && errors.push('Emri eshte normaisht me i gjate se kaq')
            !this.$v.emri.required && errors.push('Kjo pjese eshte e nevojshme.')
            return errors
        },
        genderErrors () {
            const errors = []   
            if (!this.$v.gjinia.$dirty) return errors
            !this.$v.gjinia.required && errors.push('Kjo pjese eshte e nevojshme.')
            return errors
        },
        chupErrors () {
            const errors = []
            if (!this.$v.checkup.$dirty) return errors
            !this.$v.checkup.required && errors.push('Kjo pjese eshte e nevojshme.')
            return errors
        },
        textErrors () {
            const errors = []
            if (!this.$v.text.$dirty) return errors
            !this.$v.text.minLength && errors.push('Shpjegimi duhet te jete me i madh se 10 shkronja.')
            !this.$v.text.required && errors.push('Kjo pjese eshte e nevojshme.')
            return errors
        },
        nrpErrors () {
            const errors = []
            if (!this.$v.nrp.$dirty) return errors
            !this.$v.nrp.numeric && errors.push('Numri i telefonit konsiston vetem nga numra')
            !this.$v.nrp.minLength && errors.push('Numri i telefonit ka te pakten 9 numra')
            !this.$v.nrp.required && errors.push('Kjo pjese eshte e nevojshme.')
            return errors
        },
        select1Errors () {
            const errors = []
            if (!this.$v.select1.$dirty) return errors
            !this.$v.select1.checked && errors.push('Duhet plotesuar!')
            return errors
        },
    },
    methods: {
        back: function(){
            if(this.currentStep != 1){
                this.currentStep--;
            }
        },
        next: function(){
            if(this.currentStep != this.steps){
                
                this.currentStep++;
            }
        },
        reset: function(){
            this.$v.$reset()
            this.emri = ''
            this.gjinia = ''
            this.checkup = ''
            this.text = ''
            this.nrp = ''
            this.select1 = null
            this.currentStep = 1
        },
        finalizo: async function(){
            this.$v.$touch();
            if(this.$v.emri.$invalid === true) return;
            if(this.$v.gjinia.$invalid === true) return;
            if(this.$v.checkup.$invalid === true) return;
            if(this.$v.text.$invalid === true) return;
            if(this.$v.nrp.$invalid === true) return;
            if(this.$v.select1.$invalid === true) return;
            try{
                await firebase.firestore().collection('Rezervimet').doc(this.emri).set({
                    emri: this.emri,
                    gjinia: this.gjinia,
                    checkup: this.checkup,
                    problemi: this.text,
                    nrKontaktit: this.nrp,
                    kaPranuarKushtet: this.select1,
                    data: this.picker,
                })
                this.reset()
                this.dialog = true
            } catch(error){
                throw error;
            }

        },
        goTo1: function(){
            this.currentStep = 1;
        },
        goTo2: function(){
            this.currentStep = 2;
        },
        goTo3: function(){
            this.currentStep = 3;
        },
    },
    head(){
        return{
            titleTemplate: "Rezervimi online | Klinika Fertility",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Rezervo nje takim ose procedure ne kliniken fertility"
                },
                {
                    name: "keywords",
                    content: "fertility, klinik, clinic,"
                }
            ]
        }
    }
}
</script>

<style>
.aplikimi-container{
    width: 100%;
    min-height: 85vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    transition: 0.4s;
}
.custom-stepper{
    background-color: #192e60;
    width: 60vw;
    transition: 0.4s;
}
.stepper-header{
    width: 60%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
}
.form-body{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
}
.form-holder-1{
    margin-top: 40px;
    width: 40vw;
    animation: changer 0.6s;
    transition: 0.4s;
}
.form-holder-2{
    display: none;
    width: 40vw;
    margin-top: 40px;
    animation: changer 0.6s;
    transition: 0.4s;
}
.form-holder-3{
    display: none;
    width: 40vw;
    margin-top: 40px;
    animation: changer 0.6;
    transition: 0.4s;
}
.form-holder-4{
    display: none;
    width: 40vw;
    margin-top: 40px;
    animation: changer 0.6s;
    transition: 0.4s;
}
.form-holder-5{
    display: none;
    width: 40vw;
    margin-top: 40px;
    animation: changer 0.6s;
    transition: 0.4s;
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
    .aplikimi-container{
        min-height: 80vh;
        padding-top: 30px;
        padding-bottom: 30px;
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
    .form-holder-5{
        width: 70vw;
    }
}
</style>