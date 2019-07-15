import Vue from 'vue';
import Vuex from 'vuex';

function importaAll(r) {
    return r.keys().map(key => r(key))
}

const modulesCache = {}
const modeles = importaAll(require.context('./modules/', true, /\.js$/))   //引进store中所有的仓库


modeles.forEach(element => {
    Object.keys(element).forEach(key => {

        if (localStorage.getItem(key)) {
            element[key].state = JSON.parse(localStorage.getItem(key))
            localStorage.removeItem(key)
        }
        modulesCache[key] = element[key]
    })
});


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: modulesCache,

    getters: {
        token: state => {
            return state.login.token
        }
    }

});

export default store;