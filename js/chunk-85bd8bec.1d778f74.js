(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85bd8bec"],{"10e8":function(t,e,n){"use strict";n.r(e),n.d(e,"ion_route",(function(){return u})),n.d(e,"ion_route_redirect",(function(){return c})),n.d(e,"ion_router",(function(){return M})),n.d(e,"ion_router_link",(function(){return q}));var r=n("9ab4"),o=n("4f09"),i=(n("b6d2"),n("c123")),a=n("264c"),u=function(){function t(t){Object(o["l"])(this,t),this.url="",this.ionRouteDataChanged=Object(o["d"])(this,"ionRouteDataChanged",7)}return t.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)},t.prototype.onComponentProps=function(t,e){if(t!==e){var n=t?Object.keys(t):[],r=e?Object.keys(e):[];if(n.length===r.length)for(var o=0,i=n;o<i.length;o++){var a=i[o];if(t[a]!==e[a])return void this.onUpdate(t)}else this.onUpdate(t)}},t.prototype.connectedCallback=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(t,"watchers",{get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}},enumerable:!0,configurable:!0}),t}(),c=function(){function t(t){Object(o["l"])(this,t),this.ionRouteRedirectChanged=Object(o["d"])(this,"ionRouteRedirectChanged",7)}return t.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()},t.prototype.connectedCallback=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(t,"watchers",{get:function(){return{from:["propDidChange"],to:["propDidChange"]}},enumerable:!0,configurable:!0}),t}(),s="root",h="forward",l="back",f=function(t){var e=t.filter((function(t){return t.length>0})).join("/");return"/"+e},d=function(t){for(var e=[],n=0,r=t;n<r.length;n++)for(var o=r[n],i=0,a=o.path;i<a.length;i++){var u=a[i];if(":"===u[0]){var c=o.params&&o.params[u.slice(1)];if(!c)return null;e.push(c)}else""!==u&&e.push(u)}return e},p=function(t,e,n,o,i,a){var u=f(Object(r["__spreadArrays"])(b(e),o));n&&(u="#"+u),i===h?t.pushState(a,"",u):t.replaceState(a,"",u)},v=function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(var n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)},g=function(t,e,n){var r=t.pathname;if(n){var o=t.hash;r="#"===o[0]?o.slice(1):""}var i=b(e),a=b(r);return v(i,a)},b=function(t){if(null==t)return[""];var e=t.split("/").map((function(t){return t.trim()})).filter((function(t){return t.length>0}));return 0===e.length?[""]:e},m=function(t){console.group("[ion-core] ROUTES["+t.length+"]");for(var e=function(t){var e=[];t.forEach((function(t){return e.push.apply(e,t.path)}));var n=t.map((function(t){return t.id}));console.debug("%c "+f(e),"font-weight: bold; padding-left: 20px","=>\t","("+n.join(", ")+")")},n=0,r=t;n<r.length;n++){var o=r[n];e(o)}console.groupEnd()},w=function(t){console.group("[ion-core] REDIRECTS["+t.length+"]");for(var e=0,n=t;e<n.length;e++){var r=n[e];r.to&&console.debug("FROM: ","$c "+f(r.from),"font-weight: bold"," TO: ","$c "+f(r.to),"font-weight: bold")}console.groupEnd()},y=function(t,e,n,o,i){return void 0===i&&(i=!1),Object(r["__awaiter"])(void 0,void 0,void 0,(function(){var a,u,c,h;return Object(r["__generator"])(this,(function(r){switch(r.label){case 0:return r.trys.push([0,6,,7]),a=_(t),o>=e.length||!a?[2,i]:[4,a.componentOnReady()];case 1:return r.sent(),u=e[o],[4,a.setRouteId(u.id,u.params,n)];case 2:return c=r.sent(),c.changed&&(n=s,i=!0),[4,y(c.element,e,n,o+1,i)];case 3:return i=r.sent(),c.markVisible?[4,c.markVisible()]:[3,5];case 4:r.sent(),r.label=5;case 5:return[2,i];case 6:return h=r.sent(),console.error(h),[2,!1];case 7:return[2]}}))}))},O=function(t){return Object(r["__awaiter"])(void 0,void 0,void 0,(function(){var e,n,o,i;return Object(r["__generator"])(this,(function(r){switch(r.label){case 0:e=[],o=t,r.label=1;case 1:return n=_(o),n?[4,n.getRouteId()]:[3,3];case 2:return i=r.sent(),i?(o=i.element,i.element=void 0,e.push(i),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:e,outlet:n}]}}))}))},j=function(){return _(document.body)?Promise.resolve():new Promise((function(t){window.addEventListener("ionNavWillLoad",t,{once:!0})}))},R=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",_=function(t){if(t){if(t.matches(R))return t;var e=t.querySelector(R);return e||void 0}},C=function(t,e){var n=e.from,r=e.to;if(void 0===r)return!1;if(n.length>t.length)return!1;for(var o=0;o<n.length;o++){var i=n[o];if("*"===i)return!0;if(i!==t[o])return!1}return n.length===t.length},P=function(t,e){return e.find((function(e){return C(t,e)}))},k=function(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n;r++)if(t[r].toLowerCase()!==e[r].id)break;return r},S=function(t,e){for(var n,r=new L(t),o=!1,i=0;i<e.length;i++){var a=e[i].path;if(""===a[0])o=!0;else{for(var u=0,c=a;u<c.length;u++){var s=c[u],h=r.next();if(":"===s[0]){if(""===h)return null;n=n||[];var l=n[i]||(n[i]={});l[s.slice(1)]=h}else if(h!==s)return null}o=!1}}var f=!o||o===(""===r.next());return f?n?e.map((function(t,e){return{id:t.id,path:t.path,params:D(t.params,n[e])}})):e:null},D=function(t,e){return!t&&e?e:t&&!e?t:t&&e?Object.assign(Object.assign({},t),e):void 0},E=function(t,e){for(var n=null,r=0,o=t.map((function(t){return t.id})),i=0,a=e;i<a.length;i++){var u=a[i],c=k(o,u);c>r&&(n=u,r=c)}return n?n.map((function(e,n){return{id:e.id,path:e.path,params:D(e.params,t[n]&&t[n].params)}})):null},N=function(t,e){for(var n=null,r=0,o=0,i=e;o<i.length;o++){var a=i[o],u=S(t,a);if(null!==u){var c=U(u);c>r&&(r=c,n=u)}}return n},U=function(t){for(var e=1,n=1,r=0,o=t;r<o.length;r++)for(var i=o[r],a=0,u=i.path;a<u.length;a++){var c=u[a];":"===c[0]?e+=Math.pow(1,n):""!==c&&(e+=Math.pow(2,n)),n++}return e},L=function(){function t(t){this.path=t.slice()}return t.prototype.next=function(){return this.path.length>0?this.path.shift():""},t}(),A=function(t){return Array.from(t.children).filter((function(t){return"ION-ROUTE-REDIRECT"===t.tagName})).map((function(t){var e=x(t,"to");return{from:b(x(t,"from")),to:null==e?void 0:b(e)}}))},T=function(t){return I(W(t))},W=function(t,e){return void 0===e&&(e=t),Array.from(e.children).filter((function(t){return"ION-ROUTE"===t.tagName&&t.component})).map((function(e){var n=x(e,"component");if(null==n)throw new Error("component missing in ion-route");return{path:b(x(e,"url")),id:n.toLowerCase(),params:e.componentProps,children:W(t,e)}}))},x=function(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null},I=function(t){for(var e=[],n=0,r=t;n<r.length;n++){var o=r[n];H([],e,o)}return e},H=function(t,e,n){var r=t.slice();if(r.push({id:n.id,path:n.path,params:n.params}),0!==n.children.length)for(var o=0,i=n.children;o<i.length;o++){var a=i[o];H(r,e,a)}else e.push(r)},M=function(){function t(t){Object(o["l"])(this,t),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0,this.ionRouteWillChange=Object(o["d"])(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(o["d"])(this,"ionRouteDidChange",7)}return t.prototype.componentWillLoad=function(){return Object(r["__awaiter"])(this,void 0,void 0,(function(){return Object(r["__generator"])(this,(function(t){switch(t.label){case 0:return console.debug("[ion-router] router will load"),[4,j()];case 1:return t.sent(),console.debug("[ion-router] found nav"),[4,this.onRoutesChanged()];case 2:return t.sent(),[2]}}))}))},t.prototype.componentDidLoad=function(){window.addEventListener("ionRouteRedirectChanged",Object(i["e"])(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(i["e"])(this.onRoutesChanged.bind(this),100))},t.prototype.onPopState=function(){var t=this.historyDirection(),e=this.getPath();return console.debug("[ion-router] URL changed -> update nav",e,t),this.writeNavStateRoot(e,t)},t.prototype.onBackButton=function(t){var e=this;t.detail.register(0,(function(){return e.back()}))},t.prototype.push=function(t,e){void 0===e&&(e="forward"),t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,e);var n=b(t);return this.setPath(n,e),this.writeNavStateRoot(n,e)},t.prototype.back=function(){return window.history.back(),Promise.resolve(this.waitPromise)},t.prototype.printDebug=function(){return Object(r["__awaiter"])(this,void 0,void 0,(function(){return Object(r["__generator"])(this,(function(t){return console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),m(T(this.el)),w(A(this.el)),[2]}))}))},t.prototype.navChanged=function(t){return Object(r["__awaiter"])(this,void 0,void 0,(function(){var e,n,o,i,a,u;return Object(r["__generator"])(this,(function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,O(window.document.body)];case 1:return e=r.sent(),n=e.ids,o=e.outlet,i=T(this.el),a=E(n,i),a?(u=d(a),u?(console.debug("[ion-router] nav changed -> update URL",n,u),this.setPath(u,t),[4,this.safeWriteNavState(o,a,s,u,null,n.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1])):(console.warn("[ion-router] no matching URL for ",n.map((function(t){return t.id}))),[2,!1]);case 2:return r.sent(),[2,!0]}}))}))},t.prototype.onRedirectChanged=function(){var t=this.getPath();t&&P(t,A(this.el))&&this.writeNavStateRoot(t,s)},t.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),s)},t.prototype.historyDirection=function(){var t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));var e=t.history.state,n=this.lastState;return this.lastState=e,e>n?h:e<n?l:s},t.prototype.writeNavStateRoot=function(t,e){return Object(r["__awaiter"])(this,void 0,void 0,(function(){var n,o,i,a,u;return Object(r["__generator"])(this,(function(r){return t?(n=A(this.el),o=P(t,n),i=null,o&&(this.setPath(o.to,e),i=o.from,t=o.to),a=T(this.el),u=N(t,a),u?[2,this.safeWriteNavState(document.body,u,e,t,i)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])}))}))},t.prototype.safeWriteNavState=function(t,e,n,o,i,a){return void 0===a&&(a=0),Object(r["__awaiter"])(this,void 0,void 0,(function(){var u,c,s;return Object(r["__generator"])(this,(function(r){switch(r.label){case 0:return[4,this.lock()];case 1:u=r.sent(),c=!1,r.label=2;case 2:return r.trys.push([2,4,,5]),[4,this.writeNavState(t,e,n,o,i,a)];case 3:return c=r.sent(),[3,5];case 4:return s=r.sent(),console.error(s),[3,5];case 5:return u(),[2,c]}}))}))},t.prototype.lock=function(){return Object(r["__awaiter"])(this,void 0,void 0,(function(){var t,e;return Object(r["__generator"])(this,(function(n){switch(n.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise((function(t){return e=t})),void 0===t?[3,2]:[4,t];case 1:n.sent(),n.label=2;case 2:return[2,e]}}))}))},t.prototype.writeNavState=function(t,e,n,o,i,a){return void 0===a&&(a=0),Object(r["__awaiter"])(this,void 0,void 0,(function(){var u,c;return Object(r["__generator"])(this,(function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,u=this.routeChangeEvent(o,i),u&&this.ionRouteWillChange.emit(u),[4,y(t,e,n,a)]);case 1:return c=r.sent(),this.busy=!1,c&&console.debug("[ion-router] route changed",o),u&&this.ionRouteDidChange.emit(u),[2,c]}}))}))},t.prototype.setPath=function(t,e){this.state++,p(window.history,this.root,this.useHash,t,e,this.state)},t.prototype.getPath=function(){return g(window.location,this.root,this.useHash)},t.prototype.routeChangeEvent=function(t,e){var n=this.previousPath,r=f(t);if(this.previousPath=r,r===n)return null;var o=e?f(e):null;return{from:n,redirectedFrom:o,to:r}},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o["f"])(this)},enumerable:!0,configurable:!0}),t}(),q=function(){function t(t){var e=this;Object(o["l"])(this,t),this.routerDirection="forward",this.onClick=function(t){Object(a["d"])(e.href,t,e.routerDirection)}}return t.prototype.render=function(){var t,e=Object(o["e"])(this),n={href:this.href,rel:this.rel,target:this.target};return Object(o["i"])(o["a"],{onClick:this.onClick,class:Object.assign(Object.assign({},Object(a["a"])(this.color)),(t={},t[e]=!0,t["ion-activatable"]=!0,t))},Object(o["i"])("a",Object.assign({},n),Object(o["i"])("slot",null)))},Object.defineProperty(t,"style",{get:function(){return":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},enumerable:!0,configurable:!0}),t}()},"264c":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return s}));var r=n("9ab4"),o=function(t,e){return null!==e.closest(t)},i=function(t){var e;return"string"===typeof t&&t.length>0?(e={"ion-color":!0},e["ion-color-"+t]=!0,e):void 0},a=function(t){if(void 0!==t){var e=Array.isArray(t)?t:t.split(" ");return e.filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t}))}return[]},u=function(t){var e={};return a(t).forEach((function(t){return e[t]=!0})),e},c=/^[a-z][a-z0-9+\-.]*:/,s=function(t,e,n){return Object(r["__awaiter"])(void 0,void 0,void 0,(function(){var o;return Object(r["__generator"])(this,(function(r){return null!=t&&"#"!==t[0]&&!c.test(t)&&(o=document.querySelector("ion-router"),o)?(null!=e&&e.preventDefault(),[2,o.push(t,n)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=chunk-85bd8bec.1d778f74.js.map