(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[19],{70:function(a,t,r){"use strict";r.r(t),r.d(t,"bds_avatar_group",(function(){return i}));var e=r(9),i=function(){function a(a){Object(e.r)(this,a),this.bdsClickAvatarGroup=Object(e.c)(this,"bdsClickAvatarGroup",7),this.size="standard"}return a.prototype.handleClickGroup=function(a){a.preventDefault(),this.bdsClickAvatarGroup.emit(a)},a.prototype.handleClickKey=function(a){"Enter"!==a.key&&" "!==a.key||!this.canClick||(a.preventDefault(),this.bdsClickAvatarGroup.emit())},a.prototype.parseUsers=function(){if(this.users)try{this.internalUsers="string"===typeof this.users?JSON.parse(this.users):this.users}catch(a){this.internalUsers=[]}},a.prototype.componentWillLoad=function(){this.users&&this.parseUsers(),this.leftoversUsers=this.internalUsers.length-5},a.prototype.render=function(){var a,t=this;return Object(e.h)(e.H,{class:"host"},Object(e.h)("div",{class:(a={avatar__group:!0},a["avatar__group__size--".concat(this.size)]=!0,a["avatar__group__click--".concat(this.canClick)]=!0,a),onClick:function(){return t.handleClickGroup}},this.internalUsers?this.internalUsers.slice(0,6).map((function(a,r,i){return r+1===i.length&&t.internalUsers.length>5?Object(e.h)("bds-avatar",{size:t.size,ellipsis:t.leftoversUsers}):Object(e.h)("bds-avatar",{id:a.id,name:a.name,thumbnail:a.thumbnail,size:t.size})})):Object(e.h)("slot",null)),this.canClick?Object(e.h)("div",{class:"focus",tabindex:"0",onClick:function(){return t.handleClickKey}}):"")},a}();i.style=".host{position:relative;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.avatar__group{display:-ms-flexbox;display:flex}.avatar__group>*:nth-child(1){z-index:1}.avatar__group>*:nth-child(2){z-index:2}.avatar__group>*:nth-child(3){z-index:3}.avatar__group>*:nth-child(4){z-index:4}.avatar__group>*:nth-child(5){z-index:5}.avatar__group>*:nth-child(6){z-index:6;width:auto}.avatar__group>*:nth-child(6) div{background-color:#1a2437;padding:0 16px;width:auto}.avatar__group__click--true{cursor:pointer}.avatar__group .avatar{position:relative}.avatar__group__size--extra-small{margin-left:8px}.avatar__group__size--extra-small>*{margin-left:-8px}.avatar__group__size--extra-small>*:nth-child(6) div{padding:0 8px}.avatar__group__size--extra-small .avatar{height:32px}.avatar__group__size--small{margin-left:8px}.avatar__group__size--small>*{margin-left:-8px}.avatar__group__size--small .avatar{height:40px}.avatar__group__size--standard{margin-left:16px}.avatar__group__size--standard>*{margin-left:-16px}.avatar__group__size--standard .avatar{height:56px}.avatar__group__size--large{margin-left:16px}.avatar__group__size--large>*{margin-left:-16px}.avatar__group__size--large .avatar{height:64px}.avatar__group__size--extra-large{margin-left:16px}.avatar__group__size--extra-large>*{margin-left:-16px}.avatar__group__size--extra-large .avatar{height:72px}.focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid #c226fb;border-radius:4px;width:100%;height:100%;top:-4px;left:-4px;padding-right:4px;padding-bottom:4px;outline:none}"}}]);
//# sourceMappingURL=19.a5ff566e.chunk.js.map