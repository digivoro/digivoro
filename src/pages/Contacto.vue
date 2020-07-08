<template>
  <div>
    <h1>Contacto</h1>
    <q-separator class="q-mb-xl" />
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-md-5">
        <q-card dark class="q-mb-xl info-contacto bg-dark">
          <q-card-section>
            <q-list>
              <q-item>
                <q-item-section avatar>
                  <q-img src="../statics/images/felipe.jpg"></q-img>
                </q-item-section>
                <q-item-section avatar>
                  <span class="museo text-h6">Felipe Castro Richter</span>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar>
                  <q-icon name="las la-phone" size="lg"></q-icon>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6">+569 81605805</span>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon name="las la-envelope" size="lg"></q-icon>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6">felipe@digivoro.com</span>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-7">
        <q-form @submit="onSubmit" @reset="onReset">
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
            :rules="[
              val => (val !== null && val !== '') || 'Ingresa tu correo'
            ]"
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
    ...mapMutations(["SET_FORMULARIO_CONTACTO", "BORRAR_FORMULARIO"]),
    ...mapActions(["enviarFormulario"]),

    onSubmit() {
      this.enviarFormulario();
    },
    onReset() {
      this.BORRAR_FORMULARIO();
    }
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

<style lang="scss" scoped>
.info-contacto {
  border-bottom: 2px solid $secondary;
}
</style>
