(function(t){function e(e){for(var n,a,o=e[0],l=e[1],c=e[2],u=0,f=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,a=1;a<r.length;a++){var o=r[a];0!==i[o]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=r[0]))}return t}var n={},a={app:0},i={app:0},s=[];function o(t){return l.p+"js/"+({about:"about",sentieri:"sentieri"}[t]||t)+"."+{about:"a4339be4",sentieri:"44ee6be8"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(t){var e=[],r={about:1,sentieri:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({about:"about",sentieri:"sentieri"}[t]||t)+"."+{about:"afe96eeb",sentieri:"47bbe1a3"}[t]+".css",i=l.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var c=s[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===i))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){c=f[o],u=c.getAttribute("data-href");if(u===n||u===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[t],d.parentNode.removeChild(d),r(s)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,r){n=i[t]=[e,r]}));e.push(n[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var f=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var r=i[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}i[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/vue-app/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0283":function(t,e,r){t.exports=r.p+"img/parco.cb1e22e5.png"},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},1976:function(t,e,r){t.exports=r.p+"img/logo_parco.820ae1ea.jpg"},"3a7b":function(t,e,r){"use strict";var n=r("ea02"),a=r.n(n);a.a},"452c":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("img",{staticClass:"logo",attrs:{src:r("1976")}}),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/tuttiSentieri"}},[t._v("Lista sentieri")])],1),n("router-view")],1)},i=[],s=(r("034f"),r("b0a0"),r("6964"),r("2877")),o={},l=Object(s["a"])(o,a,i,!1,null,null,null),c=l.exports,u=(r("d3b7"),r("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h2",[t._v(t._s(t.msg))]),n("div",{staticClass:"myoverlay mt-5 mb-5"},[n("b-container",{attrs:{fluid:"md"}},[n("b-row",{staticClass:"riga"},[n("b-col",{attrs:{cols:"4",sm:"4",md:"4",lg:"3"}},[n("b-link",{attrs:{href:"#"}},[n("div",[n("img",{staticClass:"img-fluid w-100",attrs:{alt:"Vue logo",src:r("5b55")}})])]),n("div",[n("span",{staticClass:"h4"},[t._v("Hiking")])])],1),n("b-col",{attrs:{cols:"4",sm:"4",md:"4",lg:"3"}},[n("b-link",{attrs:{href:"#"}},[n("div",[n("img",{staticClass:"img-fluid w-100",attrs:{alt:"Vue logo",src:r("a6f7")}})])]),n("div",[n("span",{staticClass:"h4"},[t._v("Running")])])],1),n("b-col",{attrs:{cols:"4",sm:"4",md:"4",lg:"3"}},[n("b-link",{attrs:{href:"#"}},[n("div",[n("img",{staticClass:"img-fluid w-100",attrs:{alt:"Vue logo",src:r("65db")}})])]),n("div",[n("span",{staticClass:"h4"},[t._v("Biking")])])],1),n("b-col",{attrs:{cols:"4",sm:"4",md:"4",lg:"3"}},[n("b-link",{attrs:{href:"#"}},[n("div",[n("img",{staticClass:"img-fluid w-100",attrs:{alt:"Vue logo",src:r("699e")}})])]),n("div",[n("span",{staticClass:"h4"},[t._v("Family")])])],1),n("b-col",{attrs:{cols:"4",sm:"4",md:"4",lg:"3"}},[n("b-link",{attrs:{href:"#"}},[n("div",[n("img",{staticClass:"img-fluid w-100",attrs:{alt:"Vue logo",src:r("b06a")}})])]),n("div",[n("span",{staticClass:"h4"},[t._v("Nordic")])])],1),n("b-col",{attrs:{cols:"4",sm:"4",md:"4",lg:"3"}},[n("b-link",{attrs:{href:"#"}},[n("div",[n("img",{staticClass:"img-fluid w-100",attrs:{alt:"Vue logo",src:r("0283")}})])]),n("div",[n("span",{staticClass:"h4"},[t._v("Il Parco")])])],1),n("b-col",{attrs:{cols:"4",sm:"4",md:"4",lg:"3"}},[n("b-link",{attrs:{href:"#"}},[n("div",[n("img",{staticClass:"img-fluid w-100",attrs:{alt:"Vue logo",src:r("e32a")}})])]),n("div",[n("span",{staticClass:"h4"},[t._v("Borghi")])])],1),n("b-col",{attrs:{cols:"4",sm:"4",md:"4",lg:"3"}},[n("b-link",{attrs:{href:"#"}},[n("div",[n("img",{staticClass:"img-fluid w-100",attrs:{alt:"Vue logo",src:r("83d7")}})])]),n("div",[n("span",{staticClass:"h4"},[t._v("La Card")])])],1)],1)],1)],1)])},d=[],p={name:"Home",props:{msg:String}},g=p,m=(r("3a7b"),Object(s["a"])(g,f,d,!1,null,"ac038b22",null)),b=m.exports;n["default"].use(u["a"]);var v=[{path:"/",name:"Home",component:b},{path:"/listaSentieri",name:"ListaSentieri",component:function(){return r.e("about").then(r.bind(null,"5750"))}},{path:"/tuttiSentieri",name:"TuttiSentieri",component:function(){return r.e("sentieri").then(r.bind(null,"afca"))}}],h=new u["a"]({routes:v}),y=h,C=r("5f5b"),w=r("b1e0");r("f9e3"),r("2dd8");n["default"].use(C["a"]),n["default"].use(w["a"]),n["default"].config.productionTip=!1,new n["default"]({router:y,render:function(t){return t(c)}}).$mount("#app")},"5b55":function(t,e,r){t.exports=r.p+"img/hiking.1627881b.png"},"65db":function(t,e,r){t.exports=r.p+"img/biking.6597e05c.png"},6964:function(t,e,r){"use strict";var n=r("7dff"),a=r.n(n);a.a},"699e":function(t,e,r){t.exports=r.p+"img/family.4e64026f.png"},"7dff":function(t,e,r){},"83d7":function(t,e,r){t.exports=r.p+"img/card.e6af88ca.png"},"85ec":function(t,e,r){},a6f7:function(t,e,r){t.exports=r.p+"img/running.792c57aa.png"},b06a:function(t,e,r){t.exports=r.p+"img/nordic.00b9cf42.png"},b0a0:function(t,e,r){"use strict";var n=r("452c"),a=r.n(n);a.a},e32a:function(t,e,r){t.exports=r.p+"img/borghi.9071cf82.png"},ea02:function(t,e,r){}});
//# sourceMappingURL=app.37e6ddbd.js.map