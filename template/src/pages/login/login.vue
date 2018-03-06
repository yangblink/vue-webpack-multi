<template>
  <div class="container">
    <div class="login">
      <div>
        请输入账号：<input type="text" v-model="tel">
      </div>
      <div>
        请输入密码：<input type="text" v-model="pd">
      </div>
      <button @click="login">登录</button>
      <button @click="home">首页</button>
      <div>{{msg}}</div>  
    </div>
    
    <div class="des">
      使用<a href="https://github.com/amfe/article/issues/17">flexible</a>布局将页面的宽度分割为10rem,下方区块如不在一行内占满，则说明系统字体非默认大小
    </div>
    <div class="tester">
      <div class="tester-flexible">
        <div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div>
      </div>
    </div>

    <!-- <div class="des">
      <h1>flex布局测试</h1>
    </div>
    <div class="tester">
    </div> -->

  </div>
</template>

<script>
  import { login } from '@/utils/api'
  export default {
    data(){
      return{
        msg: '',
        tel: '13922222222',
        pd: '0000',
        // tel: '13208009857',
        // pd: '1111',
      }
    },
    methods: {
      login: function(){
        var params = {
          mobile: this.tel,
          validateCode: this.pd
        };
        var self = this;
        login(this.tel, this.pd).then(res => {
          this.msg = JSON.stringify(res.data)
        }).catch(e => {
          this.msg = JSON.stringify(e.data)
          console.warn(e)
        })
      },
      home: function(){
        if(window.history && window.history.length > 1) {
          window.history.go(-1)
        }
      }
    }
  }
</script>

<style lang='scss'>
  html, body {
    position: relative;
    height: 100vh;
  }
  .login {
    padding: 30px;
    font-size: 30px;
    input {
      border: 1px solid black;
    }
    button {
      font-size: 30px;
    }
  }
  .des {
    font-size: 24px;
    margin: 50px 0 0 0;
  }
  .tester {
    background-color: #ccc;
  }
  .tester-flexible {
    overflow: hidden;
    font-size: 0;
  }
  .box {
    height: 50px;
    width: 1rem;
    background-color: red;
    display: inline-block;
    &:nth-child(odd) {
      background-color: blue;
    }
  }

</style>