// SVG Injector by iconics
!function(t,e){"use strict";var r="file:"===t.location.protocol,n=e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),o={},i=0,a=[],s={},l=function(t){return t.cloneNode(!0)},u=function(t,e){a[t]=a[t]||[],a[t].push(e)},c=function(t){for(var e=0,r=a[t].length;r>e;e++)!function(e){setTimeout(function(){a[t][e](l(o[t]))},0)}(e)},f=function(e,n){if(void 0!==o[e])o[e]instanceof SVGSVGElement?n(o[e].cloneNode(!0)):u(e,n);else{if(!t.XMLHttpRequest)return n("Browser does not support XMLHttpRequest"),!1;o[e]={},u(e,n);var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4===i.readyState){if(404===i.status||null===i.responseXML)return n("Unable to load SVG file: "+e),r&&n("Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver."),n(),!1;if(!(200===i.status||r&&0===i.status))return n("There was a problem injecting the SVG: "+i.status+" "+i.statusText),!1;if(i.responseXML instanceof Document)o[e]=i.responseXML.documentElement;else if(DOMParser&&DOMParser instanceof Function){var t;try{var a=new DOMParser;t=a.parseFromString(i.responseText,"text/xml")}catch(s){t=void 0}if(!t||t.getElementsByTagName("parsererror").length)return n("Unable to parse SVG file: "+e),!1;o[e]=t.documentElement}c(e)}},i.open("GET",e),i.overrideMimeType&&i.overrideMimeType("text/xml"),i.send()}},p=function(e,r,o,a){var l=e.getAttribute("data-src")||e.getAttribute("src");return/svg$/i.test(l)?n?(e.setAttribute("src",""),void f(l,function(n){if(void 0===n||"string"==typeof n)return a(n),!1;var o=e.getAttribute("id");o&&n.setAttribute("id",o);var u=e.getAttribute("title");u&&n.setAttribute("title",u);var c=e.getAttribute("class");if(c){var f=[n.getAttribute("class"),"iconic-injected-svg",c].join(" ");n.setAttribute("class",f)}var p=e.getAttribute("style");p&&n.setAttribute("style",p);var d=[].filter.call(e.attributes,function(t){return/^data-\w[\w\-]*$/.test(t.name)});Array.prototype.forEach.call(d,function(t){t.name&&t.value&&n.setAttribute(t.name,t.value)});for(var v,h=n.querySelectorAll("defs clipPath[id]"),g=0,y=h.length;y>g;g++){v=h[g].id+"-"+i;for(var m=n.querySelectorAll('[clip-path*="'+h[g].id+'"]'),b=0,A=m.length;A>b;b++)m[b].setAttribute("clip-path","url(#"+v+")");h[g].id=v}n.removeAttribute("xmlns:a");for(var w,S,x=n.querySelectorAll("script"),j=[],T=0,G=x.length;G>T;T++)S=x[T].getAttribute("type"),S&&"application/ecmascript"!==S&&"application/javascript"!==S||(w=x[T].innerText||x[T].textContent,j.push(w),n.removeChild(x[T]));if(j.length>0&&("always"===r||"once"===r&&!s[l])){for(var M=0,E=j.length;E>M;M++)new Function(j[M])(t);s[l]=!0}e.parentNode.replaceChild(n,e),i++,a(n)})):void(o?(e.setAttribute("src",o+"/"+l.split("/").pop().replace(".svg",".png")),a(null)):a("This browser does not support SVG and no PNG fallback was defined.")):void a("Attempted to inject a file with a non-svg extension: "+l)};Array.prototype.forEach||(Array.prototype.forEach=function(t,e){if(void 0===this||null===this||"function"!=typeof t)throw new TypeError;var r,n=this.length>>>0;for(r=0;n>r;++r)r in this&&t.call(e,this[r],r,this)});var d=function(t,e,r){e=e||{};var n=e.evalScripts||"always",o=e.pngFallback||!1,i=e.each;if(void 0!==t.length){var a=0;Array.prototype.forEach.call(t,function(e){p(e,n,o,function(e){i&&"function"==typeof i&&i(e),r&&t.length===++a&&r(a)})})}else null!==t?p(t,n,o,function(t){i&&"function"==typeof i&&i(t),r&&r(1)}):r&&r(0)};"object"==typeof module&&"object"==typeof module.exports?module.exports=exports=d:"function"==typeof define&&define.amd?define(function(){return d}):"object"==typeof t&&(t.SVGInjector=d)}(window,document);
//# sourceMappingURL=./svg-injector.map.js

/*!
 * Shuffle.js by @Vestride
 * Categorize, sort, and filter a responsive grid of items.
 * Dependencies: jQuery 1.9+, Modernizr 2.6.2+
 * @license MIT license
 * @version 2.1.2
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery","modernizr"],a):a(window.jQuery,window.Modernizr)}(function(a,b,c){"use strict";function d(a){return a?a.replace(/([A-Z])/g,function(a,b){return"-"+b.toLowerCase()}).replace(/^ms-/,"-ms-"):""}function e(b,c,d){var e,f,g,h=null,i=0;d=d||{};var j=function(){i=d.leading===!1?0:a.now(),h=null,g=b.apply(e,f),e=f=null};return function(){var k=a.now();i||d.leading!==!1||(i=k);var l=c-(k-i);return e=this,f=arguments,0>=l||l>c?(clearTimeout(h),h=null,i=k,g=b.apply(e,f),e=f=null):h||d.trailing===!1||(h=setTimeout(j,l)),g}}if("object"!=typeof b)throw new Error("Shuffle.js requires Modernizr.\nhttp://vestride.github.io/Shuffle/#dependencies");var f=b.prefixed("transition"),g=b.prefixed("transitionDelay"),h=b.prefixed("transitionDuration"),i={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[f],j=b.prefixed("transform"),k=d(j),l=b.csstransforms&&b.csstransitions,m=b.csstransforms3d,n="shuffle",o="all",p="groups",q=1,r=.001,s=0,t=function(b,c){c=c||{},a.extend(this,t.options,c,t.settings),this.$el=a(b),this.$window=a(window),this.unique="shuffle_"+s++,this._fire(t.EventType.LOADING),this._init(),setTimeout(a.proxy(function(){this.initialized=!0,this._fire(t.EventType.DONE)},this),16)};return t.EventType={LOADING:"loading",DONE:"done",SHRINK:"shrink",SHRUNK:"shrunk",FILTER:"filter",FILTERED:"filtered",SORTED:"sorted",LAYOUT:"layout",REMOVED:"removed"},t.prototype={_init:function(){var b,c,d=this,e=a.proxy(d._onResize,d),g=d.throttle?d.throttle(e,d.throttleTime):e,h=d.initialSort?d.initialSort:null;d._layoutList=[],d._shrinkList=[],d._setVars(),d._resetCols(),d._addClasses(),d._initItems(),d.$window.on("resize."+n+"."+d.unique,g),b=d.$el.css(["paddingLeft","paddingRight","position"]),c=d._getOuterWidth(d.$el[0]),"static"===b.position&&(d.$el[0].style.position="relative"),d.offset={left:parseInt(b.paddingLeft,10)||0,top:parseInt(b.paddingTop,10)||0},d._setColumns(parseInt(c,10)),d.shuffle(d.group,h),d.supported&&setTimeout(function(){d._setTransitions(),d.$el[0].style[f]="height "+d.speed+"ms "+d.easing},0)},_addClasses:function(){this.$el.addClass(n),this.$items.addClass("shuffle-item filtered")},_setVars:function(){var b=this,c=b.columnWidth;b.$items=b._getItems(),0===c&&null!==b.sizer&&(c=b.sizer),"string"==typeof c?b.$sizer=b.$el.find(c):c&&c.nodeType&&1===c.nodeType?b.$sizer=a(c):c&&c.jquery&&(b.$sizer=c),b.$sizer&&b.$sizer.length&&(b.useSizer=!0,b.sizer=b.$sizer[0])},_filter:function(b,d){var e=this,f=d!==c,g=f?d:e.$items,h=a();return b=b||e.lastFilter,e._fire(t.EventType.FILTER),a.isFunction(b)?g.each(function(){var c=a(this);b.call(c[0],c,e)&&(h=h.add(c))}):(e.group=b,b===o?h=g:g.each(function(){var c=a(this),d=c.data(p),f=e.delimeter&&!a.isArray(d)?d.split(e.delimeter):d;a.inArray(b,f)>-1&&(h=h.add(c))})),e._toggleFilterClasses(g,h),g=null,d=null,h},_toggleFilterClasses:function(b,c){var d="concealed",e="filtered";b.filter(c).each(function(){var b=a(this);b.hasClass(d)&&b.removeClass(d),b.hasClass(e)||b.addClass(e)}),b.not(c).each(function(){var b=a(this);b.hasClass(d)||b.addClass(d),b.hasClass(e)&&b.removeClass(e)})},_initItems:function(a){a=a||this.$items,a.css(this.itemCss).data("position",{x:0,y:0})},_updateItemCount:function(){this.visibleItems=this.$items.filter(".filtered").length},_setTransition:function(a){a.style[f]=k+" "+this.speed+"ms "+this.easing+", opacity "+this.speed+"ms "+this.easing},_setTransitions:function(a){var b=this;a=a||b.$items,a.each(function(){b._setTransition(this)})},_setSequentialDelay:function(b){var c=this;c.supported&&a.each(b,function(b,d){d.style[g]="0ms,"+(b+1)*c.sequentialFadeDelay+"ms",a(d).on(i+"."+c.unique,function(b){var d=b.currentTarget;d===b.target&&(d.style[g]="0ms",a(d).off(i+"."+c.unique))})})},_getItems:function(){return this.$el.children(this.itemSelector)},_getPreciseDimension:function(b,c){var d;return d=window.getComputedStyle?window.getComputedStyle(b,null)[c]:a(b).css(c),parseFloat(d)},_getOuterWidth:function(b,c){var d=b.offsetWidth;if(c){var e=a(b).css(["marginLeft","marginRight"]),f=parseFloat(e.marginLeft)||0,g=parseFloat(e.marginRight)||0;d+=f+g}return d},_getOuterHeight:function(b,c){var d=b.offsetHeight;if(c){var e=a(b).css(["marginTop","marginBottom"]),f=parseFloat(e.marginTop)||0,g=parseFloat(e.marginBottom)||0;d+=f+g}return d},_getColumnSize:function(b,c){var d;return d=a.isFunction(this.columnWidth)?this.columnWidth(c):this.useSizer?this._getPreciseDimension(this.sizer,"width"):this.columnWidth?this.columnWidth:this.$items.length>0?this._getOuterWidth(this.$items[0],!0):c,0===d&&(d=c),d+b},_getGutterSize:function(b){var c;return c=a.isFunction(this.gutterWidth)?this.gutterWidth(b):this.useSizer?this._getPreciseDimension(this.sizer,"marginLeft"):this.gutterWidth},_setColumns:function(a){var b=a||this._getOuterWidth(this.$el[0]),c=this._getGutterSize(b),d=this._getColumnSize(c,b),e=(b+c)/d;Math.abs(Math.round(e)-e)<.03&&(e=Math.round(e)),this.cols=Math.max(Math.floor(e),1),this.containerWidth=b,this.colWidth=d},_setContainerSize:function(){this.$el.css("height",Math.max.apply(Math,this.colYs))},_fire:function(a,b){this.$el.trigger(a+"."+n,b&&b.length?b:[this])},_layout:function(b,c,d){var e=this;c=c||e._filterEnd,a.each(b,function(b,f){var g=a(f),h=g.data(),i=h.position,j=e._getItemPosition(g);if(g.data("position",j),j.x!==i.x||j.y!==i.y||h.scale!==q){var k={$item:g,x:j.x,y:j.y,scale:q};d?(k.skipTransition=!0,k.opacity=0):(k.opacity=1,k.callback=c),e.styleQueue.push(k),e._layoutList.push(g[0])}}),e._processStyleQueue(),e._setContainerSize()},_resetCols:function(){var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0)},_reLayout:function(){this._resetCols(),this.lastSort?this.sort(this.lastSort,!0):this._layout(this.$items.filter(".filtered").get(),this._filterEnd)},_getItemPosition:function(a){var b=this,c=b._getOuterWidth(a[0],!0),d=c/b.colWidth;Math.abs(Math.round(d)-d)<.03&&(d=Math.round(d));var e=Math.min(Math.ceil(d),b.cols);if(1===e)return b._placeItem(a,b.colYs);var f,g,h=b.cols+1-e,i=[];for(g=0;h>g;g++)f=b.colYs.slice(g,g+e),i[g]=Math.max.apply(Math,f);return b._placeItem(a,i)},_placeItem:function(a,b){for(var c=this,d=Math.min.apply(Math,b),e=0,f=0,g=b.length;g>f;f++)if(b[f]>=d-c.buffer&&b[f]<=d+c.buffer){e=f;break}var h={x:Math.round(c.colWidth*e+c.offset.left),y:Math.round(d+c.offset.top)},i=d+c._getOuterHeight(a[0],!0),j=c.cols+1-g;for(f=0;j>f;f++)c.colYs[e+f]=i;return h},_shrink:function(b,c){var d=this,e=b||d.$items.filter(".concealed");c=c||d._shrinkEnd,e.length&&(d._fire(t.EventType.SHRINK),e.each(function(){var b=a(this),e=b.data(),f=e.scale===r;if(!f){var g={$item:b,x:e.position.x,y:e.position.y,scale:r,opacity:0,callback:c};d.styleQueue.push(g),d._shrinkList.push(b[0])}}))},_onResize:function(){if(this.enabled&&!this.destroyed){var a=this._getOuterWidth(this.$el[0]);a!==this.containerWidth&&this.resized()}},_getItemTransformString:function(a,b,c){return m?"translate3d("+a+"px, "+b+"px, 0) scale3d("+c+", "+c+", 1)":"translate("+a+"px, "+b+"px) scale("+c+", "+c+")"},_getStylesForTransition:function(a){var b={opacity:a.opacity};return this.supported?a.x!==c&&(b[j]=this._getItemTransformString(a.x,a.y,a.scale)):(b.left=a.x,b.top=a.y),1===a.opacity&&(b.visibility="visible"),b},_transition:function(a){a.$item.data("scale",a.scale);var b=this._getStylesForTransition(a);this._startItemAnimation(a.$item,b,a.callback)},_startItemAnimation:function(b,c,d){var e=1===c.opacity,f=a.proxy(this._handleItemAnimationEnd,this,d||a.noop,b[0],e);this.supported?(b.css(c),this.initialized?b.on(i+".shuffleitem",f):f()):("visibility"in c&&(b.css("visibility",c.visibility),delete c.visibility),b.stop(!0).animate(c,this.speed,"swing",f))},_handleItemAnimationEnd:function(b,c,d,e){if(e){if(e.target!==c)return;a(c).off(".shuffleitem")}this._layoutList.length>0&&a.inArray(c,this._layoutList)>-1?(this._fire(t.EventType.LAYOUT),b.call(this),this._layoutList.length=0):this._shrinkList.length>0&&a.inArray(c,this._shrinkList)>-1&&(b.call(this),this._shrinkList.length=0),d||(c.style.visibility="hidden")},_processStyleQueue:function(){var b=this;a.each(this.styleQueue,function(a,c){c.skipTransition?b._skipTransition(c.$item[0],function(){c.$item.css(b._getStylesForTransition(c))}):b._transition(c)}),b.styleQueue.length=0},_shrinkEnd:function(){this._fire(t.EventType.SHRUNK)},_filterEnd:function(){this._fire(t.EventType.FILTERED)},_sortEnd:function(){this._fire(t.EventType.SORTED)},_skipTransition:function(b,c,d){var e=b.style[h];b.style[h]="0ms",a.isFunction(c)?c():b.style[c]=d;var f=b.offsetWidth;f=null,b.style[h]=e},_addItems:function(a,b,d){var e=this;e.supported||(b=!1),a.addClass("shuffle-item"),e._initItems(a),e._setTransitions(a),e.$items=e._getItems(),a.css("opacity",0);var f=e._filter(c,a),g=f.get();e._updateItemCount(),b?(e._layout(g,null,!0),d&&e._setSequentialDelay(f),e._revealAppended(f)):e._layout(g)},_revealAppended:function(b){var c=this;setTimeout(function(){b.each(function(b,d){c._transition({$item:a(d),opacity:1,scale:q})})},c.revealAppendedDelay)},shuffle:function(a,b){var c=this;c.enabled&&(a||(a=o),c._filter(a),c.lastFilter=a,c._updateItemCount(),c._shrink(),b&&(c.lastSort=b),c._reLayout())},sort:function(a,b){var c=this,d=c.$items.filter(".filtered").sorted(a);b||c._resetCols(),c._layout(d,function(){b&&c._filterEnd(),c._sortEnd()}),c.lastSort=a},resized:function(a){this.enabled&&(a||this._setColumns(),this._reLayout())},layout:function(){this.update(!0)},update:function(a){this.resized(a)},appended:function(a,b,c){b=b===!1?!1:!0,c=c===!1?!1:!0,this._addItems(a,b,c)},disable:function(){this.enabled=!1},enable:function(a){this.enabled=!0,a!==!1&&this.update()},remove:function(a){if(a.length&&a.jquery){var b=this;return b._shrink(a,function(){var b=this;a.remove(),setTimeout(function(){b.$items=b._getItems(),b.layout(),b._updateItemCount(),b._fire(t.EventType.REMOVED,[a,b]),a=null},0)}),b._processStyleQueue(),b}},destroy:function(){var a=this;a.$window.off("."+a.unique),a.$el.removeClass(n).removeAttr("style").removeData(n),a.$items.removeAttr("style").removeClass("concealed filtered shuffle-item"),a.$window=null,a.$items=null,a.$el=null,a.$sizer=null,a.sizer=null,a.destroyed=!0}},t.options={group:o,speed:250,easing:"ease-out",itemSelector:"",sizer:null,gutterWidth:0,columnWidth:0,delimeter:null,buffer:0,initialSort:null,throttle:e,throttleTime:300,sequentialFadeDelay:150,supported:l},t.settings={$sizer:null,useSizer:!1,itemCss:{position:"absolute",top:0,left:0},offset:{top:0,left:0},revealAppendedDelay:300,enabled:!0,destroyed:!1,initialized:!1,styleQueue:[]},a.fn.shuffle=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),e=d.data(n);e||(e=new t(d,b),d.data(n,e)),"string"==typeof b&&e[b]&&e[b].apply(e,c)})},a.fn.sorted=function(b){var d=a.extend({},a.fn.sorted.defaults,b),e=this.get(),f=!1;return e.length?d.randomize?a.fn.sorted.randomize(e):(d.by!==a.noop&&null!==d.by&&d.by!==c&&e.sort(function(b,e){if(f)return 0;var g=d.by(a(b)),h=d.by(a(e));return g===c&&h===c?(f=!0,0):"sortFirst"===g||"sortLast"===h?-1:"sortLast"===g||"sortFirst"===h?1:h>g?-1:g>h?1:0}),f?this.get():(d.reverse&&e.reverse(),e)):[]},a.fn.sorted.defaults={reverse:!1,by:null,randomize:!1},a.fn.sorted.randomize=function(a){var b,c,d=a.length;if(!d)return a;for(;--d;)c=Math.floor(Math.random()*(d+1)),b=a[c],a[c]=a[d],a[d]=b;return a},t});

/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 1.0.2
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */

/*jslint browser:true, node:true*/
/*global define, Event, Node*/

function FastClick(e,t){"use strict";function r(e,t){return function(){return e.apply(t,arguments)}}var n;t=t||{};this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=t.touchBoundary||10;this.layer=e;this.tapDelay=t.tapDelay||200;if(FastClick.notNeeded(e)){return}var i=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"];var s=this;for(var o=0,u=i.length;o<u;o++){s[i[o]]=r(s[i[o]],s)}if(deviceIsAndroid){e.addEventListener("mouseover",this.onMouse,true);e.addEventListener("mousedown",this.onMouse,true);e.addEventListener("mouseup",this.onMouse,true)}e.addEventListener("click",this.onClick,true);e.addEventListener("touchstart",this.onTouchStart,false);e.addEventListener("touchmove",this.onTouchMove,false);e.addEventListener("touchend",this.onTouchEnd,false);e.addEventListener("touchcancel",this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){e.removeEventListener=function(t,n,r){var i=Node.prototype.removeEventListener;if(t==="click"){i.call(e,t,n.hijacked||n,r)}else{i.call(e,t,n,r)}};e.addEventListener=function(t,n,r){var i=Node.prototype.addEventListener;if(t==="click"){i.call(e,t,n.hijacked||(n.hijacked=function(e){if(!e.propagationStopped){n(e)}}),r)}else{i.call(e,t,n,r)}}}if(typeof e.onclick==="function"){n=e.onclick;e.addEventListener("click",function(e){n(e)},false);e.onclick=null}}var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0;var deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent);var deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent);var deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);var deviceIsBlackBerry10=navigator.userAgent.indexOf("BB10")>0;FastClick.prototype.needsClick=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled){return true}break;case"input":if(deviceIsIOS&&e.type==="file"||e.disabled){return true}break;case"label":case"video":return true}return/\bneedsclick\b/.test(e.className)};FastClick.prototype.needsFocus=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"textarea":return true;case"select":return!deviceIsAndroid;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}};FastClick.prototype.sendClick=function(e,t){"use strict";var n,r;if(document.activeElement&&document.activeElement!==e){document.activeElement.blur()}r=t.changedTouches[0];n=document.createEvent("MouseEvents");n.initMouseEvent(this.determineEventType(e),true,true,window,1,r.screenX,r.screenY,r.clientX,r.clientY,false,false,false,false,0,null);n.forwardedTouchEvent=true;e.dispatchEvent(n)};FastClick.prototype.determineEventType=function(e){"use strict";if(deviceIsAndroid&&e.tagName.toLowerCase()==="select"){return"mousedown"}return"click"};FastClick.prototype.focus=function(e){"use strict";var t;if(deviceIsIOS&&e.setSelectionRange&&e.type.indexOf("date")!==0&&e.type!=="time"){t=e.value.length;e.setSelectionRange(t,t)}else{e.focus()}};FastClick.prototype.updateScrollParent=function(e){"use strict";var t,n;t=e.fastClickScrollParent;if(!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n;e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}if(t){t.fastClickLastScrollTop=t.scrollTop}};FastClick.prototype.getTargetElementFromEventTarget=function(e){"use strict";if(e.nodeType===Node.TEXT_NODE){return e.parentNode}return e};FastClick.prototype.onTouchStart=function(e){"use strict";var t,n,r;if(e.targetTouches.length>1){return true}t=this.getTargetElementFromEventTarget(e.target);n=e.targetTouches[0];if(deviceIsIOS){r=window.getSelection();if(r.rangeCount&&!r.isCollapsed){return true}if(!deviceIsIOS4){if(n.identifier===this.lastTouchIdentifier){e.preventDefault();return false}this.lastTouchIdentifier=n.identifier;this.updateScrollParent(t)}}this.trackingClick=true;this.trackingClickStart=e.timeStamp;this.targetElement=t;this.touchStartX=n.pageX;this.touchStartY=n.pageY;if(e.timeStamp-this.lastClickTime<this.tapDelay){e.preventDefault()}return true};FastClick.prototype.touchHasMoved=function(e){"use strict";var t=e.changedTouches[0],n=this.touchBoundary;if(Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n){return true}return false};FastClick.prototype.onTouchMove=function(e){"use strict";if(!this.trackingClick){return true}if(this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e)){this.trackingClick=false;this.targetElement=null}return true};FastClick.prototype.findControl=function(e){"use strict";if(e.control!==undefined){return e.control}if(e.htmlFor){return document.getElementById(e.htmlFor)}return e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};FastClick.prototype.onTouchEnd=function(e){"use strict";var t,n,r,i,s,o=this.targetElement;if(!this.trackingClick){return true}if(e.timeStamp-this.lastClickTime<this.tapDelay){this.cancelNextClick=true;return true}this.cancelNextClick=false;this.lastClickTime=e.timeStamp;n=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(deviceIsIOSWithBadTarget){s=e.changedTouches[0];o=document.elementFromPoint(s.pageX-window.pageXOffset,s.pageY-window.pageYOffset)||o;o.fastClickScrollParent=this.targetElement.fastClickScrollParent}r=o.tagName.toLowerCase();if(r==="label"){t=this.findControl(o);if(t){this.focus(o);if(deviceIsAndroid){return false}o=t}}else if(this.needsFocus(o)){if(e.timeStamp-n>100||deviceIsIOS&&window.top!==window&&r==="input"){this.targetElement=null;return false}this.focus(o);this.sendClick(o,e);if(!deviceIsIOS||r!=="select"){this.targetElement=null;e.preventDefault()}return false}if(deviceIsIOS&&!deviceIsIOS4){i=o.fastClickScrollParent;if(i&&i.fastClickLastScrollTop!==i.scrollTop){return true}}if(!this.needsClick(o)){e.preventDefault();this.sendClick(o,e)}return false};FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=false;this.targetElement=null};FastClick.prototype.onMouse=function(e){"use strict";if(!this.targetElement){return true}if(e.forwardedTouchEvent){return true}if(!e.cancelable){return true}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(e.stopImmediatePropagation){e.stopImmediatePropagation()}else{e.propagationStopped=true}e.stopPropagation();e.preventDefault();return false}return true};FastClick.prototype.onClick=function(e){"use strict";var t;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true}if(e.target.type==="submit"&&e.detail===0){return true}t=this.onMouse(e);if(!t){this.targetElement=null}return t};FastClick.prototype.destroy=function(){"use strict";var e=this.layer;if(deviceIsAndroid){e.removeEventListener("mouseover",this.onMouse,true);e.removeEventListener("mousedown",this.onMouse,true);e.removeEventListener("mouseup",this.onMouse,true)}e.removeEventListener("click",this.onClick,true);e.removeEventListener("touchstart",this.onTouchStart,false);e.removeEventListener("touchmove",this.onTouchMove,false);e.removeEventListener("touchend",this.onTouchEnd,false);e.removeEventListener("touchcancel",this.onTouchCancel,false)};FastClick.notNeeded=function(e){"use strict";var t;var n;var r;if(typeof window.ontouchstart==="undefined"){return true}n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(n){if(deviceIsAndroid){t=document.querySelector("meta[name=viewport]");if(t){if(t.content.indexOf("user-scalable=no")!==-1){return true}if(n>31&&document.documentElement.scrollWidth<=window.outerWidth){return true}}}else{return true}}if(deviceIsBlackBerry10){r=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);if(r[1]>=10&&r[2]>=3){t=document.querySelector("meta[name=viewport]");if(t){if(t.content.indexOf("user-scalable=no")!==-1){return true}if(document.documentElement.scrollWidth<=window.outerWidth){return true}}}}if(e.style.msTouchAction==="none"){return true}return false};FastClick.attach=function(e,t){"use strict";return new FastClick(e,t)};if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){define(function(){"use strict";return FastClick})}else if(typeof module!=="undefined"&&module.exports){module.exports=FastClick.attach;module.exports.FastClick=FastClick}else{window.FastClick=FastClick};