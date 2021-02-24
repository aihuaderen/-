<template>
  <div class="searchContainer">
      
      <!--  头部搜索栏-->
      <div class="searchTab">
        <div class="searchInput">
          <i class="iconfont icon-sousuo"></i>
          <input type="search" v-model="keyWord" @keyup.enter='addHistory' @keyup='changInput' placeholder="请输入商品名称">
        </div>
        <span @click="goBack">取消</span>
      </div>


      <!-- 搜索界面 -->
      <div v-if="!keyWord">
        <!-- 历史搜索 -->
        <div class="hisSearch" v-show="todos.length"> 
          <div class="searchTitle">
            <span>历史记录</span>
            <i class="iconfont icon-shanchu1" @click="delTodo"></i>
          </div>
          <div class="searchValue">
            <div class="item" v-for="todo in todos" :key="todo" @click="toSearchList(todo)">{{todo}}</div>
          </div>
        </div>

        <!-- 热门搜索 -->
        <div class="hotSearch">
          <span>热门搜索</span>
          <div class="hotValue">
            <div class="item" style="color: #DD1A21; border: 1px solid #DD1A21">新人首单0元购</div>
            <div class="item" v-for="(hotItem, index) in hotList" :key="index" @click="toSearchList(hotItem.keyword)">{{hotItem.keyword}}</div>
          </div>
        </div>
      </div>
      
      
      <!-- 下拉框列表 -->
      <div class="searchWrap" v-else>
        <ul class="searchList">
          <li class="searchItem" v-for="(key, index) in keyList" :key="index" @click="toSearchList(key)">
            {{key}}
            <i class="iconfont icon-guanbi"></i>
          </li>
        </ul>
      </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

let isSend = false //函数节流使用
export default {
  name: '',
  data(){
    return {
      keyWord:'', //搜索关键字
      todos: []  //存储历史搜索
    }
  },
  mounted(){
    console.log(this.$route.query.keyWord)

    if (this.$route.query.keyWord) {
      this.keyWord = this.$route.query.keyWord
    }

    this.$store.dispatch('getHotList')

    //页面挂载完成,去localStorage中获取历史数据
    let localTodoList = JSON.parse(localStorage.getItem('todos_key') || '[]');
    if (localTodoList.length) {
      this.todos = localTodoList
    }
  },
  computed: {
    ...mapState({
      hotList: state => state.search.hotList,
      keyList: state => state.search.keyList
    })
  },
  methods: {
    //搜索框变化的回调
    changInput(){
      const keyWord = this.keyWord.trim()
      // 如果为空,不执行
      if(!keyWord) return 

      //判断是否节流
      if (isSend) {
        return
      }
      isSend = true

      //调用接口发送给请求获取数据
      this.$store.dispatch('getKeyList', this.keyWord)
      //函数节流
      setTimeout(()=>{
        isSend = false
      }, 500)

    },

    //回车添加历史记录
    addHistory(){

      //根据输入的值封装一个对象
      const keyWord = this.keyWord.trim()
      // 如果为空,不添加
      if(!keyWord) return 

      //携带关键字跳转至搜素详情页
      this.$router.push({ path: `/searchlist`, query: { keyWord: this.keyWord} })
      
      // const todo = {
      //   id: Date.now(),
      //   keyWord
      // }

      let todoList = this.todos
      // 判断当前搜索关键字是否已经搜索过,如果有,则删除旧的,重新添加一遍
      if(todoList.indexOf(keyWord) !== -1){
        console.log(123)
			   todoList.splice(todoList.indexOf(keyWord), 1)
			}

      //存储在localStorage中
      todoList.unshift(keyWord)
      localStorage.setItem('todos_key', JSON.stringify(todoList))

      // this.todos = todoList

      //清除输入
      this.keyWord = ''

    },

    //回退之前页面
    goBack(){

      this.$router.go(-1)
    },

    //清空历史数据
    delTodo(){
      this.todos = []
      localStorage.removeItem('todo_key')
    },

    //携带参数跳转到搜索详情页面
    toSearchList(keyword){
      //携带关键字跳转至搜素详情页
      this.$router.push({ path: `/searchlist`, query: { keyWord: keyword} })
    }
  }
}
</script>

<style lang='less' scoped>
.searchContainer{
  width: 100%;
  height: 100vh;
  background: #eee;
}

//搜索顶部栏
.searchTab {
  width: 100%;
  height: 44px;
  padding: 0 15px;
  box-sizing: border-box;
  line-height: 44px;
  background: #fff;
  .searchInput {
    width: 302px;
    height: 28px;
    line-height: 28px;
    margin-top: 8px;
    padding: 0 10px;
    background: #f4f4f4;
    display: inline-block;
    box-sizing: border-box;
    .iconfont {
      font-size: 17px;
      margin-right: 8px;
    }
    input {
      width: 252px;
      height: 20px;
      border: none;
      font-size: 14px;
      background: #f4f4f4;
      outline: none;
    }
    input[type=search]::-webkit-search-cancel-button {
        -webkit-appearance: none;  //此处去掉默认的小×
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: url('../../assets/images/mclear@2x.png') no-repeat center;
        background-size: cover;
    }
  }
  span {
    float: right;
    font-size: 15px;
  }
}

//搜索历史
.hisSearch {
  width: 100%;
  background: #fff;
  padding: 0 15px 15px 15px;
  box-sizing: border-box;
  margin-bottom: 10px;
  .searchTitle {
    width: 100%;
    height: 45px;
    line-height: 45px;
    font-size: 15px;
    color: #999999;
    .iconfont {
      float: right;
    }
  }
  .searchValue {
    width: 100%;
    // height: 40px;
    display: block;
    .item {
      font-size: 12px;
      display: inline-block;
      padding: 0 7px;
      height: 22px;
      line-height: 22px;
      border: 1px solid #999;
      border-radius: 5px;
      margin: 0 16px 16px 0;
    }
  }
}


//搜索历史
.hotSearch {
  width: 100%;
  background: #fff;
  padding: 0 15px 15px 15px;
  box-sizing: border-box;
  margin-bottom: 10px;
  span {
    width: 100%;
    height: 45px;
    line-height: 45px;
    font-size: 15px;
    color: #999999;
  }
  .hotValue {
    width: 100%;
    // height: 40px;
    display: block;
    .item {
      font-size: 12px;
      display: inline-block;
      padding: 0 7px;
      height: 22px;
      line-height: 22px;
      border: 1px solid #999;
      border-radius: 5px;
      margin: 0 16px 16px 0;
    }
  }
}

//下拉框列表
.searchWrap {
  width: 100%;
  // height: 405px;
  padding-left: 15px;
  box-sizing: border-box;
  background: #fff;
  .searchList {
    width: 100%;
    height: 100%;
    .searchItem {
      width: 100%;
      height: 44px;
      line-height: 40px;
      border-bottom: 1px solid #d9d9d9;
      font-size: 15px;
      .iconfont {
        float: right;
        font-size: 15px;
        color: #999999;
        margin-right: 15px;
      }
    }
  }
}

</style>
