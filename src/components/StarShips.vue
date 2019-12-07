<template>
  <div class="container">
    <div class="row">
      <div>
          <button
            @click="getSomeSpaceships"
          >Get Spaceships!</button>
      </div>
    </div>
    <div class="row">
      <div
        class="column column-50 starships"
        v-if="starships.length">
        <ul class="ship-list">
          <li v-for="starship in starships"
              :key="starship.url">
            <button
              class="button-large button-black button-outline "
              @click="setMyShip(starship.url)">
              {{ starship.name }}
            </button>
          </li>
        </ul>
      </div>
      <div
        v-if="loading"
        class="column column-50">
        <div class="lds-dual-ring"></div>
      </div>
      <div
        v-if="myShip.name && !loading"
        class="column column-50 my-ship">
        <small>
          <a>Cost in credits: {{ myShip.cost_in_credits }}</a>
        </small>
        <h1>{{ myShip.name }}</h1>
        <small>Manufacturer: {{ myShip.manufacturer }}</small><br/>
        <small>Model: {{ myShip.model }}</small><br/>
        <u>Starship class: {{ myShip.starship_class }} </u><br/>
        <strong>Hyperdrive rating: {{ myShip.hyperdrive_rating }} </strong><br>
        <em>Cargo capacity: {{ myShip.cargo_capacity }} </em>
        <!-- <div>
          ugly one: {{ uglyShip }}
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StarShips',
  props: {
    msg: String,
  },
  methods: {
    getSomeSpaceships() {
      this.$store.dispatch('getStarships');
    },
    setMyShip(shipUrl) {
      this.$store.dispatch('setMyShip', shipUrl);
    },
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    myShip() {
      return this.$store.getters.myShip;
    },
    starships() {
      return this.$store.getters.starships;
    },
  },
};
</script>
<style scoped>
.starships .ship-list {
  list-style: none;
}
.lds-dual-ring {
  display: inline-block;
  width: 64px;
  height: 64px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 46px;
  height: 46px;
  margin: 1px;
  border-radius: 50%;
  border: 5px solid #9b4dca;
  border-color: #9b4dca transparent #9b4dca transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
