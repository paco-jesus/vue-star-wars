export default {
  setName({ commit }, newName) {
    commit('nameSetter', newName);
  },
  setSurname({ commit }, newSurname) {
    commit('surnameSetter', newSurname);
  },
  toggleLoading({ commit }) {
    commit('toggleLoading');
  },
};
