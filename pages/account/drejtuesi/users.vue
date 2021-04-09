<template>
  <div class="admin-base">
      <div class="logout-row">
          <v-btn class="qs white--text rounded-lg" @click="backAdmin" color="primary" text>Back</v-btn>
          <v-btn class="qs white--text rounded-lg" @click="logout" color="primary">Logout</v-btn>
      </div>

      <div class="users">
          <h1 class="qs secondary--text mb-4">Users</h1>
          <div class="users-list">
              <div v-for="user in users" :key="user.id" :class="{'users-tile': users.indexOf(user)%2 == 0, 'users-tile-2': users.indexOf(user)%2 == 1}">
                  <p class="qs" style="padding: 0; margin: 0;">User: {{user.username}}</p>
                  <p class="qs" style="padding: 0; margin: 0;"  >Email: {{user.email}}</p>
              </div>
          </div>
      </div>
      
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
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
        logout: async function () {
            await firebase.auth().signOut();
            await Cookie.remove('access_token');
            await Cookie.remove('role_token');

            location.href = "/account";
        },
        backAdmin: function (){
            location.href = '/account/drejtuesi';
        }
    }    

}
</script>

<style scoped>
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
    width: 100%;
    padding: 5px 5vw 0 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}
.users{
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.users-list{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
}
.users-tile{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-evenly;
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