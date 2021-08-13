<template>
    
    <b-container class="bv-example-row">
    <h1>Movies page</h1>
    <b-form-input 
        v-model="searchShow" 
        placeholder="Search movie"
        ></b-form-input>
    <hr>
    <b-card-group columns>
        <!-- :img-src="show.image.medium" -->
        <b-card  
            no-body
            v-for="show in filteredList" :key="show.id" 
            >
            <b-card-img-lazy :src="show.image.medium"></b-card-img-lazy>

            <b-card-body>
                <b-link :to="'/movie/'+show.id">
                    <b-card-title>{{show.name}}</b-card-title>
                </b-link>
                <b-card-sub-title class="mb-2">{{show.genres.join(' / ')}}</b-card-sub-title>
               <b-card-text v-html="show.summary"></b-card-text>
            </b-card-body>
            
            <template  v-slot:footer>
                <small class="text-muted">Detail</small>
            </template>
            
        </b-card>
    </b-card-group>
        
    </b-container>
    
</template>

<script>
export default {
    data() {
        return {
            shows: [],
            searchShow: '',
        };
    },
    mounted() {
        // b9lI6H5OQtT6sd4kbSXhXknUhrEvT5jZ
        this.axios
        .get('http://api.tvmaze.com/shows')
        .then(response => (this.shows = response.data));
    },
    computed: {
        filteredList() {
            return this.shows.filter(show => {
                let regex = new RegExp('(' + this.searchShow + ')', 'i');
                return show.name.match(regex);
            })
        }
    }

}
</script>

<style>

</style>