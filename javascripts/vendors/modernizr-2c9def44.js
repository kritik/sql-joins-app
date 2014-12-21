window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function i(e,t){return r(k.join(e+";")+(t||""))}function o(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var r in e){var i=e[r];if(!a(i,"-")&&b[i]!==n)return"pfx"==t?i:!0}return!1}function l(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return r===!1?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function u(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+T.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?s(i,t):(i=(e+" "+E.join(r+" ")+r).split(" "),l(i,t,n))}function c(){h.input=function(n){for(var r=0,i=n.length;i>r;r++)j[n[r]]=n[r]in x;return j.list&&(j.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),j}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(e){for(var r,i,o,a=0,s=e.length;s>a;a++)x.setAttribute("type",i=e[a]),r="text"!==x.type,r&&(x.value=w,x.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&x.style.WebkitAppearance!==n?(m.appendChild(x),o=t.defaultView,r=o.getComputedStyle&&"textfield"!==o.getComputedStyle(x,null).WebkitAppearance&&0!==x.offsetHeight,m.removeChild(x)):/^(search|tel)$/.test(i)||(r=/^(url|email)$/.test(i)?x.checkValidity&&x.checkValidity()===!1:x.value!=w)),A[e[a]]=!!r;return A}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var f,d,p="2.8.3",h={},g=!0,m=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,x=t.createElement("input"),w=":)",C={}.toString,k=" -webkit- -moz- -o- -ms- ".split(" "),_="Webkit Moz O ms",T=_.split(" "),E=_.toLowerCase().split(" "),S={svg:"http://www.w3.org/2000/svg"},N={},A={},j={},L=[],M=L.slice,F=function(e,n,r,i){var o,a,s,l,u=t.createElement("div"),c=t.body,f=c||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=i?i[r]:v+(r+1),u.appendChild(s);return o=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),u.id=v,(c?u:f).innerHTML+=o,f.appendChild(u),c||(f.style.background="",f.style.overflow="hidden",l=m.style.overflow,m.style.overflow="hidden",m.appendChild(f)),a=n(u,e),c?u.parentNode.removeChild(u):(f.parentNode.removeChild(f),m.style.overflow=l),!!a},D=function(){function e(e,i){i=i||t.createElement(r[e]||"div"),e="on"+e;var a=e in i;return a||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),a=o(i[e],"function"),o(i[e],"undefined")||(i[e]=n),i.removeAttribute(e))),i=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),q={}.hasOwnProperty;d=o(q,"undefined")||o(q.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return q.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=M.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var o=new i,a=t.apply(o,n.concat(M.call(arguments)));return Object(a)===a?a:o}return t.apply(e,n.concat(M.call(arguments)))};return r}),N.flexbox=function(){return u("flexWrap")},N.flexboxlegacy=function(){return u("boxDirection")},N.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},N.canvastext=function(){return!!h.canvas&&!!o(t.createElement("canvas").getContext("2d").fillText,"function")},N.webgl=function(){return!!e.WebGLRenderingContext},N.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:F(["@media (",k.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},N.geolocation=function(){return"geolocation"in navigator},N.postmessage=function(){return!!e.postMessage},N.websqldatabase=function(){return!!e.openDatabase},N.indexedDB=function(){return!!u("indexedDB",e)},N.hashchange=function(){return D("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},N.history=function(){return!!e.history&&!!history.pushState},N.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},N.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},N.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(b.backgroundColor,"rgba")},N.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(b.backgroundColor,"rgba")||a(b.backgroundColor,"hsla")},N.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},N.backgroundsize=function(){return u("backgroundSize")},N.borderimage=function(){return u("borderImage")},N.borderradius=function(){return u("borderRadius")},N.boxshadow=function(){return u("boxShadow")},N.textshadow=function(){return""===t.createElement("div").style.textShadow},N.opacity=function(){return i("opacity:.55"),/^0.55$/.test(b.opacity)},N.cssanimations=function(){return u("animationName")},N.csscolumns=function(){return u("columnCount")},N.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+k.join(n+e)).slice(0,-e.length)),a(b.backgroundImage,"gradient")},N.cssreflections=function(){return u("boxReflect")},N.csstransforms=function(){return!!u("transform")},N.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in m.style&&F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},N.csstransitions=function(){return u("transition")},N.fontface=function(){var e;return F('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=t.getElementById("smodernizr"),o=i.sheet||i.styleSheet,a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},N.generatedcontent=function(){var e;return F(["#",v,"{font:0/0 a}#",v,':after{content:"',w,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},N.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},N.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},N.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},N.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},N.webworkers=function(){return!!e.Worker},N.applicationcache=function(){return!!e.applicationCache},N.svg=function(){return!!t.createElementNS&&!!t.createElementNS(S.svg,"svg").createSVGRect},N.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==S.svg},N.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(C.call(t.createElementNS(S.svg,"animate")))},N.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(C.call(t.createElementNS(S.svg,"clipPath")))};for(var B in N)d(N,B)&&(f=B.toLowerCase(),h[f]=N[B](),L.push((h[f]?"":"no-")+f));return h.input||c(),h.addTest=function(e,t){if("object"==typeof e)for(var r in e)d(e,r)&&h.addTest(r,e[r]);else{if(e=e.toLowerCase(),h[e]!==n)return h;t="function"==typeof t?t():t,"undefined"!=typeof g&&g&&(m.className+=" "+(t?"":"no-")+e),h[e]=t}return h},r(""),y=x=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=v[e[g]];return t||(t={},m++,e[g]=m,v[m]=t),t}function o(e,n,r){if(n||(n=t),c)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||p.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function a(e,n){if(e||(e=t),c)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function l(e){e||(e=t);var r=i(e);return y.shivCSS&&!u&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||s(e,r),e}var u,c,f="3.7.0",d=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",m=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,c=!0}}();var y={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:f,shivCSS:d.shivCSS!==!1,supportsUnknownElements:c,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:l,createElement:o,createDocumentFragment:a};e.html5=y,l(t)}(this,t),h._version=p,h._prefixes=k,h._domPrefixes=E,h._cssomPrefixes=T,h.hasEvent=D,h.testProp=function(e){return s([e])},h.testAllProps=u,h.testStyles=F,m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(g?" js "+L.join(" "):""),h}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==m.call(e)}function i(e){return"string"==typeof e}function o(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=v.shift();y=1,e?e.t?h(function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):y=0}function l(e,n,r,i,o,l,u){function c(t){if(!p&&a(f.readyState)&&(b.r=p=1,!y&&s(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&h(function(){w.removeChild(f)},50);for(var r in E[n])E[n].hasOwnProperty(r)&&E[n][r].onload()}}var u=u||d.errorTimeout,f=t.createElement(e),p=0,m=0,b={t:r,s:n,e:o,a:l,x:u};1===E[n]&&(m=1,E[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){c.call(this,m)},v.splice(i,0,b),"img"!=e&&(m||2===E[n]?(w.insertBefore(f,x?null:g),h(c,u)):E[n].push(f))}function u(e,t,n,r,o){return y=0,t=t||"j",i(e)?l("c"==t?k:C,e,t,this.i++,n,r,o):(v.splice(this.i++,0,e),1==v.length&&s()),this}function c(){var e=d;return e.loader={load:u,i:0},e}var f,d,p=t.documentElement,h=e.setTimeout,g=t.getElementsByTagName("script")[0],m={}.toString,v=[],y=0,b="MozAppearance"in p.style,x=b&&!!t.createRange().compareNode,w=x?p:g.parentNode,p=e.opera&&"[object Opera]"==m.call(e.opera),p=!!t.attachEvent&&!p,C=b?"object":p?"script":"img",k=p?"script":C,_=Array.isArray||function(e){return"[object Array]"==m.call(e)},T=[],E={},S={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};d=function(e){function t(e){var t,n,r,e=e.split("!"),i=T.length,o=e.pop(),a=e.length,o={url:o,origUrl:o,prefixes:e};for(n=0;a>n;n++)r=e[n].split("="),(t=S[r.shift()])&&(o=t(o,r));for(n=0;i>n;n++)o=T[n](o);return o}function a(e,i,o,a,s){var l=t(e),u=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(i&&(i=r(i)?i:i[e]||i[a]||i[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,i,o,a,s):(E[l.url]?l.noexec=!0:E[l.url]=1,o.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(r(i)||r(u))&&o.load(function(){c(),i&&i(l.origUrl,s,a),u&&u(l.origUrl,s,a),E[l.url]=2})))}function s(e,t){function n(e,n){if(e){if(i(e))n||(f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}),a(e,f,t,0,u);else if(Object(e)===e)for(l in s=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(l)&&(!n&&!--s&&(r(f)?f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}:f[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(d[l])),a(e[l],f,t,l,u))}else!n&&p()}var s,l,u=!!e.test,c=e.load||e.both,f=e.callback||o,d=f,p=e.complete||o;n(u?e.yep:e.nope,!!c),c&&n(c)}var l,u,f=this.yepnope.loader;if(i(e))a(e,0,f,0);else if(_(e))for(l=0;l<e.length;l++)u=e[l],i(u)?a(u,0,f,0):_(u)?d(u):Object(u)===u&&s(u,f);else Object(e)===e&&s(e,f)},d.addPrefix=function(e,t){S[e]=t},d.addFilter=function(e){T.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=c(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,n,r,i,l,u){var c,f,p=t.createElement("script"),i=i||d.errorTimeout;p.src=e;for(f in r)p.setAttribute(f,r[f]);n=u?s:n||o,p.onreadystatechange=p.onload=function(){!c&&a(p.readyState)&&(c=1,n(),p.onload=p.onreadystatechange=null)},h(function(){c||(c=1,n(1))},i),l?p.onload():g.parentNode.insertBefore(p,g)},e.yepnope.injectCss=function(e,n,r,i,a,l){var u,i=t.createElement("link"),n=l?s:n||o;i.href=e,i.rel="stylesheet",i.type="text/css";for(u in r)i.setAttribute(u,r[u]);a||(g.parentNode.insertBefore(i,g),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};