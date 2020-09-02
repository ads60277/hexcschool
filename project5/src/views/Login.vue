<template>
  <div class="signin_table">
      <form class="form-signin" @submit.prevent="signin">
        <div class="form-group">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            id="inputEmail"
            v-model="user.email"
            type="email"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
          />
        </div>
        <div class="form-group">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            id="inputPassword"
            v-model="user.password"
            type="password"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>
        <button class="btn btn-lg btn-info btn-block" type="submit">登入</button>
      </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  created () {

  },
  methods: {
    signin () {
      const api = 'https://course-ec-api.hexschool.io/api/auth/login'
      this.$http.post(api, this.user).then((response) => {
        const token = response.data.token
        const expired = response.data.expired
        // 寫入 cookie token
        // expires 設置有效時間
        document.cookie = `token=${token};expires=${new Date(expired * 1000)}; path=/`
        window.location = 'index.html'
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style>
html,
body {
  height: 100%;
  text-align: center;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
}
.signin_table{
  margin-top: 10%;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin:first-child{
  margin: 10% 0%;
}
</style>
