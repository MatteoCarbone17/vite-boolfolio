<script>
import axios from 'axios';
import AppProject from '../components/AppProject.vue';


export default {
    name:'ProjectsList',
    components: {
      AppProject,
     
    },
    data() {
        return {
            projects: [],
            loading: false,
            urlAddress: 'http://127.0.0.1:8000/api/projects',
        }
    },
    methods: {
        getProjects() {
            axios.get(this.urlAddress, {
                params: {
                   
                }
            })
                .then((response) => {
                    this.projects = response.data.results.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },
    mounted() {
       
    },

    created() {
        this.getProjects()
    },
}

</script>

<template>
    <section class="container">
        <div>
            <div class="row mb-4">
                <div class="col">
                    <h1 class="text-center">
                        Projects List 
                    </h1>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col">
                    <AppProject v-for="project in projects" :project="project"  />
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss">
    
</style>