<template>
  <view class="question-card pt-[100rpx]">
    <view class="w-[90%] m-auto">
      <view class="g_top">
        <view class="h3">售票处</view>
        <view class="h4">Tickets</view>
      </view>
      <view class="g_ticket">
        <view class="h3">当前余票</view>
        <view class="w-[526rpx] m-auto">
          <image src="../static/images/ticket.png" mode="aspectFit" class="block w-full h-[217rpx] changeh relative z-[3]" />
          <image src="../static/images/bt.png" mode="aspectFill" class="block w-full h-[39rpx] relative z-[2] mt-[-7rpx]" />
        </view>
        <!--倒计时-->
        <view class="timeout" :class="{ warn: time <= 30 }">
          <strong id="second_show">{{ time }}</strong>
        </view>
      </view>
    </view>

    <view class="question-box w-[90%] m-auto bg-white mt-[40rpx] p-[20rpx] box-border">
      <!-- 标题 -->
      <view class="flex items-center">
        {{ currentIndex }}.
        <template v-if="currentIndex < 10">
          请点击下图中
          <span class="text-[#f91700]">所有的</span>
        </template>
        <template v-else>请</template>
        <image v-for="(pic, index) in titlePictures" :key="'title' + index" :src="`/static/images/title/${pic}`" mode="heightFix" class="h-[50rpx] ml-[4rpx]" />
      </view>
      <!-- 图片选项 -->
      <view class="pic-list grid grid-cols-4 gap-[10rpx] mt-[20rpx] pb-[10rpx]" v-if="currentIndex > 0">
        <template v-if="oriQuestions">
          <view class="relative" v-for="i in 8" :key="i" @tap="handleCheck(i)" :class="[opacityChange, `ques${currentIndex}_pic_${i}`]">
            <image :src="changePicForCover ? `/static/images/close.png` : `/static/images/${folder}/${i}.jpg`" mode="aspectFill" class="w-full h-[140rpx] block" />
            <view class="absolute inset-0 z-[3] flex items-center justify-center" v-if="currentChecked.includes(i)">
              <image src="../static/images/click.png" mode="aspectFill" class="h-[80rpx] w-[80rpx]" />
            </view>
          </view>
        </template>
        <view v-else class="relative" v-for="i in 8" :key="i" @tap="handleCheck(i)" :id="`ques_${currentIndex}_pic_${i + 8}`">
          <image :src="`/static/images/${folder}/${i + 8}.jpg`" mode="aspectFill" class="w-full h-[140rpx] block" />
        </view>
      </view>
    </view>
    <!-- 确定按钮 -->
    <view class="w-[90%] m-auto py-[20rpx] rounded-[6rpx] mt-[30rpx] bg-[#298ccf] text-[#fff] text-[32rpx] font-bold text-center" @click="handleNext">确定</view>

    <!--第2题干扰图片 -->
    <image v-if="currentIndex === 2" src="../static/images/train.png" mode="widthFix" class="w-[90%] absolute left-0 top-[45%] z-[5] train" />
    <!--第3题干扰图片 -->
    <uni-transition :mode-class="['fade']" :show="currentIndex === 3 && showPhoneTel" :duration="300" class="absolute w-full h-full inset-0 z-[4] bg-white">
      <view>
        <template v-if="isIos()">
          <image src="../static/images/iphone-tel.jpg" mode="scaleToFill" class="absolute w-full h-full inset-0 z-[5]" />
          <view class="absolute w-[170rpx] h-[170rpx] left-[10%] bottom-[8%] z-[6]" @tap="closePhoneTel" />
          <view class="absolute w-[170rpx] h-[170rpx] right-[10%] bottom-[8%] z-[6]" @tap="emits('next', 'wrong')" />
        </template>
        <template v-else>
          <image src="../static/images/android.jpg" mode="scaleToFill" class="absolute w-full h-full inset-0 z-[5]" />
          <view class="absolute w-[150rpx] h-[170rpx] left-[13%] bottom-[7%] z-[6]" @tap="closePhoneTel" />
          " />
          <view class="absolute w-[150rpx] h-[170rpx] right-[40%] bottom-[7%] z-[6]" @tap="emits('next', 'wrong')" />
        </template>
      </view>
    </uni-transition>
  </view>
</template>
<script setup lang="ts">
import { isIos } from '@/utils/utils';
console.log('ios', isIos());
const props = defineProps({
  currentIndex: {
    type: Number,
    default: 0
  }
});

const emits = defineEmits(['next', 'closePhone']);

const defaultTime = 120;
const time = ref(defaultTime);
const timer = ref<number | null>(null);
const currentChecked = ref<number[]>([]);
const answers = [[], [7, 8], [2, 6], [3, 6, 7], [1, 2, 3], [2, 4, 5], [1, 8], [2, 3, 7], [1, 8], [3], [1, 3], [4, 7]];
const titlePictures = computed(() => {
  const picMap: Record<number, string[]> = {
    1: ['zhongbiao.png'],
    2: ['jinyu.png', 'xinxiang.png'],
    3: ['majiang.png', 'zhipai.png'],
    4: ['bianpao.png'],
    5: ['laohu.png', 'jiaodai.png'],
    6: ['yinhangka.png', 'daziji.png'],
    7: ['qincai.png', 'dangandai.png'],
    8: ['nangua.png', 'jianzhu.png'],
    9: ['xiyi.png'],
    10: ['title_10.png']
  };
  return picMap[props.currentIndex] || [];
});
const oriQuestions = ref(true);
const opacityChange = ref('');
const changePicForCover = ref(false);
const startCountdown = () => {
  if (timer.value) {
    clearInterval(timer.value);
  }

  time.value = defaultTime;

  timer.value = setInterval(() => {
    if (time.value > 0) {
      time.value -= 1; // 每秒减1，实现120、119、118...的倒计时
    } else {
      clearInterval(timer.value!);
      timer.value = null;
      emits('next', 'timeout');
    }
  }, 100);
};

const stopCountdown = () => {
  if (timer.value) {
    clearInterval(timer.value);
    timer.value = null;
  }
};

onMounted(() => {});

watch(
  () => props.currentIndex,
  value => {
    startCountdown();

    opacityChange.value = '';

    if (value === 3) {
      setTimeout(() => {
        showPhoneTel.value = true;
      }, 4000);
    }
    // 第6关：切换干扰图片
    else if (value === 6) {
      setTimeout(() => {
        oriQuestions.value = false;
        setTimeout(() => {
          oriQuestions.value = true;
        }, 2000);
      }, 4000);
    }
    // 第七关变换透明度
    else if (value === 7) {
      opacityChange.value = 'opacity-0';
      setTimeout(() => {
        opacityChange.value = 'opacity-100';
      }, 9000);
    }
    // 第八关切换干扰图片
    else if (value === 8) {
      changePicForCover.value = false;
      setTimeout(() => {
        changePicForCover.value = true;
      }, 4000);
    } else if (value === 9) {
      changePicForCover.value = false;
      setTimeout(() => {
        changePicForCover.value = true;
      }, 6000);
    }
  }
);

onUnmounted(() => {
  stopCountdown();
});

const folder = computed(() => props.currentIndex.toString().padStart(2, '0'));
// 选择选项
const handleCheck = (index: number) => {
  if (currentChecked.value.includes(index)) {
    currentChecked.value = currentChecked.value.filter(item => item !== index);
  } else {
    currentChecked.value.push(index);
  }
};

// 点击确定
const handleNext = () => {
  const resultStr = currentChecked.value.sort().join('');
  currentChecked.value = [];
  stopCountdown();
  emits('next');
  return;
  if (resultStr === answers[props.currentIndex].join('')) {
    emits('next');
    return;
  }
  // 第十题在限定时间内选任何答案都对
  if (props.currentIndex === 10 && time.value >= 70) {
    emits('next', 'success');
    return;
  }
  //答案错误，跳转到结果页面
  emits('next', 'wrong');
};

const showPhoneTel = ref(false);
const closePhoneTel = () => {
  showPhoneTel.value = false;
  emits('closePhone');
};
</script>
<style lang="scss" scoped>
@use '../static/css/questionCard.scss';
</style>
