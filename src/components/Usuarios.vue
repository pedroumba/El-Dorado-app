<template>
  <div>
    <!-- Crear Usuarios -->
    <div class="row">
      <form @submit.prevent="handleSubmitForm">
        <h5>Crear Usuario</h5>
        <div class="row pb-1">
          <div class="col-8">
            <input
              type="text"
              id="inNombre"
              placeholder="Nombres del Usuario"
              v-model="nuevoUsuario.nombres"
              class="form-control"
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <input
              type="text"
              id="inApellido"
              placeholder="Apellidos del Usuario"
              v-model="nuevoUsuario.apellidos"
              class="form-control"
              required
            />
          </div>
          <div class="col">
            <button class="btn btn-primary" :disabled="bloquear">Crear</button>
          </div>
        </div>
        <hr />
      </form>
    </div>

    <!-- Alertas -->
    <div class="alert alert-danger" role="alert" v-if="this.mensajeError != ''">
      {{mensajeError}}
    </div>

    <!-- Lista de Usuarios -->
    <div class="row">
      <h5>Lista de Usuarios</h5>
      <div class="row pb-2">
        <div class="col-6">
          <input
            type="text"
            id="inFiltro"
            placeholder="Todos"
            v-model="filtro"
            class="form-control"
          />
        </div>
        <div class="col-auto px-1">
          <button class="btn btn-primary" :disabled="bloquear">Aplicar</button>
        </div>
        <div class="col-auto px-1">
          <button class="btn btn-secondary" :disabled="bloquear">Limpiar</button>
        </div>
      </div>
      <div class="row ps-4 pe-1">
        <table class="table table-sm table-bordered">
          <thead>
            <tr id="cent">
              <th scope="col">Id</th>
              <th scope="col">Nombres</th>
              <th scope="col">Apelidos</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in Usuarios" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.nombres }}</td>
              <td>{{ item.apellidos }}</td>
              <td id="cent">
                <button
                  @click.prevent="editarUsuario(item.id, item.nombres)"
                  class="btn btn-outline-success btn-sm p-1"
                >
                  Editar
                </button>
                <button
                  @click.prevent="borrarUsuario(item.id, item.nombres)"
                  class="btn btn-outline-danger btn-sm p-1"
                >
                  Borrar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      nuevoUsuario: {
        nombres: "",
        apellidos: "",
      },
      filtro: "",
      mensajeError: "",
      bloquear: true,
      Usuarios: [],
      usuarioBorrar: {
        id: "",
        nombres: ""
      },
    };
  },

  created() {
    console.log('Listando Usuarios');
    this.listarUsuarios();
  },

  methods: {
    handleSubmitForm() {  // Crear Usuario
      this.bloquear = true;

      let apiURL =
        "http://localhost:5000/usuarios/crear?nombres=" +
        encodeURIComponent(this.nuevoUsuario.nombres) +
        "&apellidos=" +
        encodeURIComponent(this.nuevoUsuario.apellidos);
      console.log(apiURL);

      axios
        .get(apiURL)
        .then((res) => {
          console.log(res.data);
          this.listarUsuarios();
        })
        .catch((error) => {
          console.log(error);
          this.mensajeError = "Error creando nuevo Usuario, revice el Nombre y Apellidos e intentelo numevamente.";
          this.bloquear = false;
        });
    },

    listarUsuarios() {
      axios
        .get('http://localhost:5000/usuarios/')
        .then((res) => {
          this.Usuarios = res.data.reverse();
          // console.log(JSON.stringify(this.Usuarios));
          this.mensajeError = ""
          this.bloquear = false;
        })
        .catch((error) => {
          console.log(error);
          this.mensajeError = "No se puede traer la lista de Usuarios."
        });
      
      this.nuevoUsuario.nombres = "";
      this.nuevoUsuario.apellidos = "";
      this.filtro = "";
    },

    borrarUsuario(id, nombre) {
      console.log("Borrando " + nombre);
      axios
        .get('http://localhost:5000/usuarios/borrar?id=' + id)
        .then((res) => {
          console.log(res.data);
          this.listarUsuarios();
        })
        .catch((error) => {
          console.log(error);
          this.mensajeError = "No se borro Usuario " + nombre
        });
    },

    editarUsuario(id, nombres) {
      alert("No Implementado! (" + id + " - " + nombres + ")");
    },
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