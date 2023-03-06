<script>


export default {
    name: 'AppHeader',
    components: {

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

<template >
    <section class="row mb-4">
        <div class="col-12">
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link :to="{ name:'home'}" class="nav-link" :class="this.$route.name === 'home' ? 'active' : ' ' " aria-current="page" href="#">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{ name:'projectsList'}" class="nav-link" :class="this.$route.name === 'projects' ? 'active' : ' ' "  aria-current="page" href="#">Projects</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{ name:'AboutUs'}" class="nav-link" :class="this.$route.name === 'AboutUs' ? 'active' : ' ' "  aria-current="page" href="#">About-Us</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    </section>
</template>

<style scoped  lang="scss">

a{
    color: black;
    text-decoration: none;
}

</style>