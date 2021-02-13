<template>
  <!-- Page Content -->
  <div class="container">

    <!-- Page Heading/Breadcrumbs -->
    <h1 class="mt-4 mb-3">Category Blog</h1>

    <div class="row">
      <div class="col-lg-4 col-sm-6 portfolio-item" v-bind:key="blog.id" v-for="blog in categoryBlogs">
        <div class="card h-100">
          <a href="#"><img class="card-img-top" :src="'http://localhost/laravel-newspaper/public/admin/blog-image/' + blog.blog_image " alt=""></a>
          <div class="card-body">
            <h4 class="card-title"><a href="#" class="blog-title">{{ blog.blog_title }}</a></h4>
            <p class="card-text">{{ blog.blog_short_description }}</p>
          </div>
          <div class="card-footer">
            <router-link class="btn btn-primary btn-sm" :to="'/blog-details/' + blog.id">Read More</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /.container -->
</template>

<script>
export default {
  name: 'CategoryBlog',
  data () {
    return {
      categoryBlogs: []
    }
  },
  methods: {
    categoryBlog: function () {
      this.$http.get('http://localhost/laravel-newspaper/public/api/category-blog/' + this.$route.params.id).then((res) => {
        this.categoryBlogs = res.body
      })
    }
  },
  created () {
    this.categoryBlog()
  }
}
</script>

<style scoped>
.blog-title{
  text-decoration: none;
}

</style>
