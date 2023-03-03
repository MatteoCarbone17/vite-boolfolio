<script>

import AppHeader from './components/AppHeader.vue';

export default {
    name: 'App',
    components: {
      AppHeader,
    },
    data() {
        return {
            
        }
    },

    methods: {
    },

    created() {
    },
}

</script>

<template>
  <header>
    <AppHeader/>
    <router-view></router-view>
  </header>
</template>

<style lang="scss" >
@use './styles/general.scss' as * ;


</style>
