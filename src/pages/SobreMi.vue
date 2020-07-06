<template>
  <div>
    <div class="row">
      <h1>Sobre mí.</h1>
      <q-separator class="q-mb-lg" />
      <div class="row">
        <div class="col-12 col-md-6">
          <q-card>
            <q-card-section title>
              Hola
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-6">
          <q-timeline :layout="layout" color="secondary">
            <q-timeline-entry heading>
              Mi recorrido
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
      </div>
    </div>
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

<style lang="scss" scoped></style>
