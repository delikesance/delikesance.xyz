<template>
  <footer class="p-10 flex justify-center">
    <p>This page got {{ count }} views! Thank you so much 💜</p>
  </footer>
</template>

<script setup>
defineProps(['count'])
</script>
