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
        </q-toolbar-title>

        <div class="lt-sm q-mr-sm">
          <q-toggle
            v-model="darkmode"
            checked-icon="nights_stay"
            unchecked-icon="wb_sunny"
            :color="color"
            keep-color
            size="lg"
          />
          <q-btn
            flat
            round
            dense
            icon="menu"
            @click="cajonAbierto = !cajonAbierto"
          />
        </div>
        <div class="row q-gutter-sm gt-xs">
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

    <!-- Cajon lateral -->
    <q-drawer v-model="cajonAbierto" class="lt-sm">
      <q-scroll-area style="height: calc(100% - 220px); margin-top: 220px;">
        <q-list padding>
          <q-item
            clickable
            v-ripple
            exact
            to="/"
            :active-class="
              ` text-bold ${darkmode ? 'text-secondary' : 'bg-secondary'}`
            "
          >
            <q-item-section avatar>
              <q-icon name="las la-home" />
            </q-item-section>
            <q-item-section>
              <span class="museo text-h6">Inicio</span>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            exact
            to="/sobremi"
            :active-class="
              ` text-bold ${darkmode ? 'text-secondary' : 'bg-secondary'}`
            "
          >
            <q-item-section avatar>
              <q-icon name="las la-address-card" />
            </q-item-section>
            <q-item-section>
              <span class="museo text-h6">
                Sobre mí
              </span>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            exact
            to="/trabajos"
            :active-class="
              ` text-bold ${darkmode ? 'text-secondary' : 'bg-secondary'}`
            "
          >
            <q-item-section avatar>
              <q-icon name="las la-briefcase" />
            </q-item-section>
            <q-item-section>
              <span class="museo text-h6">
                Mis trabajos
              </span>
            </q-item-section>
          </q-item>

          <q-space />
          <q-item>
            <q-item-section>
              <q-btn
                push
                color="secondary"
                stack
                icon="star"
                exact
                to="/contacto"
              >
                Contáctame
              </q-btn>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <q-img
        class="absolute-top"
        src="../statics/images/background.png"
        style="height: 220px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="128px" class="q-mb-sm">
            <img src="../statics/images/felipe.jpg" />
          </q-avatar>
          <div class="text-weight-bold text-h6 museo">
            Felipe Castro Richter
          </div>
          <div>@digivoro</div>
        </div>
      </q-img>
    </q-drawer>
    <q-page-container class="q-px-xl">
      <transition leave-active-class="animated slideOutLeft">
        <router-view class="q-mb-lg" />
      </transition>
    </q-page-container>
    <q-footer>
      <div class="flex flex-center q-py-lg">
        Felipe Castro Richter &copy; {{ new Date().getFullYear() }}
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  components: {},
  data() {
    return {
      cajonAbierto: false,
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
