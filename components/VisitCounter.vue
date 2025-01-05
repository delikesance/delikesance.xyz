<template>
  <footer class="p-10 flex justify-center">

    <div class="visitor-message">
      <p>Delightful! This page has welcomed <span class="purple">{{ count.totalVisits }} visits</span>, including <span class="purple">{{ count.uniqueVisits }} unique visitors</span>. Thank you for being here! 💜</p>
    </div>

  </footer>
</template>

<script setup>
defineProps(['count'])
</script>
