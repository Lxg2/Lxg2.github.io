(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34b522d5"],{"9b47":function(e,t,r){},b4c0:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-box"},[r("el-form",{ref:"myform",staticClass:"my-form",attrs:{rules:e.rules,model:e.ruleForm,"label-width":"130px"}},[r("el-form-item",{attrs:{label:"政策标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入政策标题"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),r("el-form-item",{attrs:{label:"政策内容",prop:"content"}},[r("Tinymce",{ref:"editor",attrs:{height:300},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),r("el-form-item",{attrs:{label:"置顶/热门"}},[r("div",{staticStyle:{"margin-left":"10px"}},[r("el-checkbox-group",{model:{value:e.ruleForm.hotstr,callback:function(t){e.$set(e.ruleForm,"hotstr",t)},expression:"ruleForm.hotstr"}},[r("el-checkbox",{attrs:{label:"置顶",value:1}}),r("el-checkbox",{attrs:{label:"热门",value:2}})],1)],1)]),r("el-form-item",{attrs:{label:"所属分类",prop:"categoryid"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"请选择分类"},model:{value:e.ruleForm.categoryid,callback:function(t){e.$set(e.ruleForm,"categoryid",t)},expression:"ruleForm.categoryid"}},e._l(e.options,(function(e){return r("el-option",{key:e.id,attrs:{label:e.Categorytitle,value:e.id}})})),1)],1),r("el-form-item",{attrs:{label:"排序ID"}},[r("el-input",{attrs:{placeholder:"ID越小越靠前"},model:{value:e.ruleForm.sortid,callback:function(t){e.$set(e.ruleForm,"sortid",t)},expression:"ruleForm.sortid"}})],1),r("el-form-item",{attrs:{label:"是否显示"}},[r("div",{staticStyle:{"margin-left":"10px"}},[r("el-switch",{attrs:{"active-text":"显示","inactive-text":"隐藏"},model:{value:e.ruleForm.isshow,callback:function(t){e.$set(e.ruleForm,"isshow",t)},expression:"ruleForm.isshow"}})],1)]),r("el-form-item",{attrs:{label:"政策封面"}},[r("el-upload",{attrs:{action:e.$store.state.user.beseFile,"list-type":"picture-card","on-success":e.handleSuccess,"on-error":e.handleError,"before-upload":e.beforeUpload,"on-remove":e.handleRemove,"file-list":e.fileList,headers:e.upheaders,limit:1}},[r("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center",height:"100%"},attrs:{slot:"trigger"},slot:"trigger"},[r("i",{staticClass:"el-icon-picture-outline",staticStyle:{"font-size":"80px"}}),r("i",{staticClass:"el-icon-plus",staticStyle:{"font-size":"14px","margin-top":"10px"}},[e._v("添加封面")])])])],1),r("el-form-item",[r("div",{staticClass:"but-b"},[r("el-button",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("取消")]),r("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{type:"primary"},on:{click:function(t){return e.submitForm("myform")}}},[e._v("发布")])],1)])],1)],1)},i=[],o=r("5530"),l=r("c7eb"),s=r("1da1"),n=(r("a15b"),r("b8bc")),c=r("8256"),u=r("c24f"),m=r("5f87"),d={components:{ImageUpload:n["a"],Tinymce:c["a"]},data:function(){var e=function(e,t,r){""===t||void 0===t?r(new Error("请上传活动封面")):r()};return{options:[],fileList:[],upheaders:{},imgdialogVisible:!1,validateImg:e,dialogImageUrl:"",loading:!1,ruleForm:{title:"",content:"",hotstr:[],sortid:"",imgurl:"",isshow:!0,categoryid:""},rules:{title:[{required:!0,message:"请输入政策标题",trigger:"blur"}],categoryid:[{required:!0,message:"请选择分类",trigger:"blur"}],content:[{required:!0,message:"请填写政策内容",trigger:"change"}],imgurl:[{required:!0,trigger:"change",validator:e}]}}},mounted:function(){this.upheaders={Authorization:Object(m["a"])()},this.getclasslist()},methods:{getclasslist:function(){var e=this;return Object(s["a"])(Object(l["a"])().mark((function t(){var r;return Object(l["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["j"])({channelname:e.$route.meta.channelname});case 2:r=t.sent,e.options=r.datalist;case 4:case"end":return t.stop()}}),t)})))()},beforeUpload:function(e){var t="image/jpeg"===e.type,r="image/png"===e.type,a=e.size/1024/1024<10;return t||r||this.$message.error("上传图片只能是 JPG/PNG 格式!"),a||this.$message.error("上传图片大小不能超过 10MB!"),t||r&&a},handleSuccess:function(e){this.ruleForm.imgurl=e.filepath},handleError:function(e){this.$message.error(e.msg)},handleRemove:function(){this.ruleForm.imgurl="",this.fileList=[]},submitForm:function(e){var t=this;return Object(s["a"])(Object(l["a"])().mark((function r(){return Object(l["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$refs[e].validate(function(){var e=Object(s["a"])(Object(l["a"])().mark((function e(r){var a,i,s,n;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=8;break}return t.loading=!0,a=t.ruleForm,i=a.isshow,s=a.hotstr,e.next=5,Object(u["r"])(Object(o["a"])(Object(o["a"])({},t.ruleForm),{},{isshow:+i,hotstr:s.join(","),channelname:t.$route.meta.channelname}));case 5:n=e.sent,200===n.status&&(t.$message.success(n.msg),t.$router.go(-1)),t.loading=!1;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()}}},p=d,f=(r("f4a4"),r("2877")),h=Object(f["a"])(p,a,i,!1,null,"5ba57c4c",null);t["default"]=h.exports},f4a4:function(e,t,r){"use strict";r("9b47")}}]);