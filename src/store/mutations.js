import Vue from 'vue';

export default {
  nameSetter(state, newName) {
    Vue.set(state, 'name', newName);
  },
  surnameSetter(state, newSurname) {
    state.surname = newSurname;
  },
  toggleLoading(state) {
    state.loading = !state.loading;
  },
};
