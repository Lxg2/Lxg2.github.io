(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50a643db"],{1577:function(e,t,s){"use strict";s("adb3")},"9ed6":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-container"},[s("div",{staticClass:"login-box row-center"},[s("div",{staticClass:"company-profile"},[s("div",{staticClass:"name mb24"},[e._v("石岩街道虚拟园区")]),s("div",{staticClass:"explain"},[e._v("数字化管理-助力企业数字化转型")]),s("svg-icon",{staticStyle:{"font-size":"380px"},attrs:{"icon-class":"3d"}})],1),s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[s("div",{staticClass:"welcome"},[e._v("您好，欢迎回来")]),s("div",{staticClass:"title"},[e._v("登录您的账号")]),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"users"}})],1),s("el-input",{ref:"username",attrs:{placeholder:"请输入你的账号",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),s("el-form-item",{attrs:{prop:"userpwd"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),s("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"请输入账号密码",autocomplete:"on"},nativeOn:{keyup:[function(t){return e.checkCapslock(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}]},model:{value:e.loginForm.userpwd,callback:function(t){e.$set(e.loginForm,"userpwd",t)},expression:"loginForm.userpwd"}}),s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("i",{staticClass:"el-icon-view",staticStyle:{"font-size":"16px",color:"#b6c2cd"}})])],1),s("el-button",{attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登录")])],1)],1)])},o=[],n=(s("13d5"),s("b64b"),s("d3b7"),{name:"Login",data:function(){var e=function(e,t,s){t?s():s(new Error("账号不能为空"))},t=function(e,t,s){t.length<6?s(new Error("密码不能为空且长度不能小于6")):s()};return{loginForm:{username:"",userpwd:""},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],userpwd:[{required:!0,trigger:"blur",validator:t}]},passwordType:"password",loading:!1,redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(e){var t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))},immediate:!0}},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},methods:{checkCapslock:function(e){var t=e.key;this.capsTooltip=t&&1===t.length&&t>="A"&&t<="Z"},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/",query:e.otherQuery}),e.loading=!1,e.$notify({title:"登录成功",message:"欢迎回来！",type:"success"})})).catch((function(){e.loading=!1}))}))},getOtherQuery:function(e){return Object.keys(e).reduce((function(t,s){return"redirect"!==s&&(t[s]=e[s]),t}),{})}}}),i=n,a=(s("1577"),s("2877")),l=Object(a["a"])(i,r,o,!1,null,"18f52a44",null);t["default"]=l.exports},adb3:function(e,t,s){}}]);