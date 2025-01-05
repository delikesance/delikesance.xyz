<template>
  <div v-if="show"
    class="fixed bottom-4 z-50 left-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-300">
    Copied to clipboard!
  </div>
</template>

<script setup>
defineProps(['show'])
</script>
