<script setup>
const props = defineProps({
  people: Object,
});
</script>

<template>
  <div class="column col-xs-12 col-md-6 q-pa-sm">
  <div class="row q-card--bordered rounded-borders text-center bg-primary text-white">
      <div class="col-xs-12 col-md-6 row items-center bg-white">
        <img :src="props.people.image" v-if="props.people.image" alt="" class="rounded-borders" style="max-width: 100%; height: auto">
        <q-img src="~/assets/maleAvatar.png" v-else-if="props.people.avatar === 'maleAvatar'" alt="" class="rounded-borders" style="height: 100px" fit="scale-down" />
        <q-img src="~/assets/femaleAvatar.png" v-else-if="props.people.avatar === 'femaleAvatar'" alt="" class="rounded-borders" style="height: 100px" fit="scale-down" />
      </div>
      <div class="col-xs-12 col-md-6 q-py-md justify-evenly column">
        <div>
          <div class="text-h5">{{ props.people.name }}</div>
          <div class="text-subtitle2">{{ props.people.affiliation }}</div>
        </div>
        <div class="row justify-center" v-if="props.people.pageUrl">
          <q-btn v-if="props.people.internalPage" outline label="See More" color="white" class="q-mt-md col-6" :to="`/people/${props.people.pageUrl}`" />
          <q-btn v-else outline label="See More" color="white" class="q-mt-md col-6" :href="props.people.pageUrl" target="_blank"/>
        </div>
      </div>
  </div>
  </div>

</template>

<style scoped>

</style>
