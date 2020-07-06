<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div>
        <div class="row">
          <h1>Hola :)</h1>
        </div>
        <div class="row">
          <h2>
            Soy
            <span class="text-secondary museo">
              <router-link to="/sobremi">Felipe</router-link> </span
            >, desarrollador web.
          </h2>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex"
};
</script>

<style lang="scss" scoped>
a {
  color: $secondary;
}
</style>
