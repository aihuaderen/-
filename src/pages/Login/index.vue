<template>
  <div class="login">
    <Header></Header>
    <!-- 登录页面 -->
    <div class="logo-container" v-if="!isPhone && !isEmail">
      <div class="logotype">
        <img
          class="logo"
          src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
          alt=""
        />
      </div>
      <div class="btn">
        <div class="phone" @click="toPhone">
          <i class="iconfont icon-shouji"></i>
          <span>手机号快捷登录</span>
        </div>
        <div class="emain" @click="toEmail">
          <i class="iconfont icon-youxiang"></i>
          <span>邮箱帐号登录</span>
        </div>
      </div>
      <div class="third-login">
        <ul>
          <li>
            <span>
              <i class="iconfont icon-weixin"></i>
              <span>微信</span>
            </span>
          </li>
          <li>
            <span>
              <i class="iconfont icon-QQ"></i>
              <span>QQ</span>
            </span>
          </li>
          <li>
            <span>
              <i class="iconfont icon-weibo"></i>
              <span>微博</span>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <!--  手机号登录-->
    <div class="phone-container" v-else-if="isPhone">
      <div class="login2">
        <img class="logo" src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
      </div>
      <div class="form">
        <form>
          <input class="phoneVal" name="phone" v-model="phone" v-validate="'required|mobile'" maxlength="11" type="tel" placeholder="请输入手机号">
          <span style="color: red;" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
          <div class="auth">
            <input type="text" name="captcha" v-model="captcha" v-validate="'required|captcha'" maxlength="8" placeholder="请输入短信验证码">
            <button>获取验证码</button>
          </div>
          <div class="problem">
            <span>遇到问题?</span>
            <span class="yanz">使用验证码登录</span>
          </div> 
          <button class="loginbtn">登录</button>
          <div class="policy">
            <input type="checkbox">
            <span>我同意</span>
            <span class="link">《服务条款》</span>
            <span>和</span>
            <span class="link">《网易隐私政策》</span>
          </div>
          <div class="qita" @click="toLogin">
            <span>其他登录方式></span>
          </div>
        </form>
      </div>
    </div>

    <!-- 邮箱登录 -->
    <div class="emain-container" v-else>
      <div class="login3">
        <img class="logo" src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
      </div>
      <div class="from2">
        <form>
          <div class="emainVal">
            <input name="email" v-model="email" v-validate="'required|email'" type="email" maxlength="11" placeholder="邮箱账号">
          </div>
          <div class="password">
            <input v-model="pwd" name="pwd" v-validate="'required|code'" type="password" maxlength="8" placeholder="密码">
          </div>
          <div class="registered">
            <span>注册账号</span>
            <span class="resRight">忘记密码</span>
          </div>
          <button class="loginbtn2">登录</button>
          <div class="qita2" @click="toLogin">
            <span>其他登录方式></span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
export default {
  name: "Login",
  data(){
    return {
      isPhone:false,
      isEmail:false,
      email: '',
      pwd:'',
      captcha:'',
      phone:''
    }
  },
  components: {
    Header,
  },
  methods: {
    toPhone(){
      this.isPhone = true
    },
    toEmail(){
      this.isEmail = true
    },
    toLogin(){
      this.isPhone = false
      this.isEmail = false
    }
  }
};
</script>

<style lang='less' scoped>

// 登录页面
.login {
  width: 100%;
  height: 666px;
  background-color: #f2f5f4;
  .logo-container {
    width: 100%;
    height: 100%;
    .logotype {
      width: 100%;
      height: 90px;
      text-align: center;
      padding-top: 130px;
      .logo {
        width: 135px;
        height: 45px;
        display: inline-block;
      }
    }
    .btn {
      width: 100%;
      height: 110px;
      padding: 0 20px;
      box-sizing: border-box;
      text-align: center;
      padding-bottom: 110px;
      .phone {
        width: 100%;
        height: 47px;
        line-height: 47px;
        background-color: #dd1a21;
        border: 1px solid #dd1a21;
        border-radius: 5px;
        margin-bottom: 16px;
        span {
          font-size: 15px;
          color: #f2f5f4;
        }
        .iconfont {
          color: #fff;
          margin: 0 8px 0 0;
          font-size: 25px;
        }
      }
      .emain {
        width: 100%;
        height: 47px;
        line-height: 47px;
        border: 1px solid #dd1a21;
        span {
          font-size: 15px;
          color:  #dd1a21;
        }
        .iconfont {
          color:  #dd1a21;
          margin: 0 8px 0 0;
          font-size: 25px;
        }

        //  background-color: #dd1a21;
      }
    }
    .third-login {
      width: 100%;
      padding: 0 50px;
      box-sizing: border-box;
      position: fixed;
      bottom: 50px;
      ul {
       display: flex;
       justify-content: space-around;
       li {
        padding: 0 20px;
        color: #7F7F7F;
        font-size: 14px;
        text-align: center;
        &:nth-child(2) {
          border-left: 1px solid #979797;
          border-right: 1px solid #979797;
        span {
          iconfont {
            font-size: 20px;
            margin-right: 4px;
            vertical-align: middle;
          }
          span { 
            vertical-align: middle;
          }
        }
        }
       }
      }
    }
  }
}


// 手机登录页面
.phone-container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .login2 {
      width: 100%;
      height: 90px;
      text-align: center;
      padding-top: 78px;
      .logo {
        width: 135px;
        height: 45px;
        display: inline-block;

      }
  }

  .form {
    width: 100%;
    padding: 0 20px 0 20px;
    box-sizing: border-box;
    .phoneVal {
      width: 100%;
      height: 45px;
      font-size: 14px;
      outline: none;
      vertical-align: text-bottom;
      border: none;
      border-bottom: 1px solid #eee;
      margin-bottom: 10px;
    }
    .auth {
      width: 100%;
      height: 45px;
      margin: 10px 0;
      border-bottom: 1px solid #eee;
      input {
        width: 190px;
        height: 100%;
        border: none;
        outline: none;
        font-size: 14px;
      }
      button {
        width: 82px;
        height: 26px;
        font-size: 14px;
        background-color: #fff;
        border: 1px solid #7f7f7f;
        float: right;
        margin: 10px;
      }
    }
    .problem {
      width: 100%;
      height: 45px;
      line-height: 45px;
      font-size: 14px;
      color:#666;
      .yanz {
        float: right;
        color: #333;
        font-size: 15px;
      }
    }
    .loginbtn {
      width: 100%;
      height: 45px;
      line-height: 45px;
      text-align: center;
      background-color: #dd1a21;
      border: none;
      border-radius: 3px;
      color: #fff;
      font-size: 15px;
      margin: 10px 0;
    }
    .policy {
      width: 100%;
      height: 20px;
      line-height: 20px;
      input {
        width: 17px;
        height: 17px;
        border: 1px solid #eee;
        outline: none;
        margin-right: 6px;
        vertical-align: middle;
      }
      span {
        color: #7f7f7f;
        font-size: 12px;
        vertical-align: middle;
      }
      .link {
        color: #007AFF;
      }
    }
    .qita {
      width: 100%;
      font-size: 15px;
      text-align: center;
      margin-top: 30px;
    }
  }
}


//邮箱登录
.emain-container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .login3 {
      width: 100%;
      height: 90px;
      text-align: center;
      padding-top: 78px;
      .logo {
        width: 135px;
        height: 45px;
        display: inline-block;
      }
    }

  .from2 {
    width: 100%;
    padding: 0 20px 0 20px;
    box-sizing: border-box;
    .emainVal {
      width: 100%;
      height: 45px;
      margin-top: 30px ;
      font-size: 14px;
      outline: none;
      border-bottom: 1px solid #eee;
      input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
      }
    }
    .password {
      width: 100%;
      height: 45px;
      font-size: 14px;
      outline: none;
      border-bottom: 1px solid #eee;
      margin-bottom: 10px;
      input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
      }
    }
    .registered {
      width: 100%;
      height: 35px;
      line-height: 35px;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      color: #7f7f7f;
      .resRight{
        float: right;
      }
    }
    .loginbtn2 {
      width: 100%;
      height: 45px;
      line-height: 45px;
      text-align: center;
      background-color: #dd1a21;
      border: none;
      border-radius: 3px;
      color: #fff;
      font-size: 15px;
      margin: 10px 0;
    }
    .qita2 {
      width: 100%;
      font-size: 14px;
      text-align: center;
      margin-top: 30px;
    }
  }
}

</style>
