(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-473af5ec"],{"11ce":function(e,t,r){"use strict";r("1b71")},"1b71":function(e,t,r){},ca19:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-box"},[r("el-form",{ref:"myform",staticClass:"my-form",attrs:{rules:e.rules,model:e.ruleForm,"label-width":"130px"}},[r("el-form-item",{attrs:{label:"分类标题",prop:"categorytitle"}},[r("el-input",{attrs:{placeholder:"请输入分类标题"},model:{value:e.ruleForm.categorytitle,callback:function(t){e.$set(e.ruleForm,"categorytitle",t)},expression:"ruleForm.categorytitle"}})],1),r("el-form-item",{attrs:{label:"是否显示"}},[r("div",{staticStyle:{"margin-left":"10px"}},[r("el-switch",{attrs:{"active-text":"显示","inactive-text":"隐藏"},model:{value:e.ruleForm.isshow,callback:function(t){e.$set(e.ruleForm,"isshow",t)},expression:"ruleForm.isshow"}})],1)]),r("el-form-item",{attrs:{label:"分类封面",prop:"imgurl"}},[r("el-upload",{attrs:{action:e.$store.state.user.beseFile,"list-type":"picture-card","on-success":e.handleSuccess,"on-error":e.handleError,"before-upload":e.beforeUpload,"on-remove":e.handleRemove,"file-list":e.fileList,headers:e.upheaders,limit:1}},[r("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center",height:"100%"},attrs:{slot:"trigger"},slot:"trigger"},[r("i",{staticClass:"el-icon-picture-outline",staticStyle:{"font-size":"80px"}}),r("i",{staticClass:"el-icon-plus",staticStyle:{"font-size":"14px","margin-top":"10px"}},[e._v("添加封面")])])])],1),r("el-form-item",[r("div",{staticClass:"but-b"},[r("el-button",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("取消")]),r("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{type:"primary"},on:{click:function(t){return e.submitForm("myform")}}},[e._v("发布")])],1)])],1)],1)},a=[],s=r("c7eb"),o=r("5530"),n=r("1da1"),l=r("b8bc"),c=r("8256"),u=r("c24f"),m=r("5f87"),f={components:{ImageUpload:l["a"],Tinymce:c["a"]},data:function(){var e=function(e,t,r){""===t||void 0===t?r(new Error("请上传封面")):r()};return{fileList:[],upheaders:{},loading:!1,imgdialogVisible:!1,validateImg:e,dialogImageUrl:"",ruleForm:{categorytitle:"",imgurl:"",isshow:!0},rules:{categorytitle:[{required:!0,message:"请输入分类标题",trigger:"blur"}]}}},mounted:function(){this.upheaders={Authorization:Object(m["a"])()}},methods:{beforeUpload:function(e){var t="image/jpeg"===e.type,r="image/png"===e.type,i=e.size/1024/1024<10;return t||r||this.$message.error("上传图片只能是 JPG/PNG 格式!"),i||this.$message.error("上传图片大小不能超过 10MB!"),t||r&&i},handleSuccess:function(e){this.ruleForm.imgurl=e.filepath},handleError:function(e){this.$message.error(e.msg)},handleRemove:function(){this.ruleForm.imgurl="",this.fileList=[]},submitForm:function(e){var t=this;return Object(n["a"])(Object(s["a"])().mark((function r(){return Object(s["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$refs[e].validate(function(){var e=Object(n["a"])(Object(s["a"])().mark((function e(r){var i,a;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=8;break}return t.loading=!0,i=t.ruleForm.isshow,e.next=5,Object(u["q"])(Object(o["a"])(Object(o["a"])({},t.ruleForm),{},{isshow:+i,channelname:t.$route.meta.channelname}));case 5:a=e.sent,200===a.status&&(t.$message.success(a.msg),t.$router.go(-1)),t.loading=!1;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()}}},d=f,p=(r("11ce"),r("2877")),g=Object(p["a"])(d,i,a,!1,null,"0ca80b71",null);t["default"]=g.exports}}]);