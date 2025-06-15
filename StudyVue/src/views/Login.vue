<template>
  <div class="login">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
          <v-btn type="submit" color="primary">Login</v-btn>
      </form>
  </div>
  <div id="app">
  <v-app id="inspire">
    <v-layout align-center>
      <v-flex xs12 sm4 text-xs-center>
        <div>
          <v-btn flat small>Normal</v-btn>
        </div>
        <div>
          <v-btn flat small color="primary">Primary</v-btn>
        </div>
        <div>
          <v-btn flat small color="error">Error</v-btn>
        </div>
        <div>
          <v-btn flat small disabled>Disabled</v-btn>
        </div>
      </v-flex>
  
      <v-flex xs12 sm4 text-xs-center>
        <div>
          <v-btn flat>Normal</v-btn>
        </div>
        <div>
          <v-btn flat color="primary">Primary</v-btn>
        </div>
        <div>
          <v-btn flat color="error">Error</v-btn>
        </div>
        <div>
          <v-btn flat disabled>Disabled</v-btn>
        </div>
      </v-flex>
  
      <v-flex xs12 sm4 text-xs-center>
        <div>
          <v-btn flat large>Normal</v-btn>
        </div>
        <div>
          <v-btn flat large color="primary">Primary</v-btn>
        </div>
        <div>
          <v-btn flat large color="error">Error</v-btn>
        </div>
        <div>
          <v-btn flat large disabled>Disabled</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-app>
</div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { VBtn } from 'vuetify/components' // v-btnコンポーネントをインポート

const email = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = () => {
  if (email.value === 'maboo1114@gmail.com' && password.value === '1234') {
      router.push('/')
  } else {
      alert('ログイン成功')
  }
}
</script>

<style scoped>
.login {
max-width: 300px;
margin: 0 auto;
padding: 1rem;
border: 1px solid #ccc;
border-radius: 4px;
}

.login h1 {
text-align: center;
}

.login form {
display: flex;
flex-direction: column;
}

.login form div {
margin-bottom: 1rem;
}

.login form label {
margin-bottom: 0.5rem;
}

.login form input {
padding: 0.5rem;
border: 1px solid #ccc;
border-radius: 4px;
margin-bottom: 1rem;
}
</style>