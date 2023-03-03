<script>

import axios from 'axios';

export default {
    name: 'ProjectsList',
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

    created() {
        this.getProjects()
    },
}
</script>

<template >
    <div class="container">
        <div class="row">
            <div class="col-4" v-for="project in projects" >
                <div class="card mb-5 rounded-4 p-5">
                    <div class="card-header d-flex  rounded-4 bg-success text-light justify-content-between p-2">
                        <p>
                            Author : {{ project.author }}
                        </p>
                        <span>
                            <i class="fa-solid fa-envelopes-bulk"></i>
                        </span>
                    </div>
                    <div class="card-body  rounded-4 text-center">
                        <div>
                            <h5 class="card-title mt-2 mb-2">{{ project.title }}</h5>
                        </div>
                        <div>
                            <span class="badge rounded-pill text-bg-warning">#{{ project.type.name }}</span>
                        </div>
                        <div>
                             <span class="badge rounded-pill text-bg-warning m-1 " v-for="technology in project.technologies">#{{ technology.name }}</span> 
                        </div>
                        <div>
                            <p class="card-text p-3 text-">{{ project.content.substr(0,150) }}...</p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div>
                            <p class="card-text p-1">Project start: {{ project.project_date_start }}</p>
                        </div>
                        <div>
                            <p class="card-text p-1">Project end: {{ project.project_date_end }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss">

</style>