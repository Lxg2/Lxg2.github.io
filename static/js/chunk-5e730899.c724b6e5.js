(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e730899"],{"11ae":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-box"},[r("el-form",{ref:"myform",staticClass:"my-form",attrs:{rules:e.rules,model:e.ruleForm,"label-width":"200px"}},[r("el-form-item",{attrs:{label:"岗位",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入招聘岗位"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),r("el-form-item",{attrs:{label:"招聘人数"}},[r("el-input",{attrs:{type:"number",placeholder:"请输入招聘人数"},model:{value:e.ruleForm.jobpersoncount,callback:function(t){e.$set(e.ruleForm,"jobpersoncount",t)},expression:"ruleForm.jobpersoncount"}})],1),r("el-form-item",{attrs:{label:"企业"}},[r("el-input",{attrs:{placeholder:"请输入企业"},model:{value:e.ruleForm.companyname,callback:function(t){e.$set(e.ruleForm,"companyname",t)},expression:"ruleForm.companyname"}})],1),r("el-form-item",{attrs:{label:"职务福利"}},[e._l(e.ruleForm.tags,(function(t){return r("el-tag",{key:t,attrs:{closable:"","disable-transitions":!1},on:{close:function(r){return e.colseitem(t)}}},[e._v(" "+e._s(t)+" ")])})),e.inputVisible?r("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInputConfirm(t)}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}):r("el-button",{staticClass:"button-new-tag",staticStyle:{"font-size":"13px !important"},attrs:{size:"small"},on:{click:e.showInput}},[e._v("+ 类型标签")])],2),r("el-form-item",{attrs:{label:"招聘简介",prop:"content"}},[e.editflag?r("Tinymce",{ref:"editor",attrs:{height:300},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}}):e._e()],1),r("el-form-item",{attrs:{label:"地区"}},[r("el-input",{attrs:{placeholder:"请输入地区"},model:{value:e.ruleForm.hdAddress,callback:function(t){e.$set(e.ruleForm,"hdAddress",t)},expression:"ruleForm.hdAddress"}})],1),r("el-form-item",{attrs:{label:"学历"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"请选择分类"},model:{value:e.ruleForm.educational,callback:function(t){e.$set(e.ruleForm,"educational",t)},expression:"ruleForm.educational"}},e._l(e.options2,(function(e){return r("el-option",{key:e.Categorytitle,attrs:{label:e.Categorytitle,value:e.Categorytitle}})})),1)],1),r("el-form-item",{attrs:{label:"经验要求"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"请选择经验"},model:{value:e.ruleForm.workexperience,callback:function(t){e.$set(e.ruleForm,"workexperience",t)},expression:"ruleForm.workexperience"}},e._l(e.options3,(function(e){return r("el-option",{key:e.Categorytitle,attrs:{label:e.Categorytitle,value:e.Categorytitle}})})),1)],1),r("el-form-item",{attrs:{label:"薪资(单位：K/月)"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"请选择薪资"},model:{value:e.ruleForm.salary,callback:function(t){e.$set(e.ruleForm,"salary",t)},expression:"ruleForm.salary"}},e._l(e.options4,(function(e){return r("el-option",{key:e.Categorytitle,attrs:{label:e.Categorytitle,value:e.Categorytitle}})})),1)],1),r("el-form-item",{attrs:{label:"联系方式"}},[r("el-input",{attrs:{placeholder:"请输入联系方式"},model:{value:e.ruleForm.tellphone,callback:function(t){e.$set(e.ruleForm,"tellphone",t)},expression:"ruleForm.tellphone"}})],1),r("el-form-item",{attrs:{label:"置顶/热门"}},[r("div",{staticStyle:{"margin-left":"10px"}},[r("el-checkbox-group",{model:{value:e.ruleForm.hotstr,callback:function(t){e.$set(e.ruleForm,"hotstr",t)},expression:"ruleForm.hotstr"}},[r("el-checkbox",{attrs:{label:"置顶",value:1}}),r("el-checkbox",{attrs:{label:"热门",value:2}})],1)],1)]),r("el-form-item",{attrs:{label:"排序ID"}},[r("el-input",{attrs:{placeholder:"ID越小越靠前"},model:{value:e.ruleForm.sortid,callback:function(t){e.$set(e.ruleForm,"sortid",t)},expression:"ruleForm.sortid"}})],1),r("el-form-item",{attrs:{label:"是否显示"}},[r("div",{staticStyle:{"margin-left":"10px"}},[r("el-switch",{attrs:{"active-text":"显示","inactive-text":"隐藏"},model:{value:e.ruleForm.isshow,callback:function(t){e.$set(e.ruleForm,"isshow",t)},expression:"ruleForm.isshow"}})],1)]),r("el-form-item",[r("div",{staticClass:"but-b"},[r("el-button",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("取消")]),r("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.submitLoading,expression:"submitLoading"}],attrs:{type:"primary"},on:{click:function(t){return e.submitForm("myform")}}},[e._v("发布")])],1)])],1)],1)},l=[],o=r("5530"),n=r("c7eb"),i=r("1da1"),s=r("ade3"),u=(r("caad"),r("a15b"),r("2532"),r("b8bc")),c=r("8256"),m=r("c24f"),d=r("5f87"),p={components:{ImageUpload:u["a"],Tinymce:c["a"]},data:function(){var e=function(e,t,r){""===t||void 0===t?r(new Error("请上传封面")):r()};return Object(s["a"])(Object(s["a"])(Object(s["a"])({submitLoading:!1,editflag:!1,options4:[{Categorytitle:"面议"},{Categorytitle:"1-3k"},{Categorytitle:"3-5k"},{Categorytitle:"5-8k"},{Categorytitle:"8-12k"},{Categorytitle:"12-16k"},{Categorytitle:"16-25k"},{Categorytitle:"25-50k"},{Categorytitle:"50k以上"}],options3:[{id:1,Categorytitle:"不限"},{id:7,Categorytitle:"应届毕业生"},{id:2,Categorytitle:"1年以下"},{id:3,Categorytitle:"1-3年"},{id:4,Categorytitle:"3-5年"},{id:5,Categorytitle:"5-10年"},{id:6,Categorytitle:"10年以上"}],options2:[{id:1,Categorytitle:"不限"},{id:7,Categorytitle:"初中及以下"},{id:8,Categorytitle:"中专/中技"},{id:2,Categorytitle:"高中"},{id:4,Categorytitle:"大专"},{id:5,Categorytitle:"本科"},{id:6,Categorytitle:"硕士"},{id:7,Categorytitle:"博士"}],fileList:[],upheaders:{},imgdialogVisible:!1,inputVisible:!1,inputValue:"",validateImg:e,dialogImageUrl:"",salary:[0,0]},"editflag",!1),"ruleForm",{title:"",tags:[],salary:"",jobpersoncount:"",companyname:"",content:"",hdAddress:"",workexperience:"",educational:"",tellphone:"",hotstr:[],sortid:"",isshow:!0}),"rules",{title:[{required:!0,message:"请输入岗位",trigger:"blur"}],categoryid:[{required:!0,message:"请选择企业",trigger:"blur"}],content:[{required:!0,message:"请填写内容",trigger:"change"}]})},created:function(){this.getinfofn()},mounted:function(){this.upheaders={Authorization:Object(d["a"])()}},methods:{getinfofn:function(){var e=this;return Object(i["a"])(Object(n["a"])().mark((function t(){var r,a,l,o,i,s,u,c,d,p,g,h,b,f,y;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(m["e"])({id:e.$route.query.id});case 2:r=t.sent,a=r.datalist,l=a.Title,o=a.Tags,i=a.Content,s=a.Jobpersoncount,u=a.Companyname,c=a.Hotstr,d=a.Sortid,p=a.Isshow,g=a.HdAddress,h=a.Workexperience,b=a.Educational,f=a.Tellphone,y=a.Salary,e.ruleForm.title=l,o&&(e.ruleForm.tags=o.split(",")),e.ruleForm.tellphone=f,e.ruleForm.companyname=u,e.ruleForm.jobpersoncount=s,e.ruleForm.hdAddress=g,e.ruleForm.educational=b,e.ruleForm.workexperience=h,e.editflag=!0,e.ruleForm.salary=y,e.ruleForm.hotstr=c.split(","),e.ruleForm.sortid=d,e.$nextTick((function(){e.ruleForm.content=i})),e.ruleForm.isshow=!!p;case 31:case"end":return t.stop()}}),t)})))()},handleInputConfirm:function(){var e=this.inputValue;e&&(0!==this.ruleForm.tags.length?!this.ruleForm.tags.includes(e)&&this.ruleForm.tags.push(e):this.ruleForm.tags.push(e)),this.inputVisible=!1,this.inputValue=""},showInput:function(){var e=this;this.inputVisible=!0,this.$nextTick((function(t){e.$refs.saveTagInput.$refs.input.focus()}))},getclasslist:function(){var e=this;return Object(i["a"])(Object(n["a"])().mark((function t(){var r;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(m["j"])({channelname:e.$route.meta.channelname});case 2:r=t.sent,e.options=r.datalist;case 4:case"end":return t.stop()}}),t)})))()},beforeUpload:function(e){var t="image/jpeg"===e.type,r="image/png"===e.type,a=e.size/1024/1024<10;return t||r||this.$message.error("上传图片只能是 JPG/PNG 格式!"),a||this.$message.error("上传图片大小不能超过 10MB!"),t||r&&a},handleSuccess:function(e){this.ruleForm.imgurl=e.filepath},handleError:function(e){this.$message.error(e.msg)},handleRemove:function(){this.ruleForm.imgurl="",this.fileList=[]},getLatLng:function(){var e=this,t=new TMap.service.Geocoder({});t.getLocation({address:this.ruleForm.hdAddress}).then(function(){var t=Object(i["a"])(Object(n["a"])().mark((function t(r){var a,l,i,s,u;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==r.status||"Success"!==r.message){t.next=13;break}return e.ruleForm.hdLat=r.result.location.lat,e.ruleForm.hdLng=r.result.location.lng,a=e.ruleForm,l=a.isshow,i=a.hotstr,s=a.tags,i=i.join(","),s=s.join(","),t.next=8,Object(m["n"])(Object(o["a"])(Object(o["a"])({},e.ruleForm),{},{hotstr:i,tags:s,isshow:+l,channelname:e.$route.meta.channelname,id:e.$route.query.id}));case 8:u=t.sent,200===u.status?(e.$message.success(u.msg),e.$router.go(-1)):e.$message.error(u.msg),e.submitLoading=!1,t.next=15;break;case 13:e.submitLoading=!1,e.$message.error("地址解析失败，请重新输入地址");case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.submitLoading=!1,e.$message.error("地址解析错误，请检查后再试")}))},submitForm:function(e){var t=this;return Object(i["a"])(Object(n["a"])().mark((function r(){return Object(n["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$refs[e].validate(function(){var e=Object(i["a"])(Object(n["a"])().mark((function e(r){return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:r&&(t.submitLoading=!0,t.getLatLng());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()}}},g=p,h=(r("5e7d"),r("2877")),b=Object(h["a"])(g,a,l,!1,null,"1c19bee5",null);t["default"]=b.exports},"5e7d":function(e,t,r){"use strict";r("d984")},d984:function(e,t,r){}}]);