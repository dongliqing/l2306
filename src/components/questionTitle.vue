<template>
  <view class="question-title w-full h-full" v-if="showTip" :class="{ fadeout: isFading }">
    <view class="title-text break-all">
      第{{ numberToChinese(currentIndex) }}关
      <br />
      <text>{{ titles[currentIndex] }}</text>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import { numberToChinese } from '../utils/utils';

const props = defineProps({
  currentIndex: {
    type: Number,
    default: 0
  }
});

const showTip = ref(false);
const isFading = ref(false);

const titles = [
  '',
  '你以为的不一定是对的',
  '机会总是转瞬即逝',
  '奥巴马来电也不接',
  '眼神决定成败',
  '手指DPI很重要',
  '请相信第一感觉',
  '请不要相信题目',
  '眼中无码，心中有码',
  '智商才是根本',
  '我就是码，码就是我\n时间就是一切'
];

const displayTip = () => {
  showTip.value = true;
  isFading.value = false;
  setTimeout(() => {
    isFading.value = true;
    setTimeout(() => {
      showTip.value = false;
    }, 500);
  }, 2000);
};

// 监听 currentIndex 变化，显示提示
watch(
  () => props.currentIndex,
  () => {
    displayTip();
  }
  // { immediate: true }
);
</script>
<style lang="scss" scoped>
.question-title {
  position: absolute;
  inset: 0;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  font: 1.6em/1.8em '楷体';
  // transition: opacity 0.3s;
  opacity: 1;
  z-index: 99;
  // pointer-events: none; // 防止遮挡点击
  background: #f5f5f5;
  white-space: wrap;
  &.fadeout {
    animation: opacity 0.5s forwards;
  }
}

@keyframes opacity {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
