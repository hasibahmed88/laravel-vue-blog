<template>
  <div>
    <h1 class="my-4">Latest News</h1>
    <!-- Marketing Icons Section -->
    <div class="row">
      <div class="col-lg-4 col-sm-6 portfolio-item" v-bind:key="blog.id" v-for="blog in latest">
        <div class="card h-100">
          <a href="#"><img class="card-img-top" :src="'http://localhost/laravel-newspaper/public/admin/blog-image/' + blog.blog_image" alt=""></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">{{ blog.blog_title }}</a>
            </h4>
            <p class="card-text">{{ blog.blog_short_description }}</p>
          </div>
          <div class="card-footer">
            <router-link class="btn btn-primary btn-sm" :to="'/blog-details/' + blog.id">Read More</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->

  </div>
</template>

<script>
export default {
  name: 'Latest',
  props: ['latest']
}
</script>

<style scoped>

</style>
