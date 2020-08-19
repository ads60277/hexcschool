<template>
<div>
  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>  |
      <router-link to="/cart">Cart</router-link>  |
      <router-link to="/products">Products</router-link>  |
      <router-link to="/backhome">backend</router-link>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
