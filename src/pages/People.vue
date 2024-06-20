<script setup>

import Footer from 'components/Footer.vue';
import PeopleItem from 'components/PeopleItem.vue';
import PeopleItemLarge from 'components/PeopleItemLarge.vue';
import people from '../data/people.js';

</script>

<template>
  <q-page class="flex column bg-white text-primary">
    <div class="row bg-primary bgSection justify-center items-center text-center" style="height: 20vh">
      <h1>Our People</h1>
    </div>
    <div class="margins ">
      <div class="row q-mt-lg q-mb-md">
        <PeopleItemLarge :people="people.chonLokLei"/>
      </div>
        <h4 class="text-weight-bolder q-mt-lg q-mb-md text-uppercase text-primary q-px-md">Current PhD Students</h4>
      <div class="row ">
        <PeopleItem v-for="people in people.phdStudents" :people="people"/>
      </div>
      <h4 class="text-weight-bolder q-mt-lg q-mb-md text-uppercase text-primary">Current Research Assistants</h4>
      <div class="row ">
        <PeopleItem v-for="people in people.currentResearchAssistants" :people="people"/>
      </div>

      <h4 class="text-weight-bolder q-mt-lg q-mb-md text-uppercase text-primary">Current Master Students</h4>
      <div class="row ">
        <PeopleItem v-for="people in people.currentMasterStudents" :people="people"/>
      </div>

      <h4 class="text-weight-bolder q-mt-lg q-mb-md text-uppercase text-primary">Past Projects Students</h4>
      <div class="row ">
        <PeopleItem v-for="people in people.pastProjectStudents" :people="people"/>
      </div>
    </div>

    <Footer/>
  </q-page>
</template>

<style scoped>

.margins {
  max-width: 1200px;
  margin: auto;
}

</style>
