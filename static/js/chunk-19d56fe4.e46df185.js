(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19d56fe4"],{"0527":function(e,t,r){"use strict";r.r(t);var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-box"},[r("el-form",{ref:"myform",staticClass:"my-form",attrs:{rules:e.rules,model:e.ruleForm,"label-width":"130px"}},[r("el-form-item",{attrs:{label:"供需标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入供需标题"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),r("el-form-item",{attrs:{label:"供需类型",prop:"supplytype"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"请选择分类"},model:{value:e.ruleForm.supplytype,callback:function(t){e.$set(e.ruleForm,"supplytype",t)},expression:"ruleForm.supplytype"}},e._l(e.options2,(function(e){return r("el-option",{key:e.id,attrs:{label:e.Categorytitle,value:e.id}})})),1)],1),0===e.ruleForm.supplytype?r("el-form-item",{attrs:{label:"供应企业",prop:"communityname",rules:[{required:!0,message:"请输入供应企业",trigger:"blur"}]}},[r("el-input",{attrs:{placeholder:"请输入联系人"},model:{value:e.ruleForm.communityname,callback:function(t){e.$set(e.ruleForm,"communityname",t)},expression:"ruleForm.communityname"}})],1):e._e(),r("el-form-item",{attrs:{label:"联系人",prop:"communityusername",rules:[{required:!0,message:"请输入联系人",trigger:"blur"}]}},[r("el-input",{attrs:{placeholder:"请输入联系人"},model:{value:e.ruleForm.communityusername,callback:function(t){e.$set(e.ruleForm,"communityusername",t)},expression:"ruleForm.communityusername"}})],1),r("el-form-item",{attrs:{label:"联系方式",prop:"communityusermobile",rules:[{required:!0,message:"请输入联系方式",trigger:"blur"}]}},[r("el-input",{attrs:{placeholder:"请输入联系方式"},model:{value:e.ruleForm.communityusermobile,callback:function(t){e.$set(e.ruleForm,"communityusermobile",t)},expression:"ruleForm.communityusermobile"}})],1),r("el-form-item",{attrs:{label:"供需内容",prop:"remarks"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入供需信息"},model:{value:e.ruleForm.remarks,callback:function(t){e.$set(e.ruleForm,"remarks",t)},expression:"ruleForm.remarks"}})],1),r("el-form-item",{attrs:{label:"置顶/热门"}},[r("div",{staticStyle:{"margin-left":"10px"}},[r("el-checkbox-group",{model:{value:e.ruleForm.hotstr,callback:function(t){e.$set(e.ruleForm,"hotstr",t)},expression:"ruleForm.hotstr"}},[r("el-checkbox",{attrs:{label:"置顶",value:1}}),r("el-checkbox",{attrs:{label:"热门",value:2}})],1)],1)]),r("el-form-item",{attrs:{label:"排序ID"}},[r("el-input",{attrs:{placeholder:"ID越小越靠前"},model:{value:e.ruleForm.sortid,callback:function(t){e.$set(e.ruleForm,"sortid",t)},expression:"ruleForm.sortid"}})],1),r("el-form-item",{attrs:{label:"是否显示"}},[r("div",{staticStyle:{"margin-left":"10px"}},[r("el-switch",{attrs:{"active-text":"显示","inactive-text":"隐藏"},model:{value:e.ruleForm.isshow,callback:function(t){e.$set(e.ruleForm,"isshow",t)},expression:"ruleForm.isshow"}})],1)]),r("el-form-item",{attrs:{label:"供需图片",prop:"filelist"}},[r("el-upload",{attrs:{action:e.$store.state.user.beseFile,"list-type":"picture-card","on-success":e.handleSuccess,"on-error":e.handleError,"before-upload":e.beforeUpload,"on-remove":e.handleRemove,"file-list":e.fileList}},[r("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center",height:"100%"},attrs:{slot:"trigger"},slot:"trigger"},[r("i",{staticClass:"el-icon-picture-outline",staticStyle:{"font-size":"80px"}}),r("i",{staticClass:"el-icon-plus",staticStyle:{"font-size":"14px","margin-top":"10px"}},[e._v("添加封面")])])])],1),r("el-form-item",[r("div",{staticClass:"but-b"},[r("el-button",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("myform")}}},[e._v("发布")])],1)])],1)],1)},i=[],o=r("5530"),s=r("c7eb"),a=r("1da1"),n=r("ade3"),u=(r("c740"),r("a15b"),r("d81d"),r("a434"),r("d3b7"),r("159b"),r("b8bc")),m=r("8256"),c=r("c24f"),p={components:{ImageUpload:u["a"],Tinymce:m["a"]},data:function(){var e=function(e,t,r){""===t||void 0===t?r(new Error("请上传封面")):r()};return Object(n["a"])({form:{},fileList:[],options:[],options2:[{id:0,Categorytitle:"供应"},{id:1,Categorytitle:"需求"}],imgdialogVisible:!1,validateImg:e,dialogImageUrl:"",editflag:!1,containertext:"",ruleForm:{communityname:"",communityusername:"",communityusermobile:"",title:"",remarks:"",hotstr:[],sortid:"",filelist:[],isshow:!0,supplytype:""},rules:{title:[{required:!0,message:"请输入供需标题",trigger:"blur"}],content:[{required:!0,message:"请填写供需内容",trigger:"change"}],categoryId:[{required:!0,message:"请选择所属类别",trigger:"change"}],filelist:[{required:!0,trigger:"change",validator:e}]}},"options",[])},created:function(){this.getselectlist()},mounted:function(){var e=this;Object(c["e"])({id:this.$route.query.id}).then((function(t){var r=t.datalist,l=r.Title,i=r.Content,o=r.Hotstr,s=r.Categoryid,a=r.Communityname,n=r.Communityusername,u=r.Communityusermobile,m=r.Sortid,c=r.Remarks,p=r.Fileslist,d=r.Supplytype,f=r.Isshow;e.ruleForm.title=l,e.ruleForm.communityname=a,e.ruleForm.communityusername=n,e.ruleForm.communityusermobile=u,e.ruleForm.hotstr=o.split(","),e.ruleForm.categoryid=s,e.editflag=!0,e.ruleForm.remarks=c,e.ruleForm.sortid=m;var b=[];p.forEach((function(e){return b.push({uid:e,url:e})})),e.ruleForm.filelist=b,e.fileList=b,e.ruleForm.isshow=!!f,e.ruleForm.supplytype=d,e.$nextTick((function(){e.ruleForm.content=i}))}))},methods:{beforeUpload:function(e){var t="image/jpeg"===e.type,r="image/png"===e.type,l=e.size/1024/1024<10;return t||r||this.$message.error("上传图片只能是 JPG/PNG 格式!"),l||this.$message.error("上传图片大小不能超过 10MB!"),t||r&&l},handleSuccess:function(e,t){this.ruleForm.filelist.push({url:e.filepath,uid:t.uid})},handleError:function(e){this.$message.error(e.msg)},handleRemove:function(e){var t=this.ruleForm.filelist.findIndex((function(t){return t.uid===e.uid}));this.ruleForm.filelist.splice(t,1)},getselectlist:function(){var e=this;return Object(a["a"])(Object(s["a"])().mark((function t(){var r;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["j"])({channelname:e.$route.meta.channelname});case 2:r=t.sent,e.options=r.datalist;case 4:case"end":return t.stop()}}),t)})))()},submitForm:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(a["a"])(Object(s["a"])().mark((function e(r){var l,i,a,n,u;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=8;break}return l=t.ruleForm,i=l.hotstr,a=l.isshow,n=l.filelist,n=n.map((function(e){return e.url})).join(","),t.ruleForm.hotstr=i.join(","),e.next=6,Object(c["n"])(Object(o["a"])(Object(o["a"])({},t.ruleForm),{},{filelist:n,id:t.$route.query.id,channelname:t.$route.meta.channelname,isshow:+a}));case 6:u=e.sent,200==u.status&&(t.$message.success(u.msg),t.$router.go(-1));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},d=p,f=(r("3f58"),r("2877")),b=Object(f["a"])(d,l,i,!1,null,"64855b82",null);t["default"]=b.exports},"3f58":function(e,t,r){"use strict";r("9dd4")},"9dd4":function(e,t,r){}}]);