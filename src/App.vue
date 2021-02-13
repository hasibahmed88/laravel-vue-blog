<template>
  <div id="app">
    <!-- Navigation -->
    <Header v-bind:categories="categories"></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/includes/Header'
import Footer from './components/includes/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      categories: []
    }
  },
  methods: {
    allCategories: function () {
      this.$http.get('http://localhost/laravel-newspaper/public/api/published-categories').then((res) => {
        this.categories = res.body
      })
    }
  },
  created () {
    this.allCategories()
  }
}
</script>

<style>

</style>
