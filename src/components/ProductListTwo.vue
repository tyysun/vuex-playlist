<template>
  <div id="product-list-two">
    <h2>product-list-two</h2>
    <ul>
      <li v-for='(product,index) in saleProducts' :key='index'>
        <span class="name">{{product.name}}</span>
        <span class="price">${{product.price}}</span>
      </li>
    </ul>
    <button @click='reducePrice(4)'>商品减价</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
   computed:{
    ...mapGetters(['saleProducts'])
    // saleProducts(){
    //   return this.$store.getters.saleProducts;
    // }
  },
  methods: {
    ...mapActions(['reducePrice'])
    // reducePrice(amount){
      // this.$store.state.products.forEach(product => {
      //   product.price -= 1
      // })
      // this.$store.dispatch('reducePrice',amount)
    // }
  }

  
}
</script>

>
<style scoped>
#product-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-two ul{
    padding: 0;
    list-style-type: none;
}
#product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
</style>