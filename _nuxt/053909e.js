(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{341:function(n,t){},342:function(n,t){},344:function(n,t){},345:function(n,t){},348:function(n,t){},349:function(n,t){},350:function(n,t){},351:function(n,t){},352:function(n,t){},353:function(n,t){},354:function(n,t){},357:function(n,t){},358:function(n,t){},359:function(n,t){},363:function(n,t){},367:function(n,t,e){"use strict";e.r(t);var r=e(21),o=(e(61),e(18),e(311)),c=e.n(o),f=e(284),l=e(292),m={props:["keyword"],data:function(){return{datosama:"",configuracion:f,dt:l,num:"",preguntastx:"",suge:"",url:this.$nuxt.$route.path}},methods:{preguntas:function(n){var t=arguments;return Object(r.a)(regeneratorRuntime.mark((function e(){var pre;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return pre=t.length>1&&void 0!==t[1]?t[1]:"que",e.abrupt("return",new Promise((function(t,e){questionable(n,{prefixes:[pre]},(function(n,e){if(n)throw n;t(e)}))})));case 2:case"end":return e.stop()}}),e)})))()},sugerencias:function(n){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){c()(n,{levels:1},(function(n,e){if(n)throw n;t(e)}))})));case 1:case"end":return t.stop()}}),t)})))()}},mounted:function(){var n=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.sugerencias(n.keyword);case 2:n.suge=t.sent;case 3:case"end":return t.stop()}}),t)})))()}},w=e(43),component=Object(w.a)(m,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"py-5"},n._l(n.suge,(function(t,r){return e("div",{key:r},[e("nuxt-link",{staticStyle:{float:"left",margin:"22px"},attrs:{to:n.url+"?"+t}},[n._v("  Comprar "+n._s(t)+"     ")])],1)})),0)}),[],!1,null,null,null);t.default=component.exports}}]);