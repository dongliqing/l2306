<template>
  <view class="ways">
    <view class="ways_top">
      <image mode="heightFix" src="/static/images/ways.png" class="h-[72rpx]" />
    </view>
    <view class="ways_box">
      <view>秘籍1 你以为的不一定是对的</view>
      <view>
        <image src="/static/images/01/6.jpg" mode="heightFix" class="!h-[72rpx]" />
        <text>俺只想静静的做一件刺绣</text>
      </view>
    </view>
    <view class="ways_box">
      <view>秘籍2 机会总是转瞬即逝</view>
      <view>
        <image src="/static/images/02/7.jpg" mode="heightFix" class="h-[72rpx]" />
        <text>没有鱼的鱼缸</text>
        <view class="clear" />
      </view>
      <view>
        <image src="/static/images/02/1.jpg" mode="heightFix" class="h-[72rpx]" />
        <text>请相信我，我也不知道这是啥玩意</text>
      </view>
    </view>
    <view class="ways_box">
      <view>秘籍3 奥巴马来电也不接</view>
      <view>
        <image src="/static/images/03/2.jpg" mode="heightFix" class="h-[72rpx]" />
        <text>赌徒家的抱枕就是高大上</text>
      </view>
    </view>
    <view class="ways_box">
      <view>秘籍4 眼神决定成败</view>
      <view>
        <image src="/static/images/04/6.jpg" mode="heightFix" class="h-[72rpx]" />
        <text>辣妹子辣，辣妹子辣</text>
      </view>
    </view>

    <view class="ways_box">
      <view>秘籍5 手指DPI要调高</view>
      <view>
        <image src="/static/images/05/3.jpg" mode="heightFix" class="h-[72rpx]" />
        <text>请叫我胶卷，胶带是我兄弟</text>
      </view>
    </view>

    <view class="ways_box">
      <view>秘籍6 请相信第一感觉</view>
      <view>
        <image src="/static/images/06/8.jpg" mode="heightFix" class="h-[72rpx]" />
        <text>我卡里有钱</text>
      </view>
    </view>

    <view class="ways_box">
      <view>秘籍7 请不要相信题目</view>

      <view>
        <image src="/static/images/07/6.jpg" mode="heightFix" class="h-[72rpx]" />
        <text>我就一信封，根本没有什么档案袋</text>
      </view>
    </view>
    <view class="ways_box">
      <view>秘籍8 眼中无码，心中有码</view>
      <view>
        <image src="/static/images/08/2.jpg" mode="heightFix" class="h-[72rpx]" />
        <text>橘子而已，没什么大不了的</text>
      </view>
    </view>
    <view class="ways_box1">
      <view>秘籍9 智商才是根本</view>
      <view><text>验证码本身已经没什么好说的了</text></view>
    </view>
    <view class="ways_box1">
      <view>秘籍10 时间就是一切</view>
      <view><text>3秒内还没有做出决定，你已经输了</text></view>
    </view>
  </view>
</template>

<script setup lang="ts">
const errorText = ref('');
const questionIndex = ref('0');

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
  uni.showToast({
    title: '过关秘籍',
    icon: 'none'
  });
};
</script>
<style lang="scss" scoped>
.ways {
  width: 90%;
  margin: auto;
  padding: 15rpx 0;
}
.ways_top {
  width: 42%;
  margin: auto;
  margin-bottom: 10rpx;
}
.ways_box,
.ways_box1 {
  font: 16rpx '方正兰亭黑_GBK';
  // margin-top: 20rpx;
  > view:nth-child(1) {
    background: #298ccf;
    text-indent: 12rpx;
    font: 14rpx/28rpx '方正兰亭黑_GBK';
    color: #fff;
  }
  > view:not(:first-child) {
    display: flex;
    align-items: center;
    border: 1px solid #298ccf;
    border-top: 0;
    padding: 15rpx;
    image {
      margin-right: 15rpx;
    }
    text {
      text-align: center;
      font: 16px '方正兰亭黑_GBK';
      display: block;
    }
  }
}
</style>
