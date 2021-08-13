<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            v-for="(r, index) in menuItems"
            :key="index"
            exact
            exact-active-class="active"
            :to="r.path"
          >
            {{ r.menuTitle }}
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- <pre>{{$route}}</pre> -->
  </div>
</template>

<script>
export default {
  props: ["menuItemsArr"],
  computed: {
    menuItems: function () {
      return this.$router.options.routes.filter((i) => {
        return i.menuTitle;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-link.active {
  color: #17a2b8 !important;
  background: #fff;
}
</style>