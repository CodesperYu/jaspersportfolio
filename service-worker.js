"use strict";var precacheConfig=[["/jaspersportfolio/index.html","dc4da39dac0ae02bb9103b251e23b7cb"],["/jaspersportfolio/static/css/main.93b9399b.css","7a120e9210eda8f5817d6a0805e1dd7e"],["/jaspersportfolio/static/js/main.44bd998e.js","9c539de33a90ad29997a1d33f65d896c"],["/jaspersportfolio/static/media/GitHub.3e54ed15.png","3e54ed15b9cd877c5223f5ecf64579df"],["/jaspersportfolio/static/media/HTML5.664a8c00.png","664a8c00ef526bf33edf55808601d461"],["/jaspersportfolio/static/media/JYLarge.749b0c63.png","749b0c63bbc7e4ac89ea50f9e0498dae"],["/jaspersportfolio/static/media/Jest.c5b8c7d2.png","c5b8c7d229e40297784fe502b5b22054"],["/jaspersportfolio/static/media/Juicebox.985c5b08.png","985c5b08e881b7db4479154ee739edd8"],["/jaspersportfolio/static/media/MySql.2a2afeef.png","2a2afeefe5506b260ac9748de76eb648"],["/jaspersportfolio/static/media/NodeJS.85458a67.png","85458a6717bed07d7db5146928d3cdd0"],["/jaspersportfolio/static/media/OmniChatBlack.3fc967f7.png","3fc967f7ba4df037f97f530c7c7641a0"],["/jaspersportfolio/static/media/React.7c0fdc49.png","7c0fdc490914ad5e54763db4ef955066"],["/jaspersportfolio/static/media/Redux.b882387a.png","b882387a5a2b494c2c200e66d63fa8db"],["/jaspersportfolio/static/media/Sass.73e24896.png","73e24896289a49f3365faf66faec2f65"],["/jaspersportfolio/static/media/Sketch.94ed2aab.png","94ed2aab90612ce035578613dd521b83"],["/jaspersportfolio/static/media/ToonFlix.cc53feb0.png","cc53feb0d8880b95e05aac664cb033db"],["/jaspersportfolio/static/media/bridge.a528260e.jpg","a528260e1057307ac61f0c35bf98c767"],["/jaspersportfolio/static/media/mongodb.e5eee315.png","e5eee315a17de0d7f56117077eb71fa9"],["/jaspersportfolio/static/media/pp.165adf1c.jpg","165adf1c4a151d666fc73889d5df61f9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/jaspersportfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});