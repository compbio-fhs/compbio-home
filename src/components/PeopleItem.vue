<script setup>
const props = defineProps({
  people: Object,
});
</script>

<template>
  <div class="column col-xs-12 col-md-3 q-pa-sm">
    <div class="q-card--bordered rounded-borders text-center bg-primary text-white col-grow">
      <q-img :src="`/${props.people.image}`" class="rounded-borders" style="width: 100%; height: 200px;"/>
      <div class="q-py-sm">
        <div class="text-h6">{{ props.people.name }}</div>
        <div class="text-subtitle2">{{ props.people.affiliation }}</div>
        <q-btn v-if="props.people.page" outline label="See More" color="white" class="q-mt-md col-6" :href="props.people.pageUrl" target="_blank"/>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
