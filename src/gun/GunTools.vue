<script setup lang="ts">
import { GunRelay, UiLayer, GunGraph } from '../components'
import { reactive } from 'vue'

const show = reactive({
  graph: false,
  log: false,
  share: false,
})


</script>

<template lang="pug">
.flex.justify-end.relative.gap-3.items-center
  //- button.button.m-2(@click="show.log = !show.log")
  //-   .i-la-info-circle
  //-   .ml-2 Log
  button.button.flex.items-center(@click="show.graph = !show.graph")
    .i-mdi-graph-outline
  button.button.flex.items-center
    gun-relay


  //- ui-layer(:open="show.log" @close="show.log = false")
  //-   log-tree
  ui-layer(
    :open="show.graph" 
    @close="show.graph = false")
    gun-graph

</template>