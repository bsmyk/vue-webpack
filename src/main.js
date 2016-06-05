import Vue from 'vue'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'

// import components
import Test from './components/Test.vue'

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(vueResource)
Vue.use(VueRouter)

// create router
const router = new VueRouter({
  saveScrollPosition: true
})

// setup router map
router.map({
  '/test': {
    component: Test
  }
})

const App = Vue.extend(require('./app.vue'))
router.start(App, '#app')
