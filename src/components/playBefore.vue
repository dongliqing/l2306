<template>
  <view class="absolute z-[99] w-full h-full flex flex-col items-center justify-center bg-[#298ccf]">
    <view class="flex-1 pt-[100rpx]">
      <view class="logo-box">
        <image src="@/static/images/pic1.png" mode="scaleToFill" class="w-full h-full relative z-[3]" />
        <view class="ring_1" />
        <view class="ring_2" />
      </view>
      <view class="state"><image src="@/static/images/state.png" mode="scaleToFill" class="w-full h-full" /></view>
      <view class="grab" @click="emit('click')">
        <text>点击开始抢票</text>
      </view>
      <view class="tips">请使用便宜手机玩</view>
    </view>
    <view class="footer">Copyright 2008-2015 中国铁路客户逗比中心</view>
  </view>
</template>

<script setup lang="ts">
const emit = defineEmits(['click']);
</script>

<style lang="scss" scoped>
.logo-box {
  width: 228rpx;
  height: 228rpx;
  position: relative;
  margin: auto;
  margin-top: 30rpx;
  .ring_1,
  .ring_2 {
    position: absolute;
    border: 1rpx solid #51a2d8;
    // border: 1rpx solid red;
    border-radius: 50%;
    width: 225rpx;
    height: 225rpx;
    top: 0;
    left: 0;
    animation: ripple 3s ease-out infinite;
    pointer-events: none;
  }
  .ring_2 {
    animation-delay: 1.5s;
  }
}

@keyframes ripple {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.7);
    opacity: 0;
  }
}

.state {
  width: 514rpx;
  height: 96rpx;
  margin: auto;
  margin-top: 100rpx;
}
.grab {
  width: 360rpx;
  height: 80rpx;
  margin: auto;
  font: 36rpx/80rpx '方正兰亭黑_GBK';
  text-align: center;
  border-radius: 6rpx;
  margin-top: 90rpx;
  background: #fff;
  color: #298ccf;
}

.tips {
  text-align: center;
  text-align: center;
  font: 24rpx/60rpx '方正兰亭黑_GBK';
  color: #074da8;
}
.footer {
  text-align: center;
  font: 22rpx/60rpx '方正兰亭黑_GBK';
  color: #fff;
  margin-bottom: 30rpx;
}
</style>
