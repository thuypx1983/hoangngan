(function(e){if(typeof define==='function'&&define.amd){define(['jquery'],e)}
else if(typeof exports==='object'){e(require('jquery'))}
else{e(window.jQuery||window.Zepto)}}(function(t){var l='Close',j='BeforeClose',D='AfterClose',U='BeforeAppend',P='MarkupParse',S='Open',N='Change',E='mfp',o='.'+E,v='mfp-ready',W='mfp-removing',z='mfp-prevent-close',e,y=function(){},O=!!(window.jQuery),M,c=t(window),r,C,f,Z,n=function(t,i){e.ev.on(E+t+o,i)},u=function(e,i,n,r){var o=document.createElement('div');o.className='mfp-'+e;if(n){o.innerHTML=n};if(!r){o=t(o);if(i){o.appendTo(i)}}
else if(i){i.appendChild(o)};return o},i=function(i,n){e.ev.triggerHandler(E+i,n);if(e.st.callbacks){i=i.charAt(0).toLowerCase()+i.slice(1);if(e.st.callbacks[i]){e.st.callbacks[i].apply(e,t.isArray(n)?n:[n])}}},B=function(i){if(i!==Z||!e.currTemplate.closeBtn){e.currTemplate.closeBtn=t(e.st.closeMarkup.replace('%title%',e.st.tClose));Z=i};return e.currTemplate.closeBtn},L=function(){if(!t.magnificPopup.instance){e=new y();e.init();t.magnificPopup.instance=e}},Y=function(){var e=document.createElement('p').style,t=['ms','O','Moz','Webkit'];if(e['transition']!==undefined){return!0}
while(t.length){if(t.pop()+'Transition' in e){return!0}};return!1};y.prototype={constructor:y,init:function(){var i=navigator.appVersion;e.isLowIE=e.isIE8=document.all&&!document.addEventListener;e.isAndroid=(/android/gi).test(i);e.isIOS=(/iphone|ipad|ipod/gi).test(i);e.supportsTransition=Y();e.probablyMobile=(e.isAndroid||e.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));r=t(document);e.popupsCache={}},open:function(a){var s;if(a.isObj===!1){e.items=a.items.toArray();e.index=0;var C=a.items,l;for(s=0;s<C.length;s++){l=C[s];if(l.parsed){l=l.el[0]};if(l===a.el[0]){e.index=s;break}}}
else{e.items=t.isArray(a.items)?a.items:[a.items];e.index=a.index||0};if(e.isOpen){e.updateItemHTML();return};e.types=[];f='';if(a.mainEl&&a.mainEl.length){e.ev=a.mainEl.eq(0)}
else{e.ev=r};if(a.key){if(!e.popupsCache[a.key]){e.popupsCache[a.key]={}};e.currTemplate=e.popupsCache[a.key]}
else{e.currTemplate={}};e.st=t.extend(!0,{},t.magnificPopup.defaults,a);e.fixedContentPos=e.st.fixedContentPos==='auto'?!e.probablyMobile:e.st.fixedContentPos;if(e.st.modal){e.st.closeOnContentClick=!1;e.st.closeOnBgClick=!1;e.st.showCloseBtn=!1;e.st.enableEscapeKey=!1};if(!e.bgOverlay){e.bgOverlay=u('bg').on('click'+o,function(){e.close()});e.wrap=u('wrap').attr('tabindex',-1).on('click'+o,function(t){if(e._checkIfClose(t.target)){e.close()}});e.container=u('container',e.wrap)};e.contentContainer=u('content');if(e.st.preloader){e.preloader=u('preloader',e.container,e.st.tLoading)};var y=t.magnificPopup.modules;for(s=0;s<y.length;s++){var d=y[s];d=d.charAt(0).toUpperCase()+d.slice(1);e['init'+d].call(e)};i('BeforeOpen');if(e.st.showCloseBtn){if(!e.st.closeBtnInside){e.wrap.append(B())}
else{n(P,function(e,t,i,n){i.close_replaceWith=B(n.type)});f+=' mfp-close-btn-in'}};if(e.st.alignTop){f+=' mfp-align-top'};if(e.fixedContentPos){e.wrap.css({overflow:e.st.overflowY,overflowX:'hidden',overflowY:e.st.overflowY})}
else{e.wrap.css({top:c.scrollTop(),position:'absolute'})};if(e.st.fixedBgPos===!1||(e.st.fixedBgPos==='auto'&&!e.fixedContentPos)){e.bgOverlay.css({height:r.height(),position:'absolute'})};if(e.st.enableEscapeKey){r.on('keyup'+o,function(t){if(t.keyCode===27){e.close()}})};c.on('resize'+o,function(){e.updateSize()});if(!e.st.closeOnContentClick){f+=' mfp-auto-cursor'};if(f)e.wrap.addClass(f);var h=e.wH=c.height(),m={};if(e.fixedContentPos){if(e._hasScrollBar(h)){var g=e._getScrollbarSize();if(g){m.marginRight=g}}};if(e.fixedContentPos){if(!e.isIE7){m.overflow='hidden'}
else{t('body, html').css('overflow','hidden')}};var p=e.st.mainClass;if(e.isIE7){p+=' mfp-ie7'};if(p){e._addClassToMFP(p)};e.updateItemHTML();i('BuildControls');t('html').css(m);e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo||t(document.body));e._lastFocusedEl=document.activeElement;setTimeout(function(){if(e.content){e._addClassToMFP(v);e._setFocus()}
else{e.bgOverlay.addClass(v)};r.on('focusin'+o,e._onFocusIn)},16);e.isOpen=!0;e.updateSize(h);i(S);return a},close:function(){if(!e.isOpen)return;i(j);e.isOpen=!1;if(e.st.removalDelay&&!e.isLowIE&&e.supportsTransition){e._addClassToMFP(W);setTimeout(function(){e._close()},e.st.removalDelay)}
else{e._close()}},_close:function(){i(l);var a=W+' '+v+' ';e.bgOverlay.detach();e.wrap.detach();e.container.empty();if(e.st.mainClass){a+=e.st.mainClass+' '};e._removeClassFromMFP(a);if(e.fixedContentPos){var n={marginRight:''};if(e.isIE7){t('body, html').css('overflow','')}
else{n.overflow=''};t('html').css(n)};r.off('keyup'+o+' focusin'+o);e.ev.off(o);e.wrap.attr('class','mfp-wrap').removeAttr('style');e.bgOverlay.attr('class','mfp-bg');e.container.attr('class','mfp-container');if(e.st.showCloseBtn&&(!e.st.closeBtnInside||e.currTemplate[e.currItem.type]===!0)){if(e.currTemplate.closeBtn)e.currTemplate.closeBtn.detach()};if(e.st.autoFocusLast&&e._lastFocusedEl){t(e._lastFocusedEl).focus()};e.currItem=null;e.content=null;e.currTemplate=null;e.prevHeight=0;i(D)},updateSize:function(t){if(e.isIOS){var o=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*o;e.wrap.css('height',n);e.wH=n}
else{e.wH=t||c.height()};if(!e.fixedContentPos){e.wrap.css('height',e.wH)};i('Resize')},updateItemHTML:function(){var o=e.items[e.index];e.contentContainer.detach();if(e.content)e.content.detach();if(!o.parsed){o=e.parseEl(e.index)};var n=o.type;i('BeforeChange',[e.currItem?e.currItem.type:'',n]);e.currItem=o;if(!e.currTemplate[n]){var r=e.st[n]?e.st[n].markup:!1;i('FirstMarkupParse',r);if(r){e.currTemplate[n]=t(r)}
else{e.currTemplate[n]=!0}};if(C&&C!==o.type){e.container.removeClass('mfp-'+C+'-holder')};var a=e['get'+n.charAt(0).toUpperCase()+n.slice(1)](o,e.currTemplate[n]);e.appendContent(a,n);o.preloaded=!0;i(N,o);C=o.type;e.container.prepend(e.contentContainer);i('AfterChange')},appendContent:function(t,n){e.content=t;if(t){if(e.st.showCloseBtn&&e.st.closeBtnInside&&e.currTemplate[n]===!0){if(!e.content.find('.mfp-close').length){e.content.append(B())}}
else{e.content=t}}
else{e.content=''};i(U);e.container.addClass('mfp-'+n+'-holder');e.contentContainer.append(e.content)},parseEl:function(n){var o=e.items[n],s;if(o.tagName){o={el:t(o)}}
else{s=o.type;o={data:o,src:o.src}};if(o.el){var a=e.types;for(var r=0;r<a.length;r++){if(o.el.hasClass('mfp-'+a[r])){s=a[r];break}};o.src=o.el.attr('data-mfp-src');if(!o.src){o.src=o.el.attr('href')}};o.type=s||e.st.type||'inline';o.index=n;o.parsed=!0;e.items[n]=o;i('ElementParse',o);return e.items[n]},addGroup:function(t,i){var o=function(n){n.mfpEl=this;e._openClick(n,t,i)};if(!i){i={}};var n='click.magnificPopup';i.mainEl=t;if(i.items){i.isObj=!0;t.off(n).on(n,o)}
else{i.isObj=!1;if(i.delegate){t.off(n).on(n,i.delegate,o)}
else{i.items=t;t.off(n).on(n,o)}}},_openClick:function(i,n,o){var a=o.midClick!==undefined?o.midClick:t.magnificPopup.defaults.midClick;if(!a&&(i.which===2||i.ctrlKey||i.metaKey||i.altKey||i.shiftKey)){return};var r=o.disableOn!==undefined?o.disableOn:t.magnificPopup.defaults.disableOn;if(r){if(t.isFunction(r)){if(!r.call(e)){return!0}}
else{if(c.width()<r){return!0}}};if(i.type){i.preventDefault();if(e.isOpen){i.stopPropagation()}};o.el=t(i.mfpEl);if(o.delegate){o.items=n.find(o.delegate)};e.open(o)},updateStatus:function(t,n){if(e.preloader){if(M!==t){e.container.removeClass('mfp-s-'+M)};if(!n&&t==='loading'){n=e.st.tLoading};var o={status:t,text:n};i('UpdateStatus',o);t=o.status;n=o.text;e.preloader.html(n);e.preloader.find('a').on('click',function(e){e.stopImmediatePropagation()});e.container.addClass('mfp-s-'+t);M=t}},_checkIfClose:function(i){if(t(i).hasClass(z)){return};var n=e.st.closeOnContentClick,o=e.st.closeOnBgClick;if(n&&o){return!0}
else{if(!e.content||t(i).hasClass('mfp-close')||(e.preloader&&i===e.preloader[0])){return!0};if((i!==e.content[0]&&!t.contains(e.content[0],i))){if(o){if(t.contains(document,i)){return!0}}}
else if(n){return!0}};return!1},_addClassToMFP:function(t){e.bgOverlay.addClass(t);e.wrap.addClass(t)},_removeClassFromMFP:function(t){this.bgOverlay.removeClass(t);e.wrap.removeClass(t)},_hasScrollBar:function(t){return((e.isIE7?r.height():document.body.scrollHeight)>(t||c.height()))},_setFocus:function(){(e.st.focus?e.content.find(e.st.focus).eq(0):e.wrap).focus()},_onFocusIn:function(i){if(i.target!==e.wrap[0]&&!t.contains(e.wrap[0],i.target)){e._setFocus();return!1}},_parseMarkup:function(e,n,r){var a;if(r.data){n=t.extend(r.data,n)};i(P,[e,n,r]);t.each(n,function(i,n){if(n===undefined||n===!1){return!0};a=i.split('_');if(a.length>1){var r=e.find(o+'-'+a[0]);if(r.length>0){var s=a[1];if(s==='replaceWith'){if(r[0]!==n[0]){r.replaceWith(n)}}
else if(s==='img'){if(r.is('img')){r.attr('src',n)}
else{r.replaceWith(t('<img>').attr('src',n).attr('class',r.attr('class')))}}
else{r.attr(a[1],n)}}}
else{e.find(o+'-'+i).html(n)}})},_getScrollbarSize:function(){if(e.scrollbarSize===undefined){var t=document.createElement('div');t.style.cssText='width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';document.body.appendChild(t);e.scrollbarSize=t.offsetWidth-t.clientWidth;document.body.removeChild(t)};return e.scrollbarSize}};t.magnificPopup={instance:null,proto:y.prototype,modules:[],open:function(e,i){L();if(!e){e={}}
else{e=t.extend(!0,{},e)};e.isObj=!0;e.index=i||0;return this.instance.open(e)},close:function(){return t.magnificPopup.instance&&t.magnificPopup.instance.close()},registerModule:function(e,i){if(i.options){t.magnificPopup.defaults[e]=i.options};t.extend(this.proto,i.proto);this.modules.push(e)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:'',preloader:!0,focus:'',closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:'auto',fixedBgPos:'auto',overflowY:'auto',closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:'Close (Esc)',tLoading:'Loading...',autoFocusLast:!0}};t.fn.magnificPopup=function(i){L();var n=t(this);if(typeof i==='string'){if(i==='open'){var o,r=O?n.data('magnificPopup'):n[0].magnificPopup,a=parseInt(arguments[1],10)||0;if(r.items){o=r.items[a]}
else{o=n;if(r.delegate){o=o.find(r.delegate)};o=o.eq(a)};e._openClick({mfpEl:o},n,r)}
else{if(e.isOpen)e[i].apply(e,Array.prototype.slice.call(arguments,1))}}
else{i=t.extend(!0,{},i);if(O){n.data('magnificPopup',i)}
else{n[0].magnificPopup=i};e.addGroup(n,i)};return n};var T='inline',d,g,h,F=function(){if(h){g.after(h.addClass(d)).detach();h=null}};t.magnificPopup.registerModule(T,{options:{hiddenClass:'hide',markup:'',tNotFound:'Content not found'},proto:{initInline:function(){e.types.push(T);n(l+'.'+T,function(){F()})},getInline:function(i,n){F();if(i.src){var a=e.st.inline,o=t(i.src);if(o.length){var r=o[0].parentNode;if(r&&r.tagName){if(!g){d=a.hiddenClass;g=u(d);d='mfp-'+d};h=o.after(g).detach().removeClass(d)};e.updateStatus('ready')}
else{e.updateStatus('error',a.tNotFound);o=t('<div>')};i.inlineElement=o;return o};e.updateStatus('ready');e._parseMarkup(n,{},i);return n}}});var p='ajax',m,k=function(){if(m){t(document.body).removeClass(m)}},A=function(){k();if(e.req){e.req.abort()}};t.magnificPopup.registerModule(p,{options:{settings:null,cursor:'mfp-ajax-cur',tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){e.types.push(p);m=e.st.ajax.cursor;n(l+'.'+p,A);n('BeforeChange.'+p,A)},getAjax:function(n){if(m){t(document.body).addClass(m)};e.updateStatus('loading');var o=t.extend({url:n.src,success:function(o,r,a){var s={data:o,xhr:a};i('ParseAjax',s);e.appendContent(t(s.data),p);n.finished=!0;k();e._setFocus();setTimeout(function(){e.wrap.addClass(v)},16);e.updateStatus('ready');i('AjaxContentAdded')},error:function(){k();n.finished=n.loadError=!0;e.updateStatus('error',e.st.ajax.tError.replace('%url%',n.src))}},e.st.ajax.settings);e.req=t.ajax(o);return''}}});var a,K=function(i){if(i.data&&i.data.title!==undefined)return i.data.title;var n=e.st.image.titleSrc;if(n){if(t.isFunction(n)){return n.call(e,i)}
else if(i.el){return i.el.attr(n)||''}};return''};t.magnificPopup.registerModule('image',{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:'mfp-zoom-out-cur',titleSrc:'title',verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var i=e.st.image,r='.image';e.types.push('image');n(S+r,function(){if(e.currItem.type==='image'&&i.cursor){t(document.body).addClass(i.cursor)}});n(l+r,function(){if(i.cursor){t(document.body).removeClass(i.cursor)};c.off('resize'+o)});n('Resize'+r,e.resizeImage);if(e.isLowIE){n('AfterChange',e.resizeImage)}},resizeImage:function(){var t=e.currItem;if(!t||!t.img)return;if(e.st.image.verticalFit){var i=0;if(e.isLowIE){i=parseInt(t.img.css('padding-top'),10)+parseInt(t.img.css('padding-bottom'),10)};t.img.css('max-height',e.wH-i)}},_onImageHasSize:function(t){if(t.img){t.hasSize=!0;if(a){clearInterval(a)};t.isCheckingImgSize=!1;i('ImageHasSize',t);if(t.imgHidden){if(e.content)e.content.removeClass('mfp-loading');t.imgHidden=!1}}},findImageSize:function(t){var i=0,o=t.img[0],n=function(r){if(a){clearInterval(a)};a=setInterval(function(){if(o.naturalWidth>0){e._onImageHasSize(t);return};if(i>200){clearInterval(a)};i++;if(i===3){n(10)}
else if(i===40){n(50)}
else if(i===100){n(500)}},r)};n(1)},getImage:function(n,o){var s=0,l=function(){if(n){if(n.img[0].complete){n.img.off('.mfploader');if(n===e.currItem){e._onImageHasSize(n);e.updateStatus('ready')};n.hasSize=!0;n.loaded=!0;i('ImageLoadComplete')}
else{s++;if(s<200){setTimeout(l,100)}
else{c()}}}},c=function(){if(n){n.img.off('.mfploader');if(n===e.currItem){e._onImageHasSize(n);e.updateStatus('error',f.tError.replace('%url%',n.src))};n.hasSize=!0;n.loaded=!0;n.loadError=!0}},f=e.st.image,d=o.find('.mfp-img');if(d.length){var r=document.createElement('img');r.className='mfp-img';if(n.el&&n.el.find('img').length){r.alt=n.el.find('img').attr('alt')};n.img=t(r).on('load.mfploader',l).on('error.mfploader',c);r.src=n.src;if(d.is('img')){n.img=n.img.clone()};r=n.img[0];if(r.naturalWidth>0){n.hasSize=!0}
else if(!r.width){n.hasSize=!1}};e._parseMarkup(o,{title:K(n),img_replaceWith:n.img},n);e.resizeImage();if(n.hasSize){if(a)clearInterval(a);if(n.loadError){o.addClass('mfp-loading');e.updateStatus('error',f.tError.replace('%url%',n.src))}
else{o.removeClass('mfp-loading');e.updateStatus('ready')};return o};e.updateStatus('loading');n.loading=!0;if(!n.hasSize){n.imgHidden=!0;o.addClass('mfp-loading');e.findImageSize(n)};return o}}});var x,q=function(){if(x===undefined){x=document.createElement('p').style.MozTransform!==undefined};return x};t.magnificPopup.registerModule('zoom',{options:{enabled:!1,easing:'ease-in-out',duration:300,opener:function(e){return e.is('img')?e:e.find('img')}},proto:{initZoom:function(){var a=e.st.zoom,c='.zoom',o;if(!a.enabled||!e.supportsTransition){return};var f=a.duration,d=function(e){var n=e.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),o='all '+(a.duration/1000)+'s '+a.easing,t={position:'fixed',zIndex:9999,left:0,top:0,'-webkit-backface-visibility':'hidden'},i='transition';t['-webkit-'+i]=t['-moz-'+i]=t['-o-'+i]=t[i]=o;n.css(t);return n},s=function(){e.content.css('visibility','visible')},r,t;n('BuildControls'+c,function(){if(e._allowZoom()){clearTimeout(r);e.content.css('visibility','hidden');o=e._getItemToZoom();if(!o){s();return};t=d(o);t.css(e._getOffset());e.wrap.append(t);r=setTimeout(function(){t.css(e._getOffset(!0));r=setTimeout(function(){s();setTimeout(function(){t.remove();o=t=null;i('ZoomAnimationEnded')},16)},f)},16)}});n(j+c,function(){if(e._allowZoom()){clearTimeout(r);e.st.removalDelay=f;if(!o){o=e._getItemToZoom();if(!o){return};t=d(o)};t.css(e._getOffset(!0));e.wrap.append(t);e.content.css('visibility','hidden');setTimeout(function(){t.css(e._getOffset())},16)}});n(l+c,function(){if(e._allowZoom()){s();if(t){t.remove()};o=null}})},_allowZoom:function(){return e.currItem.type==='image'},_getItemToZoom:function(){if(e.currItem.hasSize){return e.currItem.img}
else{return!1}},_getOffset:function(i){var n;if(i){n=e.currItem.img}
else{n=e.st.zoom.opener(e.currItem.el||e.currItem)};var r=n.offset(),a=parseInt(n.css('padding-top'),10),s=parseInt(n.css('padding-bottom'),10);r.top-=(t(window).scrollTop()-a);var o={width:n.width(),height:(O?n.innerHeight():n[0].offsetHeight)-s-a};if(q()){o['-moz-transform']=o['transform']='translate('+r.left+'px,'+r.top+'px)'}
else{o.left=r.left;o.top=r.top};return o}}});var s='iframe',R='//about:blank',I=function(t){if(e.currTemplate[s]){var i=e.currTemplate[s].find('iframe');if(i.length){if(!t){i[0].src=R};if(e.isIE8){i.css('display',t?'block':'none')}}}};t.magnificPopup.registerModule(s,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:'iframe_src',patterns:{youtube:{index:'youtube.com',id:'v=',src:'//www.youtube.com/embed/%id%?autoplay=1'},vimeo:{index:'vimeo.com/',id:'/',src:'//player.vimeo.com/video/%id%?autoplay=1'},gmaps:{index:'//maps.google.',src:'%id%&output=embed'}}},proto:{initIframe:function(){e.types.push(s);n('BeforeChange',function(e,t,i){if(t!==i){if(t===s){I()}
else if(i===s){I(!0)}}});n(l+'.'+s,function(){I()})},getIframe:function(i,n){var o=i.src,r=e.st.iframe;t.each(r.patterns,function(){if(o.indexOf(this.index)>-1){if(this.id){if(typeof this.id==='string'){o=o.substr(o.lastIndexOf(this.id)+this.id.length,o.length)}
else{o=this.id.call(this,o)}};o=this.src.replace('%id%',o);return!1}});var a={};if(r.srcAction){a[r.srcAction]=o};e._parseMarkup(n,a,i);e.updateStatus('ready');return n}}});var b=function(t){var i=e.items.length;if(t>i-1){return t-i}
else if(t<0){return i+t};return t},H=function(e,t,i){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,i)};t.magnificPopup.registerModule('gallery',{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:'Previous (Left arrow key)',tNext:'Next (Right arrow key)',tCounter:'%curr% of %total%'},proto:{initGallery:function(){var o=e.st.gallery,i='.mfp-gallery';e.direction=!0;if(!o||!o.enabled)return!1;f+=' mfp-gallery';n(S+i,function(){if(o.navigateByImgClick){e.wrap.on('click'+i,'.mfp-img',function(){if(e.items.length>1){e.next();return!1}})};r.on('keydown'+i,function(t){if(t.keyCode===37){e.prev()}
else if(t.keyCode===39){e.next()}})});n('UpdateStatus'+i,function(t,i){if(i.text){i.text=H(i.text,e.currItem.index,e.items.length)}});n(P+i,function(t,i,n,r){var a=e.items.length;n.counter=a>1?H(o.tCounter,r.index,a):''});n('BuildControls'+i,function(){if(e.items.length>1&&o.arrows&&!e.arrowLeft){var i=o.arrowMarkup,n=e.arrowLeft=t(i.replace(/%title%/gi,o.tPrev).replace(/%dir%/gi,'left')).addClass(z),r=e.arrowRight=t(i.replace(/%title%/gi,o.tNext).replace(/%dir%/gi,'right')).addClass(z);n.click(function(){e.prev()});r.click(function(){e.next()});e.container.append(n.add(r))}});n(N+i,function(){if(e._preloadTimeout)clearTimeout(e._preloadTimeout);e._preloadTimeout=setTimeout(function(){e.preloadNearbyImages();e._preloadTimeout=null},16)});n(l+i,function(){r.off(i);e.wrap.off('click'+i);e.arrowRight=e.arrowLeft=null})},next:function(){e.direction=!0;e.index=b(e.index+1);e.updateItemHTML()},prev:function(){e.direction=!1;e.index=b(e.index-1);e.updateItemHTML()},goTo:function(t){e.direction=(t>=e.index);e.index=t;e.updateItemHTML()},preloadNearbyImages:function(){var i=e.st.gallery.preload,n=Math.min(i[0],e.items.length),o=Math.min(i[1],e.items.length),t;for(t=1;t<=(e.direction?o:n);t++){e._preloadItem(e.index+t)};for(t=1;t<=(e.direction?n:o);t++){e._preloadItem(e.index-t)}},_preloadItem:function(n){n=b(n);if(e.items[n].preloaded){return};var o=e.items[n];if(!o.parsed){o=e.parseEl(n)};i('LazyLoad',o);if(o.type==='image'){o.img=t('<img class="mfp-img" />').on('load.mfploader',function(){o.hasSize=!0}).on('error.mfploader',function(){o.hasSize=!0;o.loadError=!0;i('LazyLoadError',o)}).attr('src',o.src)};o.preloaded=!0}}});var w='retina';t.magnificPopup.registerModule(w,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return'@2x'+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var i=e.st.retina,t=i.ratio;t=!isNaN(t)?t:t();if(t>1){n('ImageHasSize.'+w,function(e,i){i.img.css({'max-width':i.img[0].naturalWidth/t,'width':'100%'})});n('ElementParse.'+w,function(e,n){n.src=i.replaceSrc(n,t)})}}}}});L()}));;Drupal.behaviors.ucCollapseBlock={attach:function(l){jQuery('.cart-block-title-bar:not(.ucCollapseBlock-processed)',l).addClass('ucCollapseBlock-processed').click(function(){var l=jQuery('.block-uc-cart .content').toggleClass('collapsed');jQuery('.cart-block-arrow').toggleClass('arrow-down',l.hasClass('collapsed'))})}};(function(e){var i={equalHeight:function(n){var o=0,a=0,t=[],i,c=0;e(n).each(function(){i=e(this);i.height('auto');topPostion=i.offset().top;if(a!=topPostion){for(currentDiv=0;currentDiv<t.length;currentDiv++){t[currentDiv].height(o)};t.length=0;a=topPostion;o=i.height();t.push(i)}
else{t.push(i);o=(o<i.height())?(i.height()):(o)};for(currentDiv=0;currentDiv<t.length;currentDiv++){t[currentDiv].height(o)}})},initSlick:function(){e('.main-slider .view-content').slick({autoplay:!0,autoplaySpeed:2000,arrows:!0,dots:!0});e('.block-featured-product .view-content').slick({autoplay:!1,arrows:!0,dots:!1,infinite:!0,slidesToShow:4,slidesToScroll:4,dots:!0,})},autoHeight:function(){i.equalHeight('.block-product-by-category .views-row');i.equalHeight('.view-id-product_list .views-row');i.equalHeight('.view-technical-list .views-row');i.equalHeight('.view-news.view-display-id-page_2 .view-news .views-row,.view-news.view-display-id-page_1 .view-news .views-row')},createMenuMobile:function(){e('#navigation').clone().appendTo('.mobile-menu-container')},detectStar:function(){e('.views-field-field-rate').each(function(){var t=parseInt(e(this).find('.field-content').text()),n='';if(!isNaN(t)||t>1){for(var i=1;i<=5;i++){if(i<=t){n+='<span class="star star-active"></span>'}
else{n+='<span class="star"></span>'}};e(this).html(n)}})},searchClick:function(){e('.block-search .title .fa.fa-search').click(function(){e('.block-search .content').show()})},moveSlideBarToBottom:function(){e('#main>.container>.row>.col-md-3').insertAfter('#main>.container>.row>.col-md-9')},moveSlideBarToTop:function(){e('#main>.container>.row>.col-md-3').insertBefore('#main>.container>.row>.col-md-9')},isMobile:function(){var i=e(window).width();if(i<=990){return!0};return!1},testimonialsEffect:function(){e('.block-testimonials .views-row').eq(3).addClass('active');e('.block-testimonials .views-field-field-image').click(function(){e('.block-testimonials .views-row').removeClass('active');e(this).parent().addClass('active')})},attackAjaxComplete:function(){e(document).ajaxSend(function(e,i,t){});e(document).ajaxComplete(function(e,i,t){})},initMagicZoom:function(){e('.node-type-project .node-project .field-name-field-image').magnificPopup({delegate:'img',type:'image',gallery:{enabled:!0},callbacks:{elementParse:function(e){e.src=e.el.attr('src')}}})},menuExpand:function(){e('.mobile-menu-container').find('#main-menu >ul>li.expanded>ul.menu').before('<i class="fa fa-plus"></i>');e(document).on('click','#main-menu .fa',function(){e(this).parent().toggleClass('open')})}};e(document).ready(function(){e('.block-search .fa-search').click(function(){e('.block-search .content').show()});e(document).on('click',function(i){if(!e(i.target).is('.block-search .content .container-inline, #edit-search-block-form--2,.block-search .title .fa.fa-search')){e('.block-search .content').hide()}});i.initSlick();i.testimonialsEffect();i.createMenuMobile()});e(window).on('load',function(){i.autoHeight();i.initMagicZoom();e(window).resize(function(){i.autoHeight()});i.menuExpand()})})(jQuery);