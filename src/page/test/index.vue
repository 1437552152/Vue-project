<style scoped lang="less">
#page {
  width: 100%;
  height: 100%;
  position: relative;
  .header {
    color: #fff;
    font-size: 0.36rem;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    background: #272a31;
  }
  .content {
    width: 100%;
    .swiper {
      width: 100%;
      height: 3.75rem;
      background: #000;
      overflow: hidden;
      position: relative;
      .swiper-slide {
        font-size: 0;
        width: 100%;
        max-height: 3.75rem;
        position: relative;
      }
      .swiper-slide img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto auto;
      }
      .swiper-pagination-bullet {
        background: #fff !important;
      }
    }
    .tips {
      color: #3d596f;
      font-size: 0.26rem;
      margin: 0 0.15rem;
      height: 0.7rem;
      line-height: 0.7rem;
      text-align: left;
      position: relative;
      i {
        display: inline-block;
        width: 0.7rem;
        height: 0.7rem;
        vertical-align: middle;
        background-image: url("../../images/tip.png");
        background-size: 100% 100%;
        background-position: center center;
        background-repeat: no-repeat;
      }
      span {
        vertical-align: middle;
      }
    }
    .moneyChange {
      width: 100%;
      ul {
        width: 100%;
        display: flex;
        li {
          flex: 1;
          font-weight: bold;
          margin: 0.2rem 0;
          .listTitle {
            color: #000;
            font-size: 0.24rem;
            line-height: 0.4rem;
          }
          .tradePrice {
            color: #fa4841;
            font-size: 0.36rem;
            line-height: 0.4rem;
          }
          .tradeWave {
            color: #fa4841;
            font-size: 0.26rem;
            line-height: 0.4rem;
          }
          .totlePrice {
            color: #000;
            font-size: 0.2rem;
            line-height: 0.4rem;
          }
          &:nth-child(2) {
            position: relative;
            &:before {
              content: "";
              position: absolute;
              left: 0;
              bottom: 0;
              width: 0;
              height: 100%;
              pointer-events: none;
              border-left: 1px solid #ccc;
              overflow: hidden;
              -webkit-transform-origin: 0 0;
              -moz-transform-origin: 0 0;
              -ms-transform-origin: 0 0;
              -o-transform-origin: 0 0;
              transform-origin: 0 0;
              -webkit-transform: scaleX(0.5);
              -ms-transform: scaleX(0.5);
              -o-transform: scaleX(0.5);
              transform: scaleX(0.5);
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
            }
            &:after {
              content: "";
              position: absolute;
              right: 0;
              bottom: 0;
              width: 0;
              height: 100%;
              pointer-events: none;
              border-right: 1px solid #ccc;
              overflow: hidden;
              -webkit-transform-origin: 0 0;
              -moz-transform-origin: 0 0;
              -ms-transform-origin: 0 0;
              -o-transform-origin: 0 0;
              transform-origin: 0 0;
              -webkit-transform: scaleX(0.5);
              -ms-transform: scaleX(0.5);
              -o-transform: scaleX(0.5);
              transform: scaleX(0.5);
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
            }
          }
        }
      }
    }
    .rank {
      color: #85919a;
      font-size: 0.26rem;
      width: 100%;
      height: 0.55rem;
      line-height: 0.55rem;
      text-align: left;
      background: #f1f4f6;
      i {
        display: inline-block;
        width: 0.55rem;
        height: 0.55rem;
        margin: 0 0 0 0.15rem;
        vertical-align: middle;
        background-image: url("../../images/icon_rank.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center center;
      }
      span {
        vertical-align: middle;
      }
    }
    .priceRank {
      width: 100%;
      padding: 0 0 1rem 0;
      ul {
        width: 100%;
        li {
          width: 100%;
          height: 1.1rem;
          padding: 0.25rem;
          box-sizing: border-box;
          display: flex;
          .rankIndex {
            color: #fff;
            font-size: 0.2rem;
            width: 0.35rem;
            height: 0.35rem;
            line-height: 0.25rem;
            text-align: center;
            vertical-align: top;
            background-image: url("../../images/icon_rankFlag.png");
            background-size: 100% 100%;
            background-position: center center;
            background-repeat: no-repeat;
          }
          .rankName {
            flex: 1;
            font-size: 0;
            margin: 0 0 0 0.2rem;
            text-align: left;
            vertical-align: top;
            .title {
              color: #000;
              font-size: 0.28rem;
              font-weight: bold;
              line-height: 0.28rem;
            }
            .content {
              color: #999;
              font-size: 0.24rem;
              line-height: 0.2rem;
              margin: 0.12rem 0 0 0;
            }
          }
          .rankPrice {
            font-size: 0;
            margin: 0 0.8rem 0 0;
            text-align: left;
            vertical-align: top;
            .title {
              color: #000;
              font-size: 0.28rem;
              font-weight: bold;
              line-height: 0.28rem;
            }
            .content {
              color: #999;
              font-size: 0.24rem;
              text-align: right;
              line-height: 0.2rem;
              margin: 0.12rem 0 0 0;
            }
          }
          .rankButton {
            color: #fff;
            font-size: 0.28rem;
            width: 1.5rem;
            height: 0.6rem;
            line-height: 0.6rem;
            text-align: center;
            border-radius: 2px;
            background: #1ab763;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div id="page">
    <div v-wechat-title="$route.meta.title"></div>
   <mt-header title="long long long long title">
  <router-link to="/" slot="left">
    <mt-button icon="back">back</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
    <div class="header"  @click="klineFunc1()">
      {{ $t('home') }}
    </div>
    <div class="content">
      <!-- <div class="swiper" ref="swipeid">
        <div class="swiper-wrapper" >
          <div class="swiper-slide" v-for="(item, index) in Data" :key="index" @click="showPictureFunc(index)">
            <img :src="item.url">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div> -->
      <div class="tips bor-b">
        <i></i>
        <span>BCG--{{ $t('indexIntro') }}</span>
      </div>
      <div class="moneyChange">
        <ul>
          <li v-for="(item, index) in recommendData" :key="index" @click="klineFunc(item.symbol)">
            <div class="listTitle">{{ item.symbol }}</div>
            <div class="tradePrice">{{ item.high }}</div>
            <div class="tradeWave">{{ item.usdRate }}%</div>
            <div class="totlePrice">{{ item.usdRate }}</div>
          </li>
        </ul>
      </div>
      <div class="rank">
        <i class="icon_rank"></i>
        <span>{{ $t('indexRank') }}</span>
      </div>
      <div class="priceRank">
        <ul>
          <li v-for="(item, index) in changeRankData" :key="index" @click="klineFunc(item.symbol)">
            <div class="rankIndex">{{ index + 1 }}</div>
            <div class="rankName">
              <div class="title">{{ item.symbol }}</div>
              <div class="content">
                <span>{{ $t('quantity') }} {{ item.lastDayClose }}</span>
              </div>
            </div>
            <div class="rankPrice">
              <div class="title">{{ item.usdRate }}</div>
              <div class="content">
                <span>¥{{ item.usdRate }}</span>
              </div>
            </div>
            <div class="rankButton">
              <span>{{ item.usdRate }}%</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import Toast from "toast";
// import Swiper from "Swiper";
export default {
  name: "Index",
  data() {
    return {
      Data: [],
      Dom: "",
      title: this.$t("home"),
      productList: [],
      recommendData: [],
      changeRankData: []
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      /**
       * 排行，推荐数据
       */
      this.$http.Indexrecommend().then(res => {
        [this.changeRankData, this.recommendData] = [
          res.changeRank,
          res.recommend
        ];
      });
      /**
       * 轮播图
       */
      this.$http
        .Advertise({
          sysAdvertiseLocation: 0
        })
        .then(res => {
          let self = this;
          self.Data = res.data;
          self.$nextTick(() => {
            // self.Dom = new Swiper(self.$refs.swipeid, {
            //   direction: "horizontal",
            //   autoplay: true,
            //   loop: false,
            //   observer: true,
            //   pagination: {
            //     el: ".swiper-pagination"
            //   },
            //   observeParents: true
            // });
          });
        });
    },
    klineFunc(symbol) {
      this.$router.push({
        path: "kline",
        query: { symbol: symbol }
      });
    },
    klineFunc1() {
      this.$Toast({
        message: "提示语句",
        position: "middle",
        duration: 5000
      });
    },
    showPictureFunc(index) {}
  }
};
</script>
