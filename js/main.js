"use strict";function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}document.addEventListener("DOMContentLoaded",function(){function N(){0<arguments.length&&void 0!==arguments[0]&&arguments[0]&&(n=e&&e.offsetWidth,i=o&&o.offsetWidth,r=a&&a.offsetWidth);var t=document.getElementById("nav");window.innerWidth<768||n+i+r>t.offsetWidth-120?t.classList.add("hide-menu"):t.classList.remove("hide-menu")}var e=document.getElementById("site-name"),n=e&&e.offsetWidth,o=document.querySelector("#menus .menus_items"),i=o&&o.offsetWidth,a=document.querySelector("#search-button"),r=a&&a.offsetWidth;function c(t){var e=parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--global-font-size")),n="";if(t){if(20<=e)return;n=e+1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")||N(!0)}else{if(e<=10)return;n=e-1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")&&N(!0)}saveToLocal.set("global-font-size",n,2)}var s,T=!1;function k(t){t.forEach(function(t){var e=t,t=e.getAttribute("datetime");e.innerText=btf.diffDate(t,!0),e.style.display="inline"})}document.getElementById("rightside").addEventListener("click",function(t){switch(t.target.id||t.target.parentNode.id){case"go-up":btf.scrollToDest(0,500);break;case"rightside_config":document.getElementById("rightside-config-hide").classList.toggle("show");break;case"readmode":!function(){var e;(e=document.body).classList.add("read-mode");var n=document.createElement("button");n.type="button",n.className="fas fa-sign-out-alt exit-readmode",e.appendChild(n),n.addEventListener("click",function t(){e.classList.remove("read-mode"),n.remove(),n.removeEventListener("click",t)})}();break;case"darkmode":"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(function(){return window.disqusReset()},200);break;case"hide-aside-btn":(e=document.documentElement.classList).contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),e.toggle("hide-aside");break;case"font-plus":c(!0);break;case"font-minus":c()}var e}),window.refreshFn=function(){var e,n,t,o,i,a,r,c,s,l,d,u,f,m,y,h,p,g,b,L,v,S,E,A,_,w,O,G,I,B;function C(){o.style.overflow="",o.style.paddingRight="",btf.fadeOut(t,.5),n.classList.remove("open")}N(),document.getElementById("nav").classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(GLOBAL_CONFIG_SITE.isToc&&function(){var t=document.getElementById("card-toc"),r=t.getElementsByClassName("toc-content")[0],c=r.querySelectorAll(".toc-link"),i=document.getElementById("article-container");window.addEventListener("scroll",btf.throttle(function(t){var e=window.scrollY||document.documentElement.scrollTop;n(e),o(e)},100));var n=function(t){var e=i.clientHeight,n=document.documentElement.clientHeight,o=i.offsetTop,n=n<e?e-n:document.documentElement.scrollHeight-n,n=Math.round((t-o)/n*100);r.setAttribute("progress-percentage",100<n?100:n<=0?0:n)},s=GLOBAL_CONFIG.isanchor,e=function(){t.style.animation="toc-close .2s",setTimeout(function(){t.style.cssText="opacity:''; animation: ''; right: ''"},100)};document.getElementById("mobile-toc-button").addEventListener("click",function(){("0"===window.getComputedStyle(t).getPropertyValue("opacity")?function(){t.style.cssText="animation: toc-open .3s; opacity: 1; right: 45px"}:e)()}),r.addEventListener("click",function(t){t.preventDefault(),t=t.target.classList.contains("toc-link")?t.target:t.target.parentElement,btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(t.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&e()});var l=i.querySelectorAll("h1,h2,h3,h4,h5,h6"),d="",o=function(n){if(0===c.length||0===n)return!1;var t,o,i="",a="";if(l.forEach(function(t,e){n>btf.getEleTop(t)-80&&(i="#"+encodeURI(t.getAttribute("id")),a=e)}),d!==a){if(s&&(t=i,window.history.replaceState&&t!==window.location.hash&&(t=t||location.pathname,window.history.replaceState({},"",t))),""===i)return r.querySelectorAll(".active").forEach(function(t){t.classList.remove("active")}),void(d=a);d=a,r.querySelectorAll(".active").forEach(function(t){t.classList.remove("active")}),(o=c[a]).classList.add("active"),setTimeout(function(){var t=(e=o).getBoundingClientRect().top,e=r.scrollTop;t>document.documentElement.clientHeight-100&&(r.scrollTop=e+150),t<100&&(r.scrollTop=e-150)},0);for(var e=o.parentNode;!e.matches(".toc");e=e.parentNode)e.matches("li")&&e.classList.add("active")}}}(),void 0!==GLOBAL_CONFIG.noticeOutdate&&(S=GLOBAL_CONFIG.noticeOutdate,(E=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=S.limitDay&&((A=document.createElement("div")).className="post-outdate-notice",A.textContent=S.messagePrev+" "+E+" "+S.messageNext,E=document.getElementById("article-container"),"top"===S.position?E.insertBefore(A,E.firstChild):E.appendChild(A))),GLOBAL_CONFIG.relativeDate.post&&k(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&k(document.querySelectorAll("#recent-posts time")),!GLOBAL_CONFIG.runtime||(A=document.getElementById("runtimeshow"))&&(_=A.getAttribute("data-publishDate"),A.innerText=btf.diffDate(_)+" "+GLOBAL_CONFIG.runtime),(_=document.getElementById("last-push-date"))&&(w=_.getAttribute("data-lastPushDate"),_.innerText=btf.diffDate(w,!0)),(w=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i")).length&&w.forEach(function(t){t.addEventListener("click",function(t){t.preventDefault(),this.classList.toggle("expand"),t=this.parentNode.nextElementSibling,btf.isHidden(t)?t.style.display="block":t.style.display="none"})})),e=document.getElementById("toggle-menu"),n=document.getElementById("sidebar-menus"),t=document.getElementById("menu-mask"),o=document.body,e.addEventListener("click",function(){btf.sidebarPaddingR(),o.style.overflow="hidden",btf.fadeIn(t,.5),n.classList.add("open")}),t.addEventListener("click",function(t){n.classList.contains("open")&&C()}),window.addEventListener("resize",function(t){btf.isHidden(e)&&n.classList.contains("open")&&C()}),!GLOBAL_CONFIG_SITE.isHome||(r=document.getElementById("scroll-down"))&&r.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}),GLOBAL_CONFIG.highlight&&(S=GLOBAL_CONFIG.highlight.highlightCopy,E=GLOBAL_CONFIG.highlight.highlightLang,A=GLOBAL_CONFIG_SITE.isHighlightShrink,_=S||E||void 0!==A,w="highlighjs"===GLOBAL_CONFIG.highlight.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]'),_&&w.length&&(y="prismjs"===GLOBAL_CONFIG.highlight.plugin,g=!(p=h="")===A?"closed":"",void 0!==A&&(h='<i class="fas fa-angle-down expand '.concat(g,'"></i>')),S&&(p='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),b=function(t){var e=t.parentNode;e.classList.add("copy-true");var n,o=window.getSelection(),i=document.createRange();y?i.selectNodeContents(e.querySelectorAll("pre code")[0]):i.selectNodeContents(e.querySelectorAll("table .code pre")[0]),o.removeAllRanges(),o.addRange(i),o.toString(),t=t.lastChild,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):((n=t.previousElementSibling).innerText=GLOBAL_CONFIG.copy.success,n.style.opacity=1,setTimeout(function(){n.style.opacity=0},700))):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):t.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport,o.removeAllRanges(),e.classList.remove("copy-true")},L=function(t){var e;(e=t.target.classList).contains("expand")?(t=_toConsumableArray(this.parentNode.children).slice(1),this.firstChild.classList.toggle("closed"),btf.isHidden(t[0])?t.forEach(function(t){t.style.display="block"}):t.forEach(function(t){t.style.display="none"})):e.contains("copy-button")&&b(this)},v=function(){var t=document.createElement("div");return t.className="highlight-tools ".concat(g),t.addEventListener("click",L),t},E?y?w.forEach(function(t){var e=void 0!==t.getAttribute("data-language")?t.getAttribute("data-language"):"Code",n='<div class="code-lang">'.concat(e,"</div>");btf.wrap(t,"figure","","highlight"),(e=v()).innerHTML=h+n+p,t.parentNode.insertBefore(e,t)}):w.forEach(function(t){var e=t.getAttribute("class").split(" ")[1],n='<div class="code-lang">'.concat(e="plain"===e||void 0===e?"Code":e,"</div>");(e=v()).innerHTML=h+n+p,t.insertBefore(e,t.firstChild)}):y?w.forEach(function(t){btf.wrap(t,"figure","","highlight");var e=v();e.innerHTML=h+p,t.parentNode.insertBefore(e,t)}):w.forEach(function(t){var e=v();e.innerHTML=h+p,t.insertBefore(e,t.firstChild)}))),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(t){var e,n=t.parentNode;n.parentNode.classList.contains("justified-gallery")||((e=document.createElement("div")).className="img-alt is-center",e.textContent=t.getAttribute("alt"),n.insertBefore(e,t.nextSibling))}),O="fancybox"===GLOBAL_CONFIG.lightbox?document.querySelectorAll("#article-container :not(a):not(.gallery-group) > img, #article-container > img"):[],G=0<O.length,I=document.querySelectorAll("#article-container .justified-gallery"),((B=0<I.length)||G)&&btf.isJqueryLoad(function(){var t,e,n;function o(t){t.each(function(t,e){var n=$(e),o=n.attr("data-lazy-src")||n.attr("src"),e=n.attr("alt")||"";n.wrap('<a href="'.concat(o,'" data-fancybox="group" data-caption="').concat(e,'" class="fancybox"></a>'))}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})}B&&(t=I,(t=(e=$(t)).find("img")).unwrap(),t.length&&t.each(function(t,e){$(e).attr("data-lazy-src")&&$(e).attr("src",$(e).attr("data-lazy-src")),$(e).wrap("<div></div>")}),T?btf.initJustifiedGallery(e):($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.source.justifiedGallery.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.source.justifiedGallery.js),function(){btf.initJustifiedGallery(e)}),T=!0)),G&&(n=O,void 0===$.fancybox?($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.source.fancybox.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.source.fancybox.js),function(){o($(n))})):o($(n)))}),"mediumZoom"===GLOBAL_CONFIG.lightbox&&(i=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"))).on("open",function(t){var e="dark"===document.documentElement.getAttribute("data-theme")?"#121212":"#fff";i.update({background:e})}),f=document.getElementById("rightside"),m=window.innerHeight+56,document.body.scrollHeight<=m?f.style.cssText="opacity: 1; transform: translateX(-38px)":(s=!(c=0),l=document.getElementById("page-header"),d="function"==typeof chatBtnHide,u="function"==typeof chatBtnShow,window.addEventListener("scroll",btf.throttle(function(t){var e=window.scrollY||document.documentElement.scrollTop,n=c<e;56<(c=e)?(n?(l.classList.contains("nav-visible")&&l.classList.remove("nav-visible"),u&&!0===s&&(chatBtnHide(),s=!1)):(l.classList.contains("nav-visible")||l.classList.add("nav-visible"),d&&!1===s&&(chatBtnShow(),s=!0)),l.classList.add("nav-fixed"),"0"===window.getComputedStyle(f).getPropertyValue("opacity")&&(f.style.cssText="opacity: 1; transform: translateX(-38px)")):(0===e&&l.classList.remove("nav-fixed","nav-visible"),f.style.cssText="opacity: ''; transform: ''"),document.body.scrollHeight<=m&&(f.style.cssText="opacity: 1; transform: translateX(-38px)")},200))),(r=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table")).length&&r.forEach(function(t){btf.wrap(t,"div","","table-wrap")}),(r=document.querySelectorAll("#article-container .hide-button")).length&&r.forEach(function(t){t.addEventListener("click",function(t){var e=this.nextElementSibling;this.classList.toggle("open"),this.classList.contains("open")&&0<e.querySelectorAll(".justified-gallery").length&&btf.initJustifiedGallery(e.querySelectorAll(".justified-gallery"))})}),document.querySelectorAll("#article-container .tab > button").forEach(function(t){t.addEventListener("click",function(t){var e,n,o,i=this.parentNode;i.classList.contains("active")||(o=i.parentNode.nextElementSibling,(e=btf.siblings(i,".active")[0])&&e.classList.remove("active"),i.classList.add("active"),n=this.getAttribute("data-href").replace("#",""),_toConsumableArray(o.children).forEach(function(t){t.id===n?t.classList.add("active"):t.classList.remove("active")}),0<(o=o.querySelectorAll("#".concat(n," .justified-gallery"))).length&&btf.initJustifiedGallery(o))})}),document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(t){t.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})}),a=!1,(r=document.querySelector("#comment-switch > .switch-btn"))&&r.addEventListener("click",function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(t){btf.isHidden(t)?t.style.cssText="display: block;animation: tabshow .5s":t.style.cssText="display: none;animation: ''"}),a||"function"!=typeof loadOtherComment||(a=!0,loadOtherComment())})},refreshFn(),window.addEventListener("resize",N),window.addEventListener("orientationchange",function(){setTimeout(N(!0),100)}),document.querySelectorAll("#sidebar-menus .expand").forEach(function(t){t.addEventListener("click",function(){this.classList.toggle("hide");var t=this.parentNode.nextElementSibling;btf.isHidden(t)?t.style.display="block":t.style.display="none"})}),window.addEventListener("touchmove",function(t){document.querySelectorAll("#nav .menus_item_child").forEach(function(t){btf.isHidden(t)||(t.style.display="none")})}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(s=GLOBAL_CONFIG.copyright,document.body.oncopy=function(t){t.preventDefault();var e=(e=window.getSelection(0).toString()).length>s.limitCount?e+"\n\n\n"+s.languages.author+"\n"+s.languages.link+window.location.href+"\n"+s.languages.source+"\n"+s.languages.info:e;return(t.clipboardData?t:window).clipboardData.setData("text",e)})});