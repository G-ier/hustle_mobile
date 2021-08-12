<template>
  <div class="admin-base">
      <div class="logout-row">
          <v-btn class="qs white--text rounded-lg" @click="logout" color="primary">Logout</v-btn>
      </div>
      
      <div class="admin-starter">
          <div class="container-stuff">
              <h1 class="starter-title s20 qs">Porosite e paderguara</h1>
                <div class="starter-row">
                    <v-btn text small color="white" class="white--text qs" nuxt to="/account/drejtuesi/">Bank details</v-btn>
                    <v-btn class="qs white--text" small text nuxt to="/account/drejtuesi/deals">All orders</v-btn>
                </div>
          </div>
      </div>

      <div class="admin-followup">
          <div class="followup-cont">
                <h1 class="starter-title qs s20 mb-4">Promovimet</h1>
                <div class="simple-row mb-3">
                    <div class="simple-listing">
                        <div class="simple-tile">
                            <p class="qs secondary--text simple-m">{{data.ads.length}} <span class="qs side-m">DOTD</span>  </p>
                        </div>
                    </div>
                    <div class="simple-listing">
                        <div class="simple-tile">
                            <p class="qs secondary--text simple-m">6 <span class="qs side-m">Ads</span>  </p>
                        </div>
                    </div>
                </div>
                <div class="starter-row">
                    
                    <v-btn class="qs white--text" small text nuxt @click="toManage">Manage</v-btn>
                    
                </div>
          </div>
      </div>

      <div class="admin-starter">
          <div class="container-stuff">
              <h1 class="starter-title s20 qs">Users</h1>
              <div class="another-ro">
                  <p class="qs">Admin: ergi1000</p>
                  <p class="qs">Creator: ergi1000</p>
              </div>
                <div class="starter-row">
                    <v-spacer></v-spacer>
                    <v-btn text small color="white" class="white--text qs" nuxt to="/account/drejtuesi/users">Show all</v-btn>
                </div>
          </div>
      </div>

      <div class="admin-starter" style="background: rgb(161,5,23); background: linear-gradient(148deg, rgba(161,5,23,1) 39%, rgba(221,131,141,1) 100%);">
          <div class="container-stuff">
              <h1 class="starter-title s20 qs">Kontaktime</h1>
              <div class="another-ro">
                  <p class="qs">Te gjitha kontaktimet qe ju jane bere</p>
              </div>
                <div class="starter-row">
                    <v-spacer></v-spacer>
                    <v-btn text small color="white" class="white--text qs" nuxt to="/account/drejtuesi/notices">Trego</v-btn>
                </div>
          </div>
      </div>
      
  </div>
</template>

<script>
import {validationMixin} from 'vuelidate'
import firebase from 'firebase'
import 'firebase/firestore'
import Cookies from 'js-cookie'
export default {
    mixins: [validationMixin],
    async asyncData(){
        const firedata = await firebase.firestore().collection('basic').doc('dotd').get();
        const ff = firedata.data();

        return{
            data: ff
        }
    },
    data(){
        return{
            steps: 4,
            currentStep: 1,
        }
    },
    head(){
        return{
            title: "Admin | Platforma X",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Hyrja per ne admin"
                },
                {
                    name: "keywords",
                    content: "shkolla e drejtoreve, aplikim, CSL, AMU, AML"
                }
            ]
        }
    },
    methods: {
        logout: async function () {
            await firebase.auth().signOut();
            await Cookies.remove('access_token');
            await Cookies.remove('role_token');

            this.$router.push({path: "/account"});
        },
        toManage: function (){
            this.$router.push({name: "account-drejtuesi-manage"});
        }
    }
}
</script>

<style scoped>
.v-text-field input{
    color:  white;
}
.simple-m{
    font-size: 40px;
    
}
.side-m{
    font-size: 13px;
}
.simple-row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 13vh;
}
.another-ro{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
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
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 15px;
}
.admin-starter{
    width: 90%;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #363f4e;
    margin-bottom: 15px;
}
.admin-followup{
    width: 90%;
    height: 35vh;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(161,5,23);
    background: linear-gradient(148deg, rgba(161,5,23,1) 39%, rgba(221,131,141,1) 100%);
    margin-bottom: 15px;
}
.container-stuff{
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 25px 0 25px 0;
}
.followup-cont{
    width: 85%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 25px 0 25px 0;
}
.starter-title{
    color: white;
    padding-bottom: 10px;
}
.starter-row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.simple-listing{
    background-color: white;
    border-radius: 20px;
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 15px 15px 15px;
    margin-bottom: 10px;
    overflow: hidden;
}
.simple-tile{
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    width: 100%;
    height: 100px;
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

@media only screen and (min-width: 850px){
.miniature{
        font-size: 13px;
        color: darkgray;
    }
    .full-width{
        width: 100%;
    }
    .simple-listing{
        background-color: white;
        border-radius: 20px;
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 15px 15px 0px 15px;
        margin-bottom: 10px;
        overflow: hidden;
    }
    .logout-row{
        width: 800px;
        padding: 5px 5vw 0 5vw;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 15px;
    }
    .admin-starter{
        width: 800px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #363f4e;
        margin-bottom: 15px;
    }
    .admin-followup{
        width: 800px;
        height: 300px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(161,5,23);
        background: linear-gradient(148deg, rgba(161,5,23,1) 39%, rgba(221,131,141,1) 100%);
        margin-bottom: 15px;
    }
}
</style>