(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[53],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"bds_radio_group",(function(){return r}));var o=n(9),r=function(){function e(e){var t=this;Object(o.r)(this,e),this.bdsRadioGroupChange=Object(o.c)(this,"bdsRadioGroupChange",7),this.radioGroupElement=null,this.chagedOptions=function(e,n){1==n.detail.checked&&(t.value=e)}}return e.prototype.valueChanged=function(e){this.setSelectedRadio(e),this.bdsRadioGroupChange.emit({value:e})},e.prototype.componentWillRender=function(){var e=this;this.radioGroupElement=this.element.getElementsByTagName("bds-radio");for(var t=function(t){n.radioGroupElement[t].addEventListener("bdsChange",(function(n){return e.chagedOptions(e.radioGroupElement[t].value,n)}))},n=this,o=0;o<this.radioGroupElement.length;o++)t(o)},e.prototype.setSelectedRadio=function(e){for(var t=this.radioGroupElement,n=0;n<t.length;n++){var o=t[n].value;t[n].checked=!1,0==t[n].checked&&e==o&&(t[n].checked=!0)}},e.prototype.render=function(){return Object(o.h)(o.H,null,Object(o.h)("slot",null))},Object.defineProperty(e.prototype,"element",{get:function(){return Object(o.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChanged"]}},enumerable:!1,configurable:!0}),e}()}}]);
//# sourceMappingURL=53.3b4d398d.chunk.js.map