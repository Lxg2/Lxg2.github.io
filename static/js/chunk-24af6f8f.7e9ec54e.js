(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24af6f8f"],{"5c9d":function(e,t,r){"use strict";r("c727")},c727:function(e,t,r){},dbfb:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-box"},[r("el-form",{ref:"myform",staticClass:"my-form",attrs:{rules:e.rules,model:e.ruleForm,"label-width":"130px"}},[r("el-form-item",{attrs:{label:"债权融资标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入债权融资"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),r("el-form-item",{attrs:{label:"标签展示"}},[e._l(e.ruleForm.tags,(function(t){return r("el-tag",{key:t,attrs:{closable:"","disable-transitions":!1},on:{close:function(r){return e.colseitem(t)}}},[e._v(" "+e._s(t)+" ")])})),e.inputVisible?r("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInputConfirm(t)}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}):r("el-button",{staticClass:"button-new-tag",staticStyle:{"font-size":"13px !important"},attrs:{size:"small"},on:{click:e.showInput}},[e._v("+ 类型标签")])],2),r("el-form-item",{attrs:{label:"详情描述",prop:"content"}},[r("Tinymce",{ref:"editor",attrs:{height:300},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),r("el-form-item",{attrs:{label:"企业"}},[r("el-input",{attrs:{placeholder:"请输入企业"},model:{value:e.ruleForm.companyname,callback:function(t){e.$set(e.ruleForm,"companyname",t)},expression:"ruleForm.companyname"}})],1),r("el-form-item",{attrs:{label:"内容描述"}},[r("el-input",{attrs:{placeholder:"请输入内容描述"},model:{value:e.ruleForm.remarks,callback:function(t){e.$set(e.ruleForm,"remarks",t)},expression:"ruleForm.remarks"}})],1),r("el-form-item",{attrs:{label:"服务类型",prop:"servicetype"}},[r("el-input",{attrs:{placeholder:"请输入服务类型"},model:{value:e.ruleForm.servicetype,callback:function(t){e.$set(e.ruleForm,"servicetype",t)},expression:"ruleForm.servicetype"}})],1),r("el-form-item",{attrs:{label:"置顶/热门"}},[r("div",{staticStyle:{"margin-left":"10px"}},[r("el-checkbox-group",{model:{value:e.ruleForm.hotstr,callback:function(t){e.$set(e.ruleForm,"hotstr",t)},expression:"ruleForm.hotstr"}},[r("el-checkbox",{attrs:{label:"置顶",value:1}}),r("el-checkbox",{attrs:{label:"热门",value:2}})],1)],1)]),r("el-form-item",{attrs:{label:"排序ID"}},[r("el-input",{attrs:{placeholder:"ID越小越靠前"},model:{value:e.ruleForm.sortid,callback:function(t){e.$set(e.ruleForm,"sortid",t)},expression:"ruleForm.sortid"}})],1),r("el-form-item",{attrs:{label:"是否显示"}},[r("div",{staticStyle:{"margin-left":"10px"}},[r("el-switch",{attrs:{"active-text":"显示","inactive-text":"隐藏"},model:{value:e.ruleForm.isshow,callback:function(t){e.$set(e.ruleForm,"isshow",t)},expression:"ruleForm.isshow"}})],1)]),r("el-form-item",{attrs:{label:"债权融资封面",prop:"imgurl"}},[r("el-upload",{attrs:{action:e.$store.state.user.beseFile,"list-type":"picture-card","on-success":e.handleSuccess,"on-error":e.handleError,"before-upload":e.beforeUpload,"on-remove":e.handleRemove,"file-list":e.fileList,headers:e.upheaders,limit:1}},[r("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center",height:"100%"},attrs:{slot:"trigger"},slot:"trigger"},[r("i",{staticClass:"el-icon-picture-outline",staticStyle:{"font-size":"80px"}}),r("i",{staticClass:"el-icon-plus",staticStyle:{"font-size":"14px","margin-top":"10px"}},[e._v("添加封面")])])])],1),r("el-form-item",[r("div",{staticClass:"but-b"},[r("el-button",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("取消")]),r("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{type:"primary"},on:{click:function(t){return e.submitForm("myform")}}},[e._v("发布")])],1)])],1)],1)},i=[],s=r("5530"),l=r("c7eb"),n=r("1da1"),o=(r("caad"),r("a15b"),r("a434"),r("2532"),r("b8bc")),u=r("8256"),c=r("c24f"),m=r("5f87"),p={components:{ImageUpload:o["a"],Tinymce:u["a"]},data:function(){var e=function(e,t,r){""===t||void 0===t?r(new Error("请上传封面")):r()};return{options:[],fileList:[],upheaders:{},loading:!1,imgdialogVisible:!1,validateImg:e,dialogImageUrl:"",inputVisible:!1,inputValue:"",ruleForm:{title:"",content:"",tags:[],hotstr:[],sortid:"",companyname:"",remarks:"",imgurl:"",isshow:!0,servicetype:""},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],content:[{required:!0,message:"请填写内容",trigger:"change"}],imgurl:[{required:!0,trigger:"change",validator:e}]}}},mounted:function(){this.upheaders={Authorization:Object(m["a"])()},this.getclasslist()},methods:{colseitem:function(e){this.ruleForm.tags.splice(this.ruleForm.tags.indexOf(e),1)},handleInputConfirm:function(){var e=this.inputValue;e&&(0!==this.ruleForm.tags.length?!this.ruleForm.tags.includes(e)&&this.ruleForm.tags.push(e):this.ruleForm.tags.push(e)),this.inputVisible=!1,this.inputValue=""},showInput:function(){var e=this;this.inputVisible=!0,this.$nextTick((function(t){e.$refs.saveTagInput.$refs.input.focus()}))},getclasslist:function(){var e=this;return Object(n["a"])(Object(l["a"])().mark((function t(){var r;return Object(l["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["j"])({channelname:e.$route.meta.channelname});case 2:r=t.sent,e.options=r.datalist;case 4:case"end":return t.stop()}}),t)})))()},beforeUpload:function(e){var t="image/jpeg"===e.type,r="image/png"===e.type,a=e.size/1024/1024<10;return t||r||this.$message.error("上传图片只能是 JPG/PNG 格式!"),a||this.$message.error("上传图片大小不能超过 10MB!"),t||r&&a},handleSuccess:function(e){this.ruleForm.imgurl=e.filepath},handleError:function(e){this.$message.error(e.msg)},handleRemove:function(){this.ruleForm.imgurl="",this.fileList=[]},submitForm:function(e){var t=this;return Object(n["a"])(Object(l["a"])().mark((function r(){return Object(l["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$refs[e].validate(function(){var e=Object(n["a"])(Object(l["a"])().mark((function e(r){var a,i,n,o,u;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=9;break}return t.loading=!0,a=t.ruleForm,i=a.isshow,n=a.hotstr,o=a.tags,o=o.join(","),e.next=6,Object(c["r"])(Object(s["a"])(Object(s["a"])({},t.ruleForm),{},{tags:o,isshow:+i,hotstr:n.join(","),channelname:t.$route.meta.channelname}));case 6:u=e.sent,200===u.status&&(t.$message.success(u.msg),t.$router.go(-1)),t.loading=!1;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()}}},f=p,h=(r("5c9d"),r("2877")),d=Object(h["a"])(f,a,i,!1,null,"920192e6",null);t["default"]=d.exports}}]);