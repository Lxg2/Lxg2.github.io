(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65a0bd4a"],{"52d6":function(e,t,r){},"92bb":function(e,t,r){"use strict";r("52d6")},e6ae:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-box"},[r("el-form",{ref:"myform",staticClass:"my-form",attrs:{rules:e.rules,model:e.ruleForm,"label-width":"110px"}},[r("el-form-item",{attrs:{label:"服务站名称",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入服务站名称"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),r("el-form-item",{attrs:{label:"服务地址"}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.ruleForm.hdAddress,callback:function(t){e.$set(e.ruleForm,"hdAddress",t)},expression:"ruleForm.hdAddress"}})],1),r("el-form-item",{attrs:{label:"工作时间"}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.ruleForm.worktime,callback:function(t){e.$set(e.ruleForm,"worktime",t)},expression:"ruleForm.worktime"}})],1),r("el-form-item",{attrs:{label:"所属社区"}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.ruleForm.communityname,callback:function(t){e.$set(e.ruleForm,"communityname",t)},expression:"ruleForm.communityname"}})],1),r("el-form-item",{attrs:{label:"负责人姓名"}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.ruleForm.communityusername,callback:function(t){e.$set(e.ruleForm,"communityusername",t)},expression:"ruleForm.communityusername"}})],1),r("el-form-item",{attrs:{label:"负责人电话"}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.ruleForm.communityusermobile,callback:function(t){e.$set(e.ruleForm,"communityusermobile",t)},expression:"ruleForm.communityusermobile"}})],1),r("el-form-item",{attrs:{label:"负责人职务"}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.ruleForm.communitypositon,callback:function(t){e.$set(e.ruleForm,"communitypositon",t)},expression:"ruleForm.communitypositon"}})],1),r("el-form-item",{attrs:{label:"置顶/热门"}},[r("div",{staticStyle:{"margin-left":"10px"}},[r("el-checkbox-group",{model:{value:e.ruleForm.hotstr,callback:function(t){e.$set(e.ruleForm,"hotstr",t)},expression:"ruleForm.hotstr"}},[r("el-checkbox",{attrs:{label:"置顶",value:1}}),r("el-checkbox",{attrs:{label:"热门",value:2}})],1)],1)]),r("el-form-item",{attrs:{label:"是否显示"}},[r("div",{staticStyle:{"margin-left":"10px"}},[r("el-switch",{attrs:{"active-text":"显示","inactive-text":"隐藏"},model:{value:e.ruleForm.isshow,callback:function(t){e.$set(e.ruleForm,"isshow",t)},expression:"ruleForm.isshow"}})],1)]),r("el-form-item",{attrs:{label:"排序ID"}},[r("el-input",{attrs:{placeholder:"ID越小越靠前"},model:{value:e.ruleForm.sortid,callback:function(t){e.$set(e.ruleForm,"sortid",t)},expression:"ruleForm.sortid"}})],1),r("el-form-item",{attrs:{label:"服务站封面",prop:"imgurl"}},[r("el-upload",{attrs:{action:e.$store.state.user.beseFile,"list-type":"picture-card","on-success":e.handleSuccess,"on-error":e.handleError,"before-upload":e.beforeUpload,"on-remove":e.handleRemove,"file-list":e.fileList,limit:1}},[r("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center",height:"100%"},attrs:{slot:"trigger"},slot:"trigger"},[r("i",{staticClass:"el-icon-picture-outline",staticStyle:{"font-size":"80px"}}),r("i",{staticClass:"el-icon-plus",staticStyle:{"font-size":"14px","margin-top":"10px"}},[e._v("添加封面")])])])],1),r("el-form-item",[r("div",{staticClass:"but-b"},[r("el-button",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("取消")]),r("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.btnloading,expression:"btnloading"}],attrs:{type:"primary"},on:{click:function(t){return e.submitForm("myform")}}},[e._v("发布")])],1)])],1)],1)},l=[],i=r("5530"),n=r("c7eb"),s=r("1da1"),a=(r("a15b"),r("b8bc")),m=r("8256"),u=r("c24f"),c={components:{ImageUpload:a["a"],Tinymce:m["a"]},data:function(){var e=function(e,t,r){""===t||void 0===t?r(new Error("请上传封面")):r()};return{btnloading:!1,form:{},fileList:[],imgdialogVisible:!1,validateImg:e,dialogImageUrl:"",containertext:"",ruleForm:{title:"",hotstr:[],sortid:"",isshow:!0,imgurl:"",hdAddress:"",worktime:"",communityname:"",communityusername:"",communityusermobile:"",communitypositon:""},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],imgurl:[{required:!0,trigger:"change",validator:e}]},options:[]}},created:function(){this.getselectlist()},mounted:function(){var e=this;Object(u["e"])({id:this.$route.query.id}).then((function(t){var r=t.datalist,o=r.HdAddress,l=r.Worktime,i=r.Communityname,n=r.Communityusername,s=r.Communityusermobile,a=r.Communitypositon,m=r.Title,u=r.Hotstr,c=r.Sortid,d=r.Imgurl,p=r.Isshow;e.ruleForm.title=m,e.ruleForm.hotstr=u.split(","),e.ruleForm.sortid=c,e.ruleForm.isshow=!!p,e.ruleForm.imgurl=d,e.ruleForm.hdAddress=o,e.ruleForm.worktime=l,e.ruleForm.communityname=i,e.ruleForm.communityusername=n,e.ruleForm.communityusermobile=s,e.ruleForm.communitypositon=a,e.fileList=[{url:d}]}))},methods:{beforeUpload:function(e){var t="image/jpeg"===e.type,r="image/png"===e.type,o=e.size/1024/1024<10;return t||r||this.$message.error("上传图片只能是 JPG/PNG 格式!"),o||this.$message.error("上传图片大小不能超过 10MB!"),t||r&&o},handleSuccess:function(e){this.ruleForm.imgurl=e.filepath},handleError:function(e){this.$message.error(e.msg)},handleRemove:function(){this.ruleForm.imgurl="",this.fileList=[]},getselectlist:function(){var e=this;return Object(s["a"])(Object(n["a"])().mark((function t(){var r;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["j"])({channelname:e.$route.meta.channelname});case 2:r=t.sent,e.options=r.datalist;case 4:case"end":return t.stop()}}),t)})))()},getLatLng:function(){var e=this,t=new TMap.service.Geocoder({});t.getLocation({address:this.ruleForm.hdAddress}).then(function(){var t=Object(s["a"])(Object(n["a"])().mark((function t(r){var o,l,s,a,m,c;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==r.status||"Success"!==r.message){t.next=13;break}return e.ruleForm.hdLat=r.result.location.lat,e.ruleForm.hdLng=r.result.location.lng,o=e.ruleForm,l=o.hotstr,s=o.isshow,a=o.communitypositon,m=o.communityusername,null!==a&&null!==m||(a="",m=""),e.ruleForm.hotstr=l.join(","),t.next=8,Object(u["n"])(Object(i["a"])(Object(i["a"])({},e.ruleForm),{},{communitypositon:a,communityusername:m,id:e.$route.query.id,channelname:e.$route.meta.channelname,isshow:+s}));case 8:c=t.sent,200==c.status?(e.$message.success(c.msg),e.$router.go(-1)):e.$message.error(c.msg),e.btnloading=!1,t.next=15;break;case 13:e.btnloading=!1,e.$message.error("地址解析失败，请重新输入地址");case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.btnloading=!1,e.$message.error("地址解析错误，请检查后再试")}))},submitForm:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(s["a"])(Object(n["a"])().mark((function e(r){return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:r&&(t.btnloading=!0,t.getLatLng());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},d=c,p=(r("92bb"),r("2877")),b=Object(p["a"])(d,o,l,!1,null,"53f78f56",null);t["default"]=b.exports}}]);