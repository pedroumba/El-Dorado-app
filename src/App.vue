
<template>
  <div id="app">
    <div class="container">
      <!--Row donde va el titulo y logo-->
      <div class="row">
        <div class="col-12 d-flex justify-content-center pb-2 pt-3">
          <h3>El Dorado</h3>
        </div>
        <hr />
      </div>

      <!-- Componentes -->
      <div class="row">
        <!--Menu de navegación-->
        <div class="col-auto list-group d-flex pe-4">
          <small style="text-align: center; color: darkgray">Menu</small>

          <a
            v-if="this.$route.name == 'prestamos'"
            class="list-group-item -group-item-action active"
          >
            <router-link to="/">
              <strong style="color: white">Prestamos</strong>
            </router-link>
          </a>
          <a v-else class="list-group-item list-group-item-action">
            <router-link to="/">Prestamos</router-link>
          </a>

          <a
            v-if="this.$route.name == 'libros'"
            class="list-group-item list-group-item-action active"
          >
            <router-link to="/libros">
              <strong style="color: white">Libros</strong>
            </router-link>
          </a>
          <a v-else class="list-group-item list-group-item-action">
            <router-link to="/libros">Libros</router-link>
          </a>

          <a
            v-if="this.$route.name == 'usuarios'"
            class="list-group-item list-group-item-action active"
          >
            <router-link to="/usuarios">
              <strong style="color: white">Usuarios</strong>
            </router-link>
          </a>
          <a v-else class="list-group-item list-group-item-action">
            <router-link to="/usuarios">Usuarios</router-link>
          </a>
        </div>

        <!-- Componentes -->
        <div class="col">
          <router-view />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      $test: "prueba vg",
    };
  },
  methods: {
    handleSubmitForm() {},
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

#cent {
  text-align: center;
}
</style>
