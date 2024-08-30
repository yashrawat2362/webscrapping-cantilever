(function(f){var h=window.AmazonUIPageJS||window.P,l=h._namespace||h.attributeErrors,m=l?l("AllOffersDisplayIngressAssets",""):h;m.guardFatal?m.guardFatal(f)(m,window):m.execute(function(){f(m,window)})})(function(f,h,l){f.execute("all-offers-display-ingress-init",function(){var m=h.uet,n=h.uex;"function"===typeof m&&m("bb","aod-ingress-assets-load-time",{wb:1});f.when("A","jQuery","all_offers_display_ingress_utils","all-offers-display-register-state","all_offers_display_ingress_csm_counters").execute("all_offers_display_ingress_load_AOD_assets",
function(a,d,c,g,e){function k(b){f.now().execute(function(c){c!==l||g.isMarkerOverrideRegistered()||("function"===typeof q&&q("bb","aod-main-assets-injection",{wb:1}),f.register("aodIngressClick"),f.register("aodDeclarativeEvent",function(){return b}),g.setMarkerOverrideTriggered())})}var q=h.uet;a.state("aod:assetsLoaded",{isAodAssetsLoaded:!0});e.triggerUnitCounter("aodIngressAssetsLoadCtr");a.declarative("show-all-offers-display","click",function(b){b.$event.preventDefault();b.$event.stopPropagation();
b&&b.data&&b.data.ingressName&&e.incrementAndTriggerCounter(b.data.ingressName+"LoadAod");b&&b.data&&b.data.daodiDesktopExp2Treatment&&e.incrementAndTriggerCounter("daodiDesktopExp2MetricTreatment"+b.data.daodiDesktopExp2Treatment);!a.state("aod:assets2Loaded")&&c.isClickOnAODIngressSupported(b)&&(k(b),f.when("aod-load-event-handler","aodDeclarativeEvent").execute(function(c,b){b&&b.data&&(b.data.pc="dp");c.renderAodAction(b)}))});a.declarative("s-show-all-offers-display","click",function(b){b.$event.preventDefault();
b.$event.stopPropagation();!a.state("aod:assets2Loaded")&&c.isClickOnAODIngressSupported(b)&&(k(b),f.when("search-all-offers-display-util","aodDeclarativeEvent").execute(function(b,c){b.searchOnClickHandler(c)}))});a.declarative("all-offers-display-show-from-morpheus","click",function(b){b.$event.preventDefault();b.$event.stopPropagation();!a.state("aod:assets2Loaded")&&c.isClickOnAODIngressSupported(b)&&(k(b),f.when("all-offers-display-morpheus-util","aodDeclarativeEvent").execute(function(b,c){b.openAODFromMorpheus(c)}))})});
f.when("A","jQuery","all-offers-display-register-state","all_offers_display_ingress_csm_counters").execute("all-offers-display-enable-compare",function(a,d,c,g){var e=h.uet;a.state("aod:assets2Loaded")||(a=h.location.href.split("?"),1<a.length&&(a=a[1].toLowerCase().split(/[&,#]/))&&-1!==a.indexOf("aod\x3d1")&&f.now().execute(function(d){d===l&&(c.isMarkerOverrideRegistered()?g.incrementAndTriggerCounter("aodAutoLoadMarkerOverrideSetCtr"):(g.triggerUnitCounter("aodAutoLoadAssetsRequestedCtr"),"function"===
typeof e&&e("bb","aod-main-assets-injection-auto-load",{wb:1}),f.register("aodIngressClick"),c.setMarkerOverrideTriggered()))}))});f.when("A","jQuery","all_offers_display_ingress_olp_hyperlink").register("all_offers_display_ingress_utils",function(a,d,c){return{isClickOnAODIngressSupported:function(d){return c.getOlpHyperlink(d)?!0:!1}}});f.register("all_offers_display_ingress_csm_counters",function(){var a=h.ue;return{incrementAndTriggerCounter:function(d){a&&a.count&&a.count(d,(a.count(d)||0)+1)},
triggerUnitCounter:function(d){a&&a.count&&a.count(d,1)}}});f.when("all_offers_display_ingress_csm_counters").register("all_offers_display_ingress_aod_supported",function(a){return{isPropertySupported:function(d,c,g){var e=typeof d[c]===g;if(!e){var k={};d.tagName&&(k.tagName=d.tagName);d.getAttribute&&"function"===typeof d.getAttribute&&(d.getAttribute("id")&&(k.id=d.getAttribute("id")),d.getAttribute("class")&&(k.class=d.getAttribute("class")),d.getAttribute("href")&&(k.href=d.getAttribute("href")));
d="aodPropertyUnsupportedMessage, element: "+JSON.stringify(k);f.log(d+(", propertyName: "+c+", propertyType: "+g),"WARN","aodPropertyUnsupportedMessage");a.triggerUnitCounter("aodPropertyUnsupportedMessage")}return e}}});f.when("A","jQuery","all_offers_display_ingress_aod_supported").register("all_offers_display_ingress_olp_hyperlink",function(a,d,c){return{getOlpHyperlink:function(a){if(a&&a.$event&&a.$event.target){var e=a.$event.target;if("A"===e.nodeName&&e.href)return e.href;if(c.isPropertySupported(a.$event.target,
"closest","function"))return(a=e.closest("a"))?a.href:null;if(a=d(e).closest("a"))return a.attr("href")}return null}}});f.when().register("all-offers-display-register-state",function(){var a=!1;return{isMarkerOverrideRegistered:function(){return a},setMarkerOverrideTriggered:function(){a=!0}}});"use strict";f.when("A","mbc_constants","all_offers_display_ingress_csm_counters").register("mbc_atc_cart_api_ajax_controller",function(a,d,c){var g=l,e;return{mbcAtcAjaxCall:function(e){g?c.incrementAndTriggerCounter(d.MBC_ATC_CLICK_CANCELLED_CSM_METRIC):
g=a.$.ajax({url:e.url,type:e.type,data:e.data,cache:!1,headers:e.headers,xhrFields:e.xhrFields,success:e.successHandler,error:e.errorHandler,timeout:e.timeout||1E4})},updateCartCount:function(a){f.when("EWC").execute(function(c){e=c});e!==l&&"function"===typeof e.refresh?(e.refresh(),c.triggerUnitCounter(d.MBC_EWC_REFRESH_API_CSM_METRIC_SCOPE_NAME)):(f.when("nav.setCartCount").execute(function(c){c(a)}),c.triggerUnitCounter(d.MBC_NAV_API_CSM_METRIC_SCOPE_NAME))},resetAjaxHandler:function(){g=l}}});
"use strict";f.when("A","mbc_constants","mbc_cart_api_handler").execute("mbc_atc_action_handler",function(a,d,c){a.declarative("mbc-atc-action",d.MBC_WIDGET_TRIGGER_EVENTS,function(a){c.addToCart(a.data,!0)})});"use strict";f.when("A","jQuery","mbc_constants","all_offers_display_ingress_csm_counters","mbc_atc_cart_api_ajax_controller").register("mbc_cart_api_handler",function(a,d,c,f,e){function g(b){f.triggerUnitCounter(c.MBC_CART_API_ATC_CSM_FAILURE_METRIC_SCOPE_NAME);var a=b.offerIndex;d(c.MBC_OFFER_ADDED_TO_CART+
a).addClass(c.AUI_HIDE_ELEMENT_CSS_NAME);d(c.MBC_OFFER_NOT_ADDED_TO_CART+a).removeClass(c.AUI_HIDE_ELEMENT_CSS_NAME);h(b.offerIndex)}function h(a){d(c.MBC_OFFER_VIEW_CART_BUTTON+a).removeClass(c.AUI_HIDE_ELEMENT_CSS_NAME);d(c.MBC_OFFER_ATC_BUTTON_ID+a).addClass(c.AUI_HIDE_ELEMENT_CSS_NAME)}return{addToCart:function(a,k){var b=d(c.MBC_ATC_AJAX_ENDPOINT).val(),l=d(c.MBC_ATC_CSRF_TOKEN).val(),m=d(c.MBC_LANGUAGE_HEADER).val(),n={items:[{asin:a.asin,offerListingId:a.oid,quantity:a.minQty}]},p=document.querySelector('meta[name\x3d"encrypted-slate-token"]');
b={url:"https://"+b+"?ref\x3d"+a.refTag+"\x26sr\x3d"+a.sr+"\x26qid\x3d"+a.qid,type:"POST",data:JSON.stringify(n),headers:{"Accept-Language":m,Accept:c.MBC_ATC_CART_API_HEADER_ACCEPT,"x-api-csrf-token":l,"Content-Type":c.MBC_ATC_CART_API_HEADER_CONTENT_TYPE,"x-amzn-encrypted-slate-token":p&&p.content?p.content:""},xhrFields:{withCredentials:!0},timeout:1E4,successHandler:function(b){b&&b.entity&&b.entity.items&&b.entity.items[0]&&0<b.entity.items[0].quantity?(b.entity.count&&b.entity.count.entity&&
b.entity.count.entity.items?e.updateCartCount(b.entity.count.entity.items):(f.triggerUnitCounter(c.MBC_CART_API_SUCCESS_COUNT_FAILURE_CSM_METRIC),e.updateCartCount(b.entity.items[0].quantity)),f.triggerUnitCounter(c.MBC_CART_API_ATC_CSM_SUCCESS_METRIC_SCOPE_NAME),k&&d(c.MBC_OFFER_ADDED_TO_CART+a.offerIndex).removeClass(c.AUI_HIDE_ELEMENT_CSS_NAME),h(a.offerIndex)):g(a);e.resetAjaxHandler()},errorHandler:function(b){422===b.status&&(b=JSON.parse(b.responseText))&&b.entity&&b.entity.items&&b.entity.items[0]&&
(b.entity.count&&b.entity.count.entity&&b.entity.count.entity.items?e.updateCartCount(b.entity.count.entity.items):(f.triggerUnitCounter(c.MBC_CART_API_ERROR_COUNT_FAILURE_CSM_METRIC),e.updateCartCount(b.entity.items[0].quantity)));g(a);e.resetAjaxHandler()}};e.mbcAtcAjaxCall(b)}}});f.register("mbc_constants",function(){return{MBC_ATC_AJAX_ENDPOINT:"#mbc-atc-ajax-endpoint",MBC_ATC_CSRF_TOKEN:"#mbc-atc-csrf-token",MBC_LANGUAGE_HEADER:"#mbc-language",MBC_OFFER_ADDED_TO_CART:"#mbc-offer-added-to-cart-",
MBC_OFFER_NOT_ADDED_TO_CART:"#mbc-offer-not-added-to-cart-",MBC_OFFER_VIEW_CART_BUTTON:"#mbc-offer-view-cart-",MBC_OFFER_ATC_BUTTON_ID:"#mbc-buybutton-addtocart-",MBC_ATC_CLICK_CANCELLED_CSM_METRIC:"mbc-atc-click-cancelled",MBC_ATC_CART_API_HEADER_ACCEPT:'application/vnd.com.amazon.api+json; type\x3d"cart.add-items/v1"',MBC_ATC_CART_API_HEADER_CONTENT_TYPE:'application/vnd.com.amazon.api+json; type\x3d"cart.add-items.request/v1"',MBC_NAV_API_CSM_METRIC_SCOPE_NAME:"mbc-nav-api-called",MBC_EWC_REFRESH_API_CSM_METRIC_SCOPE_NAME:"mbc-ewc-refresh-api-called",
MBC_CART_API_SUCCESS_COUNT_FAILURE_CSM_METRIC:"mbc-cart-api-success-response-count-failure",MBC_CART_API_ERROR_COUNT_FAILURE_CSM_METRIC:"mbc-cart-api-error-response-count-failure",MBC_CART_API_ATC_CSM_SUCCESS_METRIC_SCOPE_NAME:"mbc-cart-api-atc-success",MBC_CART_API_ATC_CSM_FAILURE_METRIC_SCOPE_NAME:"mbc-cart-api-atc-failure",MBC_WIDGET_TRIGGER_EVENTS:"click",AUI_HIDE_ELEMENT_CSS_NAME:"aok-hidden"}});"function"===typeof n&&n("ld","aod-ingress-assets-load-time",{wb:1})})});