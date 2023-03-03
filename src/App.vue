<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';

export default {
    name: 'App',
    components: {
      AppMain,
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
  <main class="">
    <AppMain />
    <router-view></router-view>
  </main>
</template>

<style lang="scss" >
@use './styles/general.scss' as * ;

</style>
