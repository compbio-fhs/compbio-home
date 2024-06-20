<template>
  <q-page class="flex column">
    <div class="row" style="height: 100vh">
      <LandHome/>
    </div>
    <div class="column">
      <Mission/>
      <Sections/>
      <Footer/>
    </div>
  </q-page>
</template>

<script setup>
import LandHome from "components/LandHome.vue";
import Sections from "components/Sections.vue";
import Mission from "components/Mission.vue";
import Footer from "components/Footer.vue";



</script>

<style lang="scss" scoped>

</style>
