<template>
    <div>
        <h4>car name: {{ $route.query.name }}</h4>
        <p>year: {{ year }}</p>

        <div class="scroll"></div>
        <h1 id="hashElementId" class="my-5 py-5">Hash Block</h1>
        <div class="scroll"></div>
    </div>
  
</template>

<script>
export default {
    computed:{
        year(){
            return this.$route.query.year
        }
    }
}
</script>

<style>
    .scroll{
        width: 100%;
        height: 1000px;
        background-color: #ccc;
    }
</style>