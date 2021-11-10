<template>
    <q-btn dense round flat icon="las la-shopping-cart">
        <q-badge v-if="cart.length > 0" color="red" floating rounded >{{cart.length}}</q-badge>
        <q-menu>
            <div class="row no-wrap q-pa-md" >
                <div class="column">
                    <div class="text-h6 q-mb-md">Resumen de Compra</div>

                    <q-list bordered padding style="overflow: auto; max-height:350px;" v-if="cart.length > 0">
                        <q-item v-for="product in cart" :key="product.id" >
                            <q-item-section avatar>
                                <q-avatar rounded>
                                    <img :src="product.img">
                                </q-avatar>
                            </q-item-section>

                            <q-item-section>
                                <q-item-label>{{product.name}}</q-item-label>
                                <q-item-label caption>Precio: ${{product.price}}</q-item-label>
                            </q-item-section>

                            <q-item-section side>
                                <CartControls v-bind="{product}" :key="product.id" />
                            </q-item-section>
                            <q-item-section side>
                                <q-item-label caption>Sub-Total</q-item-label>
                                <q-item-label>${{product.price * product.qty}}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                    <div class="col flex justify-center items-center content-center" v-else>
                         Su carrito está vacío
                    </div>

                    <div class="col flex justify-end items-center content-center q-mt-md">
                        <span style="font-size: 18px;"><strong> Total: {{total_cart}} </strong></span>
                    </div>
                </div>
            </div>
        
        </q-menu>
    </q-btn>
</template>

<script>
import {mapState} from 'vuex'
import CartControls from 'src/components/CartControls.vue'

export default {
    name: "CartList",
    components:{
        CartControls
    },
    data(){
        return{
            total_list:0
        }
    },
    computed:{
        ...mapState(['cart']),
        total_cart:{
            get(){
                this.total_list = 0; 
                let self = this;
                self.cart.forEach( item => {
                    self.total_list = self.total_list + (item.qty * item.price)
                });
                return self.total_list;
            }
        }
    },
}
</script>

<style>

</style>