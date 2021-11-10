<template>
  <q-page class="flex column justify-start items-start content-center q-pa-lg">
      <div class="column flex justify-center items-center content-center wrap container-page w-100">
        <!-- Hola {{ $route.params.id}} -->
        <!-- Categoría: {{category_active.name}} -->
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
      expanded: false    
      }
  },
  mounted(){
    this.getProducts(this.$route.params.id);
    this.getCategoryActive(this.$route.params.id)
  },
  computed:{
    ...mapState(['products','category_active'])
  },
  methods:{
    ...mapActions(['getProducts','getCategoryActive']),
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