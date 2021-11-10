<template>
  <q-layout view="hHh LpR lfr">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer"/>
        <q-avatar>
              <img alt="Store Talana logo" src="~assets/images/logo-store.png">
        </q-avatar>
        <q-toolbar-title>Talana Store</q-toolbar-title>
        <div>
          <q-input rounded standout="bg-blue-10 text-white label-white rounded " dense v-model="search" placeholder="Buscar productos o categorias" label-color="blue-1" bg-color="blue-9" clearable  color="blue-1" input-style="color:white; min-width:400px;" class="q-mr-md">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

        <div>
          <CartList />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Categorias
        </q-item-label>
        <Categories v-for="item in categories" :key="item.id" v-bind="{item}" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Categories from 'src/components/Categories.vue'
import CartList from 'src/components/CartList.vue'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'MainLayout',

  components: {
    Categories,CartList
  },

  data () {
    return {
      leftDrawerOpen: false,
    }
  },
  created(){
    this.getCategories();
  },
  computed:{
    ...mapState(['categories','cart']),
    search:{
      set(data){
          this.$store.commit('searchProducts', {value: data})
      },
      get(){ return this.search }
    }
  },
  methods:{
    ...mapActions(['getCategories']),
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
}
</script>
