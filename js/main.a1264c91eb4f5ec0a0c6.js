(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{e6Wu:function(t,e,r){"use strict";r.r(e);r("hZTp");function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(o.push(n.value),!e||o.length!==e);a=!0);}catch(t){s=!0,i=t}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */a=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof d?e:d,o=Object.create(i.prototype),a=new x(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return O()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=$(a,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),o}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function d(){}function v(){}function y(){}var p={};u(p,o,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(S([])));m&&m!==e&&r.call(m,o)&&(p=m);var b=y.prototype=d.prototype=Object.create(p);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){var i;this._invoke=function(o,a){function s(){return new e((function(i,s){!function i(o,a,s,c){var u=h(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==n(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){i("next",t,s,c)}),(function(t){i("throw",t,s,c)})):e.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return i("throw",t,s,c)}))}c(u.arg)}(o,a,i,s)}))}return i=i?i.then(s,s):s()}}function $(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,$(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return v.prototype=y,u(b,"constructor",y),u(y,"constructor",v),v.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(k.prototype),u(k.prototype,s,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new k(l(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),u(b,c,"Generator"),u(b,o,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function s(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,i)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var l=function(){function t(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"5.0.29";c(this,t),this.config={version:r,storeKey:"VB_PAGE",prefix:"page",pages:13},this.state={data:{},isSearch:!1,isBusy:!1,page:0,pos:{wheel:{pos:0,dir:!1},initial:void 0,current:{clientX:void 0,clientY:void 0}}},this.fetchData().then((function(t){return e.setData(t)}))}var e,r,n,o,l;return e=t,(r=[{key:"setData",value:function(t){var e=this;this.state.data=t;for(var r=0,n=Object.values(this.state.data);r<n.length;r++)n[r].map((function(t){var r=document.createElement("option");r.value=t,r.innerText=t,e.$data.appendChild(r)}))}},{key:"fetchData",value:(o=a().mark((function t(){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={method:"GET",mode:"same-origin",cache:"no-cache",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer"},t.next=3,fetch("/data.json",e);case 3:return r=t.sent,t.abrupt("return",r.json());case 5:case"end":return t.stop()}}),t)})),l=function(){var t=this,e=arguments;return new Promise((function(r,n){var i=o.apply(t,e);function a(t){s(i,r,n,a,c,"next",t)}function c(t){s(i,r,n,a,c,"throw",t)}a(void 0)}))},function(){return l.apply(this,arguments)})},{key:"$input",get:function(){return document.querySelector("input")}},{key:"$form",get:function(){return document.querySelector("form")}},{key:"$overlay",get:function(){return document.querySelector(".overlay")}},{key:"$figure",get:function(){return document.querySelector("figure")}},{key:"$figcaption",get:function(){return document.querySelector("figcaption")}},{key:"$img",get:function(){return document.querySelector("img")}},{key:"$main",get:function(){return document.querySelector("main")}},{key:"$close",get:function(){return document.querySelector(".close")}},{key:"$submit",get:function(){return document.querySelector(".submit")}},{key:"$next",get:function(){return document.querySelector(".next")}},{key:"$prev",get:function(){return document.querySelector(".prev")}},{key:"$search",get:function(){return document.querySelector(".search")}},{key:"$zoom",get:function(){return document.querySelector(".zoom")}},{key:"$share",get:function(){return document.querySelector(".share")}},{key:"$header",get:function(){return document.querySelector("header")}},{key:"$footer",get:function(){return document.querySelector("footer")}},{key:"$data",get:function(){return document.getElementById("data")}},{key:"getId",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return"".concat(this.config.prefix).concat(t)}},{key:"getSrc",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return"/public/img/".concat(this.getId(t),".jpg")}},{key:"startPage",get:function(){var t=Number(localStorage.getItem(this.config.storeKey));return isNaN(t)&&(t=0),t}},{key:"init",value:function(){this.$footer.innerText="v".concat(this.config.version),this.goTo(this.startPage),this.registerEventListeners(),this.resetForm()}},{key:"next",value:function(){this.state.page!==this.config.pages-1&&this.goTo(this.state.page+1)}},{key:"prev",value:function(){0!==this.state.page&&this.goTo(this.state.page-1)}},{key:"toggleOverlay",value:function(t){var e=t.target,r=void 0===e?"":e;if(r===this.$input||r===this.$close||r===this.$submit)return t.preventDefault();this.resetForm(),this.state.isSearch=!this.state.isSearch,this.$overlay.style.display=this.state.isSearch?"flex":"none",this.state.isSearch?this.$input.focus():this.$input.blur()}},{key:"resetForm",value:function(){this.$form.reset(),this.setInputError(!1)}},{key:"toggleButton",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e?"inline-block":"none";t.style.display=r}},{key:"goTo",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;switch(localStorage.setItem(this.config.storeKey,t),this.state.page=t,this.$img.setAttribute("src",this.getSrc(t)),this.$figcaption.innerText="".concat(t+1),this.toggleButton(this.$next,!0),this.toggleButton(this.$prev,!0),this.state.page){case 0:this.toggleButton(this.$prev,!1);break;case this.config.pages-1:this.toggleButton(this.$next,!1)}}},{key:"registerEventListeners",value:function(){this.$next.addEventListener("click",this.next.bind(this)),this.$prev.addEventListener("click",this.prev.bind(this)),this.$search.addEventListener("click",this.toggleOverlay.bind(this)),this.$overlay.addEventListener("click",this.toggleOverlay.bind(this),!1),this.$close.addEventListener("click",this.resetForm.bind(this)),this.$zoom.addEventListener("click",this.zoom.bind(this)),this.$main.addEventListener("touchstart",this.onStartTouch.bind(this),!1),this.$main.addEventListener("touchmove",this.onMoveTouch.bind(this),!1),this.$main.addEventListener("wheel",this.onWheel.bind(this)),this.$input.addEventListener("input",this.onInput.bind(this)),this.$form.addEventListener("submit",this.onSubmit.bind(this)),"share"in navigator&&(this.$share.style.display="inline-block",this.$share.addEventListener("click",this.share.bind(this))),window.matchMedia("(display-mode: standalone)").matches&&document.addEventListener("visibilitychange",this.onVisibilityChange.bind(this)),window.addEventListener("error",this.onError.bind(this))}},{key:"onError",value:function(t,e,r,n,i){console.error("Error raised: ".concat(t," at ").concat(e,"@").concat(r,":").concat(n),i)}},{key:"share",value:function(t){var e={title:"Vorpal Bunny 餐酒館 菜單",text:"臺北市中山區林森北路85巷49號 02-2567-0015",url:location.href};return navigator.share(e).then((function(t){return console.log(t)})).catch((function(t){return console.error(t)}))}},{key:"onVisibilityChange",value:function(t){document.visibilityState}},{key:"onInput",value:function(t){var e=this.$input.value,r=void 0===e?"":e;this.$input.setCustomValidity(""),Array.from(this.$data.childNodes).find((function(t){return t.nodeValue===r||t.value===r}))&&this.onSubmit(new Event("autocomplete"))}},{key:"setInputError",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=t?"Oops! not found...":"",r=t?"red":"white",n="url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='".concat(r,"'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>\")");this.$input.setCustomValidity(e),this.$form.style.setProperty("--validate-color",r),this.$form.style.setProperty("--close-icon",n)}},{key:"findByWord",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e=String(e).toLowerCase();for(var r=0,n=Object.entries(this.state.data);r<n.length;r++){var o=i(n[r],2),a=o[0],s=void 0===a?"":a,c=o[1],u=void 0===c?[]:c;if(u.includes(e)){t=Number(s);break}if(u.some((function(t){return t.includes(e)}))){t=Number(s);break}}return t}},{key:"onSubmit",value:function(t){t.preventDefault();var e=this.$input.value,r=void 0===e?"":e;if(0!==r.length){var n=this.findByWord(r),i="number"!=typeof n;this.setInputError(i),i||(this.toggleOverlay(t),this.goTo(n))}else alert("value is empty!")}},{key:"zoom",value:function(){var t=1,e="".concat("fa-search-","plus"),r="".concat("fa-search-","minus"),n=this.$zoom.firstChild;switch(Array.from(n.classList).find((function(t){return t.includes("fa-search-")}))){case e:t=1.2,n.classList.replace(e,r);break;default:case r:n.classList.replace(r,e)}this.$img.style.transform="scale(".concat(t,")")}},{key:"computePos",value:function(t,e){return{clientX:t.clientX-e.clientX,clientY:t.clientY-e.clientY}}},{key:"onMoveTouch",value:function(t){if(this.state.pos.initial){var e=i(t.touches,1)[0];this.state.pos.current=e;var r=this.state.pos,n=r.initial,o=r.current,a=this.computePos(n,o),s=a.clientX,c=a.clientY;Math.abs(s)>Math.abs(c)||Math.abs(c)<5||(c>0?this.next():this.prev(),this.state.pos.initial=void 0,t.preventDefault())}}},{key:"onStartTouch",value:function(t){var e=i(t.touches,1)[0];this.state.pos.initial=e}},{key:"onWheel",value:function(t){var e=this,r=t.deltaY,n=void 0===r?0:r;this.state.pos.wheel.pos=n,this.state.pos.wheel.dir=n>0,this.state.isBusy||(this.state.isBusy=!0,window.requestAnimationFrame((function(){var t=e.state.pos.wheel,r=t.pos,n=t.dir;Math.abs(r)>0&&(n?e.next():e.prev()),window.setTimeout((function(){return e.state.isBusy=!1}),1e3)})))}}])&&u(e.prototype,r),n&&u(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),h=r("n5Vj");if("serviceWorker"in navigator){var f=r.n(h).a.register();f&&f.then((function(t){return console.log(t)}))}var d=new l;document.addEventListener("DOMContentLoaded",(function(){return d.init()}))},hZTp:function(t,e,r){}},[["e6Wu",1,2]]]);