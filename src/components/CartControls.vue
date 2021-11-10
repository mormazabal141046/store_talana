<template>
    <q-card-actions class="flex column justify-center items-center content-center" :title="product.stock == 0 ? 'Producto Agotado' : '' ">
      <q-item-label class="q-mb-sm" caption>Cantidad</q-item-label>
      <div class="flex row justify-center items-center content-center q-mb-md">
        <q-btn :disable="product.stock == 0" flat color="dark" icon="las la-plus-circle" @click="changeQtyCartItem({id: product.id, action:'increase'})" />
        <q-input readonly outlined v-model="product.qty" dense input-style="max-width:25px;" type="number" min="1" />
        <q-btn :disable="quantity == 0 || product.stock == 0 ? true : false" flat color="dark" icon="las la-minus-circle" @click="changeQtyCartItem({id: product.id, action:'decrease'})" />
      </div>
    </q-card-actions>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import { Notify } from 'quasar'

export default {
    name: "CartControls",
    props:['product'],
    data(){
        return{
            quantity: 1
        }
    },

    methods:{
        ...mapActions(['changeQtyCartItem'])
    }
}
</script>

<style>
.q-placeholder{
    text-align: center;
}

</style>