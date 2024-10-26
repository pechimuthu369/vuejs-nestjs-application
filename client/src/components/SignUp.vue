<template>
  <div class="signup">
    <h2>Sign Up</h2>
    <form @submit.prevent="handleSignUp">
      <input v-model="email" type="email" placeholder="Email" required>
      <input v-model="name" type="text" placeholder="Name" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <button type="submit">Sign Up</button>
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
      name: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async handleSignUp() {
      try {
        await axios.post('/api/auth/signup', {
          email: this.email,
          name: this.name,
          password: this.password
        });
        this.$router.push('/welcomepage');
      } catch (error) {
        this.error = error.response.data.message;
      }
    }
  }
}
</script>