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
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link :to="{ name:'home'}" class="nav-link" :class="this.$route.name === 'home' ? 'active' : ' ' " aria-current="page" href="#">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{ name:'projects'}" class="nav-link" :class="this.$route.name === 'projects' ? 'active' : ' ' "  aria-current="page" href="#">Projects</router-link>
                            </li>
                            <!-- <li class="nav-item">
                                <router-link :to="home" class="nav-link active" aria-current="page" href="#">Single Project</router-link>
                            </li> -->
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