var serviceWorkerOption = {
  "assets": [
    "/css/0.css",
    "/js/main.ee9a74e73e5a18d72d79.js",
    "/js/runtime.ee9a74e73e5a18d72d79.js",
    "/js/vendor.ee9a74e73e5a18d72d79.js",
    "/public/android-chrome-192x192.png",
    "/public/browserconfig.xml",
    "/public/favicon-16x16.png",
    "/public/favicon.ico",
    "/public/apple-touch-icon.png",
    "/public/favicon-32x32.png",
    "/public/android-chrome-512x512.png",
    "/public/img/page1.jpg",
    "/public/img/page0.jpg",
    "/public/img/page10.jpg",
    "/public/img/page11.jpg",
    "/public/img/page12.jpg",
    "/public/img/page13.jpg",
    "/public/img/page2.jpg",
    "/public/img/page3.jpg",
    "/public/img/page4.jpg",
    "/public/img/page5.jpg",
    "/public/img/page6.jpg",
    "/public/img/page7.jpg",
    "/public/img/page9.jpg",
    "/public/img/page8.jpg",
    "/public/manifest.json",
    "/public/mstile-150x150.png",
    "/public/safari-pinned-tab.svg",
    "/public/ipad_splash.png",
    "/public/ipadpro2_splash.png",
    "/public/iphone5_splash.png",
    "/public/ipadpro1_splash.png",
    "/public/ipadpro3_splash.png",
    "/public/iphone6_splash.png",
    "/public/iphoneplus_splash.png",
    "/public/iphonex_splash.png",
    "/public/iphonexr_splash.png",
    "/public/iphonexsmax_splash.png"
  ]
};
        
        !function(e){var n={};function i(p){if(n[p])return n[p].exports;var c=n[p]={i:p,l:!1,exports:{}};return e[p].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=e,i.c=n,i.d=function(e,n,p){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:p})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var p=Object.create(null);if(i.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(p,c,function(n){return e[n]}.bind(null,c));return p},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i(i.s="JJ5d")}({JJ5d:function(e,n){var i="".concat("VB_").concat("1.0.0"),p=["/public/android-chrome-192x192.png","/public/apple-touch-icon.png","/public/browserconfig.xml","/public/favicon-16x16.png","/public/favicon-32x32.png","/public/favicon.ico","/public/android-chrome-512x512.png","/public/img/page0.jpg","/public/img/page1.jpg","/public/img/page10.jpg","/public/img/page11.jpg","/public/img/page13.jpg","/public/img/page2.jpg","/public/img/page3.jpg","/public/img/page12.jpg","/public/img/page4.jpg","/public/img/page7.jpg","/public/img/page6.jpg","/public/img/page5.jpg","/public/img/page9.jpg","/public/img/page8.jpg","/public/manifest.json","/public/safari-pinned-tab.svg","/public/mstile-150x150.png","/public/ipad_splash.png","/public/ipadpro2_splash.png","/public/iphone6_splash.png","/public/iphone5_splash.png","/public/ipadpro1_splash.png","/public/ipadpro3_splash.png","/public/iphoneplus_splash.png","/public/iphonex_splash.png","/public/iphonexr_splash.png","/public/iphonexsmax_splash.png"];self.addEventListener("fetch",(function(e){console.log("fetch request : ".concat(e.request.url)),e.respondWith(caches.match(e.request).then((function(n){return n?(console.log("responding with cache : ".concat(e.request.url)),n):(console.log("file is not cached, fetching : ".concat(e.request.url)),fetch(e.request))})))})),self.addEventListener("install",(function(e){e.waitUntil(caches.open(i).then((function(e){return console.log("installing cache : ".concat(i)),e.addAll(p)})))})),self.addEventListener("activate",(function(e){e.waitUntil(caches.keys().then((function(e){var n=e.filter((function(e){return e.indexOf("VB_")}));return n.push(i),Promise.all(e.map((function(i,p){if(-1===n.indexOf(i))return console.log("deleting cache : ".concat(e[p])),caches.delete(e[p])})))})))}))}});