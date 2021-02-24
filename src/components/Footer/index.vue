<template>
  <div class="guide">
      <div class="guideItem"> 
          <router-link to="/" class="Item">
            <i class="iconfont icon-rhome"></i>
            <span>首页</span>
          </router-link>
      </div>
      <div class="guideItem">
          <router-link to="/category" class="Item">
            <i class="iconfont icon-iconset0497"></i>
            <span>分类</span>
          </router-link>
      </div>
      <div class="guideItem">
          <router-link to="/buy" class="Item">
            <i class="iconfont icon-tupian"></i>
            <span>值得买</span>
          </router-link>
      </div>
      <div class="guideItem">
          <router-link to="/cart" class="Item">
            <i class="iconfont icon-tubiaolunkuo-"></i>
            <span>购物车</span>
          </router-link>
      </div>
      <div class="guideItem">
          <router-link to="/personal" class="Item">
            <i class="iconfont icon-geren"></i>
            <span>个人</span>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
}
</script>


<style lang="less" scope>

    .guide {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 49px;
        background-color: #fff;
        display: flex;
        border-top: 1px solid #d9d9d9;
        .guideItem {
            display: flex;
            flex-direction: column;
            width: 20%;
            height: 100%;
            text-align: center;
            .router-link-exact-active {
                    color: #dd1a21;
                    font-weight: 500;
                }
            .Item {
                width: 100%;
                height: 100%;
                margin-top: 5px;
                .iconfont {
                    font-size: 20px;
                    display: block;
                    font-weight: 700;
                    // line-height: 30px;
                }
                span {
                    font-size: 12px;
                }
            }
        }
    }
</style>

