<template>
  <div id="app">
    <Header/>
    <router-view />
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapActions } from 'vuex';
import Header from '@/components/Header.vue';

@Component({
    components: {
        Header
    },
    methods: {
      ...mapActions(['fetchNotifications'])
    }
})
export default class App extends Vue {
  mounted() {
    this.fetchNotifications(1);
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.badge {
  font-weight: bold !important;
  background: #e01010 !important;
}
</style>
