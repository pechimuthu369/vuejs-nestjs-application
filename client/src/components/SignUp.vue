<template>
  <div class="signup-container">
    <h2>Sign Up</h2>
    <form @submit.prevent="handleSignUp">
      <input v-model="name" type="text" placeholder="Name" required>
      <input v-model="email" type="email" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Password" required>
      
      <button type="submit" :disabled="!isValidPassword">Sign Up</button>
      
      </form>
  </div>
  <p v-if="!isValidPassword" style="color: brown;">
        Password must be at least <br>
          8 characters long and contain at least one letter,<br> 
          one number, and <br>
          one special character.
        </p> 
    <p v-if="error">{{ error }}</p>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      name: '',
      password: '',
      error: '',
    }
  },
  computed: {
    isValidPassword() {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
      return passwordRegex.test(this.password);
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

<style scoped>
.signup-container {
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