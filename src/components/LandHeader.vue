<template><q-header reveal elevated style=" width: 100vw">
  <q-toolbar class="flex justify-between bg-primary text-white">
    <router-link to="/">
      <q-toolbar-title class="row">
        <div class="row items-baseline justify-start">
          <div class="font-h65 text-white" style="flex: 1">Computational Biology</div>
        </div>
      </q-toolbar-title>
    </router-link>
    <div>
    </div>
    <div class="flex items-end gt-sm q-mr-lg">
      <q-btn flat to="/people" label="People" />
      <q-btn flat to="/publications" label="Publications" />
      <q-btn-dropdown flat :label="$t('projects')" content-class="bg-primary text-white">
        <q-list>
          <q-item clickable to="/vpatch">
            <q-item-section>{{ $t('vpatch') }}</q-item-section>
          </q-item>
          <q-item clickable to="/dlrpmds/">
            <q-item-section>DL RP MDS</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-btn flat to="/github" target="_blank" :label="$t('github')" />
      <q-btn flat to="/chonloklei" target="_blank" :label="$t('contact')" />
    </div>

    <div class="lt-md">
      <q-btn-dropdown dropdown-icon="change_history">
        <q-list class="bg-primary text-white">

          <q-item clickable v-close-popup to="/people">
            <q-item-section>
              <q-item-label>People</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup to="/publications">
            <q-item-section>
              <q-item-label>Publications</q-item-label>
            </q-item-section>
          </q-item>


          <q-item clickable v-close-popup to="/vpatch">
            <q-item-section>
              <q-item-label>{{ $t('vpatch') }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup to="/dlrpmds">
            <q-item-section>
              <q-item-label>DL RP MDS</q-item-label>
            </q-item-section>
          </q-item>


          <q-item clickable v-close-popup to="/github">
            <q-item-section>
              <q-item-label>{{ $t('github') }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup to="/contact">
            <q-item-section>
              <q-item-label>{{ $t('contact') }}</q-item-label>
            </q-item-section>
          </q-item>

        </q-list>
      </q-btn-dropdown>
    </div>

  </q-toolbar>
</q-header></template>

<script>
  export default {
    name: "LandHeader",
  }
</script>

<style scoped>
a {
  text-decoration: none;
}

.q-item.q-router-link--active,
.q-item--active {
  color: white;
}
</style>
