<template>
  <div class="wrapper">
    <video autoplay muted loop class="background-video" v-if="!$q.platform.is.mobile">
      <source src="~assets/video.mp4" type="video/mp4" >
    </video>
    <img src="~assets/video.png" class="background-video" v-else>

    <div class="absolute-center full-width">
      <div class="row justify-center text-center full-width">
        <div class="border q-pa-md">
          <h1 class="col-xs-12 feeling-passionate text-uppercase">Computational Biology</h1>
          <h1 class="col-xs-12 feeling-passionate text-uppercase">University of Macau</h1>
        </div>
      </div>
      <div class="row justify-center full-width">
        <h5 class="q-mt-xl text-uppercase text-center">Understanding the human biology <br>through computational methods</h5>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
}

.background-video {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.3;
}

.border {
  border-top: 4px solid white;
  border-bottom: 4px solid white;
}
</style>
