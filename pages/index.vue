<template>
  <header class="relative h-screen overflow-hidden">
    <HeaderContent />
    <BackgroundOverlay />
    <VideoBackground />
  </header>

  <VisitCounter :count="visitCount" />
  <CopyNotification :show="showNotification" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HeaderContent from './components/HeaderContent.vue'
import BackgroundOverlay from './components/BackgroundOverlay.vue'
import VideoBackground from './components/VideoBackground.vue'
import VisitCounter from './components/VisitCounter.vue'
import CopyNotification from './components/CopyNotification.vue'

const showNotification = ref(false)
const visitCount = ref({
  totalVisits: 0, uniqueVisits: 0
})

onMounted(async () => {
  try {
    const response = await fetch('/api/visits')
    const data = await response.json()
    visitCount.value = data
  } catch (error) {
    console.error('Error fetching visit count:', error)
  }
})

const copyToClipboard = () => {
  navigator.clipboard.writeText('delikesance').then(() => {
    showNotification.value = true
    setTimeout(() => {
      showNotification.value = false
    }, 3000)
  })
}
</script>

<style>
.text-outline {
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}
</style>
