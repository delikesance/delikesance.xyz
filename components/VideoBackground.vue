<template>
  <div class="video-container">
    <video 
      ref="videoPlayer"
      class="absolute inset-0 w-full h-full object-cover opacity-20" 
      autoplay 
      loop 
      muted 
      playsinline
    >
      <source src="/erased-amv.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="overlay"></div>
  </div>
</template>

<style scoped>
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
  background-color: #7F00FF90;
  mix-blend-mode: multiply;
  z-index: 5;
}
</style>

