<template>
  <div v-if="products.length > 0" class="container-products row flex items-stretch content-center justify-start wrap q-gutter-lg">
    <q-card class="my-card col-md col-sm-5 col-xs-10 column flex justify-between q-pa-md no-wrap" flat bordered v-for="product in products" :key="product.id">
      <q-img :src="product.photo" @click="openProduct(product)" />

      <q-card-section @click="openProduct(product)" style="cursor:pointer;">
        <div class="text-overline text-orange-9">
          <q-chip  :color="product.stock > 0 ? 'teal-14' : 'dark'" text-color="white">
            {{product.stock > 0 ? "Disponible" : "Agotado"}}  
          </q-chip>
        </div>
        <div class="text-h5 q-mt-sm q-mb-xs short-text" :title="product.name"><strong>{{product.name}}</strong></div>
        <div class="text-h6 q-mt-sm q-mb-xs">${{product.price}}</div>
      </q-card-section>

      <q-separator />

      <ProductControls v-bind="{product}" />
    </q-card>
  </div>
  <div v-else class="flex column justify-center items-center content-center" style="min-height:500px;">
    <q-icon name="las la-frown" size="4rem"></q-icon>
    <h4>No se han encontrado productos para la categoría seleccionada.</h4>
  </div>


  <q-dialog v-model="card">
    <q-card class="my-card" style="width: 700px; max-width: 80vw !important;">
      <q-toolbar>
        <q-toolbar-title><span class="text-weight-bold">Detalle Producto</span></q-toolbar-title>
        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>
      <q-card-section horizontal>
        <q-img class="col-5" :src="selected_item.photo" />

        <q-card-section style="width:100%">
          <q-item-label caption>Nombre Producto</q-item-label>
          <q-item-label>{{selected_item.name}}</q-item-label>
          <q-space />
          <q-separator spaced />
          <q-item-label caption>Código</q-item-label>
          <q-item-label>{{selected_item.code}}</q-item-label>
          <q-separator spaced />
          <q-item-label caption>Precio</q-item-label>
          <q-item-label>${{selected_item.price}}</q-item-label>
          <q-separator spaced />
          <q-item-label>
            <ProductControls v-bind:product="selected_item" />
          </q-item-label>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <div class="q-pa-md text-justify">
          <q-item-label caption>Descripción</q-item-label>
          <q-item-label>{{selected_item.description}}</q-item-label>
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import ProductControls from 'src/components/ProductControls.vue'

export default {
  name: 'ProductsList',
  components:{
    ProductControls
  },
  props:['products'],
  data(){
    return{
      selected_item:{},
      card: false,
    }
  },
  methods:{
    openProduct(item){
      this.selected_item = item;
      this.card = !this.card;
    }
  }
}
</script>

<style>
  .my-card {
    max-width: 350px !important;
  }
  .short-text{
    width: auto;
    max-width: 300px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .container-products{
    width: 100%;
    font-family: 'Cairo', sans-serif;
  }
  .container-products .q-img {
    max-height: 200px;
    min-height: 200px;
    cursor: pointer;
}
</style>
