<template>
  <div class="welcomepage">
    <h2>Welcome to the application</h2>
    <p>Hello, user!</p>
    <button @click="signOut">Sign Out</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'WelcomePage',
  methods: {
    async signOut() {
      try {
        // Optional: Call a backend endpoint to invalidate the token
        // await axios.post('/auth/signout');
        
        // Remove the token from local storage
        localStorage.removeItem('token');

        // Redirect to the sign-in page
        this.$router.push('/signin');
      } catch (error) {
        console.error('Error during sign out:', error);
        // Even if there's an error, we should still remove the token and redirect
        localStorage.removeItem('token');
        this.$router.push('/signin');
      }
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