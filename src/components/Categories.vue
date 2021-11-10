<template>
  <q-item clickable tag="a" :to="'/category/'+item.id+'/products'" @click="getProducts(item.id)">
    <q-item-section avatar>
      <q-icon name="las la-chevron-circle-right" />     
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ item.name }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'Categories',
  props:['item'],
  methods:{
    ...mapActions(['getProducts'])
  }
}
</script>
