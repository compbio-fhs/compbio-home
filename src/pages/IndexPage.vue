<template>
  <q-page class="flex column justify-center">
    <video autoplay muted loop class="background-video">
      <source src="~assets/video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="container column">
      <div class="row justify-center text-center">
        <h1 class="col-xs-12">Computational Biology</h1>
        <h1 class="col-xs-12">@</h1>
        <h1 class="col-xs-12">University of Macau</h1>
      </div>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'IndexPage'
});
</script>

<style lang="scss" scoped>
.container {
  position: relative; /* To position content on top of the video */
  overflow: hidden; /* Prevent scrollbars */
  width: 100%; /* Ensure container takes up full width */
  height: 100%; /* Ensure container takes up full height */
}

.background-video {
  position: absolute; /* Position video in the background */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure video covers the entire viewport */
  z-index: -1; /* Place video behind other content */
  opacity: 0.5; /* Adjust the value from 0 to 1 for desired transparency */

}
</style>
