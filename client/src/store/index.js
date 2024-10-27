import { createStore } from 'vuex';

export default createStore({
  state: {
    user: {
      username: '',
      isAuthenticated: false,
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
});