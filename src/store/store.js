import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    products:[
      {name:'王多鱼',price:200},
      {name:'夏洛',price:130},
      {name:'巨齿鲨',price:160},
      {name:'蚁人',price:70}
    ]
  },
  getters: {
    saleProducts: (state) => {
      let saleProducts = state.products.map(product => {
        return {
          name: '##' + product.name + '**',
          price: product.price / 2
        };
      });
      return saleProducts;
    }

  },
  mutations:{
    reducePrice(state,payload){
      state.products.forEach(product => {
        product.price -= payload
      })
    }
  },
  actions:{
    reducePrice(context,payload){
      setTimeout(function(){
        context.commit('reducePrice',payload)
      },2000)
    }
  }
    
});