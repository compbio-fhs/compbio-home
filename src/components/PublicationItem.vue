<script setup>
const props = defineProps({
  article: Object,
});

</script>

<template>
  <div class="row q-mt-md rounded-borders full-width">
    <div class="col-12 column q-gutter-y-sm q-pa-md">
      <p class="small-text text-primary">{{ props.article.title }}, {{ props.article.year }}</p>
      <p class="text-subtitle text-primary">{{ props.article.authors }}</p>
    </div>
  </div>


</template>

<style scoped>


</style>
