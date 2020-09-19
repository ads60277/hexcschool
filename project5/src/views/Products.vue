<template>
  <div>
    <div class="container mb-4 p-2">
      <div class="row products d-flex flex-wrap justify-content-between align-items-start my-4 p-2">
        <!-- <nav class="list-box d-flex col-md-2 col-12 sticky-top">
          <div class="table my-3 sticky-top">
            <ul class="list-group">
              <li class="list-group-item">
                <a href="#">全部商品</a>
              </li>
              <li class="list-group-item">手機殼</li>
              <li class="list-group-item">傢俱</li>
              <li class="list-group-item">衣物</li>
            </ul>
          </div>
        </nav>-->
        <!-- 產品卡片 -->
        <div
          id="display"
          class="table col-md-4 d-flex justify-content-between align-items-center flex-wrap " v-for="(item) in filterProducts"
            :key="item.id" >
          <div class="card shadow-sm my-3 mx-3 "
             :data-id="item.id" style="width: 25rem;" >
            <img :src="item.imageUrl" class="card-img-top" alt />
            <!-- 前往單一產品頁 -->
            <router-link :to="`/product/${item.id}`"></router-link>
            <!-- card body -->
              <h5 class="card-text mt-3">{{ item.title }}</h5>
            <div class="card-body p-2 d-flex justify-content-between">
              <div class="price_box d-flex align-items-center">
                <small class="mr-1 text-muted ">{{ item.origin_price}}</small>
                <span>{{ item.price}}</span>
              </div>
              <div class="action_box">
                  <a @click.prevent="addCart(item.id)">
                    <!-- icon -->
                    <svg
                      width="2em"
                      height="2em"
                      viewBox="0 0 16 16"
                      class="bi bi-cart-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 d-flex justify-content-center">
      <pagination :pages="pagination" class="my-4" @emit-pages="getProducts"></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
export default {
  name: 'Products',
  data () {
    return {
      products: [],
      isLoading: false,
      filterType: '',
      filterProducts: [],
      pagination: {},
      cart: {},
      uuid: process.env.VUE_APP_UUID
    }
  },
  components: {
    Pagination
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts (pages = 1) {
      this.isLoading = true
      this.$http
        .get(
          `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/ec/products?page=${pages}`
        )
        .then((res) => {
          this.products = res.data.data
          this.filterProducts = this.products
          this.pagination = res.data.meta.pagination
          this.isLoading = false
          console.log(res)
        })
    },
    addCart (id, quantity = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/ec/shopping`
      const cart = {
        product: id,
        quantity
      }

      this.axios.post(url, cart).then(() => {
        this.isLoading = false
        this.$bus.$emit('updateTotal')
        this.$bus.$emit('Mesage:push', '成功加入購物車', 'success')
      }).catch((err) => {
        const error = err.response.data.errors
        console.log(error)
        error.forEach((error) => {
          this.isLoading = false
          this.$bus.$emit('Mesage.push', '加入購物車失敗', `${error}`, 'danger')
        })
      })
    }
  }
}
</script>
