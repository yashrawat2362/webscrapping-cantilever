'use strict';mix_d("SBXGwentCards__lifestyle-image-v4-creative-desktop:lifestyle-image-v4-creative-desktop__g-MdEEqY/es3","require exports tslib @c/dom @c/scoped-dom @c/browser-operations @c/logger @c/remote-operations @c/pagemarker @c/aui-utils @c/metrics @c/aui-feature-detect @p/a-ajax @c/aui-modal @p/A".split(" "),function(sa,ta,y,Qa,Ra,fa,ua,Sa,Ta,va,Ua,Va,Wa,Xa,Ya){function G(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}function E(a,b){return function(c){c=t(a,c);return b?
b(c):c}}function wa(a,b,c,d){b?(x("Send"+a+"Success"),c&&x("Send"+a+"Success_"+c),d&&x("Send"+a+"Success_"+d)):(x("Send"+a+"Failure"),c&&x("Send"+a+"Failure_"+c),d&&x("Send"+a+"Failure_"+d))}function xa(a){return Array.isArray(a)?a.map(function(b){return y.__assign(y.__assign({},b),{width:0,height:0})}):{url:a.url,width:0,height:0}}function Za(a,b){void 0===a&&(a=void 0);void 0===b&&(b=!1);try{var c=$a(b);ab(c,{generateModalContent:a})}catch(d){H(d),H("failed to execute eel client script")}}var R=
G(Qa),ha=G(Ra),bb=G(fa),I=G(ua),cb=G(Ta),db=G(va),ya=G(Ua),eb=G(Va),fb=G(Wa),gb=G(Xa),U=G(Ya),J,Z;(function(a){a.Cornerstone="CSTONE";a.Axiom="AXIOM"})(Z||(Z={}));var hb=(J={},J.e="basebe.ClientErrors.4",J.i="basebe.Impressions.8",J.c="basebe.Clicks.5",J.s="basebe.Swipes.5",J.v="basebe.Viewabilities.6",J.vc="basebe.VisualCompleteness.7",J.ss="basebe.slideshow.1",J.ia="basebe.ImpressionsV2.4",J.iv2="basebe.ImpressionsV3.2",J),ia=function(a,b){return"matches"in a?a.matches(b):"msMatchesSelector"in a?
a.msMatchesSelector(b):"webkitMatchesSelector"in a?a.webkitMatchesSelector(b):0<=z(b,u().ownerDocument.body).indexOf(a)},u=function(a,b){b=b||R["default"].cardRoot;return!a||ia(b,a)?b:b.querySelector(a)},z=function(a,b){return Array.prototype.slice.call((b||R["default"].cardRoot).querySelectorAll(a))},t=function(a,b){return(b=u("["+a+"]",b))?b.getAttribute(a):null},ib=function(a,b,c){void 0===b&&(b={});void 0===c&&(c=[]);var d=u().ownerDocument.createElement(a);Object.keys(b).forEach(function(e){d.setAttribute(e,
b[e])});c.forEach(function(e){d.classList.add(e)});return d},za=function(a,b){a:{for(var c="["+a+"]";b&&b!==R["default"].cardRoot;){if(ia(b,c))break a;b=b.parentElement}b=null}return b?b.getAttribute(a):null},Aa=function(a){if(a)return a=a.getBoundingClientRect(),{left:a.left,right:a.right,top:a.top,bottom:a.bottom};a=L();return{left:0,top:0,right:a.innerWidth,bottom:a.innerHeight}},L=function(){return u().ownerDocument.defaultView},H=function(a,b){I["default"].log(a,"ERROR",b||"SBX_GWENT")},Ba=function(a){var b;
a=/\?([^#]+)/.exec(a);if(!a)return[];a=a[1].split("&");var c=null;try{for(var d=y.__values(a),e=d.next();!e.done;e=d.next()){var f=e.value;if(0===f.indexOf("ref_=")){c=f;break}}}catch(h){var g={error:h}}finally{try{e&&!e.done&&(b=d.return)&&b.call(d)}finally{if(g)throw g.error;}}return c?(g=c.split("=").pop()||"")?g.split("_"):[]:[]},Ca=function(a,b,c){var d={};if(5<c.length){d.el=c.pop()||null;a:{var e;try{for(var f=y.__values(c),g=f.next();!g.done;g=f.next()){var h=g.value;if(/^\d+$/.test(h)){var l=
h;break a}}}catch(m){var k={error:m}}finally{try{g&&!g.done&&(e=f.return)&&e.call(f)}finally{if(k)throw k.error;}}l=null}d.index=l;d.asin=za("data-asin",b);d.type=za("data-avar",b)}a.c(d,b)},jb=function(a,b){var c=Ba(b.href);Ca(a,b,c)},kb=function(a,b){var c=L(),d=function(e){2!==e.button&&(jb(a,b),e.metaKey||e.altKey||e.shiftKey||e.ctrlKey||1===e.button||"_blank"===b.target||(e.preventDefault(),c.setTimeout(function(){c.open(b.href,b.target||"_top")},50)))};b.addEventListener("click",d);b.addEventListener("auxclick",
d)},Da=function(a,b,c){var d=u("[data-active]"),e=(null===d||void 0===d?void 0:d.dataset)||{};d=e.paginationId;e=e.index;b.c({el:"sb-slideshow-arrow",type:a,asin:void 0===d?null:d,index:void 0===e?null:e},c)},mb=function(a,b){z("[href]",b).filter(function(c){return!c.classList.contains("a-carousel-button")}).forEach(function(c){kb(a,c)});z(".amazon-follow",b).forEach(function(c){c.addEventListener("click",function(){var d=Ba("?&ref_="+c.getAttribute("data-ref"));Ca(a,c,d)})});z('[data-mix-operations="handleNext"]').forEach(function(c){c.addEventListener("click",
function(){Da("next",a,b)})});z('[data-mix-operations="handlePrev"]').forEach(function(c){c.addEventListener("click",function(){Da("prev",a,b)})});z('[data-mix-operations="handlePaginationClick"]').forEach(function(c){c.addEventListener("click",function(){var d=c.dataset||{},e=d.paginationId;d=d.index;a.c({el:"sb-slideshow-pagination",type:"pagination",index:void 0===d?null:d,asin:void 0===e?null:e},b)})});z('[data-mix-operations="hotSpotClick"]').forEach(function(c){c.addEventListener("click",function(){var d,
e=(c.dataset||{}).asinid;e=void 0===e?null:e;var f=c.style,g=f.left;f=f.top;var h=u('[data-asin="'+e+'"]')||void 0;h=((null===(d=u("[data-asinindex]",h))||void 0===d?void 0:d.dataset)||{}).asinindex;d=void 0===h?null:h;g={x:parseFloat(g),y:parseFloat(f)};g=JSON.stringify(g);e=y.__assign({type:g},{asin:e,el:"hotspot",index:d});a.c(e,c)})});lb(a)},lb=function(a){var b=u('[class*="seeProducts"]'),c=u('[data-mix-operations="expandHandler"]'),d=z('[class*="sidebarButton"]'),e=[b,c].concat(d);if(e.length){var f=
[];e.forEach(function(h){if(h){var l=h instanceof HTMLButtonElement&&!t("data-index",h)?"seeProducts":h instanceof HTMLButtonElement?"asinSidebar":"shoppableImageCollapsed",k={asin:h.dataset.asinid||null,index:h.dataset.index||null,el:l};l=function(){if(h){var m=y.__assign({type:"collapsed"},k);a.c(m,h);g(e,f)}};f.push(l);h.addEventListener("click",l)}});var g=function(h,l){h.forEach(function(k,m){k&&k.removeEventListener("click",l[m])})}}},ja=E("data-card-metrics-id",function(a){return(a||"").split("_")[0]}),
ka=E("data-var"),nb=E("data-rid"),ob=E("data-cid"),pb=E("data-iid"),Ea=E("data-aid"),Fa=E("data-aidx"),qb=E("data-idt",function(a){switch(a){case Z.Axiom:return Z.Axiom;default:return Z.Cornerstone}}),ba=E("data-rctx",function(a){return a?JSON.parse(a):{sid:"",cid:"",mid:"",aigen:null}}),la=E("data-wl",function(a){return a?a.split(","):[]}),rb=E("data-slot"),ma=E("data-ts"),na=function(){var a=L();return a.innerWidth+"x"+a.innerHeight},oa=function(a){return(a=a||R["default"].cardRoot)?(a=a.getBoundingClientRect(),
{width:a.width,height:a.height}):{width:0,height:0}},W=function(a,b){var c;b=b||R["default"].cardRoot;return(a=null===(c=b.querySelector('[class*="'+a+'"]'))||void 0===c?void 0:c.getAttribute("src"))?a:null},pa=function(a){return{id:t("data-asin",a),prime:!!u(".a-icon-prime",a),price:!!u(".a-price",a),savings:!!u('.a-price[data-a-strike="true"]',a),rating:t("data-rt",a),badge:t("data-deal",a)}},Ga=function(a,b){var c=L(),d,e=function(){d||(d=c.setTimeout(a,b))};e.cancel=function(){c.clearTimeout(d);
d=0};return e},qa=function(a,b,c){var d=(c||{}).ms||25,e=(c||{}).el||L(),f=db["default"].throttle(b,d);e.addEventListener(a,f);return function(){e.removeEventListener(a,f)}},X={},Ia=function(a,b,c){void 0===c&&(c=!1);var d=a.getBoundingClientRect(),e=d.width*d.height;a=t("data-view-pixel",a);if(e){var f=d.top,g=d.bottom,h=d.left,l=d.right,k=L();d=k.innerHeight;h=Ha(h,l,k.innerWidth);f=Ha(f,g,d);e=h*f/e;if(c)if(.5<=e)if(b)b();else return!0;else if(b)b.cancel();else return!0;else if(a)if(X[a]||(X[a]=
{percentageViewed:.5,startTimeInView:0}),c=X[a],c.percentageViewed=e,.5<=e){if(0===c.startTimeInView||1E3<Date.now()-c.startTimeInView)c.startTimeInView=Date.now();if(b)b();else return!0}else if(c.startTimeInView=0,b)b.cancel();else return!0}},Ha=function(a,b,c){return 0<=a?Math.max(Math.min(c-a,b-a),0):0<b?Math.max(Math.min(Math.min(b,c),b-a),0):0},Ja=function(a){var b,c,d=Date.now()-(null===(b=X[a])||void 0===b?NaN:b.startTimeInView);b=null===(c=X[a])||void 0===c?void 0:c.percentageViewed;if(d&&
b)if(c="/"===a.substr(-1)?a+"v/":a+"/v/",a=JSON.stringify({v:{def:"iab",event:"VIEWED",p:Math.round(100*X[a].percentageViewed),t:parseFloat((d/1E3).toFixed(3))},programType:"SBC"}),"function"===typeof window.fetch)fetch(c+encodeURI(a),{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:a}).then(function(f){f.ok||0===f.status||I["default"].log(f.status+" "+f.statusText,"ERROR","sbx-ce-vcpm-fetch");x("PixelClientCallSuccess")}).catch(function(f){x("PixelClientCallFailure");
I["default"].log(f,"ERROR","sbx-ce-vcpm-fetch")});else{var e=new XMLHttpRequest;e.open("POST",c+encodeURI(a));e.setRequestHeader("Content-Type","application/json");e.onreadystatechange=function(){4===e.readyState&&(200!==e.status?I["default"].log(e.status+" "+e.statusText,"ERROR","sbx-ce-vcpm-fetch"):x("PixelClientCallSuccess"))};e.onerror=function(){x("PixelClientCallFailure");I["default"].log("XMLHttpRequest error from old browser","ERROR","sbx-ce-vcpm-fetch")};e.send(a)}else d||x("PixelClientCallMissingTimeInView"),
b||x("PixelClientCallMissingPercentageInView")},sb=function(a,b){var c=function(){Ia(b?b:u(),d)},d=Ga(function(){var g=t("data-view-pixel",b?b:u());g&&(Ja(g),g=u("[data-view-pixel]"),null===g||void 0===g?void 0:g.removeAttribute("data-view-pixel"));e();f();a.v(null,b)},1E3),e=qa("scroll",c,void 0),f=qa("resize",c,void 0);c()},tb=function(a){a&&a.forEach(function(b){var c=Ga(function(){var d=t("data-view-pixel",b);d&&(Ja(d),null===b||void 0===b?void 0:b.removeAttribute("data-view-pixel"))},1E3);Ia(b,
c)})},Ka=function(a,b){var c=null,d=null;a.addEventListener("touchstart",function(e){c=e.touches[0].pageX});a.addEventListener("touchmove",function(e){null===c&&(c=e.touches[0].pageX);d=e.touches[0].pageX});a.addEventListener("touchend",function(){null!==c&&null!==d&&b(d-c);c=d=null})},ub=function(a){if(eb["default"].isSupported("touch")){var b=u("[data-track-swipe]"),c=u("[data-trackswipe]"),d=function(e){var f=Math.abs(e);if(30<f){var g=z("[data-view-pixel]");tb(g);a.s({direction:0>e?"left":"right",
length:f})}};b?Ka(b,d):c&&Ka(c,d)}},vb=function(a,b){var c=Date.now();b=z("img",b);var d=b.length,e=0,f=function(){++e===d&&a.vc({delay:Date.now()-c})};b.forEach(function(g){null!==t("data-lazy",g)&&null!==t("data-src",g)?g.addEventListener("load",function(){g.src===g.dataset.src&&f()}):g.complete?f():g.addEventListener("load",f)})},wb=function(a){var b=a.campaignId,c=a.idType,d=a.slotName,e=a.market,f={eventV1:{anonymizedRequestId:a.anonymizedRequestId,campaignId:b,slotName:d,idType:c,market:e,customerId:a.customerId,
sessionId:a.sessionId,lob:a.lob},eventV2:{campaignId:b,slotName:d,idType:c,market:e,joinId:a.joinId}},g=function(h,l,k){try{var m=ya["default"],v=m.event,q=y.__assign({},f[l]);if(k)for(var r in k)Object.prototype.hasOwnProperty.call(k,r)&&(q[r]=k[r]);v.call(m,q,"base-be",hb[h],{ssd:!0})}catch(p){H(p)}};return{i:g.bind(null,"i","eventV1"),v:g.bind(null,"v","eventV1"),vc:g.bind(null,"vc","eventV1"),c:g.bind(null,"c","eventV1"),s:g.bind(null,"s","eventV1"),ss:g.bind(null,"ss","eventV1"),ia:g.bind(null,
"ia","eventV1"),iv2:g.bind(null,"iv2","eventV2"),e:function(h){g("e","eventV1",h&&{name:h.name,message:h.message,stack:h.stack})}}},La=function(a){var b=ob(a);var c=ba(a).mid;b=wb({anonymizedRequestId:nb(),campaignId:b,idType:qb(a),slotName:rb(),market:c,customerId:null,sessionId:null,lob:"UNKNOWN",joinId:null});var d=L();c=d.innerWidth;d=d.innerHeight;var e=oa(a),f=e.width;e=e.height;var g=ba(a).aigen;b.i({asins:[].map.call(z("[data-asin]",a),pa),creativeType:ja(),creativeVariation:ka(a),version:ma(a),
viewport:na(),weblabs:la(a),adWidth:f,adHeight:e,viewportWidth:c,viewportHeight:d,storeBannerUrl:W("storeBanner",a),customImageUrl:W("lifestyleImage",a),isAiGen:g});mb(b,a);vb(b,a);sb(b,a);ub(b);d=L();c=d.innerWidth;d=d.innerHeight;e=oa(a);f=e.width;e=e.height;g=ba(a).aigen;b.ia&&b.ia({asins:[].map.call(z("[data-asin]",a),pa),creativeType:ja(),creativeVariation:ka(a),version:ma(a),viewport:na(),weblabs:la(a),adIndex:Fa(a),adId:Ea(a),adWidth:f,adHeight:e,viewportWidth:c,viewportHeight:d,storeBannerUrl:W("storeBanner",
a),customImageUrl:W("lifestyleImage",a),isAiGen:g});d=L();c=d.innerWidth;d=d.innerHeight;e=oa(a);f=e.width;e=e.height;g=ba(a).aigen;b.iv2&&b.iv2({asins:[].map.call(z("[data-asin]",a),pa),creativeType:ja(),creativeVariation:ka(a),version:ma(a),viewport:na(),weblabs:la(a),adIndex:Fa(a),adId:Ea(a),adWidth:f,adHeight:e,viewportWidth:c,viewportHeight:d,storeBannerUrl:W("storeBanner",a),customImageUrl:W("lifestyleImage",a),isAiGen:g})},x=function(a,b){void 0===b&&(b=1);ya["default"].count("sbxGwentClient"+
a,b)},F={log:function(a){var b=L();var c=pb();(b=c&&b.sbxGwentClient&&"number"===typeof b.sbxGwentClient[c]?Date.now()-b.sbxGwentClient[c]:null)?x(a,b):x("NoPageTime")}},xb=function(a){var b=a.url,c=a.onSuccess,d=a.onError;b||d();fb["default"].get(b,{success:function(e){e&&"ok"===e.status?c(e):d()},error:d,abort:d})},ra;(ra||(ra={})).adFeedbackHandler="adFeedbackHandler";var yb=function(a,b,c,d,e){try{var f=JSON.parse(a),g=y.__read(f,6),h=g[0],l=g[1],k=g[2],m=g[3],v=g[4],q=g[5],r=[];Array.isArray(h)?
h.forEach(function(w){return r.push({campaignId:c,creativeId:w})}):r.push({campaignId:c,creativeId:h});var p={adCreativeMetaData:{adCreativeId:Array.isArray(h)?h[0]:h,adId:b,adImpressionId:l,adNetwork:"aax",adProgramId:1010,adCreativeDetails:r},adPlacementMetaData:{adElementId:k,pageType:m,pageUrl:v,searchTerms:q,slotName:d,adProgramId:1010}};return e+"?pl="+encodeURIComponent(JSON.stringify(p))}catch(w){return null}},Ma=function(a){var b=bb["default"].setup().define,c=!!t("data-ad-feedback-clicks"),
d=!!t("data-ad-feedback-simulate"),e=a||"AdFeedbackSuccess",f="AdFeedbackPlaceholderClick",g=!1;c&&b(ra.adFeedbackHandler,"click",function(){F.log(f);"AdFeedbackPlaceholderClick"===f&&(g=!0)});a=t("data-ad-feedback");b=t("data-ad-feedback-url")||"/gp/aq-feedback/lazyLoad/handler/af-link-handler.html";if(a){c=t("data-slot");var h=t("data-aid"),l=t("data-cid");a=yb(a,h,l,c,b);xb({url:a,onSuccess:function(k){var m=k.html;var v=u('[data-id="afb-content"]');v&&m?(v.innerHTML=m,m=v):m=null;if(k=k.script)v=
u().ownerDocument.createElement("script"),v.type="text/javascript",v.innerHTML=k,u().appendChild(v);F.log(e);f="AdFeedbackLinkClick";m&&g&&d&&((k=u("a",m))?(k.click(),k=!0):k=!1,F.log(k?"AdFeedbackSimulateClickSuccess":"AdFeedbackSimulateClickFail"))},onError:function(){F.log("AdFeedbackFallback");g&&d&&F.log("AdFeedbackSimulateClickFail")}})}},aa=function(a,b){var c,d=[];try{for(var e=y.__values(a.split(/[-_]/)),f=e.next();!f.done;f=e.next()){var g=f.value;d.push(g.charAt(0).toUpperCase()+g.slice(1));
if("creativeLevel"===b&&("desktop"===g||"mobile"===g))break}}catch(l){var h={error:l}}finally{try{f&&!f.done&&(c=e.return)&&c.call(e)}finally{if(h)throw h.error;}}return d.join("")},Ab=function(a,b,c,d,e,f,g,h,l,k,m){return y.__awaiter(void 0,void 0,void 0,function(){var v,q,r;return y.__generator(this,function(p){switch(p.label){case 0:v=function(){return{adCreativeMetaData:{adCreativeDetails:zb(b,h,l,k,m)},adFeedbackLabelId:a}},q=function(w){var n=w.baseMessage,A=w.deviceType,B=w.tabletEnv,C=w.slotName;
C=y.__read([aa(w.creativeId,"creativeLevel"),aa(C,"slotLevel")],2);w=C[0];C=C[1];x(n);A&&(A=n+"_"+A,B&&(A+="_"+B),x(A));w&&x(n+"_"+w);C&&x(n+"_"+C)},p.label=1;case 1:return p.trys.push([1,3,,4]),[4,c(v)];case 2:return p.sent(),q({baseMessage:"EnableAdFeedbackSuccess",deviceType:d,tabletEnv:e,creativeId:f,slotName:g}),[3,4];case 3:return r=p.sent(),q({baseMessage:"EnableAdFeedbackFailure",deviceType:d,tabletEnv:e,creativeId:f,slotName:g}),H(r),[3,4];case 4:return[2]}})})},Bb=function(a){if(a){var b=
a.split(" ");b.map(function(c,d){0<d&&(b[d]=c.substring(3,c.length))});b.pop();b.shift();return b}},zb=function(a,b,c,d,e){var f=[],g=t("data-card-metrics-id")||"",h=t("data-slot")||"";g=y.__read([aa(g,"creativeLevel"),aa(h,"slotLevel")],2);var l=g[0],k=g[1];e&&e()!==a.length&&(a=a.filter(function(m){return u('[data-aid="'+m.adId+'"]')}));a.forEach(function(m,v){var q='[data-aid="'+m.adId+'"]';for(var r=u(q),p=b&&b()||document.body,w,n=0;(c?n<c.length:0>n)&&!(w=u(q+' div[class*="'+(null===c||void 0===
c?void 0:c[n])+'"] img'));n++);w?x("AfImagePresent_"+l):x("AfImageMissing_"+l);q=(null===w||void 0===w?void 0:w.getAttribute("src"))||void 0;n=Bb((null===w||void 0===w?void 0:w.getAttribute("srcset"))||void 0);var A=(null===n||void 0===n?void 0:n.length)||1;w=[];for(var B=0;B<A;B++)w.push({url:(null===n||void 0===n?void 0:n[B])||""});q={url:q?q:""};wa("SelectionSignals",m.selectionSignals,l,k);wa("AdvertiserIdNS",m.advertiserIdNS,l,k);if(r){(n=1===a.length||d)||(r=Aa(r),p?((n=u('div[data-index="'+
v+'"]'))?n=0===n.offsetHeight&&0===n.offsetWidth?!0:!1:(I["default"].log("container Element for ad number "+v+" is not found","WARN","DSA/AdFeedback"),n=!0),n?n=!1:(p=Aa(p),r.left===p.left||r.right===p.right?(n=r.left,(n=n>=p.left&&n<=p.right)||(r=r.right,n=r>=p.left&&r<=p.right),p=n):(n=r.left,(n=n>p.left&&n<p.right)||(r=r.right,n=r>p.left&&r<p.right),p=n),n=p)):n=void 0);if(n){p=f.push;r=m.campaignId;n=m.adId;A=m.title;w={lowResolutionImage:xa(q),highResolutionImages:xa(w)};if(m.selectionSignals){q=
m.selectionSignals;switch(q.pastActivity){case "STORE_ONLY":B=1;break;default:B=0}q=y.__assign(y.__assign({},q),{pastActivity:B})}else q=void 0;p.call(f,{campaignId:r,adId:n,adCreativeIndex:v,title:A,adCreativeImage:w,selectionSignals:q,advertiserIdNS:m.advertiserIdNS})}x("adElementPresent_"+l)}else x("adElementMissing"),I["default"].log("adElement is not found: "+JSON.stringify(m),"WARN","DSA/AdFeedback"),x("adElementMissing_"+l)});return f},Na=function(){z('[data-id="cta"]').forEach(function(a){if(a.parentElement){var b=
u('[data-id*="cta-fallback"]',a.parentElement),c=u(".a-truncate",a),d=u(".a-truncate-full",a);c&&d&&(d.clientHeight>c.clientHeight&&b?(b.style.display="block",a.parentElement.removeChild(a)):(b=a.parentElement.getAttribute("aria-hidden"),b&&"false"!==b||(b=a.getAttribute("data-label")||d.innerHTML,a.parentElement.setAttribute("aria-label",b)),(c=u('[data-id*="cta-chevron"]',a))&&!d.hasAttribute("data-chevron")&&(d.setAttribute("data-chevron","true"),a=d.innerHTML.split(" "),b=a.pop(),c=c.innerHTML,
d.innerHTML="<span>"+a.join(" ")+" </span><span>"+b+"&nbsp;"+c+"</span>")))}})},Cb=function(a){var b=t("data-src",a)||"",c=t("data-srcset",a)||"",d=a.cloneNode();d.removeAttribute("data-src");d.removeAttribute("data-srcset");d.removeAttribute("data-lazy");d.srcset=c;d.src=b;a.parentNode&&a.parentNode.insertBefore(d,a);d.onload=function(){a.style.opacity="0";F.log("LazyLoaded")}},Db=function(){var a=z('[class*="eelModalRoot"]');a&&a.forEach(function(b,c){var d=t("data-modal-trigger",b),e=t("data-title",
b),f=t("data-modal-settings",b);f=JSON.parse(f||"{}");if(d){c="eel-cards-modal-"+c;var g="."+b.className.split(" ")[0],h=gb["default"].create(c,g,{closeButton:(null===f||void 0===f?void 0:f.closeButton)||!1,a11yOpenMessage:e||"Energy Efficiency & Product Fiche",width:(null===f||void 0===f?void 0:f.width)||800});e=fa.setup();f=e.define;e=e.attach;h.once("beforeShow",function(){U["default"].loadDescendantImagesManually(b)});f("modal-handler-"+d,["click"],function(){h.show()});f("modal-close-handler-"+
d,["click"],function(){h.hide()});f=u('[data-mix-operations="modal-handler-'+d+'"]');d=u('[data-mix-operations="modal-close-handler-'+d+'"]');f&&d&&(e("modalHandler",f),e("modalClose",d))}})},Eb=function(a){var b=function(d,e){d={$event:{preventDefault:U["default"].$.noop,stopPropagation:U["default"].$.noop},$target:d.getContent().find('[data-a-tab-name="'+e+'"]'),data:{name:"energyEfficiencyTabSet"}};U["default"].trigger("a:declarative:a-tabs:click",d)},c=function(d,e){var f=d&&d.$event,g=d&&d.data||
{},h=g.name;f&&f.preventDefault&&f.preventDefault();f&&f.stopPropagation&&f.stopPropagation();d&&f&&g&&h&&e&&(f=e.get(h),f||(U["default"].on("a:popover:beforeShow:"+h,function(l){var k,m,v;l.popover&&l.popover.getContent&&(l=l.popover.getContent(),null===(m=null===(k=null===l||void 0===l?void 0:l.find(".a-manually-loaded"))||void 0===k?void 0:k.parent())||void 0===m?void 0:m.css("min-height",null!==(v=g.modalHeight)&&void 0!==v?v:800),U["default"].loadDescendantImagesManually(l))}),f=e.create(d.$target,
g)),f&&(f.show(),g.activeTabName&&b(f,g.activeTabName)))};a&&a.when("a-secondary-view").execute("RegisterEnergyEfficiencyEventMobile",function(d){U["default"].declarative("card-energy-efficiency-secondary-view","click",function(e){c(e,d)})})},Gb=function(){z("span[data-ad-deal-end-time]").forEach(function(a){var b=t("data-ad-deal-end-time",a);a&&null!==b&&Fb(a,b)})},Fb=function(a,b){var c=va.interval(function(){var d=(new Date(b)).getTime(),e=Date.now();e=Math.floor((d-e)/1E3);if(0>e)clearInterval(c);
else{var f=Math.floor(e/60%60);d=Math.floor(e%60);e=("0"+Math.floor(e/3600%24)).slice(-2);f=("0"+f).slice(-2);d=("0"+d).slice(-2);a.innerText=e+":"+f+":"+d}},1E3)},Ib=function(a){return function(){return y.__awaiter(void 0,void 0,void 0,function(){var b,c,d,e,f,g,h,l,k,m,v,q,r,p,w,n,A,B,C;return y.__generator(this,function(M){switch(M.label){case 0:return F.log("Loaded"),b=a||{},c=b.loadAdFeedback,d=b.onLoad,e=b.onInit,f=b.isMobile,g=b.enableAdFeedback,h=b.creativeContainer,l=b.creativeImageContainer,
k=b.bypassAdFeedbackViewportCheck,m=b.renderedAdsCount,e&&e(),[4,cb["default"].pageReady];case 1:M.sent();F.log("Ready");try{var S=u(".sbx-no-js",void 0);S&&S.classList.remove("sbx-no-js");try{var Y=z("[data-cid]");Y.length?Y.forEach(La):La()}catch(K){H(K)}try{Na(),qa("resize",Na,void 0)}catch(K){H(K)}try{z('img[data-lazy="true"]').forEach(Cb)}catch(K){H(K)}u('[class*="eelModalRoot"]')?Db():u('[data-action*="card-energy-efficiency-"]')&&Eb(window.P);var O,D;if(!("-webkit-line-clamp"in R["default"].cardRoot.ownerDocument.body.style||
"lineClamp"in R["default"].cardRoot.ownerDocument.body.style)){var Q=z('[class*="_sbTruncatedTitle_"]');if(Q.length)try{for(var T=y.__values(Q),V=T.next();!V.done;V=T.next()){var N=V.value,Hb=parseInt(N.getAttribute("data-totallines")||"1"),Oa=Math.ceil(parseFloat((null===(D=R["default"].cardRoot.ownerDocument.defaultView)||void 0===D?void 0:D.getComputedStyle(N).lineHeight)||"1.3em"))*Hb;if(!(N.scrollHeight<=Oa)){for(;N.scrollHeight>Oa;)N.innerText=N.innerText.slice(0,-1);N.innerText=N.innerText.slice(0,
-3);N.innerText+="\u2026"}}}catch(K){var Pa={error:K}}finally{try{V&&!V.done&&(O=T.return)&&O.call(T)}finally{if(Pa)throw Pa.error;}}}d&&d();t("data-deal-badge-automated")&&t("data-ad-deal-end-time")&&Gb();S=f;if(void 0!==S&&!window.sbxGwentClientDPR)try{window.sbxGwentClientDPR=!0,x((S?"Mobile":"Desktop")+"DPR"+(4>=Math.round(2*window.devicePixelRatio)/2?Math.round(2*window.devicePixelRatio)/2:"4Plus"))}catch(K){H(K)}}catch(K){H(K)}v=t("data-ad-feedback-label-id");q=t("data-ad-creative-list");r=
t("data-device-type")||"";p=t("data-tablet-env")||"";w=t("data-card-metrics-id")||"";n=t("data-slot")||"";A=aa(w,"creativeLevel");if(!v||!q)return[3,6];M.label=2;case 2:return M.trys.push([2,4,,5]),B=JSON.parse(q),[4,Ab(v,B,g,r,p,w,n,h,l,k,m)];case 3:return M.sent(),x("NewAdFeedbackImplementationEnabled_"+A),[3,5];case 4:return C=M.sent(),c&&Ma(),H("Failed to generate adFeedback rendering payload: "+C,"DSA/AdFeedback"),x("FallbackToOldAdFeedbackImplementation_"+A),[3,5];case 5:return[3,7];case 6:c&&
Ma(),x("FallbackToOldAdFeedbackImplementation_"+A),H("Missing adFeedbackLabelId or adCreativeList","DSA/AdFeedback"),M.label=7;case 7:return[2]}})})}},Jb=function(a){return ha["default"].createElement(a)},Kb=function(a,b){return Array.prototype.slice.call((b||ha["default"].cardRoot).querySelectorAll(a))},ca=function(){ca=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++){b=arguments[c];for(var e in b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e])}return a};return ca.apply(this,
arguments)},da=function(a,b,c,d){function e(f){return f instanceof c?f:new c(function(g){g(f)})}return new (c||(c=Promise))(function(f,g){function h(m){try{k(d.next(m))}catch(v){g(v)}}function l(m){try{k(d["throw"](m))}catch(v){g(v)}}function k(m){m.done?f(m.value):e(m.value).then(h,l)}k((d=d.apply(a,b||[])).next())})},ea=function(a,b){function c(k){return function(m){return d([k,m])}}function d(k){if(f)throw new TypeError("Generator is already executing.");for(;l&&(l=0,k[0]&&(e=0)),e;)try{if(f=1,
g&&(h=k[0]&2?g["return"]:k[0]?g["throw"]||((h=g["return"])&&h.call(g),0):g.next)&&!(h=h.call(g,k[1])).done)return h;if(g=0,h)k=[k[0]&2,h.value];switch(k[0]){case 0:case 1:h=k;break;case 4:return e.label++,{value:k[1],done:!1};case 5:e.label++;g=k[1];k=[0];continue;case 7:k=e.ops.pop();e.trys.pop();continue;default:if(!(h=e.trys,h=0<h.length&&h[h.length-1])&&(6===k[0]||2===k[0])){e=0;continue}if(3===k[0]&&(!h||k[1]>h[0]&&k[1]<h[3]))e.label=k[1];else if(6===k[0]&&e.label<h[1])e.label=h[1],h=k;else if(h&&
e.label<h[2])e.label=h[2],e.ops.push(k);else{h[2]&&e.ops.pop();e.trys.pop();continue}}k=b.call(a,e)}catch(m){k=[6,m],g=0}finally{f=h=0}if(k[0]&5)throw k[1];return{value:k[0]?k[1]:void 0,done:!0}}var e={label:0,sent:function(){if(h[0]&1)throw h[1];return h[1]},trys:[],ops:[]},f,g,h,l;return l={next:c(0),"throw":c(1),"return":c(2)},"function"===typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l},ab=function(a,b){var c=a.addEventListener,d=a.createElement,e=a.log,f=b.generateModalContent;
if(!P||!P.AUI_BUILD_DATE)throw Error("aui is unavailable");P.when("A").execute(function(g){var h=g.capabilities.mobile;P.when(h?"a-secondary-view":"a-modal").execute(function(l){return da(void 0,void 0,void 0,function(){var k;return ea(this,function(m){k=function(v,q){return da(void 0,void 0,void 0,function(){var r,p,w,n,A,B,C,M,S,Y;return ea(this,function(O){switch(O.label){case 0:r=v.currentTarget;if(l.get(r))return[2];if(!(r instanceof HTMLElement))return e("energy-efficiency-".concat(q," click target not an html element"),
"WARN"),[2];try{p=JSON.parse(null!==(Y=r.dataset.content)&&void 0!==Y?Y:"{}")}catch(V){return e(V,"ERROR"),e("failed to parse eel data","ERROR"),[2]}a:{var D=p;var Q=0;for(D=[Object.getOwnPropertyDescriptor(D,"closeButtonLabel"),Object.getOwnPropertyDescriptor(D,"ficheImageUrl"),Object.getOwnPropertyDescriptor(D,"ficheTitle"),Object.getOwnPropertyDescriptor(D,"id"),Object.getOwnPropertyDescriptor(D,"labelImageUrl"),Object.getOwnPropertyDescriptor(D,"labelTitle"),Object.getOwnPropertyDescriptor(D,
"modalTitle")];Q<D.length;Q++){var T=D[Q];if("string"!==typeof(null===T||void 0===T?void 0:T.value)){Q=!1;break a}}Q=!0}if(!Q)return e("energy-efficiency-".concat(q," data is invalid: ").concat(r.dataset.content),"WARN"),[2];if(!("fiche"!==q||p.ficheImageUrl&&p.ficheTitle))return e("energy-efficiency-".concat(q," data is missing expected fiche data: ").concat(JSON.stringify(p)),"WARN"),[2];O.label=1;case 1:return O.trys.push([1,5,,6]),w="fiche"===q?p.ficheTitle:p.labelTitle,n="fiche"===q?p.ficheImageUrl:
p.labelImageUrl,A=d("img"),A.setAttribute("alt",w),A.setAttribute("src",n),f?[4,f(ca(ca({},p),{activeTab:q}))]:[3,3];case 2:return C=O.sent(),[3,4];case 3:C=null,O.label=4;case 4:return B=C,M=l.create(r,{closeButtonLabel:p.closeButtonLabel,header:h?void 0:p.modalTitle,inlineContent:h||!B?A.outerHTML:B.outerHTML,popoverLabel:h?w:p.modalTitle,width:h?void 0:"800"}),M.show(),[3,6];case 5:return S=O.sent(),e(S,"ERROR"),e("failed to create eel popover","ERROR"),[3,6];case 6:return[2]}})})};c("dare-ee--label-click",
"click",function(v){return da(void 0,void 0,void 0,function(){return ea(this,function(q){switch(q.label){case 0:return[4,k(v,"label")];case 1:return q.sent(),[2]}})})});c("dare-ee--fiche-click","click",function(v){return da(void 0,void 0,void 0,function(){return ea(this,function(q){switch(q.label){case 0:return[4,k(v,"fiche")];case 1:return q.sent(),[2]}})})});return[2]})})})})},$a=function(a){void 0===a&&(a=!0);return{addEventListener:fa.setup().define,createElement:a?Jb:ib,getElement:function(b,
c){a?(c=c||ha["default"].cardRoot,b=!b||ia(c,b)?c:c.querySelector(b)):b=u(b,c);return null!==b&&void 0!==b?b:void 0},getElements:a?Kb:z,log:function(b,c,d){return ua.log(b,c,null!==d&&void 0!==d?d:"SBX_GWENT_DARE")}}},Lb=function(){return y.__awaiter(void 0,void 0,void 0,function(){var a,b,c,d,e,f,g;return y.__generator(this,function(h){switch(h.label){case 0:b=t("data-device-type");c=t("data-ad-feedback-payload");try{c&&(d=null===(g=null===(f=JSON.parse(c))||void 0===f?void 0:f.adPlacementMetaData)||
void 0===g?void 0:g.pageType)}catch(l){I["default"].log("Failed to parse adFeedbackPayload "+c,"ERROR"),I["default"].log(l,"ERROR")}h.label=1;case 1:return h.trys.push([1,6,,7]),"Search"!==d||"tablet"!==b&&"mobile"!==b?[3,3]:[4,new Promise(function(l,k){sa(["./es3@index"],l,k)})];case 2:return a=h.sent().enableAdFeedback,[3,5];case 3:return[4,new Promise(function(l,k){sa(["./es3@index2"],l,k)})];case 4:a=h.sent().enableAdFeedback,h.label=5;case 5:return[2,a];case 6:return e=h.sent(),I["default"].log("Failed to load adFeedback module",
"ERROR"),I["default"].log(e,"ERROR"),[3,7];case 7:return[2]}})})},Mb={T1:0,T2:1E3,T3:2E3,T4:3E3,T5:4E3,T6:5E3,T7:6E3,T8:7E3,T9:8E3},Nb=function(a){"complete"===document.readyState||"interactive"===document.readyState?a():document.addEventListener("DOMContentLoaded",a)};ta._operationNames=["generateModalContent"];ta.card=function(){return y.__awaiter(void 0,void 0,void 0,function(){var a;return y.__generator(this,function(b){switch(b.label){case 0:return[4,Lb()];case 1:return a=b.sent(),Ib({enableAdFeedback:a,
loadAdFeedback:!0,onLoad:function(){F.log("LifestyleOnLoad");var c=Sa.setup().generateModalContent;Za(c);var d=t("data-lazy-load");d&&Nb(function(){setTimeout(function(){var e=u("img[data-lifestyle-img]"),f=e&&e.getAttribute("src");if(e&&f){f=f.replace("_QL50_","_QL70_");var g=f.replace,h=window.innerWidth,l=2<=window.devicePixelRatio?2:1,k=405*l;1470<=h?k=507*l:1400<=h?k=468*l:1250<=h&&(k=430*l);f=g.call(f,"_SX405_","_SX"+k+"_");e.setAttribute("src",f);F.log("LazyLoadLifestyle"+d)}},Mb[d]||0)})},
onInit:function(){try{P.when("af").execute(function(){return F.log("LifestyleAF")})}catch(c){F.log("LifestyleAFError")}},creativeImageContainer:["container"],isMobile:!1})(),[2]}})})}});