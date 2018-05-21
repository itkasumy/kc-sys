<template>
  <div>
    <div class="topContainer">
      <div class="cctv">
        <div class="videoContent">
          <video id="my-video" class="video-js" controls preload="auto" poster="../../assets/common/images/loading.gif" data-setup="{}">
            <source src="rtmp://47.106.10.7:10082/hls/1234" type="rtmp/flv">
            <!-- 如果上面的rtmp流无法播放，就播放hls流 -->
            <!-- <source src="http://10.10.5.119/live/livestream.m3u8" type='application/x-mpegURL'> -->
            <p class="vjs-no-js">
              播放视频需要启用 JavaScript，推荐使用支持HTML5的浏览器访问。
              To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
            </p>
          </video>
        </div>
        <div class="tongjilingContent" v-show="false">
          <div class="tongjiInfoContent">
            <div class="baseInfo">
              <div class="tongjiPhoto"></div>
              <div class="tontjiInfo">
                <ul>
                  <li>
                    <span class="infoType">姓名</span>
                    <span class="infoVal">刘军</span>
                  </li>
                  <li>
                    <span class="infoType">性别</span>
                    <span class="infoVal">男</span>
                  </li>
                  <li>
                    <span class="infoType">民族</span>
                    <span class="infoVal">汉</span>
                  </li>
                  <li>
                    <span class="infoType">出生日期</span>
                    <span class="infoVal">1971年4月13日</span>
                  </li>
                  <li>
                    <span class="infoType">户籍地址</span>
                    <span class="infoVal">山西省闻喜县山和镇西南街道11号</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="tongjiDetail">
              山西省忻州市公安机关在侦办一起职务侵占案过程中发现，忻州市保德县信用联社金库出纳杨福生利用职务之便，通过采取私刻印章冒领现金支票、无往来缴款凭证凭空记现金账等手段，非法占有1054余万元资金.
              <p style="text-align: right;">山西省闻喜县公安局</p>
              <p style="text-align: right;">2019-05-06</p>
            </div>
          </div>
        </div>
      </div>
      <div class="infoContent">
        <div class="faceDetect">
          <div class="briefInfo">
            <div class="readFace">
              <div class="face"><img src="" alt=""></div>
              <div class="detectName">姓名：吴慕雯</div>
            </div>
            <div class="semblance"><p class="xiangshidu">{{98.00809789.toFixed(2)}}%</p>相似度</div>
            <div class="sourceFace">
              <div class="face"></div>
              <div class="detectName">姓名：吴慕雯</div>
            </div>
          </div>
          <div class="detailInfo">
            <ul>
              <li class="clearfix">
                <span class="typeName">常用联系电话</span>
                <span class="typeVal">09208355</span>
              </li>
              <li class="clearfix">
                <span class="typeName">上次来沪日期</span>
                <span class="typeVal">2015-09-15 00:00:00</span>
              </li>
              <li class="clearfix">
                <span class="typeName">身份标签</span>
                <span class="typeVal">未知</span>
              </li>
              <li class="clearfix">
                <span class="typeName">性别</span>
                <span class="typeVal">男性</span>
              </li>
              <li class="clearfix">
                <span class="typeName">出生日期</span>
                <span class="typeVal">1985-06-01</span>
              </li>
              <li class="clearfix">
                <span class="typeName">证件号码</span>
                <span class="typeVal">310229198506018315</span>
              </li>
              <li class="clearfix">
                <span class="typeName">国籍</span>
                <span class="typeVal">中国</span>
              </li>
              <li class="clearfix">
                <span class="typeName">联系地址</span>
                <span class="typeVal">上海市青浦区盈港东路6666号</span>
              </li>
              <li class="clearfix">
                <span class="typeName">居住类型</span>
                <span class="typeVal">其他</span>
              </li>
              <li class="clearfix">
                <span class="typeName">是否有在逃记录</span>
                <span class="typeVal">否</span>
              </li>
              <li class="clearfix">
                <span class="typeName">是否在出租房产</span>
                <span class="typeVal">否</span>
              </li>
              <li class="clearfix">
                <span class="typeName">是否有精神病史</span>
                <span class="typeVal">否</span>
              </li>
            </ul>
          </div>
          <div class="divideLine"></div>
        </div>
        <div class="plateNumberDetect" v-show="plateNumberDetectShow">
          <div class="plateNuberPhoto">
            <img src="../../assets/common/images/113921558.jpg" alt="">
          </div>
          <div class="ownerInfo">
            <div class="title">车主信息</div>
            <ul>
              <li class="clearfix">
                <span class="typeName">车牌号</span>
                <span class="typeVal">{{ycyd.HPHM}}</span>
              </li>
              <li class="clearfix">
                <span class="typeName">姓名</span>
                <span class="typeVal">{{ycyd.XM}}</span>
              </li>
              <li class="clearfix">
                <span class="typeName">住所地址</span>
                <span class="typeVal">{{ycyd.ZSXXDZ}}</span>
              </li>
            </ul>
          </div>
          <div class="peccancyInfo">
            <div class="title">违章信息</div>
            <ul>
              <li class="clearfix">
                <span class="typeName">违章处理机构</span>
                <span class="typeVal">{{ycyd.CLJGMC}}</span>
              </li>
              <li class="clearfix">
                <span class="typeName">违法地址</span>
                <span class="typeVal">{{ycyd.WFDZ}}</span>
              </li>
              <li class="clearfix">
                <span class="typeName">违法时间</span>
                <span class="typeVal">{{ycyd.WFSJ}}</span>
              </li>
              <li class="clearfix">
                <span class="typeName">处理时间</span>
                <span class="typeVal">{{ycyd.CLSJ}}</span>
              </li>
            </ul>
          </div>
          <div class="registerInfo">
            <div class="title">登记信息</div>
            <ul>
              <li class="clearfix">
                <span class="typeName">出厂日期</span>
                <span class="typeVal">{{ycyd.CCRQ}}</span>
              </li>
              <li class="clearfix">
                <span class="typeName">初次登记日期</span>
                <span class="typeVal">{{ycyd.CCDJRQ}}</span>
              </li>
              <li class="clearfix">
                <span class="typeName">登记日期</span>
                <span class="typeVal">{{ycyd.DJRQ}}</span>
              </li>
              <li class="clearfix">
                <span class="typeName">总质量</span>
                <span class="typeVal">{{ycyd.ZZL}}</span>
              </li>
              <li class="clearfix">
                <span class="typeName">使用性质</span>
                <span class="typeVal">{{ycyd.SYXZ}}</span>
              </li>
              <li class="clearfix">
                <span class="typeName">车身颜色</span>
                <span class="typeVal">{{ycyd.CSYS}}</span>
              </li>
              <li class="clearfix">
                <span class="typeName">车外廓宽</span>
                <span class="typeVal">{{ycyd.CWKK}}</span>
              </li>
              <li class="clearfix">
                <span class="typeName">车外廓高</span>
                <span class="typeVal">{{ycyd.CWKG}}</span>
              </li>
              <li class="clearfix">
                <span class="typeName">车外廓长</span>
                <span class="typeVal">{{ycyd.CWKC}}</span>
              </li>
              <li class="clearfix">
                <span class="typeName">中文品牌</span>
                <span class="typeVal">{{ycyd.CLPP1}}</span>
              </li>
              <li class="clearfix">
                <span class="typeName">发动机号</span>
                <span class="typeVal">{{ycyd.FDJH}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="IDDetect" v-show="false">
          <div class="IDPhoto">
            <img src="../../assets/common/images/113921558.jpg" alt="">
          </div>
          <div class="IDinfo">
            <div class="title">身份信息</div>
            <ul>
              <li class="clearfix">
                <span class="typeName">姓名</span>
                <span class="typeVal">齐尚吉</span>
              </li>
              <li class="clearfix">
                <span class="typeName">上次来沪日期</span>
                <span class="typeVal">2017-04-19 20:53:09</span>
              </li>
              <li class="clearfix">
                <span class="typeName">人员身份标签</span>
                <span class="typeVal">nill</span>
              </li>
              <li class="clearfix">
                <span class="typeName">常用联系电话</span>
                <span class="typeVal">1235546768</span>
              </li>
              <li class="clearfix">
                <span class="typeName">性别</span>
                <span class="typeVal">男</span>
              </li>
              <li class="clearfix">
                <span class="typeName">证件号码</span>
                <span class="typeVal">622301199011283335</span>
              </li>
              <li class="clearfix">
                <span class="typeName">国籍</span>
                <span class="typeVal">中国</span>
              </li>
              <li class="clearfix">
                <span class="typeName">联系地址</span>
                <span class="typeVal">广东省深圳市南山区高新南一道8号创维大厦A座15楼西</span>
              </li>
              <li class="clearfix">
                <span class="typeName">居住类型</span>
                <span class="typeVal">暂住人口</span>
              </li>
              <li class="clearfix">
                <span class="typeName">是否有在逃记录</span>
                <span class="typeVal">否</span>
              </li>
              <li class="clearfix">
                <span class="typeName">是否有精神病史</span>
                <span class="typeVal">否</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bottomContent">
      <ul class="matchListWrap">
        <li class="matchList" v-for="item in helmats" :key="item.id" :class="{active: item.isActive}" @click="handHelmat(item)">
          <div class="name">{{item.name}}</div>
          <div class="code">{{item.code}}</div>
        </li>
      </ul>
      <div class="arrowWrap">
        <div v-if="false" class="arrUp"></div>
        <div v-else class="arrUpGray"></div>
        <div v-if="true" class="arrDown"></div>
        <div v-else class="arrDownGray"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      websocket: null,
      faceDetectShow: false,
      plateNumberDetectShow: false,
      helmats: [
        {
          id: 1,
          name: 'zhangsan',
          code: 123456,
          isActive: false
        },
        {
          id: 2,
          name: 'lisi',
          code: 123456,
          isActive: false
        }
      ],
      ycyd: {},
      eTu: {}
    }
  },
  mounted () {
    this.initWebSocket()
  },
  methods: {
    initWebSocket () {
      // this.websocket = new WebSocket('ws://192.168.0.115:8080/websocket.action')
      this.websocket = new WebSocket('wss://zntk.police.sh.cn/websocket.action')
      this.websocket.onopen = this.websocketOnOpen
      this.websocket.onmessage = this.websocketOnMessage
      this.websocket.onclose = this.websocketClose
      this.websocket.onerror = this.websocketOnError
    },
    websocketOnOpen (e) {
      console.log(`open ${e}`)
      const msg = {
        deviceId: '',
        order: 'openAllMsgPush'
      }
      this.websocketSend(JSON.stringify(msg))
    },
    websocketSend (agentData) {
      this.threadPoxi(agentData)
    },
    threadPoxi (agentData) {
      if (this.websocket.readyState === this.websocket.OPEN) {
        this.websocket.send(agentData)
      } else if (this.websocket.readyState === this.websocket.CONNECTING) {
        setTimeout(() => this.websocket.send(agentData), 300)
      } else {
        setTimeout(() => this.websocket.send(agentData), 500)
      }
    },
    websocketOnMessage (e) {
      console.log(e.data)
      if (e.data) {
        const resData = JSON.parse(e.data) || {}
        if (resData.resName === 'ycyd') {
          if (resData.ycyd && resData.success) {
            const obj = resData.ycyd.data
            for (const key in obj) {
              this.$set(this.ycyd, key, obj[key])
            }
          }
          if (resData.ycyd && resData.ycyd.wf) {
            const obj = resData.ycyd.wf.data
            for (const key in obj) {
              this.$set(this.ycyd, key, obj[key])
            }
          }
          if (resData.ycyd && resData.ycyd.dj) {
            const obj = resData.ycyd.dj.data
            for (const key in obj) {
              this.$set(this.ycyd, key, obj[key])
            }
          }
        } else if (resData.resName === 'Etu') {
          this.$set(this.eTu, 'oriPic', resData.oriPic)
        }
      }
    },
    websocketClose (e) {
      console.log(`connection closed (${e.code})`)
    },
    websocketOnError (e) {
      console.log(`error ${e}`)
    },
    handHelmat (item) {
      this.helmats.forEach(ele => {
        ele.isActive = false
      })
      item.isActive = true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/style/mixin"
.topContainer
  display flex
  height 4.083333rem
  padding-bottom .078125rem
  .cctv
    position relative
    whb 6.609375rem, 4.083333rem, "../../assets/common/images/hel_videoBg.png"
    margin-right .052083rem
    .videoContent
      position absolute
      top .052083rem
      left .046875rem
      width 6.520833rem
      height 3.989583rem
      border-radius .052083rem
      overflow hidden
      #my-video
        display block
        widthHeight 6.520833rem, 3.989583rem
    .tongjilingContent
      position absolute
      left 50%
      top 50%
      width 4.166667rem
      height 3.125rem
      transform translate(-50%, -50%)
      background url("../../assets/common/images/tongjiling_bg.png") 0 0 / 100% 100% no-repeat
      z-index 100
      .tongjiInfoContent
        widthHeight 3.125rem, 2.083333rem
        transform translate(.520833rem, .520833rem)
        .baseInfo
          display flex
          height 1.041667rem
          .tongjiPhoto
            whb .8125rem, .96875rem, "../../assets/common/images/113921558.jpg"
          .tontjiInfo
            li
              height .1875rem
              line-height .1875rem
              font-size .072917rem
              color #fff
              .infoType
                float left
                width .4375rem
                margin-left .15625rem
              .infoVal
                float left
                margin-left .208333rem
        .tongjiDetail
          height 1.041667rem
          line-height .166667rem
          overflow-y scroll
          font-size .083333rem
          font-weight 400
          letter-spacing .007813rem
          color #fff
          text-indent 2em
  .infoContent
    width 2.083333rem
    height 3.645833rem
    padding .208333rem .3125rem
    background url("../../assets/common/images/readContentBg.png") 0 0 / 100% 100% no-repeat
    overflow-y scroll
    .faceDetect
      .briefInfo
        display flex
        height .9375rem
        .readFace
          whb .645833rem, .645833rem, "../../assets/common/images/readFace_bg.png"
          .face
            widthHeight .645833rem, .645833rem
          .detectName
            width .645833rem
            padding-top .052083rem
            text-align center
            font-size .072917rem
            color #d8edff
        .semblance
          width .395833rem
          height .208333rem
          padding-top .052083rem
          background url("../../assets/common/images/semblance_bg.png") 0 0 / 100% 100%
          margin .1875rem .197917rem
          text-align center
          color #d8edff
          font-size .0625rem
          .xiangshidu
            line-height .09375rem
            margin-bottom .020833rem
            color #17d1ff
            font-size .083333rem
        .sourceFace
          whb .645833rem, .645833rem, "../../assets/common/images/readFace_bg.png"
          .face
            widthHeight .645833rem, .645833rem
          .detectName
            width .645833rem
            padding-top .052083rem
            text-align center
            font-size .072917rem
            color #d8edff
      .detailInfo
        font-size .0625rem
        li
          height .15625rem
          line-height .15625rem
        .typeName
          float left
          width .4375rem
          color #a1b3c2
        .typeVal
          float left
          margin-left .375rem
          color #d8edff
      .divideLine
        height .010417rem
        background url("../../assets/common/images/readContentBg_top.png") 0 0 / 100% 100% no-repeat
        margin .208333rem 0
    .plateNumberDetect
      .plateNuberPhoto
        width .625rem
        height .625rem
        padding .010417rem
        margin 0 auto
        background url("../../assets/common/images/readFace_bg.png") 0 0 / 100% 100% no-repeat
        font-size 0
        img
          widthHeight .625rem, .625rem
          border-radius 50%
      .ownerInfo, .peccancyInfo, .registerInfo
        .title
          height .125rem
          line-height .125rem
          border-bottom 1px solid #3db5ff
          margin .078125rem 0
          color #3db5ff
          font-size .09375rem
          font-weight 600
        li
          height .15625rem
          line-height .15625rem
          font-size .0625rem
          .typeName
            float left
            width .520833rem
            color #a1b3c2
          .typeVal
            float left
            margin-left .375rem
            color #d8edff
    .IDDetect
      .IDPhoto
        widthHeight 1.25rem, .9375rem
        border 2px solid #3db5ff
        margin 0 auto
        font-size 0
        img
          widthHeight 1.25rem, .9375rem
      .IDinfo
        .title
          height .125rem
          line-height .125rem
          border-bottom 1px solid #3db5ff
          margin .078125rem 0
          color #3db5ff
          font-size .09375rem
          font-weight 600
        li
          height .15625rem
          line-height .15625rem
          font-size .0625rem
          .typeName
            float left
            width .520833rem
            color #a1b3c2
          .typeVal
            float left
            width 1.25rem
            margin-left .208333rem
            color #d8edff
.bottomContent
  position relative
  height 1.041667rem
  padding-right .364583rem
  background url("../../assets/common/images/hel_deviceListBg.png") 0 0 / 100% 100% no-repeat
  .matchListWrap
    height 1.041667rem
    overflow hidden
    .matchList
      float left
      position relative
      width .645833rem
      height .645833rem
      padding .197917rem
      text-align center
      background url("../../assets/common/images/hel_deviceBg.png") .197917rem .197917rem / .645833rem .645833rem no-repeat
      color #26b7ff
      cursor pointer
      .name
        posTop 1.041667rem, .104167rem, "", .416667rem
        text-align center
        font-size .083333rem
      .code
        posTop 1.041667rem, .104167rem, "", .520833rem
        text-align center
        font-size .0625rem
      &.active
        width .885417rem
        height .885417rem
        padding .078125rem
        background url("../../assets/common/images/hel_deviceListBg_focus.png") .078125rem .078125rem / .885417rem .885417rem no-repeat
        color #d8fdff
        .name
          posTop 1.041667rem, .104167rem, "", .416667rem
          text-align center
          font-size .09375rem
          font-weight 600
        .code
          posTop 1.041667rem, .104167rem, "", .520833rem
          text-align center
          font-size .072917rem
  .arrowWrap
    posTopR .208333rem, .520833rem, "", .260417rem, .15625rem
    .arrUp
      posTop .208333rem, .208333rem, "../../assets/common/images/hel_before.png"
      cursor pointer
    .arrUpGray
      posTop .208333rem, .208333rem, "../../assets/common/images/hel_before_disable.png"
    .arrDown
      posBtm .208333rem, .208333rem, "../../assets/common/images/hel_next.png"
      cursor pointer
    .arrDownGray
      posBtm .208333rem, .208333rem, "../../assets/common/images/hel_next_disable.png"
</style>
