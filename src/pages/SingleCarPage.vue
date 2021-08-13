<template>
    <div>
        <h1>Car id {{ $route.params.id }}</h1>
        <hr>
        <button 
            @click="backToList"
            class="btn btn-sm btn-secondary mx-2">
            Back to list
        </button>
        <router-link 
            @click="backToList"
            tag="button" 
            :to="{ 
                name: 'CarFull', 
                params: { 
                    id: $route.params.id 
                },
                query: {
                    name: 'Mazda',
                    year: 2019
                },
                hash: '#hashElementId' 
            }"
            class="btn btn-sm btn-info mx-2">
            Full info
        </router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        backToList(){
            this.$router.push('/cars')
        }
    }
}
</script>

<style>

</style>