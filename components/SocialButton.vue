<template>
  <component :is="href ? 'a' : 'button'"
    :href="href"
    @click="$emit('click')"
    class="bla bg-white hover:bg-opacity-80 justify-center text-black w-full px-5 py-2 rounded flex items-center gap-3">
    <Icon :name="icon" />
    <p>{{ text }}<span v-if="subtext" class="opacity-60 text-sm">{{ subtext }}</span></p>
  </component>
</template>

<style lang="css" scoped>
  .bla {
    background: #efe3fa;
  }
</style>

<script setup>
defineProps(['icon', 'text', 'subtext', 'href'])
</script>
