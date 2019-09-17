<template>
  <header class="header">
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a href="#" @click="fetchNotifications(0)" class="nav-link active">
          Notifications 
          <span v-if="notifications > 0" class="badge badge-secondary">{{ notifications }}</span>
        </a>
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from 'vuex';

@Component({
  computed: {
    ...mapGetters(['notifications'])
  },
  methods: {
    ...mapActions(['fetchNotifications'])
  }
})
export default class Header extends Vue {
}
</script>

<style scoped lang="scss">
.header {
    width: 100%;
    padding: 10px;
    background: #eee;
}
</style>
