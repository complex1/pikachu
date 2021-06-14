<template>
  <div class="controller p-4 mb-4 round bg-ele-1">
    <div class="v-center space-between">
      <h3 class="tx-x-lg tx-light pointer" @click="open = !open">{{controller.name}}</h3>
      <p class="tx-small">{{controller.description}}</p>
    </div>
    <div v-show="open">
      <api-card v-for="api in controller.apis" :key="api.id" :api="api" />
    </div>
  </div>
</template>

<script>
import apiCard from './apiCard.vue'
export default {
  components: { apiCard },
  name: 'controllerCard',
  props: {
    controller: Object
  },
  data: () => ({
    open: false
  })
}
</script>

<style lang="scss" scoped>
@import '@var';
.controller {
  background: rgba($white, 0.4);
  h3:hover {
    text-decoration: underline;
    color: $opt-2;
  }
}
</style>