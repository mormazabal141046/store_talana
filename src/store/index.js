import { store } from 'quasar/wrappers'
import axios from "axios";

import { createStore } from 'vuex'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */



export default store(function (/* { ssrContext } */) {
  const url_base = "http://sva.talana.com:8000/api/";
  const Store = createStore({
    state:{
      categories: [],
      products: [],
      cart:[],
      search:""
    },
    mutations:{
      setCategories(state,data){
        state.categories = data;
      },
      setProducts(state,data){
        state.products = data;
      },
      setCart(state,data){

        let index = state.cart.findIndex( item => item.id == data.id)
        if(index >= 0){
          state.cart[index].qty = state.cart[index].qty + data.qty
        }else{
          state.cart.push(data);
        }
      },
      setChangeQtyCartItem(state, product){
        // Si la acción es Aumentar 
        let index = state.cart.findIndex( item => item.id == product.id)
        if(product.action == 'increase'){
          state.cart[index].qty++;
        }
        // Si la acción es Disminuir
        if(product.action == 'decrease'){
          state.cart[index].qty--;
        }
      },
      searchProducts(state, search){

      
      }
    },
    actions:{
      getCategories({commit}){
        let endpoint = "product-category";
        let data = [];
        axios.get(url_base+endpoint).then( (response) => {
          data = response.data;
          commit('setCategories', data);          
        }).catch( (error) =>{
          console.log(error)
        });
      },
      getProducts({commit}, category=null){
        let endpoint = "product/";
        let data = [];
        axios.get(url_base+endpoint).then( (response) => {
          data = response.data;
          data = data.filter(item =>{
            return item.category.id == category;
          });
          commit('setProducts', data);          
        }).catch( (error) =>{
          console.log(error)
        });
      },
      addToCart({commit}, product){
        let data = {
          id: product.data.id,
          name: product.data.name,
          price: product.data.price,
          img: product.data.photo,
          stock: product.data.stock,
          qty:product.qty,
        }
        commit('setCart', data)
      },
      changeQtyCartItem({commit}, product){
        commit('setChangeQtyCartItem', product)
      }
      

    },
    getters:{
        
    },
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
