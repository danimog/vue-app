(function(t){function e(e){for(var n,a,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,a=1;a<i.length;a++){var o=i[a];0!==r[o]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=i[0]))}return t}var n={},a={app:0},r={app:0},s=[];function o(t){return c.p+"js/"+({about:"about",sentieri:"sentieri"}[t]||t)+"."+{about:"addbb20b",sentieri:"baedf043"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.e=function(t){var e=[],i={sentieri:1};a[t]?e.push(a[t]):0!==a[t]&&i[t]&&e.push(a[t]=new Promise((function(e,i){for(var n="css/"+({about:"about",sentieri:"sentieri"}[t]||t)+"."+{about:"31d6cfe0",sentieri:"ee1d1ad8"}[t]+".css",r=c.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var l=s[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){l=f[o],u=l.getAttribute("data-href");if(u===n||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[t],d.parentNode.removeChild(d),i(s)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,i){n=r[t]=[e,i]}));e.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var i=r[t];if(0!==i){if(i){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,i[1](f)}r[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(i,n,function(e){return t[e]}.bind(null,n));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vue-app/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0283":function(t,e,i){t.exports=i.p+"img/parco.cb1e22e5.png"},"034f":function(t,e,i){"use strict";var n=i("85ec"),a=i.n(n);a.a},1976:function(t,e,i){t.exports=i.p+"img/logo_parco.820ae1ea.jpg"},2694:function(t,e,i){t.exports=i.p+"img/guida.8171cce8.png"},"452c":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("img",{staticClass:"logo",attrs:{src:i("1976")}}),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/listaSentieri"}},[t._v("Tutti i sentieri")]),t._v(" | "),n("router-link",{attrs:{to:"/tuttiSentieri"}},[t._v("Lista sentieri")]),t._v(" | "),n("router-link",{attrs:{to:"/sceltaPaesi"}},[t._v("Seleziona Paesi")])],1),n("router-view")],1)},r=[],s=(i("034f"),i("b0a0"),i("6964"),i("2877")),o={},c=Object(s["a"])(o,a,r,!1,null,null,null),l=c.exports,u=(i("d3b7"),i("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h2",[t._v(t._s(t.msg))]),n("div",{staticClass:"myoverlay mt-5 mb-5"},[n("b-container",{attrs:{fluid:"md"}},[n("b-row",{staticClass:"riga"},[n("b-col",{staticClass:"my-b-col",attrs:{cols:"4",sm:"4",md:"4",lg:"4"}},[n("b-link",{attrs:{href:"#"}},[n("div",[n("img",{staticClass:"img-fluid w-80",attrs:{alt:"hiking",src:i("5b55")}})])]),n("div",[n("span",{staticClass:"h4"},[t._v("Hiking")])])],1),n("b-col",{staticClass:"my-b-col",attrs:{cols:"4",sm:"4",md:"4",lg:"4"}},[n("b-link",{attrs:{href:"#"}},[n("div",[n("img",{staticClass:"img-fluid w-80",attrs:{alt:"Running",src:i("a6f7")}})])]),n("div",[n("span",{staticClass:"h4"},[t._v("Running")])])],1),n("b-col",{staticClass:"my-b-col",attrs:{cols:"4",sm:"4",md:"4",lg:"4"}},[n("b-link",{attrs:{href:"#"}},[n("div",[n("img",{staticClass:"img-fluid w-80",attrs:{alt:"Bicicletta",src:i("65db")}})])]),n("div",[n("span",{staticClass:"h4"},[t._v("Biking")])])],1),n("b-col",{staticClass:"my-b-col",attrs:{cols:"4",sm:"4",md:"4",lg:"4"}},[n("b-link",{attrs:{href:"#"}},[n("div",[n("img",{staticClass:"img-fluid w-80",attrs:{alt:"Famiglia",src:i("699e")}})])]),n("div",[n("span",{staticClass:"h4"},[t._v("Family")])])],1),n("b-col",{staticClass:"my-b-col",attrs:{cols:"4",sm:"4",md:"4",lg:"4"}},[n("b-link",{attrs:{href:"#"}},[n("div",[n("img",{staticClass:"img-fluid w-80",attrs:{alt:"Nordic",src:i("b06a")}})])]),n("div",[n("span",{staticClass:"h4"},[t._v("Nordic")])])],1),n("b-col",{staticClass:"my-b-col",attrs:{cols:"4",sm:"4",md:"4",lg:"4"}},[n("b-link",{attrs:{href:"#"}},[n("div",[n("img",{staticClass:"img-fluid w-80",attrs:{alt:"Parco",src:i("0283")}})])]),n("div",[n("span",{staticClass:"h4"},[t._v("Park")])])],1),n("b-col",{staticClass:"my-b-col",attrs:{cols:"4",sm:"4",md:"4",lg:"4"}},[n("b-link",{attrs:{href:"#"}},[n("div",[n("img",{staticClass:"img-fluid w-80",attrs:{alt:"Borghi",src:i("e32a")}})])]),n("div",[n("span",{staticClass:"h4"},[t._v("Villages")])])],1),n("b-col",{staticClass:"my-b-col",attrs:{cols:"4",sm:"4",md:"4",lg:"4"}},[n("b-link",{attrs:{href:"#"}},[n("div",[n("img",{staticClass:"img-fluid w-80",attrs:{alt:"card",src:i("83d7")}})])]),n("div",[n("span",{staticClass:"h4"},[t._v("Card")])])],1),n("b-col",{staticClass:"my-b-col",attrs:{cols:"4",sm:"4",md:"4",lg:"4"}},[n("b-link",{attrs:{href:"#"}},[n("div",[n("img",{staticClass:"img-fluid w-80",attrs:{alt:"Guida app",src:i("2694")}})])]),n("div",[n("span",{staticClass:"h4"},[t._v("Guide")])])],1)],1)],1)],1)])},d=[],p={name:"Home",props:{msg:String}},m=p,g=(i("ef88"),Object(s["a"])(m,f,d,!1,null,"077b0a4c",null)),b=g.exports;n["default"].use(u["a"]);var v=[{path:"/",name:"Home",component:b},{path:"/listaSentieri",name:"ListaSentieri",component:function(){return i.e("about").then(i.bind(null,"5750"))}},{path:"/tuttiSentieri",name:"TuttiSentieri",component:function(){return i.e("sentieri").then(i.bind(null,"afca"))}},{path:"/sceltaPaesi",name:"SceltaPaesi",component:function(){return i.e("sentieri").then(i.bind(null,"d276"))}}],h=new u["a"]({routes:v}),y=h,C=i("5f5b"),_=i("b1e0");i("f9e3"),i("2dd8");n["default"].use(C["a"]),n["default"].use(_["a"]),n["default"].config.productionTip=!1,new n["default"]({router:y,render:function(t){return t(l)}}).$mount("#app")},"5b55":function(t,e,i){t.exports=i.p+"img/hiking.1627881b.png"},"65db":function(t,e,i){t.exports=i.p+"img/biking.6597e05c.png"},6964:function(t,e,i){"use strict";var n=i("7dff"),a=i.n(n);a.a},"699e":function(t,e,i){t.exports=i.p+"img/family.4e64026f.png"},"7dff":function(t,e,i){},"83d7":function(t,e,i){t.exports=i.p+"img/card.e6af88ca.png"},"85ec":function(t,e,i){},a6f7:function(t,e,i){t.exports=i.p+"img/running.792c57aa.png"},b06a:function(t,e,i){t.exports=i.p+"img/nordic.00b9cf42.png"},b0a0:function(t,e,i){"use strict";var n=i("452c"),a=i.n(n);a.a},e32a:function(t,e,i){t.exports=i.p+"img/borghi.9071cf82.png"},e559:function(t,e,i){},ef88:function(t,e,i){"use strict";var n=i("e559"),a=i.n(n);a.a}});
//# sourceMappingURL=app.77d4298c.js.map