import Vue from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import env from './env';

const mock = true;
if(mock){
  require('./mock/api');
}

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000; 
axios.defaults.baseURL = env.baseUrl;
console.log(env);
console.log(axios.defaults);

axios.interceptors.response.use(function(response){
  let res = response.data;
  if (res.status === 0) {
    return res.data;
  } else if (res.status === 10){
    window.location.href = '/#/login'
  } else {
    alert(res.msg);
  }
});

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
