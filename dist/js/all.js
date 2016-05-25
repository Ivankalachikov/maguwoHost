"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))?!function(){"use strict";var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,i=arguments.length;for(n=0;i>n;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}t=null}():!function(t){"use strict";if("Element"in t){var e="classList",n="prototype",i=t.Element[n],s=Object,r=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array[n].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},c=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},a=function(t,e){if(""===e)throw new c("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(e))throw new c("INVALID_CHARACTER_ERR","String contains an invalid character");return o.call(t,e)},l=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],i=0,s=n.length;s>i;i++)this.push(n[i]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},u=l[n]=[],h=function(){return new l(this)};if(c[n]=Error[n],u.item=function(t){return this[t]||null},u.contains=function(t){return t+="",-1!==a(this,t)},u.add=function(){var t,e=arguments,n=0,i=e.length,s=!1;do t=e[n]+"",-1===a(this,t)&&(this.push(t),s=!0);while(++n<i);s&&this._updateClassName()},u.remove=function(){var t,e,n=arguments,i=0,s=n.length,r=!1;do for(t=n[i]+"",e=a(this,t);-1!==e;)this.splice(e,1),r=!0,e=a(this,t);while(++i<s);r&&this._updateClassName()},u.toggle=function(t,e){t+="";var n=this.contains(t),i=n?e!==!0&&"remove":e!==!1&&"add";return i&&this[i](t),e===!0||e===!1?e:!n},u.toString=function(){return this.join(" ")},s.defineProperty){var f={get:h,enumerable:!0,configurable:!0};try{s.defineProperty(i,e,f)}catch(d){-2146823252===d.number&&(f.enumerable=!1,s.defineProperty(i,e,f))}}else s[n].__defineGetter__&&i.__defineGetter__(e,h)}}(self));
!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=E.elements;return"string"==typeof e?e.split(" "):e}function a(e,t){var n=E.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),E.elements=n+" "+e,m(t)}function o(e){var t=y[e[g]];return t||(t={},v++,e[g]=v,y[v]=t),t}function c(e,n,r){if(n||(n=t),s)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||h.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function i(e,n){if(e||(e=t),s)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),c=0,i=r(),l=i.length;l>c;c++)a.createElement(i[c]);return a}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return E.shivMethods?c(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(E,t.frag)}function m(e){e||(e=t);var r=o(e);return!E.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),s||l(e,r),e}var u,s,d="3.7.3",f=e.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,s=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,s=!0}}();var E={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:s,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:m,createElement:c,createDocumentFragment:i,addElements:a};e.html5=E,m(t),"object"==typeof module&&module.exports&&(module.exports=E)}("undefined"!=typeof window?window:this,document);
document.addEventListener('DOMContentLoaded', function () {

	var icon = document.querySelector('.page-nav__icon');
	var menu = document.querySelector('.page-nav__list');
	resize();

	icon.addEventListener('click', function () {
		menu.classList.toggle('hidden');
	});

	document.addEventListener('click', function (event){
		if (event.target.closest('.page-nav__icon') == null){
			menu.classList.add('hidden');
		};
	});

	function resize() { 
    var ww = window.innerWidth;
    if (ww>768){
    	menu.classList.remove('hidden');
    	icon.classList.add('hidden');
    }
    else{
    	menu.classList.add('hidden');
    	icon.classList.remove('hidden');
    };
  }

  window.onresize = resize;

});