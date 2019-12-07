<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div>
          {{ fullname }}
          <input
            type="text"
            :value="inputText"
            @keyup="setInput"
            @keydown.enter="setName"
            @keydown.up="setSurname"
            placeholder="Your name" />
          <div>
            <span v-if="inputText!==''">
              Hello {{ inputText }}
            </span>
          </div>
        </div>
      </div>
      <hr>
      <star-ships></star-ships>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import StarShips from '@/components/StarShips';

export default {
  name: 'app',
  components: {
    StarShips,
  },
  data() {
    return {
      inputText: '',
    };
  },
  computed: {
    ...mapGetters({
      getName: 'getName',
      getSurname: 'getSurname',
    }),
    fullname() {
      return `${this.getName} ${this.getSurname}`;
    },
  },
  methods: {
    setInput(e) {
      this.inputText = e.target.value;
    },
    setName() {
      this.$store.dispatch('setName', this.inputText);
    },
    setSurname() {
      this.$store.dispatch('setSurname', this.inputText);
    },
  },
};
</script>

<style>
.container .column.starships {
  text-align: left;
  padding-left: 0;
}
</style>
