import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

export const state = () => ({
    search: 'bosh',
    red: null,
    reloaded: 0
})

export const mutations = {
    SET_SEARCH: (state, search) => {
        state.search = search;
    },
    SET_REDIRECT: (state, red) => {
        state.red = red;
    },
    SET_TIMES: (state, times) => {
        state.reloaded = times;
    },
}

export const actions = {
    async search({commit}, kerkimi){
        try{
            const docu = await firebase.firestore().collection('search').doc('everythang').get();
            const docData = docu.data();
            var search = null;
            var red = null;
            docData.terms.forEach((term) => {
                if(term.emri == kerkimi){
                    search = term.emri;
                    red = term.cilesia;
                }
            });

            commit("SET_SEARCH", search);
            commit("SET_REDIRECT", red);
        } catch(e){
            console.log(e);
        }
    },
    upOne({commit}, currentTime){

        commit("SET_TIMES", currentTime+1);
    }
}