<template>
  <div class="admin-base">
      <div class="logout-row">
          <v-btn class="qs white--text rounded-lg" @click="backAdmin" color="primary">Back</v-btn>
          <v-btn class="qs white--text rounded-lg" @click="logout" color="primary">Logout</v-btn>
      </div>

      <div class="users">
          <h1 class="qs secondary--text mb-4">Users</h1>
          <div class="users-list">
              <div v-for="userG in users" :key="userG.id" class="users-tile" :class="{'display-none': userG.username == 'ergi1000', 'display-flex': userG.username != 'ergi1000'}">
                  <v-col>
                      <p class="qs" style="padding: 0; margin: 0;">User: {{userG.username}}</p>
                      <p class="qs" style="padding: 0; margin: 0;">Email: {{userG.email}}</p>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-row class="my-auto" justify="center">
                      <v-btn color="white" class="rounded-lg secondary--text qs" small @click="applyUser(userG)">Menaxho</v-btn>
                  </v-row>
              </div>
          </div>
      </div>
      
      <v-dialog
        transition="dialog-top-transition"
        max-width="300"
        v-model="changeS"
        style="z-index: 9898989898987987987987897;"
        >
            <v-card color="secondary">
            <v-card-title>
                <h3 class="qs white--text mb-4">Konfirmo</h3>
                <v-select label="Paketa" outlined v-model="paketa" :items="paketat" dark dense color="white" class="mt-1" clearable></v-select>  
                <p class="qs white--text s16 mb-4">Limiti: {{new Date(user.timestamp).toLocaleString()}}</p>        
            </v-card-title>
            <v-card-actions class="justify-end">
                <v-btn
                text
                @click="changeUser"
                >Konfirmo</v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>

  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import Cookie from 'js-cookie';
export default {
    async asyncData(){
        const theData = await firebase.firestore().collection('users').get();
        return{
            users: theData.docs.map(doc => doc.data())
        }
    },
    data(){
        return{
            stuff: null,
            changeS: false,
            user: {
                email: null,
                username: null,
                role:null,
                displaName: null,
                password: null,
                photo:null,
                location: null,
                qyteti: null,
                numri: null,
                paid: null,
                timestamp: new Date(1549312452 * 1000).getTime(),
                paketa: null
            },
            timestamp: new Date(1549312452 * 1000).getTime(),
            cuurentTime: new Date(),
            paketat: [
                "I paregjistruar",
                "Nje mujor",
                "Dy mujor",
                "Tre mujor",
                "Gjashte mujor",
                "Dymbedhjete mujor"
            ],
            paketa: "I paregjistruar"
        }
    },
    head(){
        return{
            title: "Users",
            meta: [
                {
                    name: 'description',
                    content: 'Platforma me e avancuar dhe komforte per shitesat' 
                }
            ]
        }
    },
    methods: {
        applyUser: function(userG){
            this.changeS = true; 
            this.user = userG;
            this.paketa = userG.paketa ? userG.paketa : "I paregjistruar";
            console.log(this.paketa)
        },
        logout: async function () {
            await firebase.auth().signOut();
            await Cookie.remove('access_token');
            await Cookie.remove('role_token');

            location.href = "/account";
        },
        backAdmin: function (){
            location.href = '/account/drejtuesi';
        },
        changeUser: async function (){

            if(this.paketa == "Nje mujor"){
                this.user.paketa = "Nje mujor";
                this.user.paid = true;
                var oneYearFromNow = new Date();
                oneYearFromNow.setMonth(oneYearFromNow.getMonth() + 1);
                var timestamp = oneYearFromNow.getTime();
                this.user.timestamp = timestamp;
            }

            if(this.paketa == "Dy mujor"){
                this.user.paketa = "Dy mujor";
                this.user.paid = true;
                var oneYearFromNow = new Date();
                oneYearFromNow.setMonth(oneYearFromNow.getMonth() + 2);
                var timestamp = oneYearFromNow.getTime();
                this.user.timestamp = timestamp;
            }
            if(this.paketa == "Tre mujor"){
                this.user.paketa = "Tre mujor";
                this.user.paid = true;
                var oneYearFromNow = new Date();
                oneYearFromNow.setMonth(oneYearFromNow.getMonth() + 3);
                var timestamp = oneYearFromNow.getTime();
                this.user.timestamp = timestamp;
            }
            if(this.paketa == "Gjashte mujor"){
                this.user.paketa = "Gjashte mujor";
                this.user.paid = true;
                var oneYearFromNow = new Date();
                oneYearFromNow.setMonth(oneYearFromNow.getMonth() + 6);
                var timestamp = oneYearFromNow.getTime();
                this.user.timestamp = timestamp;
            }
            if(this.paketa == "Dymbedhjete mujor"){
                this.user.paketa = "Dymbedhjete mujor";
                this.user.paid = true;
                var oneYearFromNow = new Date();
                oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
                var timestamp = oneYearFromNow.getTime();
                this.user.timestamp = timestamp;
            }

           await firebase.firestore().collection('users').doc(this.user.username).update({
               email: this.user.email,
                username: this.user.username,
                role: this.user.role,
                displaName: this.user.displaName,
                password: this.user.password,
                photo: this.user.photo,
                location: this.user.location,
                qyteti: this.user.qyteti,
                numri: this.user.numri,
                paid: true,
                timestamp: this.user.timestamp,
                paketa: this.user.paketa
           })

           this.changeS = false;
        }
    }    

}
</script>

<style scoped>
.display-none{
    display: none;
}
.display-flex{
    display: flex;
}
.me-holder{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 92vh;
}
.admin-base{
    background-size: cover;
    background-position-y: center;
    background-position-x: center;
    width: 100%;
    min-height: 71vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 0 10px 0;
    
}
.logout-row{
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}
.users{
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.users-list{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
}
.users-tile{
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 15px 10px 15px;
    background-color: #363f4e;
    color: white;
}
.users-tile-2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-evenly;
    width: 100%;
    padding: 10px 15px 10px 15px;
    background-color: white;
    color: #363f4e;
}
</style>