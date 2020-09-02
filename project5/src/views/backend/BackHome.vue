<template>
  <div>
    <div id="nav">
      <router-link to="/">back to Home</router-link> |
      <router-link to="/backend/orders">Orders</router-link> |
      <router-link to="/backend/products">products</router-link> |
      <router-link to="/backend/picstorage">picstorage</router-link> |
      <router-link to="/backend/coupons">coupons</router-link>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      token: '',
      checkSuccess: false
    }
  },
  created () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`
      // eslint-disable-next-line
      const api = `${process.env.VUE_APP_APIPATH}/api/auth/check`
      this.$http.post(api, {
        api_token: this.token
      })
        .then((res) => {
          console.log(res)
          this.checkSuccess = true
        })
        .catch((error) => {
          console.log(error.response)
          this.$router.push('/login')
        })
    }
  }
}
</script>
