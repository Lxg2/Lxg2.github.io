(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf161478"],{"1ae3":function(e,t,r){"use strict";r.r(t);var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-box"},[r("el-form",{ref:"myform",staticClass:"my-form",attrs:{rules:e.rules,model:e.ruleForm,"label-width":"150px"}},[r("el-form-item",{attrs:{label:"广告封面",prop:"imgurl"}},[r("el-upload",{attrs:{action:e.$store.state.user.beseFile,"list-type":"picture-card","on-success":e.handleSuccess,"on-error":e.handleError,"before-upload":e.beforeUpload,"on-remove":e.handleRemove,"file-list":e.fileList,limit:1}},[r("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center",height:"100%"},attrs:{slot:"trigger"},slot:"trigger"},[r("i",{staticClass:"el-icon-picture-outline",staticStyle:{"font-size":"80px"}}),r("i",{staticClass:"el-icon-plus",staticStyle:{"font-size":"14px","margin-top":"10px"}},[e._v("添加封面")])])])],1),r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),r("el-form-item",{attrs:{label:"跳转小程序链接",prop:"gourl",rules:[{required:!0,message:"请填写跳转路径",trigger:"blur"}]}},[r("el-input",{attrs:{placeholder:"请输入跳转小程序链接"},model:{value:e.ruleForm.gourl,callback:function(t){e.$set(e.ruleForm,"gourl",t)},expression:"ruleForm.gourl"}})],1),r("el-form-item",{attrs:{label:"显示位置",prop:"channelname",rules:[{required:!0,message:"请选择显示位置",trigger:"change"}]}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择显示位置"},model:{value:e.ruleForm.channelname,callback:function(t){e.$set(e.ruleForm,"channelname",t)},expression:"ruleForm.channelname"}},e._l(e.options,(function(e){return r("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})),1)],1),r("el-form-item",[r("div",{staticClass:"but-b"},[r("el-button",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("取消")]),r("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{type:"primary"},on:{click:function(t){return e.submitForm("myform")}}},[e._v("发布")])],1)])],1)],1)},i=[],a=r("c7eb"),n=r("5530"),o=r("1da1"),s=r("5f87"),u=r("c24f"),c={components:{},data:function(){var e=function(e,t,r){""===t||void 0===t||0===t.length?r(new Error("请上传封面")):r()};return{options:[{name:"首页Banner",value:"index"},{name:"走进石岩",value:"zoujinshiyan"}],fileList:[],upheaders:{},loading:!1,imgdialogVisible:!1,validateImg:e,dialogImageUrl:"",ruleForm:{gourl:"",channelname:"",title:"",imgurl:""},rules:{title:[{required:!0,message:"请选择标题",trigger:"blur"}],gourl:[{required:!0,message:"请填写跳转路径",trigger:"change"}],imgurl:[{required:!0,trigger:"change",validator:e}]}}},mounted:function(){this.upheaders={Authorization:Object(s["a"])()}},methods:{backData:function(e){this.ruleForm.Filepath=e},submitForm:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(o["a"])(Object(a["a"])().mark((function e(r){var l;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=7;break}return t.loading=!0,e.next=4,Object(u["k"])(Object(n["a"])({},t.ruleForm));case 4:l=e.sent,200===l.status&&(t.$message.success(l.msg),t.$router.go(-1)),t.loading=!1;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},beforeUpload:function(e){var t="image/jpeg"===e.type,r="image/png"===e.type,l=e.size/1024/1024<10;return t||r||this.$message.error("上传图片只能是 JPG/PNG 格式!"),l||this.$message.error("上传图片大小不能超过 10MB!"),t||r&&l},handleSuccess:function(e){this.ruleForm.imgurl=e.filepath,console.log(this.ruleForm)},handleError:function(e){this.$message.error(e.msg)},handleRemove:function(){this.ruleForm.imgurl="",this.fileList=[]}}},m=c,g=(r("a63d"),r("2877")),d=Object(g["a"])(m,l,i,!1,null,"08bab67c",null);t["default"]=d.exports},"2f9d":function(e,t,r){},a63d:function(e,t,r){"use strict";r("2f9d")}}]);