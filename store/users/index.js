import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Cookie from 'js-cookie';
import Cookies from 'js-cookie';

export const state = () => ({
    user: null,
    role: null,
    search: null,
    red: null,
    result: null,
    cart: [],
})

export const mutations = {
    SET_USER: (state, account) => {
        state.user = account;
    },
    SET_ROLE: (state, role) => {
        state.role = role;
    },
    SET_SEARCH: (state, search) => {
        state.search = search;
    },
    SET_REDIRECT: (state, red) => {
        state.red = red;
    },
    SET_RESULT: (state, result) => {
        state.result = result;
    },
    SET_CART: (state, cart) => {
        state.cart = cart;
    }
}

export const actions = {
    async login({commit}, account){

        try {

            // Get role TODO: check if user doesnt exist.
            var toFilter = account.email.split("@");
            const snapshot = await firebase.firestore().collection('users').doc(toFilter[0]).get();
            const roleName = snapshot.data(); 

            //Log in user
            await firebase.auth().signInWithEmailAndPassword(account.email, account.password);

            //Get token from firebase
            const token = await firebase.auth().currentUser.getIdToken();
            const { email, uid } = firebase.auth().currentUser;

            //Set token to cookie
            Cookie.set('access_token', token);
            Cookies.set('role_token', roleName.role);  
            const usershit = {
                username: roleName.username,
            }
            Cookies.set('user', JSON.stringify(usershit));  

            // Set role
            commit("SET_ROLE", roleName.role);

            // Set user locally
            commit("SET_USER", { email, uid});

        } catch(error){
            throw error;
        }

    },
    async register ({commit}, account){
        try{

            //Create user
            const toFilter = account.email.split("@");
            await firebase.auth().createUserWithEmailAndPassword(account.email, account.password);
            await firebase.firestore().collection('users').doc(toFilter[0]).set({
                email: account.email.toLowerCase(),
                username: account.emri.toLowerCase(),
                role: account.role.toLowerCase(),
                displaName: account.emri.toLowerCase(),
                password: account.password,
                photo: null,
                location: account.adresa,
                qyteti: account.qyteti,
                numri: account.numri
            })

            //Get token from firebase
            const token = await firebase.auth().currentUser.getIdToken();
            const { email, uid } = firebase.auth().currentUser

            // Get role TODO: check if user doesnt exist.
            //const snapshot = await firebase.firestore().collection('users').doc(toFilter[0]).get();
            //const roleName = snapshot.data(); 


            //Set token to cookie
            Cookie.set('access_token', token);
            //Cookies.set('role_token', roleName.role);  
            //const usershit = {
            //    username: roleName.username,
            //}
            //Cookies.set('user', JSON.stringify(usershit));  

            // Set role
            commit("SET_ROLE", account.role.toLowerCase());

            // Set user locally
            commit("SET_USER", { email, uid});

            // Send email verification
            var currUser = await firebase.auth().currentUser;
            currUser.sendEmailVerification().then(() => {
                console.log('Free');
            });
        } catch(error) {
            throw error;
        }
    },
    async search({commit}, kerkimi){
        try{
            commit("SET_REDIRECT", null);
            const docu = await firebase.firestore().collection('search').doc('everythang').get();
            const docData = docu.data();
            docData.terms.forEach((term) => {
                if(term.emri == kerkimi.toLowerCase()){
                    console.log("kerkimi: " + kerkimi)
                    commit("SET_SEARCH", term.emri);
                    commit("SET_REDIRECT", term.cilesia);
                } else {
                    commit("SET_SEARCH", kerkimi);
                    commit("SET_REDIRECT", null);
                }
            });

            
        } catch(e){
            console.log(e);
        }
    },
    async change1({commit}, kerkimi){
        try{
            commit("SET_RESULT", null);
            const docu = await firebase.firestore().collection('search').where("emri", "==", kerkimi.toLowerCase()).get();
            const docData = docu.docs.map(doc => doc.data());
            commit("SET_RESULT", docData);
            
        } catch(e){
            console.log(e);
        }
    },
    async change({commit}, kerkimi){
        try{
            commit("SET_RESULT", null);
            const docu = await firebase.firestore().collection('search').get();
            const docData = docu.docs.map(doc => doc.data());
            var emrat = [];
            var reds = [];
            var result = [];
            var venis = [];
            docData.forEach((term) => {
                if(term.emri.toLowerCase().includes(kerkimi.toLowerCase())){
                    console.log("kerkimi: " + kerkimi)
                    emrat.push(term.emri);
                    reds.push(term.cilesia);
                    venis.push(term.kat);
                } else {
                    console.log('Shihni shenimet e fabrikes.');
                }
                
                var i;
                for( i=0; i < emrat.length; i++){
                    result.push({
                        emri: emrat[i],
                        red: reds[i],
                        veni: venis[i]
                    });
                    console.log("Push success!");
                }
            });
            
            if(reds.length != 0){
                commit("SET_RESULT", result);
                console.log("Printing length of reds");
                console.log(JSON.stringify(reds));
            } else {
                console.log("Done null commit.");
            }
            
        } catch(e){
            console.log(e);
        }
    },
    addToCart({commit}, jsonCart){
        try{
            
            var currCart = jsonCart.currentCart;
            console.log(currCart);

            currCart.forEach((cartItem) => {
                if(cartItem.prodEmri == jsonCart.emri){

                    throw "exit";
                }
            });
            
            console.log("made it here aswell")
            if(currCart.length < 10){
                currCart.push({
                    name: jsonCart.emri + " | ",
                    amount: jsonCart.price,
                    quantity: jsonCart.times,
                    description: "Item from " + jsonCart.seller,
                    photo: jsonCart.photo,
                    currency: "all"
                });
            }
            
            
            Cookie.set("cart_hustle", JSON.stringify(currCart));

            commit('SET_CART', currCart);
            
        } catch(e){
            console.log(e);
        }
    },
    updateCart({commit}, newCart){
        try{
            
            var currCart = newCart.currentCart;
            console.log(currCart);

            currCart.forEach((cartItem) => {
                if(cartItem.name == newCart.cartEmri){
                    cartItem.quantity += newCart.cartTimes;

                    if(cartItem.quantity > -1){
                        if(cartItem.quantity == 0){
                            Cookies.set('cart_hustle', currCart.filter(doc => {
                                return doc.name != cartItem.name && doc.amount != cartItem.amount;
                            }));
                            commit('SET_CART', currCart.filter(doc => {
                                return doc.name != cartItem.name && doc.amount != cartItem.amount;
                            }));
                            throw "exit";
                        } else {
                            Cookie.set('cart_hustle', currCart);
                            commit('SET_CART', currCart);
                            throw "exit";
                        }                    
                    }

                }
            });
            
        } catch(e){
            console.log(e);
        }
    },
    removeCart({commit}){
        try{
            commit('SET_CART', []);
        } catch(e){
            console.log(e);
        }
    }
}