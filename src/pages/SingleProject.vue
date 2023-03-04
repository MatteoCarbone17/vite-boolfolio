<script>
import axios from 'axios';
import AppProject from '../components/AppProject.vue';

export default {
    name:'SingleProject',
    components: {
     AppProject,
     
    },
    data() {
        return {
            project: null,
            loading: false,
            urlAddress: 'http://127.0.0.1:8000/api/projects',
        }
    },
   // + `${this.$route.params.id }`
    methods: {
        getProject() {
            axios.get(this.urlAddress +`${this.$route.params.id}`, {
                params: {
                  
                }
            })
                .then((response) => {
                    this.projects = response.data.results.data;
                    console.log(this.response);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },
    mounted() {
       
    },

    created() {
        this.getProject()
    },
}

</script>

<template>
    <div class="row">
        <h1>
            Project :  {{ this.$route.params.id}}
        </h1>
    </div>
    <div class="row">
        <AppProject :project="project"/>
    </div>
</template>

<style lang="scss">
    
</style>