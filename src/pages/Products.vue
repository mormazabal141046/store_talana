<template>
  <q-page class="flex column justify-start items-start content-center q-pa-lg">
      <div class="column flex justify-center items-center content-center wrap container-page w-100">
        <!-- Hola {{ $route.params.id}} -->
        <ProductsList v-bind="{products}"/>
    </div>
  </q-page>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import ProductsList from 'src/components/ProductsList.vue'

export default {
  name: 'Products',
  components:{
    ProductsList    
  },
  data(){
    return{
      expanded: false,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  mounted(){
    this.getProducts(this.$route.params.id);
  },
  computed:{
    ...mapState(['products'])
  },
  methods:{
    ...mapActions(['getProducts']),
  }
}
</script>
<style>
  .container-page{
    width: 100%;
  }
  input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .btn-fixed-width{
    width:120px;
  }
</style>