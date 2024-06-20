<script setup>
import Footer from 'components/Footer.vue';
import data from '../data/publications.js';
import PublicationItem from 'components/PublicationItem.vue';


console.log(data);

</script>

<template>
  <q-page class="flex column bg-white">
    <div class="row bg-primary bgSection justify-center items-center text-center" style="height: 20vh">
      <h1>Our Publications</h1>
    </div>
    <div class="row margins">
      <PublicationItem v-for="article in data" :key="article.title" :article="article"/>
    </div>
    <Footer/>
  </q-page>
</template>

<style scoped>

.margins {
  max-width: 1000px;
  margin: auto;
}

</style>
