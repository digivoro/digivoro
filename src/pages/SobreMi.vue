<template>
  <div>
    <div class="row">
      <h1>Sobre mí.</h1>
      <q-separator />
      <q-timeline :layout="layout" color="secondary">
        <q-timeline-entry heading>
          Desarrollándome
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
