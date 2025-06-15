<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="headline">ログイン</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="email"
                label="メールアドレス"
                prepend-icon="mdi-email"
                type="email"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="パスワード"
                prepend-icon="mdi-lock"
                type="password"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="login">ログイン</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      // ログイン処理をここに追加
      console.log('メールアドレス:', this.email);
      console.log('パスワード:', this.password);
    },
  },
};
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>