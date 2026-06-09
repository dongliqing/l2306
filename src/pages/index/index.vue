showTip
<template>
  <view class="home-page flex flex-col relative">
    <PlayBefore @click="handleStart" v-if="!isStart" />
    <QuestionTitle :currentIndex="currentIndex" />
    <QuestionCard :currentIndex="currentIndex" @next="handleNext" @close-phone="closePhoneTel" />
  </view>
</template>

<script setup lang="ts">
import PlayBefore from '../../components/playBefore.vue';
import QuestionCard from '../../components/questionCard.vue';
import QuestionTitle from '../../components/questionTitle.vue';
import { isIos } from '@/utils/utils';

const audioContext = ref<UniApp.InnerAudioContext | null>(null);
const playing = ref(false);
const isStart = ref(false);
const currentIndex = ref<number>(0);

onShow(() => {});
onMounted(() => {
  audioContext.value = uni.createInnerAudioContext();
  //循环播放
  audioContext.value.loop = true;
  audioContext.value.autoplay = false;
});

const handleStart = () => {
  isStart.value = true;
  nextTick(() => {
    currentIndex.value = 1;
    changeAudio();

    // setTimeout(() => {
    //   audioContext.value!.play();
    // }, 2000);
  });
};

const handleNext = (error: string | null) => {
  if (error) {
    jumpToResult(error);
    return;
  }
  //停止播放
  if (currentIndex.value === 10) {
    jumpToResult('success');
    return;
  }

  currentIndex.value++;

  //变更背景乐
  changeAudio();
};
const changeAudio = () => {
  //第2关
  if (currentIndex.value === 2) {
    audioContext.value!.src = '/static/images/station.mp3';
  } else if (currentIndex.value === 3) {
    if (isIos()) {
      audioContext.value!.src = '/static/images/iphone01.mp3';
    } else {
      audioContext.value!.src = '/static/images/android01.mp3';
    }
  } else {
    audioContext.value!.src = '/static/images/time.mp3';
  }

  setTimeout(() => {
    //从头开始播放
    audioContext.value?.seek(0);
    audioContext.value?.play();
  }, 1000);
};
const closePhoneTel = () => {
  audioContext.value?.stop();
  audioContext.value!.src = '/static/images/time.mp3';
  audioContext.value?.play();
};

const jumpToResult = (error: string) => {
  console.log(error, '结束了');
  audioContext.value?.stop();

  let qeus = currentIndex.value;
  if (error === 'success') {
    qeus = 11;
  }
  uni.navigateTo({
    url: '/pages/result/result?error=' + error + '&question=' + qeus
  });
};

// 关键：在组件卸载时销毁实例
onUnmounted(() => {
  if (audioContext.value) {
    audioContext.value.stop(); // 停止播放
    audioContext.value.destroy(); // 销毁实例
    audioContext.value = null; // 清空引用
  }
});
</script>

<style lang="scss" scoped>
.home-page {
  position: relative;
  min-height: calc(100vh - var(--status-bar-height) - var(--window-top) - var(--window-bottom));
  box-sizing: border-box;
  background-color: #f0eff5;
}
</style>
