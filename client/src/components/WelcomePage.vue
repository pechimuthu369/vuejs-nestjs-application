<template>
  <div v-if="isAuthenticated" class="welcome-container">
    <br>
    <h2>Welcome to the application</h2>
    <br>
    <p>Welcome, {{ username }}!</p>
    <br>
    <button @click="signOut">Sign Out</button>
  </div>
  <div v-else>
    <p>Please log in.</p>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['user']),
    isAuthenticated() {
      return this.user.isAuthenticated;
    },
    username() {
      return this.user.username;
    },
  },
  name: 'WelcomePage',
  methods: {
    async signOut() {
      try {
        // Optional: Call a backend endpoint to invalidate the token
        // await axios.post('/auth/signout');
        
        // Remove the token from local storage
        localStorage.removeItem('token');   
      } catch (error) {
        console.error('Error during sign out:', error);
        // Even if there's an error, we should still remove the token and redirect
        localStorage.removeItem('token');
      }
      this.$store.commit('setUser', {
            username: null,
            isAuthenticated: false,
          });
       // Redirect to the home page
       this.$router.push('/');
    }
  },
  async mounted() {
    try {
      // Optional: Fetch user data or a personalized welcome message
      const response = await axios.get('/auth/user');
      this.updateUser({ username: response.data.username });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
}
</script>

<style scoped>
.welcome-container {
  justify-content: center;
  align-items: center;
  background-color: 
 #f0f0f0;
}
.application {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

button {
  background-color: #f44336;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
}

button:hover {
  background-color: #d32f2f;
}
</style>