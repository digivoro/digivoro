<template>
  <q-page>
    <div class="row">
      <h1>Mis trabajos.</h1>
      <q-separator class="q-mb-xl" />
    </div>
    <div class="row q-col-gutter-lg">
      <div
        class="col-12 col-md-6"
        v-for="(trabajo, index) in trabajos"
        :key="index"
      >
        <q-card class=" my-card bg-primary q-py-xs" bordered dark>
          <q-card-section horizontal>
            <q-card-section vertical>
              <div class="text-h5">{{ trabajo.titulo }}</div>
              <q-separator dark class="q-mb-lg"></q-separator>
              <div class="text-subtitle2">{{ trabajo.tipo }}</div>
              <div class="q-mt-lg">
                <q-chip
                  v-for="tecnologia in trabajo.tecnologias"
                  :key="tecnologia"
                  color="secondary"
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
              style="height:300px; width: 100%"
            >
              <q-img :src="trabajo.imagen" />
            </q-scroll-area>

            <q-card-actions vertical class="justify-around q-px-md">
              <!-- Like button -->
              <!-- <q-btn flat round color="secondary" icon="favorite">
              <q-tooltip
                content-class="bg-secondary"
                transition-show="rotate"
                transition-hide="rotate"
              >
                Me gusta
              </q-tooltip>
            </q-btn> -->

              <!-- Share button -->
              <!-- <q-btn flat round color="seashell" icon="share">
              <q-tooltip
                content-class="bg-seashell"
                transition-show="rotate"
                transition-hide="rotate"
              >
                Compartir
              </q-tooltip>
            </q-btn> -->

              <!-- Link button -->
              <q-btn
                v-if="trabajo.enlaces.web"
                flat
                round
                color="seashell"
                icon="link"
                type="a"
                :href="trabajo.enlaces.web"
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

              <!-- Github -->
              <q-btn
                v-if="trabajo.enlaces.github"
                flat
                round
                color="seashell"
                icon="lab la-github"
                type="a"
                :href="trabajo.enlaces.github"
                target="_blank"
              >
                <q-tooltip
                  content-class="bg-seashell"
                  transition-show="rotate"
                  transition-hide="rotate"
                >
                  Repositorio en Github
                </q-tooltip>
              </q-btn>

              <!-- More button -->
              <q-btn
                color="seashell"
                round
                class="bg-secondary"
                :icon="
                  trabajo.expandido
                    ? 'keyboard_arrow_up'
                    : 'keyboard_arrow_down'
                "
                @click="trabajo.expandido = !trabajo.expandido"
              >
                <q-tooltip
                  content-class="bg-seashell"
                  transition-show="rotate"
                  transition-hide="rotate"
                >
                  <span>{{ trabajo.expandido ? "Ver menos" : "Ver más" }}</span>
                </q-tooltip>
              </q-btn>
            </q-card-actions>
          </q-card-section>

          <q-card-section horizontal>
            <q-slide-transition>
              <div v-show="trabajo.expandido">
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
.imagen-trabajo {
  filter: sepia();
}
</style>
