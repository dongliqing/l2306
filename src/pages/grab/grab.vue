<template>
  <view @click="handleClick">ddd</view>
</template>

<script lang="ts" setup>
const audioContext = ref(null);

onMounted(() => {
  audioContext.value = uni.createInnerAudioContext();
  audioContext.value.src = '/static/images/time.mp3'; // 替换为真实音频地址
  audioContext.value.autoplay = false;

  setTimeout(() => {
    audioContext.value.play();
  }, 1000);
});

const handleClick = () => {
  //   audioContext.value.play();
};
</script>
