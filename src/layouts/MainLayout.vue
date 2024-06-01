<template>
  <q-layout class="">
    <LandHeader/>
    <div class="flex column no-wrap" style="height: 100vh">
      <q-page-container>
        <router-view/>
      </q-page-container>
    </div>

  </q-layout>

</template>

<script>
import {defineComponent, onMounted} from 'vue';
import LandHeader from "components/LandHeader.vue";


export default defineComponent({
  name: 'MainLayout', components: {
    LandHeader
  },
  data() {
    return {
      drawerLeft: true
    }
  },
  setup() {
    return {}
  },
});
</script>
