<template>
  <router-view />
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      res: {}
    }
  },
  mounted(){
    axios.get('/user/login').then(res => {
      this.res = res;
      console.log(res);
    });
  }
}
</script>

<style>
@import './assets/scss/reset.scss';
</style>
