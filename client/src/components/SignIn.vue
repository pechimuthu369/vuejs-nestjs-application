<template>
    <div class="signin">
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
    
          this.$router.push('/welcomepage');
        } catch (error) {
          this.error = error.response.data.message;
        }
      },
    },

  }
  </script>