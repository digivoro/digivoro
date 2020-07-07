<template>
  <div>
      <h1>Sobre mí.</h1>
        <!-- Intro -->
        <p class="text-about">Soy <span class="text-bold">Felipe Castro Richter</span>. Me formé como ingeniero industrial en la Universidad de Santiago de Chile, pero mis intereses me han acercado cada vez más al área del desarrollo de software, específicamente aquellas tecnologías que dan vida al internet.</p>
        <p class="text-about">Actualmente me encuentro trabajando en proyectos de manera independiente como <span class="text-bold">desarrollador web Front-End</span>.</p>
      <q-separator class="q-mb-lg" />
        <!-- Timeline -->
          <q-timeline :layout="layout" color="secondary">
            <q-timeline-entry heading>
              Mi recorrido como desarrollador
            </q-timeline-entry>
            <q-timeline-entry
              v-for="({ title, subtitle, color, icon, side, body },
              index) in desarrollos"
              :key="index"
              :title="title"
              :subtitle="subtitle"
              :color="color"
              :icon="icon"
              :side="side"
            >
              <span v-html="body"></span>
            </q-timeline-entry>
          </q-timeline>

  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SobreMi",
  computed: {
    layout() {
      return this.$q.screen.lt.sm
        ? "dense"
        : this.$q.screen.lt.md
        ? "comfortable"
        : "loose";
    },
    ...mapState(["desarrollos"])
  }
};
</script>

<style lang="scss" scoped>
.text-about {
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 3rem;
}
</style>
