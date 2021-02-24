<template>
  <div class="homeContainer">
      
      <!-- 顶部栏 -->
      <div class="headerBar">
        <!-- 搜索栏 -->
        <div class="search">
          <img class="logo" src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
          <router-link class="searchInput" to="/search">
            <i class="iconfont icon-sousuo"></i>
            <span>搜索商品, 共51182款好物</span>
          </router-link>
          <router-link class="btnLogin" to="/login">登录</router-link>
        </div>

          <!-- 导航栏 -->
        <div class="navScroll">
          <ul>
            <li
              class="navItem"
              :class="{ active: navIndex === -1 }"
              @click="scrollNavIndex(-1)"
            >
              <span>推荐</span>
            </li>
            <li
              class="navItem"
              :class="{ active: navIndex === index }"
              @click="scrollNavIndex(index)"
              v-for="(navList, index) in navLists"
              :key="navList.id"
            >
              <span>{{ navList.name }}</span>
            </li>
          </ul>
        </div>

    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll' 
import {mapState} from 'vuex'

export default {
  name: '',
  data(){
    return {
      navIndex: -1
    }
  },
  mounted(){
    //将回调延迟到下次 DOM 更新循环之后执行。
    this.$nextTick(() => {
      //创建BScroll实例对象
      new BetterScroll(".navScroll", {
        scrollX: true,
        probeType: 2,
        click: true,
      });
    });
    
    this.$store.dispatch('getNavList')
  },
  computed:{
    ...mapState({
      navLists: state => state.home.navList
    })
  },
  methods: {
    //导航栏选中状态回调
    scrollNavIndex(index){
      this.navIndex = index
    }
  }
}
</script>

<style lang='less' scoped>

.homeContainer {
  width: 100%;
  background-color: #eee;
  //顶部栏
  .headerBar {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 99;
    border-bottom: 1px solid #d9d9d9;
    //搜索栏
    .search {
      display: flex;
      width: 100%;
      height: 45px;
      padding: 8px 15px;
      box-sizing: border-box;
      background: #fff;
      .logo {
        width: 70px;
        height: 20px;
        margin-top: 5px;
      }
      .searchInput {
        width: 220px;
        height: 30px;
        background: #ededed;
        position: relative;
        margin: 0 7px;
        padding: 5px 20px;
        border-radius: 5px;
        box-sizing: border-box;
        color: #666;
        .iconfont {
          font-size: 17px;
          position: absolute;
          left: 20px;
          top: 3px;
        }
        span {
          font-size: 14px;
          float: right;
        }
      }

      .btnLogin {
        width: 35px;
        height: 18px;
        line-height: 20px;
        color: #DD1A21;
        text-align: center;
        border: 1px solid #DD1A21;
        border-radius: 3px;
        margin-top: 5px;
        margin-left: 3px;
      }
    }

    //  导航栏
    .navScroll {
      width: 100%;
      height: 30px;
      //background: cornflowerblue;
      // display: flex;
      // overflow: hidden;
      font-size: 15px;
      line-height: 30px;
      ul {
        width: 700px;
        margin: 0 15px;
        // white-space: nowrap;
        .navItem {
          display: flex;
          //position: relative;
          white-space: nowrap;
          display: inline-block;
          flex-shrink: 0; /*防止被压缩*/
          height: 100%;
          span {
            display: block;
            //position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            padding: 0 10px;
            height: 25px;
          }
          &.active {
            color: #dd1a21;
            border-bottom: 1px solid #dd1a21;
            box-sizing: border-box;
          }
        }
      }
    }
  }
}

</style>
