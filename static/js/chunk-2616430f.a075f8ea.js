(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2616430f"],{"3d74":function(e,t,r){},"5e63":function(e,t,r){"use strict";r("3d74")},cc61:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-box"},[r("el-form",{ref:"myform",staticClass:"my-form",attrs:{rules:e.rules,model:e.ruleForm,"label-width":"200px"}},[r("el-form-item",{attrs:{label:"封面(限一张)",prop:"filelist"}},[r("el-upload",{attrs:{action:e.$store.state.user.beseFile,"list-type":"picture-card","on-success":e.waibuhandleSuccess,"on-error":e.handleError,"before-upload":e.beforeUpload,"on-remove":e.waubuhandleRemove,"file-list":e.waibufileList,headers:e.upheaders,multiple:""}},[r("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center",height:"100%"},attrs:{slot:"trigger"},slot:"trigger"},[r("i",{staticClass:"el-icon-picture-outline",staticStyle:{"font-size":"80px"}}),r("i",{staticClass:"el-icon-plus",staticStyle:{"font-size":"14px","margin-top":"10px"}},[e._v("添加封面")])])])],1),r("el-form-item",{attrs:{label:"详情图片",prop:"filelist"}},[r("el-upload",{attrs:{action:e.$store.state.user.beseFile,"list-type":"picture-card","on-success":e.handleSuccess,"on-error":e.handleError,"before-upload":e.beforeUpload,"on-remove":e.handleRemove,"file-list":e.fileList,headers:e.upheaders,multiple:""}},[r("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center",height:"100%"},attrs:{slot:"trigger"},slot:"trigger"},[r("i",{staticClass:"el-icon-picture-outline",staticStyle:{"font-size":"80px"}}),r("i",{staticClass:"el-icon-plus",staticStyle:{"font-size":"14px","margin-top":"10px"}},[e._v("添加封面")])])])],1),r("el-form-item",{attrs:{label:"景点名称",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入景点名称"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),r("el-form-item",{attrs:{label:"景区描述",prop:"remarks",rules:[{required:!0,message:"请输入景点名称",trigger:"blur"}]}},[r("el-input",{attrs:{type:"textarea",placeholder:"一句话描述景区"},model:{value:e.ruleForm.remarks,callback:function(t){e.$set(e.ruleForm,"remarks",t)},expression:"ruleForm.remarks"}})],1),r("el-form-item",{attrs:{label:"开放时间",prop:"worktime",rules:[{required:!0,message:"请输入开放时间",trigger:"blur"}]}},[r("el-input",{attrs:{placeholder:"请输入开放时间"},model:{value:e.ruleForm.worktime,callback:function(t){e.$set(e.ruleForm,"worktime",t)},expression:"ruleForm.worktime"}})],1),r("el-form-item",{attrs:{label:"景区位置",prop:"hdAddress",rules:[{required:!0,message:"请输入景区位置",trigger:"blur"}]}},[r("el-input",{attrs:{placeholder:"请输入景区位置"},model:{value:e.ruleForm.hdAddress,callback:function(t){e.$set(e.ruleForm,"hdAddress",t)},expression:"ruleForm.hdAddress"}})],1),r("el-form-item",{attrs:{label:"景区简介",prop:"content",rules:[{required:!0,message:"请填写内容",trigger:"change"}]}},[e.editflag?r("Tinymce",{ref:"editor",attrs:{height:250},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}}):e._e()],1),r("el-form-item",{attrs:{label:"置顶/热门"}},[r("div",{staticStyle:{"margin-left":"10px"}},[r("el-checkbox-group",{model:{value:e.ruleForm.hotstr,callback:function(t){e.$set(e.ruleForm,"hotstr",t)},expression:"ruleForm.hotstr"}},[r("el-checkbox",{attrs:{label:"置顶",value:1}}),r("el-checkbox",{attrs:{label:"热门",value:2}})],1)],1)]),r("el-form-item",{attrs:{label:"排序ID"}},[r("el-input",{attrs:{placeholder:"ID越小越靠前"},model:{value:e.ruleForm.sortid,callback:function(t){e.$set(e.ruleForm,"sortid",t)},expression:"ruleForm.sortid"}})],1),r("el-form-item",{attrs:{label:"是否显示"}},[r("div",{staticStyle:{"margin-left":"10px"}},[r("el-switch",{attrs:{"active-text":"显示","inactive-text":"隐藏"},model:{value:e.ruleForm.isshow,callback:function(t){e.$set(e.ruleForm,"isshow",t)},expression:"ruleForm.isshow"}})],1)]),r("el-form-item",[r("div",{staticClass:"but-b"},[r("el-button",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("取消")]),r("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.editloadingflag,expression:"editloadingflag"}],attrs:{type:"primary"},on:{click:function(t){return e.submitForm("myform")}}},[e._v("发布")])],1)])],1)],1)},s=[],l=r("5530"),a=r("c7eb"),o=r("1da1"),n=(r("c740"),r("a15b"),r("d81d"),r("a434"),r("d3b7"),r("159b"),r("b8bc")),u=r("8256"),c=r("c24f"),m={components:{ImageUpload:n["a"],Tinymce:u["a"]},data:function(){var e=function(e,t,r){""===t||void 0===t?r(new Error("请上传封面")):r()};return{editflag:!1,editloadingflag:!1,waibufileList:[],fileList:[],upheaders:{},imgdialogVisible:!1,validateImg:e,dialogImageUrl:"",inputVisible:!1,inputValue:"",ruleForm:{title:"",imgurl:"",worktime:"",content:"",isshow:!0,remarks:"",hotstr:[],sortid:"",filelist:[],hdAddress:""},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],content:[{required:!0,message:"请填写内容",trigger:"change"}],filelist:[{required:!0,trigger:"change",validator:e}]}}},created:function(){var e=this;this.getclasslist(),Object(c["e"])({id:this.$route.query.id}).then((function(t){var r=t.datalist,i=r.Imgurl,s=r.Title,l=r.Worktime,a=r.Content,o=r.Hotstr,n=r.Sortid,u=r.Isshow,c=r.Remarks,m=r.Fileslist,d=r.HdAddress;e.ruleForm.title=s,e.ruleForm.worktime=l;var f=[];i&&(e.waibufileList=[{url:i,uid:Math.ceil(1e5*Math.random()+Math.random(10))}],e.ruleForm.imgurl=i),m.forEach((function(e){return f.push({uid:Math.ceil(1e5*Math.random()+Math.random(10)),url:e})})),e.ruleForm.filelist=f,e.fileList=f,e.ruleForm.hdAddress=d,e.ruleForm.hotstr=o.split(","),e.editflag=!0,e.ruleForm.sortid=n,e.ruleForm.remarks=c,e.ruleForm.isshow=!!u,e.$nextTick((function(){e.ruleForm.content=a}))}))},mounted:function(){},methods:{getclasslist:function(){var e=this;return Object(o["a"])(Object(a["a"])().mark((function t(){var r;return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["j"])({channelname:e.$route.meta.channelname});case 2:r=t.sent,e.options=r.datalist;case 4:case"end":return t.stop()}}),t)})))()},beforeUpload:function(e){var t="image/jpeg"===e.type,r="image/png"===e.type,i=e.size/1024/1024<10;return t||r||this.$message.error("上传图片只能是 JPG/PNG 格式!"),i||this.$message.error("上传图片大小不能超过 10MB!"),t||r&&i},handleSuccess:function(e,t,r){var i=this;200===e.status&&r.every((function(e){return"success"==e.status}))&&r.map((function(e){e.response&&i.ruleForm.filelist.push({url:e.response.filepath,uid:e.uid})}))},handleError:function(e){this.$message.error(e.msg)},handleRemove:function(e){var t=this.ruleForm.filelist.findIndex((function(t){return t.uid===e.uid}));this.ruleForm.filelist.splice(t,1)},waubuhandleRemove:function(){this.ruleForm.imgulr=""},waibuhandleSuccess:function(e,t){this.ruleForm.imgurl=e.filepath},getselectlist:function(){var e=this;return Object(o["a"])(Object(a["a"])().mark((function t(){var r;return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["j"])({channelname:e.$route.meta.channelname});case 2:r=t.sent,e.options=r.datalist;case 4:case"end":return t.stop()}}),t)})))()},getLatLng:function(){var e=this,t=new TMap.service.Geocoder({});t.getLocation({address:this.ruleForm.hdAddress}).then(function(){var t=Object(o["a"])(Object(a["a"])().mark((function t(r){var i,s,o,n,u;return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==r.status||"Success"!==r.message){t.next=13;break}return e.ruleForm.hdLat=r.result.location.lat,e.ruleForm.hdLng=r.result.location.lng,i=e.ruleForm,s=i.hotstr,o=i.isshow,n=i.filelist,n=n.map((function(e){return e.url})).join(","),e.ruleForm.hotstr=s.join(","),t.next=8,Object(c["n"])(Object(l["a"])(Object(l["a"])({},e.ruleForm),{},{filelist:n,id:e.$route.query.id,channelname:e.$route.meta.channelname,isshow:+o}));case 8:u=t.sent,200==u.status&&(e.$message.success(u.msg),e.$router.go(-1)),e.editloadingflag=!1,t.next=15;break;case 13:e.editloadingflag=!1,e.$message.error("地址解析失败，请重新输入地址");case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.editloadingflag=!1,e.$message.error(t.message)}))},submitForm:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(o["a"])(Object(a["a"])().mark((function e(r){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:r&&(t.editloadingflag=!0,t.getLatLng());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},d=m,f=(r("5e63"),r("2877")),p=Object(f["a"])(d,i,s,!1,null,"0477deb8",null);t["default"]=p.exports}}]);