<template>
    <q-card-actions class="flex column justify-center items-center content-center qty-input" :title="product.stock == 0 ? 'Producto Agotado' : '' ">
        <q-item-label class="q-mb-sm" >Cantidad</q-item-label>
        <div class="flex row justify-center items-center content-center q-mb-md">
            <q-btn :disable="product.stock == 0" flat color="dark" icon="las la-plus-circle" @click="quantity++" />
            <q-input :disable="product.stock == 0" outlined v-model="quantity" dense input-style="max-width:25px;" type="number" min="1" />
            <q-btn :disable="quantity == 0 || product.stock == 0 ? true : false" flat color="dark" icon="las la-minus-circle" @click="quantity--" />
        </div>
        <q-btn :disable="product.stock == 0" rounded color="secondary" style="min-width:50px;" unelevated @click="addToCart({data: product, qty: quantity})">
            <q-icon right name="las la-cart-plus" />
            <div class="q-pr-md">Agregar</div>
        </q-btn>    
    </q-card-actions>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    name: "ProductControls",
    props:['product'],
    data(){
        return{
            quantity: 1
        }
    },
    methods:{
        ...mapActions(['addToCart'])
    }
}
</script>

<style>
    /* .qty-input > .q-placeholder{
        text-align: center;
    } */

</style>