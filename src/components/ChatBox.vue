<template>
<div class="chat-box">
  <div @click="toggleChat" class="chat-head">
      <h2>Messages</h2>
      <span
        v-if="notifications > 0"
        class="badge badge-secondary"
      >
        {{ notifications }}
      </span>
  </div>
  <div v-if="showMenu" class="chat-body">
      <div class="msg-insert">
        <div 
          v-for="message in messageHistory"
          :key="Math.random(message.id)"
          :class="{
            'msg-sent': message.id === userId,
            'msg-receive': message.id !== userId
          }"
        >
          {{ message.text }}
        </div>
      </div>
      <div class="chat-text">
          <textarea @keydown="sendMessage" placeholder="Send"></textarea>
      </div>
  </div>
</div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters(['messageHistory', 'notifications', 'userId'])
  },
  methods: {
    ...mapActions(['addMessage', 'fetchNotifications'])
  }
})
export default class ChatBox extends Vue {
  // Data property
  showMenu = false;

  toggleChat() {
    this.showMenu = !this.showMenu;
    if (this.notifications > 0) {
      this.fetchNotifications(0)
    }
  }

  sendMessage(event) {  
    if (event.keyCode === 13) {
      this.addMessage({
        id: this.userId,
        text: event.target.value
      });

      event.target.value = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-box{
	position: absolute;
	right: 20px;
	bottom: 0px;
	background: white;
	width: 300px;
	border-radius: 5px 5px 0px 0px;
  border: 1px solid #eee;
}
.chat-head{
	width: inherit;
	height: 35px;
	background: #065bb7;
	border-radius: 5px 5px 0px 0px;
  cursor: pointer;
}
.chat-head h2{
  font-size: 16px;
	color: white;
	padding: 8px;
	display: inline-block;
}
.chat-head img{
	cursor: pointer;
	float: right;
	width: 25px;
	margin: 10px;
}
.chat-body{
	height: 355px;
	width: inherit;
	overflow: auto;
}
.chat-text{
	position: fixed;
	bottom: 0px;
	height: 45px;
	width: inherit;
}

.chat-text textarea{
	width: inherit;
	height: inherit; 
	box-sizing: border-box;
	border: 1px solid #bdc3c7;
	padding: 10px;
	resize: none;
}

.chat-text textarea:active, .chat-text textarea:focus, .chat-text textarea:hover{
	border-color: royalblue;
}

.msg-sent{
	background: #2ecc71;
}

.msg-receive{
	background: #3498db;
}

.msg-sent, .msg-receive{
	width: 240px;
	height: 35px;
	padding: 5px 5px 5px 10px;
	margin: 10px auto;
	border-radius: 3px;
	position: relative;
	color: white;
}

.msg-receive:before{
	content: '';
	width: 0px;
	height: 0px;
	position: absolute;
	border: 17px solid;
	border-color: transparent #3498db transparent transparent;
	left: -33px;
	top: 1px;
}

.msg-sent:after{
	content: '';
	width: 0px;
	height: 0px;
	position: absolute;
	border: 17px solid;
	border-color: transparent transparent transparent #2ecc71;
	right: -33px;
	top: 1px;
}

.msg-receive:hover, .msg-sent:hover{
	opacity: .9;
}
</style>