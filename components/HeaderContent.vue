<template>
  <section class="absolute inset-0 flex items-center justify-center z-20">
    <div class="flex flex-col gap-5 px-10 overflow-hidden">
      <TitleSection />
      <SocialButtons @copy="$emit('copy')" />
    </div>
  </section>
</template>

<script setup>
import TitleSection from './TitleSection.vue'
import SocialButtons from './SocialButtons.vue'
</script>
