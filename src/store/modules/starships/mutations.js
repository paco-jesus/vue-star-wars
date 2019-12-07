/* eslint no-param-reassign: [
  "error",
  { "props": true, "ignorePropertyModificationsFor": ["state"] },
] */

import Vue from 'vue';
import types from './mutation-types';

export default {
  [types.SET_SHIPS](state, starships) {
    Vue.set(state, 'starships', starships);
  },
  [types.SET_MY_SHIP](state, myNewShip) {
    Vue.set(state, 'myShip', myNewShip);
  },
};
