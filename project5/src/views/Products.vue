<template>
  <div>
    <h2>這是產品頁</h2>
    <table>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.price }}</td>
        <td>
          <router-link :to="`/product/${item.id}`">enter</router-link>
          <!-- <button :@click="openProduct(item)">進入產品</button> -->
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      products: []
    }
  },
  created () {
    const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`
    this.$http.get(url)
      .then((res) => {
        console.log(res)
        this.products = res.data.data
      })
  }
  // methods: {
  //   openProduct (item) {
  //     console.log(123)
  //     this.router.push(`/product/${item.id}`)
  //   }
  // }
}
</script>
