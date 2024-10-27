<template>
    <div class="signin-container">
      <h2>Sign In</h2>
      <form @submit.prevent="handleSignIn">
        <input v-model="email" type="email" placeholder="Email" required>
        <input v-model="password" type="password" placeholder="Password" required>
        <button type="submit">Sign In</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: ''
      }
    },
    methods: {
      async handleSignIn() {
        try {
          const response = await axios.post('/api/auth/signin', {
            email: this.email,
            password: this.password
          });
          console.log(response);
          localStorage.setItem('token', response.data.access_token);
          this.$store.commit('setUser', {
            username: response.data.user_name,
            isAuthenticated: true,
          });
          this.$router.push('/welcomepage');
        } catch (error) {
          this.error = error.response.data.message;
        }
      },
    },

  }
  </script>

<style scoped>
.signin-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: 
 #f0f0f0;
}

.form-group {
  margin-bottom: 10px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: 
 none;
  border-radius: 5px;
  cursor: 
 pointer;
}
</style>