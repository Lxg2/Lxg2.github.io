(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bc2d7c6"],{2503:function(e,t,r){},5857:function(e,t,r){"use strict";r("2503")},cb49:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-box"},[r("el-form",{ref:"myform",staticClass:"my-form",attrs:{rules:e.rules,model:e.ruleForm,"label-width":"200px"}},[r("el-form-item",{attrs:{label:"封面(限一张)",prop:"filelist"}},[r("el-upload",{attrs:{action:e.$store.state.user.beseFile,"list-type":"picture-card","on-success":e.waibuhandleSuccess,"on-error":e.handleError,"before-upload":e.beforeUpload,"on-remove":e.waubuhandleRemove,"file-list":e.waibufileList,headers:e.upheaders,limit:1}},[r("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center",height:"100%"},attrs:{slot:"trigger"},slot:"trigger"},[r("i",{staticClass:"el-icon-picture-outline",staticStyle:{"font-size":"80px"}}),r("i",{staticClass:"el-icon-plus",staticStyle:{"font-size":"14px","margin-top":"10px"}},[e._v("添加封面")])])])],1),r("el-form-item",{attrs:{label:"详情图片",prop:"filelist"}},[r("el-upload",{attrs:{action:e.$store.state.user.beseFile,"list-type":"picture-card","on-success":e.handleSuccess,"on-error":e.handleError,"before-upload":e.beforeUpload,"on-remove":e.handleRemove,"file-list":e.fileList,headers:e.upheaders,multiple:""}},[r("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center",height:"100%"},attrs:{slot:"trigger"},slot:"trigger"},[r("i",{staticClass:"el-icon-picture-outline",staticStyle:{"font-size":"80px"}}),r("i",{staticClass:"el-icon-plus",staticStyle:{"font-size":"14px","margin-top":"10px"}},[e._v("添加图片")])])])],1),r("el-form-item",{attrs:{label:"景点名称",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入景点名称"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),r("el-form-item",{attrs:{label:"景区描述",prop:"remarks",rules:[{required:!0,message:"请输入景点名称",trigger:"blur"}]}},[r("el-input",{attrs:{type:"textarea",placeholder:"一句话描述景区"},model:{value:e.ruleForm.remarks,callback:function(t){e.$set(e.ruleForm,"remarks",t)},expression:"ruleForm.remarks"}})],1),r("el-form-item",{attrs:{label:"开放时间",prop:"worktime",rules:[{required:!0,message:"请输入开放时间",trigger:"blur"}]}},[r("el-input",{attrs:{placeholder:"请输入开放时间"},model:{value:e.ruleForm.worktime,callback:function(t){e.$set(e.ruleForm,"worktime",t)},expression:"ruleForm.worktime"}})],1),r("el-form-item",{attrs:{label:"景区位置",prop:"hdAddress",rules:[{required:!0,message:"请输入景区位置",trigger:"blur"}]}},[r("el-input",{attrs:{placeholder:"请输入景区位置"},model:{value:e.ruleForm.hdAddress,callback:function(t){e.$set(e.ruleForm,"hdAddress",t)},expression:"ruleForm.hdAddress"}})],1),r("el-form-item",{attrs:{label:"景区简介",prop:"content",rules:[{required:!0,message:"请填写内容",trigger:"change"}]}},[r("Tinymce",{ref:"editor",attrs:{height:250},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),r("el-form-item",{attrs:{label:"置顶/热门"}},[r("div",{staticStyle:{"margin-left":"10px"}},[r("el-checkbox-group",{model:{value:e.ruleForm.hotstr,callback:function(t){e.$set(e.ruleForm,"hotstr",t)},expression:"ruleForm.hotstr"}},[r("el-checkbox",{attrs:{label:"置顶",value:1}}),r("el-checkbox",{attrs:{label:"热门",value:2}})],1)],1)]),r("el-form-item",{attrs:{label:"排序ID"}},[r("el-input",{attrs:{placeholder:"ID越小越靠前"},model:{value:e.ruleForm.sortid,callback:function(t){e.$set(e.ruleForm,"sortid",t)},expression:"ruleForm.sortid"}})],1),r("el-form-item",{attrs:{label:"是否显示"}},[r("div",{staticStyle:{"margin-left":"10px"}},[r("el-switch",{attrs:{"active-text":"显示","inactive-text":"隐藏"},model:{value:e.ruleForm.isshow,callback:function(t){e.$set(e.ruleForm,"isshow",t)},expression:"ruleForm.isshow"}})],1)]),r("el-form-item",[r("div",{staticClass:"but-b"},[r("el-button",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("取消")]),r("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{type:"primary"},on:{click:function(t){return e.submitForm("myform")}}},[e._v("发布")])],1)])],1)],1)},i=[],l=r("5530"),a=r("c7eb"),o=r("1da1"),n=(r("c740"),r("a15b"),r("d81d"),r("a434"),r("b8bc")),c=r("8256"),u=r("c24f"),m=r("5f87"),d={components:{ImageUpload:n["a"],Tinymce:c["a"]},data:function(){var e=function(e,t,r){""===t||void 0===t||0===t.length?r(new Error("请上传封面")):r()};return{fileList:[],waibufileList:[],upheaders:{},loading:!1,imgdialogVisible:!1,validateImg:e,dialogImageUrl:"",inputVisible:!1,inputValue:"",ruleForm:{title:"",imgurl:"",worktime:"",content:"",isshow:!0,remarks:"",hotstr:[],sortid:"",filelist:[],hdAddress:""},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],content:[{required:!0,message:"请填写内容",trigger:"change"}],filelist:[{required:!0,trigger:"change",validator:e}]}}},mounted:function(){this.upheaders={Authorization:Object(m["a"])()},this.getclasslist()},methods:{getclasslist:function(){var e=this;return Object(o["a"])(Object(a["a"])().mark((function t(){var r;return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["j"])({channelname:e.$route.meta.channelname});case 2:r=t.sent,e.options=r.datalist;case 4:case"end":return t.stop()}}),t)})))()},beforeUpload:function(e){var t="image/jpeg"===e.type,r="image/png"===e.type,s=e.size/1024/1024<4;return t||r||this.$message.error("上传图片只能是 JPG/PNG 格式!"),s||this.$message.error("上传图片大小不能超过 4MB!"),t||r&&s},handleSuccess:function(e,t){this.ruleForm.filelist.push({filepath:e.filepath,uid:t.uid})},waibuhandleSuccess:function(e,t){this.ruleForm.imgurl=e.filepath},handleError:function(e){this.$message.error(e.msg)},handleRemove:function(){var e=this.ruleForm.filelist.findIndex((function(e){return e.uid===data.uid}));this.ruleForm.filelist.splice(e,1)},waubuhandleRemove:function(){this.ruleForm.imgulr=""},getLatLng:function(){var e=this,t=new TMap.service.Geocoder({});t.getLocation({address:this.ruleForm.hdAddress}).then(function(){var t=Object(o["a"])(Object(a["a"])().mark((function t(r){var s,i,o,n,c;return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.clear(),console.log(r),0!==r.status||"Success"!==r.message){t.next=14;break}return e.ruleForm.hdLat=r.result.location.lat,e.ruleForm.hdLng=r.result.location.lng,s=e.ruleForm,i=s.isshow,o=s.hotstr,n=s.filelist,n=n.map((function(e){return e.filepath})).join(","),t.next=9,Object(u["r"])(Object(l["a"])(Object(l["a"])({},e.ruleForm),{},{filelist:n,isshow:+i,hotstr:o.join(","),channelname:e.$route.meta.channelname}));case 9:c=t.sent,200===c.status&&(e.$message.success(c.msg),e.$router.go(-1)),e.loading=!1,t.next=16;break;case 14:e.loading=!1,e.$message.error("地址解析失败，请重新输入地址");case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$message.error(t.message)}))},submitForm:function(e){var t=this;return Object(o["a"])(Object(a["a"])().mark((function r(){return Object(a["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$refs[e].validate(function(){var e=Object(o["a"])(Object(a["a"])().mark((function e(r){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:r&&(t.loading=!0,t.getLatLng());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()}}},p=d,f=(r("5857"),r("2877")),h=Object(f["a"])(p,s,i,!1,null,"20be92c0",null);t["default"]=h.exports}}]);