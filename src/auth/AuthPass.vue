<script setup lang="ts">
import { usePass } from '#composables'
const { pass } = usePass();

</script>

<template lang="pug">
.flex.flex-col.mt-4.bg-light-700.dark-bg-dark-400.p-4.m-2.shadow-lg.rounded-xl
  .flex.items-center.mb-4
    .mx-2
      .i-la-asterisk
    .px-1 Enter a passphrase to encrypt your key with
  .flex.items-center.px-4
    .ml-1.flex.flex-col.items-center
      .i-la-check.text-green-600.m-1(v-if="pass.safe?.enc")
    input.p-2.mx-4.rounded-xl.w-full.dark-bg-dark-200(
      v-model="pass.input",
      :type="pass.show ? 'text' : 'password'"
      :placeholder="`Your passphrase of ${pass.minLength} or more letters`"
    )
    button.button.items-center(
      v-if="pass.input.length >= pass.minLength",
      @click="pass.set()"
    ) 
      .i-la-check
      .ml-2 Set
    button.button.items-center(
      v-if="pass?.safe?.enc" 
      @click="pass.show = !pass.show"
      )
      .i-la-eye
      .ml-2 Show
</template>