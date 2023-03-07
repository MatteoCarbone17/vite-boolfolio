<script>
import AppProject from '../components/AppProject.vue';
import axios from 'axios';

export default {
    name:'SingleProject',
    components: {
     AppProject,
     
    },
    data() {
        return {
             project: '',
            loading: false,
            urlAddress: 'http://127.0.0.1:8000',
        }
    },
   // + `${this.$route.params.id }`
    methods: {
        getProject() {
            axios.get(this.urlAddress +`/api/projects/${this.$route.params.id}`, {
               
            })
                .then((response) => {
                    this.project = response.data.results;
                    console.warn(response.data.results);
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
        <AppProject  :isShow="true" :project="project"  />
    </div>
</template>

<style lang="scss">
    
</style>