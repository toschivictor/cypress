<template>
  <div class="home">
    <ChatBox />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ChatBox from "@/components/ChatBox.vue";

@Component({
  components: {
    ChatBox
  }
})
export default class Home extends Vue {}
</script>
