<template>
  <view>
    <div class="largebox1">
      <div class="g_top">
        <h3>售票处</h3>
        <h4>Tickets</h4>
      </div>
      <div class="g_ticket">
        <h3><b>当前余票</b></h3>

        <img src="http://aimg.11fen.cn/ticket/images/ticket.png" width="90%" class="p_ticket changeh" />

        <div class="p_bt"><img src="http://aimg.11fen.cn/ticket/images/bt.png" width="90%" height="22px" /></div>
        <!--倒计时-->
        <div class="timeout">
          <strong id="second_show">00</strong>
          <strong id="hm_show">0</strong>
        </div>
      </div>

      <!--第一题-->
      <div class="ques_eq" id="1" style="display: block">
        <div class="g_content" id="id1">
          <h3>
            1.请点击下图中
            <span>所有的</span>
            &nbsp;
            <img src="http://aimg.11fen.cn/ticket/images/title/zhongbiao.png" height="25px" />
          </h3>
          <div class="picture">
            <input type="checkbox" name="ques1" value="1" />
            <label><img src="http://aimg.11fen.cn/ticket/images/01/1.jpg?v=1" /></label>
            <input type="checkbox" name="ques1" value="2" />
            <label><img src="http://aimg.11fen.cn/ticket/images/01/2.jpg?v=1" /></label>
            <input type="checkbox" name="ques1" value="3" />
            <label><img src="http://aimg.11fen.cn/ticket/images/01/3.jpg?v=1" /></label>
            <input type="checkbox" name="ques1" value="4" />
            <label><img src="http://aimg.11fen.cn/ticket/images/01/4.jpg?v=1" /></label>
            <input type="checkbox" name="ques1" value="5" />
            <label><img src="http://aimg.11fen.cn/ticket/images/01/5.jpg?v=1" /></label>
            <input type="checkbox" name="ques1" value="6" />
            <label><img src="http://aimg.11fen.cn/ticket/images/01/6.jpg?v=1" /></label>
            <input type="checkbox" name="ques1" value="7" />
            <label><img src="http://aimg.11fen.cn/ticket/images/01/7.jpg?v=1" /></label>
            <input type="checkbox" name="ques1" value="8" />
            <label><img src="http://aimg.11fen.cn/ticket/images/01/8.jpg?v=1" /></label>
          </div>
          <div class="clear"></div>
        </div>
        <div class="sure">
          <button type="submit" name="submit" onclick="judge1('ques1')">确定</button>
        </div>
      </div>
      <!--第一题结束-->

      <!--第二题-->
      <div class="ques_eq" id="2">
        <div class="g_content">
          <h3>
            2.请点击下图中
            <span>所有的</span>
            &nbsp;
            <img src="http://aimg.11fen.cn/ticket/images/title/jinyu.png" height="22px" />
            <img src="http://aimg.11fen.cn/ticket/images/title/xinxiang.png" height="22px" />
          </h3>
          <div class="picture">
            <input type="checkbox" name="ques2" value="1" />
            <label><img src="http://aimg.11fen.cn/ticket/images/05/1.jpg?v=1" /></label>
            <input type="checkbox" name="ques2" value="2" />
            <label><img src="http://aimg.11fen.cn/ticket/images/05/2.jpg?v=1" /></label>
            <input type="checkbox" name="ques2" value="3" />
            <label><img src="http://aimg.11fen.cn/ticket/images/05/3.jpg?v=1" /></label>
            <input type="checkbox" name="ques2" value="4" />
            <label><img src="http://aimg.11fen.cn/ticket/images/05/4.jpg?v=1" /></label>
            <input type="checkbox" name="ques2" value="5" />
            <label><img src="http://aimg.11fen.cn/ticket/images/05/5.jpg?v=1" /></label>
            <input type="checkbox" name="ques2" value="6" />
            <label><img src="http://aimg.11fen.cn/ticket/images/05/6.jpg?v=1" /></label>
            <input type="checkbox" name="ques2" value="7" />
            <label><img src="http://aimg.11fen.cn/ticket/images/05/7.jpg?v=1" /></label>
            <input type="checkbox" name="ques2" value="8" />
            <label><img src="http://aimg.11fen.cn/ticket/images/05/8.jpg?v=1" /></label>
          </div>
          <div class="train"><img src="http://aimg.11fen.cn/ticket/images/train.png" width="100%" /></div>
          <div class="clear"></div>
        </div>
        <div class="sure">
          <button type="submit" name="submit" onclick="judge2('ques2')">确定</button>
        </div>
      </div>
      <!--第二题结束-->
      <!--第三题-->
      <div class="ques_eq" id="3">
        <div class="tellphone"><div class="tell_pic"></div></div>
        <div class="g_content">
          <h3>
            3.请点击下图中
            <span>所有的</span>
            &nbsp;
            <img src="http://aimg.11fen.cn/ticket/images/title/majiang.png" height="22px" />
            <img src="http://aimg.11fen.cn/ticket/images/title/zhipai.png" height="22px" />
          </h3>

          <div class="picture">
            <input type="checkbox" name="ques3" value="1" />
            <label><img src="http://aimg.11fen.cn/ticket/images/04/1.jpg?v=1" /></label>
            <input type="checkbox" name="ques3" value="2" />
            <label><img src="http://aimg.11fen.cn/ticket/images/04/2.jpg?v=1" /></label>
            <input type="checkbox" name="ques3" value="3" />
            <label><img src="http://aimg.11fen.cn/ticket/images/04/3.jpg?v=1" /></label>
            <input type="checkbox" name="ques3" value="4" />
            <label><img src="http://aimg.11fen.cn/ticket/images/04/4.jpg?v=1" /></label>
            <input type="checkbox" name="ques3" value="5" />
            <label><img src="http://aimg.11fen.cn/ticket/images/04/5.jpg?v=1" /></label>
            <input type="checkbox" name="ques3" value="6" />
            <label><img src="http://aimg.11fen.cn/ticket/images/04/6.jpg?v=1" /></label>
            <input type="checkbox" name="ques3" value="7" />
            <label><img src="http://aimg.11fen.cn/ticket/images/04/7.jpg?v=1" /></label>
            <input type="checkbox" name="ques3" value="8" />
            <label><img src="http://aimg.11fen.cn/ticket/images/04/8.jpg?v=1" /></label>
          </div>
          <div class="clear"></div>
        </div>
        <div class="sure">
          <button type="submit" name="submit" onclick="judge3('ques3')">确定</button>
        </div>
      </div>
      <!--第三题结束-->

      <!--第四题-->
      <div class="ques_eq" id="4">
        <div class="g_content">
          <h3>
            4.请点击下图中
            <span>所有的</span>
            &nbsp;
            <img src="http://aimg.11fen.cn/ticket/images/title/bianpao.png" height="22px" />
          </h3>

          <div class="picture">
            <input type="checkbox" name="ques4" value="1" />
            <label><img src="http://aimg.11fen.cn/ticket/images/02/1.jpg?v=1" /></label>
            <input type="checkbox" name="ques4" value="2" />
            <label id="label22"><img src="http://aimg.11fen.cn/ticket/images/02/2.jpg?v=1" /></label>
            <input type="checkbox" name="ques4" value="3" />
            <label id="label23"><img src="http://aimg.11fen.cn/ticket/images/02/3.jpg?v=1" /></label>
            <input type="checkbox" name="ques4" value="4" />
            <label><img src="http://aimg.11fen.cn/ticket/images/02/4.jpg?v=1" /></label>
            <input type="checkbox" name="ques4" value="5" />
            <label><img src="http://aimg.11fen.cn/ticket/images/02/5.jpg?v=1" /></label>
            <input type="checkbox" name="ques4" value="6" />
            <label id="label26"><img src="http://aimg.11fen.cn/ticket/images/02/6.jpg?v=1" /></label>
            <input type="checkbox" name="ques4" value="7" />
            <label id="label27"><img src="http://aimg.11fen.cn/ticket/images/02/7.jpg?v=1" /></label>
            <input type="checkbox" name="ques4" value="8" />
            <label><img src="http://aimg.11fen.cn/ticket/images/02/8.jpg?v=1" /></label>
          </div>
          <div class="clear"></div>
        </div>
        <div class="sure">
          <button type="submit" name="submit" onclick="judge4('ques4')">确定</button>
        </div>
      </div>
      <!--第四题结束-->

      <!--第五题-->
      <div class="ques_eq" id="5">
        <div class="g_content">
          <h3>
            5.请点击下图中
            <span>所有的</span>
            &nbsp;
            <img src="http://aimg.11fen.cn/ticket/images/title/laohu.png" height="22px" />
            <img src="http://aimg.11fen.cn/ticket/images/title/jiaodai.png" height="22px" />
          </h3>
          <div class="picture">
            <input type="checkbox" name="ques5" value="1" />
            <label id="label31"><img src="http://aimg.11fen.cn/ticket/images/03/1.jpg?v=1" /></label>
            <input type="checkbox" name="ques5" value="2" />
            <label id="label32"><img src="http://aimg.11fen.cn/ticket/images/03/2.jpg?v=1" /></label>
            <input type="checkbox" name="ques5" value="3" />
            <label id="label33"><img src="http://aimg.11fen.cn/ticket/images/03/3.jpg?v=1" /></label>
            <input type="checkbox" name="ques5" value="4" />
            <label id="label34"><img src="http://aimg.11fen.cn/ticket/images/03/4.jpg?v=1" /></label>
            <input type="checkbox" name="ques5" value="5" />
            <label id="label35"><img src="http://aimg.11fen.cn/ticket/images/03/5.jpg?v=1" /></label>
            <input type="checkbox" name="ques5" value="6" />
            <label id="label36"><img src="http://aimg.11fen.cn/ticket/images/03/6.jpg?v=1" /></label>
            <input type="checkbox" name="ques5" value="7" />
            <label id="label37"><img src="http://aimg.11fen.cn/ticket/images/03/7.jpg?v=1" /></label>
            <input type="checkbox" name="ques5" value="8" />
            <label id="label38"><img src="http://aimg.11fen.cn/ticket/images/03/8.jpg?v=1" /></label>
          </div>
          <div class="clear"></div>
        </div>
        <div class="sure">
          <button type="submit" name="submit" onclick="judge5('ques5')">确定</button>
        </div>
      </div>
      <!--第五题结束-->

      <!--第六题-->
      <div class="ques_eq" id="6">
        <div class="g_content">
          <h3>
            6.题请点击下图中
            <span>所有的</span>
            <img src="http://aimg.11fen.cn/ticket/images/title/yinhangka.png" width="44px" />
            <img src="http://aimg.11fen.cn/ticket/images/title/daziji.png" width="43px" />
          </h3>

          <div class="picture" id="ch_box1">
            <input type="checkbox" name="ques6_1" value="1" />
            <label><img src="http://aimg.11fen.cn/ticket/images/06/1.jpg?v=1" /></label>
            <input type="checkbox" name="ques6_1" value="2" />
            <label><img src="http://aimg.11fen.cn/ticket/images/06/2.jpg?v=1" /></label>
            <input type="checkbox" name="ques6_1" value="3" />
            <label><img src="http://aimg.11fen.cn/ticket/images/06/3.jpg?v=1" /></label>
            <input type="checkbox" name="ques6_1" value="4" />
            <label><img src="http://aimg.11fen.cn/ticket/images/06/4.jpg?v=1" /></label>
            <input type="checkbox" name="ques6_1" value="5" />
            <label><img src="http://aimg.11fen.cn/ticket/images/06/5.jpg?v=1" /></label>
            <input type="checkbox" name="ques6_1" value="6" />
            <label><img src="http://aimg.11fen.cn/ticket/images/06/6.jpg?v=1" /></label>
            <input type="checkbox" name="ques6_1" value="7" />
            <label><img src="http://aimg.11fen.cn/ticket/images/06/7.jpg?v=1" /></label>
            <input type="checkbox" name="ques6_1" value="8" />
            <label><img src="http://aimg.11fen.cn/ticket/images/06/8.jpg?v=1" /></label>
          </div>
          <div class="picture" id="ch_box2" style="display: none">
            <input type="checkbox" name="ques6_2" value="1" />
            <label><img src="http://aimg.11fen.cn/ticket/images/06/9.jpg?v=1" /></label>
            <input type="checkbox" name="ques6_2" value="2" />
            <label><img src="http://aimg.11fen.cn/ticket/images/06/10.jpg?v=1" /></label>
            <input type="checkbox" name="ques6_2" value="3" />
            <label><img src="http://aimg.11fen.cn/ticket/images/06/11.jpg?v=1" /></label>
            <input type="checkbox" name="ques6_2" value="4" />
            <label><img src="http://aimg.11fen.cn/ticket/images/06/12.jpg?v=1" /></label>
            <input type="checkbox" name="ques6_2" value="5" />
            <label><img src="http://aimg.11fen.cn/ticket/images/06/13.jpg?v=1" /></label>
            <input type="checkbox" name="ques6_2" value="6" />
            <label><img src="http://aimg.11fen.cn/ticket/images/06/14.jpg?v=1" /></label>
            <input type="checkbox" name="ques6_2" value="7" />
            <label><img src="http://aimg.11fen.cn/ticket/images/06/15.jpg?v=1" /></label>
            <input type="checkbox" name="ques6_2" value="8" />
            <label><img src="http://aimg.11fen.cn/ticket/images/06/16.jpg?v=1" /></label>
          </div>
          <div class="clear"></div>
        </div>
        <div class="sure">
          <button type="submit" name="submit" onclick="judge6()">确定</button>
        </div>
      </div>
      <!--第六题结束-->
      <!--第七题-->
      <div class="ques_eq" id="7">
        <div class="g_content">
          <h3>
            7.请点击下图中
            <span>所有的</span>
            <img src="http://aimg.11fen.cn/ticket/images/title/qincai.png" height="22px" />
            <img src="http://aimg.11fen.cn/ticket/images/title/dangandai.png" height="22px" />
          </h3>

          <div class="picture" id="ques7_img">
            <input type="checkbox" name="ques7" value="1" />
            <label id="label71"><img src="http://aimg.11fen.cn/ticket/images/07/1.jpg?v=1" /></label>
            <input type="checkbox" name="ques7" value="2" />
            <label id="label72"><img src="http://aimg.11fen.cn/ticket/images/07/2.jpg?v=1" /></label>
            <input type="checkbox" name="ques7" value="3" />
            <label id="label73"><img src="http://aimg.11fen.cn/ticket/images/07/3.jpg?v=1" /></label>
            <input type="checkbox" name="ques7" value="4" />
            <label id="label74"><img src="http://aimg.11fen.cn/ticket/images/07/4.jpg?v=1" /></label>
            <input type="checkbox" name="ques7" value="5" />
            <label id="label75"><img src="http://aimg.11fen.cn/ticket/images/07/5.png?v=1" /></label>
            <input type="checkbox" name="ques7" value="6" />
            <label id="label76"><img src="http://aimg.11fen.cn/ticket/images/07/6.jpg?v=1" /></label>
            <input type="checkbox" name="ques7" value="7" />
            <label id="label77"><img src="http://aimg.11fen.cn/ticket/images/07/7.jpg?v=1" /></label>
            <input type="checkbox" name="ques7" value="8" />
            <label id="label78"><img src="http://aimg.11fen.cn/ticket/images/07/8.jpg?v=1" /></label>
          </div>
          <div class="clear"></div>
        </div>
        <div class="sure">
          <button type="submit" name="submit" onclick="judge7('ques7')">确定</button>
        </div>
      </div>
      <!--第七题结束-->
      <!--第八题-->
      <div class="ques_eq" id="8">
        <div class="g_content">
          <h3>
            8.请点击下图中
            <span>所有的</span>
            <img src="http://aimg.11fen.cn/ticket/images/title/nangua.png" height="22px" />
            <img src="http://aimg.11fen.cn/ticket/images/title/jianzhu.png" height="22px" />
          </h3>

          <div class="picture" id="ques8_img">
            <input type="checkbox" name="ques8" value="1" />
            <label><img src="http://aimg.11fen.cn/ticket/images/08/1.jpg?v=1" class="close" /></label>
            <input type="checkbox" name="ques8" value="2" />
            <label><img src="http://aimg.11fen.cn/ticket/images/08/2.jpg?v=1" class="close" /></label>
            <input type="checkbox" name="ques8" value="3" />
            <label><img src="http://aimg.11fen.cn/ticket/images/08/3.jpg?v=1" class="close" /></label>
            <input type="checkbox" name="ques8" value="4" />
            <label><img src="http://aimg.11fen.cn/ticket/images/08/4.jpg?v=1" class="close" /></label>
            <input type="checkbox" name="ques8" value="5" />
            <label><img src="http://aimg.11fen.cn/ticket/images/08/5.jpg?v=1" class="close" /></label>
            <input type="checkbox" name="ques8" value="6" />
            <label><img src="http://aimg.11fen.cn/ticket/images/08/6.jpg?v=1" class="close" /></label>
            <input type="checkbox" name="ques8" value="7" />
            <label><img src="http://aimg.11fen.cn/ticket/images/08/7.jpg?v=1" class="close" /></label>
            <input type="checkbox" name="ques8" value="8" />
            <label><img src="http://aimg.11fen.cn/ticket/images/08/8.jpg?v=1" class="close" /></label>
          </div>
          <div class="clear"></div>
        </div>
        <div class="sure">
          <button type="submit" name="submit" onclick="judge8('ques8')">确定</button>
        </div>
      </div>
      <!--第八题结束-->
      <!--第九题-->
      <div class="ques_eq" id="9">
        <div class="g_content">
          <h3>
            9.请点击下图中
            <span>所有的</span>
            <img src="http://aimg.11fen.cn/ticket/images/title/xiyi.png" height="22px" />
          </h3>

          <div class="picture">
            <input type="checkbox" name="ques9" value="1" />
            <label id="label91"><img src="http://aimg.11fen.cn/ticket/images/09/1.jpg?v=1" class="close" /></label>
            <input type="checkbox" name="ques9" value="2" />
            <label id="label92"><img src="http://aimg.11fen.cn/ticket/images/09/6.jpg?v=1" class="close" /></label>
            <input type="checkbox" name="ques9" value="3" />
            <label id="label93"><img src="http://aimg.11fen.cn/ticket/images/09/3.jpg?v=1" class="close" /></label>
            <input type="checkbox" name="ques9" value="4" />
            <label id="label94"><img src="http://aimg.11fen.cn/ticket/images/09/8.jpg?v=1" class="close" /></label>
            <input type="checkbox" name="ques9" value="5" />
            <label id="label95"><img src="http://aimg.11fen.cn/ticket/images/09/5.jpg?v=1" class="close" /></label>
            <input type="checkbox" name="ques9" value="6" />
            <label id="label96"><img src="http://aimg.11fen.cn/ticket/images/09/2.jpg?v=1" class="close" /></label>
            <input type="checkbox" name="ques9" value="7" />
            <label id="label97"><img src="http://aimg.11fen.cn/ticket/images/09/7.jpg?v=1" class="close" /></label>
            <input type="checkbox" name="ques9" value="8" />
            <label id="label98"><img src="http://aimg.11fen.cn/ticket/images/09/4.jpg?v=1" class="close" /></label>
          </div>
          <div class="clear"></div>
        </div>
        <div class="sure">
          <button type="submit" name="submit" onclick="judge9('ques9')">确定</button>
        </div>
      </div>
      <!--第九题结束-->
      <!--第十题-->
      <div class="ques_eq" id="10">
        <div class="g_content">
          <h3>
            10.请点击下图中
            <span>所有的</span>
            <img src="http://aimg.11fen.cn/ticket/images/title/pick.png" height="22px" />
          </h3>

          <div class="picture">
            <input type="checkbox" name="ques10" value="1" />
            <label><img src="http://aimg.11fen.cn/ticket/images/10/1.jpg?v=1" /></label>
            <input type="checkbox" name="ques10" value="2" />
            <label><img src="http://aimg.11fen.cn/ticket/images/10/2.jpg?v=1" /></label>
            <input type="checkbox" name="ques10" value="3" />
            <label><img src="http://aimg.11fen.cn/ticket/images/10/3.jpg?v=1" /></label>
            <input type="checkbox" name="ques10" value="4" />
            <label><img src="http://aimg.11fen.cn/ticket/images/10/4.jpg?v=1" /></label>
            <input type="checkbox" name="ques10" value="5" />
            <label><img src="http://aimg.11fen.cn/ticket/images/10/5.jpg?v=1" /></label>
            <input type="checkbox" name="ques10" value="6" />
            <label><img src="http://aimg.11fen.cn/ticket/images/10/6.jpg?v=1" /></label>
            <input type="checkbox" name="ques10" value="7" />
            <label><img src="http://aimg.11fen.cn/ticket/images/10/7.jpg?v=1" /></label>
            <input type="checkbox" name="ques10" value="8" />
            <label><img src="http://aimg.11fen.cn/ticket/images/10/8.jpg?v=1" /></label>
          </div>
          <div class="clear"></div>
        </div>
        <div class="sure">
          <button type="submit" name="submit" onclick="judge10('ques10')" id="btn10">确定</button>
        </div>
      </div>
      <!--第十题结束-->

      <div class="passtip">
        <div class="passtip_box">
          <span>
            第一关
            <br />
            你以为的不一定是对的
          </span>
        </div>
      </div>
    </div>
  </view>
</template>

<script lang="ts" setup>
const audioContext = ref(null);

onMounted(() => {
  audioContext.value = uni.createInnerAudioContext();
  audioContext.src = '../static/images/time.mp3'; // 替换为真实音频地址
  audioContext.autoplay = false;
});

var is_changing = false;
var current_stage = 0;
var time;

//判断手机类型
var u = navigator.userAgent,
  app = navigator.appVersion;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

var id1 = $('#1');
var id2 = $('#2');
var id3 = $('#3');
var id4 = $('#4');
var id5 = $('#5');
var id6 = $('#6');
var id7 = $('#7');
var id8 = $('#8');
var id9 = $('#9');
var id10 = $('#10');

var re1 = [7, 8],
  re2 = [2, 6],
  re3 = [3, 6, 7],
  re4 = [1, 2, 3],
  re5 = [2, 4, 5],
  re61 = [1, 8],
  re62 = [2, 3, 7],
  re63 = [1, 8],
  re7 = [3],
  re8 = [1, 3],
  re9 = [4, 7];
var intDiff;
function timer(total) {
  intDiff = total;
  time = setInterval(function () {
    var second = 0;
    var hm = 0; //时间默认值
    if (intDiff > 0) {
      second = parseInt(Math.floor(intDiff) / 10);
      hm = parseInt((Math.floor(intDiff) / 10 - second) * 10);
    }
    $('#second_show').html(second);
    $('#hm_show').html(hm);
    intDiff--;

    if (intDiff <= 30) {
      $('.timeout').css({ 'border-color': '#f91700', color: '#f91700' });
    }

    if (intDiff == 0) {
      window.location.href = 'result.php?error=timeover&question=' + current_stage;
    }
  }, 100);
}

function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

$(function () {
  timer(120);
  setTimeout(function () {
    $('.passtip').fadeOut(500);
  }, 1500);
  var ahtml = "<div class='clickcss'><img src='http://aimg.11fen.cn/ticket/images/click.png' /></div>";
  $('input[type=checkbox]').next('label').append(ahtml);

  $('.ques_eq:eq(0)').css('display', 'block').siblings('.ques_eq').css('display', 'none');

  $('label').click(function () {
    var thiscss = $(this).find('.clickcss');
    var checkbox = $(this).prev('input');
    if (thiscss.css('display') == 'block') {
      thiscss.css('display', 'none');
      checkbox.attr('checked', false);
    } else {
      thiscss.css('display', 'block');
      checkbox.attr('checked', true);
    }
  });

  if (isiOS) {
    // $('.tellphone').find('img').attr("arc","http://aimg.11fen.cn/ticket/images/iphone.jpg");
    $('.tell_pic').html(
      "<img src='http://aimg.11fen.cn/ticket/images/iphone.jpg' width='100%' usemap='#map1'/><map name='map1' id='map1'><area shape='circle' coords='470,820,63' href='result.php?error=wrong&question=2' alt='jie_ios' id='jie_ios' /><area shape='circle' coords='160,820,63' href='#' alt='gua_ios' id='gua_ios'/></map>"
    );
  } else {
    $('.tell_pic').html(
      "<img src='http://aimg.11fen.cn/ticket/images/android.jpg' width='100%' usemap='#map2'/><map name='map2' id='map2'><area shape='circle' coords='320,900,60' href='result.php?error=wrong&question=2' alt='jie_and' id='jie_and' /><area shape='circle' coords='150,900,60' href='#' alt='gua_and' id='gua_and'/></map>"
    );
  }

  if (!IsPC()) {
    //获取热点坐标
    var iwidth = $('html,body').width();
    var iheight = $('html').height();
    //安卓接听的位置
    var cwidth_a1 = parseInt(iwidth * 0.5);
    var cheight_a1 = parseInt(iheight * 0.94);

    //	alert(iheight);
    //安卓挂断的位置
    var cwidth_a2 = parseInt(iwidth * 0.25);
    var cheight_a2 = parseInt(iheight * 0.94);

    $('#jie_and').attr('coords', cwidth_a1 + ',' + cheight_a1 + ',' + '75');
    $('#gua_and').attr('coords', cwidth_a2 + ',' + cheight_a2 + ',' + '75');

    //iphone接听的位置
    var cwidth_i1 = parseInt(iwidth * 0.78);
    var cheight_i1 = parseInt(iheight * 0.87);
    //iphone挂断的位置
    var cwidth_i2 = parseInt(iwidth * 0.2);
    var cheight_i2 = parseInt(iheight * 0.87);
    $('#jie_ios').attr('coords', cwidth_i1 + ',' + cheight_i1 + ',' + '75');
    $('#gua_ios').attr('coords', cwidth_i2 + ',' + cheight_i2 + ',' + '75');
  }

  $('#gua_and').click(function () {
    $('.tell_pic').fadeOut(300);
    document.getElementById('music').src = 'http://aimg.11fen.cn/ticket/images/time.mp3';
  });
  $('#gua_ios').click(function () {
    $('.tell_pic').fadeOut(300);
    document.getElementById('music').src = 'http://aimg.11fen.cn/ticket/images/time.mp3';
  });
});

function sibling(pos) {
  $(pos).css('display', 'block').siblings('.ques_eq').css('display', 'none');
}

function change_pic() {
  is_changing = true;
  $('#ch_box1').find('.clickcss').css('display', 'none');
  $('#ch_box1').css('display', 'none').next('#ch_box2').css('display', 'block');
  is_changing = false;
}

function change_back() {
  is_changing = true;
  $('#ch_box2').find('.clickcss').css('display', 'none');
  $('#ch_box2').css('display', 'none');
  $('#ch_box3').css('display', 'block');
  is_changing = false;
}

function avalue(name) {
  var i = 0;
  var ivalue = [];

  $('input[name=' + name + ']').each(function () {
    if ($(this).attr('checked') == 'checked' || $(this).attr('checked') == true) {
      ivalue[i] = $(this).attr('value');
      i++;
    }
  });

  return ivalue; //返回选中的value
}

function compareArray(array1, array2) {
  return array1.sort().toString() == array2.sort().toString();
}

function passtip(pass) {
  $('.passtip').find('span').html(pass);
  $('.passtip').fadeIn(0).delay(1500).fadeOut(500);
}

function judge1(name) {
  if (compareArray(re1, avalue(name))) {
    clearInterval(time);
    timer(120);
    current_stage++;

    sibling('.ques_eq:eq(1)');
    passtip('第二关<br/>机会总是转瞬即逝');
    setTimeout(function () {
      document.getElementById('music').src = 'http://aimg.11fen.cn/ticket/images/station.mp3';
    }, 0);
  } else {
    window.location.href = 'result.php?error=wrong&question=0';
  }
}

function judge2(name) {
  if (compareArray(re2, avalue(name))) {
    clearInterval(time);
    timer(120);
    current_stage++;

    sibling('.ques_eq:eq(2)');
    passtip('第三关<br/>奥巴马来电也不接');
    if (isiOS) {
      setTimeout(function () {
        document.getElementById('music').src = 'http://aimg.11fen.cn/ticket/images/iphone01.mp3';
      }, 0);
    } else {
      setTimeout(function () {
        document.getElementById('music').src = 'http://aimg.11fen.cn/ticket/images/android01.mp3';
      }, 0);
    }

    setTimeout(function () {
      $('.tellphone').fadeIn(500);
    }, 4000);
    setTimeout(function () {
      $('.tellphone').css('display', 'none');
    }, 9000);
  } else {
    window.location.href = 'result.php?error=wrong&question=1';
  }
}

function judge3(name) {
  if (compareArray(re3, avalue(name))) {
    clearInterval(time);
    timer(120);
    current_stage++;
    setTimeout(function () {
      document.getElementById('music').src = 'http://aimg.11fen.cn/ticket/images/time.mp3';
    }, 0);
    sibling('.ques_eq:eq(3)');
    passtip('第四关<br/>眼神决定成败');
  } else if (!is_changing) {
    window.location.href = 'result.php?error=wrong&question=2';
  }
}

function judge4(name) {
  if (compareArray(re4, avalue(name))) {
    clearInterval(time);
    timer(120);
    current_stage++;

    setTimeout(function () {
      document.getElementById('music').src = 'http://aimg.11fen.cn/ticket/images/time.mp3';
    }, 0);
    sibling('.ques_eq:eq(4)');
    passtip('第五关<br/>手指DPI很重要');
  } else {
    window.location.href = 'result.php?error=wrong&question=3';
  }
}

function judge5(name) {
  if (compareArray(re5, avalue(name))) {
    clearInterval(time);
    timer(120);
    current_stage++;
    setTimeout(function () {
      document.getElementById('music').src = 'http://aimg.11fen.cn/ticket/images/time.mp3';
    }, 0);

    sibling('.ques_eq:eq(5)');
    passtip('第六关<br/>请相信第一感觉');
    setTimeout('change_pic()', 7000);
    // setTimeout("change_back()", 7200);
  } else {
    window.location.href = 'result.php?error=wrong&question=4';
  }
}

function judge6() {
  if (compareArray(re61, avalue('ques6_1'))) {
    clearInterval(time);
    timer(120);
    current_stage++;
    setTimeout(function () {
      document.getElementById('music').src = 'http://aimg.11fen.cn/ticket/images/time.mp3';
    }, 0);

    sibling('.ques_eq:eq(6)');
    passtip('第七关<br/>请不要相信题目');
    setTimeout(function () {
      $('#ques7_img').find('label').css('opacity', '1');
    }, 9500);
  } else if (compareArray(re62, avalue('ques6_2'))) {
    clearInterval(time);
    timer(120);
    current_stage++;
    setTimeout(function () {
      document.getElementById('music').src = 'http://aimg.11fen.cn/ticket/images/time.mp3';
    }, 0);

    sibling('.ques_eq:eq(6)');
    passtip('第七关<br/>请不要相信题目');
    setTimeout(function () {
      $('#ques7_img').find('label').css('opacity', '1');
    }, 9500);
  } else {
    window.location.href = 'result.php?error=wrong&question=5';
  }
}
function judge7(name) {
  if (compareArray(re7, avalue(name))) {
    clearInterval(time);
    timer(120);
    current_stage++;
    setTimeout(function () {
      document.getElementById('music').src = 'http://aimg.11fen.cn/ticket/images/time.mp3';
    }, 0);

    sibling('.ques_eq:eq(7)');
    passtip('第八关<br/>眼中无码，心中有码');
    setTimeout(function () {
      $('input[name=ques8]').next('label').find('.close').attr('src', 'http://aimg.11fen.cn/ticket/images/close.png');
    }, 4000);
  } else {
    window.location.href = 'result.php?error=wrong&question=6';
  }
}
function judge8(name) {
  if (compareArray(re8, avalue(name))) {
    clearInterval(time);
    timer(120);
    current_stage++;
    setTimeout(function () {
      document.getElementById('music').src = 'http://aimg.11fen.cn/ticket/images/time.mp3';
    }, 0);

    sibling('.ques_eq:eq(8)');
    passtip('第九关<br/>智商才是根本');
    setTimeout(function () {
      $('input[name=ques9]').next('label').find('.close').attr('src', 'http://aimg.11fen.cn/ticket/images/close.png');
    }, 4000);
  } else {
    window.location.href = 'result.php?error=wrong&question=7';
  }
}

function judge9(name) {
  if (compareArray(re9, avalue(name))) {
    clearInterval(time);
    timer(120);
    current_stage++;
    setTimeout(function () {
      document.getElementById('music').src = 'http://aimg.11fen.cn/ticket/images/time.mp3';
    }, 0);
    sibling('.ques_eq:eq(9)');
    passtip('第十关<br/>我就是码，码就是我<br/>时间就是一切');
  } else {
    window.location.href = 'result.php?error=wrong&question=8';
  }
}

function judge10(name) {
  if (avalue(name).length >= 1 && intDiff >= 70) {
    clearInterval(time);
    timer(120);
    current_stage++;
    setTimeout(function () {
      document.getElementById('music').src = 'http://aimg.11fen.cn/ticket/images/time.mp3';
    }, 0);
    window.location.href = 'result.php?error=success&question=10';
  } else {
    window.location.href = 'result.php?error=wrong&question=9';
  }
}
</script>
