<template>
  <div>
    <div class="banner"></div>
    <div class="body">
      <div class="container">
        <div class="picreviewbox my-5 justify-content-center ">
          <div class="card" style="width: 18rem;">
            <router-link to="/products">
            <img src="@/assets/img/pexels-andrea-piacquadio-3760043.jpg" class="card-img-top" alt />
            <div class="card-body">
              <h5 class="card-title">家中雜物</h5>
              <p class="card-text">整理房間，過年大掃除，有太多太多的東西丟了浪費，留著又佔空間嗎， 那就來隨手拍賣吧～</p>
            </div>
            </router-link>
          </div>
          <div class="card mx-5" style="width: 18rem;">
            <router-link to="/products">
            <img src="@/assets/img/photo-1549923746-c502d488b3ea.jpeg" class="card-img-top" alt />
            <div class="card-body">
              <h5 class="card-title">幫物品找個好主人</h5>
              <p class="card-text">有太多無用小物又不知道要放哪嗎？網拍一個不小心買了太多東西嗎？那就來隨手拍賣吧～</p>
            </div>
            </router-link>
          </div>
          <div class="card" style="width: 18rem;">
            <router-link to="/products">
            <img src="@/assets/img/photo-1567427017947-545c5f8d16ad.jpeg" class="card-img-top" alt />
            <div class="card-body">
              <h5 class="card-title">貼補家用</h5>
              <p class="card-text">後悔把錢變成了自己喜歡的樣子，陪在自己的身邊了嗎，那就來隨手拍賣換回來吧～</p>
            </div>
            </router-link>
          </div>
        </div>
        <section class="introductbox ">
          <img src="@/assets/img/pexels-photo-3803219.jpeg" alt="">
          <div class="jumbotron d-flex justify-content-end">
            <div class="text_box">
              <h1 class="display-4 text-right">隨手拍賣</h1>
              <p class="lead text-right">斷捨離的好幫手 <br>賺外快的小助手<br>改善居家擺設不再醜</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Index',
  components: {},
  data () {
    return {}
  }
}
</script>
