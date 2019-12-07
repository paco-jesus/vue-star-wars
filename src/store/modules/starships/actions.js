import types from './mutation-types';

export default {
  getStarships({ commit }) {
    fetch('https://swapi.co/api/starships')
      .then(response => response.json())
      .then((resJson) => {
        const { results } = resJson;
        commit(types.SET_SHIPS, results);
      });
  },
  // eslint-disable-next-line
  setMyShip({ commit, dispatch }, shipUrl) {
    dispatch('toggleLoading');
    fetch(`${shipUrl}`)
      .then(response => response.json())
      .then((resJson) => {
        commit(types.SET_MY_SHIP, resJson);
        dispatch('toggleLoading');
      });
  },
};
