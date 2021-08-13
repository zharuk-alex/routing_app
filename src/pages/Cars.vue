<template>
  <b-container>
      <h1>Cars page</h1>
      <hr>
      <b-row>
        <b-list-group class="col-5 mx-auto">
            <b-list-group-item
                v-for="(car) in 5"
                :key="car"
                :to="'/car/'+car"
            >
                Car {{car}}
            </b-list-group-item>
        </b-list-group>
      </b-row>
  </b-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .list-group{
    text-align: left;
  }
</style>