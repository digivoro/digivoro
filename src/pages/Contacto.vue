<template>
  <div>
    <h1>Contacto</h1>
    <q-separator class="q-mb-xl" />
    <div class="row">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md col-12 col-md-6 q-mx-auto"
      >
        <!-- Nombre -->
        <q-input
          filled
          v-model="nombre"
          label="Tu nombre *"
          lazy-rules
          :rules="[
            val => (val && val.length > 0) || 'Ingresa un nombre por favor'
          ]"
        />

        <!-- Email -->
        <q-input
          filled
          type="email"
          v-model="email"
          label="Correo electrónico *"
          lazy-rules
          :rules="[val => (val !== null && val !== '') || 'Ingresa tu correo']"
        />

        <!-- Telefono -->
        <div class="flex flex-center">
          <span>¿Quieres que te llame por teléfono?</span>
          <q-toggle
            color="secondary"
            v-model="llamarPorTelefono"
            :label="llamarPorTelefono ? `Sí` : `No`"
          />
        </div>
        <q-input
          filled
          type="text"
          v-model="telefono"
          label="Tu teléfono"
          lazy-rules
          v-if="llamarPorTelefono"
        />

        <!-- Mensaje -->
        <q-input
          filled
          type="textarea"
          v-model="mensaje"
          label="Tu mensaje *"
          lazy-rules
          :rules="[
            val =>
              (val !== null && val !== '') || 'Por favor ingresa un mensaje'
          ]"
        />

        <div>
          <q-btn label="Enviar" type="submit" color="secondary" />
          <q-btn
            label="Borrar"
            type="reset"
            color="secondary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { mapFields } from "src/helpers";

export default {
  data() {
    return {};
  },

  methods: {
    ...mapMutations(["SET_FORMULARIO_CONTACTO"]),
    ...mapActions(["enviarFormulario"]),

    onSubmit() {
      this.enviarFormulario();
    },
    onReset() {}
  },

  computed: {
    ...mapState(["formularioContacto"]),
    ...mapFields({
      fields: ["nombre", "email", "telefono", "llamarPorTelefono", "mensaje"],
      base: "formularioContacto",
      mutation: "SET_INPUT_CONTACTO"
    })

    // datosFormulario: {
    //   get() {
    //     return this.formularioContacto;
    //   },
    //   set(value) {
    //     this.SET_FORMULARIO_CONTACTO(value);
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped></style>
