(function(e){function n(n){for(var o,a,c=n[0],s=n[1],f=n[2],p=0,l=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(n);while(l.length)l.shift()();return i.push.apply(i,f||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,c=1;c<t.length;c++){var s=t[c];0!==r[s]&&(o=!1)}o&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var o={},r={app:0},i=[];function a(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=o,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)a.d(t,o,function(n){return e[n]}.bind(null,o));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var f=0;f<c.length;f++)n(c[f]);var u=s;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var o=t("85ec"),r=t.n(o);r.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[e._v(" MONEY - NOTE "),t("br"),t("hr")])}],a={name:"app"},c=a,s=(t("034f"),t("2877")),f=Object(s["a"])(c,r,i,!1,null,null,null),u=f.exports,p=(t("54ba"),t("2f62")),l={},d={};o["a"].use(p["a"]);var b=new p["a"].Store({state:l,actions:d}),v=t("59ca"),h=(t("741f"),{apiKey:"AIzaSyCE9K0X8StAgnxypSg8QTeVs6Mvh7CWHfo",authDomain:"pwatest-c4ed0.firebaseapp.com",databaseURL:"https://pwatest-c4ed0.firebaseio.com",projectId:"pwatest-c4ed0",storageBucket:"pwatest-c4ed0.appspot.com",messagingSenderId:"218708421207",appId:"1:218708421207:web:bcd7ad0373d91bef0b1112",measurementId:"G-93VWW5Y93Q"});v["initializeApp"](h),"serviceWorker"in navigator&&(console.info("[info] 서비스워커를 지원합니다."),window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js",{updateViaCache:"all"}).then((function(e){if(console.info("[info] 서비스워커 등록이 완료되었습니다."),"Notification"in window){console.info("[info] 알림을 지원합니다. (현재상태:"+Notification.permission+")");var n=v["messaging"]();n.usePublicVapidKey("BBklpGnkbNHRHx2b9mcv46ezdtSL1CM6Bh7hvgLsu3ifAXbveaK7_HGPMeC1PAHhePggoTqyNybV5O08iF2hO8s"),"granted"!==Notification.permission?Notification.requestPermission().then((function(e){"granted"==e?(console.info("[info] 알림이 허용되었습니다."),n.getToken.then((function(e){e?(localStorage.setItem(btoa(escape("devcmoneyfcmkey")),accesstoken),console.info("[info] FCM TOKEN = "+e)):console.error("[errr] FCM TOKEN is Empty.")})).catch((function(e){console.error(e)}))):console.info("[info] 알림을 허용하지 않습니다")})):n.getToken.then((function(e){e?(localStorage.setItem(btoa(escape("devcmoneyfcmkey")),accesstoken),console.info("[info] FCM TOKEN = "+e)):console.error("[errr] FCM TOKEN is Empty.")})).catch((function(e){console.error(e)}))}})).catch((function(e){console.error(e)}))}))),o["a"].config.productionTip=!1,new o["a"]({store:b,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.ec90c0b1.js.map