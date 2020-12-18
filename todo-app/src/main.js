import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    listEdit(memo, index) {
      this.$emit('listEdit', memo, index)
    }
  }
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
