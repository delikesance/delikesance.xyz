<template>
  <header class="relative h-screen overflow-hidden">
    <section class="absolute inset-0 flex items-center justify-center z-20">
      <div class="flex flex-col gap-5">
        <div class="flex flex-col items-center relative">
          <a href="https://tracker.gg/valorant/profile/riot/Moiragh%23EUWD/overview"
            class="absolute text-purple-600 z-30 text-outline right-0 md:right-0 md:top-0 -top-1 font-bold uppercase text-sm">approved
            by
            momo</a>
          <h1 class="md:text-7xl text-5xl font-black text-white drop-shadow-lg">Delikesance</h1>
          <h2
            class="text-2xl text-purple-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-2 md:translate-y-4 text-outline">
            潮解</h2>
        </div>

        <div class="grid md:grid-cols-2 mt-5 md:mt-0 w-full gap-3">
          <button @click="copyToClipboard"
            class="hover:bg-opacity-80 bg-white justify-center text-black w-full px-5 py-2 rounded flex items-center gap-3">
            <Icon name="simple-icons:discord" />
            <p>delikesance</p>
          </button>

          <a href="https://tracker.gg/valorant/profile/riot/i%20eat%20feet%23momo/overview"
            class="bg-white hover:bg-opacity-80 justify-center text-black px-5 py-2 w-full rounded flex items-center gap-3">
            <Icon name="simple-icons:valorant" />
            <p>I eat feet<span class="opacity-60 text-sm">#momo</span></p>
          </a>

          <a href="https://www.roblox.com/users/7819150636/profile"
            class="bg-white hover:bg-opacity-80 justify-center text-black px-5 py-2 w-full rounded flex items-center gap-3">
            <Icon name="simple-icons:roblox" />
            <p>@delikesance</p>
          </a>

          <a href="https://github.com/delikesance"
            class="bg-white hover:bg-opacity-80 justify-center text-black px-5 py-2 w-full rounded flex items-center gap-3">
            <Icon name="simple-icons:github" />
            <p>delikesance</p>
          </a>
        </div>
      </div>
    </section>

    <div class="absolute w-full h-full bg-gradient-to-t from-black z-10 top-0 left-0"></div>

    <div class="video-container">
      <video class="absolute inset-0 w-full h-full object-cover opacity-40" autoplay loop muted playsinline>
        <source src="/erased-amv.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="overlay"></div>
    </div>
  </header>

  <section class="absolute top-0 p-5">
    <p class="bg-purple-700 px-5 py-2 rounded">{{ visitCount }} views</p>
  </section>

  <div v-if="showNotification"
    class="fixed bottom-4 left-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-300">
    Copied to clipboard!
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showNotification = ref(false)
const visitCount = ref(0)

onMounted(async () => {
  try {
    const response = await fetch('/api/visits')
    const data = await response.json()
    visitCount.value = data.visits
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

.video-container {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.video-container video {
  filter: hue-rotate(60deg);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 0, 128, 0.3);
  mix-blend-mode: multiply;
  z-index: 5;
}
</style>
