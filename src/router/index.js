import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home'
import About from '../components/about/About'
import Service from '../components/service/Service'
import Contact from '../components/contact/Contact'
import VueResource from 'vue-resource'
import CategoryBlog from '../components/category/CategoryBlog'
import BlogDetails from '../components/blog/BlogDetails'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category-blog/:id',
      name: 'CategoryBlog',
      component: CategoryBlog
    },
    {
      path: '/blog-details/:id',
      name: 'BlogDetails',
      component: BlogDetails
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],
  mode: 'history'
})
