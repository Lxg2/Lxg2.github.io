(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46e243a8"],{"68d0":function(e,t,r){},7259:function(e,t,r){"use strict";r("68d0")},fbb6:function(e,t,r){"use strict";r.r(t);var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-box"},[r("el-form",{ref:"myform",staticClass:"my-form",attrs:{rules:e.rules,model:e.ruleForm,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"金融标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入金融标题"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),r("el-form-item",{attrs:{label:"标签展示"}},[e._l(e.ruleForm.tags,(function(t){return r("el-tag",{key:t,attrs:{closable:"","disable-transitions":!1},on:{close:function(r){return e.colseitem(t)}}},[e._v(" "+e._s(t)+" ")])})),e.inputVisible?r("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInputConfirm(t)}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}):r("el-button",{staticClass:"button-new-tag",staticStyle:{"font-size":"13px !important"},attrs:{size:"small"},on:{click:e.showInput}},[e._v("+ 类型标签")])],2),r("el-form-item",{attrs:{label:"详情描述",prop:"content"}},[e.editflag?r("Tinymce",{ref:"editor",attrs:{height:300},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}}):e._e()],1),r("el-form-item",{attrs:{label:"企业"}},[r("el-input",{attrs:{placeholder:"请输入企业"},model:{value:e.ruleForm.jrCompanyname,callback:function(t){e.$set(e.ruleForm,"jrCompanyname",t)},expression:"ruleForm.jrCompanyname"}})],1),r("el-form-item",{attrs:{label:"内容描述"}},[r("el-input",{attrs:{placeholder:"请输入内容描述"},model:{value:e.ruleForm.remarks,callback:function(t){e.$set(e.ruleForm,"remarks",t)},expression:"ruleForm.remarks"}})],1),r("el-form-item",{attrs:{label:"置顶/热门"}},[r("div",{staticStyle:{"margin-left":"10px"}},[r("el-checkbox-group",{model:{value:e.ruleForm.hotstr,callback:function(t){e.$set(e.ruleForm,"hotstr",t)},expression:"ruleForm.hotstr"}},[r("el-checkbox",{attrs:{label:"置顶",value:1}}),r("el-checkbox",{attrs:{label:"热门",value:2}})],1)],1)]),r("el-form-item",{attrs:{label:"联系人"}},[r("el-input",{attrs:{placeholder:"请输入联系人"},model:{value:e.ruleForm.communityusername,callback:function(t){e.$set(e.ruleForm,"communityusername",t)},expression:"ruleForm.communityusername"}})],1),r("el-form-item",{attrs:{label:"电话"}},[r("el-input",{attrs:{placeholder:"请输入电话"},model:{value:e.ruleForm.communityusermobile,callback:function(t){e.$set(e.ruleForm,"communityusermobile",t)},expression:"ruleForm.communityusermobile"}})],1),r("el-form-item",{attrs:{label:"所属分类",prop:"categoryid"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"请选择分类"},model:{value:e.ruleForm.categoryid,callback:function(t){e.$set(e.ruleForm,"categoryid",t)},expression:"ruleForm.categoryid"}},e._l(e.options,(function(e){return r("el-option",{key:e.id,attrs:{label:e.Categorytitle,value:e.id}})})),1)],1),r("el-form-item",{attrs:{label:"排序ID"}},[r("el-input",{attrs:{placeholder:"ID越小越靠前"},model:{value:e.ruleForm.sortid,callback:function(t){e.$set(e.ruleForm,"sortid",t)},expression:"ruleForm.sortid"}})],1),r("el-form-item",{attrs:{label:"融资封面",prop:"imgurl"}},[r("el-upload",{attrs:{action:e.$store.state.user.beseFile,"list-type":"picture-card","on-success":e.handleSuccess,"on-error":e.handleError,"before-upload":e.beforeUpload,"on-remove":e.handleRemove,"file-list":e.fileList,limit:1}},[r("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center",height:"100%"},attrs:{slot:"trigger"},slot:"trigger"},[r("i",{staticClass:"el-icon-picture-outline",staticStyle:{"font-size":"80px"}}),r("i",{staticClass:"el-icon-plus",staticStyle:{"font-size":"14px","margin-top":"10px"}},[e._v("添加封面")])])])],1),r("el-form-item",[r("div",{staticClass:"but-b"},[r("el-button",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("myform")}}},[e._v("发布")])],1)])],1)],1)},i=[],o=r("5530"),n=r("c7eb"),a=r("1da1"),s=(r("caad"),r("a15b"),r("a434"),r("2532"),r("b8bc")),u=r("8256"),m=r("c24f"),c={components:{ImageUpload:s["a"],Tinymce:u["a"]},data:function(){var e=function(e,t,r){""===t||void 0===t?r(new Error("请上传封面")):r()};return{form:{},fileList:[],editflag:!1,imgdialogVisible:!1,validateImg:e,dialogImageUrl:"",containertext:"",inputVisible:!1,inputValue:"",ruleForm:{title:"",tags:[],jrCompanyname:"",communityusername:"",communityusermobile:"",remarks:"",content:"",hotstr:[],categoryid:"",sortid:"",imgurl:""},rules:{title:[{required:!0,message:"请输入金融标题",trigger:"blur"}],content:[{required:!0,message:"请填写内容",trigger:"change"}],categoryId:[{required:!0,message:"请选择所属类别",trigger:"change"}],imgurl:[{required:!0,trigger:"change",validator:e}]},options:[]}},created:function(){this.getselectlist()},mounted:function(){var e=this;Object(m["e"])({id:this.$route.query.id}).then((function(t){var r=t.datalist,l=r.Communityusername,i=r.Communityusermobile,o=r.Title,n=r.Tags,a=r.Content,s=r.Hotstr,u=r.Categoryid,m=r.Sortid,c=r.Imgurl,p=r.Remarks,d=r.JrCompanyname;e.ruleForm.title=o,n&&(e.ruleForm.tags=n.split(",")),e.ruleForm.remarks=p,e.editflag=!0,e.ruleForm.communityusername=l,e.ruleForm.communityusermobile=i,e.ruleForm.jrCompanyname=d,e.ruleForm.hotstr=s.split(","),e.ruleForm.categoryid=u,e.ruleForm.sortid=m,e.ruleForm.imgurl=c,e.fileList=[{url:c}],e.$nextTick((function(){e.ruleForm.content=a}))}))},methods:{colseitem:function(e){this.ruleForm.tags.splice(this.ruleForm.tags.indexOf(e),1)},showInput:function(){var e=this;this.inputVisible=!0,this.$nextTick((function(t){e.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){var e=this.inputValue;e&&(0!==this.ruleForm.tags.length?!this.ruleForm.tags.includes(e)&&this.ruleForm.tags.push(e):this.ruleForm.tags.push(e)),this.inputVisible=!1,this.inputValue=""},beforeUpload:function(e){var t="image/jpeg"===e.type,r="image/png"===e.type,l=e.size/1024/1024<10;return t||r||this.$message.error("上传图片只能是 JPG/PNG 格式!"),l||this.$message.error("上传图片大小不能超过 10MB!"),t||r&&l},handleSuccess:function(e){this.ruleForm.imgurl=e.filepath},handleError:function(e){this.$message.error(e.msg)},handleRemove:function(){this.ruleForm.imgurl="",this.fileList=[]},getselectlist:function(){var e=this;return Object(a["a"])(Object(n["a"])().mark((function t(){var r;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(m["j"])({channelname:e.$route.meta.channelname});case 2:r=t.sent,e.options=r.datalist;case 4:case"end":return t.stop()}}),t)})))()},submitForm:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(a["a"])(Object(n["a"])().mark((function e(r){var l,i,a,s;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=8;break}return l=t.ruleForm,i=l.hotstr,a=l.tags,t.ruleForm.hotstr=i.join(","),a=a.join(","),e.next=6,Object(m["n"])(Object(o["a"])(Object(o["a"])({},t.ruleForm),{},{tags:a,id:t.$route.query.id,channelname:t.$route.meta.channelname}));case 6:s=e.sent,200==s.status&&(t.$message.success(s.msg),t.$router.go(-1));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},p=c,d=(r("7259"),r("2877")),f=Object(d["a"])(p,l,i,!1,null,"0336ca78",null);t["default"]=f.exports}}]);