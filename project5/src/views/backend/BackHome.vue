<template>
  <div>
    <div id="nav">
      <router-link to="/">back to Home</router-link> |
      <router-link to="/backend/orders">Orders</router-link> |
      <router-link to="/backend/products">products</router-link> |
      <router-link to="/backend/picstorage">picstorage</router-link> |
      <router-link to="/backend/login">login</router-link>
      <router-view />
    </div>
  </div>
</template>
