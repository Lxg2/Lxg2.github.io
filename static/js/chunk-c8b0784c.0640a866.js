(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8b0784c"],{6324:function(e,t,r){},"9b1b":function(e,t,r){"use strict";r("6324")},b2bf:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-box"},[r("el-form",{ref:"myform",staticClass:"my-form",attrs:{rules:e.rules,model:e.ruleForm,"label-width":"130px"}},[r("el-form-item",{attrs:{label:"宣传标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入宣传标题"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),r("el-form-item",{attrs:{label:"宣传视频",prop:"imgurl"}},[e.ruleForm.imgurl?r("div",{staticStyle:{position:"relative"}},[r("video",{attrs:{width:"500",controls:"",src:e.ruleForm.imgurl}}),r("i",{staticClass:"el-icon-circle-close",staticStyle:{"font-size":"30px",position:"absolute",top:"-10px",left:"505px",cursor:"pointer"},on:{click:function(t){e.ruleForm.imgurl=""}}})]):r("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:e.$store.state.user.beseFile,"before-upload":e.beforeUploadvideo,"on-success":e.handleSuccess,"on-remove":e.handleRemove,headers:e.upheaders,limit:1,"on-error":e.handleError,multiple:""}},[r("i",{staticClass:"el-icon-upload"}),r("div",{staticClass:"el-upload__text"},[e._v("将视频拖到此处，或"),r("em",[e._v("点击上传")])])])],1),r("el-form-item",{attrs:{label:"置顶/热门"}},[r("div",{staticStyle:{"margin-left":"10px"}},[r("el-checkbox-group",{model:{value:e.ruleForm.hotstr,callback:function(t){e.$set(e.ruleForm,"hotstr",t)},expression:"ruleForm.hotstr"}},[r("el-checkbox",{attrs:{label:"置顶",value:1}}),r("el-checkbox",{attrs:{label:"热门",value:2}})],1)],1)]),r("el-form-item",{attrs:{label:"排序ID"}},[r("el-input",{attrs:{placeholder:"ID越小越靠前"},model:{value:e.ruleForm.sortid,callback:function(t){e.$set(e.ruleForm,"sortid",t)},expression:"ruleForm.sortid"}})],1),r("el-form-item",{attrs:{label:"是否显示"}},[r("div",{staticStyle:{"margin-left":"10px"}},[r("el-switch",{attrs:{"active-text":"显示","inactive-text":"隐藏"},model:{value:e.ruleForm.isshow,callback:function(t){e.$set(e.ruleForm,"isshow",t)},expression:"ruleForm.isshow"}})],1)]),r("el-form-item",[r("div",{staticClass:"but-b"},[r("el-button",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("取消")]),r("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{type:"primary"},on:{click:function(t){return e.submitForm("myform")}}},[e._v("发布")])],1)])],1)],1)},a=[],i=r("5530"),s=r("c7eb"),l=r("1da1"),n=(r("a15b"),r("2ca0"),r("b8bc")),c=r("8256"),u=r("c24f"),m=r("5f87"),d={components:{ImageUpload:n["a"],Tinymce:c["a"]},data:function(){var e=function(e,t,r){""===t||void 0===t?r(new Error("请上传")):r()};return{options:[],fileList:[],upheaders:{},loading:!1,imgdialogVisible:!1,validateImg:e,dialogImageUrl:"",ruleForm:{title:"",hotstr:[],sortid:"",imgurl:"",isshow:!0},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],imgurl:[{required:!0,trigger:"change",validator:e}]}}},mounted:function(){this.upheaders={Authorization:Object(m["a"])()},this.getclasslist()},methods:{beforeUploadvideo:function(e){var t=e.type.startsWith("video/");return!!t||(this.$message.error("请上传视频文件！"),!1)},handleSuccess:function(e,t,r){this.ruleForm.imgurl=e.filepath},handleError:function(e,t,r){this.$message.error("视频上传失败，请重试！"+e.msg)},getclasslist:function(){var e=this;return Object(l["a"])(Object(s["a"])().mark((function t(){var r;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["j"])({channelname:e.$route.meta.channelname});case 2:r=t.sent,e.options=r.datalist;case 4:case"end":return t.stop()}}),t)})))()},handleRemove:function(){this.ruleForm.imgurl="",this.fileList=[]},submitForm:function(e){var t=this;return Object(l["a"])(Object(s["a"])().mark((function r(){return Object(s["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$refs[e].validate(function(){var e=Object(l["a"])(Object(s["a"])().mark((function e(r){var o,a,l,n;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=8;break}return t.loading=!0,o=t.ruleForm,a=o.isshow,l=o.hotstr,e.next=5,Object(u["r"])(Object(i["a"])(Object(i["a"])({},t.ruleForm),{},{isshow:+a,hotstr:l.join(","),channelname:t.$route.meta.channelname}));case 5:n=e.sent,200===n.status&&(t.$message.success(n.msg),t.$router.go(-1)),t.loading=!1;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()}}},p=d,b=(r("9b1b"),r("2877")),h=Object(b["a"])(p,o,a,!1,null,"51181b05",null);t["default"]=h.exports}}]);