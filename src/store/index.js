import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';
import state from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';
import starships from './modules/starships';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: [
    starships,
  ],
  plugins: [
    // createPersistedState(),
  ],
});
