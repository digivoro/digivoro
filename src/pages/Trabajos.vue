<template>
  <q-page>
    <div class="row">
      <h1>Mis trabajos.</h1>
      <q-separator />
    </div>
    <div class="row items-start q-gutter-lg q-my-lg">
      <q-card
        class="my-card"
        bordered
        v-for="(trabajo, index) in trabajos"
        :key="index"
      >
        <q-card-section horizontal>
          <q-card-section vertical>
            <div class="text-h6">{{ trabajo.titulo }}</div>
            <div class="text-subtitle2">{{ trabajo.tipo }}</div>
          </q-card-section>
          <!-- <q-parallax :height="300" :speed="1">
            <template v-slot:media>
              <q-img :src="trabajo.imagen" />
            </template>
          </q-parallax> -->

          <q-scroll-area
            dark
            :thumb-style="thumbStyle"
            :bar-style="barStyle"
            class="bg-dark text-white rounded-borders"
            style="height:300px; width: 100%;"
          >
            <q-img :src="trabajo.imagen" />
          </q-scroll-area>

          <q-card-actions vertical class="justify-around q-px-md">
            <q-btn flat round color="red" icon="favorite">
              <q-tooltip
                content-class="bg-red"
                transition-show="rotate"
                transition-hide="rotate"
              >
                Me gusta
              </q-tooltip>
            </q-btn>
            <q-btn flat round color="primary" icon="share">
              <q-tooltip
                content-class="bg-primary"
                transition-show="rotate"
                transition-hide="rotate"
              >
                Compartir
              </q-tooltip>
            </q-btn>
            <q-btn
              flat
              round
              color="purple"
              icon="link"
              type="a"
              :href="trabajo.enlace"
              target="_blank"
            >
              <q-tooltip
                content-class="bg-purple"
                transition-show="rotate"
                transition-hide="rotate"
              >
                Ir al sitio
              </q-tooltip>
            </q-btn>
          </q-card-actions>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Trabajos",
  computed: mapState(["trabajos"]),
  data: function() {
    return {
      thumbStyle: {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "crimson",
        width: "5px",
        opacity: 0.75
      },

      barStyle: {
        right: "2px",
        borderRadius: "9px",
        backgroundColor: "crimson",
        width: "9px",
        opacity: 0.2
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
}
.imagen-trabajo {
  filter: sepia();
}
</style>
