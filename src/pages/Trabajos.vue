<template>
  <q-page>
    <div class="row">
      <h1>Mis trabajos.</h1>
      <q-separator />
    </div>
    <div class="row items-start q-gutter-lg q-my-lg">
      <q-card
        :class="`my-card bg-primary`"
        bordered
        dark
        v-for="(trabajo, index) in trabajos"
        :key="index"
      >
        <q-card-section horizontal>
          <q-card-section vertical>
            <div class="text-h5">{{ trabajo.titulo }}</div>
            <div class="text-subtitle2">{{ trabajo.tipo }}</div>
            <div class="q-mt-lg">
              <q-chip
                v-for="tecnologia in trabajo.tecnologias"
                :key="tecnologia"
                color="dark"
                dark
              >
                {{ tecnologia }}
              </q-chip>
            </div>
          </q-card-section>

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
            <q-btn flat round color="secondary" icon="favorite">
              <q-tooltip
                content-class="bg-secondary"
                transition-show="rotate"
                transition-hide="rotate"
              >
                Me gusta
              </q-tooltip>
            </q-btn>
            <q-btn flat round color="seashell" icon="share">
              <q-tooltip
                content-class="bg-seashell"
                transition-show="rotate"
                transition-hide="rotate"
              >
                Compartir
              </q-tooltip>
            </q-btn>
            <q-btn
              flat
              round
              color="seashell"
              icon="link"
              type="a"
              :href="trabajo.enlace"
              target="_blank"
            >
              <q-tooltip
                content-class="bg-seashell"
                transition-show="rotate"
                transition-hide="rotate"
              >
                Visitar sitio
              </q-tooltip>
            </q-btn>
            <q-btn
              color="seashell"
              round
              class="bg-secondary"
              :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="expanded = !expanded"
            />
          </q-card-actions>
        </q-card-section>

        <q-card-section horizontal>
          <q-slide-transition>
            <div v-show="expanded">
              <q-card-section class="text-h6">
                Sobre este proyecto
              </q-card-section>
              <q-card-section class="text-subitle2">
                {{ trabajo.descripcion }}
              </q-card-section>
            </div>
          </q-slide-transition>
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
      expanded: false,
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
