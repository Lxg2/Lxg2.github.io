(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dc7bf82"],{"16c1":function(e,t,r){},f996:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-box"},[r("el-form",{ref:"myform",staticClass:"my-form",attrs:{rules:e.rules,model:e.ruleForm,"label-width":"130px"}},[r("el-form-item",{attrs:{label:"报到标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入报到标题"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),r("el-form-item",{attrs:{label:"党员报到",prop:"content"}},[e.editflag?r("Tinymce",{ref:"editor",attrs:{height:300},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}}):e._e()],1),r("el-form-item",{attrs:{label:"是否显示"}},[r("div",{staticStyle:{"margin-left":"10px"}},[r("el-switch",{attrs:{"active-text":"显示","inactive-text":"隐藏"},model:{value:e.ruleForm.isshow,callback:function(t){e.$set(e.ruleForm,"isshow",t)},expression:"ruleForm.isshow"}})],1)]),r("el-form-item",[r("div",{staticClass:"but-b"},[r("el-button",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("myform")}}},[e._v("发布")])],1)])],1)],1)},i=[],o=r("5530"),a=r("c7eb"),s=r("1da1"),l=r("b8bc"),c=r("8256"),u=r("c24f"),m={components:{ImageUpload:l["a"],Tinymce:c["a"]},data:function(){var e=function(e,t,r){""===t||void 0===t?r(new Error("请上传封面")):r()};return{form:{},fileList:[],imgdialogVisible:!1,validateImg:e,dialogImageUrl:"",editflag:!1,containertext:"",ruleForm:{title:"",content:"",isshow:!0},rules:{},options:[]}},created:function(){this.getselectlist()},mounted:function(){var e=this;Object(u["e"])({id:this.$route.query.id}).then((function(t){var r=t.datalist,n=r.Title,i=r.Content,o=r.Isshow;e.ruleForm.title=n,e.ruleForm.isshow=!!o,e.editflag=!0,e.$nextTick((function(){e.ruleForm.content=i}))}))},methods:{beforeUpload:function(e){var t="image/jpeg"===e.type,r="image/png"===e.type,n=e.size/1024/1024<10;return t||r||this.$message.error("上传图片只能是 JPG/PNG 格式!"),n||this.$message.error("上传图片大小不能超过 10MB!"),t||r&&n},handleSuccess:function(e){this.ruleForm.imgurl=e.filepath},handleError:function(e){this.$message.error(e.msg)},handleRemove:function(){this.ruleForm.imgurl="",this.fileList=[]},getselectlist:function(){var e=this;return Object(s["a"])(Object(a["a"])().mark((function t(){var r;return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["j"])({channelname:e.$route.meta.channelname});case 2:r=t.sent,e.options=r.datalist;case 4:case"end":return t.stop()}}),t)})))()},submitForm:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(s["a"])(Object(a["a"])().mark((function e(r){var n,i;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=6;break}return n=t.ruleForm.isshow,e.next=4,Object(u["n"])(Object(o["a"])(Object(o["a"])({},t.ruleForm),{},{id:t.$route.query.id,channelname:t.$route.meta.channelname,isshow:+n}));case 4:i=e.sent,200==i.status&&(t.$message.success(i.msg),t.$router.go(-1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},f=m,h=(r("fef4"),r("2877")),d=Object(h["a"])(f,n,i,!1,null,"a45d397c",null);t["default"]=d.exports},fef4:function(e,t,r){"use strict";r("16c1")}}]);