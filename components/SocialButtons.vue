<template>
  <div class="grid md:grid-cols-2 mt-5 md:mt-0 w-full gap-3">
    <SocialButton icon="simple-icons:discord" text="delikesance" @click="$emit('copy')" />
    <SocialButton icon="simple-icons:valorant" text="I eat feet" subtext="#momo" href="https://tracker.gg/valorant/profile/riot/i%20eat%20feet%23momo/overview" />
    <SocialButton icon="simple-icons:roblox" text="@delikesance" href="https://www.roblox.com/users/7819150636/profile" />
    <SocialButton icon="simple-icons:github" text="delikesance" href="https://github.com/delikesance" />
  </div>
</template>

<script setup>
import SocialButton from './SocialButton.vue'
</script>
