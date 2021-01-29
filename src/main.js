import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BuyModalComponent from '@/components/Shared/BuyModal'
import { firebase } from '@firebase/app'
import '@firebase/auth'
import vuetify from './plugins/vuetify';
import colors from 'vuetify/es5/util/colors'
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken1
  }
})

Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyDd1bUAIIf2augpYBRHk4JvVq2DWuXLZN8",
      authDomain: "it-ads-a5cd5.firebaseapp.com",
      projectId: "it-ads-a5cd5",
      storageBucket: "it-ads-a5cd5.appspot.com",
      messagingSenderId: "660908742335",
      appId: "1:660908742335:web:e8ebe2b9662338b259580a",
      measurementId: "G-S4GHVZ4CR7"
    })

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')

    firebase.analytics()
  }
}).$mount('#app')
