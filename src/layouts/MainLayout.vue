<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal elevated class="bg-dark text-white">
      <q-toolbar class="q-py-sm">
        <q-toolbar-title class="flex  item-end">
          <q-img
            class="q-ml-lg q-my-sm"
            src="statics/images/logo_bg-dark.png"
            width="80px"
          />
          <!-- <p class="museo">digivoro</p> -->
        </q-toolbar-title>

        <div class="row q-gutter-sm">
          <q-btn no-caps flat label="Inicio" to="/" />
          <q-btn no-caps flat label="Sobre mí" to="/sobremi" />
          <q-btn no-caps flat label="Mis trabajos" to="/trabajos" />
          <q-btn
            color="secondary"
            no-caps
            push
            label="Contáctame"
            to="/contacto"
          />
          <q-toggle
            v-model="darkmode"
            checked-icon="nights_stay"
            unchecked-icon="wb_sunny"
            :color="color"
            keep-color
            size="lg"
          />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container class="q-px-xl">
      <transition leave-active-class="animated slideOutLeft">
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  components: {},
  data() {
    return {
      darkmode: false,
      color: "deep-purple"
    };
  },
  watch: {
    darkmode: function() {
      this.toggleToggler();
    }
  },
  methods: {
    toggleToggler() {
      this.$q.dark.toggle();
    }
  }
};
</script>

<style lang="scss" scoped>
.v-enter-active {
  animation: backInRight;
  animation-duration: 0.8s;
}
</style>
