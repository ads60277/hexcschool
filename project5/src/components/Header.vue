<template>
  <!-- <div class="sticky shadow-xm d-flex justify-content-center">
      <router-link to="/">Home</router-link>|
      <router-link to="/index">Index</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/cart">Cart</router-link>|
      <router-link to="/products">Products</router-link>|
      <router-link to="/brand">brand</router-link>|
      <router-link to="/confirm">confirm</router-link>|
      <router-link to="/finish">finish</router-link>|
      <router-link to="/backhome">backend</router-link>
  </div>-->
  <div class="container">
    <div class="d-block d-sm-flex align-items-center justify-content-between my-4 sticky-top">
      <div class="logo">
        <router-link to="/index">
          <span class="h1">隨手拍賣</span>
        </router-link>
      </div>
      <div>
        <div class="menu d-flex">
          <!--  關於我們 -->
          <li>
            <router-link class="btn btn-primary mr-4" to="/about">找我們</router-link>
          </li>
          <!--  看看大家都賣什麼 -->
          <li>
            <router-link class="btn btn-primary mr-4" to="/products">找東西</router-link>
          </li>
          <!-- 購物車 -->
          <li>
            <router-link to="/cart"><svg
                width="2.3em"
                height="2.3em"
                viewBox="0 0 16 16"
                class="bi bi-cart-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                />
              </svg></router-link>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus"></style>
