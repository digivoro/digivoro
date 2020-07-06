<template>
  <div>
    <h1>Contacto</h1>
    <q-separator />
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="datosFormulario.nombre"
        label="Tu nombre *"
        lazy-rules
        :rules="[
          val => (val && val.length > 0) || 'Ingresa un nombre por favor'
        ]"
      />

      <q-input
        filled
        type="email"
        v-model="datosFormulario.email"
        label="Correo electrónico"
        lazy-rules
        :rules="[val => (val !== null && val !== '') || 'Ingresa tu correo']"
      />
      <q-input
        filled
        type="text"
        v-model="datosFormulario.telefono"
        label="Tu teléfono"
        lazy-rules
      />
      <q-input
        filled
        type="textarea"
        v-model="datosFormulario.mensaje"
        label="Tu mensaje"
        lazy-rules
        :rules="[
          val => (val !== null && val !== '') || 'Por favor ingresa un mensaje'
        ]"
      />
      <q-toggle
        v-model="datosFormulario.llamarPorTelefono"
        label="¿Quieres que te llame por teléfono?"
      />

      <div>
        <q-btn label="Enviar" type="submit" color="primary" />
        <q-btn
          label="Borrar"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {};
  },

  methods: {
    ...mapMutations(["SET_FORMULARIO_CONTACTO"]),
    ...mapActions([]),

    onSubmit() {},
    onReset() {}
  },

  computed: {
    ...mapState(["formularioContacto"]),

    datosFormulario: {
      get() {
        return this.formularioContacto;
      },
      set(value) {
        this.SET_FORMULARIO_CONTACTO(value);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
