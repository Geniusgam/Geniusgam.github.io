webpackJsonp([18],{1021:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{lg:{span:"18",offset:"3"}}},[e("div",{staticClass:"creat-head"},[e("div",{staticClass:"headimg"},[e("img",{attrs:{src:n.owner_url}})]),n._v(" "),e("div",{staticClass:"headinfo"},[e("h2",{on:{click:n.jwShow}},[n._v(n._s(n.$t("setting.con1")))]),n._v(" "),e("h3",[n._v(n._s(n.$t("setting.con2")))])])]),n._v(" "),e("div",{staticClass:"iptlist"},[e("el-form",{attrs:{"label-position":n.labelPosition,"label-width":"80px",model:n.formLabelAlign}},[e("el-form-item",{attrs:{label:n.$t("create.con13")}},[e("el-input",{attrs:{disabled:!0,value:""},model:{value:n.address,callback:function(t){n.address=t},expression:"address"}})],1),n._v(" "),e("el-form-item",{attrs:{label:n.$t("create.con14")}},[e("el-input",{model:{value:n.email,callback:function(t){n.email=t},expression:"email"}}),n._v(" "),5==n.jwshow?e("input",{directives:[{name:"model",rawName:"v-model.lazy",value:n.email,expression:"email",modifiers:{lazy:!0}}],staticStyle:{width:"200px",height:"45px"},domProps:{value:n.email},on:{change:function(t){n.email=t.target.value}}}):n._e(),n._v(" "),5==n.jwshow?e("input",{staticStyle:{width:"200px",height:"45px"}}):n._e()],1),n._v(" "),e("el-form-item",{attrs:{label:n.$t("create.con15")}},[e("el-input",{attrs:{maxlength:16},model:{value:n.nickname,callback:function(t){n.nickname="string"==typeof t?t.trim():t},expression:"nickname"}})],1)],1),n._v(" "),e("p",[n._v(n._s(n.$t("create.con3"))),e("em",[n._v("support@hyperdragons.com")])]),n._v(" "),n.mobile?n._e():e("div",{staticClass:"info"},[n._v(n._s(n.$t("create.con4")))]),n._v(" "),e("div",{staticClass:"iptbth"},[e("el-button",{staticClass:"blue-button",attrs:{loading:n.isUpdating},on:{click:n.update}},[n._v(n._s(n.$t("setting.con3")))])],1)],1)])],1)],1)])},a=[];i._withStripped=!0;var o={render:i,staticRenderFns:a};t.a=o},1049:function(n,t,e){var i=e(893);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(83)("71880362",i,!1)},1050:function(n,t,e){var i=e(894);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(83)("4e5a2385",i,!1)},703:function(n,t,e){"use strict";function i(n){r||(e(1050),e(1049))}Object.defineProperty(t,"__esModule",{value:!0});var a=e(870),o=e(1021),r=!1,d=e(110),s=i,l=d(a.a,o.a,!1,s,"data-v-134dd227",null);l.options.__file="src/components/page/mydragons-setting.vue",t.default=l.exports},840:function(n,t,e){n.exports=e.p+"f65e5d4c499b46e2cec0d7bfeae8fbae.jpg"},849:function(n,t,e){n.exports=e.p+"6984c38e7c86d207917dd0ad89213bd8.png"},850:function(n,t,e){n.exports=e.p+"cb9dfc6dbc7600f38dba65d18022cf28.png"},870:function(n,t,e){"use strict";t.a={data:function(){return{jwshow:0,labelPosition:"top",address:"",email:"",nickname:"",oriEmail:"",oriNickname:"",owner_url:"",isUpdating:!1,mobile:sessionStorage.mobile,formLabelAlign:{nickname:"",address:"",email:""}}},created:function(){this.$root.eventHub.$emit("isloading","true"),this.tryGetUserinfo()},methods:{jwShow:function(){this.jwshow++},tryGetUserinfo:function(){var n=this;setTimeout(function(){n.getUserinfo(function(){n.$root.eventHub.$emit("isloading","false")},function(){n.tryGetUserinfo()})},1e3)},getUserinfo:function(n,t){var e=this;if(!this.$root.$Account)return null!=t?t():null;this.address=this.$root.$Account,this.$ajax("/get-user-info","GET",{owner:this.address},function(t){e.oriEmail=e.email=t.email,e.oriNickname=e.nickname=t.nick,e.owner_url=e.$getHeadURLById(t.url),null!=n&&n()},function(n){null!=t&&t()})},update:function(){var n=this;if(this.oriEmail!=this.email||this.oriNickname!=this.nickname)return this.$isEmail(this.email)?void(this.nickname?this.nickname&&(this.isUpdating=!0,this.$ajax("/update-userinfo","GET",{owner:this.address,nick:this.nickname,email:this.email},function(t){n.$notify({message:n.$t("setting.update_succ"),type:"success"}),localStorage.setItem("nick",n.nickname),localStorage.setItem("email",n.email),n.oriEmail=n.email,n.oriNickname=n.nickname,n.isUpdating=!1},function(t){n.$notify({message:t,type:"error"}),n.isUpdating=!1})):this.$notify({message:this.$t("common.nickname_empty"),type:"error"})):void this.$notify({message:this.$t("common.invalid_email"),type:"error"})}}}},893:function(n,t,e){t=n.exports=e(62)(void 0),t.push([n.i,"\n.iptlist .el-form-item__label {\n  font-size: 18px;\n  font-weight: normal;\n  font-stretch: normal;\n  line-height: 22px;\n  letter-spacing: -1px;\n  color: #b0b0b0;\n  width: 100%;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.iptlist .el-input__inner {\n  width: 520px;\n  height: 60px;\n  border-radius: 24px;\n  border: solid 3px #409fff;\n  font-size: 16px;\n  color: #303030;\n  background: transparent;\n  text-align: center;\n  margin: 0 auto;\n}\n.el-form-item {\n  margin-bottom: 35px;\n}\n.el-input.is-disabled .el-input__inner {\n  background: #409fff;\n  border: none;\n  color: #fff;\n}\n.iptlist .el-form {\n  width: 520px;\n  margin: 0 auto;\n}\n.iptlist .blue-button.el-button {\n  width: 300px;\n  height: 70px;\n}\n@media screen and (max-width: 768px) {\n.iptlist .el-input__inner {\n    width: 100%;\n    height: 3.75rem;\n    font-size: 1.5rem;\n    margin: 0 auto;\n}\n.iptlist .el-form {\n    width: 85%;\n}\n.iptlist .el-form-item__label {\n    font-size: 1.5rem;\n    margin-bottom: -0.5rem;\n    line-height: 1.5rem;\n}\n.el-form-item {\n    margin-bottom: 1.5rem;\n}\n.iptlist .blue-button.el-button {\n    width: 18.7rem;\n    height: 4.3rem;\n    padding: 0;\n    box-shadow: -1px -1px 0px 1px #4071ff inset, 1px 1px 0px 1px #57b3ff inset;\n    font-size: 1.5rem;\n}\n}\n",""])},894:function(n,t,e){t=n.exports=e(62)(void 0),t.push([n.i,"\n.container[data-v-134dd227] {\n  background: url("+e(840)+") no-repeat;\n  background-position: center center;\n  background-size: cover;\n  margin-top: -82px;\n}\n.creat-head[data-v-134dd227] {\n  width: 820px;\n  margin: 160px auto 50px;\n  height: 128px;\n  text-align: center;\n}\n.headimg[data-v-134dd227] {\n  width: 128px;\n  text-align: center;\n  height: 128px;\n  float: left;\n  margin-left: 26px;\n  display: none;\n}\n.headimg img[data-v-134dd227] {\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n}\n.headinfo h2[data-v-134dd227] {\n  font-size: 48px;\n  color: #303030;\n  font-weight: normal;\n  margin-top: 20px;\n  line-height: 48px;\n}\n.headinfo h3[data-v-134dd227] {\n  font-size: 22px;\n  color: #969696;\n  margin-top: 21px;\n  font-weight: normal;\n}\n.iptlist[data-v-134dd227] {\n  width: 820px;\n  margin: 0 auto;\n}\n.iptlist p[data-v-134dd227] {\n  font-size: 18px;\n  color: #969696;\n  text-align: center;\n  margin-top: 68px;\n}\n.iptlist em[data-v-134dd227] {\n  color: #303030;\n  font-style: normal;\n}\n.iptlist .info[data-v-134dd227] {\n  width: 100%;\n  background-color: #e7f9fd;\n  border-radius: 24px;\n  border: solid 2px #409fff;\n  font-size: 18px;\n  line-height: 30px;\n  color: #409fff;\n  margin-top: 36px;\n  padding: 20px 56px;\n  box-sizing: border-box;\n  text-align: center;\n}\n.iptlist .iptbth[data-v-134dd227] {\n  text-align: center;\n  margin-top: 40px;\n  padding-bottom: 240px;\n}\nheader[data-v-134dd227] {\n  margin-left: 35px;\n  line-height: 40px;\n  width: 90%;\n  position: relative;\n  z-index: 10000;\n}\nheader > .fl > img[data-v-134dd227] {\n  width: 48px;\n  margin-right: 7px;\n  vertical-align: middle;\n  height: 48px;\n}\nheader > .fl > p[data-v-134dd227] {\n  font-family: PingFang-SC-Bold;\n  font-size: 20px;\n  font-weight: normal;\n  font-stretch: normal;\n  color: #303030;\n  display: inline-block;\n}\n.pink-button[data-v-134dd227] {\n  width: 250px;\n  height: 93px;\n}\n@media screen and (min-width: 1024px) and (max-width: 1504px) {\n.container[data-v-134dd227] {\n    background: url("+e(849)+") no-repeat;\n    background-position: center center;\n    background-size: cover;\n}\n}\n@media screen and (max-width: 768px) {\n.container[data-v-134dd227] {\n    background: url("+e(850)+") no-repeat;\n    background-position: center center;\n    background-size: cover;\n    margin-top: -162px;\n}\n.content[data-v-134dd227] {\n    padding-top: 162px;\n}\n.creat-head[data-v-134dd227] {\n    width: 100%;\n    margin: 2.5rem auto;\n    height: 6rem;\n}\n.headimg[data-v-134dd227] {\n    width: 6rem;\n    text-align: center;\n    height: 6rem;\n    float: left;\n    margin-left: 1rem;\n}\n.headimg img[data-v-134dd227] {\n    width: 6rem;\n    height: 6rem;\n    border-radius: 50%;\n}\n.headinfo h2[data-v-134dd227] {\n    font-size: 2rem;\n    margin-top: 0.5rem;\n    line-height: 3rem;\n}\n.headinfo h3[data-v-134dd227] {\n    font-size: 1.3rem;\n    color: #969696;\n    margin-top: 0.5rem;\n    font-weight: normal;\n}\n.iptlist[data-v-134dd227] {\n    width: 90%;\n    margin: 0 auto;\n}\n.iptlist p[data-v-134dd227] {\n    font-size: 1.5rem;\n    color: #969696;\n    text-align: center;\n    margin-top: 2rem;\n}\n.iptlist .info[data-v-134dd227] {\n    width: 100%;\n    font-size: 1.5rem;\n    line-height: 1.5rem;\n    color: #409fff;\n    margin-top: 36px;\n    padding: 1rem;\n}\n.iptlist .iptbth[data-v-134dd227] {\n    text-align: center;\n    margin-top: 40px;\n    padding-bottom: 10rem;\n}\n}\n",""])}});