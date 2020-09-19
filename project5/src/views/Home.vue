<template>
  <div>
    <!-- <div id="nav" class="sticky shadow-lg d-flex justify-content-center">
      <router-link to="/">Home</router-link>|
      <router-link to="/index">Index</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/cart">Cart</router-link>|
      <router-link to="/products">Products</router-link>|
      <router-link to="/brand">brand</router-link>|
      <router-link to="/confirm">confirm</router-link>|
      <router-link to="/finish">finish</router-link>|
      <router-link to="/backhome">backend</router-link>
    </div> -->
    <Header></Header>
    <router-view></router-view>
    <!-- <footer class="d-flex justify-content-center">
      <p>本網站僅供教學練習使用，並無商業用途</p>
    </footer> -->
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    Header,
    Footer
  }
}
</script>
