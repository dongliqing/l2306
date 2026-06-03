<template>
  <view class="home-page flex flex-col relative">
    <PlayBefore @click="handleStart" v-if="!playing" />
    saasdasd
    <view>撒大家哈时间的话</view>
    <!-- <uni-icons type="search" size="34rpx" color="#333" /> -->
  </view>
</template>

<script setup lang="ts">
import PlayBefore from '../../components/playBefore.vue';

const audioContext = ref(null);
const playing = ref(false);

onShow(() => {});
onMounted(() => {
  audioContext.value = uni.createInnerAudioContext();
  audioContext.value.src = '/static/images/time.mp3'; // 替换为真实音频地址
  audioContext.value.autoplay = false;
});

const handleStart = () => {
  playing.value = true;
  nextTick(() => {
    audioContext.value.play();
  });
};
</script>

<style lang="scss" scoped>
.home-page {
  position: relative;
  min-height: calc(100vh - var(--status-bar-height) - var(--window-top) - var(--window-bottom));
  box-sizing: border-box;
}
</style>
