(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-624f69cf"],{"4b1b":function(e,t,r){"use strict";r("f3e7")},"7af6":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-box"},[r("el-form",{ref:"myform",staticClass:"my-form",attrs:{rules:e.rules,model:e.ruleForm,"label-width":"130px"}},[r("el-form-item",{attrs:{label:"账户头像",prop:"imgurl"}},[r("el-upload",{attrs:{action:e.$store.state.user.beseFile,"list-type":"picture-card","on-success":e.handleSuccess,"on-error":e.handleError,"before-upload":e.beforeUpload,"on-remove":e.handleRemove,"file-list":e.fileList,headers:e.upheaders,limit:1}},[r("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center",height:"100%"},attrs:{slot:"trigger"},slot:"trigger"},[r("i",{staticClass:"el-icon-picture-outline",staticStyle:{"font-size":"80px"}}),r("i",{staticClass:"el-icon-plus",staticStyle:{"font-size":"14px","margin-top":"10px"}},[e._v("添加封面")])])])],1),r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),r("el-form-item",{attrs:{label:"账号",prop:"zh"}},[r("el-input",{attrs:{placeholder:"请输入账号"},model:{value:e.ruleForm.zh,callback:function(t){e.$set(e.ruleForm,"zh",t)},expression:"ruleForm.zh"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"pas"}},[r("el-input",{attrs:{type:"password","show-password":"",placeholder:"请输入密码"},model:{value:e.ruleForm.pas,callback:function(t){e.$set(e.ruleForm,"pas",t)},expression:"ruleForm.pas"}})],1),r("el-form-item",{attrs:{label:"确认密码",prop:"pas"}},[r("el-input",{attrs:{type:"password","show-password":"",placeholder:"请输入密码"},model:{value:e.ruleForm.pas,callback:function(t){e.$set(e.ruleForm,"pas",t)},expression:"ruleForm.pas"}})],1),r("el-form-item",[r("div",{staticClass:"but-b"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("myform")}}},[e._v("保存")])],1)])],1)],1)},s=[],l=r("5530"),n=r("c7eb"),o=r("1da1"),i=(r("a15b"),r("b8bc")),c={components:{ImageUpload:i["a"]},data:function(){var e=function(e,t,r){""===t||void 0===t?r(new Error("请上传头像")):r()};return{validateImg:e,fileList:[],ruleForm:{title:"",zh:"",pas:"",imgurl:""},rules:{pas:[{required:!0,message:"请输入密码",trigger:"blur"}],zh:[{required:!0,message:"请填写账号",trigger:"change"}],imgurl:[{required:!0,trigger:"change",validator:e}]}}},mounted:function(){},methods:{getclasslist:function(){var e=this;return Object(o["a"])(Object(n["a"])().mark((function t(){var r;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,GetSelectCategory({channelname:e.$route.meta.channelname});case 2:r=t.sent,e.options=r.datalist;case 4:case"end":return t.stop()}}),t)})))()},beforeUpload:function(e){var t="image/jpeg"===e.type,r="image/png"===e.type,a=e.size/1024/1024<10;return t||r||this.$message.error("上传图片只能是 JPG/PNG 格式!"),a||this.$message.error("上传图片大小不能超过 10MB!"),t||r&&a},handleSuccess:function(e){this.ruleForm.imgurl=e.filepath},handleError:function(e){this.$message.error(e.msg)},handleRemove:function(){this.ruleForm.imgurl="",this.fileList=[]},submitForm:function(e){var t=this;return Object(o["a"])(Object(n["a"])().mark((function r(){return Object(n["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$refs[e].validate(function(){var e=Object(o["a"])(Object(n["a"])().mark((function e(r){var a,s,o,i;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=6;break}return a=t.ruleForm,s=a.isshow,o=a.hotstr,e.next=4,allAddreq(Object(l["a"])(Object(l["a"])({},t.ruleForm),{},{isshow:+s,hotstr:o.join(","),channelname:t.$route.meta.channelname}));case 4:i=e.sent,200===i.status&&(t.$message.success(i.msg),t.$router.go(-1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()}}},u=c,m=(r("4b1b"),r("2877")),p=Object(m["a"])(u,a,s,!1,null,"abe0ebc2",null);t["default"]=p.exports},f3e7:function(e,t,r){}}]);