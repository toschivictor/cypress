import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notifications: 0,
    messages: [
      {
        id: 1,
        text: "Sent message."
      },
      {
        id: 2,
        text: "Received message."
      }
    ],
    userId: 1
  },
  getters: {
    messageHistory: state => state.messages,
    notifications: state => state.notifications,
    userId: state => state.userId
  },
  mutations: {
    SET_MESSAGE(state, message) {
      state.messages.push({ ...message });
    },
    SET_NOTIFICATION(state, notifications) {
      state.notifications = notifications;
    }
  },
  actions: {
    addMessage({ commit }, message) {
      commit('SET_MESSAGE', message);
    },
    fetchNotifications({ commit }, notification) {
      commit('SET_NOTIFICATION', notification);
    }
  }
});
