<template>
    <div>
        this is cart
        <nav-header></nav-header>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import NavHeader from '../components/NavHeader.vue'
import NavFooter from '../components/NavFooter.vue'

export default {
        name: 'index',
        components:{
            NavHeader,
            NavFooter
        }
}
</script>
