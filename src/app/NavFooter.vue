<script setup lang="ts">

</script>

<template lang="pug">
.flex.flex-col.bg-dark-50.bg-opacity-70
  .flex.flex-wrap.justify-center.z-200.text-2xl.w-full.gap-4.py-4
    a.btn(
      href="/docs/" 
      target="_blank")
      .i-la-book
      .bar
        .title Docs
        .subtitle Read and explore
    a.btn(
      href="https://www.npmjs.com/org/gun-vue" 
      target="_blank")
      .i-la-npm
      .bar
        .title Packages
        .subtitle Install and use
    a.btn(
      href="https://github.com/defucc/gun-vue" 
      target="_blank")
      .i-la-github
      .bar
        .title Repository
        .subtitle Contribute code
    a.btn(
      href="https://github.com/sponsors/davay42" 
      target="_blank" 
      title="Sponsor us")
      .i-la-money-bill-wave
      .bar
        .title Support
        .subtitle Sponsor us
    a.btn(
      href="https://web3portal.com/AQC7upIKykiM-nYJA6Ac-Q4PHRtYsHDVS1Ne-M2ELcZU2A/#/" 
      target="_blank"
      )
      .i-simple-icons-skynet
      .bar
        .title Skynet
        .subtitle Use the skApp
</template>

<style lang="postcss" scoped>
.btn {
  @apply flex gap-2 items-center transition bg-light-100/70 dark-bg-dark-700 py-1 px-2 rounded-lg hover-bg-light-100;
}

.title {
  @apply text-lg font-bold;
}

.subtitle {
  @apply text-xs;
}

.bar {
  @apply flex-1 pb-1 flex flex-col gap-0;
}
</style>