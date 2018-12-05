<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import settings from './config/settings';

export default {
  name: 'App',
  created() {
    console.log('apuntando a ', settings.api);
  }
};
</script>

<style>
  .q-if-label{
    color: white !important;
  }
  .q-input-target{
    color: white !important;
  }
</style>
