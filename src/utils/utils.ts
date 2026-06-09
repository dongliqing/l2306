/**
 * 计算两个经纬度坐标之间的距离
 * @param {Number} lat1 第一个点的纬度
 * @param {Number} lng1 第一个点的经度
 * @param {Number} lat2 第二个点的纬度
 * @param {Number} lng2 第二个点的经度
 * @returns {Number} 两点之间的距离，单位为千米 (km)
 */
export function getDistance(lat1: number | string, lng1: number | string, lat2: number | string, lng2: number | string) {
  // 1. 检查经纬度是否为有效数字
  lat1 = Number(lat1);
  lng1 = Number(lng1);
  lat2 = Number(lat2);
  lng2 = Number(lng2);

  // 2. 将角度转为弧度
  const radLat1 = (lat1 * Math.PI) / 180.0;
  const radLat2 = (lat2 * Math.PI) / 180.0;
  const a = radLat1 - radLat2;
  const b = (lng1 * Math.PI) / 180.0 - (lng2 * Math.PI) / 180.0;

  // 3. Haversine 公式核心
  let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));

  // 4. 乘以地球平均半径（6378.137 千米），直接得出千米结果
  s = s * 6378.137;

  // 5. 保留1位小数（例如：1.2 km）
  s = Math.round(s * 10) / 10;

  return s;
}

/**
 * 自定义跳转页面
 * @param url
 */
export function customNavigateTo(url: string) {
  const tabBars = ['/pages/index/index', '/pages/check/index', '/pages/mine/mine'];
  console.log('customNavigateTo:', url);
  if (tabBars.includes(url.split('?')[0])) {
    uni.switchTab({ url: url });
  } else {
    uni.reLaunch({ url: url });
  }
}

/**
 * 将数字转换为汉字（主要用于关卡显示）
 * @param num 数字
 * @returns 汉字
 */
export function numberToChinese(num: number): string {
  const chineseNums = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  if (num <= 10) {
    return chineseNums[num];
  } else if (num < 20) {
    return '十' + chineseNums[num % 10];
  } else if (num < 100) {
    const unit = num % 10;
    const ten = Math.floor(num / 10);
    return chineseNums[ten] + '十' + (unit === 0 ? '' : chineseNums[unit]);
  }
  return num.toString();
}

//判断设备是ios还是安卓
export const isIos = () => {
  const u = navigator.userAgent;
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
};

//获取图片热点坐标
export const getCoords = () => {
  //获取屏幕可视区域宽高
  // const { width, height } = uni.getSystemInfoSync();
};
