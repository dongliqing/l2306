<template>
  <view class="">
    <view class="relative pt-[15px]">
      <view @click="checkWay" class="px-[10rpx] py-[4px] rounded-[3rpx] absolute top-[10rpx] right-[15px] border-[1rpx] border-[green] text-[green] border-dashed">过关秘籍</view>

      <view class="text-[40rpx] text-[#333] text-center">
        {{ resultText[errorText] }}
      </view>

      <view class="flex justify-between items-center w-[80%] m-auto">
        <image mode="widthFix" src="/static/images/left.png" class="w-[50%]" />
        <image mode="widthFix" :src="`/static/images/${resultImage[errorText]}`" class="w-[50%]" />
      </view>
      <view class="flex justify-center items-center w-[80%] m-auto">
        <text class="w-[200rpx]">
          您的成绩
          <br />
          全国排名
          <br />
          回家成功率
        </text>
        <text>
          第 {{ +questionIndex - 1 }} 关
          <br />
          {{ ranking }}
          <br />
          {{ success }}
        </text>
      </view>
    </view>

    <view class="again">
      <view class="restart" @click="start">不服,再来</view>
      <!-- <span class="share" >分享，虐人</span> -->
    </view>
  </view>
</template>

<script setup lang="ts">
const errorText = ref('');
const questionIndex = ref('1');

onLoad(options => {
  const { error, question } = options;
  console.log(error, question);

  errorText.value = error;
  questionIndex.value = question;
  getScore();
});

const resultText: Record<string, string> = {
  timeout: '时！间！到！',
  wrong: '抢票失败！',
  success: '抢到了！'
};
const resultImage: Record<string, string> = {
  timeout: 'right_late.png',
  wrong: 'right_wrong.png',
  success: 'right_great.png'
};

const ranking = ref(0);
const success = ref('');

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const getScore = () => {
  switch (String(+questionIndex.value - 1)) {
    case '0':
      ranking.value = rand(2000000, 10000000);
      success.value = '0%';
      break;
    case '1':
      ranking.value = rand(1000000, 2000000);
      success.value = '10%';
      break;
    case '2':
      ranking.value = rand(500000, 1000000);
      success.value = rand(1, 10) + '%';
      break;
    case '3':
      ranking.value = rand(200000, 500000);
      success.value = rand(10, 20) + '%';
      break;
    case '4':
      ranking.value = rand(100000, 200000);
      success.value = rand(20, 30) + '%';
      break;
    case '5':
      ranking.value = rand(50000, 100000);
      success.value = rand(30, 50) + '%';
      break;
    case '6':
      ranking.value = rand(10000, 50000);
      success.value = rand(50, 70) + '%';
      break;
    case '7':
      ranking.value = rand(1000, 10000);
      success.value = rand(70, 85) + '%';
      break;
    case '8':
      ranking.value = rand(100, 1000);
      success.value = rand(85, 95) + '%';
      break;
    case '9':
      ranking.value = rand(10, 100);
      success.value = rand(95, 99) + '%';
      break;
    case '10':
      ranking.value = rand(1, 10);
      success.value = '100%';
      break;
  }
};

const checkWay = () => {
  uni.navigateTo({
    url: '/pages/way/way'
  });
};

const start = () => {
  uni.navigateTo({
    url: '/pages/index/index'
  });
};
</script>
<style lang="scss" scoped>
.again {
  .restart {
    margin: auto;
    width: 40%;
    height: 50rpx;
    text-align: center;
    font: 24rpx/50rpx '方正兰亭黑_GBK';
    background: #298ccf;
    color: #fff;
    margin-top: 25rpx;
    border-radius: 3rpx;
  }
}
</style>
