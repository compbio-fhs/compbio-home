<script setup>
const props = defineProps({
  people: Object,
});
const picture = '~assets/femaleAvatar.png'
const picture2 = '~assets/femaleAvatar.png'
</script>

<template>
  <div class="column col-xs-12 col-md-6 q-pa-sm">
    <div class="row q-card--bordered rounded-borders text-center bg-primary text-white">
      <div class="col-xs-12 col-md-6 row items-center">
        <img :src="picture" alt="" class="rounded-borders" style="max-width: 25%; height: auto">
        <q-img :src="picture" alt="" class="rounded-borders" style="max-width: 25%; height: auto"/>
        <img :src="picture2" alt="" class="rounded-borders" style="max-width: 25%; height: auto">
        <q-img :src="picture2" alt="" class="rounded-borders" style="max-width: 25%; height: auto"/>
      </div>
      <div class="col-xs-12 col-md-6 q-py-md justify-evenly column">
        <div>
          <div class="text-h5">{{ props.people.name }}</div>
          <div class="text-subtitle2">{{ props.people.affiliation }}</div>
        </div>
        <div class="row justify-center">
          <q-btn v-if="props.people.page" outline label="See More" color="white" class="q-mt-md " :href="props.people.pageUrl" target="_blank"/>
        </div>
      </div>
    </div>
  </div>

</template>


<style scoped>

</style>
