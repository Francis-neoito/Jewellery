var A_=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Ew=A_((Aw,Kn)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Cn(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const At={},fs=[],vn=()=>{},To=()=>!1,w_=/^on[^a-z]/,Nr=t=>w_.test(t),$c=t=>t.startsWith("onUpdate:"),vt=Object.assign,Kc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},C_=Object.prototype.hasOwnProperty,Tt=(t,e)=>C_.call(t,e),We=Array.isArray,us=t=>Ls(t)==="[object Map]",Or=t=>Ls(t)==="[object Set]",iu=t=>Ls(t)==="[object Date]",R_=t=>Ls(t)==="[object RegExp]",lt=t=>typeof t=="function",ut=t=>typeof t=="string",ji=t=>typeof t=="symbol",Ct=t=>t!==null&&typeof t=="object",Zc=t=>Ct(t)&&lt(t.then)&&lt(t.catch),Ad=Object.prototype.toString,Ls=t=>Ad.call(t),P_=t=>Ls(t).slice(8,-1),wd=t=>Ls(t)==="[object Object]",Jc=t=>ut(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,gr=Cn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),L_=Cn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Ko=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},D_=/-(\w)/g,Xt=Ko(t=>t.replace(D_,(e,n)=>n?n.toUpperCase():"")),I_=/\B([A-Z])/g,In=Ko(t=>t.replace(I_,"-$1").toLowerCase()),Fr=Ko(t=>t.charAt(0).toUpperCase()+t.slice(1)),hs=Ko(t=>t?`on${Fr(t)}`:""),ys=(t,e)=>!Object.is(t,e),ds=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Co=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ro=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Po=t=>{const e=ut(t)?Number(t):NaN;return isNaN(e)?t:e};let ru;const pc=()=>ru||(ru=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),U_="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",N_=Cn(U_);function Ea(t){if(We(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=ut(i)?Cd(i):Ea(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(ut(t))return t;if(Ct(t))return t}}const O_=/;(?![^(]*\))/g,F_=/:([^]+)/,B_=/\/\*[^]*?\*\//g;function Cd(t){const e={};return t.replace(B_,"").split(O_).forEach(n=>{if(n){const i=n.split(F_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ba(t){let e="";if(ut(t))e=t;else if(We(t))for(let n=0;n<t.length;n++){const i=ba(t[n]);i&&(e+=i+" ")}else if(Ct(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function k_(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ut(e)&&(t.class=ba(e)),n&&(t.style=Ea(n)),t}const z_="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",H_="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",V_="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",G_=Cn(z_),W_=Cn(H_),X_=Cn(V_),q_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Y_=Cn(q_);function Rd(t){return!!t||t===""}function j_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=$i(t[i],e[i]);return n}function $i(t,e){if(t===e)return!0;let n=iu(t),i=iu(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=ji(t),i=ji(e),n||i)return t===e;if(n=We(t),i=We(e),n||i)return n&&i?j_(t,e):!1;if(n=Ct(t),i=Ct(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in t){const o=t.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!$i(t[a],e[a]))return!1}}return String(t)===String(e)}function Zo(t,e){return t.findIndex(n=>$i(n,e))}const $_=t=>ut(t)?t:t==null?"":We(t)||Ct(t)&&(t.toString===Ad||!lt(t.toString))?JSON.stringify(t,Pd,2):String(t),Pd=(t,e)=>e&&e.__v_isRef?Pd(t,e.value):us(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Or(e)?{[`Set(${e.size})`]:[...e.values()]}:Ct(e)&&!We(e)&&!wd(e)?String(e):e;let Ln;class Qc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ln,!e&&Ln&&(this.index=(Ln.scopes||(Ln.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ln;try{return Ln=this,e()}finally{Ln=n}}}on(){Ln=this}off(){Ln=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function K_(t){return new Qc(t)}function Ld(t,e=Ln){e&&e.active&&e.effects.push(t)}function Dd(){return Ln}function Z_(t){Ln&&Ln.cleanups.push(t)}const ef=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Id=t=>(t.w&Ki)>0,Ud=t=>(t.n&Ki)>0,J_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ki},Q_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Id(r)&&!Ud(r)?r.delete(t):e[n++]=r,r.w&=~Ki,r.n&=~Ki}e.length=n}},Lo=new WeakMap;let $s=0,Ki=1;const mc=30;let Qn;const vr=Symbol(""),_c=Symbol("");class Aa{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ld(this,i)}run(){if(!this.active)return this.fn();let e=Qn,n=Vi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Qn,Qn=this,Vi=!0,Ki=1<<++$s,$s<=mc?J_(this):su(this),this.fn()}finally{$s<=mc&&Q_(this),Ki=1<<--$s,Qn=this.parent,Vi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Qn===this?this.deferStop=!0:this.active&&(su(this),this.onStop&&this.onStop(),this.active=!1)}}function su(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function eg(t,e){t.effect&&(t=t.effect.fn);const n=new Aa(t);e&&(vt(n,e),e.scope&&Ld(n,e.scope)),(!e||!e.lazy)&&n.run();const i=n.run.bind(n);return i.effect=n,i}function tg(t){t.effect.stop()}let Vi=!0;const Nd=[];function Ds(){Nd.push(Vi),Vi=!1}function Is(){const t=Nd.pop();Vi=t===void 0?!0:t}function wn(t,e,n){if(Vi&&Qn){let i=Lo.get(t);i||Lo.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=ef()),Od(r)}}function Od(t,e){let n=!1;$s<=mc?Ud(t)||(t.n|=Ki,n=!Id(t)):n=!t.has(Qn),n&&(t.add(Qn),Qn.deps.push(t))}function Ci(t,e,n,i,r,s){const a=Lo.get(t);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(n==="length"&&We(t)){const l=Number(i);a.forEach((c,p)=>{(p==="length"||p>=l)&&o.push(c)})}else switch(n!==void 0&&o.push(a.get(n)),e){case"add":We(t)?Jc(n)&&o.push(a.get("length")):(o.push(a.get(vr)),us(t)&&o.push(a.get(_c)));break;case"delete":We(t)||(o.push(a.get(vr)),us(t)&&o.push(a.get(_c)));break;case"set":us(t)&&o.push(a.get(vr));break}if(o.length===1)o[0]&&gc(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);gc(ef(l))}}function gc(t,e){const n=We(t)?t:[...t];for(const i of n)i.computed&&au(i);for(const i of n)i.computed||au(i)}function au(t,e){(t!==Qn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function ng(t,e){var n;return(n=Lo.get(t))==null?void 0:n.get(e)}const ig=Cn("__proto__,__v_isRef,__isVue"),Fd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ji)),rg=Jo(),sg=Jo(!1,!0),ag=Jo(!0),og=Jo(!0,!0),ou=lg();function lg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=yt(this);for(let s=0,a=this.length;s<a;s++)wn(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(yt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ds();const i=yt(this)[e].apply(this,n);return Is(),i}}),t}function cg(t){const e=yt(this);return wn(e,"has",t),e.hasOwnProperty(t)}function Jo(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?Wd:Gd:e?Vd:Hd).get(i))return i;const a=We(i);if(!t){if(a&&Tt(ou,r))return Reflect.get(ou,r,s);if(r==="hasOwnProperty")return cg}const o=Reflect.get(i,r,s);return(ji(r)?Fd.has(r):ig(r))||(t||wn(i,"get",r),e)?o:Yt(o)?a&&Jc(r)?o:o.value:Ct(o)?t?nf(o):tl(o):o}}const fg=Bd(),ug=Bd(!0);function Bd(t=!1){return function(n,i,r,s){let a=n[i];if(Rr(a)&&Yt(a)&&!Yt(r))return!1;if(!t&&(!oa(r)&&!Rr(r)&&(a=yt(a),r=yt(r)),!We(n)&&Yt(a)&&!Yt(r)))return a.value=r,!0;const o=We(n)&&Jc(i)?Number(i)<n.length:Tt(n,i),l=Reflect.set(n,i,r,s);return n===yt(s)&&(o?ys(r,a)&&Ci(n,"set",i,r):Ci(n,"add",i,r)),l}}function hg(t,e){const n=Tt(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Ci(t,"delete",e,void 0),i}function dg(t,e){const n=Reflect.has(t,e);return(!ji(e)||!Fd.has(e))&&wn(t,"has",e),n}function pg(t){return wn(t,"iterate",We(t)?"length":vr),Reflect.ownKeys(t)}const kd={get:rg,set:fg,deleteProperty:hg,has:dg,ownKeys:pg},zd={get:ag,set(t,e){return!0},deleteProperty(t,e){return!0}},mg=vt({},kd,{get:sg,set:ug}),_g=vt({},zd,{get:og}),tf=t=>t,Qo=t=>Reflect.getPrototypeOf(t);function za(t,e,n=!1,i=!1){t=t.__v_raw;const r=yt(t),s=yt(e);n||(e!==s&&wn(r,"get",e),wn(r,"get",s));const{has:a}=Qo(r),o=i?tf:n?af:la;if(a.call(r,e))return o(t.get(e));if(a.call(r,s))return o(t.get(s));t!==r&&t.get(e)}function Ha(t,e=!1){const n=this.__v_raw,i=yt(n),r=yt(t);return e||(t!==r&&wn(i,"has",t),wn(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Va(t,e=!1){return t=t.__v_raw,!e&&wn(yt(t),"iterate",vr),Reflect.get(t,"size",t)}function lu(t){t=yt(t);const e=yt(this);return Qo(e).has.call(e,t)||(e.add(t),Ci(e,"add",t,t)),this}function cu(t,e){e=yt(e);const n=yt(this),{has:i,get:r}=Qo(n);let s=i.call(n,t);s||(t=yt(t),s=i.call(n,t));const a=r.call(n,t);return n.set(t,e),s?ys(e,a)&&Ci(n,"set",t,e):Ci(n,"add",t,e),this}function fu(t){const e=yt(this),{has:n,get:i}=Qo(e);let r=n.call(e,t);r||(t=yt(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&Ci(e,"delete",t,void 0),s}function uu(){const t=yt(this),e=t.size!==0,n=t.clear();return e&&Ci(t,"clear",void 0,void 0),n}function Ga(t,e){return function(i,r){const s=this,a=s.__v_raw,o=yt(a),l=e?tf:t?af:la;return!t&&wn(o,"iterate",vr),a.forEach((c,p)=>i.call(r,l(c),l(p),s))}}function Wa(t,e,n){return function(...i){const r=this.__v_raw,s=yt(r),a=us(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,c=r[t](...i),p=n?tf:e?af:la;return!e&&wn(s,"iterate",l?_c:vr),{next(){const{value:d,done:g}=c.next();return g?{value:d,done:g}:{value:o?[p(d[0]),p(d[1])]:p(d),done:g}},[Symbol.iterator](){return this}}}}function Li(t){return function(...e){return t==="delete"?!1:this}}function gg(){const t={get(s){return za(this,s)},get size(){return Va(this)},has:Ha,add:lu,set:cu,delete:fu,clear:uu,forEach:Ga(!1,!1)},e={get(s){return za(this,s,!1,!0)},get size(){return Va(this)},has:Ha,add:lu,set:cu,delete:fu,clear:uu,forEach:Ga(!1,!0)},n={get(s){return za(this,s,!0)},get size(){return Va(this,!0)},has(s){return Ha.call(this,s,!0)},add:Li("add"),set:Li("set"),delete:Li("delete"),clear:Li("clear"),forEach:Ga(!0,!1)},i={get(s){return za(this,s,!0,!0)},get size(){return Va(this,!0)},has(s){return Ha.call(this,s,!0)},add:Li("add"),set:Li("set"),delete:Li("delete"),clear:Li("clear"),forEach:Ga(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Wa(s,!1,!1),n[s]=Wa(s,!0,!1),e[s]=Wa(s,!1,!0),i[s]=Wa(s,!0,!0)}),[t,n,e,i]}const[vg,yg,xg,Sg]=gg();function el(t,e){const n=e?t?Sg:xg:t?yg:vg;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Tt(n,r)&&r in i?n:i,r,s)}const Tg={get:el(!1,!1)},Mg={get:el(!1,!0)},Eg={get:el(!0,!1)},bg={get:el(!0,!0)},Hd=new WeakMap,Vd=new WeakMap,Gd=new WeakMap,Wd=new WeakMap;function Ag(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wg(t){return t.__v_skip||!Object.isExtensible(t)?0:Ag(P_(t))}function tl(t){return Rr(t)?t:nl(t,!1,kd,Tg,Hd)}function Xd(t){return nl(t,!1,mg,Mg,Vd)}function nf(t){return nl(t,!0,zd,Eg,Gd)}function Cg(t){return nl(t,!0,_g,bg,Wd)}function nl(t,e,n,i,r){if(!Ct(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const a=wg(t);if(a===0)return t;const o=new Proxy(t,a===2?i:n);return r.set(t,o),o}function yr(t){return Rr(t)?yr(t.__v_raw):!!(t&&t.__v_isReactive)}function Rr(t){return!!(t&&t.__v_isReadonly)}function oa(t){return!!(t&&t.__v_isShallow)}function rf(t){return yr(t)||Rr(t)}function yt(t){const e=t&&t.__v_raw;return e?yt(e):t}function sf(t){return Co(t,"__v_skip",!0),t}const la=t=>Ct(t)?tl(t):t,af=t=>Ct(t)?nf(t):t;function of(t){Vi&&Qn&&(t=yt(t),Od(t.dep||(t.dep=ef())))}function il(t,e){t=yt(t);const n=t.dep;n&&gc(n)}function Yt(t){return!!(t&&t.__v_isRef===!0)}function ps(t){return qd(t,!1)}function Rg(t){return qd(t,!0)}function qd(t,e){return Yt(t)?t:new Pg(t,e)}class Pg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:yt(e),this._value=n?e:la(e)}get value(){return of(this),this._value}set value(e){const n=this.__v_isShallow||oa(e)||Rr(e);e=n?e:yt(e),ys(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:la(e),il(this))}}function Lg(t){il(t)}function lf(t){return Yt(t)?t.value:t}function Dg(t){return lt(t)?t():lf(t)}const Ig={get:(t,e,n)=>lf(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Yt(r)&&!Yt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function cf(t){return yr(t)?t:new Proxy(t,Ig)}class Ug{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:i}=e(()=>of(this),()=>il(this));this._get=n,this._set=i}get value(){return this._get()}set value(e){this._set(e)}}function Ng(t){return new Ug(t)}function Og(t){const e=We(t)?new Array(t.length):{};for(const n in t)e[n]=Yd(t,n);return e}class Fg{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return ng(yt(this._object),this._key)}}class Bg{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function kg(t,e,n){return Yt(t)?t:lt(t)?new Bg(t):Ct(t)&&arguments.length>1?Yd(t,e,n):ps(t)}function Yd(t,e,n){const i=t[e];return Yt(i)?i:new Fg(t,e,n)}class zg{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Aa(e,()=>{this._dirty||(this._dirty=!0,il(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=yt(this);return of(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Hg(t,e,n=!1){let i,r;const s=lt(t);return s?(i=t,r=vn):(i=t.get,r=t.set),new zg(i,r,s||!r,n)}function Vg(t,...e){}function Gg(t,e){}function wi(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){Br(s,e,n)}return r}function Un(t,e,n,i){if(lt(t)){const s=wi(t,e,n,i);return s&&Zc(s)&&s.catch(a=>{Br(a,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(Un(t[s],e,n,i));return r}function Br(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=n;for(;s;){const c=s.ec;if(c){for(let p=0;p<c.length;p++)if(c[p](t,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){wi(l,null,10,[t,a,o]);return}}Wg(t,n,r,i)}function Wg(t,e,n,i=!0){console.error(t)}let ca=!1,vc=!1;const fn=[];let oi=0;const ms=[];let Ti=null,hr=0;const jd=Promise.resolve();let ff=null;function uf(t){const e=ff||jd;return t?e.then(this?t.bind(this):t):e}function Xg(t){let e=oi+1,n=fn.length;for(;e<n;){const i=e+n>>>1;fa(fn[i])<t?e=i+1:n=i}return e}function rl(t){(!fn.length||!fn.includes(t,ca&&t.allowRecurse?oi+1:oi))&&(t.id==null?fn.push(t):fn.splice(Xg(t.id),0,t),$d())}function $d(){!ca&&!vc&&(vc=!0,ff=jd.then(Kd))}function qg(t){const e=fn.indexOf(t);e>oi&&fn.splice(e,1)}function hf(t){We(t)?ms.push(...t):(!Ti||!Ti.includes(t,t.allowRecurse?hr+1:hr))&&ms.push(t),$d()}function hu(t,e=ca?oi+1:0){for(;e<fn.length;e++){const n=fn[e];n&&n.pre&&(fn.splice(e,1),e--,n())}}function Do(t){if(ms.length){const e=[...new Set(ms)];if(ms.length=0,Ti){Ti.push(...e);return}for(Ti=e,Ti.sort((n,i)=>fa(n)-fa(i)),hr=0;hr<Ti.length;hr++)Ti[hr]();Ti=null,hr=0}}const fa=t=>t.id==null?1/0:t.id,Yg=(t,e)=>{const n=fa(t)-fa(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Kd(t){vc=!1,ca=!0,fn.sort(Yg);const e=vn;try{for(oi=0;oi<fn.length;oi++){const n=fn[oi];n&&n.active!==!1&&wi(n,null,14)}}finally{oi=0,fn.length=0,Do(),ca=!1,ff=null,(fn.length||ms.length)&&Kd()}}let as,Xa=[];function Zd(t,e){var n,i;as=t,as?(as.enabled=!0,Xa.forEach(({event:r,args:s})=>as.emit(r,...s)),Xa=[]):typeof window<"u"&&window.HTMLElement&&!((i=(n=window.navigator)==null?void 0:n.userAgent)!=null&&i.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(s=>{Zd(s,e)}),setTimeout(()=>{as||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Xa=[])},3e3)):Xa=[]}function jg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||At;let r=n;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const p=`${a==="modelValue"?"model":a}Modifiers`,{number:d,trim:g}=i[p]||At;g&&(r=n.map(S=>ut(S)?S.trim():S)),d&&(r=n.map(Ro))}let o,l=i[o=hs(e)]||i[o=hs(Xt(e))];!l&&s&&(l=i[o=hs(In(e))]),l&&Un(l,t,6,r);const c=i[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,Un(c,t,6,r)}}function Jd(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!lt(t)){const l=c=>{const p=Jd(c,e,!0);p&&(o=!0,vt(a,p))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(Ct(t)&&i.set(t,null),null):(We(s)?s.forEach(l=>a[l]=null):vt(a,s),Ct(t)&&i.set(t,a),a)}function sl(t,e){return!t||!Nr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Tt(t,e[0].toLowerCase()+e.slice(1))||Tt(t,In(e))||Tt(t,e))}let Qt=null,al=null;function ua(t){const e=Qt;return Qt=t,al=t&&t.type.__scopeId||null,e}function $g(t){al=t}function Kg(){al=null}const Zg=t=>df;function df(t,e=Qt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&bc(-1);const s=ua(e);let a;try{a=t(...r)}finally{ua(s),i._d&&bc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Mo(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:p,renderCache:d,data:g,setupState:S,ctx:_,inheritAttrs:R}=t;let v,h;const u=ua(t);try{if(n.shapeFlag&4){const y=r||i;v=Dn(p.call(y,y,d,s,S,g,_)),h=l}else{const y=e;v=Dn(y.length>1?y(s,{attrs:l,slots:o,emit:c}):y(s,null)),h=e.props?l:Qg(l)}}catch(y){na.length=0,Br(y,t,1),v=Ut(hn)}let f=v;if(h&&R!==!1){const y=Object.keys(h),{shapeFlag:E}=f;y.length&&E&7&&(a&&y.some($c)&&(h=e0(h,a)),f=ci(f,h))}return n.dirs&&(f=ci(f),f.dirs=f.dirs?f.dirs.concat(n.dirs):n.dirs),n.transition&&(f.transition=n.transition),v=f,ua(u),v}function Jg(t){let e;for(let n=0;n<t.length;n++){const i=t[n];if(Zi(i)){if(i.type!==hn||i.children==="v-if"){if(e)return;e=i}}else return}return e}const Qg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Nr(n))&&((e||(e={}))[n]=t[n]);return e},e0=(t,e)=>{const n={};for(const i in t)(!$c(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function t0(t,e,n){const{props:i,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?du(i,a,c):!!a;if(l&8){const p=e.dynamicProps;for(let d=0;d<p.length;d++){const g=p[d];if(a[g]!==i[g]&&!sl(c,g))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?du(i,a,c):!0:!!a;return!1}function du(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!sl(n,s))return!0}return!1}function pf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Qd=t=>t.__isSuspense,n0={name:"Suspense",__isSuspense:!0,process(t,e,n,i,r,s,a,o,l,c){t==null?r0(e,n,i,r,s,a,o,l,c):s0(t,e,n,i,r,a,o,l,c)},hydrate:a0,create:mf,normalize:o0},i0=n0;function ha(t,e){const n=t.props&&t.props[e];lt(n)&&n()}function r0(t,e,n,i,r,s,a,o,l){const{p:c,o:{createElement:p}}=l,d=p("div"),g=t.suspense=mf(t,r,i,e,d,n,s,a,o,l);c(null,g.pendingBranch=t.ssContent,d,null,i,g,s,a),g.deps>0?(ha(t,"onPending"),ha(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,s,a),_s(g,t.ssFallback)):g.resolve(!1,!0)}function s0(t,e,n,i,r,s,a,o,{p:l,um:c,o:{createElement:p}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const g=e.ssContent,S=e.ssFallback,{activeBranch:_,pendingBranch:R,isInFallback:v,isHydrating:h}=d;if(R)d.pendingBranch=g,ei(g,R)?(l(R,g,d.hiddenContainer,null,r,d,s,a,o),d.deps<=0?d.resolve():v&&(l(_,S,n,i,r,null,s,a,o),_s(d,S))):(d.pendingId++,h?(d.isHydrating=!1,d.activeBranch=R):c(R,r,d),d.deps=0,d.effects.length=0,d.hiddenContainer=p("div"),v?(l(null,g,d.hiddenContainer,null,r,d,s,a,o),d.deps<=0?d.resolve():(l(_,S,n,i,r,null,s,a,o),_s(d,S))):_&&ei(g,_)?(l(_,g,n,i,r,d,s,a,o),d.resolve(!0)):(l(null,g,d.hiddenContainer,null,r,d,s,a,o),d.deps<=0&&d.resolve()));else if(_&&ei(g,_))l(_,g,n,i,r,d,s,a,o),_s(d,g);else if(ha(e,"onPending"),d.pendingBranch=g,d.pendingId++,l(null,g,d.hiddenContainer,null,r,d,s,a,o),d.deps<=0)d.resolve();else{const{timeout:u,pendingId:f}=d;u>0?setTimeout(()=>{d.pendingId===f&&d.fallback(S)},u):u===0&&d.fallback(S)}}function mf(t,e,n,i,r,s,a,o,l,c,p=!1){const{p:d,m:g,um:S,n:_,o:{parentNode:R,remove:v}}=c;let h;const u=l0(t);u&&e!=null&&e.pendingBranch&&(h=e.pendingId,e.deps++);const f=t.props?Po(t.props.timeout):void 0,y={vnode:t,parent:e,parentComponent:n,isSVG:a,container:i,hiddenContainer:r,anchor:s,deps:0,pendingId:0,timeout:typeof f=="number"?f:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:p,isUnmounted:!1,effects:[],resolve(E=!1,M=!1){const{vnode:C,activeBranch:T,pendingBranch:w,pendingId:L,effects:k,parentComponent:I,container:O}=y;if(y.isHydrating)y.isHydrating=!1;else if(!E){const Z=T&&w.transition&&w.transition.mode==="out-in";Z&&(T.transition.afterLeave=()=>{L===y.pendingId&&g(w,O,G,0)});let{anchor:G}=y;T&&(G=_(T),S(T,I,y,!0)),Z||g(w,O,G,0)}_s(y,w),y.pendingBranch=null,y.isInFallback=!1;let F=y.parent,X=!1;for(;F;){if(F.pendingBranch){F.effects.push(...k),X=!0;break}F=F.parent}X||hf(k),y.effects=[],u&&e&&e.pendingBranch&&h===e.pendingId&&(e.deps--,e.deps===0&&!M&&e.resolve()),ha(C,"onResolve")},fallback(E){if(!y.pendingBranch)return;const{vnode:M,activeBranch:C,parentComponent:T,container:w,isSVG:L}=y;ha(M,"onFallback");const k=_(C),I=()=>{y.isInFallback&&(d(null,E,w,k,T,null,L,o,l),_s(y,E))},O=E.transition&&E.transition.mode==="out-in";O&&(C.transition.afterLeave=I),y.isInFallback=!0,S(C,T,null,!0),O||I()},move(E,M,C){y.activeBranch&&g(y.activeBranch,E,M,C),y.container=E},next(){return y.activeBranch&&_(y.activeBranch)},registerDep(E,M){const C=!!y.pendingBranch;C&&y.deps++;const T=E.vnode.el;E.asyncDep.catch(w=>{Br(w,E,0)}).then(w=>{if(E.isUnmounted||y.isUnmounted||y.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:L}=E;Ac(E,w,!1),T&&(L.el=T);const k=!T&&E.subTree.el;M(E,L,R(T||E.subTree.el),T?null:_(E.subTree),y,a,l),k&&v(k),pf(E,L.el),C&&--y.deps===0&&y.resolve()})},unmount(E,M){y.isUnmounted=!0,y.activeBranch&&S(y.activeBranch,n,E,M),y.pendingBranch&&S(y.pendingBranch,n,E,M)}};return y}function a0(t,e,n,i,r,s,a,o,l){const c=e.suspense=mf(e,i,n,t.parentNode,document.createElement("div"),null,r,s,a,o,!0),p=l(t,c.pendingBranch=e.ssContent,n,c,s,a);return c.deps===0&&c.resolve(!1,!0),p}function o0(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=pu(i?n.default:n),t.ssFallback=i?pu(n.fallback):Ut(hn)}function pu(t){let e;if(lt(t)){const n=Dr&&t._c;n&&(t._d=!1,hl()),t=t(),n&&(t._d=!0,e=Mn,Rp())}return We(t)&&(t=Jg(t)),t=Dn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function ep(t,e){e&&e.pendingBranch?We(t)?e.effects.push(...t):e.effects.push(t):hf(t)}function _s(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t,r=n.el=e.el;i&&i.subTree===n&&(i.vnode.el=r,pf(i,r))}function l0(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}function c0(t,e){return wa(t,null,e)}function tp(t,e){return wa(t,null,{flush:"post"})}function f0(t,e){return wa(t,null,{flush:"sync"})}const qa={};function xr(t,e,n){return wa(t,e,n)}function wa(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:a}=At){var o;const l=Dd()===((o=Wt)==null?void 0:o.scope)?Wt:null;let c,p=!1,d=!1;if(Yt(t)?(c=()=>t.value,p=oa(t)):yr(t)?(c=()=>t,i=!0):We(t)?(d=!0,p=t.some(y=>yr(y)||oa(y)),c=()=>t.map(y=>{if(Yt(y))return y.value;if(yr(y))return mr(y);if(lt(y))return wi(y,l,2)})):lt(t)?e?c=()=>wi(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return g&&g(),Un(t,l,3,[S])}:c=vn,e&&i){const y=c;c=()=>mr(y())}let g,S=y=>{g=u.onStop=()=>{wi(y,l,4)}},_;if(Ss)if(S=vn,e?n&&Un(e,l,3,[c(),d?[]:void 0,S]):c(),r==="sync"){const y=Gp();_=y.__watcherHandles||(y.__watcherHandles=[])}else return vn;let R=d?new Array(t.length).fill(qa):qa;const v=()=>{if(u.active)if(e){const y=u.run();(i||p||(d?y.some((E,M)=>ys(E,R[M])):ys(y,R)))&&(g&&g(),Un(e,l,3,[y,R===qa?void 0:d&&R[0]===qa?[]:R,S]),R=y)}else u.run()};v.allowRecurse=!!e;let h;r==="sync"?h=v:r==="post"?h=()=>tn(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),h=()=>rl(v));const u=new Aa(c,h);e?n?v():R=u.run():r==="post"?tn(u.run.bind(u),l&&l.suspense):u.run();const f=()=>{u.stop(),l&&l.scope&&Kc(l.scope.effects,u)};return _&&_.push(f),f}function u0(t,e,n){const i=this.proxy,r=ut(t)?t.includes(".")?np(i,t):()=>i[t]:t.bind(i,i);let s;lt(e)?s=e:(s=e.handler,n=e);const a=Wt;Ji(this);const o=wa(r,s.bind(i),n);return a?Ji(a):Gi(),o}function np(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function mr(t,e){if(!Ct(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Yt(t))mr(t.value,e);else if(We(t))for(let n=0;n<t.length;n++)mr(t[n],e);else if(Or(t)||us(t))t.forEach(n=>{mr(n,e)});else if(wd(t))for(const n in t)mr(t[n],e);return t}function h0(t,e){const n=Qt;if(n===null)return t;const i=pl(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[a,o,l,c=At]=e[s];a&&(lt(a)&&(a={mounted:a,updated:a}),a.deep&&mr(o),r.push({dir:a,instance:i,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function si(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Ds(),Un(l,n,8,[t.el,o,t,e]),Is())}}function _f(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ra(()=>{t.isMounted=!0}),fl(()=>{t.isUnmounting=!0}),t}const Bn=[Function,Array],gf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Bn,onEnter:Bn,onAfterEnter:Bn,onEnterCancelled:Bn,onBeforeLeave:Bn,onLeave:Bn,onAfterLeave:Bn,onLeaveCancelled:Bn,onBeforeAppear:Bn,onAppear:Bn,onAfterAppear:Bn,onAppearCancelled:Bn},d0={name:"BaseTransition",props:gf,setup(t,{slots:e}){const n=Pi(),i=_f();let r;return()=>{const s=e.default&&ol(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const R of s)if(R.type!==hn){a=R;break}}const o=yt(t),{mode:l}=o;if(i.isLeaving)return Cl(a);const c=mu(a);if(!c)return Cl(a);const p=xs(c,o,i,n);Pr(c,p);const d=n.subTree,g=d&&mu(d);let S=!1;const{getTransitionKey:_}=c.type;if(_){const R=_();r===void 0?r=R:R!==r&&(r=R,S=!0)}if(g&&g.type!==hn&&(!ei(c,g)||S)){const R=xs(g,o,i,n);if(Pr(g,R),l==="out-in")return i.isLeaving=!0,R.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},Cl(a);l==="in-out"&&c.type!==hn&&(R.delayLeave=(v,h,u)=>{const f=rp(i,g);f[String(g.key)]=g,v._leaveCb=()=>{h(),v._leaveCb=void 0,delete p.delayedLeave},p.delayedLeave=u})}return a}}},ip=d0;function rp(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function xs(t,e,n,i){const{appear:r,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:p,onBeforeLeave:d,onLeave:g,onAfterLeave:S,onLeaveCancelled:_,onBeforeAppear:R,onAppear:v,onAfterAppear:h,onAppearCancelled:u}=e,f=String(t.key),y=rp(n,t),E=(T,w)=>{T&&Un(T,i,9,w)},M=(T,w)=>{const L=w[1];E(T,w),We(T)?T.every(k=>k.length<=1)&&L():T.length<=1&&L()},C={mode:s,persisted:a,beforeEnter(T){let w=o;if(!n.isMounted)if(r)w=R||o;else return;T._leaveCb&&T._leaveCb(!0);const L=y[f];L&&ei(t,L)&&L.el._leaveCb&&L.el._leaveCb(),E(w,[T])},enter(T){let w=l,L=c,k=p;if(!n.isMounted)if(r)w=v||l,L=h||c,k=u||p;else return;let I=!1;const O=T._enterCb=F=>{I||(I=!0,F?E(k,[T]):E(L,[T]),C.delayedLeave&&C.delayedLeave(),T._enterCb=void 0)};w?M(w,[T,O]):O()},leave(T,w){const L=String(t.key);if(T._enterCb&&T._enterCb(!0),n.isUnmounting)return w();E(d,[T]);let k=!1;const I=T._leaveCb=O=>{k||(k=!0,w(),O?E(_,[T]):E(S,[T]),T._leaveCb=void 0,y[L]===t&&delete y[L])};y[L]=t,g?M(g,[T,I]):I()},clone(T){return xs(T,e,n,i)}};return C}function Cl(t){if(Ca(t))return t=ci(t),t.children=null,t}function mu(t){return Ca(t)?t.children?t.children[0]:void 0:t}function Pr(t,e){t.shapeFlag&6&&t.component?Pr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ol(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let a=t[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===nn?(a.patchFlag&128&&r++,i=i.concat(ol(a.children,e,o))):(e||a.type!==hn)&&i.push(o!=null?ci(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function vf(t,e){return lt(t)?(()=>vt({name:t.name},e,{setup:t}))():t}const Sr=t=>!!t.type.__asyncLoader;function p0(t){lt(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,timeout:s,suspensible:a=!0,onError:o}=t;let l=null,c,p=0;const d=()=>(p++,l=null,g()),g=()=>{let S;return l||(S=l=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),o)return new Promise((R,v)=>{o(_,()=>R(d()),()=>v(_),p+1)});throw _}).then(_=>S!==l&&l?l:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),c=_,_)))};return vf({name:"AsyncComponentWrapper",__asyncLoader:g,get __asyncResolved(){return c},setup(){const S=Wt;if(c)return()=>Rl(c,S);const _=u=>{l=null,Br(u,S,13,!i)};if(a&&S.suspense||Ss)return g().then(u=>()=>Rl(u,S)).catch(u=>(_(u),()=>i?Ut(i,{error:u}):null));const R=ps(!1),v=ps(),h=ps(!!r);return r&&setTimeout(()=>{h.value=!1},r),s!=null&&setTimeout(()=>{if(!R.value&&!v.value){const u=new Error(`Async component timed out after ${s}ms.`);_(u),v.value=u}},s),g().then(()=>{R.value=!0,S.parent&&Ca(S.parent.vnode)&&rl(S.parent.update)}).catch(u=>{_(u),v.value=u}),()=>{if(R.value&&c)return Rl(c,S);if(v.value&&i)return Ut(i,{error:v.value});if(n&&!h.value)return Ut(n)}}})}function Rl(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,a=Ut(t,i,r);return a.ref=n,a.ce=s,delete e.vnode.ce,a}const Ca=t=>t.type.__isKeepAlive,m0={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Pi(),i=n.ctx;if(!i.renderer)return()=>{const u=e.default&&e.default();return u&&u.length===1?u[0]:u};const r=new Map,s=new Set;let a=null;const o=n.suspense,{renderer:{p:l,m:c,um:p,o:{createElement:d}}}=i,g=d("div");i.activate=(u,f,y,E,M)=>{const C=u.component;c(u,f,y,0,o),l(C.vnode,u,f,y,C,o,E,u.slotScopeIds,M),tn(()=>{C.isDeactivated=!1,C.a&&ds(C.a);const T=u.props&&u.props.onVnodeMounted;T&&xn(T,C.parent,u)},o)},i.deactivate=u=>{const f=u.component;c(u,g,null,1,o),tn(()=>{f.da&&ds(f.da);const y=u.props&&u.props.onVnodeUnmounted;y&&xn(y,f.parent,u),f.isDeactivated=!0},o)};function S(u){Pl(u),p(u,n,o,!0)}function _(u){r.forEach((f,y)=>{const E=Cc(f.type);E&&(!u||!u(E))&&R(y)})}function R(u){const f=r.get(u);!a||!ei(f,a)?S(f):a&&Pl(a),r.delete(u),s.delete(u)}xr(()=>[t.include,t.exclude],([u,f])=>{u&&_(y=>Ks(u,y)),f&&_(y=>!Ks(f,y))},{flush:"post",deep:!0});let v=null;const h=()=>{v!=null&&r.set(v,Ll(n.subTree))};return Ra(h),cl(h),fl(()=>{r.forEach(u=>{const{subTree:f,suspense:y}=n,E=Ll(f);if(u.type===E.type&&u.key===E.key){Pl(E);const M=E.component.da;M&&tn(M,y);return}S(u)})}),()=>{if(v=null,!e.default)return null;const u=e.default(),f=u[0];if(u.length>1)return a=null,u;if(!Zi(f)||!(f.shapeFlag&4)&&!(f.shapeFlag&128))return a=null,f;let y=Ll(f);const E=y.type,M=Cc(Sr(y)?y.type.__asyncResolved||{}:E),{include:C,exclude:T,max:w}=t;if(C&&(!M||!Ks(C,M))||T&&M&&Ks(T,M))return a=y,f;const L=y.key==null?E:y.key,k=r.get(L);return y.el&&(y=ci(y),f.shapeFlag&128&&(f.ssContent=y)),v=L,k?(y.el=k.el,y.component=k.component,y.transition&&Pr(y,y.transition),y.shapeFlag|=512,s.delete(L),s.add(L)):(s.add(L),w&&s.size>parseInt(w,10)&&R(s.values().next().value)),y.shapeFlag|=256,a=y,Qd(f.type)?f:y}}},_0=m0;function Ks(t,e){return We(t)?t.some(n=>Ks(n,e)):ut(t)?t.split(",").includes(e):R_(t)?t.test(e):!1}function sp(t,e){op(t,"a",e)}function ap(t,e){op(t,"da",e)}function op(t,e,n=Wt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ll(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Ca(r.parent.vnode)&&g0(i,e,n,r),r=r.parent}}function g0(t,e,n,i){const r=ll(e,t,i,!0);ul(()=>{Kc(i[e],r)},n)}function Pl(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Ll(t){return t.shapeFlag&128?t.ssContent:t}function ll(t,e,n=Wt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{if(n.isUnmounted)return;Ds(),Ji(n);const o=Un(e,n,t,a);return Gi(),Is(),o});return i?r.unshift(s):r.push(s),s}}const Ri=t=>(e,n=Wt)=>(!Ss||t==="sp")&&ll(t,(...i)=>e(...i),n),lp=Ri("bm"),Ra=Ri("m"),cp=Ri("bu"),cl=Ri("u"),fl=Ri("bum"),ul=Ri("um"),fp=Ri("sp"),up=Ri("rtg"),hp=Ri("rtc");function dp(t,e=Wt){ll("ec",t,e)}const yf="components",v0="directives";function y0(t,e){return xf(yf,t,!0,e)||t}const pp=Symbol.for("v-ndc");function x0(t){return ut(t)?xf(yf,t,!1)||t:t||pp}function S0(t){return xf(v0,t)}function xf(t,e,n=!0,i=!1){const r=Qt||Wt;if(r){const s=r.type;if(t===yf){const o=Cc(s,!1);if(o&&(o===e||o===Xt(e)||o===Fr(Xt(e))))return s}const a=_u(r[t]||s[t],e)||_u(r.appContext[t],e);return!a&&i?s:a}}function _u(t,e){return t&&(t[e]||t[Xt(e)]||t[Fr(Xt(e))])}function T0(t,e,n,i){let r;const s=n&&n[i];if(We(t)||ut(t)){r=new Array(t.length);for(let a=0,o=t.length;a<o;a++)r[a]=e(t[a],a,void 0,s&&s[a])}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(Ct(t))if(t[Symbol.iterator])r=Array.from(t,(a,o)=>e(a,o,void 0,s&&s[o]));else{const a=Object.keys(t);r=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];r[o]=e(t[c],c,o,s&&s[o])}}else r=[];return n&&(n[i]=r),r}function M0(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(We(i))for(let r=0;r<i.length;r++)t[i[r].name]=i[r].fn;else i&&(t[i.name]=i.key?(...r)=>{const s=i.fn(...r);return s&&(s.key=i.key),s}:i.fn)}return t}function E0(t,e,n={},i,r){if(Qt.isCE||Qt.parent&&Sr(Qt.parent)&&Qt.parent.isCE)return e!=="default"&&(n.name=e),Ut("slot",n,i&&i());let s=t[e];s&&s._c&&(s._d=!1),hl();const a=s&&mp(s(n)),o=Ef(nn,{key:n.key||a&&a.key||`_${e}`},a||(i?i():[]),a&&t._===1?64:-2);return!r&&o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),s&&s._c&&(s._d=!0),o}function mp(t){return t.some(e=>Zi(e)?!(e.type===hn||e.type===nn&&!mp(e.children)):!0)?t:null}function b0(t,e){const n={};for(const i in t)n[e&&/[A-Z]/.test(i)?`on:${i}`:hs(i)]=t[i];return n}const yc=t=>t?Np(t)?pl(t)||t.proxy:yc(t.parent):null,Qs=vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yc(t.parent),$root:t=>yc(t.root),$emit:t=>t.emit,$options:t=>Sf(t),$forceUpdate:t=>t.f||(t.f=()=>rl(t.update)),$nextTick:t=>t.n||(t.n=uf.bind(t.proxy)),$watch:t=>u0.bind(t)}),Dl=(t,e)=>t!==At&&!t.__isScriptSetup&&Tt(t,e),xc={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=t;let c;if(e[0]!=="$"){const S=a[e];if(S!==void 0)switch(S){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Dl(i,e))return a[e]=1,i[e];if(r!==At&&Tt(r,e))return a[e]=2,r[e];if((c=t.propsOptions[0])&&Tt(c,e))return a[e]=3,s[e];if(n!==At&&Tt(n,e))return a[e]=4,n[e];Sc&&(a[e]=0)}}const p=Qs[e];let d,g;if(p)return e==="$attrs"&&wn(t,"get",e),p(t);if((d=o.__cssModules)&&(d=d[e]))return d;if(n!==At&&Tt(n,e))return a[e]=4,n[e];if(g=l.config.globalProperties,Tt(g,e))return g[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Dl(r,e)?(r[e]=n,!0):i!==At&&Tt(i,e)?(i[e]=n,!0):Tt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!n[a]||t!==At&&Tt(t,a)||Dl(e,a)||(o=s[0])&&Tt(o,a)||Tt(i,a)||Tt(Qs,a)||Tt(r.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Tt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},A0=vt({},xc,{get(t,e){if(e!==Symbol.unscopables)return xc.get(t,e,t)},has(t,e){return e[0]!=="_"&&!N_(e)}});function w0(){return null}function C0(){return null}function R0(t){}function P0(t){}function L0(){return null}function D0(){}function I0(t,e){return null}function U0(){return _p().slots}function N0(){return _p().attrs}function O0(t,e,n){const i=Pi();if(n&&n.local){const r=ps(t[e]);return xr(()=>t[e],s=>r.value=s),xr(r,s=>{s!==t[e]&&i.emit(`update:${e}`,s)}),r}else return{__v_isRef:!0,get value(){return t[e]},set value(r){i.emit(`update:${e}`,r)}}}function _p(){const t=Pi();return t.setupContext||(t.setupContext=kp(t))}function da(t){return We(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function F0(t,e){const n=da(t);for(const i in e){if(i.startsWith("__skip"))continue;let r=n[i];r?We(r)||lt(r)?r=n[i]={type:r,default:e[i]}:r.default=e[i]:r===null&&(r=n[i]={default:e[i]}),r&&e[`__skip_${i}`]&&(r.skipFactory=!0)}return n}function B0(t,e){return!t||!e?t||e:We(t)&&We(e)?t.concat(e):vt({},da(t),da(e))}function k0(t,e){const n={};for(const i in t)e.includes(i)||Object.defineProperty(n,i,{enumerable:!0,get:()=>t[i]});return n}function z0(t){const e=Pi();let n=t();return Gi(),Zc(n)&&(n=n.catch(i=>{throw Ji(e),i})),[n,()=>Ji(e)]}let Sc=!0;function H0(t){const e=Sf(t),n=t.proxy,i=t.ctx;Sc=!1,e.beforeCreate&&gu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:p,beforeMount:d,mounted:g,beforeUpdate:S,updated:_,activated:R,deactivated:v,beforeDestroy:h,beforeUnmount:u,destroyed:f,unmounted:y,render:E,renderTracked:M,renderTriggered:C,errorCaptured:T,serverPrefetch:w,expose:L,inheritAttrs:k,components:I,directives:O,filters:F}=e;if(c&&V0(c,i,null),a)for(const G in a){const K=a[G];lt(K)&&(i[G]=K.bind(n))}if(r){const G=r.call(n,n);Ct(G)&&(t.data=tl(G))}if(Sc=!0,s)for(const G in s){const K=s[G],me=lt(K)?K.bind(n,n):lt(K.get)?K.get.bind(n,n):vn,pe=!lt(K)&&lt(K.set)?K.set.bind(n):vn,re=zp({get:me,set:pe});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>re.value,set:ae=>re.value=ae})}if(o)for(const G in o)gp(o[G],i,n,G);if(l){const G=lt(l)?l.call(n):l;Reflect.ownKeys(G).forEach(K=>{yp(K,G[K])})}p&&gu(p,t,"c");function Z(G,K){We(K)?K.forEach(me=>G(me.bind(n))):K&&G(K.bind(n))}if(Z(lp,d),Z(Ra,g),Z(cp,S),Z(cl,_),Z(sp,R),Z(ap,v),Z(dp,T),Z(hp,M),Z(up,C),Z(fl,u),Z(ul,y),Z(fp,w),We(L))if(L.length){const G=t.exposed||(t.exposed={});L.forEach(K=>{Object.defineProperty(G,K,{get:()=>n[K],set:me=>n[K]=me})})}else t.exposed||(t.exposed={});E&&t.render===vn&&(t.render=E),k!=null&&(t.inheritAttrs=k),I&&(t.components=I),O&&(t.directives=O)}function V0(t,e,n=vn){We(t)&&(t=Tc(t));for(const i in t){const r=t[i];let s;Ct(r)?"default"in r?s=ea(r.from||i,r.default,!0):s=ea(r.from||i):s=ea(r),Yt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function gu(t,e,n){Un(We(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function gp(t,e,n,i){const r=i.includes(".")?np(n,i):()=>n[i];if(ut(t)){const s=e[t];lt(s)&&xr(r,s)}else if(lt(t))xr(r,t.bind(n));else if(Ct(t))if(We(t))t.forEach(s=>gp(s,e,n,i));else{const s=lt(t.handler)?t.handler.bind(n):e[t.handler];lt(s)&&xr(r,s,t)}}function Sf(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Io(l,c,a,!0)),Io(l,e,a)),Ct(e)&&s.set(e,l),l}function Io(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Io(t,s,n,!0),r&&r.forEach(a=>Io(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=G0[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const G0={data:vu,props:yu,emits:yu,methods:Zs,computed:Zs,beforeCreate:mn,created:mn,beforeMount:mn,mounted:mn,beforeUpdate:mn,updated:mn,beforeDestroy:mn,beforeUnmount:mn,destroyed:mn,unmounted:mn,activated:mn,deactivated:mn,errorCaptured:mn,serverPrefetch:mn,components:Zs,directives:Zs,watch:X0,provide:vu,inject:W0};function vu(t,e){return e?t?function(){return vt(lt(t)?t.call(this,this):t,lt(e)?e.call(this,this):e)}:e:t}function W0(t,e){return Zs(Tc(t),Tc(e))}function Tc(t){if(We(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mn(t,e){return t?[...new Set([].concat(t,e))]:e}function Zs(t,e){return t?vt(Object.create(null),t,e):e}function yu(t,e){return t?We(t)&&We(e)?[...new Set([...t,...e])]:vt(Object.create(null),da(t),da(e??{})):e}function X0(t,e){if(!t)return e;if(!e)return t;const n=vt(Object.create(null),t);for(const i in e)n[i]=mn(t[i],e[i]);return n}function vp(){return{app:null,config:{isNativeTag:To,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let q0=0;function Y0(t,e){return function(i,r=null){lt(i)||(i=vt({},i)),r!=null&&!Ct(r)&&(r=null);const s=vp(),a=new Set;let o=!1;const l=s.app={_uid:q0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Xp,get config(){return s.config},set config(c){},use(c,...p){return a.has(c)||(c&&lt(c.install)?(a.add(c),c.install(l,...p)):lt(c)&&(a.add(c),c(l,...p))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,p){return p?(s.components[c]=p,l):s.components[c]},directive(c,p){return p?(s.directives[c]=p,l):s.directives[c]},mount(c,p,d){if(!o){const g=Ut(i,r);return g.appContext=s,p&&e?e(g,c):t(g,c,d),o=!0,l._container=c,c.__vue_app__=l,pl(g.component)||g.component.proxy}},unmount(){o&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,p){return s.provides[c]=p,l},runWithContext(c){pa=l;try{return c()}finally{pa=null}}};return l}}let pa=null;function yp(t,e){if(Wt){let n=Wt.provides;const i=Wt.parent&&Wt.parent.provides;i===n&&(n=Wt.provides=Object.create(i)),n[t]=e}}function ea(t,e,n=!1){const i=Wt||Qt;if(i||pa){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:pa._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&lt(e)?e.call(i&&i.proxy):e}}function j0(){return!!(Wt||Qt||pa)}function $0(t,e,n,i=!1){const r={},s={};Co(s,dl,1),t.propsDefaults=Object.create(null),xp(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:Xd(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function K0(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=yt(r),[l]=t.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const p=t.vnode.dynamicProps;for(let d=0;d<p.length;d++){let g=p[d];if(sl(t.emitsOptions,g))continue;const S=e[g];if(l)if(Tt(s,g))S!==s[g]&&(s[g]=S,c=!0);else{const _=Xt(g);r[_]=Mc(l,o,_,S,t,!1)}else S!==s[g]&&(s[g]=S,c=!0)}}}else{xp(t,e,r,s)&&(c=!0);let p;for(const d in o)(!e||!Tt(e,d)&&((p=In(d))===d||!Tt(e,p)))&&(l?n&&(n[d]!==void 0||n[p]!==void 0)&&(r[d]=Mc(l,o,d,void 0,t,!0)):delete r[d]);if(s!==o)for(const d in s)(!e||!Tt(e,d))&&(delete s[d],c=!0)}c&&Ci(t,"set","$attrs")}function xp(t,e,n,i){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(gr(l))continue;const c=e[l];let p;r&&Tt(r,p=Xt(l))?!s||!s.includes(p)?n[p]=c:(o||(o={}))[p]=c:sl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=yt(n),c=o||At;for(let p=0;p<s.length;p++){const d=s[p];n[d]=Mc(r,l,d,c[d],t,!Tt(c,d))}}return a}function Mc(t,e,n,i,r,s){const a=t[n];if(a!=null){const o=Tt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&lt(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(Ji(r),i=c[n]=l.call(null,e),Gi())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===In(n))&&(i=!0))}return i}function Sp(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!lt(t)){const p=d=>{l=!0;const[g,S]=Sp(d,e,!0);vt(a,g),S&&o.push(...S)};!n&&e.mixins.length&&e.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!s&&!l)return Ct(t)&&i.set(t,fs),fs;if(We(s))for(let p=0;p<s.length;p++){const d=Xt(s[p]);xu(d)&&(a[d]=At)}else if(s)for(const p in s){const d=Xt(p);if(xu(d)){const g=s[p],S=a[d]=We(g)||lt(g)?{type:g}:vt({},g);if(S){const _=Mu(Boolean,S.type),R=Mu(String,S.type);S[0]=_>-1,S[1]=R<0||_<R,(_>-1||Tt(S,"default"))&&o.push(d)}}}const c=[a,o];return Ct(t)&&i.set(t,c),c}function xu(t){return t[0]!=="$"}function Su(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Tu(t,e){return Su(t)===Su(e)}function Mu(t,e){return We(e)?e.findIndex(n=>Tu(n,t)):lt(e)&&Tu(e,t)?0:-1}const Tp=t=>t[0]==="_"||t==="$stable",Tf=t=>We(t)?t.map(Dn):[Dn(t)],Z0=(t,e,n)=>{if(e._n)return e;const i=df((...r)=>Tf(e(...r)),n);return i._c=!1,i},Mp=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Tp(r))continue;const s=t[r];if(lt(s))e[r]=Z0(r,s,i);else if(s!=null){const a=Tf(s);e[r]=()=>a}}},Ep=(t,e)=>{const n=Tf(e);t.slots.default=()=>n},J0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=yt(e),Co(e,"_",n)):Mp(e,t.slots={})}else t.slots={},e&&Ep(t,e);Co(t.slots,dl,1)},Q0=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=At;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:(vt(r,e),!n&&o===1&&delete r._):(s=!e.$stable,Mp(e,r)),a=e}else e&&(Ep(t,e),a={default:1});if(s)for(const o in r)!Tp(o)&&!(o in a)&&delete r[o]};function Uo(t,e,n,i,r=!1){if(We(t)){t.forEach((g,S)=>Uo(g,e&&(We(e)?e[S]:e),n,i,r));return}if(Sr(i)&&!r)return;const s=i.shapeFlag&4?pl(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=t,c=e&&e.r,p=o.refs===At?o.refs={}:o.refs,d=o.setupState;if(c!=null&&c!==l&&(ut(c)?(p[c]=null,Tt(d,c)&&(d[c]=null)):Yt(c)&&(c.value=null)),lt(l))wi(l,o,12,[a,p]);else{const g=ut(l),S=Yt(l);if(g||S){const _=()=>{if(t.f){const R=g?Tt(d,l)?d[l]:p[l]:l.value;r?We(R)&&Kc(R,s):We(R)?R.includes(s)||R.push(s):g?(p[l]=[s],Tt(d,l)&&(d[l]=p[l])):(l.value=[s],t.k&&(p[t.k]=l.value))}else g?(p[l]=a,Tt(d,l)&&(d[l]=a)):S&&(l.value=a,t.k&&(p[t.k]=a))};a?(_.id=-1,tn(_,n)):_()}}}let Di=!1;const Ya=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",ja=t=>t.nodeType===8;function ev(t){const{mt:e,p:n,o:{patchProp:i,createText:r,nextSibling:s,parentNode:a,remove:o,insert:l,createComment:c}}=t,p=(h,u)=>{if(!u.hasChildNodes()){n(null,h,u),Do(),u._vnode=h;return}Di=!1,d(u.firstChild,h,null,null,null),Do(),u._vnode=h,Di&&console.error("Hydration completed but contains mismatches.")},d=(h,u,f,y,E,M=!1)=>{const C=ja(h)&&h.data==="[",T=()=>R(h,u,f,y,E,C),{type:w,ref:L,shapeFlag:k,patchFlag:I}=u;let O=h.nodeType;u.el=h,I===-2&&(M=!1,u.dynamicChildren=null);let F=null;switch(w){case Lr:O!==3?u.children===""?(l(u.el=r(""),a(h),h),F=h):F=T():(h.data!==u.children&&(Di=!0,h.data=u.children),F=s(h));break;case hn:O!==8||C?F=T():F=s(h);break;case Tr:if(C&&(h=s(h),O=h.nodeType),O===1||O===3){F=h;const X=!u.children.length;for(let Z=0;Z<u.staticCount;Z++)X&&(u.children+=F.nodeType===1?F.outerHTML:F.data),Z===u.staticCount-1&&(u.anchor=F),F=s(F);return C?s(F):F}else T();break;case nn:C?F=_(h,u,f,y,E,M):F=T();break;default:if(k&1)O!==1||u.type.toLowerCase()!==h.tagName.toLowerCase()?F=T():F=g(h,u,f,y,E,M);else if(k&6){u.slotScopeIds=E;const X=a(h);if(e(u,X,null,f,y,Ya(X),M),F=C?v(h):s(h),F&&ja(F)&&F.data==="teleport end"&&(F=s(F)),Sr(u)){let Z;C?(Z=Ut(nn),Z.anchor=F?F.previousSibling:X.lastChild):Z=h.nodeType===3?Af(""):Ut("div"),Z.el=h,u.component.subTree=Z}}else k&64?O!==8?F=T():F=u.type.hydrate(h,u,f,y,E,M,t,S):k&128&&(F=u.type.hydrate(h,u,f,y,Ya(a(h)),E,M,t,d))}return L!=null&&Uo(L,null,y,u),F},g=(h,u,f,y,E,M)=>{M=M||!!u.dynamicChildren;const{type:C,props:T,patchFlag:w,shapeFlag:L,dirs:k}=u,I=C==="input"&&k||C==="option";if(I||w!==-1){if(k&&si(u,null,f,"created"),T)if(I||!M||w&48)for(const F in T)(I&&F.endsWith("value")||Nr(F)&&!gr(F))&&i(h,F,null,T[F],!1,void 0,f);else T.onClick&&i(h,"onClick",null,T.onClick,!1,void 0,f);let O;if((O=T&&T.onVnodeBeforeMount)&&xn(O,f,u),k&&si(u,null,f,"beforeMount"),((O=T&&T.onVnodeMounted)||k)&&ep(()=>{O&&xn(O,f,u),k&&si(u,null,f,"mounted")},y),L&16&&!(T&&(T.innerHTML||T.textContent))){let F=S(h.firstChild,u,h,f,y,E,M);for(;F;){Di=!0;const X=F;F=F.nextSibling,o(X)}}else L&8&&h.textContent!==u.children&&(Di=!0,h.textContent=u.children)}return h.nextSibling},S=(h,u,f,y,E,M,C)=>{C=C||!!u.dynamicChildren;const T=u.children,w=T.length;for(let L=0;L<w;L++){const k=C?T[L]:T[L]=Dn(T[L]);if(h)h=d(h,k,y,E,M,C);else{if(k.type===Lr&&!k.children)continue;Di=!0,n(null,k,f,null,y,E,Ya(f),M)}}return h},_=(h,u,f,y,E,M)=>{const{slotScopeIds:C}=u;C&&(E=E?E.concat(C):C);const T=a(h),w=S(s(h),u,T,f,y,E,M);return w&&ja(w)&&w.data==="]"?s(u.anchor=w):(Di=!0,l(u.anchor=c("]"),T,w),w)},R=(h,u,f,y,E,M)=>{if(Di=!0,u.el=null,M){const w=v(h);for(;;){const L=s(h);if(L&&L!==w)o(L);else break}}const C=s(h),T=a(h);return o(h),n(null,u,T,C,f,y,Ya(T),E),C},v=h=>{let u=0;for(;h;)if(h=s(h),h&&ja(h)&&(h.data==="["&&u++,h.data==="]")){if(u===0)return s(h);u--}return h};return[p,d]}const tn=ep;function bp(t){return wp(t)}function Ap(t){return wp(t,ev)}function wp(t,e){const n=pc();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:p,parentNode:d,nextSibling:g,setScopeId:S=vn,insertStaticContent:_}=t,R=(U,Q,se,fe=null,ue=null,Pe=null,Te=!1,le=null,Ee=!!Q.dynamicChildren)=>{if(U===Q)return;U&&!ei(U,Q)&&(fe=Qe(U),ae(U,ue,Pe,!0),U=null),Q.patchFlag===-2&&(Ee=!1,Q.dynamicChildren=null);const{type:Ae,ref:Be,shapeFlag:m}=Q;switch(Ae){case Lr:v(U,Q,se,fe);break;case hn:h(U,Q,se,fe);break;case Tr:U==null&&u(Q,se,fe,Te);break;case nn:I(U,Q,se,fe,ue,Pe,Te,le,Ee);break;default:m&1?E(U,Q,se,fe,ue,Pe,Te,le,Ee):m&6?O(U,Q,se,fe,ue,Pe,Te,le,Ee):(m&64||m&128)&&Ae.process(U,Q,se,fe,ue,Pe,Te,le,Ee,et)}Be!=null&&ue&&Uo(Be,U&&U.ref,Pe,Q||U,!Q)},v=(U,Q,se,fe)=>{if(U==null)i(Q.el=o(Q.children),se,fe);else{const ue=Q.el=U.el;Q.children!==U.children&&c(ue,Q.children)}},h=(U,Q,se,fe)=>{U==null?i(Q.el=l(Q.children||""),se,fe):Q.el=U.el},u=(U,Q,se,fe)=>{[U.el,U.anchor]=_(U.children,Q,se,fe,U.el,U.anchor)},f=({el:U,anchor:Q},se,fe)=>{let ue;for(;U&&U!==Q;)ue=g(U),i(U,se,fe),U=ue;i(Q,se,fe)},y=({el:U,anchor:Q})=>{let se;for(;U&&U!==Q;)se=g(U),r(U),U=se;r(Q)},E=(U,Q,se,fe,ue,Pe,Te,le,Ee)=>{Te=Te||Q.type==="svg",U==null?M(Q,se,fe,ue,Pe,Te,le,Ee):w(U,Q,ue,Pe,Te,le,Ee)},M=(U,Q,se,fe,ue,Pe,Te,le)=>{let Ee,Ae;const{type:Be,props:m,shapeFlag:x,transition:P,dirs:D}=U;if(Ee=U.el=a(U.type,Pe,m&&m.is,m),x&8?p(Ee,U.children):x&16&&T(U.children,Ee,null,fe,ue,Pe&&Be!=="foreignObject",Te,le),D&&si(U,null,fe,"created"),C(Ee,U,U.scopeId,Te,fe),m){for(const Y in m)Y!=="value"&&!gr(Y)&&s(Ee,Y,null,m[Y],Pe,U.children,fe,ue,Ye);"value"in m&&s(Ee,"value",null,m.value),(Ae=m.onVnodeBeforeMount)&&xn(Ae,fe,U)}D&&si(U,null,fe,"beforeMount");const V=(!ue||ue&&!ue.pendingBranch)&&P&&!P.persisted;V&&P.beforeEnter(Ee),i(Ee,Q,se),((Ae=m&&m.onVnodeMounted)||V||D)&&tn(()=>{Ae&&xn(Ae,fe,U),V&&P.enter(Ee),D&&si(U,null,fe,"mounted")},ue)},C=(U,Q,se,fe,ue)=>{if(se&&S(U,se),fe)for(let Pe=0;Pe<fe.length;Pe++)S(U,fe[Pe]);if(ue){let Pe=ue.subTree;if(Q===Pe){const Te=ue.vnode;C(U,Te,Te.scopeId,Te.slotScopeIds,ue.parent)}}},T=(U,Q,se,fe,ue,Pe,Te,le,Ee=0)=>{for(let Ae=Ee;Ae<U.length;Ae++){const Be=U[Ae]=le?ki(U[Ae]):Dn(U[Ae]);R(null,Be,Q,se,fe,ue,Pe,Te,le)}},w=(U,Q,se,fe,ue,Pe,Te)=>{const le=Q.el=U.el;let{patchFlag:Ee,dynamicChildren:Ae,dirs:Be}=Q;Ee|=U.patchFlag&16;const m=U.props||At,x=Q.props||At;let P;se&&rr(se,!1),(P=x.onVnodeBeforeUpdate)&&xn(P,se,Q,U),Be&&si(Q,U,se,"beforeUpdate"),se&&rr(se,!0);const D=ue&&Q.type!=="foreignObject";if(Ae?L(U.dynamicChildren,Ae,le,se,fe,D,Pe):Te||K(U,Q,le,null,se,fe,D,Pe,!1),Ee>0){if(Ee&16)k(le,Q,m,x,se,fe,ue);else if(Ee&2&&m.class!==x.class&&s(le,"class",null,x.class,ue),Ee&4&&s(le,"style",m.style,x.style,ue),Ee&8){const V=Q.dynamicProps;for(let Y=0;Y<V.length;Y++){const ne=V[Y],ie=m[ne],$=x[ne];($!==ie||ne==="value")&&s(le,ne,ie,$,ue,U.children,se,fe,Ye)}}Ee&1&&U.children!==Q.children&&p(le,Q.children)}else!Te&&Ae==null&&k(le,Q,m,x,se,fe,ue);((P=x.onVnodeUpdated)||Be)&&tn(()=>{P&&xn(P,se,Q,U),Be&&si(Q,U,se,"updated")},fe)},L=(U,Q,se,fe,ue,Pe,Te)=>{for(let le=0;le<Q.length;le++){const Ee=U[le],Ae=Q[le],Be=Ee.el&&(Ee.type===nn||!ei(Ee,Ae)||Ee.shapeFlag&70)?d(Ee.el):se;R(Ee,Ae,Be,null,fe,ue,Pe,Te,!0)}},k=(U,Q,se,fe,ue,Pe,Te)=>{if(se!==fe){if(se!==At)for(const le in se)!gr(le)&&!(le in fe)&&s(U,le,se[le],null,Te,Q.children,ue,Pe,Ye);for(const le in fe){if(gr(le))continue;const Ee=fe[le],Ae=se[le];Ee!==Ae&&le!=="value"&&s(U,le,Ae,Ee,Te,Q.children,ue,Pe,Ye)}"value"in fe&&s(U,"value",se.value,fe.value)}},I=(U,Q,se,fe,ue,Pe,Te,le,Ee)=>{const Ae=Q.el=U?U.el:o(""),Be=Q.anchor=U?U.anchor:o("");let{patchFlag:m,dynamicChildren:x,slotScopeIds:P}=Q;P&&(le=le?le.concat(P):P),U==null?(i(Ae,se,fe),i(Be,se,fe),T(Q.children,se,Be,ue,Pe,Te,le,Ee)):m>0&&m&64&&x&&U.dynamicChildren?(L(U.dynamicChildren,x,se,ue,Pe,Te,le),(Q.key!=null||ue&&Q===ue.subTree)&&Mf(U,Q,!0)):K(U,Q,se,Be,ue,Pe,Te,le,Ee)},O=(U,Q,se,fe,ue,Pe,Te,le,Ee)=>{Q.slotScopeIds=le,U==null?Q.shapeFlag&512?ue.ctx.activate(Q,se,fe,Te,Ee):F(Q,se,fe,ue,Pe,Te,Ee):X(U,Q,Ee)},F=(U,Q,se,fe,ue,Pe,Te)=>{const le=U.component=Up(U,fe,ue);if(Ca(U)&&(le.ctx.renderer=et),Op(le),le.asyncDep){if(ue&&ue.registerDep(le,Z),!U.el){const Ee=le.subTree=Ut(hn);h(null,Ee,Q,se)}return}Z(le,U,Q,se,ue,Pe,Te)},X=(U,Q,se)=>{const fe=Q.component=U.component;if(t0(U,Q,se))if(fe.asyncDep&&!fe.asyncResolved){G(fe,Q,se);return}else fe.next=Q,qg(fe.update),fe.update();else Q.el=U.el,fe.vnode=Q},Z=(U,Q,se,fe,ue,Pe,Te)=>{const le=()=>{if(U.isMounted){let{next:Be,bu:m,u:x,parent:P,vnode:D}=U,V=Be,Y;rr(U,!1),Be?(Be.el=D.el,G(U,Be,Te)):Be=D,m&&ds(m),(Y=Be.props&&Be.props.onVnodeBeforeUpdate)&&xn(Y,P,Be,D),rr(U,!0);const ne=Mo(U),ie=U.subTree;U.subTree=ne,R(ie,ne,d(ie.el),Qe(ie),U,ue,Pe),Be.el=ne.el,V===null&&pf(U,ne.el),x&&tn(x,ue),(Y=Be.props&&Be.props.onVnodeUpdated)&&tn(()=>xn(Y,P,Be,D),ue)}else{let Be;const{el:m,props:x}=Q,{bm:P,m:D,parent:V}=U,Y=Sr(Q);if(rr(U,!1),P&&ds(P),!Y&&(Be=x&&x.onVnodeBeforeMount)&&xn(Be,V,Q),rr(U,!0),m&&st){const ne=()=>{U.subTree=Mo(U),st(m,U.subTree,U,ue,null)};Y?Q.type.__asyncLoader().then(()=>!U.isUnmounted&&ne()):ne()}else{const ne=U.subTree=Mo(U);R(null,ne,se,fe,U,ue,Pe),Q.el=ne.el}if(D&&tn(D,ue),!Y&&(Be=x&&x.onVnodeMounted)){const ne=Q;tn(()=>xn(Be,V,ne),ue)}(Q.shapeFlag&256||V&&Sr(V.vnode)&&V.vnode.shapeFlag&256)&&U.a&&tn(U.a,ue),U.isMounted=!0,Q=se=fe=null}},Ee=U.effect=new Aa(le,()=>rl(Ae),U.scope),Ae=U.update=()=>Ee.run();Ae.id=U.uid,rr(U,!0),Ae()},G=(U,Q,se)=>{Q.component=U;const fe=U.vnode.props;U.vnode=Q,U.next=null,K0(U,Q.props,fe,se),Q0(U,Q.children,se),Ds(),hu(),Is()},K=(U,Q,se,fe,ue,Pe,Te,le,Ee=!1)=>{const Ae=U&&U.children,Be=U?U.shapeFlag:0,m=Q.children,{patchFlag:x,shapeFlag:P}=Q;if(x>0){if(x&128){pe(Ae,m,se,fe,ue,Pe,Te,le,Ee);return}else if(x&256){me(Ae,m,se,fe,ue,Pe,Te,le,Ee);return}}P&8?(Be&16&&Ye(Ae,ue,Pe),m!==Ae&&p(se,m)):Be&16?P&16?pe(Ae,m,se,fe,ue,Pe,Te,le,Ee):Ye(Ae,ue,Pe,!0):(Be&8&&p(se,""),P&16&&T(m,se,fe,ue,Pe,Te,le,Ee))},me=(U,Q,se,fe,ue,Pe,Te,le,Ee)=>{U=U||fs,Q=Q||fs;const Ae=U.length,Be=Q.length,m=Math.min(Ae,Be);let x;for(x=0;x<m;x++){const P=Q[x]=Ee?ki(Q[x]):Dn(Q[x]);R(U[x],P,se,null,ue,Pe,Te,le,Ee)}Ae>Be?Ye(U,ue,Pe,!0,!1,m):T(Q,se,fe,ue,Pe,Te,le,Ee,m)},pe=(U,Q,se,fe,ue,Pe,Te,le,Ee)=>{let Ae=0;const Be=Q.length;let m=U.length-1,x=Be-1;for(;Ae<=m&&Ae<=x;){const P=U[Ae],D=Q[Ae]=Ee?ki(Q[Ae]):Dn(Q[Ae]);if(ei(P,D))R(P,D,se,null,ue,Pe,Te,le,Ee);else break;Ae++}for(;Ae<=m&&Ae<=x;){const P=U[m],D=Q[x]=Ee?ki(Q[x]):Dn(Q[x]);if(ei(P,D))R(P,D,se,null,ue,Pe,Te,le,Ee);else break;m--,x--}if(Ae>m){if(Ae<=x){const P=x+1,D=P<Be?Q[P].el:fe;for(;Ae<=x;)R(null,Q[Ae]=Ee?ki(Q[Ae]):Dn(Q[Ae]),se,D,ue,Pe,Te,le,Ee),Ae++}}else if(Ae>x)for(;Ae<=m;)ae(U[Ae],ue,Pe,!0),Ae++;else{const P=Ae,D=Ae,V=new Map;for(Ae=D;Ae<=x;Ae++){const Le=Q[Ae]=Ee?ki(Q[Ae]):Dn(Q[Ae]);Le.key!=null&&V.set(Le.key,Ae)}let Y,ne=0;const ie=x-D+1;let $=!1,we=0;const xe=new Array(ie);for(Ae=0;Ae<ie;Ae++)xe[Ae]=0;for(Ae=P;Ae<=m;Ae++){const Le=U[Ae];if(ne>=ie){ae(Le,ue,Pe,!0);continue}let Ce;if(Le.key!=null)Ce=V.get(Le.key);else for(Y=D;Y<=x;Y++)if(xe[Y-D]===0&&ei(Le,Q[Y])){Ce=Y;break}Ce===void 0?ae(Le,ue,Pe,!0):(xe[Ce-D]=Ae+1,Ce>=we?we=Ce:$=!0,R(Le,Q[Ce],se,null,ue,Pe,Te,le,Ee),ne++)}const Me=$?tv(xe):fs;for(Y=Me.length-1,Ae=ie-1;Ae>=0;Ae--){const Le=D+Ae,Ce=Q[Le],Xe=Le+1<Be?Q[Le+1].el:fe;xe[Ae]===0?R(null,Ce,se,Xe,ue,Pe,Te,le,Ee):$&&(Y<0||Ae!==Me[Y]?re(Ce,se,Xe,2):Y--)}}},re=(U,Q,se,fe,ue=null)=>{const{el:Pe,type:Te,transition:le,children:Ee,shapeFlag:Ae}=U;if(Ae&6){re(U.component.subTree,Q,se,fe);return}if(Ae&128){U.suspense.move(Q,se,fe);return}if(Ae&64){Te.move(U,Q,se,et);return}if(Te===nn){i(Pe,Q,se);for(let m=0;m<Ee.length;m++)re(Ee[m],Q,se,fe);i(U.anchor,Q,se);return}if(Te===Tr){f(U,Q,se);return}if(fe!==2&&Ae&1&&le)if(fe===0)le.beforeEnter(Pe),i(Pe,Q,se),tn(()=>le.enter(Pe),ue);else{const{leave:m,delayLeave:x,afterLeave:P}=le,D=()=>i(Pe,Q,se),V=()=>{m(Pe,()=>{D(),P&&P()})};x?x(Pe,D,V):V()}else i(Pe,Q,se)},ae=(U,Q,se,fe=!1,ue=!1)=>{const{type:Pe,props:Te,ref:le,children:Ee,dynamicChildren:Ae,shapeFlag:Be,patchFlag:m,dirs:x}=U;if(le!=null&&Uo(le,null,se,U,!0),Be&256){Q.ctx.deactivate(U);return}const P=Be&1&&x,D=!Sr(U);let V;if(D&&(V=Te&&Te.onVnodeBeforeUnmount)&&xn(V,Q,U),Be&6)Fe(U.component,se,fe);else{if(Be&128){U.suspense.unmount(se,fe);return}P&&si(U,null,Q,"beforeUnmount"),Be&64?U.type.remove(U,Q,se,ue,et,fe):Ae&&(Pe!==nn||m>0&&m&64)?Ye(Ae,Q,se,!1,!0):(Pe===nn&&m&384||!ue&&Be&16)&&Ye(Ee,Q,se),fe&&Ne(U)}(D&&(V=Te&&Te.onVnodeUnmounted)||P)&&tn(()=>{V&&xn(V,Q,U),P&&si(U,null,Q,"unmounted")},se)},Ne=U=>{const{type:Q,el:se,anchor:fe,transition:ue}=U;if(Q===nn){ke(se,fe);return}if(Q===Tr){y(U);return}const Pe=()=>{r(se),ue&&!ue.persisted&&ue.afterLeave&&ue.afterLeave()};if(U.shapeFlag&1&&ue&&!ue.persisted){const{leave:Te,delayLeave:le}=ue,Ee=()=>Te(se,Pe);le?le(U.el,Pe,Ee):Ee()}else Pe()},ke=(U,Q)=>{let se;for(;U!==Q;)se=g(U),r(U),U=se;r(Q)},Fe=(U,Q,se)=>{const{bum:fe,scope:ue,update:Pe,subTree:Te,um:le}=U;fe&&ds(fe),ue.stop(),Pe&&(Pe.active=!1,ae(Te,U,Q,se)),le&&tn(le,Q),tn(()=>{U.isUnmounted=!0},Q),Q&&Q.pendingBranch&&!Q.isUnmounted&&U.asyncDep&&!U.asyncResolved&&U.suspenseId===Q.pendingId&&(Q.deps--,Q.deps===0&&Q.resolve())},Ye=(U,Q,se,fe=!1,ue=!1,Pe=0)=>{for(let Te=Pe;Te<U.length;Te++)ae(U[Te],Q,se,fe,ue)},Qe=U=>U.shapeFlag&6?Qe(U.component.subTree):U.shapeFlag&128?U.suspense.next():g(U.anchor||U.el),$e=(U,Q,se)=>{U==null?Q._vnode&&ae(Q._vnode,null,null,!0):R(Q._vnode||null,U,Q,null,null,null,se),hu(),Do(),Q._vnode=U},et={p:R,um:ae,m:re,r:Ne,mt:F,mc:T,pc:K,pbc:L,n:Qe,o:t};let Mt,st;return e&&([Mt,st]=e(et)),{render:$e,hydrate:Mt,createApp:Y0($e,Mt)}}function rr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Mf(t,e,n=!1){const i=t.children,r=e.children;if(We(i)&&We(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=ki(r[s]),o.el=a.el),n||Mf(a,o)),o.type===Lr&&(o.el=a.el)}}function tv(t){const e=t.slice(),n=[0];let i,r,s,a,o;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<c?s=o+1:a=o;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}const nv=t=>t.__isTeleport,ta=t=>t&&(t.disabled||t.disabled===""),Eu=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Ec=(t,e)=>{const n=t&&t.to;return ut(n)?e?e(n):null:n},iv={__isTeleport:!0,process(t,e,n,i,r,s,a,o,l,c){const{mc:p,pc:d,pbc:g,o:{insert:S,querySelector:_,createText:R,createComment:v}}=c,h=ta(e.props);let{shapeFlag:u,children:f,dynamicChildren:y}=e;if(t==null){const E=e.el=R(""),M=e.anchor=R("");S(E,n,i),S(M,n,i);const C=e.target=Ec(e.props,_),T=e.targetAnchor=R("");C&&(S(T,C),a=a||Eu(C));const w=(L,k)=>{u&16&&p(f,L,k,r,s,a,o,l)};h?w(n,M):C&&w(C,T)}else{e.el=t.el;const E=e.anchor=t.anchor,M=e.target=t.target,C=e.targetAnchor=t.targetAnchor,T=ta(t.props),w=T?n:M,L=T?E:C;if(a=a||Eu(M),y?(g(t.dynamicChildren,y,w,r,s,a,o),Mf(t,e,!0)):l||d(t,e,w,L,r,s,a,o,!1),h)T||$a(e,n,E,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const k=e.target=Ec(e.props,_);k&&$a(e,k,null,c,0)}else T&&$a(e,M,C,c,1)}Cp(e)},remove(t,e,n,i,{um:r,o:{remove:s}},a){const{shapeFlag:o,children:l,anchor:c,targetAnchor:p,target:d,props:g}=t;if(d&&s(p),(a||!ta(g))&&(s(c),o&16))for(let S=0;S<l.length;S++){const _=l[S];r(_,e,n,!0,!!_.dynamicChildren)}},move:$a,hydrate:rv};function $a(t,e,n,{o:{insert:i},m:r},s=2){s===0&&i(t.targetAnchor,e,n);const{el:a,anchor:o,shapeFlag:l,children:c,props:p}=t,d=s===2;if(d&&i(a,e,n),(!d||ta(p))&&l&16)for(let g=0;g<c.length;g++)r(c[g],e,n,2);d&&i(o,e,n)}function rv(t,e,n,i,r,s,{o:{nextSibling:a,parentNode:o,querySelector:l}},c){const p=e.target=Ec(e.props,l);if(p){const d=p._lpa||p.firstChild;if(e.shapeFlag&16)if(ta(e.props))e.anchor=c(a(t),e,o(t),n,i,r,s),e.targetAnchor=d;else{e.anchor=a(t);let g=d;for(;g;)if(g=a(g),g&&g.nodeType===8&&g.data==="teleport anchor"){e.targetAnchor=g,p._lpa=e.targetAnchor&&a(e.targetAnchor);break}c(d,e,p,n,i,r,s)}Cp(e)}return e.anchor&&a(e.anchor)}const sv=iv;function Cp(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const nn=Symbol.for("v-fgt"),Lr=Symbol.for("v-txt"),hn=Symbol.for("v-cmt"),Tr=Symbol.for("v-stc"),na=[];let Mn=null;function hl(t=!1){na.push(Mn=t?null:[])}function Rp(){na.pop(),Mn=na[na.length-1]||null}let Dr=1;function bc(t){Dr+=t}function Pp(t){return t.dynamicChildren=Dr>0?Mn||fs:null,Rp(),Dr>0&&Mn&&Mn.push(t),t}function av(t,e,n,i,r,s){return Pp(bf(t,e,n,i,r,s,!0))}function Ef(t,e,n,i,r){return Pp(Ut(t,e,n,i,r,!0))}function Zi(t){return t?t.__v_isVNode===!0:!1}function ei(t,e){return t.type===e.type&&t.key===e.key}function ov(t){}const dl="__vInternal",Lp=({key:t})=>t??null,Eo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ut(t)||Yt(t)||lt(t)?{i:Qt,r:t,k:e,f:!!n}:t:null);function bf(t,e=null,n=null,i=0,r=null,s=t===nn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Lp(e),ref:e&&Eo(e),scopeId:al,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Qt};return o?(wf(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=ut(n)?8:16),Dr>0&&!a&&Mn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Mn.push(l),l}const Ut=lv;function lv(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===pp)&&(t=hn),Zi(t)){const o=ci(t,e,!0);return n&&wf(o,n),Dr>0&&!s&&Mn&&(o.shapeFlag&6?Mn[Mn.indexOf(t)]=o:Mn.push(o)),o.patchFlag|=-2,o}if(_v(t)&&(t=t.__vccOpts),e){e=Dp(e);let{class:o,style:l}=e;o&&!ut(o)&&(e.class=ba(o)),Ct(l)&&(rf(l)&&!We(l)&&(l=vt({},l)),e.style=Ea(l))}const a=ut(t)?1:Qd(t)?128:nv(t)?64:Ct(t)?4:lt(t)?2:0;return bf(t,e,n,i,r,a,s,!0)}function Dp(t){return t?rf(t)||dl in t?vt({},t):t:null}function ci(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:a}=t,o=e?Ip(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:o,key:o&&Lp(o),ref:e&&e.ref?n&&r?We(r)?r.concat(Eo(e)):[r,Eo(e)]:Eo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==nn?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ci(t.ssContent),ssFallback:t.ssFallback&&ci(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Af(t=" ",e=0){return Ut(Lr,null,t,e)}function cv(t,e){const n=Ut(Tr,null,t);return n.staticCount=e,n}function fv(t="",e=!1){return e?(hl(),Ef(hn,null,t)):Ut(hn,null,t)}function Dn(t){return t==null||typeof t=="boolean"?Ut(hn):We(t)?Ut(nn,null,t.slice()):typeof t=="object"?ki(t):Ut(Lr,null,String(t))}function ki(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ci(t)}function wf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(We(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),wf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(dl in e)?e._ctx=Qt:r===3&&Qt&&(Qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else lt(e)?(e={default:e,_ctx:Qt},n=32):(e=String(e),i&64?(n=16,e=[Af(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ip(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ba([e.class,i.class]));else if(r==="style")e.style=Ea([e.style,i.style]);else if(Nr(r)){const s=e[r],a=i[r];a&&s!==a&&!(We(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function xn(t,e,n,i=null){Un(t,e,7,[n,i])}const uv=vp();let hv=0;function Up(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||uv,s={uid:hv++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sp(i,r),emitsOptions:Jd(i,r),emit:null,emitted:null,propsDefaults:At,inheritAttrs:i.inheritAttrs,ctx:At,data:At,props:At,attrs:At,slots:At,refs:At,setupState:At,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=jg.bind(null,s),t.ce&&t.ce(s),s}let Wt=null;const Pi=()=>Wt||Qt;let Cf,Vr,bu="__VUE_INSTANCE_SETTERS__";(Vr=pc()[bu])||(Vr=pc()[bu]=[]),Vr.push(t=>Wt=t),Cf=t=>{Vr.length>1?Vr.forEach(e=>e(t)):Vr[0](t)};const Ji=t=>{Cf(t),t.scope.on()},Gi=()=>{Wt&&Wt.scope.off(),Cf(null)};function Np(t){return t.vnode.shapeFlag&4}let Ss=!1;function Op(t,e=!1){Ss=e;const{props:n,children:i}=t.vnode,r=Np(t);$0(t,n,r,e),J0(t,i);const s=r?dv(t,e):void 0;return Ss=!1,s}function dv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=sf(new Proxy(t.ctx,xc));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?kp(t):null;Ji(t),Ds();const s=wi(i,t,0,[t.props,r]);if(Is(),Gi(),Zc(s)){if(s.then(Gi,Gi),e)return s.then(a=>{Ac(t,a,e)}).catch(a=>{Br(a,t,0)});t.asyncDep=s}else Ac(t,s,e)}else Bp(t,e)}function Ac(t,e,n){lt(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ct(e)&&(t.setupState=cf(e)),Bp(t,n)}let No,wc;function Fp(t){No=t,wc=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,A0))}}const pv=()=>!No;function Bp(t,e,n){const i=t.type;if(!t.render){if(!e&&No&&!i.render){const r=i.template||Sf(t).template;if(r){const{isCustomElement:s,compilerOptions:a}=t.appContext.config,{delimiters:o,compilerOptions:l}=i,c=vt(vt({isCustomElement:s,delimiters:o},a),l);i.render=No(r,c)}}t.render=i.render||vn,wc&&wc(t)}Ji(t),Ds(),H0(t),Is(),Gi()}function mv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return wn(t,"get","$attrs"),e[n]}}))}function kp(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return mv(t)},slots:t.slots,emit:t.emit,expose:e}}function pl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(cf(sf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qs)return Qs[n](t)},has(e,n){return n in e||n in Qs}}))}function Cc(t,e=!0){return lt(t)?t.displayName||t.name:t.name||e&&t.__name}function _v(t){return lt(t)&&"__vccOpts"in t}const zp=(t,e)=>Hg(t,e,Ss);function Hp(t,e,n){const i=arguments.length;return i===2?Ct(e)&&!We(e)?Zi(e)?Ut(t,null,[e]):Ut(t,e):Ut(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Zi(n)&&(n=[n]),Ut(t,e,n))}const Vp=Symbol.for("v-scx"),Gp=()=>ea(Vp);function gv(){}function vv(t,e,n,i){const r=n[i];if(r&&Wp(r,t))return r;const s=e();return s.memo=t.slice(),n[i]=s}function Wp(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let i=0;i<n.length;i++)if(ys(n[i],e[i]))return!1;return Dr>0&&Mn&&Mn.push(t),!0}const Xp="3.3.4",yv={createComponentInstance:Up,setupComponent:Op,renderComponentRoot:Mo,setCurrentRenderingInstance:ua,isVNode:Zi,normalizeVNode:Dn},xv=yv,Sv=null,Tv=null,Mv="http://www.w3.org/2000/svg",dr=typeof document<"u"?document:null,Au=dr&&dr.createElement("template"),Ev={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?dr.createElementNS(Mv,t):dr.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>dr.createTextNode(t),createComment:t=>dr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>dr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const a=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Au.innerHTML=i?`<svg>${t}</svg>`:t;const o=Au.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function bv(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Av(t,e,n){const i=t.style,r=ut(n);if(n&&!r){if(e&&!ut(e))for(const s in e)n[s]==null&&Rc(i,s,"");for(const s in n)Rc(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const wu=/\s*!important$/;function Rc(t,e,n){if(We(n))n.forEach(i=>Rc(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=wv(t,e);wu.test(n)?t.setProperty(In(i),n.replace(wu,""),"important"):t[i]=n}}const Cu=["Webkit","Moz","ms"],Il={};function wv(t,e){const n=Il[e];if(n)return n;let i=Xt(e);if(i!=="filter"&&i in t)return Il[e]=i;i=Fr(i);for(let r=0;r<Cu.length;r++){const s=Cu[r]+i;if(s in t)return Il[e]=s}return e}const Ru="http://www.w3.org/1999/xlink";function Cv(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ru,e.slice(6,e.length)):t.setAttributeNS(Ru,e,n);else{const s=Y_(e);n==null||s&&!Rd(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Rv(t,e,n,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),t[e]=n??"";return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){t._value=n;const c=o==="OPTION"?t.getAttribute("value"):t.value,p=n??"";c!==p&&(t.value=p),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Rd(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Mi(t,e,n,i){t.addEventListener(e,n,i)}function Pv(t,e,n,i){t.removeEventListener(e,n,i)}function Lv(t,e,n,i,r=null){const s=t._vei||(t._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Dv(e);if(i){const c=s[e]=Nv(i,r);Mi(t,o,c,l)}else a&&(Pv(t,o,a,l),s[e]=void 0)}}const Pu=/(?:Once|Passive|Capture)$/;function Dv(t){let e;if(Pu.test(t)){e={};let i;for(;i=t.match(Pu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):In(t.slice(2)),e]}let Ul=0;const Iv=Promise.resolve(),Uv=()=>Ul||(Iv.then(()=>Ul=0),Ul=Date.now());function Nv(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Un(Ov(i,n.value),e,5,[i])};return n.value=t,n.attached=Uv(),n}function Ov(t,e){if(We(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Lu=/^on[a-z]/,Fv=(t,e,n,i,r=!1,s,a,o,l)=>{e==="class"?bv(t,i,r):e==="style"?Av(t,n,i):Nr(e)?$c(e)||Lv(t,e,n,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bv(t,e,i,r))?Rv(t,e,i,s,a,o,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Cv(t,e,i,r))};function Bv(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Lu.test(e)&&lt(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Lu.test(e)&&ut(n)?!1:e in t}function qp(t,e){const n=vf(t);class i extends ml{constructor(s){super(n,s,e)}}return i.def=n,i}const kv=t=>qp(t,lm),zv=typeof HTMLElement<"u"?HTMLElement:class{};class ml extends zv{constructor(e,n={},i){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&i?i(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,uf(()=>{this._connected||(Dc(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);new MutationObserver(i=>{for(const r of i)this._setAttr(r.attributeName)}).observe(this,{attributes:!0});const e=(i,r=!1)=>{const{props:s,styles:a}=i;let o;if(s&&!We(s))for(const l in s){const c=s[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=Po(this._props[l])),(o||(o=Object.create(null)))[Xt(l)]=!0)}this._numberProps=o,r&&this._resolveProps(i),this._applyStyles(a),this._update()},n=this._def.__asyncLoader;n?n().then(i=>e(i,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,i=We(n)?n:Object.keys(n||{});for(const r of Object.keys(this))r[0]!=="_"&&i.includes(r)&&this._setProp(r,this[r],!0,!1);for(const r of i.map(Xt))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(s){this._setProp(r,s)}})}_setAttr(e){let n=this.getAttribute(e);const i=Xt(e);this._numberProps&&this._numberProps[i]&&(n=Po(n)),this._setProp(i,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,i=!0,r=!0){n!==this._props[e]&&(this._props[e]=n,r&&this._instance&&this._update(),i&&(n===!0?this.setAttribute(In(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(In(e),n+""):n||this.removeAttribute(In(e))))}_update(){Dc(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Ut(this._def,vt({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const i=(s,a)=>{this.dispatchEvent(new CustomEvent(s,{detail:a}))};n.emit=(s,...a)=>{i(s,a),In(s)!==s&&i(In(s),a)};let r=this;for(;r=r&&(r.parentNode||r.host);)if(r instanceof ml){n.parent=r._instance,n.provides=r._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const i=document.createElement("style");i.textContent=n,this.shadowRoot.appendChild(i)})}}function Hv(t="$style"){{const e=Pi();if(!e)return At;const n=e.type.__cssModules;if(!n)return At;const i=n[t];return i||At}}function Vv(t){const e=Pi();if(!e)return;const n=e.ut=(r=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>Lc(s,r))},i=()=>{const r=t(e.proxy);Pc(e.subTree,r),n(r)};tp(i),Ra(()=>{const r=new MutationObserver(i);r.observe(e.subTree.el.parentNode,{childList:!0}),ul(()=>r.disconnect())})}function Pc(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Pc(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Lc(t.el,e);else if(t.type===nn)t.children.forEach(n=>Pc(n,e));else if(t.type===Tr){let{el:n,anchor:i}=t;for(;n&&(Lc(n,e),n!==i);)n=n.nextSibling}}function Lc(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const Ii="transition",ks="animation",Rf=(t,{slots:e})=>Hp(ip,jp(t),e);Rf.displayName="Transition";const Yp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Gv=Rf.props=vt({},gf,Yp),sr=(t,e=[])=>{We(t)?t.forEach(n=>n(...e)):t&&t(...e)},Du=t=>t?We(t)?t.some(e=>e.length>1):t.length>1:!1;function jp(t){const e={};for(const I in t)I in Yp||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:p=o,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:S=`${n}-leave-to`}=t,_=Wv(r),R=_&&_[0],v=_&&_[1],{onBeforeEnter:h,onEnter:u,onEnterCancelled:f,onLeave:y,onLeaveCancelled:E,onBeforeAppear:M=h,onAppear:C=u,onAppearCancelled:T=f}=e,w=(I,O,F)=>{Bi(I,O?p:o),Bi(I,O?c:a),F&&F()},L=(I,O)=>{I._isLeaving=!1,Bi(I,d),Bi(I,S),Bi(I,g),O&&O()},k=I=>(O,F)=>{const X=I?C:u,Z=()=>w(O,I,F);sr(X,[O,Z]),Iu(()=>{Bi(O,I?l:s),xi(O,I?p:o),Du(X)||Uu(O,i,R,Z)})};return vt(e,{onBeforeEnter(I){sr(h,[I]),xi(I,s),xi(I,a)},onBeforeAppear(I){sr(M,[I]),xi(I,l),xi(I,c)},onEnter:k(!1),onAppear:k(!0),onLeave(I,O){I._isLeaving=!0;const F=()=>L(I,O);xi(I,d),Kp(),xi(I,g),Iu(()=>{I._isLeaving&&(Bi(I,d),xi(I,S),Du(y)||Uu(I,i,v,F))}),sr(y,[I,F])},onEnterCancelled(I){w(I,!1),sr(f,[I])},onAppearCancelled(I){w(I,!0),sr(T,[I])},onLeaveCancelled(I){L(I),sr(E,[I])}})}function Wv(t){if(t==null)return null;if(Ct(t))return[Nl(t.enter),Nl(t.leave)];{const e=Nl(t);return[e,e]}}function Nl(t){return Po(t)}function xi(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Bi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Iu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Xv=0;function Uu(t,e,n,i){const r=t._endId=++Xv,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=$p(t,e);if(!a)return i();const c=a+"end";let p=0;const d=()=>{t.removeEventListener(c,g),s()},g=S=>{S.target===t&&++p>=l&&d()};setTimeout(()=>{p<l&&d()},o+1),t.addEventListener(c,g)}function $p(t,e){const n=window.getComputedStyle(t),i=_=>(n[_]||"").split(", "),r=i(`${Ii}Delay`),s=i(`${Ii}Duration`),a=Nu(r,s),o=i(`${ks}Delay`),l=i(`${ks}Duration`),c=Nu(o,l);let p=null,d=0,g=0;e===Ii?a>0&&(p=Ii,d=a,g=s.length):e===ks?c>0&&(p=ks,d=c,g=l.length):(d=Math.max(a,c),p=d>0?a>c?Ii:ks:null,g=p?p===Ii?s.length:l.length:0);const S=p===Ii&&/\b(transform|all)(,|$)/.test(i(`${Ii}Property`).toString());return{type:p,timeout:d,propCount:g,hasTransform:S}}function Nu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Ou(n)+Ou(t[i])))}function Ou(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Kp(){return document.body.offsetHeight}const Zp=new WeakMap,Jp=new WeakMap,Qp={name:"TransitionGroup",props:vt({},Gv,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Pi(),i=_f();let r,s;return cl(()=>{if(!r.length)return;const a=t.moveClass||`${t.name||"v"}-move`;if(!Zv(r[0].el,n.vnode.el,a))return;r.forEach(jv),r.forEach($v);const o=r.filter(Kv);Kp(),o.forEach(l=>{const c=l.el,p=c.style;xi(c,a),p.transform=p.webkitTransform=p.transitionDuration="";const d=c._moveCb=g=>{g&&g.target!==c||(!g||/transform$/.test(g.propertyName))&&(c.removeEventListener("transitionend",d),c._moveCb=null,Bi(c,a))};c.addEventListener("transitionend",d)})}),()=>{const a=yt(t),o=jp(a);let l=a.tag||nn;r=s,s=e.default?ol(e.default()):[];for(let c=0;c<s.length;c++){const p=s[c];p.key!=null&&Pr(p,xs(p,o,i,n))}if(r)for(let c=0;c<r.length;c++){const p=r[c];Pr(p,xs(p,o,i,n)),Zp.set(p,p.el.getBoundingClientRect())}return Ut(l,null,s)}}},qv=t=>delete t.mode;Qp.props;const Yv=Qp;function jv(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function $v(t){Jp.set(t,t.el.getBoundingClientRect())}function Kv(t){const e=Zp.get(t),n=Jp.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",t}}function Zv(t,e,n){const i=t.cloneNode();t._vtc&&t._vtc.forEach(a=>{a.split(/\s+/).forEach(o=>o&&i.classList.remove(o))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:s}=$p(i);return r.removeChild(i),s}const Qi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return We(e)?n=>ds(e,n):e};function Jv(t){t.target.composing=!0}function Fu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Oo={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=Qi(r);const s=i||r.props&&r.props.type==="number";Mi(t,e?"change":"input",a=>{if(a.target.composing)return;let o=t.value;n&&(o=o.trim()),s&&(o=Ro(o)),t._assign(o)}),n&&Mi(t,"change",()=>{t.value=t.value.trim()}),e||(Mi(t,"compositionstart",Jv),Mi(t,"compositionend",Fu),Mi(t,"change",Fu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t._assign=Qi(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&Ro(t.value)===e))return;const a=e??"";t.value!==a&&(t.value=a)}},Pf={deep:!0,created(t,e,n){t._assign=Qi(n),Mi(t,"change",()=>{const i=t._modelValue,r=Ts(t),s=t.checked,a=t._assign;if(We(i)){const o=Zo(i,r),l=o!==-1;if(s&&!l)a(i.concat(r));else if(!s&&l){const c=[...i];c.splice(o,1),a(c)}}else if(Or(i)){const o=new Set(i);s?o.add(r):o.delete(r),a(o)}else a(tm(t,s))})},mounted:Bu,beforeUpdate(t,e,n){t._assign=Qi(n),Bu(t,e,n)}};function Bu(t,{value:e,oldValue:n},i){t._modelValue=e,We(e)?t.checked=Zo(e,i.props.value)>-1:Or(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=$i(e,tm(t,!0)))}const Lf={created(t,{value:e},n){t.checked=$i(e,n.props.value),t._assign=Qi(n),Mi(t,"change",()=>{t._assign(Ts(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t._assign=Qi(i),e!==n&&(t.checked=$i(e,i.props.value))}},em={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const r=Or(e);Mi(t,"change",()=>{const s=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?Ro(Ts(a)):Ts(a));t._assign(t.multiple?r?new Set(s):s:s[0])}),t._assign=Qi(i)},mounted(t,{value:e}){ku(t,e)},beforeUpdate(t,e,n){t._assign=Qi(n)},updated(t,{value:e}){ku(t,e)}};function ku(t,e){const n=t.multiple;if(!(n&&!We(e)&&!Or(e))){for(let i=0,r=t.options.length;i<r;i++){const s=t.options[i],a=Ts(s);if(n)We(e)?s.selected=Zo(e,a)>-1:s.selected=e.has(a);else if($i(Ts(s),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ts(t){return"_value"in t?t._value:t.value}function tm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const nm={created(t,e,n){Ka(t,e,n,null,"created")},mounted(t,e,n){Ka(t,e,n,null,"mounted")},beforeUpdate(t,e,n,i){Ka(t,e,n,i,"beforeUpdate")},updated(t,e,n,i){Ka(t,e,n,i,"updated")}};function im(t,e){switch(t){case"SELECT":return em;case"TEXTAREA":return Oo;default:switch(e){case"checkbox":return Pf;case"radio":return Lf;default:return Oo}}}function Ka(t,e,n,i,r){const a=im(t.tagName,n.props&&n.props.type)[r];a&&a(t,e,n,i)}function Qv(){Oo.getSSRProps=({value:t})=>({value:t}),Lf.getSSRProps=({value:t},e)=>{if(e.props&&$i(e.props.value,t))return{checked:!0}},Pf.getSSRProps=({value:t},e)=>{if(We(t)){if(e.props&&Zo(t,e.props.value)>-1)return{checked:!0}}else if(Or(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},nm.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=im(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const ey=["ctrl","shift","alt","meta"],ty={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ey.some(n=>t[`${n}Key`]&&!e.includes(n))},ny=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const s=ty[e[r]];if(s&&s(n,e))return}return t(n,...i)},iy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ry=(t,e)=>n=>{if(!("key"in n))return;const i=In(n.key);if(e.some(r=>r===i||iy[r]===i))return t(n)},rm={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):zs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),zs(t,!0),i.enter(t)):i.leave(t,()=>{zs(t,!1)}):zs(t,e))},beforeUnmount(t,{value:e}){zs(t,e)}};function zs(t,e){t.style.display=e?t._vod:"none"}function sy(){rm.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const sm=vt({patchProp:Fv},Ev);let ia,zu=!1;function am(){return ia||(ia=bp(sm))}function om(){return ia=zu?ia:Ap(sm),zu=!0,ia}const Dc=(...t)=>{am().render(...t)},lm=(...t)=>{om().hydrate(...t)},Df=(...t)=>{const e=am().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=cm(i);if(!r)return;const s=e._component;!lt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e},ay=(...t)=>{const e=om().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=cm(i);if(r)return n(r,!0,r instanceof SVGElement)},e};function cm(t){return ut(t)?document.querySelector(t):t}let Hu=!1;const oy=()=>{Hu||(Hu=!0,Qv(),sy())},ly=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:ip,BaseTransitionPropsValidators:gf,Comment:hn,EffectScope:Qc,Fragment:nn,KeepAlive:_0,ReactiveEffect:Aa,Static:Tr,Suspense:i0,Teleport:sv,Text:Lr,Transition:Rf,TransitionGroup:Yv,VueElement:ml,assertNumber:Gg,callWithAsyncErrorHandling:Un,callWithErrorHandling:wi,camelize:Xt,capitalize:Fr,cloneVNode:ci,compatUtils:Tv,computed:zp,createApp:Df,createBlock:Ef,createCommentVNode:fv,createElementBlock:av,createElementVNode:bf,createHydrationRenderer:Ap,createPropsRestProxy:k0,createRenderer:bp,createSSRApp:ay,createSlots:M0,createStaticVNode:cv,createTextVNode:Af,createVNode:Ut,customRef:Ng,defineAsyncComponent:p0,defineComponent:vf,defineCustomElement:qp,defineEmits:C0,defineExpose:R0,defineModel:D0,defineOptions:P0,defineProps:w0,defineSSRCustomElement:kv,defineSlots:L0,get devtools(){return as},effect:eg,effectScope:K_,getCurrentInstance:Pi,getCurrentScope:Dd,getTransitionRawChildren:ol,guardReactiveProps:Dp,h:Hp,handleError:Br,hasInjectionContext:j0,hydrate:lm,initCustomFormatter:gv,initDirectivesForSSR:oy,inject:ea,isMemoSame:Wp,isProxy:rf,isReactive:yr,isReadonly:Rr,isRef:Yt,isRuntimeOnly:pv,isShallow:oa,isVNode:Zi,markRaw:sf,mergeDefaults:F0,mergeModels:B0,mergeProps:Ip,nextTick:uf,normalizeClass:ba,normalizeProps:k_,normalizeStyle:Ea,onActivated:sp,onBeforeMount:lp,onBeforeUnmount:fl,onBeforeUpdate:cp,onDeactivated:ap,onErrorCaptured:dp,onMounted:Ra,onRenderTracked:hp,onRenderTriggered:up,onScopeDispose:Z_,onServerPrefetch:fp,onUnmounted:ul,onUpdated:cl,openBlock:hl,popScopeId:Kg,provide:yp,proxyRefs:cf,pushScopeId:$g,queuePostFlushCb:hf,reactive:tl,readonly:nf,ref:ps,registerRuntimeCompiler:Fp,render:Dc,renderList:T0,renderSlot:E0,resolveComponent:y0,resolveDirective:S0,resolveDynamicComponent:x0,resolveFilter:Sv,resolveTransitionHooks:xs,setBlockTracking:bc,setDevtoolsHook:Zd,setTransitionHooks:Pr,shallowReactive:Xd,shallowReadonly:Cg,shallowRef:Rg,ssrContextKey:Vp,ssrUtils:xv,stop:tg,toDisplayString:$_,toHandlerKey:hs,toHandlers:b0,toRaw:yt,toRef:kg,toRefs:Og,toValue:Dg,transformVNodeArgs:ov,triggerRef:Lg,unref:lf,useAttrs:N0,useCssModule:Hv,useCssVars:Vv,useModel:O0,useSSRContext:Gp,useSlots:U0,useTransitionState:_f,vModelCheckbox:Pf,vModelDynamic:nm,vModelRadio:Lf,vModelSelect:em,vModelText:Oo,vShow:rm,version:Xp,warn:Vg,watch:xr,watchEffect:c0,watchPostEffect:tp,watchSyncEffect:f0,withAsyncContext:z0,withCtx:df,withDefaults:I0,withDirectives:h0,withKeys:ry,withMemo:vv,withModifiers:ny,withScopeId:Zg},Symbol.toStringTag,{value:"Module"}));function If(t){throw t}function fm(t){}function Ft(t,e,n,i){const r=t,s=new SyntaxError(String(r));return s.code=t,s.loc=e,s}const ma=Symbol(""),ra=Symbol(""),Uf=Symbol(""),Fo=Symbol(""),um=Symbol(""),Ir=Symbol(""),hm=Symbol(""),dm=Symbol(""),Nf=Symbol(""),Of=Symbol(""),Pa=Symbol(""),Ff=Symbol(""),pm=Symbol(""),Bf=Symbol(""),Bo=Symbol(""),kf=Symbol(""),zf=Symbol(""),Hf=Symbol(""),Vf=Symbol(""),mm=Symbol(""),_m=Symbol(""),_l=Symbol(""),ko=Symbol(""),Gf=Symbol(""),Wf=Symbol(""),_a=Symbol(""),La=Symbol(""),Xf=Symbol(""),Ic=Symbol(""),cy=Symbol(""),Uc=Symbol(""),zo=Symbol(""),fy=Symbol(""),uy=Symbol(""),qf=Symbol(""),hy=Symbol(""),dy=Symbol(""),Yf=Symbol(""),gm=Symbol(""),Ms={[ma]:"Fragment",[ra]:"Teleport",[Uf]:"Suspense",[Fo]:"KeepAlive",[um]:"BaseTransition",[Ir]:"openBlock",[hm]:"createBlock",[dm]:"createElementBlock",[Nf]:"createVNode",[Of]:"createElementVNode",[Pa]:"createCommentVNode",[Ff]:"createTextVNode",[pm]:"createStaticVNode",[Bf]:"resolveComponent",[Bo]:"resolveDynamicComponent",[kf]:"resolveDirective",[zf]:"resolveFilter",[Hf]:"withDirectives",[Vf]:"renderList",[mm]:"renderSlot",[_m]:"createSlots",[_l]:"toDisplayString",[ko]:"mergeProps",[Gf]:"normalizeClass",[Wf]:"normalizeStyle",[_a]:"normalizeProps",[La]:"guardReactiveProps",[Xf]:"toHandlers",[Ic]:"camelize",[cy]:"capitalize",[Uc]:"toHandlerKey",[zo]:"setBlockTracking",[fy]:"pushScopeId",[uy]:"popScopeId",[qf]:"withCtx",[hy]:"unref",[dy]:"isRef",[Yf]:"withMemo",[gm]:"isMemoSame"};function py(t){Object.getOwnPropertySymbols(t).forEach(e=>{Ms[e]=t[e]})}const Fn={source:"",start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function my(t,e=Fn){return{type:0,children:t,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:e}}function ga(t,e,n,i,r,s,a,o=!1,l=!1,c=!1,p=Fn){return t&&(o?(t.helper(Ir),t.helper(As(t.inSSR,c))):t.helper(bs(t.inSSR,c)),a&&t.helper(Hf)),{type:13,tag:e,props:n,children:i,patchFlag:r,dynamicProps:s,directives:a,isBlock:o,disableTracking:l,isComponent:c,loc:p}}function Da(t,e=Fn){return{type:17,loc:e,elements:t}}function Hn(t,e=Fn){return{type:15,loc:e,properties:t}}function Ht(t,e){return{type:16,loc:Fn,key:ut(t)?mt(t,!0):t,value:e}}function mt(t,e=!1,n=Fn,i=0){return{type:4,loc:n,content:t,isStatic:e,constType:e?3:i}}function ii(t,e=Fn){return{type:8,loc:e,children:t}}function Gt(t,e=[],n=Fn){return{type:14,loc:n,callee:t,arguments:e}}function Es(t,e=void 0,n=!1,i=!1,r=Fn){return{type:18,params:t,returns:e,newline:n,isSlot:i,loc:r}}function Nc(t,e,n,i=!0){return{type:19,test:t,consequent:e,alternate:n,newline:i,loc:Fn}}function _y(t,e,n=!1){return{type:20,index:t,value:e,isVNode:n,loc:Fn}}function gy(t){return{type:21,body:t,loc:Fn}}function bs(t,e){return t||e?Nf:Of}function As(t,e){return t||e?hm:dm}function jf(t,{helper:e,removeHelper:n,inSSR:i}){t.isBlock||(t.isBlock=!0,n(bs(i,t.isComponent)),e(Ir),e(As(i,t.isComponent)))}const En=t=>t.type===4&&t.isStatic,ls=(t,e)=>t===e||t===In(e);function vm(t){if(ls(t,"Teleport"))return ra;if(ls(t,"Suspense"))return Uf;if(ls(t,"KeepAlive"))return Fo;if(ls(t,"BaseTransition"))return um}const vy=/^\d|[^\$\w]/,$f=t=>!vy.test(t),yy=/[A-Za-z_$\xA0-\uFFFF]/,xy=/[\.\?\w$\xA0-\uFFFF]/,Sy=/\s+[.[]\s*|\s*[.[]\s+/g,Ty=t=>{t=t.trim().replace(Sy,a=>a.trim());let e=0,n=[],i=0,r=0,s=null;for(let a=0;a<t.length;a++){const o=t.charAt(a);switch(e){case 0:if(o==="[")n.push(e),e=1,i++;else if(o==="(")n.push(e),e=2,r++;else if(!(a===0?yy:xy).test(o))return!1;break;case 1:o==="'"||o==='"'||o==="`"?(n.push(e),e=3,s=o):o==="["?i++:o==="]"&&(--i||(e=n.pop()));break;case 2:if(o==="'"||o==='"'||o==="`")n.push(e),e=3,s=o;else if(o==="(")r++;else if(o===")"){if(a===t.length-1)return!1;--r||(e=n.pop())}break;case 3:o===s&&(e=n.pop(),s=null);break}}return!i&&!r},ym=Ty;function xm(t,e,n){const r={source:t.source.slice(e,e+n),start:Ho(t.start,t.source,e),end:t.end};return n!=null&&(r.end=Ho(t.start,t.source,e+n)),r}function Ho(t,e,n=e.length){return Vo(vt({},t),e,n)}function Vo(t,e,n=e.length){let i=0,r=-1;for(let s=0;s<n;s++)e.charCodeAt(s)===10&&(i++,r=s);return t.offset+=n,t.line+=i,t.column=r===-1?t.column+n:n-r,t}function zn(t,e,n=!1){for(let i=0;i<t.props.length;i++){const r=t.props[i];if(r.type===7&&(n||r.exp)&&(ut(e)?r.name===e:e.test(r.name)))return r}}function gl(t,e,n=!1,i=!1){for(let r=0;r<t.props.length;r++){const s=t.props[r];if(s.type===6){if(n)continue;if(s.name===e&&(s.value||i))return s}else if(s.name==="bind"&&(s.exp||i)&&_r(s.arg,e))return s}}function _r(t,e){return!!(t&&En(t)&&t.content===e)}function My(t){return t.props.some(e=>e.type===7&&e.name==="bind"&&(!e.arg||e.arg.type!==4||!e.arg.isStatic))}function Ol(t){return t.type===5||t.type===2}function Ey(t){return t.type===7&&t.name==="slot"}function Go(t){return t.type===1&&t.tagType===3}function Wo(t){return t.type===1&&t.tagType===2}const by=new Set([_a,La]);function Sm(t,e=[]){if(t&&!ut(t)&&t.type===14){const n=t.callee;if(!ut(n)&&by.has(n))return Sm(t.arguments[0],e.concat(t))}return[t,e]}function Xo(t,e,n){let i,r=t.type===13?t.props:t.arguments[2],s=[],a;if(r&&!ut(r)&&r.type===14){const o=Sm(r);r=o[0],s=o[1],a=s[s.length-1]}if(r==null||ut(r))i=Hn([e]);else if(r.type===14){const o=r.arguments[0];!ut(o)&&o.type===15?Vu(e,o)||o.properties.unshift(e):r.callee===Xf?i=Gt(n.helper(ko),[Hn([e]),r]):r.arguments.unshift(Hn([e])),!i&&(i=r)}else r.type===15?(Vu(e,r)||r.properties.unshift(e),i=r):(i=Gt(n.helper(ko),[Hn([e]),r]),a&&a.callee===La&&(a=s[s.length-2]));t.type===13?a?a.arguments[0]=i:t.props=i:a?a.arguments[0]=i:t.arguments[2]=i}function Vu(t,e){let n=!1;if(t.key.type===4){const i=t.key.content;n=e.properties.some(r=>r.key.type===4&&r.key.content===i)}return n}function va(t,e){return`_${e}_${t.replace(/[^\w]/g,(n,i)=>n==="-"?"_":t.charCodeAt(i).toString())}`}function Ay(t){return t.type===14&&t.callee===Yf?t.arguments[1].returns:t}function Gu(t,e){const n=e.options?e.options.compatConfig:e.compatConfig,i=n&&n[t];return t==="MODE"?i||3:i}function Mr(t,e){const n=Gu("MODE",e),i=Gu(t,e);return n===3?i===!0:i!==!1}function ya(t,e,n,...i){return Mr(t,e)}const wy=/&(gt|lt|amp|apos|quot);/g,Cy={gt:">",lt:"<",amp:"&",apos:"'",quot:'"'},Wu={delimiters:["{{","}}"],getNamespace:()=>0,getTextMode:()=>0,isVoidTag:To,isPreTag:To,isCustomElement:To,decodeEntities:t=>t.replace(wy,(e,n)=>Cy[n]),onError:If,onWarn:fm,comments:!1};function Ry(t,e={}){const n=Py(t,e),i=Nn(n);return my(Kf(n,0,[]),Gn(n,i))}function Py(t,e){const n=vt({},Wu);let i;for(i in e)n[i]=e[i]===void 0?Wu[i]:e[i];return{options:n,column:1,line:1,offset:0,originalSource:t,source:t,inPre:!1,inVPre:!1,onWarn:n.onWarn}}function Kf(t,e,n){const i=vl(n),r=i?i.ns:0,s=[];for(;!ky(t,e,n);){const o=t.source;let l;if(e===0||e===1){if(!t.inVPre&&un(o,t.options.delimiters[0]))l=Fy(t,e);else if(e===0&&o[0]==="<")if(o.length===1)bt(t,5,1);else if(o[1]==="!")un(o,"<!--")?l=Dy(t):un(o,"<!DOCTYPE")?l=Hs(t):un(o,"<![CDATA[")?r!==0?l=Ly(t,n):(bt(t,1),l=Hs(t)):(bt(t,11),l=Hs(t));else if(o[1]==="/")if(o.length===2)bt(t,5,2);else if(o[2]===">"){bt(t,14,2),jt(t,3);continue}else if(/[a-z]/i.test(o[2])){bt(t,23),Oc(t,qo.End,i);continue}else bt(t,12,2),l=Hs(t);else/[a-z]/i.test(o[1])?(l=Iy(t,n),Mr("COMPILER_NATIVE_TEMPLATE",t)&&l&&l.tag==="template"&&!l.props.some(c=>c.type===7&&Tm(c.name))&&(l=l.children)):o[1]==="?"?(bt(t,21,1),l=Hs(t)):bt(t,12,1)}if(l||(l=By(t,e)),We(l))for(let c=0;c<l.length;c++)Xu(s,l[c]);else Xu(s,l)}let a=!1;if(e!==2&&e!==1){const o=t.options.whitespace!=="preserve";for(let l=0;l<s.length;l++){const c=s[l];if(c.type===2)if(t.inPre)c.content=c.content.replace(/\r\n/g,`
`);else if(/[^\t\r\n\f ]/.test(c.content))o&&(c.content=c.content.replace(/[\t\r\n\f ]+/g," "));else{const p=s[l-1],d=s[l+1];!p||!d||o&&(p.type===3&&d.type===3||p.type===3&&d.type===1||p.type===1&&d.type===3||p.type===1&&d.type===1&&/[\r\n]/.test(c.content))?(a=!0,s[l]=null):c.content=" "}else c.type===3&&!t.options.comments&&(a=!0,s[l]=null)}if(t.inPre&&i&&t.options.isPreTag(i.tag)){const l=s[0];l&&l.type===2&&(l.content=l.content.replace(/^\r?\n/,""))}}return a?s.filter(Boolean):s}function Xu(t,e){if(e.type===2){const n=vl(t);if(n&&n.type===2&&n.loc.end.offset===e.loc.start.offset){n.content+=e.content,n.loc.end=e.loc.end,n.loc.source+=e.loc.source;return}}t.push(e)}function Ly(t,e){jt(t,9);const n=Kf(t,3,e);return t.source.length===0?bt(t,6):jt(t,3),n}function Dy(t){const e=Nn(t);let n;const i=/--(\!)?>/.exec(t.source);if(!i)n=t.source.slice(4),jt(t,t.source.length),bt(t,7);else{i.index<=3&&bt(t,0),i[1]&&bt(t,10),n=t.source.slice(4,i.index);const r=t.source.slice(0,i.index);let s=1,a=0;for(;(a=r.indexOf("<!--",s))!==-1;)jt(t,a-s+1),a+4<r.length&&bt(t,16),s=a+1;jt(t,i.index+i[0].length-s+1)}return{type:3,content:n,loc:Gn(t,e)}}function Hs(t){const e=Nn(t),n=t.source[1]==="?"?1:2;let i;const r=t.source.indexOf(">");return r===-1?(i=t.source.slice(n),jt(t,t.source.length)):(i=t.source.slice(n,r),jt(t,r+1)),{type:3,content:i,loc:Gn(t,e)}}function Iy(t,e){const n=t.inPre,i=t.inVPre,r=vl(e),s=Oc(t,qo.Start,r),a=t.inPre&&!n,o=t.inVPre&&!i;if(s.isSelfClosing||t.options.isVoidTag(s.tag))return a&&(t.inPre=!1),o&&(t.inVPre=!1),s;e.push(s);const l=t.options.getTextMode(s,r),c=Kf(t,l,e);e.pop();{const p=s.props.find(d=>d.type===6&&d.name==="inline-template");if(p&&ya("COMPILER_INLINE_TEMPLATE",t,p.loc)){const d=Gn(t,s.loc.end);p.value={type:2,content:d.source,loc:d}}}if(s.children=c,Fc(t.source,s.tag))Oc(t,qo.End,r);else if(bt(t,24,0,s.loc.start),t.source.length===0&&s.tag.toLowerCase()==="script"){const p=c[0];p&&un(p.loc.source,"<!--")&&bt(t,8)}return s.loc=Gn(t,s.loc.start),a&&(t.inPre=!1),o&&(t.inVPre=!1),s}var qo=(t=>(t[t.Start=0]="Start",t[t.End=1]="End",t))(qo||{});const Tm=Cn("if,else,else-if,for,slot");function Oc(t,e,n){const i=Nn(t),r=/^<\/?([a-z][^\t\r\n\f />]*)/i.exec(t.source),s=r[1],a=t.options.getNamespace(s,n);jt(t,r[0].length),xa(t);const o=Nn(t),l=t.source;t.options.isPreTag(s)&&(t.inPre=!0);let c=qu(t,e);e===0&&!t.inVPre&&c.some(g=>g.type===7&&g.name==="pre")&&(t.inVPre=!0,vt(t,o),t.source=l,c=qu(t,e).filter(g=>g.name!=="v-pre"));let p=!1;if(t.source.length===0?bt(t,9):(p=un(t.source,"/>"),e===1&&p&&bt(t,4),jt(t,p?2:1)),e===1)return;let d=0;return t.inVPre||(s==="slot"?d=2:s==="template"?c.some(g=>g.type===7&&Tm(g.name))&&(d=3):Uy(s,c,t)&&(d=1)),{type:1,ns:a,tag:s,tagType:d,props:c,isSelfClosing:p,children:[],loc:Gn(t,i),codegenNode:void 0}}function Uy(t,e,n){const i=n.options;if(i.isCustomElement(t))return!1;if(t==="component"||/^[A-Z]/.test(t)||vm(t)||i.isBuiltInComponent&&i.isBuiltInComponent(t)||i.isNativeTag&&!i.isNativeTag(t))return!0;for(let r=0;r<e.length;r++){const s=e[r];if(s.type===6){if(s.name==="is"&&s.value){if(s.value.content.startsWith("vue:"))return!0;if(ya("COMPILER_IS_ON_ELEMENT",n,s.loc))return!0}}else{if(s.name==="is")return!0;if(s.name==="bind"&&_r(s.arg,"is")&&ya("COMPILER_IS_ON_ELEMENT",n,s.loc))return!0}}}function qu(t,e){const n=[],i=new Set;for(;t.source.length>0&&!un(t.source,">")&&!un(t.source,"/>");){if(un(t.source,"/")){bt(t,22),jt(t,1),xa(t);continue}e===1&&bt(t,3);const r=Ny(t,i);r.type===6&&r.value&&r.name==="class"&&(r.value.content=r.value.content.replace(/\s+/g," ").trim()),e===0&&n.push(r),/^[^\t\r\n\f />]/.test(t.source)&&bt(t,15),xa(t)}return n}function Ny(t,e){var n;const i=Nn(t),s=/^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(t.source)[0];e.has(s)&&bt(t,2),e.add(s),s[0]==="="&&bt(t,19);{const l=/["'<]/g;let c;for(;c=l.exec(s);)bt(t,17,c.index)}jt(t,s.length);let a;/^[\t\r\n\f ]*=/.test(t.source)&&(xa(t),jt(t,1),xa(t),a=Oy(t),a||bt(t,13));const o=Gn(t,i);if(!t.inVPre&&/^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(s)){const l=/(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(s);let c=un(s,"."),p=l[1]||(c||un(s,":")?"bind":un(s,"@")?"on":"slot"),d;if(l[2]){const S=p==="slot",_=s.lastIndexOf(l[2],s.length-(((n=l[3])==null?void 0:n.length)||0)),R=Gn(t,Yu(t,i,_),Yu(t,i,_+l[2].length+(S&&l[3]||"").length));let v=l[2],h=!0;v.startsWith("[")?(h=!1,v.endsWith("]")?v=v.slice(1,v.length-1):(bt(t,27),v=v.slice(1))):S&&(v+=l[3]||""),d={type:4,content:v,isStatic:h,constType:h?3:0,loc:R}}if(a&&a.isQuoted){const S=a.loc;S.start.offset++,S.start.column++,S.end=Ho(S.start,a.content),S.source=S.source.slice(1,-1)}const g=l[3]?l[3].slice(1).split("."):[];return c&&g.push("prop"),p==="bind"&&d&&g.includes("sync")&&ya("COMPILER_V_BIND_SYNC",t,o,d.loc.source)&&(p="model",g.splice(g.indexOf("sync"),1)),{type:7,name:p,exp:a&&{type:4,content:a.content,isStatic:!1,constType:0,loc:a.loc},arg:d,modifiers:g,loc:o}}return!t.inVPre&&un(s,"v-")&&bt(t,26),{type:6,name:s,value:a&&{type:2,content:a.content,loc:a.loc},loc:o}}function Oy(t){const e=Nn(t);let n;const i=t.source[0],r=i==='"'||i==="'";if(r){jt(t,1);const s=t.source.indexOf(i);s===-1?n=sa(t,t.source.length,4):(n=sa(t,s,4),jt(t,1))}else{const s=/^[^\t\r\n\f >]+/.exec(t.source);if(!s)return;const a=/["'<=`]/g;let o;for(;o=a.exec(s[0]);)bt(t,18,o.index);n=sa(t,s[0].length,4)}return{content:n,isQuoted:r,loc:Gn(t,e)}}function Fy(t,e){const[n,i]=t.options.delimiters,r=t.source.indexOf(i,n.length);if(r===-1){bt(t,25);return}const s=Nn(t);jt(t,n.length);const a=Nn(t),o=Nn(t),l=r-n.length,c=t.source.slice(0,l),p=sa(t,l,e),d=p.trim(),g=p.indexOf(d);g>0&&Vo(a,c,g);const S=l-(p.length-d.length-g);return Vo(o,c,S),jt(t,i.length),{type:5,content:{type:4,isStatic:!1,constType:0,content:d,loc:Gn(t,a,o)},loc:Gn(t,s)}}function By(t,e){const n=e===3?["]]>"]:["<",t.options.delimiters[0]];let i=t.source.length;for(let a=0;a<n.length;a++){const o=t.source.indexOf(n[a],1);o!==-1&&i>o&&(i=o)}const r=Nn(t);return{type:2,content:sa(t,i,e),loc:Gn(t,r)}}function sa(t,e,n){const i=t.source.slice(0,e);return jt(t,e),n===2||n===3||!i.includes("&")?i:t.options.decodeEntities(i,n===4)}function Nn(t){const{column:e,line:n,offset:i}=t;return{column:e,line:n,offset:i}}function Gn(t,e,n){return n=n||Nn(t),{start:e,end:n,source:t.originalSource.slice(e.offset,n.offset)}}function vl(t){return t[t.length-1]}function un(t,e){return t.startsWith(e)}function jt(t,e){const{source:n}=t;Vo(t,n,e),t.source=n.slice(e)}function xa(t){const e=/^[\t\r\n\f ]+/.exec(t.source);e&&jt(t,e[0].length)}function Yu(t,e,n){return Ho(e,t.originalSource.slice(e.offset,n),n)}function bt(t,e,n,i=Nn(t)){n&&(i.offset+=n,i.column+=n),t.options.onError(Ft(e,{start:i,end:i,source:""}))}function ky(t,e,n){const i=t.source;switch(e){case 0:if(un(i,"</")){for(let r=n.length-1;r>=0;--r)if(Fc(i,n[r].tag))return!0}break;case 1:case 2:{const r=vl(n);if(r&&Fc(i,r.tag))return!0;break}case 3:if(un(i,"]]>"))return!0;break}return!i}function Fc(t,e){return un(t,"</")&&t.slice(2,2+e.length).toLowerCase()===e.toLowerCase()&&/[\t\r\n\f />]/.test(t[2+e.length]||">")}function zy(t,e){bo(t,e,Mm(t,t.children[0]))}function Mm(t,e){const{children:n}=t;return n.length===1&&e.type===1&&!Wo(e)}function bo(t,e,n=!1){const{children:i}=t,r=i.length;let s=0;for(let a=0;a<i.length;a++){const o=i[a];if(o.type===1&&o.tagType===0){const l=n?0:Vn(o,e);if(l>0){if(l>=2){o.codegenNode.patchFlag="-1",o.codegenNode=e.hoist(o.codegenNode),s++;continue}}else{const c=o.codegenNode;if(c.type===13){const p=wm(c);if((!p||p===512||p===1)&&bm(o,e)>=2){const d=Am(o);d&&(c.props=e.hoist(d))}c.dynamicProps&&(c.dynamicProps=e.hoist(c.dynamicProps))}}}if(o.type===1){const l=o.tagType===1;l&&e.scopes.vSlot++,bo(o,e),l&&e.scopes.vSlot--}else if(o.type===11)bo(o,e,o.children.length===1);else if(o.type===9)for(let l=0;l<o.branches.length;l++)bo(o.branches[l],e,o.branches[l].children.length===1)}s&&e.transformHoist&&e.transformHoist(i,e,t),s&&s===r&&t.type===1&&t.tagType===0&&t.codegenNode&&t.codegenNode.type===13&&We(t.codegenNode.children)&&(t.codegenNode.children=e.hoist(Da(t.codegenNode.children)))}function Vn(t,e){const{constantCache:n}=e;switch(t.type){case 1:if(t.tagType!==0)return 0;const i=n.get(t);if(i!==void 0)return i;const r=t.codegenNode;if(r.type!==13||r.isBlock&&t.tag!=="svg"&&t.tag!=="foreignObject")return 0;if(wm(r))return n.set(t,0),0;{let o=3;const l=bm(t,e);if(l===0)return n.set(t,0),0;l<o&&(o=l);for(let c=0;c<t.children.length;c++){const p=Vn(t.children[c],e);if(p===0)return n.set(t,0),0;p<o&&(o=p)}if(o>1)for(let c=0;c<t.props.length;c++){const p=t.props[c];if(p.type===7&&p.name==="bind"&&p.exp){const d=Vn(p.exp,e);if(d===0)return n.set(t,0),0;d<o&&(o=d)}}if(r.isBlock){for(let c=0;c<t.props.length;c++)if(t.props[c].type===7)return n.set(t,0),0;e.removeHelper(Ir),e.removeHelper(As(e.inSSR,r.isComponent)),r.isBlock=!1,e.helper(bs(e.inSSR,r.isComponent))}return n.set(t,o),o}case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return Vn(t.content,e);case 4:return t.constType;case 8:let a=3;for(let o=0;o<t.children.length;o++){const l=t.children[o];if(ut(l)||ji(l))continue;const c=Vn(l,e);if(c===0)return 0;c<a&&(a=c)}return a;default:return 0}}const Hy=new Set([Gf,Wf,_a,La]);function Em(t,e){if(t.type===14&&!ut(t.callee)&&Hy.has(t.callee)){const n=t.arguments[0];if(n.type===4)return Vn(n,e);if(n.type===14)return Em(n,e)}return 0}function bm(t,e){let n=3;const i=Am(t);if(i&&i.type===15){const{properties:r}=i;for(let s=0;s<r.length;s++){const{key:a,value:o}=r[s],l=Vn(a,e);if(l===0)return l;l<n&&(n=l);let c;if(o.type===4?c=Vn(o,e):o.type===14?c=Em(o,e):c=0,c===0)return c;c<n&&(n=c)}}return n}function Am(t){const e=t.codegenNode;if(e.type===13)return e.props}function wm(t){const e=t.patchFlag;return e?parseInt(e,10):void 0}function Vy(t,{filename:e="",prefixIdentifiers:n=!1,hoistStatic:i=!1,cacheHandlers:r=!1,nodeTransforms:s=[],directiveTransforms:a={},transformHoist:o=null,isBuiltInComponent:l=vn,isCustomElement:c=vn,expressionPlugins:p=[],scopeId:d=null,slotted:g=!0,ssr:S=!1,inSSR:_=!1,ssrCssVars:R="",bindingMetadata:v=At,inline:h=!1,isTS:u=!1,onError:f=If,onWarn:y=fm,compatConfig:E}){const M=e.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),C={selfName:M&&Fr(Xt(M[1])),prefixIdentifiers:n,hoistStatic:i,cacheHandlers:r,nodeTransforms:s,directiveTransforms:a,transformHoist:o,isBuiltInComponent:l,isCustomElement:c,expressionPlugins:p,scopeId:d,slotted:g,ssr:S,inSSR:_,ssrCssVars:R,bindingMetadata:v,inline:h,isTS:u,onError:f,onWarn:y,compatConfig:E,root:t,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],constantCache:new Map,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,currentNode:t,childIndex:0,inVOnce:!1,helper(T){const w=C.helpers.get(T)||0;return C.helpers.set(T,w+1),T},removeHelper(T){const w=C.helpers.get(T);if(w){const L=w-1;L?C.helpers.set(T,L):C.helpers.delete(T)}},helperString(T){return`_${Ms[C.helper(T)]}`},replaceNode(T){C.parent.children[C.childIndex]=C.currentNode=T},removeNode(T){const w=C.parent.children,L=T?w.indexOf(T):C.currentNode?C.childIndex:-1;!T||T===C.currentNode?(C.currentNode=null,C.onNodeRemoved()):C.childIndex>L&&(C.childIndex--,C.onNodeRemoved()),C.parent.children.splice(L,1)},onNodeRemoved:()=>{},addIdentifiers(T){},removeIdentifiers(T){},hoist(T){ut(T)&&(T=mt(T)),C.hoists.push(T);const w=mt(`_hoisted_${C.hoists.length}`,!1,T.loc,2);return w.hoisted=T,w},cache(T,w=!1){return _y(C.cached++,T,w)}};return C.filters=new Set,C}function Gy(t,e){const n=Vy(t,e);yl(t,n),e.hoistStatic&&zy(t,n),e.ssr||Wy(t,n),t.helpers=new Set([...n.helpers.keys()]),t.components=[...n.components],t.directives=[...n.directives],t.imports=n.imports,t.hoists=n.hoists,t.temps=n.temps,t.cached=n.cached,t.filters=[...n.filters]}function Wy(t,e){const{helper:n}=e,{children:i}=t;if(i.length===1){const r=i[0];if(Mm(t,r)&&r.codegenNode){const s=r.codegenNode;s.type===13&&jf(s,e),t.codegenNode=s}else t.codegenNode=r}else if(i.length>1){let r=64;t.codegenNode=ga(e,n(ma),void 0,t.children,r+"",void 0,void 0,!0,void 0,!1)}}function Xy(t,e){let n=0;const i=()=>{n--};for(;n<t.children.length;n++){const r=t.children[n];ut(r)||(e.parent=t,e.childIndex=n,e.onNodeRemoved=i,yl(r,e))}}function yl(t,e){e.currentNode=t;const{nodeTransforms:n}=e,i=[];for(let s=0;s<n.length;s++){const a=n[s](t,e);if(a&&(We(a)?i.push(...a):i.push(a)),e.currentNode)t=e.currentNode;else return}switch(t.type){case 3:e.ssr||e.helper(Pa);break;case 5:e.ssr||e.helper(_l);break;case 9:for(let s=0;s<t.branches.length;s++)yl(t.branches[s],e);break;case 10:case 11:case 1:case 0:Xy(t,e);break}e.currentNode=t;let r=i.length;for(;r--;)i[r]()}function Cm(t,e){const n=ut(t)?i=>i===t:i=>t.test(i);return(i,r)=>{if(i.type===1){const{props:s}=i;if(i.tagType===3&&s.some(Ey))return;const a=[];for(let o=0;o<s.length;o++){const l=s[o];if(l.type===7&&n(l.name)){s.splice(o,1),o--;const c=e(i,l,r);c&&a.push(c)}}return a}}}const xl="/*#__PURE__*/",Rm=t=>`${Ms[t]}: _${Ms[t]}`;function ju(t,{mode:e="function",prefixIdentifiers:n=e==="module",sourceMap:i=!1,filename:r="template.vue.html",scopeId:s=null,optimizeImports:a=!1,runtimeGlobalName:o="Vue",runtimeModuleName:l="vue",ssrRuntimeModuleName:c="vue/server-renderer",ssr:p=!1,isTS:d=!1,inSSR:g=!1}){const S={mode:e,prefixIdentifiers:n,sourceMap:i,filename:r,scopeId:s,optimizeImports:a,runtimeGlobalName:o,runtimeModuleName:l,ssrRuntimeModuleName:c,ssr:p,isTS:d,inSSR:g,source:t.loc.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(R){return`_${Ms[R]}`},push(R,v){S.code+=R},indent(){_(++S.indentLevel)},deindent(R=!1){R?--S.indentLevel:_(--S.indentLevel)},newline(){_(S.indentLevel)}};function _(R){S.push(`
`+"  ".repeat(R))}return S}function qy(t,e={}){const n=ju(t,e);e.onContextCreated&&e.onContextCreated(n);const{mode:i,push:r,prefixIdentifiers:s,indent:a,deindent:o,newline:l,scopeId:c,ssr:p}=n,d=Array.from(t.helpers),g=d.length>0,S=!s&&i!=="module",_=!1,R=_?ju(t,e):n;Yy(t,R);const v=p?"ssrRender":"render",u=(p?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(r(`function ${v}(${u}) {`),a(),S&&(r("with (_ctx) {"),a(),g&&(r(`const { ${d.map(Rm).join(", ")} } = _Vue`),r(`
`),l())),t.components.length&&(Fl(t.components,"component",n),(t.directives.length||t.temps>0)&&l()),t.directives.length&&(Fl(t.directives,"directive",n),t.temps>0&&l()),t.filters&&t.filters.length&&(l(),Fl(t.filters,"filter",n),l()),t.temps>0){r("let ");for(let f=0;f<t.temps;f++)r(`${f>0?", ":""}_temp${f}`)}return(t.components.length||t.directives.length||t.temps)&&(r(`
`),l()),p||r("return "),t.codegenNode?dn(t.codegenNode,n):r("null"),S&&(o(),r("}")),o(),r("}"),{ast:t,code:n.code,preamble:_?R.code:"",map:n.map?n.map.toJSON():void 0}}function Yy(t,e){const{ssr:n,prefixIdentifiers:i,push:r,newline:s,runtimeModuleName:a,runtimeGlobalName:o,ssrRuntimeModuleName:l}=e,c=o,p=Array.from(t.helpers);if(p.length>0&&(r(`const _Vue = ${c}
`),t.hoists.length)){const d=[Nf,Of,Pa,Ff,pm].filter(g=>p.includes(g)).map(Rm).join(", ");r(`const { ${d} } = _Vue
`)}jy(t.hoists,e),s(),r("return ")}function Fl(t,e,{helper:n,push:i,newline:r,isTS:s}){const a=n(e==="filter"?zf:e==="component"?Bf:kf);for(let o=0;o<t.length;o++){let l=t[o];const c=l.endsWith("__self");c&&(l=l.slice(0,-6)),i(`const ${va(l,e)} = ${a}(${JSON.stringify(l)}${c?", true":""})${s?"!":""}`),o<t.length-1&&r()}}function jy(t,e){if(!t.length)return;e.pure=!0;const{push:n,newline:i,helper:r,scopeId:s,mode:a}=e;i();for(let o=0;o<t.length;o++){const l=t[o];l&&(n(`const _hoisted_${o+1} = `),dn(l,e),i())}e.pure=!1}function Zf(t,e){const n=t.length>3||!1;e.push("["),n&&e.indent(),Ia(t,e,n),n&&e.deindent(),e.push("]")}function Ia(t,e,n=!1,i=!0){const{push:r,newline:s}=e;for(let a=0;a<t.length;a++){const o=t[a];ut(o)?r(o):We(o)?Zf(o,e):dn(o,e),a<t.length-1&&(n?(i&&r(","),s()):i&&r(", "))}}function dn(t,e){if(ut(t)){e.push(t);return}if(ji(t)){e.push(e.helper(t));return}switch(t.type){case 1:case 9:case 11:dn(t.codegenNode,e);break;case 2:$y(t,e);break;case 4:Pm(t,e);break;case 5:Ky(t,e);break;case 12:dn(t.codegenNode,e);break;case 8:Lm(t,e);break;case 3:Jy(t,e);break;case 13:Qy(t,e);break;case 14:tx(t,e);break;case 15:nx(t,e);break;case 17:ix(t,e);break;case 18:rx(t,e);break;case 19:sx(t,e);break;case 20:ax(t,e);break;case 21:Ia(t.body,e,!0,!1);break}}function $y(t,e){e.push(JSON.stringify(t.content),t)}function Pm(t,e){const{content:n,isStatic:i}=t;e.push(i?JSON.stringify(n):n,t)}function Ky(t,e){const{push:n,helper:i,pure:r}=e;r&&n(xl),n(`${i(_l)}(`),dn(t.content,e),n(")")}function Lm(t,e){for(let n=0;n<t.children.length;n++){const i=t.children[n];ut(i)?e.push(i):dn(i,e)}}function Zy(t,e){const{push:n}=e;if(t.type===8)n("["),Lm(t,e),n("]");else if(t.isStatic){const i=$f(t.content)?t.content:JSON.stringify(t.content);n(i,t)}else n(`[${t.content}]`,t)}function Jy(t,e){const{push:n,helper:i,pure:r}=e;r&&n(xl),n(`${i(Pa)}(${JSON.stringify(t.content)})`,t)}function Qy(t,e){const{push:n,helper:i,pure:r}=e,{tag:s,props:a,children:o,patchFlag:l,dynamicProps:c,directives:p,isBlock:d,disableTracking:g,isComponent:S}=t;p&&n(i(Hf)+"("),d&&n(`(${i(Ir)}(${g?"true":""}), `),r&&n(xl);const _=d?As(e.inSSR,S):bs(e.inSSR,S);n(i(_)+"(",t),Ia(ex([s,a,o,l,c]),e),n(")"),d&&n(")"),p&&(n(", "),dn(p,e),n(")"))}function ex(t){let e=t.length;for(;e--&&t[e]==null;);return t.slice(0,e+1).map(n=>n||"null")}function tx(t,e){const{push:n,helper:i,pure:r}=e,s=ut(t.callee)?t.callee:i(t.callee);r&&n(xl),n(s+"(",t),Ia(t.arguments,e),n(")")}function nx(t,e){const{push:n,indent:i,deindent:r,newline:s}=e,{properties:a}=t;if(!a.length){n("{}",t);return}const o=a.length>1||!1;n(o?"{":"{ "),o&&i();for(let l=0;l<a.length;l++){const{key:c,value:p}=a[l];Zy(c,e),n(": "),dn(p,e),l<a.length-1&&(n(","),s())}o&&r(),n(o?"}":" }")}function ix(t,e){Zf(t.elements,e)}function rx(t,e){const{push:n,indent:i,deindent:r}=e,{params:s,returns:a,body:o,newline:l,isSlot:c}=t;c&&n(`_${Ms[qf]}(`),n("(",t),We(s)?Ia(s,e):s&&dn(s,e),n(") => "),(l||o)&&(n("{"),i()),a?(l&&n("return "),We(a)?Zf(a,e):dn(a,e)):o&&dn(o,e),(l||o)&&(r(),n("}")),c&&(t.isNonScopedSlot&&n(", undefined, true"),n(")"))}function sx(t,e){const{test:n,consequent:i,alternate:r,newline:s}=t,{push:a,indent:o,deindent:l,newline:c}=e;if(n.type===4){const d=!$f(n.content);d&&a("("),Pm(n,e),d&&a(")")}else a("("),dn(n,e),a(")");s&&o(),e.indentLevel++,s||a(" "),a("? "),dn(i,e),e.indentLevel--,s&&c(),s||a(" "),a(": ");const p=r.type===19;p||e.indentLevel++,dn(r,e),p||e.indentLevel--,s&&l(!0)}function ax(t,e){const{push:n,helper:i,indent:r,deindent:s,newline:a}=e;n(`_cache[${t.index}] || (`),t.isVNode&&(r(),n(`${i(zo)}(-1),`),a()),n(`_cache[${t.index}] = `),dn(t.value,e),t.isVNode&&(n(","),a(),n(`${i(zo)}(1),`),a(),n(`_cache[${t.index}]`),s()),n(")")}new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");const ox=Cm(/^(if|else|else-if)$/,(t,e,n)=>lx(t,e,n,(i,r,s)=>{const a=n.parent.children;let o=a.indexOf(i),l=0;for(;o-->=0;){const c=a[o];c&&c.type===9&&(l+=c.branches.length)}return()=>{if(s)i.codegenNode=Ku(r,l,n);else{const c=cx(i.codegenNode);c.alternate=Ku(r,l+i.branches.length-1,n)}}}));function lx(t,e,n,i){if(e.name!=="else"&&(!e.exp||!e.exp.content.trim())){const r=e.exp?e.exp.loc:t.loc;n.onError(Ft(28,e.loc)),e.exp=mt("true",!1,r)}if(e.name==="if"){const r=$u(t,e),s={type:9,loc:t.loc,branches:[r]};if(n.replaceNode(s),i)return i(s,r,!0)}else{const r=n.parent.children;let s=r.indexOf(t);for(;s-->=-1;){const a=r[s];if(a&&a.type===3){n.removeNode(a);continue}if(a&&a.type===2&&!a.content.trim().length){n.removeNode(a);continue}if(a&&a.type===9){e.name==="else-if"&&a.branches[a.branches.length-1].condition===void 0&&n.onError(Ft(30,t.loc)),n.removeNode();const o=$u(t,e);a.branches.push(o);const l=i&&i(a,o,!1);yl(o,n),l&&l(),n.currentNode=null}else n.onError(Ft(30,t.loc));break}}}function $u(t,e){const n=t.tagType===3;return{type:10,loc:t.loc,condition:e.name==="else"?void 0:e.exp,children:n&&!zn(t,"for")?t.children:[t],userKey:gl(t,"key"),isTemplateIf:n}}function Ku(t,e,n){return t.condition?Nc(t.condition,Zu(t,e,n),Gt(n.helper(Pa),['""',"true"])):Zu(t,e,n)}function Zu(t,e,n){const{helper:i}=n,r=Ht("key",mt(`${e}`,!1,Fn,2)),{children:s}=t,a=s[0];if(s.length!==1||a.type!==1)if(s.length===1&&a.type===11){const l=a.codegenNode;return Xo(l,r,n),l}else{let l=64;return ga(n,i(ma),Hn([r]),s,l+"",void 0,void 0,!0,!1,!1,t.loc)}else{const l=a.codegenNode,c=Ay(l);return c.type===13&&jf(c,n),Xo(c,r,n),l}}function cx(t){for(;;)if(t.type===19)if(t.alternate.type===19)t=t.alternate;else return t;else t.type===20&&(t=t.value)}const fx=Cm("for",(t,e,n)=>{const{helper:i,removeHelper:r}=n;return ux(t,e,n,s=>{const a=Gt(i(Vf),[s.source]),o=Go(t),l=zn(t,"memo"),c=gl(t,"key"),p=c&&(c.type===6?mt(c.value.content,!0):c.exp),d=c?Ht("key",p):null,g=s.source.type===4&&s.source.constType>0,S=g?64:c?128:256;return s.codegenNode=ga(n,i(ma),void 0,a,S+"",void 0,void 0,!0,!g,!1,t.loc),()=>{let _;const{children:R}=s,v=R.length!==1||R[0].type!==1,h=Wo(t)?t:o&&t.children.length===1&&Wo(t.children[0])?t.children[0]:null;if(h?(_=h.codegenNode,o&&d&&Xo(_,d,n)):v?_=ga(n,i(ma),d?Hn([d]):void 0,t.children,"64",void 0,void 0,!0,void 0,!1):(_=R[0].codegenNode,o&&d&&Xo(_,d,n),_.isBlock!==!g&&(_.isBlock?(r(Ir),r(As(n.inSSR,_.isComponent))):r(bs(n.inSSR,_.isComponent))),_.isBlock=!g,_.isBlock?(i(Ir),i(As(n.inSSR,_.isComponent))):i(bs(n.inSSR,_.isComponent))),l){const u=Es(Bc(s.parseResult,[mt("_cached")]));u.body=gy([ii(["const _memo = (",l.exp,")"]),ii(["if (_cached",...p?[" && _cached.key === ",p]:[],` && ${n.helperString(gm)}(_cached, _memo)) return _cached`]),ii(["const _item = ",_]),mt("_item.memo = _memo"),mt("return _item")]),a.arguments.push(u,mt("_cache"),mt(String(n.cached++)))}else a.arguments.push(Es(Bc(s.parseResult),_,!0))}})});function ux(t,e,n,i){if(!e.exp){n.onError(Ft(31,e.loc));return}const r=Dm(e.exp);if(!r){n.onError(Ft(32,e.loc));return}const{addIdentifiers:s,removeIdentifiers:a,scopes:o}=n,{source:l,value:c,key:p,index:d}=r,g={type:11,loc:e.loc,source:l,valueAlias:c,keyAlias:p,objectIndexAlias:d,parseResult:r,children:Go(t)?t.children:[t]};n.replaceNode(g),o.vFor++;const S=i&&i(g);return()=>{o.vFor--,S&&S()}}const hx=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Ju=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,dx=/^\(|\)$/g;function Dm(t,e){const n=t.loc,i=t.content,r=i.match(hx);if(!r)return;const[,s,a]=r,o={source:Za(n,a.trim(),i.indexOf(a,s.length)),value:void 0,key:void 0,index:void 0};let l=s.trim().replace(dx,"").trim();const c=s.indexOf(l),p=l.match(Ju);if(p){l=l.replace(Ju,"").trim();const d=p[1].trim();let g;if(d&&(g=i.indexOf(d,c+l.length),o.key=Za(n,d,g)),p[2]){const S=p[2].trim();S&&(o.index=Za(n,S,i.indexOf(S,o.key?g+d.length:c+l.length)))}}return l&&(o.value=Za(n,l,c)),o}function Za(t,e,n){return mt(e,!1,xm(t,n,e.length))}function Bc({value:t,key:e,index:n},i=[]){return px([t,e,n,...i])}function px(t){let e=t.length;for(;e--&&!t[e];);return t.slice(0,e+1).map((n,i)=>n||mt("_".repeat(i+1),!1))}const Qu=mt("undefined",!1),mx=(t,e)=>{if(t.type===1&&(t.tagType===1||t.tagType===3)){const n=zn(t,"slot");if(n)return n.exp,e.scopes.vSlot++,()=>{e.scopes.vSlot--}}},_x=(t,e,n)=>Es(t,e,!1,!0,e.length?e[0].loc:n);function gx(t,e,n=_x){e.helper(qf);const{children:i,loc:r}=t,s=[],a=[];let o=e.scopes.vSlot>0||e.scopes.vFor>0;const l=zn(t,"slot",!0);if(l){const{arg:v,exp:h}=l;v&&!En(v)&&(o=!0),s.push(Ht(v||mt("default",!0),n(h,i,r)))}let c=!1,p=!1;const d=[],g=new Set;let S=0;for(let v=0;v<i.length;v++){const h=i[v];let u;if(!Go(h)||!(u=zn(h,"slot",!0))){h.type!==3&&d.push(h);continue}if(l){e.onError(Ft(37,u.loc));break}c=!0;const{children:f,loc:y}=h,{arg:E=mt("default",!0),exp:M,loc:C}=u;let T;En(E)?T=E?E.content:"default":o=!0;const w=n(M,f,y);let L,k,I;if(L=zn(h,"if"))o=!0,a.push(Nc(L.exp,Ja(E,w,S++),Qu));else if(k=zn(h,/^else(-if)?$/,!0)){let O=v,F;for(;O--&&(F=i[O],F.type===3););if(F&&Go(F)&&zn(F,"if")){i.splice(v,1),v--;let X=a[a.length-1];for(;X.alternate.type===19;)X=X.alternate;X.alternate=k.exp?Nc(k.exp,Ja(E,w,S++),Qu):Ja(E,w,S++)}else e.onError(Ft(30,k.loc))}else if(I=zn(h,"for")){o=!0;const O=I.parseResult||Dm(I.exp);O?a.push(Gt(e.helper(Vf),[O.source,Es(Bc(O),Ja(E,w),!0)])):e.onError(Ft(32,I.loc))}else{if(T){if(g.has(T)){e.onError(Ft(38,C));continue}g.add(T),T==="default"&&(p=!0)}s.push(Ht(E,w))}}if(!l){const v=(h,u)=>{const f=n(h,u,r);return e.compatConfig&&(f.isNonScopedSlot=!0),Ht("default",f)};c?d.length&&d.some(h=>Im(h))&&(p?e.onError(Ft(39,d[0].loc)):s.push(v(void 0,d))):s.push(v(void 0,i))}const _=o?2:Ao(t.children)?3:1;let R=Hn(s.concat(Ht("_",mt(_+"",!1))),r);return a.length&&(R=Gt(e.helper(_m),[R,Da(a)])),{slots:R,hasDynamicSlots:o}}function Ja(t,e,n){const i=[Ht("name",t),Ht("fn",e)];return n!=null&&i.push(Ht("key",mt(String(n),!0))),Hn(i)}function Ao(t){for(let e=0;e<t.length;e++){const n=t[e];switch(n.type){case 1:if(n.tagType===2||Ao(n.children))return!0;break;case 9:if(Ao(n.branches))return!0;break;case 10:case 11:if(Ao(n.children))return!0;break}}return!1}function Im(t){return t.type!==2&&t.type!==12?!0:t.type===2?!!t.content.trim():Im(t.content)}const Um=new WeakMap,vx=(t,e)=>function(){if(t=e.currentNode,!(t.type===1&&(t.tagType===0||t.tagType===1)))return;const{tag:i,props:r}=t,s=t.tagType===1;let a=s?yx(t,e):`"${i}"`;const o=Ct(a)&&a.callee===Bo;let l,c,p,d=0,g,S,_,R=o||a===ra||a===Uf||!s&&(i==="svg"||i==="foreignObject");if(r.length>0){const v=Nm(t,e,void 0,s,o);l=v.props,d=v.patchFlag,S=v.dynamicPropNames;const h=v.directives;_=h&&h.length?Da(h.map(u=>Sx(u,e))):void 0,v.shouldUseBlock&&(R=!0)}if(t.children.length>0)if(a===Fo&&(R=!0,d|=1024),s&&a!==ra&&a!==Fo){const{slots:h,hasDynamicSlots:u}=gx(t,e);c=h,u&&(d|=1024)}else if(t.children.length===1&&a!==ra){const h=t.children[0],u=h.type,f=u===5||u===8;f&&Vn(h,e)===0&&(d|=1),f||u===2?c=h:c=t.children}else c=t.children;d!==0&&(p=String(d),S&&S.length&&(g=Tx(S))),t.codegenNode=ga(e,a,l,c,p,g,_,!!R,!1,s,t.loc)};function yx(t,e,n=!1){let{tag:i}=t;const r=kc(i),s=gl(t,"is");if(s)if(r||Mr("COMPILER_IS_ON_ELEMENT",e)){const l=s.type===6?s.value&&mt(s.value.content,!0):s.exp;if(l)return Gt(e.helper(Bo),[l])}else s.type===6&&s.value.content.startsWith("vue:")&&(i=s.value.content.slice(4));const a=!r&&zn(t,"is");if(a&&a.exp)return Gt(e.helper(Bo),[a.exp]);const o=vm(i)||e.isBuiltInComponent(i);return o?(n||e.helper(o),o):(e.helper(Bf),e.components.add(i),va(i,"component"))}function Nm(t,e,n=t.props,i,r,s=!1){const{tag:a,loc:o,children:l}=t;let c=[];const p=[],d=[],g=l.length>0;let S=!1,_=0,R=!1,v=!1,h=!1,u=!1,f=!1,y=!1;const E=[],M=w=>{c.length&&(p.push(Hn(eh(c),o)),c=[]),w&&p.push(w)},C=({key:w,value:L})=>{if(En(w)){const k=w.content,I=Nr(k);if(I&&(!i||r)&&k.toLowerCase()!=="onclick"&&k!=="onUpdate:modelValue"&&!gr(k)&&(u=!0),I&&gr(k)&&(y=!0),L.type===20||(L.type===4||L.type===8)&&Vn(L,e)>0)return;k==="ref"?R=!0:k==="class"?v=!0:k==="style"?h=!0:k!=="key"&&!E.includes(k)&&E.push(k),i&&(k==="class"||k==="style")&&!E.includes(k)&&E.push(k)}else f=!0};for(let w=0;w<n.length;w++){const L=n[w];if(L.type===6){const{loc:k,name:I,value:O}=L;let F=!0;if(I==="ref"&&(R=!0,e.scopes.vFor>0&&c.push(Ht(mt("ref_for",!0),mt("true")))),I==="is"&&(kc(a)||O&&O.content.startsWith("vue:")||Mr("COMPILER_IS_ON_ELEMENT",e)))continue;c.push(Ht(mt(I,!0,xm(k,0,I.length)),mt(O?O.content:"",F,O?O.loc:k)))}else{const{name:k,arg:I,exp:O,loc:F}=L,X=k==="bind",Z=k==="on";if(k==="slot"){i||e.onError(Ft(40,F));continue}if(k==="once"||k==="memo"||k==="is"||X&&_r(I,"is")&&(kc(a)||Mr("COMPILER_IS_ON_ELEMENT",e))||Z&&s)continue;if((X&&_r(I,"key")||Z&&g&&_r(I,"vue:before-update"))&&(S=!0),X&&_r(I,"ref")&&e.scopes.vFor>0&&c.push(Ht(mt("ref_for",!0),mt("true"))),!I&&(X||Z)){if(f=!0,O)if(X){if(M(),Mr("COMPILER_V_BIND_OBJECT_ORDER",e)){p.unshift(O);continue}p.push(O)}else M({type:14,loc:F,callee:e.helper(Xf),arguments:i?[O]:[O,"true"]});else e.onError(Ft(X?34:35,F));continue}const G=e.directiveTransforms[k];if(G){const{props:K,needRuntime:me}=G(L,t,e);!s&&K.forEach(C),Z&&I&&!En(I)?M(Hn(K,o)):c.push(...K),me&&(d.push(L),ji(me)&&Um.set(L,me))}else L_(k)||(d.push(L),g&&(S=!0))}}let T;if(p.length?(M(),p.length>1?T=Gt(e.helper(ko),p,o):T=p[0]):c.length&&(T=Hn(eh(c),o)),f?_|=16:(v&&!i&&(_|=2),h&&!i&&(_|=4),E.length&&(_|=8),u&&(_|=32)),!S&&(_===0||_===32)&&(R||y||d.length>0)&&(_|=512),!e.inSSR&&T)switch(T.type){case 15:let w=-1,L=-1,k=!1;for(let F=0;F<T.properties.length;F++){const X=T.properties[F].key;En(X)?X.content==="class"?w=F:X.content==="style"&&(L=F):X.isHandlerKey||(k=!0)}const I=T.properties[w],O=T.properties[L];k?T=Gt(e.helper(_a),[T]):(I&&!En(I.value)&&(I.value=Gt(e.helper(Gf),[I.value])),O&&(h||O.value.type===4&&O.value.content.trim()[0]==="["||O.value.type===17)&&(O.value=Gt(e.helper(Wf),[O.value])));break;case 14:break;default:T=Gt(e.helper(_a),[Gt(e.helper(La),[T])]);break}return{props:T,directives:d,patchFlag:_,dynamicPropNames:E,shouldUseBlock:S}}function eh(t){const e=new Map,n=[];for(let i=0;i<t.length;i++){const r=t[i];if(r.key.type===8||!r.key.isStatic){n.push(r);continue}const s=r.key.content,a=e.get(s);a?(s==="style"||s==="class"||Nr(s))&&xx(a,r):(e.set(s,r),n.push(r))}return n}function xx(t,e){t.value.type===17?t.value.elements.push(e.value):t.value=Da([t.value,e.value],t.loc)}function Sx(t,e){const n=[],i=Um.get(t);i?n.push(e.helperString(i)):(e.helper(kf),e.directives.add(t.name),n.push(va(t.name,"directive")));const{loc:r}=t;if(t.exp&&n.push(t.exp),t.arg&&(t.exp||n.push("void 0"),n.push(t.arg)),Object.keys(t.modifiers).length){t.arg||(t.exp||n.push("void 0"),n.push("void 0"));const s=mt("true",!1,r);n.push(Hn(t.modifiers.map(a=>Ht(a,s)),r))}return Da(n,t.loc)}function Tx(t){let e="[";for(let n=0,i=t.length;n<i;n++)e+=JSON.stringify(t[n]),n<i-1&&(e+=", ");return e+"]"}function kc(t){return t==="component"||t==="Component"}const Mx=(t,e)=>{if(Wo(t)){const{children:n,loc:i}=t,{slotName:r,slotProps:s}=Ex(t,e),a=[e.prefixIdentifiers?"_ctx.$slots":"$slots",r,"{}","undefined","true"];let o=2;s&&(a[2]=s,o=3),n.length&&(a[3]=Es([],n,!1,!1,i),o=4),e.scopeId&&!e.slotted&&(o=5),a.splice(o),t.codegenNode=Gt(e.helper(mm),a,i)}};function Ex(t,e){let n='"default"',i;const r=[];for(let s=0;s<t.props.length;s++){const a=t.props[s];a.type===6?a.value&&(a.name==="name"?n=JSON.stringify(a.value.content):(a.name=Xt(a.name),r.push(a))):a.name==="bind"&&_r(a.arg,"name")?a.exp&&(n=a.exp):(a.name==="bind"&&a.arg&&En(a.arg)&&(a.arg.content=Xt(a.arg.content)),r.push(a))}if(r.length>0){const{props:s,directives:a}=Nm(t,e,r,!1,!1);i=s,a.length&&e.onError(Ft(36,a[0].loc))}return{slotName:n,slotProps:i}}const bx=/^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,Om=(t,e,n,i)=>{const{loc:r,modifiers:s,arg:a}=t;!t.exp&&!s.length&&n.onError(Ft(35,r));let o;if(a.type===4)if(a.isStatic){let d=a.content;d.startsWith("vue:")&&(d=`vnode-${d.slice(4)}`);const g=e.tagType!==0||d.startsWith("vnode")||!/[A-Z]/.test(d)?hs(Xt(d)):`on:${d}`;o=mt(g,!0,a.loc)}else o=ii([`${n.helperString(Uc)}(`,a,")"]);else o=a,o.children.unshift(`${n.helperString(Uc)}(`),o.children.push(")");let l=t.exp;l&&!l.content.trim()&&(l=void 0);let c=n.cacheHandlers&&!l&&!n.inVOnce;if(l){const d=ym(l.content),g=!(d||bx.test(l.content)),S=l.content.includes(";");(g||c&&d)&&(l=ii([`${g?"$event":"(...args)"} => ${S?"{":"("}`,l,S?"}":")"]))}let p={props:[Ht(o,l||mt("() => {}",!1,r))]};return i&&(p=i(p)),c&&(p.props[0].value=n.cache(p.props[0].value)),p.props.forEach(d=>d.key.isHandlerKey=!0),p},Ax=(t,e,n)=>{const{exp:i,modifiers:r,loc:s}=t,a=t.arg;return a.type!==4?(a.children.unshift("("),a.children.push(') || ""')):a.isStatic||(a.content=`${a.content} || ""`),r.includes("camel")&&(a.type===4?a.isStatic?a.content=Xt(a.content):a.content=`${n.helperString(Ic)}(${a.content})`:(a.children.unshift(`${n.helperString(Ic)}(`),a.children.push(")"))),n.inSSR||(r.includes("prop")&&th(a,"."),r.includes("attr")&&th(a,"^")),!i||i.type===4&&!i.content.trim()?(n.onError(Ft(34,s)),{props:[Ht(a,mt("",!0,s))]}):{props:[Ht(a,i)]}},th=(t,e)=>{t.type===4?t.isStatic?t.content=e+t.content:t.content=`\`${e}\${${t.content}}\``:(t.children.unshift(`'${e}' + (`),t.children.push(")"))},wx=(t,e)=>{if(t.type===0||t.type===1||t.type===11||t.type===10)return()=>{const n=t.children;let i,r=!1;for(let s=0;s<n.length;s++){const a=n[s];if(Ol(a)){r=!0;for(let o=s+1;o<n.length;o++){const l=n[o];if(Ol(l))i||(i=n[s]=ii([a],a.loc)),i.children.push(" + ",l),n.splice(o,1),o--;else{i=void 0;break}}}}if(!(!r||n.length===1&&(t.type===0||t.type===1&&t.tagType===0&&!t.props.find(s=>s.type===7&&!e.directiveTransforms[s.name])&&t.tag!=="template")))for(let s=0;s<n.length;s++){const a=n[s];if(Ol(a)||a.type===8){const o=[];(a.type!==2||a.content!==" ")&&o.push(a),!e.ssr&&Vn(a,e)===0&&o.push("1"),n[s]={type:12,content:a,loc:a.loc,codegenNode:Gt(e.helper(Ff),o)}}}}},nh=new WeakSet,Cx=(t,e)=>{if(t.type===1&&zn(t,"once",!0))return nh.has(t)||e.inVOnce||e.inSSR?void 0:(nh.add(t),e.inVOnce=!0,e.helper(zo),()=>{e.inVOnce=!1;const n=e.currentNode;n.codegenNode&&(n.codegenNode=e.cache(n.codegenNode,!0))})},Fm=(t,e,n)=>{const{exp:i,arg:r}=t;if(!i)return n.onError(Ft(41,t.loc)),Qa();const s=i.loc.source,a=i.type===4?i.content:s,o=n.bindingMetadata[s];if(o==="props"||o==="props-aliased")return n.onError(Ft(44,i.loc)),Qa();const l=!1;if(!a.trim()||!ym(a)&&!l)return n.onError(Ft(42,i.loc)),Qa();const c=r||mt("modelValue",!0),p=r?En(r)?`onUpdate:${Xt(r.content)}`:ii(['"onUpdate:" + ',r]):"onUpdate:modelValue";let d;const g=n.isTS?"($event: any)":"$event";d=ii([`${g} => ((`,i,") = $event)"]);const S=[Ht(c,t.exp),Ht(p,d)];if(t.modifiers.length&&e.tagType===1){const _=t.modifiers.map(v=>($f(v)?v:JSON.stringify(v))+": true").join(", "),R=r?En(r)?`${r.content}Modifiers`:ii([r,' + "Modifiers"']):"modelModifiers";S.push(Ht(R,mt(`{ ${_} }`,!1,t.loc,2)))}return Qa(S)};function Qa(t=[]){return{props:t}}const Rx=/[\w).+\-_$\]]/,Px=(t,e)=>{Mr("COMPILER_FILTER",e)&&(t.type===5&&Yo(t.content,e),t.type===1&&t.props.forEach(n=>{n.type===7&&n.name!=="for"&&n.exp&&Yo(n.exp,e)}))};function Yo(t,e){if(t.type===4)ih(t,e);else for(let n=0;n<t.children.length;n++){const i=t.children[n];typeof i=="object"&&(i.type===4?ih(i,e):i.type===8?Yo(t,e):i.type===5&&Yo(i.content,e))}}function ih(t,e){const n=t.content;let i=!1,r=!1,s=!1,a=!1,o=0,l=0,c=0,p=0,d,g,S,_,R=[];for(S=0;S<n.length;S++)if(g=d,d=n.charCodeAt(S),i)d===39&&g!==92&&(i=!1);else if(r)d===34&&g!==92&&(r=!1);else if(s)d===96&&g!==92&&(s=!1);else if(a)d===47&&g!==92&&(a=!1);else if(d===124&&n.charCodeAt(S+1)!==124&&n.charCodeAt(S-1)!==124&&!o&&!l&&!c)_===void 0?(p=S+1,_=n.slice(0,S).trim()):v();else{switch(d){case 34:r=!0;break;case 39:i=!0;break;case 96:s=!0;break;case 40:c++;break;case 41:c--;break;case 91:l++;break;case 93:l--;break;case 123:o++;break;case 125:o--;break}if(d===47){let h=S-1,u;for(;h>=0&&(u=n.charAt(h),u===" ");h--);(!u||!Rx.test(u))&&(a=!0)}}_===void 0?_=n.slice(0,S).trim():p!==0&&v();function v(){R.push(n.slice(p,S).trim()),p=S+1}if(R.length){for(S=0;S<R.length;S++)_=Lx(_,R[S],e);t.content=_}}function Lx(t,e,n){n.helper(zf);const i=e.indexOf("(");if(i<0)return n.filters.add(e),`${va(e,"filter")}(${t})`;{const r=e.slice(0,i),s=e.slice(i+1);return n.filters.add(r),`${va(r,"filter")}(${t}${s!==")"?","+s:s}`}}const rh=new WeakSet,Dx=(t,e)=>{if(t.type===1){const n=zn(t,"memo");return!n||rh.has(t)?void 0:(rh.add(t),()=>{const i=t.codegenNode||e.currentNode.codegenNode;i&&i.type===13&&(t.tagType!==1&&jf(i,e),t.codegenNode=Gt(e.helper(Yf),[n.exp,Es(void 0,i),"_cache",String(e.cached++)]))})}};function Ix(t){return[[Cx,ox,Dx,fx,Px,Mx,vx,mx,wx],{on:Om,bind:Ax,model:Fm}]}function Ux(t,e={}){const n=e.onError||If,i=e.mode==="module";e.prefixIdentifiers===!0?n(Ft(47)):i&&n(Ft(48));const r=!1;e.cacheHandlers&&n(Ft(49)),e.scopeId&&!i&&n(Ft(50));const s=ut(t)?Ry(t,e):t,[a,o]=Ix();return Gy(s,vt({},e,{prefixIdentifiers:r,nodeTransforms:[...a,...e.nodeTransforms||[]],directiveTransforms:vt({},o,e.directiveTransforms||{})})),qy(s,vt({},e,{prefixIdentifiers:r}))}const Nx=()=>({props:[]}),Bm=Symbol(""),km=Symbol(""),zm=Symbol(""),Hm=Symbol(""),zc=Symbol(""),Vm=Symbol(""),Gm=Symbol(""),Wm=Symbol(""),Xm=Symbol(""),qm=Symbol("");py({[Bm]:"vModelRadio",[km]:"vModelCheckbox",[zm]:"vModelText",[Hm]:"vModelSelect",[zc]:"vModelDynamic",[Vm]:"withModifiers",[Gm]:"withKeys",[Wm]:"vShow",[Xm]:"Transition",[qm]:"TransitionGroup"});let Gr;function Ox(t,e=!1){return Gr||(Gr=document.createElement("div")),e?(Gr.innerHTML=`<div foo="${t.replace(/"/g,"&quot;")}">`,Gr.children[0].getAttribute("foo")):(Gr.innerHTML=t,Gr.textContent)}const Fx=Cn("style,iframe,script,noscript",!0),Bx={isVoidTag:X_,isNativeTag:t=>G_(t)||W_(t),isPreTag:t=>t==="pre",decodeEntities:Ox,isBuiltInComponent:t=>{if(ls(t,"Transition"))return Xm;if(ls(t,"TransitionGroup"))return qm},getNamespace(t,e){let n=e?e.ns:0;if(e&&n===2)if(e.tag==="annotation-xml"){if(t==="svg")return 1;e.props.some(i=>i.type===6&&i.name==="encoding"&&i.value!=null&&(i.value.content==="text/html"||i.value.content==="application/xhtml+xml"))&&(n=0)}else/^m(?:[ions]|text)$/.test(e.tag)&&t!=="mglyph"&&t!=="malignmark"&&(n=0);else e&&n===1&&(e.tag==="foreignObject"||e.tag==="desc"||e.tag==="title")&&(n=0);if(n===0){if(t==="svg")return 1;if(t==="math")return 2}return n},getTextMode({tag:t,ns:e}){if(e===0){if(t==="textarea"||t==="title")return 1;if(Fx(t))return 2}return 0}},kx=t=>{t.type===1&&t.props.forEach((e,n)=>{e.type===6&&e.name==="style"&&e.value&&(t.props[n]={type:7,name:"bind",arg:mt("style",!0,e.loc),exp:zx(e.value.content,e.loc),modifiers:[],loc:e.loc})})},zx=(t,e)=>{const n=Cd(t);return mt(JSON.stringify(n),!1,e,3)};function Wi(t,e){return Ft(t,e)}const Hx=(t,e,n)=>{const{exp:i,loc:r}=t;return i||n.onError(Wi(53,r)),e.children.length&&(n.onError(Wi(54,r)),e.children.length=0),{props:[Ht(mt("innerHTML",!0,r),i||mt("",!0))]}},Vx=(t,e,n)=>{const{exp:i,loc:r}=t;return i||n.onError(Wi(55,r)),e.children.length&&(n.onError(Wi(56,r)),e.children.length=0),{props:[Ht(mt("textContent",!0),i?Vn(i,n)>0?i:Gt(n.helperString(_l),[i],r):mt("",!0))]}},Gx=(t,e,n)=>{const i=Fm(t,e,n);if(!i.props.length||e.tagType===1)return i;t.arg&&n.onError(Wi(58,t.arg.loc));const{tag:r}=e,s=n.isCustomElement(r);if(r==="input"||r==="textarea"||r==="select"||s){let a=zm,o=!1;if(r==="input"||s){const l=gl(e,"type");if(l){if(l.type===7)a=zc;else if(l.value)switch(l.value.content){case"radio":a=Bm;break;case"checkbox":a=km;break;case"file":o=!0,n.onError(Wi(59,t.loc));break}}else My(e)&&(a=zc)}else r==="select"&&(a=Hm);o||(i.needRuntime=n.helper(a))}else n.onError(Wi(57,t.loc));return i.props=i.props.filter(a=>!(a.key.type===4&&a.key.content==="modelValue")),i},Wx=Cn("passive,once,capture"),Xx=Cn("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),qx=Cn("left,right"),Ym=Cn("onkeyup,onkeydown,onkeypress",!0),Yx=(t,e,n,i)=>{const r=[],s=[],a=[];for(let o=0;o<e.length;o++){const l=e[o];l==="native"&&ya("COMPILER_V_ON_NATIVE",n)||Wx(l)?a.push(l):qx(l)?En(t)?Ym(t.content)?r.push(l):s.push(l):(r.push(l),s.push(l)):Xx(l)?s.push(l):r.push(l)}return{keyModifiers:r,nonKeyModifiers:s,eventOptionModifiers:a}},sh=(t,e)=>En(t)&&t.content.toLowerCase()==="onclick"?mt(e,!0):t.type!==4?ii(["(",t,`) === "onClick" ? "${e}" : (`,t,")"]):t,jx=(t,e,n)=>Om(t,e,n,i=>{const{modifiers:r}=t;if(!r.length)return i;let{key:s,value:a}=i.props[0];const{keyModifiers:o,nonKeyModifiers:l,eventOptionModifiers:c}=Yx(s,r,n,t.loc);if(l.includes("right")&&(s=sh(s,"onContextmenu")),l.includes("middle")&&(s=sh(s,"onMouseup")),l.length&&(a=Gt(n.helper(Vm),[a,JSON.stringify(l)])),o.length&&(!En(s)||Ym(s.content))&&(a=Gt(n.helper(Gm),[a,JSON.stringify(o)])),c.length){const p=c.map(Fr).join("");s=En(s)?mt(`${s.content}${p}`,!0):ii(["(",s,`) + "${p}"`])}return{props:[Ht(s,a)]}}),$x=(t,e,n)=>{const{exp:i,loc:r}=t;return i||n.onError(Wi(61,r)),{props:[],needRuntime:n.helper(Wm)}},Kx=(t,e)=>{t.type===1&&t.tagType===0&&(t.tag==="script"||t.tag==="style")&&e.removeNode()},Zx=[kx],Jx={cloak:Nx,html:Hx,text:Vx,model:Gx,on:jx,show:$x};function Qx(t,e={}){return Ux(t,vt({},Bx,e,{nodeTransforms:[Kx,...Zx,...e.nodeTransforms||[]],directiveTransforms:vt({},Jx,e.directiveTransforms||{}),transformHoist:null}))}const ah=Object.create(null);function eS(t,e){if(!ut(t))if(t.nodeType)t=t.innerHTML;else return vn;const n=t,i=ah[n];if(i)return i;if(t[0]==="#"){const o=document.querySelector(t);t=o?o.innerHTML:""}const r=vt({hoistStatic:!0,onError:void 0,onWarn:vn},e);!r.isCustomElement&&typeof customElements<"u"&&(r.isCustomElement=o=>!!customElements.get(o));const{code:s}=Qx(t,r),a=new Function("Vue",s)(ly);return a._rc=!0,ah[n]=a}Fp(eS);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jf="156",tS=0,oh=1,nS=2,jm=1,iS=2,Si=3,er=0,bn=1,Ei=2,Xi=0,gs=1,lh=2,ch=3,fh=4,rS=5,os=100,sS=101,aS=102,uh=103,hh=104,oS=200,lS=201,cS=202,fS=203,$m=204,Km=205,uS=206,hS=207,dS=208,pS=209,mS=210,_S=0,gS=1,vS=2,Hc=3,yS=4,xS=5,SS=6,TS=7,Zm=0,MS=1,ES=2,qi=0,bS=1,AS=2,wS=3,CS=4,RS=5,Jm=300,ws=301,Cs=302,Vc=303,Gc=304,Sl=306,jo=1e3,ti=1001,Wc=1002,gn=1003,dh=1004,Bl=1005,Sn=1006,PS=1007,Sa=1008,Yi=1009,LS=1010,DS=1011,Qf=1012,Qm=1013,zi=1014,Hi=1015,Ta=1016,e_=1017,t_=1018,Er=1020,IS=1021,ni=1023,US=1024,NS=1025,br=1026,Rs=1027,OS=1028,n_=1029,FS=1030,i_=1031,r_=1033,kl=33776,zl=33777,Hl=33778,Vl=33779,ph=35840,mh=35841,_h=35842,gh=35843,BS=36196,vh=37492,yh=37496,xh=37808,Sh=37809,Th=37810,Mh=37811,Eh=37812,bh=37813,Ah=37814,wh=37815,Ch=37816,Rh=37817,Ph=37818,Lh=37819,Dh=37820,Ih=37821,Gl=36492,Uh=36494,Nh=36495,kS=36283,Oh=36284,Fh=36285,Bh=36286,s_=3e3,Ar=3001,zS=3200,HS=3201,VS=0,GS=1,wr="",Ot="srgb",fi="srgb-linear",Tl="display-p3",Wl=7680,WS=519,XS=512,qS=513,YS=514,jS=515,$S=516,KS=517,ZS=518,JS=519,kh=35044,zh="300 es",Xc=1035,bi=2e3,$o=2001;class Us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xl=Math.PI/180,qc=180/Math.PI;function Ua(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[t&255]+ln[t>>8&255]+ln[t>>16&255]+ln[t>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[n&63|128]+ln[n>>8&255]+"-"+ln[n>>16&255]+ln[n>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function Tn(t,e,n){return Math.max(e,Math.min(n,t))}function QS(t,e){return(t%e+e)%e}function ql(t,e,n){return(1-n)*t+n*e}function Hh(t){return(t&t-1)===0&&t!==0}function Yc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Vs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function yn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class wt{constructor(e=0,n=0){wt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,n,i,r,s,a,o,l,c){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const p=this.elements;return p[0]=e,p[1]=r,p[2]=o,p[3]=n,p[4]=s,p[5]=l,p[6]=i,p[7]=a,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],p=i[4],d=i[7],g=i[2],S=i[5],_=i[8],R=r[0],v=r[3],h=r[6],u=r[1],f=r[4],y=r[7],E=r[2],M=r[5],C=r[8];return s[0]=a*R+o*u+l*E,s[3]=a*v+o*f+l*M,s[6]=a*h+o*y+l*C,s[1]=c*R+p*u+d*E,s[4]=c*v+p*f+d*M,s[7]=c*h+p*y+d*C,s[2]=g*R+S*u+_*E,s[5]=g*v+S*f+_*M,s[8]=g*h+S*y+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8];return n*a*p-n*o*c-i*s*p+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8],d=p*a-o*c,g=o*l-p*s,S=c*s-a*l,_=n*d+i*g+r*S;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/_;return e[0]=d*R,e[1]=(r*c-p*i)*R,e[2]=(o*i-r*a)*R,e[3]=g*R,e[4]=(p*n-r*l)*R,e[5]=(r*s-o*n)*R,e[6]=S*R,e[7]=(i*l-c*n)*R,e[8]=(a*n-i*s)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Yl.makeScale(e,n)),this}rotate(e){return this.premultiply(Yl.makeRotation(-e)),this}translate(e,n){return this.premultiply(Yl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yl=new gt;function a_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ma(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function eT(){const t=Ma("canvas");return t.style.display="block",t}const Vh={};function aa(t){t in Vh||(Vh[t]=!0,console.warn(t))}function vs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function jl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const tT=new gt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),nT=new gt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function iT(t){return t.convertSRGBToLinear().applyMatrix3(nT)}function rT(t){return t.applyMatrix3(tT).convertLinearToSRGB()}const sT={[fi]:t=>t,[Ot]:t=>t.convertSRGBToLinear(),[Tl]:iT},aT={[fi]:t=>t,[Ot]:t=>t.convertLinearToSRGB(),[Tl]:rT},qn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return fi},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=sT[e],r=aT[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Wr;class o_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wr===void 0&&(Wr=Ma("canvas")),Wr.width=e.width,Wr.height=e.height;const i=Wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Wr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ma("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=vs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(vs(n[i]/255)*255):n[i]=vs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oT=0;class l_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oT++}),this.uuid=Ua(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push($l(r[a].image)):s.push($l(r[a]))}else s=$l(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function $l(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?o_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lT=0;class An extends Us{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,i=ti,r=ti,s=Sn,a=Sa,o=ni,l=Yi,c=An.DEFAULT_ANISOTROPY,p=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lT++}),this.uuid=Ua(),this.name="",this.source=new l_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===Ar?Ot:wr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jo:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case Wc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jo:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case Wc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?Ar:s_}set encoding(e){aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ar?Ot:wr}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Jm;An.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,n=0,i=0,r=1){rn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],p=l[4],d=l[8],g=l[1],S=l[5],_=l[9],R=l[2],v=l[6],h=l[10];if(Math.abs(p-g)<.01&&Math.abs(d-R)<.01&&Math.abs(_-v)<.01){if(Math.abs(p+g)<.1&&Math.abs(d+R)<.1&&Math.abs(_+v)<.1&&Math.abs(c+S+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const f=(c+1)/2,y=(S+1)/2,E=(h+1)/2,M=(p+g)/4,C=(d+R)/4,T=(_+v)/4;return f>y&&f>E?f<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(f),r=M/i,s=C/i):y>E?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=M/r,s=T/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=C/s,r=T/s),this.set(i,r,s,n),this}let u=Math.sqrt((v-_)*(v-_)+(d-R)*(d-R)+(g-p)*(g-p));return Math.abs(u)<.001&&(u=1),this.x=(v-_)/u,this.y=(d-R)/u,this.z=(g-p)/u,this.w=Math.acos((c+S+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cT extends Us{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new rn(0,0,e,n),this.scissorTest=!1,this.viewport=new rn(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(aa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ar?Ot:wr),this.texture=new An(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Sn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new l_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends cT{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class c_ extends An{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fT extends An{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Na{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],p=i[r+2],d=i[r+3];const g=s[a+0],S=s[a+1],_=s[a+2],R=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=p,e[n+3]=d;return}if(o===1){e[n+0]=g,e[n+1]=S,e[n+2]=_,e[n+3]=R;return}if(d!==R||l!==g||c!==S||p!==_){let v=1-o;const h=l*g+c*S+p*_+d*R,u=h>=0?1:-1,f=1-h*h;if(f>Number.EPSILON){const E=Math.sqrt(f),M=Math.atan2(E,h*u);v=Math.sin(v*M)/E,o=Math.sin(o*M)/E}const y=o*u;if(l=l*v+g*y,c=c*v+S*y,p=p*v+_*y,d=d*v+R*y,v===1-o){const E=1/Math.sqrt(l*l+c*c+p*p+d*d);l*=E,c*=E,p*=E,d*=E}}e[n]=l,e[n+1]=c,e[n+2]=p,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],p=i[r+3],d=s[a],g=s[a+1],S=s[a+2],_=s[a+3];return e[n]=o*_+p*d+l*S-c*g,e[n+1]=l*_+p*g+c*d-o*S,e[n+2]=c*_+p*S+o*g-l*d,e[n+3]=p*_-o*d-l*g-c*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),p=o(r/2),d=o(s/2),g=l(i/2),S=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=g*p*d+c*S*_,this._y=c*S*d-g*p*_,this._z=c*p*_+g*S*d,this._w=c*p*d-g*S*_;break;case"YXZ":this._x=g*p*d+c*S*_,this._y=c*S*d-g*p*_,this._z=c*p*_-g*S*d,this._w=c*p*d+g*S*_;break;case"ZXY":this._x=g*p*d-c*S*_,this._y=c*S*d+g*p*_,this._z=c*p*_+g*S*d,this._w=c*p*d-g*S*_;break;case"ZYX":this._x=g*p*d-c*S*_,this._y=c*S*d+g*p*_,this._z=c*p*_-g*S*d,this._w=c*p*d+g*S*_;break;case"YZX":this._x=g*p*d+c*S*_,this._y=c*S*d+g*p*_,this._z=c*p*_-g*S*d,this._w=c*p*d-g*S*_;break;case"XZY":this._x=g*p*d-c*S*_,this._y=c*S*d-g*p*_,this._z=c*p*_+g*S*d,this._w=c*p*d+g*S*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],p=n[6],d=n[10],g=i+o+d;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(p-l)*S,this._y=(s-c)*S,this._z=(a-r)*S}else if(i>o&&i>d){const S=2*Math.sqrt(1+i-o-d);this._w=(p-l)/S,this._x=.25*S,this._y=(r+a)/S,this._z=(s+c)/S}else if(o>d){const S=2*Math.sqrt(1+o-i-d);this._w=(s-c)/S,this._x=(r+a)/S,this._y=.25*S,this._z=(l+p)/S}else{const S=2*Math.sqrt(1+d-i-o);this._w=(a-r)/S,this._x=(s+c)/S,this._y=(l+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,p=n._w;return this._x=i*p+a*o+r*c-s*l,this._y=r*p+a*l+s*o-i*c,this._z=s*p+a*c+i*l-r*o,this._w=a*p-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const S=1-n;return this._w=S*a+n*this._w,this._x=S*i+n*this._x,this._y=S*r+n*this._y,this._z=S*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),p=Math.atan2(c,o),d=Math.sin((1-n)*p)/c,g=Math.sin(n*p)/c;return this._w=a*d+this._w*g,this._x=i*d+this._x*g,this._y=r*d+this._y*g,this._z=s*d+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ve{constructor(e=0,n=0,i=0){ve.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Gh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Gh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*n+a*r-o*i,p=l*i+o*n-s*r,d=l*r+s*i-a*n,g=-s*n-a*i-o*r;return this.x=c*l+g*-s+p*-o-d*-a,this.y=p*l+g*-a+d*-s-c*-o,this.z=d*l+g*-o+c*-a-p*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kl.copy(this).projectOnVector(e),this.sub(Kl)}reflect(e){return this.sub(Kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kl=new ve,Gh=new Na;class Oa{constructor(e=new ve(1/0,1/0,1/0),n=new ve(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(mi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(mi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=mi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox),Xr.applyMatrix4(e.matrixWorld),this.union(Xr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)mi.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(mi)}else r.boundingBox===null&&r.computeBoundingBox(),Xr.copy(r.boundingBox),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),eo.subVectors(this.max,Gs),qr.subVectors(e.a,Gs),Yr.subVectors(e.b,Gs),jr.subVectors(e.c,Gs),Ui.subVectors(Yr,qr),Ni.subVectors(jr,Yr),ar.subVectors(qr,jr);let n=[0,-Ui.z,Ui.y,0,-Ni.z,Ni.y,0,-ar.z,ar.y,Ui.z,0,-Ui.x,Ni.z,0,-Ni.x,ar.z,0,-ar.x,-Ui.y,Ui.x,0,-Ni.y,Ni.x,0,-ar.y,ar.x,0];return!Zl(n,qr,Yr,jr,eo)||(n=[1,0,0,0,1,0,0,0,1],!Zl(n,qr,Yr,jr,eo))?!1:(to.crossVectors(Ui,Ni),n=[to.x,to.y,to.z],Zl(n,qr,Yr,jr,eo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new ve,new ve,new ve,new ve,new ve,new ve,new ve,new ve],mi=new ve,Xr=new Oa,qr=new ve,Yr=new ve,jr=new ve,Ui=new ve,Ni=new ve,ar=new ve,Gs=new ve,eo=new ve,to=new ve,or=new ve;function Zl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){or.fromArray(t,s);const o=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),c=n.dot(or),p=i.dot(or);if(Math.max(-Math.max(l,c,p),Math.min(l,c,p))>o)return!1}return!0}const uT=new Oa,Ws=new ve,Jl=new ve;class eu{constructor(e=new ve,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):uT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const n=Ws.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ws,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(Jl)),this.expandByPoint(Ws.copy(e.center).sub(Jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new ve,Ql=new ve,no=new ve,Oi=new ve,ec=new ve,io=new ve,tc=new ve;class hT{constructor(e=new ve,n=new ve(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,n),_i.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ql.copy(e).add(n).multiplyScalar(.5),no.copy(n).sub(e).normalize(),Oi.copy(this.origin).sub(Ql);const s=e.distanceTo(n)*.5,a=-this.direction.dot(no),o=Oi.dot(this.direction),l=-Oi.dot(no),c=Oi.lengthSq(),p=Math.abs(1-a*a);let d,g,S,_;if(p>0)if(d=a*l-o,g=a*o-l,_=s*p,d>=0)if(g>=-_)if(g<=_){const R=1/p;d*=R,g*=R,S=d*(d+a*g+2*o)+g*(a*d+g+2*l)+c}else g=s,d=Math.max(0,-(a*g+o)),S=-d*d+g*(g+2*l)+c;else g=-s,d=Math.max(0,-(a*g+o)),S=-d*d+g*(g+2*l)+c;else g<=-_?(d=Math.max(0,-(-a*s+o)),g=d>0?-s:Math.min(Math.max(-s,-l),s),S=-d*d+g*(g+2*l)+c):g<=_?(d=0,g=Math.min(Math.max(-s,-l),s),S=g*(g+2*l)+c):(d=Math.max(0,-(a*s+o)),g=d>0?s:Math.min(Math.max(-s,-l),s),S=-d*d+g*(g+2*l)+c);else g=a>0?-s:s,d=Math.max(0,-(a*g+o)),S=-d*d+g*(g+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ql).addScaledVector(no,g),S}intersectSphere(e,n){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,p=1/this.direction.y,d=1/this.direction.z,g=this.origin;return c>=0?(i=(e.min.x-g.x)*c,r=(e.max.x-g.x)*c):(i=(e.max.x-g.x)*c,r=(e.min.x-g.x)*c),p>=0?(s=(e.min.y-g.y)*p,a=(e.max.y-g.y)*p):(s=(e.max.y-g.y)*p,a=(e.min.y-g.y)*p),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-g.z)*d,l=(e.max.z-g.z)*d):(o=(e.max.z-g.z)*d,l=(e.min.z-g.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,n,i,r,s){ec.subVectors(n,e),io.subVectors(i,e),tc.crossVectors(ec,io);let a=this.direction.dot(tc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Oi.subVectors(this.origin,e);const l=o*this.direction.dot(io.crossVectors(Oi,io));if(l<0)return null;const c=o*this.direction.dot(ec.cross(Oi));if(c<0||l+c>a)return null;const p=-o*Oi.dot(tc);return p<0?null:this.at(p/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,n,i,r,s,a,o,l,c,p,d,g,S,_,R,v){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,p,d,g,S,_,R,v)}set(e,n,i,r,s,a,o,l,c,p,d,g,S,_,R,v){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=p,h[10]=d,h[14]=g,h[3]=S,h[7]=_,h[11]=R,h[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/$r.setFromMatrixColumn(e,0).length(),s=1/$r.setFromMatrixColumn(e,1).length(),a=1/$r.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),p=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const g=a*p,S=a*d,_=o*p,R=o*d;n[0]=l*p,n[4]=-l*d,n[8]=c,n[1]=S+_*c,n[5]=g-R*c,n[9]=-o*l,n[2]=R-g*c,n[6]=_+S*c,n[10]=a*l}else if(e.order==="YXZ"){const g=l*p,S=l*d,_=c*p,R=c*d;n[0]=g+R*o,n[4]=_*o-S,n[8]=a*c,n[1]=a*d,n[5]=a*p,n[9]=-o,n[2]=S*o-_,n[6]=R+g*o,n[10]=a*l}else if(e.order==="ZXY"){const g=l*p,S=l*d,_=c*p,R=c*d;n[0]=g-R*o,n[4]=-a*d,n[8]=_+S*o,n[1]=S+_*o,n[5]=a*p,n[9]=R-g*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const g=a*p,S=a*d,_=o*p,R=o*d;n[0]=l*p,n[4]=_*c-S,n[8]=g*c+R,n[1]=l*d,n[5]=R*c+g,n[9]=S*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const g=a*l,S=a*c,_=o*l,R=o*c;n[0]=l*p,n[4]=R-g*d,n[8]=_*d+S,n[1]=d,n[5]=a*p,n[9]=-o*p,n[2]=-c*p,n[6]=S*d+_,n[10]=g-R*d}else if(e.order==="XZY"){const g=a*l,S=a*c,_=o*l,R=o*c;n[0]=l*p,n[4]=-d,n[8]=c*p,n[1]=g*d+R,n[5]=a*p,n[9]=S*d-_,n[2]=_*d-S,n[6]=o*p,n[10]=R*d+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dT,e,pT)}lookAt(e,n,i){const r=this.elements;return Rn.subVectors(e,n),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Fi.crossVectors(i,Rn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Fi.crossVectors(i,Rn)),Fi.normalize(),ro.crossVectors(Rn,Fi),r[0]=Fi.x,r[4]=ro.x,r[8]=Rn.x,r[1]=Fi.y,r[5]=ro.y,r[9]=Rn.y,r[2]=Fi.z,r[6]=ro.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],p=i[1],d=i[5],g=i[9],S=i[13],_=i[2],R=i[6],v=i[10],h=i[14],u=i[3],f=i[7],y=i[11],E=i[15],M=r[0],C=r[4],T=r[8],w=r[12],L=r[1],k=r[5],I=r[9],O=r[13],F=r[2],X=r[6],Z=r[10],G=r[14],K=r[3],me=r[7],pe=r[11],re=r[15];return s[0]=a*M+o*L+l*F+c*K,s[4]=a*C+o*k+l*X+c*me,s[8]=a*T+o*I+l*Z+c*pe,s[12]=a*w+o*O+l*G+c*re,s[1]=p*M+d*L+g*F+S*K,s[5]=p*C+d*k+g*X+S*me,s[9]=p*T+d*I+g*Z+S*pe,s[13]=p*w+d*O+g*G+S*re,s[2]=_*M+R*L+v*F+h*K,s[6]=_*C+R*k+v*X+h*me,s[10]=_*T+R*I+v*Z+h*pe,s[14]=_*w+R*O+v*G+h*re,s[3]=u*M+f*L+y*F+E*K,s[7]=u*C+f*k+y*X+E*me,s[11]=u*T+f*I+y*Z+E*pe,s[15]=u*w+f*O+y*G+E*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],p=e[2],d=e[6],g=e[10],S=e[14],_=e[3],R=e[7],v=e[11],h=e[15];return _*(+s*l*d-r*c*d-s*o*g+i*c*g+r*o*S-i*l*S)+R*(+n*l*S-n*c*g+s*a*g-r*a*S+r*c*p-s*l*p)+v*(+n*c*d-n*o*S-s*a*d+i*a*S+s*o*p-i*c*p)+h*(-r*o*p-n*l*d+n*o*g+r*a*d-i*a*g+i*l*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8],d=e[9],g=e[10],S=e[11],_=e[12],R=e[13],v=e[14],h=e[15],u=d*v*c-R*g*c+R*l*S-o*v*S-d*l*h+o*g*h,f=_*g*c-p*v*c-_*l*S+a*v*S+p*l*h-a*g*h,y=p*R*c-_*d*c+_*o*S-a*R*S-p*o*h+a*d*h,E=_*d*l-p*R*l-_*o*g+a*R*g+p*o*v-a*d*v,M=n*u+i*f+r*y+s*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/M;return e[0]=u*C,e[1]=(R*g*s-d*v*s-R*r*S+i*v*S+d*r*h-i*g*h)*C,e[2]=(o*v*s-R*l*s+R*r*c-i*v*c-o*r*h+i*l*h)*C,e[3]=(d*l*s-o*g*s-d*r*c+i*g*c+o*r*S-i*l*S)*C,e[4]=f*C,e[5]=(p*v*s-_*g*s+_*r*S-n*v*S-p*r*h+n*g*h)*C,e[6]=(_*l*s-a*v*s-_*r*c+n*v*c+a*r*h-n*l*h)*C,e[7]=(a*g*s-p*l*s+p*r*c-n*g*c-a*r*S+n*l*S)*C,e[8]=y*C,e[9]=(_*d*s-p*R*s-_*i*S+n*R*S+p*i*h-n*d*h)*C,e[10]=(a*R*s-_*o*s+_*i*c-n*R*c-a*i*h+n*o*h)*C,e[11]=(p*o*s-a*d*s-p*i*c+n*d*c+a*i*S-n*o*S)*C,e[12]=E*C,e[13]=(p*R*r-_*d*r+_*i*g-n*R*g-p*i*v+n*d*v)*C,e[14]=(_*o*r-a*R*r-_*i*l+n*R*l+a*i*v-n*o*v)*C,e[15]=(a*d*r-p*o*r+p*i*l-n*d*l-a*i*g+n*o*g)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,p=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,p*o+i,p*l-r*a,0,c*l-r*o,p*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,p=a+a,d=o+o,g=s*c,S=s*p,_=s*d,R=a*p,v=a*d,h=o*d,u=l*c,f=l*p,y=l*d,E=i.x,M=i.y,C=i.z;return r[0]=(1-(R+h))*E,r[1]=(S+y)*E,r[2]=(_-f)*E,r[3]=0,r[4]=(S-y)*M,r[5]=(1-(g+h))*M,r[6]=(v+u)*M,r[7]=0,r[8]=(_+f)*C,r[9]=(v-u)*C,r[10]=(1-(g+R))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=$r.set(r[0],r[1],r[2]).length();const a=$r.set(r[4],r[5],r[6]).length(),o=$r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yn.copy(this);const c=1/s,p=1/a,d=1/o;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=p,Yn.elements[5]*=p,Yn.elements[6]*=p,Yn.elements[8]*=d,Yn.elements[9]*=d,Yn.elements[10]*=d,n.setFromRotationMatrix(Yn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=bi){const l=this.elements,c=2*s/(n-e),p=2*s/(i-r),d=(n+e)/(n-e),g=(i+r)/(i-r);let S,_;if(o===bi)S=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===$o)S=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=p,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=S,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=bi){const l=this.elements,c=1/(n-e),p=1/(i-r),d=1/(a-s),g=(n+e)*c,S=(i+r)*p;let _,R;if(o===bi)_=(a+s)*d,R=-2*d;else if(o===$o)_=s*d,R=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-g,l[1]=0,l[5]=2*p,l[9]=0,l[13]=-S,l[2]=0,l[6]=0,l[10]=R,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const $r=new ve,Yn=new sn,dT=new ve(0,0,0),pT=new ve(1,1,1),Fi=new ve,ro=new ve,Rn=new ve,Wh=new sn,Xh=new Na;class Ml{constructor(e=0,n=0,i=0,r=Ml.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],p=r[9],d=r[2],g=r[6],S=r[10];switch(n){case"XYZ":this._y=Math.asin(Tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(g,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,S),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-d,S),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,S));break;case"XZY":this._z=Math.asin(-Tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(g,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ml.DEFAULT_ORDER="XYZ";class f_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mT=0;const qh=new ve,Kr=new Na,gi=new sn,so=new ve,Xs=new ve,_T=new ve,gT=new Na,Yh=new ve(1,0,0),jh=new ve(0,1,0),$h=new ve(0,0,1),vT={type:"added"},yT={type:"removed"};class On extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=Ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new ve,n=new Ml,i=new Na,r=new ve(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new sn},normalMatrix:{value:new gt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new f_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(Yh,e)}rotateY(e){return this.rotateOnAxis(jh,e)}rotateZ(e){return this.rotateOnAxis($h,e)}translateOnAxis(e,n){return qh.copy(e).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Yh,e)}translateY(e){return this.translateOnAxis(jh,e)}translateZ(e){return this.translateOnAxis($h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?so.copy(e):so.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Xs,so,this.up):gi.lookAt(so,Xs,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(gi),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(yT)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,n);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,_T),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,gT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,p=l.length;c<p;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),p=a(e.images),d=a(e.shapes),g=a(e.skeletons),S=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),p.length>0&&(i.images=p),d.length>0&&(i.shapes=d),g.length>0&&(i.skeletons=g),S.length>0&&(i.animations=S),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const p=o[c];delete p.metadata,l.push(p)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}On.DEFAULT_UP=new ve(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new ve,vi=new ve,nc=new ve,yi=new ve,Zr=new ve,Jr=new ve,Kh=new ve,ic=new ve,rc=new ve,sc=new ve;let ao=!1;class Zn{constructor(e=new ve,n=new ve,i=new ve){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),vi.subVectors(i,n),nc.subVectors(e,n);const a=jn.dot(jn),o=jn.dot(vi),l=jn.dot(nc),c=vi.dot(vi),p=vi.dot(nc),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const g=1/d,S=(c*l-o*p)*g,_=(a*p-o*l)*g;return s.set(1-S-_,_,S)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,yi),yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getUV(e,n,i,r,s,a,o,l){return ao===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ao=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,yi),l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),vi.subVectors(e,n),jn.cross(vi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),jn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ao===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ao=!0),Zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Zr.subVectors(r,i),Jr.subVectors(s,i),ic.subVectors(e,i);const l=Zr.dot(ic),c=Jr.dot(ic);if(l<=0&&c<=0)return n.copy(i);rc.subVectors(e,r);const p=Zr.dot(rc),d=Jr.dot(rc);if(p>=0&&d<=p)return n.copy(r);const g=l*d-p*c;if(g<=0&&l>=0&&p<=0)return a=l/(l-p),n.copy(i).addScaledVector(Zr,a);sc.subVectors(e,s);const S=Zr.dot(sc),_=Jr.dot(sc);if(_>=0&&S<=_)return n.copy(s);const R=S*c-l*_;if(R<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Jr,o);const v=p*_-S*d;if(v<=0&&d-p>=0&&S-_>=0)return Kh.subVectors(s,r),o=(d-p)/(d-p+(S-_)),n.copy(r).addScaledVector(Kh,o);const h=1/(v+R+g);return a=R*h,o=g*h,n.copy(i).addScaledVector(Zr,a).addScaledVector(Jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let xT=0;class El extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=Ua(),this.name="",this.type="Material",this.blending=gs,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$m,this.blendDst=Km,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Hc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=WS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wl,this.stencilZFail=Wl,this.stencilZPass=Wl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(i.blending=this.blending),this.side!==er&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const u_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},oo={h:0,s:0,l:0};function ac(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class It{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=qn.workingColorSpace){return this.r=e,this.g=n,this.b=i,qn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=qn.workingColorSpace){if(e=QS(e,1),n=Tn(n,0,1),i=Tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=ac(a,s,e+1/3),this.g=ac(a,s,e),this.b=ac(a,s,e-1/3)}return qn.toWorkingColorSpace(this,r),this}setStyle(e,n=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ot){const i=u_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=jl(e.r),this.g=jl(e.g),this.b=jl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return qn.fromWorkingColorSpace(cn.copy(this),e),Math.round(Tn(cn.r*255,0,255))*65536+Math.round(Tn(cn.g*255,0,255))*256+Math.round(Tn(cn.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=qn.workingColorSpace){qn.fromWorkingColorSpace(cn.copy(this),n);const i=cn.r,r=cn.g,s=cn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const p=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=p<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=p,e}getRGB(e,n=qn.workingColorSpace){return qn.fromWorkingColorSpace(cn.copy(this),n),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Ot){qn.fromWorkingColorSpace(cn.copy(this),e);const n=cn.r,i=cn.g,r=cn.b;return e!==Ot?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL($n),$n.h+=e,$n.s+=n,$n.l+=i,this.setHSL($n.h,$n.s,$n.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL($n),e.getHSL(oo);const i=ql($n.h,oo.h,n),r=ql($n.s,oo.s,n),s=ql($n.l,oo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new It;It.NAMES=u_;class h_ extends El{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new ve,lo=new wt;class li{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=kh,this.updateRange={offset:0,count:-1},this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)lo.fromBufferAttribute(this,n),lo.applyMatrix3(e),this.setXY(n,lo.x,lo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix3(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Vs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=yn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vs(n,this.array)),n}setX(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vs(n,this.array)),n}setY(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vs(n,this.array)),n}setW(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),r=yn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),r=yn(r,this.array),s=yn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class d_ extends li{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class p_ extends li{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Cr extends li{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ST=0;const kn=new sn,oc=new On,Qr=new ve,Pn=new Oa,qs=new Oa,Jt=new ve;class kr extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ST++}),this.uuid=Ua(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(a_(e)?p_:d_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new gt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,n,i){return kn.makeTranslation(e,n,i),this.applyMatrix4(kn),this}scale(e,n,i){return kn.makeScale(e,n,i),this.applyMatrix4(kn),this}lookAt(e){return oc.lookAt(e),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Cr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ve(-1/0,-1/0,-1/0),new ve(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ve,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(Pn.min,qs.min),Pn.expandByPoint(Jt),Jt.addVectors(Pn.max,qs.max),Pn.expandByPoint(Jt)):(Pn.expandByPoint(qs.min),Pn.expandByPoint(qs.max))}Pn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,p=o.count;c<p;c++)Jt.fromBufferAttribute(o,c),l&&(Qr.fromBufferAttribute(e,c),Jt.add(Qr)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],p=[];for(let L=0;L<o;L++)c[L]=new ve,p[L]=new ve;const d=new ve,g=new ve,S=new ve,_=new wt,R=new wt,v=new wt,h=new ve,u=new ve;function f(L,k,I){d.fromArray(r,L*3),g.fromArray(r,k*3),S.fromArray(r,I*3),_.fromArray(a,L*2),R.fromArray(a,k*2),v.fromArray(a,I*2),g.sub(d),S.sub(d),R.sub(_),v.sub(_);const O=1/(R.x*v.y-v.x*R.y);isFinite(O)&&(h.copy(g).multiplyScalar(v.y).addScaledVector(S,-R.y).multiplyScalar(O),u.copy(S).multiplyScalar(R.x).addScaledVector(g,-v.x).multiplyScalar(O),c[L].add(h),c[k].add(h),c[I].add(h),p[L].add(u),p[k].add(u),p[I].add(u))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let L=0,k=y.length;L<k;++L){const I=y[L],O=I.start,F=I.count;for(let X=O,Z=O+F;X<Z;X+=3)f(i[X+0],i[X+1],i[X+2])}const E=new ve,M=new ve,C=new ve,T=new ve;function w(L){C.fromArray(s,L*3),T.copy(C);const k=c[L];E.copy(k),E.sub(C.multiplyScalar(C.dot(k))).normalize(),M.crossVectors(T,k);const O=M.dot(p[L])<0?-1:1;l[L*4]=E.x,l[L*4+1]=E.y,l[L*4+2]=E.z,l[L*4+3]=O}for(let L=0,k=y.length;L<k;++L){const I=y[L],O=I.start,F=I.count;for(let X=O,Z=O+F;X<Z;X+=3)w(i[X+0]),w(i[X+1]),w(i[X+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let g=0,S=i.count;g<S;g++)i.setXYZ(g,0,0,0);const r=new ve,s=new ve,a=new ve,o=new ve,l=new ve,c=new ve,p=new ve,d=new ve;if(e)for(let g=0,S=e.count;g<S;g+=3){const _=e.getX(g+0),R=e.getX(g+1),v=e.getX(g+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,R),a.fromBufferAttribute(n,v),p.subVectors(a,s),d.subVectors(r,s),p.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,R),c.fromBufferAttribute(i,v),o.add(p),l.add(p),c.add(p),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(R,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let g=0,S=n.count;g<S;g+=3)r.fromBufferAttribute(n,g+0),s.fromBufferAttribute(n,g+1),a.fromBufferAttribute(n,g+2),p.subVectors(a,s),d.subVectors(r,s),p.cross(d),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){const c=o.array,p=o.itemSize,d=o.normalized,g=new c.constructor(l.length*p);let S=0,_=0;for(let R=0,v=l.length;R<v;R++){o.isInterleavedBufferAttribute?S=l[R]*o.data.stride+o.offset:S=l[R]*p;for(let h=0;h<p;h++)g[_++]=c[S++]}return new li(g,p,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new kr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let p=0,d=c.length;p<d;p++){const g=c[p],S=e(g,i);l.push(S)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],p=[];for(let d=0,g=c.length;d<g;d++){const S=c[d];p.push(S.toJSON(e.data))}p.length>0&&(r[l]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const p=r[c];this.setAttribute(c,p.clone(n))}const s=e.morphAttributes;for(const c in s){const p=[],d=s[c];for(let g=0,S=d.length;g<S;g++)p.push(d[g].clone(n));this.morphAttributes[c]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,p=a.length;c<p;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zh=new sn,lr=new hT,co=new eu,Jh=new ve,es=new ve,ts=new ve,ns=new ve,lc=new ve,fo=new ve,uo=new wt,ho=new wt,po=new wt,Qh=new ve,ed=new ve,td=new ve,mo=new ve,_o=new ve;class Ai extends On{constructor(e=new kr,n=new h_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){fo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const p=o[l],d=s[l];p!==0&&(lc.fromBufferAttribute(d,e),a?fo.addScaledVector(lc,p):fo.addScaledVector(lc.sub(n),p))}n.add(fo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(s),lr.copy(e.ray).recast(e.near),!(co.containsPoint(lr.origin)===!1&&(lr.intersectSphere(co,Jh)===null||lr.origin.distanceToSquared(Jh)>(e.far-e.near)**2))&&(Zh.copy(s).invert(),lr.copy(e.ray).applyMatrix4(Zh),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,p=s.attributes.uv1,d=s.attributes.normal,g=s.groups,S=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,R=g.length;_<R;_++){const v=g[_],h=a[v.materialIndex],u=Math.max(v.start,S.start),f=Math.min(o.count,Math.min(v.start+v.count,S.start+S.count));for(let y=u,E=f;y<E;y+=3){const M=o.getX(y),C=o.getX(y+1),T=o.getX(y+2);r=go(this,h,e,i,c,p,d,M,C,T),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,S.start),R=Math.min(o.count,S.start+S.count);for(let v=_,h=R;v<h;v+=3){const u=o.getX(v),f=o.getX(v+1),y=o.getX(v+2);r=go(this,a,e,i,c,p,d,u,f,y),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,R=g.length;_<R;_++){const v=g[_],h=a[v.materialIndex],u=Math.max(v.start,S.start),f=Math.min(l.count,Math.min(v.start+v.count,S.start+S.count));for(let y=u,E=f;y<E;y+=3){const M=y,C=y+1,T=y+2;r=go(this,h,e,i,c,p,d,M,C,T),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,S.start),R=Math.min(l.count,S.start+S.count);for(let v=_,h=R;v<h;v+=3){const u=v,f=v+1,y=v+2;r=go(this,a,e,i,c,p,d,u,f,y),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function TT(t,e,n,i,r,s,a,o){let l;if(e.side===bn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===er,o),l===null)return null;_o.copy(o),_o.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(_o);return c<n.near||c>n.far?null:{distance:c,point:_o.clone(),object:t}}function go(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,es),t.getVertexPosition(l,ts),t.getVertexPosition(c,ns);const p=TT(t,e,n,i,es,ts,ns,mo);if(p){r&&(uo.fromBufferAttribute(r,o),ho.fromBufferAttribute(r,l),po.fromBufferAttribute(r,c),p.uv=Zn.getInterpolation(mo,es,ts,ns,uo,ho,po,new wt)),s&&(uo.fromBufferAttribute(s,o),ho.fromBufferAttribute(s,l),po.fromBufferAttribute(s,c),p.uv1=Zn.getInterpolation(mo,es,ts,ns,uo,ho,po,new wt),p.uv2=p.uv1),a&&(Qh.fromBufferAttribute(a,o),ed.fromBufferAttribute(a,l),td.fromBufferAttribute(a,c),p.normal=Zn.getInterpolation(mo,es,ts,ns,Qh,ed,td,new ve),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new ve,materialIndex:0};Zn.getNormal(es,ts,ns,d.normal),p.face=d}return p}class Fa extends kr{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],p=[],d=[];let g=0,S=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Cr(c,3)),this.setAttribute("normal",new Cr(p,3)),this.setAttribute("uv",new Cr(d,2));function _(R,v,h,u,f,y,E,M,C,T,w){const L=y/C,k=E/T,I=y/2,O=E/2,F=M/2,X=C+1,Z=T+1;let G=0,K=0;const me=new ve;for(let pe=0;pe<Z;pe++){const re=pe*k-O;for(let ae=0;ae<X;ae++){const Ne=ae*L-I;me[R]=Ne*u,me[v]=re*f,me[h]=F,c.push(me.x,me.y,me.z),me[R]=0,me[v]=0,me[h]=M>0?1:-1,p.push(me.x,me.y,me.z),d.push(ae/C),d.push(1-pe/T),G+=1}}for(let pe=0;pe<T;pe++)for(let re=0;re<C;re++){const ae=g+re+X*pe,Ne=g+re+X*(pe+1),ke=g+(re+1)+X*(pe+1),Fe=g+(re+1)+X*pe;l.push(ae,Ne,Fe),l.push(Ne,ke,Fe),K+=6}o.addGroup(S,K,w),S+=K,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function _n(t){const e={};for(let n=0;n<t.length;n++){const i=Ps(t[n]);for(const r in i)e[r]=i[r]}return e}function MT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function m_(t){return t.getRenderTarget()===null?t.outputColorSpace:fi}const ET={clone:Ps,merge:_n};var bT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tr extends El{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bT,this.fragmentShader=AT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=MT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class __ extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Jn extends __{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qc*2*Math.atan(Math.tan(Xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Xl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const is=-90,rs=1;class wT extends On{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Jn(is,rs,e,n);r.layers=this.layers,this.add(r);const s=new Jn(is,rs,e,n);s.layers=this.layers,this.add(s);const a=new Jn(is,rs,e,n);a.layers=this.layers,this.add(a);const o=new Jn(is,rs,e,n);o.layers=this.layers,this.add(o);const l=new Jn(is,rs,e,n);l.layers=this.layers,this.add(l);const c=new Jn(is,rs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$o)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,p=e.getRenderTarget(),d=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,a),e.setRenderTarget(i,3),e.render(n,o),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(p),e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class g_ extends An{constructor(e,n,i,r,s,a,o,l,c,p){e=e!==void 0?e:[],n=n!==void 0?n:ws,super(e,n,i,r,s,a,o,l,c,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class CT extends Ur{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(aa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ar?Ot:wr),this.texture=new g_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Sn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fa(5,5,5),s=new tr({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Xi});s.uniforms.tEquirect.value=n;const a=new Ai(r,s),o=n.minFilter;return n.minFilter===Sa&&(n.minFilter=Sn),new wT(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const cc=new ve,RT=new ve,PT=new gt;class fr{constructor(e=new ve(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=cc.subVectors(i,n).cross(RT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(cc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||PT.getNormalMatrix(e),r=this.coplanarPoint(cc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new eu,vo=new ve;class v_{constructor(e=new fr,n=new fr,i=new fr,r=new fr,s=new fr,a=new fr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=bi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],p=r[5],d=r[6],g=r[7],S=r[8],_=r[9],R=r[10],v=r[11],h=r[12],u=r[13],f=r[14],y=r[15];if(i[0].setComponents(l-s,g-c,v-S,y-h).normalize(),i[1].setComponents(l+s,g+c,v+S,y+h).normalize(),i[2].setComponents(l+a,g+p,v+_,y+u).normalize(),i[3].setComponents(l-a,g-p,v-_,y-u).normalize(),i[4].setComponents(l-o,g-d,v-R,y-f).normalize(),n===bi)i[5].setComponents(l+o,g+d,v+R,y+f).normalize();else if(n===$o)i[5].setComponents(o,d,R,f).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(vo.x=r.normal.x>0?e.max.x:e.min.x,vo.y=r.normal.y>0?e.max.y:e.min.y,vo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function y_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function LT(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,p){const d=c.array,g=c.usage,S=t.createBuffer();t.bindBuffer(p,S),t.bufferData(p,d,g),c.onUploadCallback();let _;if(d instanceof Float32Array)_=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=t.SHORT;else if(d instanceof Uint32Array)_=t.UNSIGNED_INT;else if(d instanceof Int32Array)_=t.INT;else if(d instanceof Int8Array)_=t.BYTE;else if(d instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:S,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,p,d){const g=p.array,S=p.updateRange;t.bindBuffer(d,c),S.count===-1?t.bufferSubData(d,0,g):(n?t.bufferSubData(d,S.offset*g.BYTES_PER_ELEMENT,g,S.offset,S.count):t.bufferSubData(d,S.offset*g.BYTES_PER_ELEMENT,g.subarray(S.offset,S.offset+S.count)),S.count=-1),p.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const p=i.get(c);p&&(t.deleteBuffer(p.buffer),i.delete(c))}function l(c,p){if(c.isGLBufferAttribute){const g=i.get(c);(!g||g.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,p)):d.version<c.version&&(s(d.buffer,c,p),d.version=c.version)}return{get:a,remove:o,update:l}}class bl extends kr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,p=l+1,d=e/o,g=n/l,S=[],_=[],R=[],v=[];for(let h=0;h<p;h++){const u=h*g-a;for(let f=0;f<c;f++){const y=f*d-s;_.push(y,-u,0),R.push(0,0,1),v.push(f/o),v.push(1-h/l)}}for(let h=0;h<l;h++)for(let u=0;u<o;u++){const f=u+c*h,y=u+c*(h+1),E=u+1+c*(h+1),M=u+1+c*h;S.push(f,y,M),S.push(y,E,M)}this.setIndex(S),this.setAttribute("position",new Cr(_,3)),this.setAttribute("normal",new Cr(R,3)),this.setAttribute("uv",new Cr(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.width,e.height,e.widthSegments,e.heightSegments)}}var DT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,UT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,FT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,GT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,WT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$T=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,JT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,QT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aM="gl_FragColor = linearToOutputTexel( gl_FragColor );",oM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,MM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,EM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,RM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,PM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,LM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,IM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,OM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,FM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,XM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,YM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,jM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,QM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,eE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,hE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_E=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,gE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ME=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,EE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,OE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,FE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GE=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ab=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ob=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:DT,alphahash_pars_fragment:IT,alphamap_fragment:UT,alphamap_pars_fragment:NT,alphatest_fragment:OT,alphatest_pars_fragment:FT,aomap_fragment:BT,aomap_pars_fragment:kT,begin_vertex:zT,beginnormal_vertex:HT,bsdfs:VT,iridescence_fragment:GT,bumpmap_pars_fragment:WT,clipping_planes_fragment:XT,clipping_planes_pars_fragment:qT,clipping_planes_pars_vertex:YT,clipping_planes_vertex:jT,color_fragment:$T,color_pars_fragment:KT,color_pars_vertex:ZT,color_vertex:JT,common:QT,cube_uv_reflection_fragment:eM,defaultnormal_vertex:tM,displacementmap_pars_vertex:nM,displacementmap_vertex:iM,emissivemap_fragment:rM,emissivemap_pars_fragment:sM,colorspace_fragment:aM,colorspace_pars_fragment:oM,envmap_fragment:lM,envmap_common_pars_fragment:cM,envmap_pars_fragment:fM,envmap_pars_vertex:uM,envmap_physical_pars_fragment:MM,envmap_vertex:hM,fog_vertex:dM,fog_pars_vertex:pM,fog_fragment:mM,fog_pars_fragment:_M,gradientmap_pars_fragment:gM,lightmap_fragment:vM,lightmap_pars_fragment:yM,lights_lambert_fragment:xM,lights_lambert_pars_fragment:SM,lights_pars_begin:TM,lights_toon_fragment:EM,lights_toon_pars_fragment:bM,lights_phong_fragment:AM,lights_phong_pars_fragment:wM,lights_physical_fragment:CM,lights_physical_pars_fragment:RM,lights_fragment_begin:PM,lights_fragment_maps:LM,lights_fragment_end:DM,logdepthbuf_fragment:IM,logdepthbuf_pars_fragment:UM,logdepthbuf_pars_vertex:NM,logdepthbuf_vertex:OM,map_fragment:FM,map_pars_fragment:BM,map_particle_fragment:kM,map_particle_pars_fragment:zM,metalnessmap_fragment:HM,metalnessmap_pars_fragment:VM,morphcolor_vertex:GM,morphnormal_vertex:WM,morphtarget_pars_vertex:XM,morphtarget_vertex:qM,normal_fragment_begin:YM,normal_fragment_maps:jM,normal_pars_fragment:$M,normal_pars_vertex:KM,normal_vertex:ZM,normalmap_pars_fragment:JM,clearcoat_normal_fragment_begin:QM,clearcoat_normal_fragment_maps:eE,clearcoat_pars_fragment:tE,iridescence_pars_fragment:nE,opaque_fragment:iE,packing:rE,premultiplied_alpha_fragment:sE,project_vertex:aE,dithering_fragment:oE,dithering_pars_fragment:lE,roughnessmap_fragment:cE,roughnessmap_pars_fragment:fE,shadowmap_pars_fragment:uE,shadowmap_pars_vertex:hE,shadowmap_vertex:dE,shadowmask_pars_fragment:pE,skinbase_vertex:mE,skinning_pars_vertex:_E,skinning_vertex:gE,skinnormal_vertex:vE,specularmap_fragment:yE,specularmap_pars_fragment:xE,tonemapping_fragment:SE,tonemapping_pars_fragment:TE,transmission_fragment:ME,transmission_pars_fragment:EE,uv_pars_fragment:bE,uv_pars_vertex:AE,uv_vertex:wE,worldpos_vertex:CE,background_vert:RE,background_frag:PE,backgroundCube_vert:LE,backgroundCube_frag:DE,cube_vert:IE,cube_frag:UE,depth_vert:NE,depth_frag:OE,distanceRGBA_vert:FE,distanceRGBA_frag:BE,equirect_vert:kE,equirect_frag:zE,linedashed_vert:HE,linedashed_frag:VE,meshbasic_vert:GE,meshbasic_frag:WE,meshlambert_vert:XE,meshlambert_frag:qE,meshmatcap_vert:YE,meshmatcap_frag:jE,meshnormal_vert:$E,meshnormal_frag:KE,meshphong_vert:ZE,meshphong_frag:JE,meshphysical_vert:QE,meshphysical_frag:eb,meshtoon_vert:tb,meshtoon_frag:nb,points_vert:ib,points_frag:rb,shadow_vert:sb,shadow_frag:ab,sprite_vert:ob,sprite_frag:lb},Ve={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},ai={basic:{uniforms:_n([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:_n([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new It(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:_n([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:_n([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:_n([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new It(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:_n([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:_n([Ve.points,Ve.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:_n([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:_n([Ve.common,Ve.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:_n([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:_n([Ve.sprite,Ve.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:_n([Ve.common,Ve.displacementmap,{referencePosition:{value:new ve},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:_n([Ve.lights,Ve.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};ai.physical={uniforms:_n([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const yo={r:0,b:0,g:0};function cb(t,e,n,i,r,s,a){const o=new It(0);let l=s===!0?0:1,c,p,d=null,g=0,S=null;function _(v,h){let u=!1,f=h.isScene===!0?h.background:null;f&&f.isTexture&&(f=(h.backgroundBlurriness>0?n:e).get(f)),f===null?R(o,l):f&&f.isColor&&(R(f,1),u=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||u)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),f&&(f.isCubeTexture||f.mapping===Sl)?(p===void 0&&(p=new Ai(new Fa(1,1,1),new tr({name:"BackgroundCubeMaterial",uniforms:Ps(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(E,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=f,p.material.uniforms.flipEnvMap.value=f.isCubeTexture&&f.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,p.material.toneMapped=f.colorSpace!==Ot,(d!==f||g!==f.version||S!==t.toneMapping)&&(p.material.needsUpdate=!0,d=f,g=f.version,S=t.toneMapping),p.layers.enableAll(),v.unshift(p,p.geometry,p.material,0,0,null)):f&&f.isTexture&&(c===void 0&&(c=new Ai(new bl(2,2),new tr({name:"BackgroundMaterial",uniforms:Ps(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=f,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=f.colorSpace!==Ot,f.matrixAutoUpdate===!0&&f.updateMatrix(),c.material.uniforms.uvTransform.value.copy(f.matrix),(d!==f||g!==f.version||S!==t.toneMapping)&&(c.material.needsUpdate=!0,d=f,g=f.version,S=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function R(v,h){v.getRGB(yo,m_(t)),i.buffers.color.setClear(yo.r,yo.g,yo.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(v,h=1){o.set(v),l=h,R(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,R(o,l)},render:_}}function fb(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=v(null);let c=l,p=!1;function d(F,X,Z,G,K){let me=!1;if(a){const pe=R(G,Z,X);c!==pe&&(c=pe,S(c.object)),me=h(F,G,Z,K),me&&u(F,G,Z,K)}else{const pe=X.wireframe===!0;(c.geometry!==G.id||c.program!==Z.id||c.wireframe!==pe)&&(c.geometry=G.id,c.program=Z.id,c.wireframe=pe,me=!0)}K!==null&&n.update(K,t.ELEMENT_ARRAY_BUFFER),(me||p)&&(p=!1,T(F,X,Z,G),K!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(K).buffer))}function g(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function S(F){return i.isWebGL2?t.bindVertexArray(F):s.bindVertexArrayOES(F)}function _(F){return i.isWebGL2?t.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function R(F,X,Z){const G=Z.wireframe===!0;let K=o[F.id];K===void 0&&(K={},o[F.id]=K);let me=K[X.id];me===void 0&&(me={},K[X.id]=me);let pe=me[G];return pe===void 0&&(pe=v(g()),me[G]=pe),pe}function v(F){const X=[],Z=[],G=[];for(let K=0;K<r;K++)X[K]=0,Z[K]=0,G[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Z,attributeDivisors:G,object:F,attributes:{},index:null}}function h(F,X,Z,G){const K=c.attributes,me=X.attributes;let pe=0;const re=Z.getAttributes();for(const ae in re)if(re[ae].location>=0){const ke=K[ae];let Fe=me[ae];if(Fe===void 0&&(ae==="instanceMatrix"&&F.instanceMatrix&&(Fe=F.instanceMatrix),ae==="instanceColor"&&F.instanceColor&&(Fe=F.instanceColor)),ke===void 0||ke.attribute!==Fe||Fe&&ke.data!==Fe.data)return!0;pe++}return c.attributesNum!==pe||c.index!==G}function u(F,X,Z,G){const K={},me=X.attributes;let pe=0;const re=Z.getAttributes();for(const ae in re)if(re[ae].location>=0){let ke=me[ae];ke===void 0&&(ae==="instanceMatrix"&&F.instanceMatrix&&(ke=F.instanceMatrix),ae==="instanceColor"&&F.instanceColor&&(ke=F.instanceColor));const Fe={};Fe.attribute=ke,ke&&ke.data&&(Fe.data=ke.data),K[ae]=Fe,pe++}c.attributes=K,c.attributesNum=pe,c.index=G}function f(){const F=c.newAttributes;for(let X=0,Z=F.length;X<Z;X++)F[X]=0}function y(F){E(F,0)}function E(F,X){const Z=c.newAttributes,G=c.enabledAttributes,K=c.attributeDivisors;Z[F]=1,G[F]===0&&(t.enableVertexAttribArray(F),G[F]=1),K[F]!==X&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,X),K[F]=X)}function M(){const F=c.newAttributes,X=c.enabledAttributes;for(let Z=0,G=X.length;Z<G;Z++)X[Z]!==F[Z]&&(t.disableVertexAttribArray(Z),X[Z]=0)}function C(F,X,Z,G,K,me,pe){pe===!0?t.vertexAttribIPointer(F,X,Z,K,me):t.vertexAttribPointer(F,X,Z,G,K,me)}function T(F,X,Z,G){if(i.isWebGL2===!1&&(F.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();const K=G.attributes,me=Z.getAttributes(),pe=X.defaultAttributeValues;for(const re in me){const ae=me[re];if(ae.location>=0){let Ne=K[re];if(Ne===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&(Ne=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&(Ne=F.instanceColor)),Ne!==void 0){const ke=Ne.normalized,Fe=Ne.itemSize,Ye=n.get(Ne);if(Ye===void 0)continue;const Qe=Ye.buffer,$e=Ye.type,et=Ye.bytesPerElement,Mt=i.isWebGL2===!0&&($e===t.INT||$e===t.UNSIGNED_INT||Ne.gpuType===Qm);if(Ne.isInterleavedBufferAttribute){const st=Ne.data,U=st.stride,Q=Ne.offset;if(st.isInstancedInterleavedBuffer){for(let se=0;se<ae.locationSize;se++)E(ae.location+se,st.meshPerAttribute);F.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let se=0;se<ae.locationSize;se++)y(ae.location+se);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let se=0;se<ae.locationSize;se++)C(ae.location+se,Fe/ae.locationSize,$e,ke,U*et,(Q+Fe/ae.locationSize*se)*et,Mt)}else{if(Ne.isInstancedBufferAttribute){for(let st=0;st<ae.locationSize;st++)E(ae.location+st,Ne.meshPerAttribute);F.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let st=0;st<ae.locationSize;st++)y(ae.location+st);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let st=0;st<ae.locationSize;st++)C(ae.location+st,Fe/ae.locationSize,$e,ke,Fe*et,Fe/ae.locationSize*st*et,Mt)}}else if(pe!==void 0){const ke=pe[re];if(ke!==void 0)switch(ke.length){case 2:t.vertexAttrib2fv(ae.location,ke);break;case 3:t.vertexAttrib3fv(ae.location,ke);break;case 4:t.vertexAttrib4fv(ae.location,ke);break;default:t.vertexAttrib1fv(ae.location,ke)}}}}M()}function w(){I();for(const F in o){const X=o[F];for(const Z in X){const G=X[Z];for(const K in G)_(G[K].object),delete G[K];delete X[Z]}delete o[F]}}function L(F){if(o[F.id]===void 0)return;const X=o[F.id];for(const Z in X){const G=X[Z];for(const K in G)_(G[K].object),delete G[K];delete X[Z]}delete o[F.id]}function k(F){for(const X in o){const Z=o[X];if(Z[F.id]===void 0)continue;const G=Z[F.id];for(const K in G)_(G[K].object),delete G[K];delete Z[F.id]}}function I(){O(),p=!0,c!==l&&(c=l,S(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:I,resetDefaultState:O,dispose:w,releaseStatesOfGeometry:L,releaseStatesOfProgram:k,initAttributes:f,enableAttribute:y,disableUnusedAttributes:M}}function ub(t,e,n,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,p){t.drawArrays(s,c,p),n.update(p,s,1)}function l(c,p,d){if(d===0)return;let g,S;if(r)g=t,S="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[S](s,c,p,d),n.update(p,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function hb(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),p=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),R=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),u=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),f=g>0,y=a||e.has("OES_texture_float"),E=f&&y,M=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:_,maxAttributes:R,maxVertexUniforms:v,maxVaryings:h,maxFragmentUniforms:u,vertexTextures:f,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:M}}function db(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new fr,o=new gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,g){const S=d.length!==0||g||i!==0||r;return r=g,i=d.length,S},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,g){n=p(d,g,0)},this.setState=function(d,g,S){const _=d.clippingPlanes,R=d.clipIntersection,v=d.clipShadows,h=t.get(d);if(!r||_===null||_.length===0||s&&!v)s?p(null):c();else{const u=s?0:i,f=u*4;let y=h.clippingState||null;l.value=y,y=p(_,g,f,S);for(let E=0;E!==f;++E)y[E]=n[E];h.clippingState=y,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=u}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(d,g,S,_){const R=d!==null?d.length:0;let v=null;if(R!==0){if(v=l.value,_!==!0||v===null){const h=S+R*4,u=g.matrixWorldInverse;o.getNormalMatrix(u),(v===null||v.length<h)&&(v=new Float32Array(h));for(let f=0,y=S;f!==R;++f,y+=4)a.copy(d[f]).applyMatrix4(u,o),a.normal.toArray(v,y),v[y+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,v}}function pb(t){let e=new WeakMap;function n(a,o){return o===Vc?a.mapping=ws:o===Gc&&(a.mapping=Cs),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Vc||o===Gc)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new CT(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class x_ extends __{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=p*this.view.offsetY,l=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const cs=4,nd=[.125,.215,.35,.446,.526,.582],pr=20,fc=new x_,id=new It;let uc=null;const ur=(1+Math.sqrt(5))/2,ss=1/ur,rd=[new ve(1,1,1),new ve(-1,1,1),new ve(1,1,-1),new ve(-1,1,-1),new ve(0,ur,ss),new ve(0,ur,-ss),new ve(ss,0,ur),new ve(-ss,0,ur),new ve(ur,ss,0),new ve(-ur,ss,0)];class sd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){uc=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uc),e.scissorTest=!1,xo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ws||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uc=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Ta,format:ni,colorSpace:fi,depthBuffer:!1},r=ad(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ad(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mb(s)),this._blurMaterial=_b(s,e,n)}return r}_compileMaterial(e){const n=new Ai(this._lodPlanes[0],e);this._renderer.compile(n,fc)}_sceneToCubeUV(e,n,i,r){const o=new Jn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,g=p.toneMapping;p.getClearColor(id),p.toneMapping=qi,p.autoClear=!1;const S=new h_({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),_=new Ai(new Fa,S);let R=!1;const v=e.background;v?v.isColor&&(S.color.copy(v),e.background=null,R=!0):(S.color.copy(id),R=!0);for(let h=0;h<6;h++){const u=h%3;u===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):u===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const f=this._cubeSize;xo(r,u*f,h>2?f:0,f,f),p.setRenderTarget(r),R&&p.render(_,o),p.render(e,o)}_.geometry.dispose(),_.material.dispose(),p.toneMapping=g,p.autoClear=d,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ws||e.mapping===Cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=od());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ai(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;xo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,fc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rd[(r-1)%rd.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,d=new Ai(this._lodPlanes[r],c),g=c.uniforms,S=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*S):2*Math.PI/(2*pr-1),R=s/_,v=isFinite(s)?1+Math.floor(p*R):pr;v>pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${pr}`);const h=[];let u=0;for(let C=0;C<pr;++C){const T=C/R,w=Math.exp(-T*T/2);h.push(w),C===0?u+=w:C<v&&(u+=2*w)}for(let C=0;C<h.length;C++)h[C]=h[C]/u;g.envMap.value=e.texture,g.samples.value=v,g.weights.value=h,g.latitudinal.value=a==="latitudinal",o&&(g.poleAxis.value=o);const{_lodMax:f}=this;g.dTheta.value=_,g.mipInt.value=f-i;const y=this._sizeLods[r],E=3*y*(r>f-cs?r-f+cs:0),M=4*(this._cubeSize-y);xo(n,E,M,3*y,2*y),l.setRenderTarget(n),l.render(d,fc)}}function mb(t){const e=[],n=[],i=[];let r=t;const s=t-cs+1+nd.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-cs?l=nd[a-t+cs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),p=-c,d=1+c,g=[p,p,d,p,d,d,p,p,d,d,p,d],S=6,_=6,R=3,v=2,h=1,u=new Float32Array(R*_*S),f=new Float32Array(v*_*S),y=new Float32Array(h*_*S);for(let M=0;M<S;M++){const C=M%3*2/3-1,T=M>2?0:-1,w=[C,T,0,C+2/3,T,0,C+2/3,T+1,0,C,T,0,C+2/3,T+1,0,C,T+1,0];u.set(w,R*_*M),f.set(g,v*_*M);const L=[M,M,M,M,M,M];y.set(L,h*_*M)}const E=new kr;E.setAttribute("position",new li(u,R)),E.setAttribute("uv",new li(f,v)),E.setAttribute("faceIndex",new li(y,h)),e.push(E),r>cs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ad(t,e,n){const i=new Ur(t,e,n);return i.texture.mapping=Sl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function _b(t,e,n){const i=new Float32Array(pr),r=new ve(0,1,0);return new tr({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function od(){return new tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function ld(){return new tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function tu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gb(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Vc||l===Gc,p=l===ws||l===Cs;if(c||p)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return n===null&&(n=new sd(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||p&&d&&r(d)){n===null&&(n=new sd(t));const g=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,g),o.addEventListener("dispose",s),g.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let p=0;p<c;p++)o[p]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function vb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yb(t,e,n,i){const r={},s=new WeakMap;function a(d){const g=d.target;g.index!==null&&e.remove(g.index);for(const _ in g.attributes)e.remove(g.attributes[_]);for(const _ in g.morphAttributes){const R=g.morphAttributes[_];for(let v=0,h=R.length;v<h;v++)e.remove(R[v])}g.removeEventListener("dispose",a),delete r[g.id];const S=s.get(g);S&&(e.remove(S),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function o(d,g){return r[g.id]===!0||(g.addEventListener("dispose",a),r[g.id]=!0,n.memory.geometries++),g}function l(d){const g=d.attributes;for(const _ in g)e.update(g[_],t.ARRAY_BUFFER);const S=d.morphAttributes;for(const _ in S){const R=S[_];for(let v=0,h=R.length;v<h;v++)e.update(R[v],t.ARRAY_BUFFER)}}function c(d){const g=[],S=d.index,_=d.attributes.position;let R=0;if(S!==null){const u=S.array;R=S.version;for(let f=0,y=u.length;f<y;f+=3){const E=u[f+0],M=u[f+1],C=u[f+2];g.push(E,M,M,C,C,E)}}else if(_!==void 0){const u=_.array;R=_.version;for(let f=0,y=u.length/3-1;f<y;f+=3){const E=f+0,M=f+1,C=f+2;g.push(E,M,M,C,C,E)}}else return;const v=new(a_(g)?p_:d_)(g,1);v.version=R;const h=s.get(d);h&&e.remove(h),s.set(d,v)}function p(d){const g=s.get(d);if(g){const S=d.index;S!==null&&g.version<S.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:p}}function xb(t,e,n,i){const r=i.isWebGL2;let s;function a(g){s=g}let o,l;function c(g){o=g.type,l=g.bytesPerElement}function p(g,S){t.drawElements(s,S,o,g*l),n.update(S,s,1)}function d(g,S,_){if(_===0)return;let R,v;if(r)R=t,v="drawElementsInstanced";else if(R=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",R===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}R[v](s,S,o,g*l,_),n.update(S,s,_)}this.setMode=a,this.setIndex=c,this.render=p,this.renderInstances=d}function Sb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Tb(t,e){return t[0]-e[0]}function Mb(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Eb(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new rn,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,p,d){const g=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,R=_!==void 0?_.length:0;let v=s.get(p);if(v===void 0||v.count!==R){let X=function(){O.dispose(),s.delete(p),p.removeEventListener("dispose",X)};var S=X;v!==void 0&&v.texture.dispose();const f=p.morphAttributes.position!==void 0,y=p.morphAttributes.normal!==void 0,E=p.morphAttributes.color!==void 0,M=p.morphAttributes.position||[],C=p.morphAttributes.normal||[],T=p.morphAttributes.color||[];let w=0;f===!0&&(w=1),y===!0&&(w=2),E===!0&&(w=3);let L=p.attributes.position.count*w,k=1;L>e.maxTextureSize&&(k=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const I=new Float32Array(L*k*4*R),O=new c_(I,L,k,R);O.type=Hi,O.needsUpdate=!0;const F=w*4;for(let Z=0;Z<R;Z++){const G=M[Z],K=C[Z],me=T[Z],pe=L*k*4*Z;for(let re=0;re<G.count;re++){const ae=re*F;f===!0&&(a.fromBufferAttribute(G,re),I[pe+ae+0]=a.x,I[pe+ae+1]=a.y,I[pe+ae+2]=a.z,I[pe+ae+3]=0),y===!0&&(a.fromBufferAttribute(K,re),I[pe+ae+4]=a.x,I[pe+ae+5]=a.y,I[pe+ae+6]=a.z,I[pe+ae+7]=0),E===!0&&(a.fromBufferAttribute(me,re),I[pe+ae+8]=a.x,I[pe+ae+9]=a.y,I[pe+ae+10]=a.z,I[pe+ae+11]=me.itemSize===4?a.w:1)}}v={count:R,texture:O,size:new wt(L,k)},s.set(p,v),p.addEventListener("dispose",X)}let h=0;for(let f=0;f<g.length;f++)h+=g[f];const u=p.morphTargetsRelative?1:1-h;d.getUniforms().setValue(t,"morphTargetBaseInfluence",u),d.getUniforms().setValue(t,"morphTargetInfluences",g),d.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}else{const _=g===void 0?0:g.length;let R=i[p.id];if(R===void 0||R.length!==_){R=[];for(let y=0;y<_;y++)R[y]=[y,0];i[p.id]=R}for(let y=0;y<_;y++){const E=R[y];E[0]=y,E[1]=g[y]}R.sort(Mb);for(let y=0;y<8;y++)y<_&&R[y][1]?(o[y][0]=R[y][0],o[y][1]=R[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Tb);const v=p.morphAttributes.position,h=p.morphAttributes.normal;let u=0;for(let y=0;y<8;y++){const E=o[y],M=E[0],C=E[1];M!==Number.MAX_SAFE_INTEGER&&C?(v&&p.getAttribute("morphTarget"+y)!==v[M]&&p.setAttribute("morphTarget"+y,v[M]),h&&p.getAttribute("morphNormal"+y)!==h[M]&&p.setAttribute("morphNormal"+y,h[M]),r[y]=C,u+=C):(v&&p.hasAttribute("morphTarget"+y)===!0&&p.deleteAttribute("morphTarget"+y),h&&p.hasAttribute("morphNormal"+y)===!0&&p.deleteAttribute("morphNormal"+y),r[y]=0)}const f=p.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",f),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function bb(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,p=l.geometry,d=e.get(l,p);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const g=l.skeleton;r.get(g)!==c&&(g.update(),r.set(g,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const S_=new An,T_=new c_,M_=new fT,E_=new g_,cd=[],fd=[],ud=new Float32Array(16),hd=new Float32Array(9),dd=new Float32Array(4);function Ns(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=cd[r];if(s===void 0&&(s=new Float32Array(r),cd[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function $t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Al(t,e){let n=fd[e];n===void 0&&(n=new Int32Array(e),fd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Ab(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function wb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2fv(this.addr,e),Kt(n,e)}}function Cb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;t.uniform3fv(this.addr,e),Kt(n,e)}}function Rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4fv(this.addr,e),Kt(n,e)}}function Pb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,i))return;dd.set(i),t.uniformMatrix2fv(this.addr,!1,dd),Kt(n,i)}}function Lb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,i))return;hd.set(i),t.uniformMatrix3fv(this.addr,!1,hd),Kt(n,i)}}function Db(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,i))return;ud.set(i),t.uniformMatrix4fv(this.addr,!1,ud),Kt(n,i)}}function Ib(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Ub(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2iv(this.addr,e),Kt(n,e)}}function Nb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3iv(this.addr,e),Kt(n,e)}}function Ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4iv(this.addr,e),Kt(n,e)}}function Fb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Bb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2uiv(this.addr,e),Kt(n,e)}}function kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3uiv(this.addr,e),Kt(n,e)}}function zb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4uiv(this.addr,e),Kt(n,e)}}function Hb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||S_,r)}function Vb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||M_,r)}function Gb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||E_,r)}function Wb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||T_,r)}function Xb(t){switch(t){case 5126:return Ab;case 35664:return wb;case 35665:return Cb;case 35666:return Rb;case 35674:return Pb;case 35675:return Lb;case 35676:return Db;case 5124:case 35670:return Ib;case 35667:case 35671:return Ub;case 35668:case 35672:return Nb;case 35669:case 35673:return Ob;case 5125:return Fb;case 36294:return Bb;case 36295:return kb;case 36296:return zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Hb;case 35679:case 36299:case 36307:return Vb;case 35680:case 36300:case 36308:case 36293:return Gb;case 36289:case 36303:case 36311:case 36292:return Wb}}function qb(t,e){t.uniform1fv(this.addr,e)}function Yb(t,e){const n=Ns(e,this.size,2);t.uniform2fv(this.addr,n)}function jb(t,e){const n=Ns(e,this.size,3);t.uniform3fv(this.addr,n)}function $b(t,e){const n=Ns(e,this.size,4);t.uniform4fv(this.addr,n)}function Kb(t,e){const n=Ns(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Zb(t,e){const n=Ns(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Jb(t,e){const n=Ns(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Qb(t,e){t.uniform1iv(this.addr,e)}function eA(t,e){t.uniform2iv(this.addr,e)}function tA(t,e){t.uniform3iv(this.addr,e)}function nA(t,e){t.uniform4iv(this.addr,e)}function iA(t,e){t.uniform1uiv(this.addr,e)}function rA(t,e){t.uniform2uiv(this.addr,e)}function sA(t,e){t.uniform3uiv(this.addr,e)}function aA(t,e){t.uniform4uiv(this.addr,e)}function oA(t,e,n){const i=this.cache,r=e.length,s=Al(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||S_,s[a])}function lA(t,e,n){const i=this.cache,r=e.length,s=Al(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||M_,s[a])}function cA(t,e,n){const i=this.cache,r=e.length,s=Al(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||E_,s[a])}function fA(t,e,n){const i=this.cache,r=e.length,s=Al(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||T_,s[a])}function uA(t){switch(t){case 5126:return qb;case 35664:return Yb;case 35665:return jb;case 35666:return $b;case 35674:return Kb;case 35675:return Zb;case 35676:return Jb;case 5124:case 35670:return Qb;case 35667:case 35671:return eA;case 35668:case 35672:return tA;case 35669:case 35673:return nA;case 5125:return iA;case 36294:return rA;case 36295:return sA;case 36296:return aA;case 35678:case 36198:case 36298:case 36306:case 35682:return oA;case 35679:case 36299:case 36307:return lA;case 35680:case 36300:case 36308:case 36293:return cA;case 36289:case 36303:case 36311:case 36292:return fA}}class hA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Xb(n.type)}}class dA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=uA(n.type)}}class pA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const hc=/(\w+)(\])?(\[|\.)?/g;function pd(t,e){t.seq.push(e),t.map[e.id]=e}function mA(t,e,n){const i=t.name,r=i.length;for(hc.lastIndex=0;;){const s=hc.exec(i),a=hc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){pd(n,c===void 0?new hA(o,t,e):new dA(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new pA(o),pd(n,d)),n=d}}}class wo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);mA(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function md(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let _A=0;function gA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function vA(t){switch(t){case fi:return["Linear","( value )"];case Ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function _d(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+gA(t.getShaderSource(e),a)}else return r}function yA(t,e){const n=vA(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function xA(t,e){let n;switch(e){case bS:n="Linear";break;case AS:n="Reinhard";break;case wS:n="OptimizedCineon";break;case CS:n="ACESFilmic";break;case RS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function SA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function TA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function MA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Js(t){return t!==""}function gd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const EA=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(t){return t.replace(EA,AA)}const bA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function AA(t,e){let n=ht[e];if(n===void 0){const i=bA.get(e);if(i!==void 0)n=ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jc(n)}const wA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yd(t){return t.replace(wA,CA)}function CA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xd(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function RA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===jm?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===iS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function PA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ws:case Cs:e="ENVMAP_TYPE_CUBE";break;case Sl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function DA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Zm:e="ENVMAP_BLENDING_MULTIPLY";break;case MS:e="ENVMAP_BLENDING_MIX";break;case ES:e="ENVMAP_BLENDING_ADD";break}return e}function IA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function UA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=RA(n),c=PA(n),p=LA(n),d=DA(n),g=IA(n),S=n.isWebGL2?"":SA(n),_=TA(s),R=r.createProgram();let v,h,u=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Js).join(`
`),v.length>0&&(v+=`
`),h=[S,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Js).join(`
`),h.length>0&&(h+=`
`)):(v=[xd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),h=[S,xd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+p:"",n.envMap?"#define "+d:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qi?"#define TONE_MAPPING":"",n.toneMapping!==qi?ht.tonemapping_pars_fragment:"",n.toneMapping!==qi?xA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,yA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Js).join(`
`)),a=jc(a),a=gd(a,n),a=vd(a,n),o=jc(o),o=gd(o,n),o=vd(o,n),a=yd(a),o=yd(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,h=["#define varying in",n.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const f=u+v+a,y=u+h+o,E=md(r,r.VERTEX_SHADER,f),M=md(r,r.FRAGMENT_SHADER,y);if(r.attachShader(R,E),r.attachShader(R,M),n.index0AttributeName!==void 0?r.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(R,0,"position"),r.linkProgram(R),t.debug.checkShaderErrors){const w=r.getProgramInfoLog(R).trim(),L=r.getShaderInfoLog(E).trim(),k=r.getShaderInfoLog(M).trim();let I=!0,O=!0;if(r.getProgramParameter(R,r.LINK_STATUS)===!1)if(I=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,R,E,M);else{const F=_d(r,E,"vertex"),X=_d(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(R,r.VALIDATE_STATUS)+`

Program Info Log: `+w+`
`+F+`
`+X)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(L===""||k==="")&&(O=!1);O&&(this.diagnostics={runnable:I,programLog:w,vertexShader:{log:L,prefix:v},fragmentShader:{log:k,prefix:h}})}r.deleteShader(E),r.deleteShader(M);let C;this.getUniforms=function(){return C===void 0&&(C=new wo(r,R)),C};let T;return this.getAttributes=function(){return T===void 0&&(T=MA(r,R)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_A++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=E,this.fragmentShader=M,this}let NA=0;class OA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new FA(e),n.set(e,i)),i}}class FA{constructor(e){this.id=NA++,this.code=e,this.usedTimes=0}}function BA(t,e,n,i,r,s,a){const o=new f_,l=new OA,c=[],p=r.isWebGL2,d=r.logarithmicDepthBuffer,g=r.vertexTextures;let S=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return w===0?"uv":`uv${w}`}function v(w,L,k,I,O){const F=I.fog,X=O.geometry,Z=w.isMeshStandardMaterial?I.environment:null,G=(w.isMeshStandardMaterial?n:e).get(w.envMap||Z),K=G&&G.mapping===Sl?G.image.height:null,me=_[w.type];w.precision!==null&&(S=r.getMaxPrecision(w.precision),S!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",S,"instead."));const pe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,re=pe!==void 0?pe.length:0;let ae=0;X.morphAttributes.position!==void 0&&(ae=1),X.morphAttributes.normal!==void 0&&(ae=2),X.morphAttributes.color!==void 0&&(ae=3);let Ne,ke,Fe,Ye;if(me){const Et=ai[me];Ne=Et.vertexShader,ke=Et.fragmentShader}else Ne=w.vertexShader,ke=w.fragmentShader,l.update(w),Fe=l.getVertexShaderID(w),Ye=l.getFragmentShaderID(w);const Qe=t.getRenderTarget(),$e=O.isInstancedMesh===!0,et=!!w.map,Mt=!!w.matcap,st=!!G,U=!!w.aoMap,Q=!!w.lightMap,se=!!w.bumpMap,fe=!!w.normalMap,ue=!!w.displacementMap,Pe=!!w.emissiveMap,Te=!!w.metalnessMap,le=!!w.roughnessMap,Ee=w.anisotropy>0,Ae=w.clearcoat>0,Be=w.iridescence>0,m=w.sheen>0,x=w.transmission>0,P=Ee&&!!w.anisotropyMap,D=Ae&&!!w.clearcoatMap,V=Ae&&!!w.clearcoatNormalMap,Y=Ae&&!!w.clearcoatRoughnessMap,ne=Be&&!!w.iridescenceMap,ie=Be&&!!w.iridescenceThicknessMap,$=m&&!!w.sheenColorMap,we=m&&!!w.sheenRoughnessMap,xe=!!w.specularMap,Me=!!w.specularColorMap,Le=!!w.specularIntensityMap,Ce=x&&!!w.transmissionMap,Xe=x&&!!w.thicknessMap,_t=!!w.gradientMap,J=!!w.alphaMap,ze=w.alphaTest>0,_e=!!w.alphaHash,De=!!w.extensions,Ge=!!X.attributes.uv1,Ke=!!X.attributes.uv2,Dt=!!X.attributes.uv3;let Bt=qi;return w.toneMapped&&(Qe===null||Qe.isXRRenderTarget===!0)&&(Bt=t.toneMapping),{isWebGL2:p,shaderID:me,shaderType:w.type,shaderName:w.name,vertexShader:Ne,fragmentShader:ke,defines:w.defines,customVertexShaderID:Fe,customFragmentShaderID:Ye,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:S,instancing:$e,instancingColor:$e&&O.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:Qe===null?t.outputColorSpace:Qe.isXRRenderTarget===!0?Qe.texture.colorSpace:fi,map:et,matcap:Mt,envMap:st,envMapMode:st&&G.mapping,envMapCubeUVHeight:K,aoMap:U,lightMap:Q,bumpMap:se,normalMap:fe,displacementMap:g&&ue,emissiveMap:Pe,normalMapObjectSpace:fe&&w.normalMapType===GS,normalMapTangentSpace:fe&&w.normalMapType===VS,metalnessMap:Te,roughnessMap:le,anisotropy:Ee,anisotropyMap:P,clearcoat:Ae,clearcoatMap:D,clearcoatNormalMap:V,clearcoatRoughnessMap:Y,iridescence:Be,iridescenceMap:ne,iridescenceThicknessMap:ie,sheen:m,sheenColorMap:$,sheenRoughnessMap:we,specularMap:xe,specularColorMap:Me,specularIntensityMap:Le,transmission:x,transmissionMap:Ce,thicknessMap:Xe,gradientMap:_t,opaque:w.transparent===!1&&w.blending===gs,alphaMap:J,alphaTest:ze,alphaHash:_e,combine:w.combine,mapUv:et&&R(w.map.channel),aoMapUv:U&&R(w.aoMap.channel),lightMapUv:Q&&R(w.lightMap.channel),bumpMapUv:se&&R(w.bumpMap.channel),normalMapUv:fe&&R(w.normalMap.channel),displacementMapUv:ue&&R(w.displacementMap.channel),emissiveMapUv:Pe&&R(w.emissiveMap.channel),metalnessMapUv:Te&&R(w.metalnessMap.channel),roughnessMapUv:le&&R(w.roughnessMap.channel),anisotropyMapUv:P&&R(w.anisotropyMap.channel),clearcoatMapUv:D&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:V&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:$&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:we&&R(w.sheenRoughnessMap.channel),specularMapUv:xe&&R(w.specularMap.channel),specularColorMapUv:Me&&R(w.specularColorMap.channel),specularIntensityMapUv:Le&&R(w.specularIntensityMap.channel),transmissionMapUv:Ce&&R(w.transmissionMap.channel),thicknessMapUv:Xe&&R(w.thicknessMap.channel),alphaMapUv:J&&R(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(fe||Ee),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:Ge,vertexUv2s:Ke,vertexUv3s:Dt,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(et||J),fog:!!F,useFog:w.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ae,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:Bt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:et&&w.map.isVideoTexture===!0&&w.map.colorSpace===Ot,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ei,flipSided:w.side===bn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:De&&w.extensions.derivatives===!0,extensionFragDepth:De&&w.extensions.fragDepth===!0,extensionDrawBuffers:De&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:De&&w.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function h(w){const L=[];if(w.shaderID?L.push(w.shaderID):(L.push(w.customVertexShaderID),L.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)L.push(k),L.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(u(L,w),f(L,w),L.push(t.outputColorSpace)),L.push(w.customProgramCacheKey),L.join()}function u(w,L){w.push(L.precision),w.push(L.outputColorSpace),w.push(L.envMapMode),w.push(L.envMapCubeUVHeight),w.push(L.mapUv),w.push(L.alphaMapUv),w.push(L.lightMapUv),w.push(L.aoMapUv),w.push(L.bumpMapUv),w.push(L.normalMapUv),w.push(L.displacementMapUv),w.push(L.emissiveMapUv),w.push(L.metalnessMapUv),w.push(L.roughnessMapUv),w.push(L.anisotropyMapUv),w.push(L.clearcoatMapUv),w.push(L.clearcoatNormalMapUv),w.push(L.clearcoatRoughnessMapUv),w.push(L.iridescenceMapUv),w.push(L.iridescenceThicknessMapUv),w.push(L.sheenColorMapUv),w.push(L.sheenRoughnessMapUv),w.push(L.specularMapUv),w.push(L.specularColorMapUv),w.push(L.specularIntensityMapUv),w.push(L.transmissionMapUv),w.push(L.thicknessMapUv),w.push(L.combine),w.push(L.fogExp2),w.push(L.sizeAttenuation),w.push(L.morphTargetsCount),w.push(L.morphAttributeCount),w.push(L.numDirLights),w.push(L.numPointLights),w.push(L.numSpotLights),w.push(L.numSpotLightMaps),w.push(L.numHemiLights),w.push(L.numRectAreaLights),w.push(L.numDirLightShadows),w.push(L.numPointLightShadows),w.push(L.numSpotLightShadows),w.push(L.numSpotLightShadowsWithMaps),w.push(L.shadowMapType),w.push(L.toneMapping),w.push(L.numClippingPlanes),w.push(L.numClipIntersection),w.push(L.depthPacking)}function f(w,L){o.disableAll(),L.isWebGL2&&o.enable(0),L.supportsVertexTextures&&o.enable(1),L.instancing&&o.enable(2),L.instancingColor&&o.enable(3),L.matcap&&o.enable(4),L.envMap&&o.enable(5),L.normalMapObjectSpace&&o.enable(6),L.normalMapTangentSpace&&o.enable(7),L.clearcoat&&o.enable(8),L.iridescence&&o.enable(9),L.alphaTest&&o.enable(10),L.vertexColors&&o.enable(11),L.vertexAlphas&&o.enable(12),L.vertexUv1s&&o.enable(13),L.vertexUv2s&&o.enable(14),L.vertexUv3s&&o.enable(15),L.vertexTangents&&o.enable(16),L.anisotropy&&o.enable(17),w.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.skinning&&o.enable(4),L.morphTargets&&o.enable(5),L.morphNormals&&o.enable(6),L.morphColors&&o.enable(7),L.premultipliedAlpha&&o.enable(8),L.shadowMapEnabled&&o.enable(9),L.useLegacyLights&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.transmission&&o.enable(15),L.sheen&&o.enable(16),L.opaque&&o.enable(17),L.pointsUvs&&o.enable(18),L.decodeVideoTexture&&o.enable(19),w.push(o.mask)}function y(w){const L=_[w.type];let k;if(L){const I=ai[L];k=ET.clone(I.uniforms)}else k=w.uniforms;return k}function E(w,L){let k;for(let I=0,O=c.length;I<O;I++){const F=c[I];if(F.cacheKey===L){k=F,++k.usedTimes;break}}return k===void 0&&(k=new UA(t,L,w,s),c.push(k)),k}function M(w){if(--w.usedTimes===0){const L=c.indexOf(w);c[L]=c[c.length-1],c.pop(),w.destroy()}}function C(w){l.remove(w)}function T(){l.dispose()}return{getParameters:v,getProgramCacheKey:h,getUniforms:y,acquireProgram:E,releaseProgram:M,releaseShaderCache:C,programs:c,dispose:T}}function kA(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function zA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Sd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Td(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,g,S,_,R,v){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:g,material:S,groupOrder:_,renderOrder:d.renderOrder,z:R,group:v},t[e]=h):(h.id=d.id,h.object=d,h.geometry=g,h.material=S,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=R,h.group=v),e++,h}function o(d,g,S,_,R,v){const h=a(d,g,S,_,R,v);S.transmission>0?i.push(h):S.transparent===!0?r.push(h):n.push(h)}function l(d,g,S,_,R,v){const h=a(d,g,S,_,R,v);S.transmission>0?i.unshift(h):S.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,g){n.length>1&&n.sort(d||zA),i.length>1&&i.sort(g||Sd),r.length>1&&r.sort(g||Sd)}function p(){for(let d=e,g=t.length;d<g;d++){const S=t[d];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:p,sort:c}}function HA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Td,t.set(i,[a])):r>=s.length?(a=new Td,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function VA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ve,color:new It};break;case"SpotLight":n={position:new ve,direction:new ve,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ve,color:new It,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ve,skyColor:new It,groundColor:new It};break;case"RectAreaLight":n={color:new It,position:new ve,halfWidth:new ve,halfHeight:new ve};break}return t[e.id]=n,n}}}function GA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let WA=0;function XA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function qA(t,e){const n=new VA,i=GA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let p=0;p<9;p++)r.probe.push(new ve);const s=new ve,a=new sn,o=new sn;function l(p,d){let g=0,S=0,_=0;for(let k=0;k<9;k++)r.probe[k].set(0,0,0);let R=0,v=0,h=0,u=0,f=0,y=0,E=0,M=0,C=0,T=0;p.sort(XA);const w=d===!0?Math.PI:1;for(let k=0,I=p.length;k<I;k++){const O=p[k],F=O.color,X=O.intensity,Z=O.distance,G=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)g+=F.r*X*w,S+=F.g*X*w,_+=F.b*X*w;else if(O.isLightProbe)for(let K=0;K<9;K++)r.probe[K].addScaledVector(O.sh.coefficients[K],X);else if(O.isDirectionalLight){const K=n.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity*w),O.castShadow){const me=O.shadow,pe=i.get(O);pe.shadowBias=me.bias,pe.shadowNormalBias=me.normalBias,pe.shadowRadius=me.radius,pe.shadowMapSize=me.mapSize,r.directionalShadow[R]=pe,r.directionalShadowMap[R]=G,r.directionalShadowMatrix[R]=O.shadow.matrix,y++}r.directional[R]=K,R++}else if(O.isSpotLight){const K=n.get(O);K.position.setFromMatrixPosition(O.matrixWorld),K.color.copy(F).multiplyScalar(X*w),K.distance=Z,K.coneCos=Math.cos(O.angle),K.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),K.decay=O.decay,r.spot[h]=K;const me=O.shadow;if(O.map&&(r.spotLightMap[C]=O.map,C++,me.updateMatrices(O),O.castShadow&&T++),r.spotLightMatrix[h]=me.matrix,O.castShadow){const pe=i.get(O);pe.shadowBias=me.bias,pe.shadowNormalBias=me.normalBias,pe.shadowRadius=me.radius,pe.shadowMapSize=me.mapSize,r.spotShadow[h]=pe,r.spotShadowMap[h]=G,M++}h++}else if(O.isRectAreaLight){const K=n.get(O);K.color.copy(F).multiplyScalar(X),K.halfWidth.set(O.width*.5,0,0),K.halfHeight.set(0,O.height*.5,0),r.rectArea[u]=K,u++}else if(O.isPointLight){const K=n.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity*w),K.distance=O.distance,K.decay=O.decay,O.castShadow){const me=O.shadow,pe=i.get(O);pe.shadowBias=me.bias,pe.shadowNormalBias=me.normalBias,pe.shadowRadius=me.radius,pe.shadowMapSize=me.mapSize,pe.shadowCameraNear=me.camera.near,pe.shadowCameraFar=me.camera.far,r.pointShadow[v]=pe,r.pointShadowMap[v]=G,r.pointShadowMatrix[v]=O.shadow.matrix,E++}r.point[v]=K,v++}else if(O.isHemisphereLight){const K=n.get(O);K.skyColor.copy(O.color).multiplyScalar(X*w),K.groundColor.copy(O.groundColor).multiplyScalar(X*w),r.hemi[f]=K,f++}}u>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=g,r.ambient[1]=S,r.ambient[2]=_;const L=r.hash;(L.directionalLength!==R||L.pointLength!==v||L.spotLength!==h||L.rectAreaLength!==u||L.hemiLength!==f||L.numDirectionalShadows!==y||L.numPointShadows!==E||L.numSpotShadows!==M||L.numSpotMaps!==C)&&(r.directional.length=R,r.spot.length=h,r.rectArea.length=u,r.point.length=v,r.hemi.length=f,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=M+C-T,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=T,L.directionalLength=R,L.pointLength=v,L.spotLength=h,L.rectAreaLength=u,L.hemiLength=f,L.numDirectionalShadows=y,L.numPointShadows=E,L.numSpotShadows=M,L.numSpotMaps=C,r.version=WA++)}function c(p,d){let g=0,S=0,_=0,R=0,v=0;const h=d.matrixWorldInverse;for(let u=0,f=p.length;u<f;u++){const y=p[u];if(y.isDirectionalLight){const E=r.directional[g];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),g++}else if(y.isSpotLight){const E=r.spot[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),_++}else if(y.isRectAreaLight){const E=r.rectArea[R];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),o.identity(),a.copy(y.matrixWorld),a.premultiply(h),o.extractRotation(a),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),R++}else if(y.isPointLight){const E=r.point[S];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),S++}else if(y.isHemisphereLight){const E=r.hemi[v];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(h),v++}}}return{setup:l,setupView:c,state:r}}function Md(t,e){const n=new qA(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function YA(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new Md(t,e),n.set(s,[l])):a>=o.length?(l=new Md(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class jA extends El{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $A extends El{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JA(t,e,n){let i=new v_;const r=new wt,s=new wt,a=new rn,o=new jA({depthPacking:HS}),l=new $A,c={},p=n.maxTextureSize,d={[er]:bn,[bn]:er,[Ei]:Ei},g=new tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:KA,fragmentShader:ZA}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const _=new kr;_.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ai(_,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jm;let h=this.type;this.render=function(E,M,C){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||E.length===0)return;const T=t.getRenderTarget(),w=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Xi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const I=h!==Si&&this.type===Si,O=h===Si&&this.type!==Si;for(let F=0,X=E.length;F<X;F++){const Z=E[F],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const K=G.getFrameExtents();if(r.multiply(K),s.copy(G.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/K.x),r.x=s.x*K.x,G.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/K.y),r.y=s.y*K.y,G.mapSize.y=s.y)),G.map===null||I===!0||O===!0){const pe=this.type!==Si?{minFilter:gn,magFilter:gn}:{};G.map!==null&&G.map.dispose(),G.map=new Ur(r.x,r.y,pe),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();const me=G.getViewportCount();for(let pe=0;pe<me;pe++){const re=G.getViewport(pe);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),k.viewport(a),G.updateMatrices(Z,pe),i=G.getFrustum(),y(M,C,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===Si&&u(G,C),G.needsUpdate=!1}h=this.type,v.needsUpdate=!1,t.setRenderTarget(T,w,L)};function u(E,M){const C=e.update(R);g.defines.VSM_SAMPLES!==E.blurSamples&&(g.defines.VSM_SAMPLES=E.blurSamples,S.defines.VSM_SAMPLES=E.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ur(r.x,r.y)),g.uniforms.shadow_pass.value=E.map.texture,g.uniforms.resolution.value=E.mapSize,g.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(M,null,C,g,R,null),S.uniforms.shadow_pass.value=E.mapPass.texture,S.uniforms.resolution.value=E.mapSize,S.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(M,null,C,S,R,null)}function f(E,M,C,T){let w=null;const L=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)w=L;else if(w=C.isPointLight===!0?l:o,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const k=w.uuid,I=M.uuid;let O=c[k];O===void 0&&(O={},c[k]=O);let F=O[I];F===void 0&&(F=w.clone(),O[I]=F),w=F}if(w.visible=M.visible,w.wireframe=M.wireframe,T===Si?w.side=M.shadowSide!==null?M.shadowSide:M.side:w.side=M.shadowSide!==null?M.shadowSide:d[M.side],w.alphaMap=M.alphaMap,w.alphaTest=M.alphaTest,w.map=M.map,w.clipShadows=M.clipShadows,w.clippingPlanes=M.clippingPlanes,w.clipIntersection=M.clipIntersection,w.displacementMap=M.displacementMap,w.displacementScale=M.displacementScale,w.displacementBias=M.displacementBias,w.wireframeLinewidth=M.wireframeLinewidth,w.linewidth=M.linewidth,C.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const k=t.properties.get(w);k.light=C}return w}function y(E,M,C,T,w){if(E.visible===!1)return;if(E.layers.test(M.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Si)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const I=e.update(E),O=E.material;if(Array.isArray(O)){const F=I.groups;for(let X=0,Z=F.length;X<Z;X++){const G=F[X],K=O[G.materialIndex];if(K&&K.visible){const me=f(E,K,T,w);t.renderBufferDirect(C,null,I,me,E,G)}}}else if(O.visible){const F=f(E,O,T,w);t.renderBufferDirect(C,null,I,F,E,null)}}const k=E.children;for(let I=0,O=k.length;I<O;I++)y(k[I],M,C,T,w)}}function QA(t,e,n){const i=n.isWebGL2;function r(){let J=!1;const ze=new rn;let _e=null;const De=new rn(0,0,0,0);return{setMask:function(Ge){_e!==Ge&&!J&&(t.colorMask(Ge,Ge,Ge,Ge),_e=Ge)},setLocked:function(Ge){J=Ge},setClear:function(Ge,Ke,Dt,Bt,Rt){Rt===!0&&(Ge*=Bt,Ke*=Bt,Dt*=Bt),ze.set(Ge,Ke,Dt,Bt),De.equals(ze)===!1&&(t.clearColor(Ge,Ke,Dt,Bt),De.copy(ze))},reset:function(){J=!1,_e=null,De.set(-1,0,0,0)}}}function s(){let J=!1,ze=null,_e=null,De=null;return{setTest:function(Ge){Ge?Qe(t.DEPTH_TEST):$e(t.DEPTH_TEST)},setMask:function(Ge){ze!==Ge&&!J&&(t.depthMask(Ge),ze=Ge)},setFunc:function(Ge){if(_e!==Ge){switch(Ge){case _S:t.depthFunc(t.NEVER);break;case gS:t.depthFunc(t.ALWAYS);break;case vS:t.depthFunc(t.LESS);break;case Hc:t.depthFunc(t.LEQUAL);break;case yS:t.depthFunc(t.EQUAL);break;case xS:t.depthFunc(t.GEQUAL);break;case SS:t.depthFunc(t.GREATER);break;case TS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}_e=Ge}},setLocked:function(Ge){J=Ge},setClear:function(Ge){De!==Ge&&(t.clearDepth(Ge),De=Ge)},reset:function(){J=!1,ze=null,_e=null,De=null}}}function a(){let J=!1,ze=null,_e=null,De=null,Ge=null,Ke=null,Dt=null,Bt=null,Rt=null;return{setTest:function(Et){J||(Et?Qe(t.STENCIL_TEST):$e(t.STENCIL_TEST))},setMask:function(Et){ze!==Et&&!J&&(t.stencilMask(Et),ze=Et)},setFunc:function(Et,an,Pt){(_e!==Et||De!==an||Ge!==Pt)&&(t.stencilFunc(Et,an,Pt),_e=Et,De=an,Ge=Pt)},setOp:function(Et,an,Pt){(Ke!==Et||Dt!==an||Bt!==Pt)&&(t.stencilOp(Et,an,Pt),Ke=Et,Dt=an,Bt=Pt)},setLocked:function(Et){J=Et},setClear:function(Et){Rt!==Et&&(t.clearStencil(Et),Rt=Et)},reset:function(){J=!1,ze=null,_e=null,De=null,Ge=null,Ke=null,Dt=null,Bt=null,Rt=null}}}const o=new r,l=new s,c=new a,p=new WeakMap,d=new WeakMap;let g={},S={},_=new WeakMap,R=[],v=null,h=!1,u=null,f=null,y=null,E=null,M=null,C=null,T=null,w=!1,L=null,k=null,I=null,O=null,F=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,G=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(K)[1]),Z=G>=1):K.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Z=G>=2);let me=null,pe={};const re=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),Ne=new rn().fromArray(re),ke=new rn().fromArray(ae);function Fe(J,ze,_e,De){const Ge=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(J,Ke),t.texParameteri(J,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(J,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Dt=0;Dt<_e;Dt++)i&&(J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY)?t.texImage3D(ze,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,Ge):t.texImage2D(ze+Dt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ge);return Ke}const Ye={};Ye[t.TEXTURE_2D]=Fe(t.TEXTURE_2D,t.TEXTURE_2D,1),Ye[t.TEXTURE_CUBE_MAP]=Fe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ye[t.TEXTURE_2D_ARRAY]=Fe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ye[t.TEXTURE_3D]=Fe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Qe(t.DEPTH_TEST),l.setFunc(Hc),ue(!1),Pe(oh),Qe(t.CULL_FACE),se(Xi);function Qe(J){g[J]!==!0&&(t.enable(J),g[J]=!0)}function $e(J){g[J]!==!1&&(t.disable(J),g[J]=!1)}function et(J,ze){return S[J]!==ze?(t.bindFramebuffer(J,ze),S[J]=ze,i&&(J===t.DRAW_FRAMEBUFFER&&(S[t.FRAMEBUFFER]=ze),J===t.FRAMEBUFFER&&(S[t.DRAW_FRAMEBUFFER]=ze)),!0):!1}function Mt(J,ze){let _e=R,De=!1;if(J)if(_e=_.get(ze),_e===void 0&&(_e=[],_.set(ze,_e)),J.isWebGLMultipleRenderTargets){const Ge=J.texture;if(_e.length!==Ge.length||_e[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,Dt=Ge.length;Ke<Dt;Ke++)_e[Ke]=t.COLOR_ATTACHMENT0+Ke;_e.length=Ge.length,De=!0}}else _e[0]!==t.COLOR_ATTACHMENT0&&(_e[0]=t.COLOR_ATTACHMENT0,De=!0);else _e[0]!==t.BACK&&(_e[0]=t.BACK,De=!0);De&&(n.isWebGL2?t.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function st(J){return v!==J?(t.useProgram(J),v=J,!0):!1}const U={[os]:t.FUNC_ADD,[sS]:t.FUNC_SUBTRACT,[aS]:t.FUNC_REVERSE_SUBTRACT};if(i)U[uh]=t.MIN,U[hh]=t.MAX;else{const J=e.get("EXT_blend_minmax");J!==null&&(U[uh]=J.MIN_EXT,U[hh]=J.MAX_EXT)}const Q={[oS]:t.ZERO,[lS]:t.ONE,[cS]:t.SRC_COLOR,[$m]:t.SRC_ALPHA,[mS]:t.SRC_ALPHA_SATURATE,[dS]:t.DST_COLOR,[uS]:t.DST_ALPHA,[fS]:t.ONE_MINUS_SRC_COLOR,[Km]:t.ONE_MINUS_SRC_ALPHA,[pS]:t.ONE_MINUS_DST_COLOR,[hS]:t.ONE_MINUS_DST_ALPHA};function se(J,ze,_e,De,Ge,Ke,Dt,Bt){if(J===Xi){h===!0&&($e(t.BLEND),h=!1);return}if(h===!1&&(Qe(t.BLEND),h=!0),J!==rS){if(J!==u||Bt!==w){if((f!==os||M!==os)&&(t.blendEquation(t.FUNC_ADD),f=os,M=os),Bt)switch(J){case gs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lh:t.blendFunc(t.ONE,t.ONE);break;case ch:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case fh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}else switch(J){case gs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case ch:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case fh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}y=null,E=null,C=null,T=null,u=J,w=Bt}return}Ge=Ge||ze,Ke=Ke||_e,Dt=Dt||De,(ze!==f||Ge!==M)&&(t.blendEquationSeparate(U[ze],U[Ge]),f=ze,M=Ge),(_e!==y||De!==E||Ke!==C||Dt!==T)&&(t.blendFuncSeparate(Q[_e],Q[De],Q[Ke],Q[Dt]),y=_e,E=De,C=Ke,T=Dt),u=J,w=!1}function fe(J,ze){J.side===Ei?$e(t.CULL_FACE):Qe(t.CULL_FACE);let _e=J.side===bn;ze&&(_e=!_e),ue(_e),J.blending===gs&&J.transparent===!1?se(Xi):se(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.premultipliedAlpha),l.setFunc(J.depthFunc),l.setTest(J.depthTest),l.setMask(J.depthWrite),o.setMask(J.colorWrite);const De=J.stencilWrite;c.setTest(De),De&&(c.setMask(J.stencilWriteMask),c.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),c.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),le(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?Qe(t.SAMPLE_ALPHA_TO_COVERAGE):$e(t.SAMPLE_ALPHA_TO_COVERAGE)}function ue(J){L!==J&&(J?t.frontFace(t.CW):t.frontFace(t.CCW),L=J)}function Pe(J){J!==tS?(Qe(t.CULL_FACE),J!==k&&(J===oh?t.cullFace(t.BACK):J===nS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):$e(t.CULL_FACE),k=J}function Te(J){J!==I&&(Z&&t.lineWidth(J),I=J)}function le(J,ze,_e){J?(Qe(t.POLYGON_OFFSET_FILL),(O!==ze||F!==_e)&&(t.polygonOffset(ze,_e),O=ze,F=_e)):$e(t.POLYGON_OFFSET_FILL)}function Ee(J){J?Qe(t.SCISSOR_TEST):$e(t.SCISSOR_TEST)}function Ae(J){J===void 0&&(J=t.TEXTURE0+X-1),me!==J&&(t.activeTexture(J),me=J)}function Be(J,ze,_e){_e===void 0&&(me===null?_e=t.TEXTURE0+X-1:_e=me);let De=pe[_e];De===void 0&&(De={type:void 0,texture:void 0},pe[_e]=De),(De.type!==J||De.texture!==ze)&&(me!==_e&&(t.activeTexture(_e),me=_e),t.bindTexture(J,ze||Ye[J]),De.type=J,De.texture=ze)}function m(){const J=pe[me];J!==void 0&&J.type!==void 0&&(t.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function x(){try{t.compressedTexImage2D.apply(t,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function P(){try{t.compressedTexImage3D.apply(t,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function D(){try{t.texSubImage2D.apply(t,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function V(){try{t.texSubImage3D.apply(t,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Y(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ne(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ie(){try{t.texStorage2D.apply(t,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function $(){try{t.texStorage3D.apply(t,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function we(){try{t.texImage2D.apply(t,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function xe(){try{t.texImage3D.apply(t,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Me(J){Ne.equals(J)===!1&&(t.scissor(J.x,J.y,J.z,J.w),Ne.copy(J))}function Le(J){ke.equals(J)===!1&&(t.viewport(J.x,J.y,J.z,J.w),ke.copy(J))}function Ce(J,ze){let _e=d.get(ze);_e===void 0&&(_e=new WeakMap,d.set(ze,_e));let De=_e.get(J);De===void 0&&(De=t.getUniformBlockIndex(ze,J.name),_e.set(J,De))}function Xe(J,ze){const De=d.get(ze).get(J);p.get(ze)!==De&&(t.uniformBlockBinding(ze,De,J.__bindingPointIndex),p.set(ze,De))}function _t(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),g={},me=null,pe={},S={},_=new WeakMap,R=[],v=null,h=!1,u=null,f=null,y=null,E=null,M=null,C=null,T=null,w=!1,L=null,k=null,I=null,O=null,F=null,Ne.set(0,0,t.canvas.width,t.canvas.height),ke.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Qe,disable:$e,bindFramebuffer:et,drawBuffers:Mt,useProgram:st,setBlending:se,setMaterial:fe,setFlipSided:ue,setCullFace:Pe,setLineWidth:Te,setPolygonOffset:le,setScissorTest:Ee,activeTexture:Ae,bindTexture:Be,unbindTexture:m,compressedTexImage2D:x,compressedTexImage3D:P,texImage2D:we,texImage3D:xe,updateUBOMapping:Ce,uniformBlockBinding:Xe,texStorage2D:ie,texStorage3D:$,texSubImage2D:D,texSubImage3D:V,compressedTexSubImage2D:Y,compressedTexSubImage3D:ne,scissor:Me,viewport:Le,reset:_t}}function ew(t,e,n,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,p=r.maxTextureSize,d=r.maxSamples,g=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let R;const v=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(m,x){return h?new OffscreenCanvas(m,x):Ma("canvas")}function f(m,x,P,D){let V=1;if((m.width>D||m.height>D)&&(V=D/Math.max(m.width,m.height)),V<1||x===!0)if(typeof HTMLImageElement<"u"&&m instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&m instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&m instanceof ImageBitmap){const Y=x?Yc:Math.floor,ne=Y(V*m.width),ie=Y(V*m.height);R===void 0&&(R=u(ne,ie));const $=P?u(ne,ie):R;return $.width=ne,$.height=ie,$.getContext("2d").drawImage(m,0,0,ne,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+m.width+"x"+m.height+") to ("+ne+"x"+ie+")."),$}else return"data"in m&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+m.width+"x"+m.height+")."),m;return m}function y(m){return Hh(m.width)&&Hh(m.height)}function E(m){return o?!1:m.wrapS!==ti||m.wrapT!==ti||m.minFilter!==gn&&m.minFilter!==Sn}function M(m,x){return m.generateMipmaps&&x&&m.minFilter!==gn&&m.minFilter!==Sn}function C(m){t.generateMipmap(m)}function T(m,x,P,D,V=!1){if(o===!1)return x;if(m!==null){if(t[m]!==void 0)return t[m];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+m+"'")}let Y=x;return x===t.RED&&(P===t.FLOAT&&(Y=t.R32F),P===t.HALF_FLOAT&&(Y=t.R16F),P===t.UNSIGNED_BYTE&&(Y=t.R8)),x===t.RED_INTEGER&&(P===t.UNSIGNED_BYTE&&(Y=t.R8UI),P===t.UNSIGNED_SHORT&&(Y=t.R16UI),P===t.UNSIGNED_INT&&(Y=t.R32UI),P===t.BYTE&&(Y=t.R8I),P===t.SHORT&&(Y=t.R16I),P===t.INT&&(Y=t.R32I)),x===t.RG&&(P===t.FLOAT&&(Y=t.RG32F),P===t.HALF_FLOAT&&(Y=t.RG16F),P===t.UNSIGNED_BYTE&&(Y=t.RG8)),x===t.RGBA&&(P===t.FLOAT&&(Y=t.RGBA32F),P===t.HALF_FLOAT&&(Y=t.RGBA16F),P===t.UNSIGNED_BYTE&&(Y=D===Ot&&V===!1?t.SRGB8_ALPHA8:t.RGBA8),P===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),P===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)),(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function w(m,x,P){return M(m,P)===!0||m.isFramebufferTexture&&m.minFilter!==gn&&m.minFilter!==Sn?Math.log2(Math.max(x.width,x.height))+1:m.mipmaps!==void 0&&m.mipmaps.length>0?m.mipmaps.length:m.isCompressedTexture&&Array.isArray(m.image)?x.mipmaps.length:1}function L(m){return m===gn||m===dh||m===Bl?t.NEAREST:t.LINEAR}function k(m){const x=m.target;x.removeEventListener("dispose",k),O(x),x.isVideoTexture&&_.delete(x)}function I(m){const x=m.target;x.removeEventListener("dispose",I),X(x)}function O(m){const x=i.get(m);if(x.__webglInit===void 0)return;const P=m.source,D=v.get(P);if(D){const V=D[x.__cacheKey];V.usedTimes--,V.usedTimes===0&&F(m),Object.keys(D).length===0&&v.delete(P)}i.remove(m)}function F(m){const x=i.get(m);t.deleteTexture(x.__webglTexture);const P=m.source,D=v.get(P);delete D[x.__cacheKey],a.memory.textures--}function X(m){const x=m.texture,P=i.get(m),D=i.get(x);if(D.__webglTexture!==void 0&&(t.deleteTexture(D.__webglTexture),a.memory.textures--),m.depthTexture&&m.depthTexture.dispose(),m.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(P.__webglFramebuffer[V]))for(let Y=0;Y<P.__webglFramebuffer[V].length;Y++)t.deleteFramebuffer(P.__webglFramebuffer[V][Y]);else t.deleteFramebuffer(P.__webglFramebuffer[V]);P.__webglDepthbuffer&&t.deleteRenderbuffer(P.__webglDepthbuffer[V])}else{if(Array.isArray(P.__webglFramebuffer))for(let V=0;V<P.__webglFramebuffer.length;V++)t.deleteFramebuffer(P.__webglFramebuffer[V]);else t.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&t.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&t.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let V=0;V<P.__webglColorRenderbuffer.length;V++)P.__webglColorRenderbuffer[V]&&t.deleteRenderbuffer(P.__webglColorRenderbuffer[V]);P.__webglDepthRenderbuffer&&t.deleteRenderbuffer(P.__webglDepthRenderbuffer)}if(m.isWebGLMultipleRenderTargets)for(let V=0,Y=x.length;V<Y;V++){const ne=i.get(x[V]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(x[V])}i.remove(x),i.remove(m)}let Z=0;function G(){Z=0}function K(){const m=Z;return m>=l&&console.warn("THREE.WebGLTextures: Trying to use "+m+" texture units while this GPU supports only "+l),Z+=1,m}function me(m){const x=[];return x.push(m.wrapS),x.push(m.wrapT),x.push(m.wrapR||0),x.push(m.magFilter),x.push(m.minFilter),x.push(m.anisotropy),x.push(m.internalFormat),x.push(m.format),x.push(m.type),x.push(m.generateMipmaps),x.push(m.premultiplyAlpha),x.push(m.flipY),x.push(m.unpackAlignment),x.push(m.colorSpace),x.join()}function pe(m,x){const P=i.get(m);if(m.isVideoTexture&&Ae(m),m.isRenderTargetTexture===!1&&m.version>0&&P.__version!==m.version){const D=m.image;if(D===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(P,m,x);return}}n.bindTexture(t.TEXTURE_2D,P.__webglTexture,t.TEXTURE0+x)}function re(m,x){const P=i.get(m);if(m.version>0&&P.__version!==m.version){et(P,m,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,P.__webglTexture,t.TEXTURE0+x)}function ae(m,x){const P=i.get(m);if(m.version>0&&P.__version!==m.version){et(P,m,x);return}n.bindTexture(t.TEXTURE_3D,P.__webglTexture,t.TEXTURE0+x)}function Ne(m,x){const P=i.get(m);if(m.version>0&&P.__version!==m.version){Mt(P,m,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+x)}const ke={[jo]:t.REPEAT,[ti]:t.CLAMP_TO_EDGE,[Wc]:t.MIRRORED_REPEAT},Fe={[gn]:t.NEAREST,[dh]:t.NEAREST_MIPMAP_NEAREST,[Bl]:t.NEAREST_MIPMAP_LINEAR,[Sn]:t.LINEAR,[PS]:t.LINEAR_MIPMAP_NEAREST,[Sa]:t.LINEAR_MIPMAP_LINEAR},Ye={[XS]:t.NEVER,[JS]:t.ALWAYS,[qS]:t.LESS,[jS]:t.LEQUAL,[YS]:t.EQUAL,[ZS]:t.GEQUAL,[$S]:t.GREATER,[KS]:t.NOTEQUAL};function Qe(m,x,P){if(P?(t.texParameteri(m,t.TEXTURE_WRAP_S,ke[x.wrapS]),t.texParameteri(m,t.TEXTURE_WRAP_T,ke[x.wrapT]),(m===t.TEXTURE_3D||m===t.TEXTURE_2D_ARRAY)&&t.texParameteri(m,t.TEXTURE_WRAP_R,ke[x.wrapR]),t.texParameteri(m,t.TEXTURE_MAG_FILTER,Fe[x.magFilter]),t.texParameteri(m,t.TEXTURE_MIN_FILTER,Fe[x.minFilter])):(t.texParameteri(m,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(m,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(m===t.TEXTURE_3D||m===t.TEXTURE_2D_ARRAY)&&t.texParameteri(m,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(x.wrapS!==ti||x.wrapT!==ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(m,t.TEXTURE_MAG_FILTER,L(x.magFilter)),t.texParameteri(m,t.TEXTURE_MIN_FILTER,L(x.minFilter)),x.minFilter!==gn&&x.minFilter!==Sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(t.texParameteri(m,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(m,t.TEXTURE_COMPARE_FUNC,Ye[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===gn||x.minFilter!==Bl&&x.minFilter!==Sa||x.type===Hi&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===Ta&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(t.texParameterf(m,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function $e(m,x){let P=!1;m.__webglInit===void 0&&(m.__webglInit=!0,x.addEventListener("dispose",k));const D=x.source;let V=v.get(D);V===void 0&&(V={},v.set(D,V));const Y=me(x);if(Y!==m.__cacheKey){V[Y]===void 0&&(V[Y]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,P=!0),V[Y].usedTimes++;const ne=V[m.__cacheKey];ne!==void 0&&(V[m.__cacheKey].usedTimes--,ne.usedTimes===0&&F(x)),m.__cacheKey=Y,m.__webglTexture=V[Y].texture}return P}function et(m,x,P){let D=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(D=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(D=t.TEXTURE_3D);const V=$e(m,x),Y=x.source;n.bindTexture(D,m.__webglTexture,t.TEXTURE0+P);const ne=i.get(Y);if(Y.version!==ne.__version||V===!0){n.activeTexture(t.TEXTURE0+P),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ie=E(x)&&y(x.image)===!1;let $=f(x.image,ie,!1,p);$=Be(x,$);const we=y($)||o,xe=s.convert(x.format,x.colorSpace);let Me=s.convert(x.type),Le=T(x.internalFormat,xe,Me,x.colorSpace,x.isVideoTexture);Qe(D,x,we);let Ce;const Xe=x.mipmaps,_t=o&&x.isVideoTexture!==!0,J=ne.__version===void 0||V===!0,ze=w(x,$,we);if(x.isDepthTexture)Le=t.DEPTH_COMPONENT,o?x.type===Hi?Le=t.DEPTH_COMPONENT32F:x.type===zi?Le=t.DEPTH_COMPONENT24:x.type===Er?Le=t.DEPTH24_STENCIL8:Le=t.DEPTH_COMPONENT16:x.type===Hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===br&&Le===t.DEPTH_COMPONENT&&x.type!==Qf&&x.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=zi,Me=s.convert(x.type)),x.format===Rs&&Le===t.DEPTH_COMPONENT&&(Le=t.DEPTH_STENCIL,x.type!==Er&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Er,Me=s.convert(x.type))),J&&(_t?n.texStorage2D(t.TEXTURE_2D,1,Le,$.width,$.height):n.texImage2D(t.TEXTURE_2D,0,Le,$.width,$.height,0,xe,Me,null));else if(x.isDataTexture)if(Xe.length>0&&we){_t&&J&&n.texStorage2D(t.TEXTURE_2D,ze,Le,Xe[0].width,Xe[0].height);for(let _e=0,De=Xe.length;_e<De;_e++)Ce=Xe[_e],_t?n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Ce.width,Ce.height,xe,Me,Ce.data):n.texImage2D(t.TEXTURE_2D,_e,Le,Ce.width,Ce.height,0,xe,Me,Ce.data);x.generateMipmaps=!1}else _t?(J&&n.texStorage2D(t.TEXTURE_2D,ze,Le,$.width,$.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,$.width,$.height,xe,Me,$.data)):n.texImage2D(t.TEXTURE_2D,0,Le,$.width,$.height,0,xe,Me,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){_t&&J&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,Le,Xe[0].width,Xe[0].height,$.depth);for(let _e=0,De=Xe.length;_e<De;_e++)Ce=Xe[_e],x.format!==ni?xe!==null?_t?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Ce.width,Ce.height,$.depth,xe,Ce.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,_e,Le,Ce.width,Ce.height,$.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?n.texSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Ce.width,Ce.height,$.depth,xe,Me,Ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,_e,Le,Ce.width,Ce.height,$.depth,0,xe,Me,Ce.data)}else{_t&&J&&n.texStorage2D(t.TEXTURE_2D,ze,Le,Xe[0].width,Xe[0].height);for(let _e=0,De=Xe.length;_e<De;_e++)Ce=Xe[_e],x.format!==ni?xe!==null?_t?n.compressedTexSubImage2D(t.TEXTURE_2D,_e,0,0,Ce.width,Ce.height,xe,Ce.data):n.compressedTexImage2D(t.TEXTURE_2D,_e,Le,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Ce.width,Ce.height,xe,Me,Ce.data):n.texImage2D(t.TEXTURE_2D,_e,Le,Ce.width,Ce.height,0,xe,Me,Ce.data)}else if(x.isDataArrayTexture)_t?(J&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,Le,$.width,$.height,$.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,xe,Me,$.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,$.width,$.height,$.depth,0,xe,Me,$.data);else if(x.isData3DTexture)_t?(J&&n.texStorage3D(t.TEXTURE_3D,ze,Le,$.width,$.height,$.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,xe,Me,$.data)):n.texImage3D(t.TEXTURE_3D,0,Le,$.width,$.height,$.depth,0,xe,Me,$.data);else if(x.isFramebufferTexture){if(J)if(_t)n.texStorage2D(t.TEXTURE_2D,ze,Le,$.width,$.height);else{let _e=$.width,De=$.height;for(let Ge=0;Ge<ze;Ge++)n.texImage2D(t.TEXTURE_2D,Ge,Le,_e,De,0,xe,Me,null),_e>>=1,De>>=1}}else if(Xe.length>0&&we){_t&&J&&n.texStorage2D(t.TEXTURE_2D,ze,Le,Xe[0].width,Xe[0].height);for(let _e=0,De=Xe.length;_e<De;_e++)Ce=Xe[_e],_t?n.texSubImage2D(t.TEXTURE_2D,_e,0,0,xe,Me,Ce):n.texImage2D(t.TEXTURE_2D,_e,Le,xe,Me,Ce);x.generateMipmaps=!1}else _t?(J&&n.texStorage2D(t.TEXTURE_2D,ze,Le,$.width,$.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Me,$)):n.texImage2D(t.TEXTURE_2D,0,Le,xe,Me,$);M(x,we)&&C(D),ne.__version=Y.version,x.onUpdate&&x.onUpdate(x)}m.__version=x.version}function Mt(m,x,P){if(x.image.length!==6)return;const D=$e(m,x),V=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,m.__webglTexture,t.TEXTURE0+P);const Y=i.get(V);if(V.version!==Y.__version||D===!0){n.activeTexture(t.TEXTURE0+P),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ne=x.isCompressedTexture||x.image[0].isCompressedTexture,ie=x.image[0]&&x.image[0].isDataTexture,$=[];for(let _e=0;_e<6;_e++)!ne&&!ie?$[_e]=f(x.image[_e],!1,!0,c):$[_e]=ie?x.image[_e].image:x.image[_e],$[_e]=Be(x,$[_e]);const we=$[0],xe=y(we)||o,Me=s.convert(x.format,x.colorSpace),Le=s.convert(x.type),Ce=T(x.internalFormat,Me,Le,x.colorSpace),Xe=o&&x.isVideoTexture!==!0,_t=Y.__version===void 0||D===!0;let J=w(x,we,xe);Qe(t.TEXTURE_CUBE_MAP,x,xe);let ze;if(ne){Xe&&_t&&n.texStorage2D(t.TEXTURE_CUBE_MAP,J,Ce,we.width,we.height);for(let _e=0;_e<6;_e++){ze=$[_e].mipmaps;for(let De=0;De<ze.length;De++){const Ge=ze[De];x.format!==ni?Me!==null?Xe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De,0,0,Ge.width,Ge.height,Me,Ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De,Ce,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De,0,0,Ge.width,Ge.height,Me,Le,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De,Ce,Ge.width,Ge.height,0,Me,Le,Ge.data)}}}else{ze=x.mipmaps,Xe&&_t&&(ze.length>0&&J++,n.texStorage2D(t.TEXTURE_CUBE_MAP,J,Ce,$[0].width,$[0].height));for(let _e=0;_e<6;_e++)if(ie){Xe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,$[_e].width,$[_e].height,Me,Le,$[_e].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ce,$[_e].width,$[_e].height,0,Me,Le,$[_e].data);for(let De=0;De<ze.length;De++){const Ke=ze[De].image[_e].image;Xe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De+1,0,0,Ke.width,Ke.height,Me,Le,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De+1,Ce,Ke.width,Ke.height,0,Me,Le,Ke.data)}}else{Xe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Me,Le,$[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ce,Me,Le,$[_e]);for(let De=0;De<ze.length;De++){const Ge=ze[De];Xe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De+1,0,0,Me,Le,Ge.image[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De+1,Ce,Me,Le,Ge.image[_e])}}}M(x,xe)&&C(t.TEXTURE_CUBE_MAP),Y.__version=V.version,x.onUpdate&&x.onUpdate(x)}m.__version=x.version}function st(m,x,P,D,V,Y){const ne=s.convert(P.format,P.colorSpace),ie=s.convert(P.type),$=T(P.internalFormat,ne,ie,P.colorSpace);if(!i.get(x).__hasExternalTextures){const xe=Math.max(1,x.width>>Y),Me=Math.max(1,x.height>>Y);V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?n.texImage3D(V,Y,$,xe,Me,x.depth,0,ne,ie,null):n.texImage2D(V,Y,$,xe,Me,0,ne,ie,null)}n.bindFramebuffer(t.FRAMEBUFFER,m),Ee(x)?g.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,D,V,i.get(P).__webglTexture,0,le(x)):(V===t.TEXTURE_2D||V>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,D,V,i.get(P).__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function U(m,x,P){if(t.bindRenderbuffer(t.RENDERBUFFER,m),x.depthBuffer&&!x.stencilBuffer){let D=t.DEPTH_COMPONENT16;if(P||Ee(x)){const V=x.depthTexture;V&&V.isDepthTexture&&(V.type===Hi?D=t.DEPTH_COMPONENT32F:V.type===zi&&(D=t.DEPTH_COMPONENT24));const Y=le(x);Ee(x)?g.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Y,D,x.width,x.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,Y,D,x.width,x.height)}else t.renderbufferStorage(t.RENDERBUFFER,D,x.width,x.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,m)}else if(x.depthBuffer&&x.stencilBuffer){const D=le(x);P&&Ee(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,D,t.DEPTH24_STENCIL8,x.width,x.height):Ee(x)?g.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D,t.DEPTH24_STENCIL8,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,m)}else{const D=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let V=0;V<D.length;V++){const Y=D[V],ne=s.convert(Y.format,Y.colorSpace),ie=s.convert(Y.type),$=T(Y.internalFormat,ne,ie,Y.colorSpace),we=le(x);P&&Ee(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,we,$,x.width,x.height):Ee(x)?g.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,we,$,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,$,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Q(m,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,m),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),pe(x.depthTexture,0);const D=i.get(x.depthTexture).__webglTexture,V=le(x);if(x.depthTexture.format===br)Ee(x)?g.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,D,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,D,0);else if(x.depthTexture.format===Rs)Ee(x)?g.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,D,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,D,0);else throw new Error("Unknown depthTexture format")}function se(m){const x=i.get(m),P=m.isWebGLCubeRenderTarget===!0;if(m.depthTexture&&!x.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");Q(x.__webglFramebuffer,m)}else if(P){x.__webglDepthbuffer=[];for(let D=0;D<6;D++)n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[D]),x.__webglDepthbuffer[D]=t.createRenderbuffer(),U(x.__webglDepthbuffer[D],m,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=t.createRenderbuffer(),U(x.__webglDepthbuffer,m,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(m,x,P){const D=i.get(m);x!==void 0&&st(D.__webglFramebuffer,m,m.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),P!==void 0&&se(m)}function ue(m){const x=m.texture,P=i.get(m),D=i.get(x);m.addEventListener("dispose",I),m.isWebGLMultipleRenderTargets!==!0&&(D.__webglTexture===void 0&&(D.__webglTexture=t.createTexture()),D.__version=x.version,a.memory.textures++);const V=m.isWebGLCubeRenderTarget===!0,Y=m.isWebGLMultipleRenderTargets===!0,ne=y(m)||o;if(V){P.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(o&&x.mipmaps&&x.mipmaps.length>0){P.__webglFramebuffer[ie]=[];for(let $=0;$<x.mipmaps.length;$++)P.__webglFramebuffer[ie][$]=t.createFramebuffer()}else P.__webglFramebuffer[ie]=t.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){P.__webglFramebuffer=[];for(let ie=0;ie<x.mipmaps.length;ie++)P.__webglFramebuffer[ie]=t.createFramebuffer()}else P.__webglFramebuffer=t.createFramebuffer();if(Y)if(r.drawBuffers){const ie=m.texture;for(let $=0,we=ie.length;$<we;$++){const xe=i.get(ie[$]);xe.__webglTexture===void 0&&(xe.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&m.samples>0&&Ee(m)===!1){const ie=Y?x:[x];P.__webglMultisampledFramebuffer=t.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let $=0;$<ie.length;$++){const we=ie[$];P.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,P.__webglColorRenderbuffer[$]);const xe=s.convert(we.format,we.colorSpace),Me=s.convert(we.type),Le=T(we.internalFormat,xe,Me,we.colorSpace,m.isXRRenderTarget===!0),Ce=le(m);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Le,m.width,m.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,P.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),m.depthBuffer&&(P.__webglDepthRenderbuffer=t.createRenderbuffer(),U(P.__webglDepthRenderbuffer,m,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(V){n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture),Qe(t.TEXTURE_CUBE_MAP,x,ne);for(let ie=0;ie<6;ie++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)st(P.__webglFramebuffer[ie][$],m,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,$);else st(P.__webglFramebuffer[ie],m,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);M(x,ne)&&C(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Y){const ie=m.texture;for(let $=0,we=ie.length;$<we;$++){const xe=ie[$],Me=i.get(xe);n.bindTexture(t.TEXTURE_2D,Me.__webglTexture),Qe(t.TEXTURE_2D,xe,ne),st(P.__webglFramebuffer,m,xe,t.COLOR_ATTACHMENT0+$,t.TEXTURE_2D,0),M(xe,ne)&&C(t.TEXTURE_2D)}n.unbindTexture()}else{let ie=t.TEXTURE_2D;if((m.isWebGL3DRenderTarget||m.isWebGLArrayRenderTarget)&&(o?ie=m.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ie,D.__webglTexture),Qe(ie,x,ne),o&&x.mipmaps&&x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)st(P.__webglFramebuffer[$],m,x,t.COLOR_ATTACHMENT0,ie,$);else st(P.__webglFramebuffer,m,x,t.COLOR_ATTACHMENT0,ie,0);M(x,ne)&&C(ie),n.unbindTexture()}m.depthBuffer&&se(m)}function Pe(m){const x=y(m)||o,P=m.isWebGLMultipleRenderTargets===!0?m.texture:[m.texture];for(let D=0,V=P.length;D<V;D++){const Y=P[D];if(M(Y,x)){const ne=m.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ie=i.get(Y).__webglTexture;n.bindTexture(ne,ie),C(ne),n.unbindTexture()}}}function Te(m){if(o&&m.samples>0&&Ee(m)===!1){const x=m.isWebGLMultipleRenderTargets?m.texture:[m.texture],P=m.width,D=m.height;let V=t.COLOR_BUFFER_BIT;const Y=[],ne=m.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=i.get(m),$=m.isWebGLMultipleRenderTargets===!0;if($)for(let we=0;we<x.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let we=0;we<x.length;we++){Y.push(t.COLOR_ATTACHMENT0+we),m.depthBuffer&&Y.push(ne);const xe=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(xe===!1&&(m.depthBuffer&&(V|=t.DEPTH_BUFFER_BIT),m.stencilBuffer&&(V|=t.STENCIL_BUFFER_BIT)),$&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ie.__webglColorRenderbuffer[we]),xe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ne]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ne])),$){const Me=i.get(x[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Me,0)}t.blitFramebuffer(0,0,P,D,0,0,P,D,V,t.NEAREST),S&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Y)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let we=0;we<x.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,ie.__webglColorRenderbuffer[we]);const xe=i.get(x[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}}function le(m){return Math.min(d,m.samples)}function Ee(m){const x=i.get(m);return o&&m.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ae(m){const x=a.render.frame;_.get(m)!==x&&(_.set(m,x),m.update())}function Be(m,x){const P=m.colorSpace,D=m.format,V=m.type;return m.isCompressedTexture===!0||m.isVideoTexture===!0||m.format===Xc||P!==fi&&P!==wr&&(P===Ot||P===Tl?o===!1?e.has("EXT_sRGB")===!0&&D===ni?(m.format=Xc,m.minFilter=Sn,m.generateMipmaps=!1):x=o_.sRGBToLinear(x):(D!==ni||V!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),x}this.allocateTextureUnit=K,this.resetTextureUnits=G,this.setTexture2D=pe,this.setTexture2DArray=re,this.setTexture3D=ae,this.setTextureCube=Ne,this.rebindTextures=fe,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Ee}const tw=0,qt=1;function nw(t,e,n){const i=n.isWebGL2;function r(s,a=wr){let o;const l=a===Ot||a===Tl?qt:tw;if(s===Yi)return t.UNSIGNED_BYTE;if(s===e_)return t.UNSIGNED_SHORT_4_4_4_4;if(s===t_)return t.UNSIGNED_SHORT_5_5_5_1;if(s===LS)return t.BYTE;if(s===DS)return t.SHORT;if(s===Qf)return t.UNSIGNED_SHORT;if(s===Qm)return t.INT;if(s===zi)return t.UNSIGNED_INT;if(s===Hi)return t.FLOAT;if(s===Ta)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===IS)return t.ALPHA;if(s===ni)return t.RGBA;if(s===US)return t.LUMINANCE;if(s===NS)return t.LUMINANCE_ALPHA;if(s===br)return t.DEPTH_COMPONENT;if(s===Rs)return t.DEPTH_STENCIL;if(s===Xc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===OS)return t.RED;if(s===n_)return t.RED_INTEGER;if(s===FS)return t.RG;if(s===i_)return t.RG_INTEGER;if(s===r_)return t.RGBA_INTEGER;if(s===kl||s===zl||s===Hl||s===Vl)if(l===qt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===kl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===zl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Hl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===kl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===zl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Hl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ph||s===mh||s===_h||s===gh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ph)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===mh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_h)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===BS)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===vh||s===yh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===vh)return l===qt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===yh)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xh||s===Sh||s===Th||s===Mh||s===Eh||s===bh||s===Ah||s===wh||s===Ch||s===Rh||s===Ph||s===Lh||s===Dh||s===Ih)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===xh)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sh)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Th)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Mh)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Eh)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bh)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ah)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wh)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ch)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rh)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ph)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Lh)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Dh)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ih)return l===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Gl||s===Uh||s===Nh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Gl)return l===qt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Uh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Nh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===kS||s===Oh||s===Fh||s===Bh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Gl)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Oh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Er?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class iw extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class So extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rw={type:"move"};class dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new So,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new So,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ve,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ve),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new So,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ve,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ve),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const R of e.hand.values()){const v=n.getJointPose(R,i),h=this._getHandJoint(c,R);v!==null&&(h.matrix.fromArray(v.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=v.radius),h.visible=v!==null}const p=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],g=p.position.distanceTo(d.position),S=.02,_=.005;c.inputState.pinching&&g>S+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&g<=S-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new So;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class sw extends An{constructor(e,n,i,r,s,a,o,l,c,p){if(p=p!==void 0?p:br,p!==br&&p!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===br&&(i=zi),i===void 0&&p===Rs&&(i=Er),super(null,r,s,a,o,l,p,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class aw extends Us{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,p=null,d=null,g=null,S=null,_=null;const R=n.getContextAttributes();let v=null,h=null;const u=[],f=[],y=new Jn;y.layers.enable(1),y.viewport=new rn;const E=new Jn;E.layers.enable(2),E.viewport=new rn;const M=[y,E],C=new iw;C.layers.enable(1),C.layers.enable(2);let T=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ae=u[re];return ae===void 0&&(ae=new dc,u[re]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(re){let ae=u[re];return ae===void 0&&(ae=new dc,u[re]=ae),ae.getGripSpace()},this.getHand=function(re){let ae=u[re];return ae===void 0&&(ae=new dc,u[re]=ae),ae.getHandSpace()};function L(re){const ae=f.indexOf(re.inputSource);if(ae===-1)return;const Ne=u[ae];Ne!==void 0&&(Ne.update(re.inputSource,re.frame,c||a),Ne.dispatchEvent({type:re.type,data:re.inputSource}))}function k(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",I);for(let re=0;re<u.length;re++){const ae=f[re];ae!==null&&(f[re]=null,u[re].disconnect(ae))}T=null,w=null,e.setRenderTarget(v),S=null,g=null,d=null,r=null,h=null,pe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",k),r.addEventListener("inputsourceschange",I),R.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ae={antialias:r.renderState.layers===void 0?R.antialias:!0,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:s};S=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:S}),h=new Ur(S.framebufferWidth,S.framebufferHeight,{format:ni,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil})}else{let ae=null,Ne=null,ke=null;R.depth&&(ke=R.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=R.stencil?Rs:br,Ne=R.stencil?Er:zi);const Fe={colorFormat:n.RGBA8,depthFormat:ke,scaleFactor:s};d=new XRWebGLBinding(r,n),g=d.createProjectionLayer(Fe),r.updateRenderState({layers:[g]}),h=new Ur(g.textureWidth,g.textureHeight,{format:ni,type:Yi,depthTexture:new sw(g.textureWidth,g.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0});const Ye=e.properties.get(h);Ye.__ignoreDepthValues=g.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(re){for(let ae=0;ae<re.removed.length;ae++){const Ne=re.removed[ae],ke=f.indexOf(Ne);ke>=0&&(f[ke]=null,u[ke].disconnect(Ne))}for(let ae=0;ae<re.added.length;ae++){const Ne=re.added[ae];let ke=f.indexOf(Ne);if(ke===-1){for(let Ye=0;Ye<u.length;Ye++)if(Ye>=f.length){f.push(Ne),ke=Ye;break}else if(f[Ye]===null){f[Ye]=Ne,ke=Ye;break}if(ke===-1)break}const Fe=u[ke];Fe&&Fe.connect(Ne)}}const O=new ve,F=new ve;function X(re,ae,Ne){O.setFromMatrixPosition(ae.matrixWorld),F.setFromMatrixPosition(Ne.matrixWorld);const ke=O.distanceTo(F),Fe=ae.projectionMatrix.elements,Ye=Ne.projectionMatrix.elements,Qe=Fe[14]/(Fe[10]-1),$e=Fe[14]/(Fe[10]+1),et=(Fe[9]+1)/Fe[5],Mt=(Fe[9]-1)/Fe[5],st=(Fe[8]-1)/Fe[0],U=(Ye[8]+1)/Ye[0],Q=Qe*st,se=Qe*U,fe=ke/(-st+U),ue=fe*-st;ae.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ue),re.translateZ(fe),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert();const Pe=Qe+fe,Te=$e+fe,le=Q-ue,Ee=se+(ke-ue),Ae=et*$e/Te*Pe,Be=Mt*$e/Te*Pe;re.projectionMatrix.makePerspective(le,Ee,Ae,Be,Pe,Te),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}function Z(re,ae){ae===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ae.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;C.near=E.near=y.near=re.near,C.far=E.far=y.far=re.far,(T!==C.near||w!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),T=C.near,w=C.far);const ae=re.parent,Ne=C.cameras;Z(C,ae);for(let ke=0;ke<Ne.length;ke++)Z(Ne[ke],ae);Ne.length===2?X(C,y,E):C.projectionMatrix.copy(y.projectionMatrix),G(re,C,ae)};function G(re,ae,Ne){Ne===null?re.matrix.copy(ae.matrixWorld):(re.matrix.copy(Ne.matrixWorld),re.matrix.invert(),re.matrix.multiply(ae.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ae.projectionMatrix),re.projectionMatrixInverse.copy(ae.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=qc*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(g===null&&S===null))return l},this.setFoveation=function(re){l=re,g!==null&&(g.fixedFoveation=re),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=re)};let K=null;function me(re,ae){if(p=ae.getViewerPose(c||a),_=ae,p!==null){const Ne=p.views;S!==null&&(e.setRenderTargetFramebuffer(h,S.framebuffer),e.setRenderTarget(h));let ke=!1;Ne.length!==C.cameras.length&&(C.cameras.length=0,ke=!0);for(let Fe=0;Fe<Ne.length;Fe++){const Ye=Ne[Fe];let Qe=null;if(S!==null)Qe=S.getViewport(Ye);else{const et=d.getViewSubImage(g,Ye);Qe=et.viewport,Fe===0&&(e.setRenderTargetTextures(h,et.colorTexture,g.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(h))}let $e=M[Fe];$e===void 0&&($e=new Jn,$e.layers.enable(Fe),$e.viewport=new rn,M[Fe]=$e),$e.matrix.fromArray(Ye.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Ye.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Fe===0&&(C.matrix.copy($e.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ke===!0&&C.cameras.push($e)}}for(let Ne=0;Ne<u.length;Ne++){const ke=f[Ne],Fe=u[Ne];ke!==null&&Fe!==void 0&&Fe.update(ke,ae,c||a)}K&&K(re,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),_=null}const pe=new y_;pe.setAnimationLoop(me),this.setAnimationLoop=function(re){K=re},this.dispose=function(){}}}function ow(t,e){function n(v,h){v.matrixAutoUpdate===!0&&v.updateMatrix(),h.value.copy(v.matrix)}function i(v,h){h.color.getRGB(v.fogColor.value,m_(t)),h.isFog?(v.fogNear.value=h.near,v.fogFar.value=h.far):h.isFogExp2&&(v.fogDensity.value=h.density)}function r(v,h,u,f,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(v,h):h.isMeshToonMaterial?(s(v,h),d(v,h)):h.isMeshPhongMaterial?(s(v,h),p(v,h)):h.isMeshStandardMaterial?(s(v,h),g(v,h),h.isMeshPhysicalMaterial&&S(v,h,y)):h.isMeshMatcapMaterial?(s(v,h),_(v,h)):h.isMeshDepthMaterial?s(v,h):h.isMeshDistanceMaterial?(s(v,h),R(v,h)):h.isMeshNormalMaterial?s(v,h):h.isLineBasicMaterial?(a(v,h),h.isLineDashedMaterial&&o(v,h)):h.isPointsMaterial?l(v,h,u,f):h.isSpriteMaterial?c(v,h):h.isShadowMaterial?(v.color.value.copy(h.color),v.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(v,h){v.opacity.value=h.opacity,h.color&&v.diffuse.value.copy(h.color),h.emissive&&v.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.bumpMap&&(v.bumpMap.value=h.bumpMap,n(h.bumpMap,v.bumpMapTransform),v.bumpScale.value=h.bumpScale,h.side===bn&&(v.bumpScale.value*=-1)),h.normalMap&&(v.normalMap.value=h.normalMap,n(h.normalMap,v.normalMapTransform),v.normalScale.value.copy(h.normalScale),h.side===bn&&v.normalScale.value.negate()),h.displacementMap&&(v.displacementMap.value=h.displacementMap,n(h.displacementMap,v.displacementMapTransform),v.displacementScale.value=h.displacementScale,v.displacementBias.value=h.displacementBias),h.emissiveMap&&(v.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,v.emissiveMapTransform)),h.specularMap&&(v.specularMap.value=h.specularMap,n(h.specularMap,v.specularMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest);const u=e.get(h).envMap;if(u&&(v.envMap.value=u,v.flipEnvMap.value=u.isCubeTexture&&u.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=h.reflectivity,v.ior.value=h.ior,v.refractionRatio.value=h.refractionRatio),h.lightMap){v.lightMap.value=h.lightMap;const f=t._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=h.lightMapIntensity*f,n(h.lightMap,v.lightMapTransform)}h.aoMap&&(v.aoMap.value=h.aoMap,v.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,v.aoMapTransform))}function a(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform))}function o(v,h){v.dashSize.value=h.dashSize,v.totalSize.value=h.dashSize+h.gapSize,v.scale.value=h.scale}function l(v,h,u,f){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.size.value=h.size*u,v.scale.value=f*.5,h.map&&(v.map.value=h.map,n(h.map,v.uvTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function c(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.rotation.value=h.rotation,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function p(v,h){v.specular.value.copy(h.specular),v.shininess.value=Math.max(h.shininess,1e-4)}function d(v,h){h.gradientMap&&(v.gradientMap.value=h.gradientMap)}function g(v,h){v.metalness.value=h.metalness,h.metalnessMap&&(v.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,v.metalnessMapTransform)),v.roughness.value=h.roughness,h.roughnessMap&&(v.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,v.roughnessMapTransform)),e.get(h).envMap&&(v.envMapIntensity.value=h.envMapIntensity)}function S(v,h,u){v.ior.value=h.ior,h.sheen>0&&(v.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),v.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(v.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,v.sheenColorMapTransform)),h.sheenRoughnessMap&&(v.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,v.sheenRoughnessMapTransform))),h.clearcoat>0&&(v.clearcoat.value=h.clearcoat,v.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(v.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,v.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(v.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===bn&&v.clearcoatNormalScale.value.negate())),h.iridescence>0&&(v.iridescence.value=h.iridescence,v.iridescenceIOR.value=h.iridescenceIOR,v.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(v.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,v.iridescenceMapTransform)),h.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),h.transmission>0&&(v.transmission.value=h.transmission,v.transmissionSamplerMap.value=u.texture,v.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(v.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,v.transmissionMapTransform)),v.thickness.value=h.thickness,h.thicknessMap&&(v.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=h.attenuationDistance,v.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(v.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(v.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=h.specularIntensity,v.specularColor.value.copy(h.specularColor),h.specularColorMap&&(v.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,v.specularColorMapTransform)),h.specularIntensityMap&&(v.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,v.specularIntensityMapTransform))}function _(v,h){h.matcap&&(v.matcap.value=h.matcap)}function R(v,h){const u=e.get(h).light;v.referencePosition.value.setFromMatrixPosition(u.matrixWorld),v.nearDistance.value=u.shadow.camera.near,v.farDistance.value=u.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lw(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(u,f){const y=f.program;i.uniformBlockBinding(u,y)}function c(u,f){let y=r[u.id];y===void 0&&(_(u),y=p(u),r[u.id]=y,u.addEventListener("dispose",v));const E=f.program;i.updateUBOMapping(u,E);const M=e.render.frame;s[u.id]!==M&&(g(u),s[u.id]=M)}function p(u){const f=d();u.__bindingPointIndex=f;const y=t.createBuffer(),E=u.__size,M=u.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,E,M),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,f,y),y}function d(){for(let u=0;u<o;u++)if(a.indexOf(u)===-1)return a.push(u),u;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(u){const f=r[u.id],y=u.uniforms,E=u.__cache;t.bindBuffer(t.UNIFORM_BUFFER,f);for(let M=0,C=y.length;M<C;M++){const T=y[M];if(S(T,M,E)===!0){const w=T.__offset,L=Array.isArray(T.value)?T.value:[T.value];let k=0;for(let I=0;I<L.length;I++){const O=L[I],F=R(O);typeof O=="number"?(T.__data[0]=O,t.bufferSubData(t.UNIFORM_BUFFER,w+k,T.__data)):O.isMatrix3?(T.__data[0]=O.elements[0],T.__data[1]=O.elements[1],T.__data[2]=O.elements[2],T.__data[3]=O.elements[0],T.__data[4]=O.elements[3],T.__data[5]=O.elements[4],T.__data[6]=O.elements[5],T.__data[7]=O.elements[0],T.__data[8]=O.elements[6],T.__data[9]=O.elements[7],T.__data[10]=O.elements[8],T.__data[11]=O.elements[0]):(O.toArray(T.__data,k),k+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,w,T.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function S(u,f,y){const E=u.value;if(y[f]===void 0){if(typeof E=="number")y[f]=E;else{const M=Array.isArray(E)?E:[E],C=[];for(let T=0;T<M.length;T++)C.push(M[T].clone());y[f]=C}return!0}else if(typeof E=="number"){if(y[f]!==E)return y[f]=E,!0}else{const M=Array.isArray(y[f])?y[f]:[y[f]],C=Array.isArray(E)?E:[E];for(let T=0;T<M.length;T++){const w=M[T];if(w.equals(C[T])===!1)return w.copy(C[T]),!0}}return!1}function _(u){const f=u.uniforms;let y=0;const E=16;let M=0;for(let C=0,T=f.length;C<T;C++){const w=f[C],L={boundary:0,storage:0},k=Array.isArray(w.value)?w.value:[w.value];for(let I=0,O=k.length;I<O;I++){const F=k[I],X=R(F);L.boundary+=X.boundary,L.storage+=X.storage}if(w.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,C>0){M=y%E;const I=E-M;M!==0&&I-L.boundary<0&&(y+=E-M,w.__offset=y)}y+=L.storage}return M=y%E,M>0&&(y+=E-M),u.__size=y,u.__cache={},this}function R(u){const f={boundary:0,storage:0};return typeof u=="number"?(f.boundary=4,f.storage=4):u.isVector2?(f.boundary=8,f.storage=8):u.isVector3||u.isColor?(f.boundary=16,f.storage=12):u.isVector4?(f.boundary=16,f.storage=16):u.isMatrix3?(f.boundary=48,f.storage=48):u.isMatrix4?(f.boundary=64,f.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),f}function v(u){const f=u.target;f.removeEventListener("dispose",v);const y=a.indexOf(f.__bindingPointIndex);a.splice(y,1),t.deleteBuffer(r[f.id]),delete r[f.id],delete s[f.id]}function h(){for(const u in r)t.deleteBuffer(r[u]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class b_{constructor(e={}){const{canvas:n=eT(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let g;i!==null?g=i.getContextAttributes().alpha:g=a;const S=new Uint32Array(4),_=new Int32Array(4);let R=null,v=null;const h=[],u=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=qi,this.toneMappingExposure=1;const f=this;let y=!1,E=0,M=0,C=null,T=-1,w=null;const L=new rn,k=new rn;let I=null;const O=new It(0);let F=0,X=n.width,Z=n.height,G=1,K=null,me=null;const pe=new rn(0,0,X,Z),re=new rn(0,0,X,Z);let ae=!1;const Ne=new v_;let ke=!1,Fe=!1,Ye=null;const Qe=new sn,$e=new wt,et=new ve,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function st(){return C===null?G:1}let U=i;function Q(W,ce){for(let ye=0;ye<W.length;ye++){const he=W[ye],Se=n.getContext(he,ce);if(Se!==null)return Se}return null}try{const W={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Jf}`),n.addEventListener("webglcontextlost",ze,!1),n.addEventListener("webglcontextrestored",_e,!1),n.addEventListener("webglcontextcreationerror",De,!1),U===null){const ce=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&ce.shift(),U=Q(ce,W),U===null)throw Q(ce)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(W){throw console.error("THREE.WebGLRenderer: "+W.message),W}let se,fe,ue,Pe,Te,le,Ee,Ae,Be,m,x,P,D,V,Y,ne,ie,$,we,xe,Me,Le,Ce,Xe;function _t(){se=new vb(U),fe=new hb(U,se,e),se.init(fe),Le=new nw(U,se,fe),ue=new QA(U,se,fe),Pe=new Sb(U),Te=new kA,le=new ew(U,se,ue,Te,fe,Le,Pe),Ee=new pb(f),Ae=new gb(f),Be=new LT(U,fe),Ce=new fb(U,se,Be,fe),m=new yb(U,Be,Pe,Ce),x=new bb(U,m,Be,Pe),we=new Eb(U,fe,le),ne=new db(Te),P=new BA(f,Ee,Ae,se,fe,Ce,ne),D=new ow(f,Te),V=new HA,Y=new YA(se,fe),$=new cb(f,Ee,Ae,ue,x,g,l),ie=new JA(f,x,fe),Xe=new lw(U,Pe,fe,ue),xe=new ub(U,se,Pe,fe),Me=new xb(U,se,Pe,fe),Pe.programs=P.programs,f.capabilities=fe,f.extensions=se,f.properties=Te,f.renderLists=V,f.shadowMap=ie,f.state=ue,f.info=Pe}_t();const J=new aw(f,U);this.xr=J,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const W=se.get("WEBGL_lose_context");W&&W.loseContext()},this.forceContextRestore=function(){const W=se.get("WEBGL_lose_context");W&&W.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(W){W!==void 0&&(G=W,this.setSize(X,Z,!1))},this.getSize=function(W){return W.set(X,Z)},this.setSize=function(W,ce,ye=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=W,Z=ce,n.width=Math.floor(W*G),n.height=Math.floor(ce*G),ye===!0&&(n.style.width=W+"px",n.style.height=ce+"px"),this.setViewport(0,0,W,ce)},this.getDrawingBufferSize=function(W){return W.set(X*G,Z*G).floor()},this.setDrawingBufferSize=function(W,ce,ye){X=W,Z=ce,G=ye,n.width=Math.floor(W*ye),n.height=Math.floor(ce*ye),this.setViewport(0,0,W,ce)},this.getCurrentViewport=function(W){return W.copy(L)},this.getViewport=function(W){return W.copy(pe)},this.setViewport=function(W,ce,ye,he){W.isVector4?pe.set(W.x,W.y,W.z,W.w):pe.set(W,ce,ye,he),ue.viewport(L.copy(pe).multiplyScalar(G).floor())},this.getScissor=function(W){return W.copy(re)},this.setScissor=function(W,ce,ye,he){W.isVector4?re.set(W.x,W.y,W.z,W.w):re.set(W,ce,ye,he),ue.scissor(k.copy(re).multiplyScalar(G).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(W){ue.setScissorTest(ae=W)},this.setOpaqueSort=function(W){K=W},this.setTransparentSort=function(W){me=W},this.getClearColor=function(W){return W.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(W=!0,ce=!0,ye=!0){let he=0;if(W){let Se=!1;if(C!==null){const qe=C.texture.format;Se=qe===r_||qe===i_||qe===n_}if(Se){const qe=C.texture.type,Ze=qe===Yi||qe===zi||qe===Qf||qe===Er||qe===e_||qe===t_,at=$.getClearColor(),ot=$.getClearAlpha(),dt=at.r,tt=at.g,b=at.b;Ze?(S[0]=dt,S[1]=tt,S[2]=b,S[3]=ot,U.clearBufferuiv(U.COLOR,0,S)):(_[0]=dt,_[1]=tt,_[2]=b,_[3]=ot,U.clearBufferiv(U.COLOR,0,_))}else he|=U.COLOR_BUFFER_BIT}ce&&(he|=U.DEPTH_BUFFER_BIT),ye&&(he|=U.STENCIL_BUFFER_BIT),U.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ze,!1),n.removeEventListener("webglcontextrestored",_e,!1),n.removeEventListener("webglcontextcreationerror",De,!1),V.dispose(),Y.dispose(),Te.dispose(),Ee.dispose(),Ae.dispose(),x.dispose(),Ce.dispose(),Xe.dispose(),P.dispose(),J.dispose(),J.removeEventListener("sessionstart",Et),J.removeEventListener("sessionend",an),Ye&&(Ye.dispose(),Ye=null),Pt.stop()};function ze(W){W.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const W=Pe.autoReset,ce=ie.enabled,ye=ie.autoUpdate,he=ie.needsUpdate,Se=ie.type;_t(),Pe.autoReset=W,ie.enabled=ce,ie.autoUpdate=ye,ie.needsUpdate=he,ie.type=Se}function De(W){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",W.statusMessage)}function Ge(W){const ce=W.target;ce.removeEventListener("dispose",Ge),Ke(ce)}function Ke(W){Dt(W),Te.remove(W)}function Dt(W){const ce=Te.get(W).programs;ce!==void 0&&(ce.forEach(function(ye){P.releaseProgram(ye)}),W.isShaderMaterial&&P.releaseShaderCache(W))}this.renderBufferDirect=function(W,ce,ye,he,Se,qe){ce===null&&(ce=Mt);const Ze=Se.isMesh&&Se.matrixWorld.determinant()<0,at=ka(W,ce,ye,he,Se);ue.setMaterial(he,Ze);let ot=ye.index,dt=1;if(he.wireframe===!0){if(ot=m.getWireframeAttribute(ye),ot===void 0)return;dt=2}const tt=ye.drawRange,b=ye.attributes.position;let A=tt.start*dt,z=(tt.start+tt.count)*dt;qe!==null&&(A=Math.max(A,qe.start*dt),z=Math.min(z,(qe.start+qe.count)*dt)),ot!==null?(A=Math.max(A,0),z=Math.min(z,ot.count)):b!=null&&(A=Math.max(A,0),z=Math.min(z,b.count));const H=z-A;if(H<0||H===1/0)return;Ce.setup(Se,he,at,ye,ot);let N,q=xe;if(ot!==null&&(N=Be.get(ot),q=Me,q.setIndex(N)),Se.isMesh)he.wireframe===!0?(ue.setLineWidth(he.wireframeLinewidth*st()),q.setMode(U.LINES)):q.setMode(U.TRIANGLES);else if(Se.isLine){let B=he.linewidth;B===void 0&&(B=1),ue.setLineWidth(B*st()),Se.isLineSegments?q.setMode(U.LINES):Se.isLineLoop?q.setMode(U.LINE_LOOP):q.setMode(U.LINE_STRIP)}else Se.isPoints?q.setMode(U.POINTS):Se.isSprite&&q.setMode(U.TRIANGLES);if(Se.isInstancedMesh)q.renderInstances(A,H,Se.count);else if(ye.isInstancedBufferGeometry){const B=ye._maxInstanceCount!==void 0?ye._maxInstanceCount:1/0,j=Math.min(ye.instanceCount,B);q.renderInstances(A,H,j)}else q.render(A,H)},this.compile=function(W,ce){function ye(he,Se,qe){he.transparent===!0&&he.side===Ei&&he.forceSinglePass===!1?(he.side=bn,he.needsUpdate=!0,zr(he,Se,qe),he.side=er,he.needsUpdate=!0,zr(he,Se,qe),he.side=Ei):zr(he,Se,qe)}v=Y.get(W),v.init(),u.push(v),W.traverseVisible(function(he){he.isLight&&he.layers.test(ce.layers)&&(v.pushLight(he),he.castShadow&&v.pushShadow(he))}),v.setupLights(f._useLegacyLights),W.traverse(function(he){const Se=he.material;if(Se)if(Array.isArray(Se))for(let qe=0;qe<Se.length;qe++){const Ze=Se[qe];ye(Ze,W,he)}else ye(Se,W,he)}),u.pop(),v=null};let Bt=null;function Rt(W){Bt&&Bt(W)}function Et(){Pt.stop()}function an(){Pt.start()}const Pt=new y_;Pt.setAnimationLoop(Rt),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(W){Bt=W,J.setAnimationLoop(W),W===null?Pt.stop():Pt.start()},J.addEventListener("sessionstart",Et),J.addEventListener("sessionend",an),this.render=function(W,ce){if(ce!==void 0&&ce.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ce.parent===null&&ce.matrixWorldAutoUpdate===!0&&ce.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(ce),ce=J.getCamera()),W.isScene===!0&&W.onBeforeRender(f,W,ce,C),v=Y.get(W,u.length),v.init(),u.push(v),Qe.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),Ne.setFromProjectionMatrix(Qe),Fe=this.localClippingEnabled,ke=ne.init(this.clippingPlanes,Fe),R=V.get(W,h.length),R.init(),h.push(R),nr(W,ce,0,f.sortObjects),R.finish(),f.sortObjects===!0&&R.sort(K,me),this.info.render.frame++,ke===!0&&ne.beginShadows();const ye=v.state.shadowsArray;if(ie.render(ye,W,ce),ke===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(R,W),v.setupLights(f._useLegacyLights),ce.isArrayCamera){const he=ce.cameras;for(let Se=0,qe=he.length;Se<qe;Se++){const Ze=he[Se];Ba(R,W,Ze,Ze.viewport)}}else Ba(R,W,ce);C!==null&&(le.updateMultisampleRenderTarget(C),le.updateRenderTargetMipmap(C)),W.isScene===!0&&W.onAfterRender(f,W,ce),Ce.resetDefaultState(),T=-1,w=null,u.pop(),u.length>0?v=u[u.length-1]:v=null,h.pop(),h.length>0?R=h[h.length-1]:R=null};function nr(W,ce,ye,he){if(W.visible===!1)return;if(W.layers.test(ce.layers)){if(W.isGroup)ye=W.renderOrder;else if(W.isLOD)W.autoUpdate===!0&&W.update(ce);else if(W.isLight)v.pushLight(W),W.castShadow&&v.pushShadow(W);else if(W.isSprite){if(!W.frustumCulled||Ne.intersectsSprite(W)){he&&et.setFromMatrixPosition(W.matrixWorld).applyMatrix4(Qe);const Ze=x.update(W),at=W.material;at.visible&&R.push(W,Ze,at,ye,et.z,null)}}else if((W.isMesh||W.isLine||W.isPoints)&&(!W.frustumCulled||Ne.intersectsObject(W))){const Ze=x.update(W),at=W.material;if(he&&(W.boundingSphere!==void 0?(W.boundingSphere===null&&W.computeBoundingSphere(),et.copy(W.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),et.copy(Ze.boundingSphere.center)),et.applyMatrix4(W.matrixWorld).applyMatrix4(Qe)),Array.isArray(at)){const ot=Ze.groups;for(let dt=0,tt=ot.length;dt<tt;dt++){const b=ot[dt],A=at[b.materialIndex];A&&A.visible&&R.push(W,Ze,A,ye,et.z,b)}}else at.visible&&R.push(W,Ze,at,ye,et.z,null)}}const qe=W.children;for(let Ze=0,at=qe.length;Ze<at;Ze++)nr(qe[Ze],ce,ye,he)}function Ba(W,ce,ye,he){const Se=W.opaque,qe=W.transmissive,Ze=W.transparent;v.setupLightsView(ye),ke===!0&&ne.setGlobalState(f.clippingPlanes,ye),qe.length>0&&ri(Se,qe,ce,ye),he&&ue.viewport(L.copy(he)),Se.length>0&&ir(Se,ce,ye),qe.length>0&&ir(qe,ce,ye),Ze.length>0&&ir(Ze,ce,ye),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function ri(W,ce,ye,he){const Se=fe.isWebGL2;Ye===null&&(Ye=new Ur(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")?Ta:Yi,minFilter:Sa,samples:Se?4:0})),f.getDrawingBufferSize($e),Se?Ye.setSize($e.x,$e.y):Ye.setSize(Yc($e.x),Yc($e.y));const qe=f.getRenderTarget();f.setRenderTarget(Ye),f.getClearColor(O),F=f.getClearAlpha(),F<1&&f.setClearColor(16777215,.5),f.clear();const Ze=f.toneMapping;f.toneMapping=qi,ir(W,ye,he),le.updateMultisampleRenderTarget(Ye),le.updateRenderTargetMipmap(Ye);let at=!1;for(let ot=0,dt=ce.length;ot<dt;ot++){const tt=ce[ot],b=tt.object,A=tt.geometry,z=tt.material,H=tt.group;if(z.side===Ei&&b.layers.test(he.layers)){const N=z.side;z.side=bn,z.needsUpdate=!0,Wn(b,ye,he,A,z,H),z.side=N,z.needsUpdate=!0,at=!0}}at===!0&&(le.updateMultisampleRenderTarget(Ye),le.updateRenderTargetMipmap(Ye)),f.setRenderTarget(qe),f.setClearColor(O,F),f.toneMapping=Ze}function ir(W,ce,ye){const he=ce.isScene===!0?ce.overrideMaterial:null;for(let Se=0,qe=W.length;Se<qe;Se++){const Ze=W[Se],at=Ze.object,ot=Ze.geometry,dt=he===null?Ze.material:he,tt=Ze.group;at.layers.test(ye.layers)&&Wn(at,ce,ye,ot,dt,tt)}}function Wn(W,ce,ye,he,Se,qe){W.onBeforeRender(f,ce,ye,he,Se,qe),W.modelViewMatrix.multiplyMatrices(ye.matrixWorldInverse,W.matrixWorld),W.normalMatrix.getNormalMatrix(W.modelViewMatrix),Se.onBeforeRender(f,ce,ye,he,W,qe),Se.transparent===!0&&Se.side===Ei&&Se.forceSinglePass===!1?(Se.side=bn,Se.needsUpdate=!0,f.renderBufferDirect(ye,ce,he,Se,W,qe),Se.side=er,Se.needsUpdate=!0,f.renderBufferDirect(ye,ce,he,Se,W,qe),Se.side=Ei):f.renderBufferDirect(ye,ce,he,Se,W,qe),W.onAfterRender(f,ce,ye,he,Se,qe)}function zr(W,ce,ye){ce.isScene!==!0&&(ce=Mt);const he=Te.get(W),Se=v.state.lights,qe=v.state.shadowsArray,Ze=Se.state.version,at=P.getParameters(W,Se.state,qe,ce,ye),ot=P.getProgramCacheKey(at);let dt=he.programs;he.environment=W.isMeshStandardMaterial?ce.environment:null,he.fog=ce.fog,he.envMap=(W.isMeshStandardMaterial?Ae:Ee).get(W.envMap||he.environment),dt===void 0&&(W.addEventListener("dispose",Ge),dt=new Map,he.programs=dt);let tt=dt.get(ot);if(tt!==void 0){if(he.currentProgram===tt&&he.lightsStateVersion===Ze)return Hr(W,at),tt}else at.uniforms=P.getUniforms(W),W.onBuild(ye,at,f),W.onBeforeCompile(at,f),tt=P.acquireProgram(at,ot),dt.set(ot,tt),he.uniforms=at.uniforms;const b=he.uniforms;(!W.isShaderMaterial&&!W.isRawShaderMaterial||W.clipping===!0)&&(b.clippingPlanes=ne.uniform),Hr(W,at),he.needsLights=Os(W),he.lightsStateVersion=Ze,he.needsLights&&(b.ambientLightColor.value=Se.state.ambient,b.lightProbe.value=Se.state.probe,b.directionalLights.value=Se.state.directional,b.directionalLightShadows.value=Se.state.directionalShadow,b.spotLights.value=Se.state.spot,b.spotLightShadows.value=Se.state.spotShadow,b.rectAreaLights.value=Se.state.rectArea,b.ltc_1.value=Se.state.rectAreaLTC1,b.ltc_2.value=Se.state.rectAreaLTC2,b.pointLights.value=Se.state.point,b.pointLightShadows.value=Se.state.pointShadow,b.hemisphereLights.value=Se.state.hemi,b.directionalShadowMap.value=Se.state.directionalShadowMap,b.directionalShadowMatrix.value=Se.state.directionalShadowMatrix,b.spotShadowMap.value=Se.state.spotShadowMap,b.spotLightMatrix.value=Se.state.spotLightMatrix,b.spotLightMap.value=Se.state.spotLightMap,b.pointShadowMap.value=Se.state.pointShadowMap,b.pointShadowMatrix.value=Se.state.pointShadowMatrix);const A=tt.getUniforms(),z=wo.seqWithValue(A.seq,b);return he.currentProgram=tt,he.uniformsList=z,tt}function Hr(W,ce){const ye=Te.get(W);ye.outputColorSpace=ce.outputColorSpace,ye.instancing=ce.instancing,ye.instancingColor=ce.instancingColor,ye.skinning=ce.skinning,ye.morphTargets=ce.morphTargets,ye.morphNormals=ce.morphNormals,ye.morphColors=ce.morphColors,ye.morphTargetsCount=ce.morphTargetsCount,ye.numClippingPlanes=ce.numClippingPlanes,ye.numIntersection=ce.numClipIntersection,ye.vertexAlphas=ce.vertexAlphas,ye.vertexTangents=ce.vertexTangents,ye.toneMapping=ce.toneMapping}function ka(W,ce,ye,he,Se){ce.isScene!==!0&&(ce=Mt),le.resetTextureUnits();const qe=ce.fog,Ze=he.isMeshStandardMaterial?ce.environment:null,at=C===null?f.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:fi,ot=(he.isMeshStandardMaterial?Ae:Ee).get(he.envMap||Ze),dt=he.vertexColors===!0&&!!ye.attributes.color&&ye.attributes.color.itemSize===4,tt=!!ye.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),b=!!ye.morphAttributes.position,A=!!ye.morphAttributes.normal,z=!!ye.morphAttributes.color;let H=qi;he.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(H=f.toneMapping);const N=ye.morphAttributes.position||ye.morphAttributes.normal||ye.morphAttributes.color,q=N!==void 0?N.length:0,B=Te.get(he),j=v.state.lights;if(ke===!0&&(Fe===!0||W!==w)){const Ue=W===w&&he.id===T;ne.setState(he,W,Ue)}let ee=!1;he.version===B.__version?(B.needsLights&&B.lightsStateVersion!==j.state.version||B.outputColorSpace!==at||Se.isInstancedMesh&&B.instancing===!1||!Se.isInstancedMesh&&B.instancing===!0||Se.isSkinnedMesh&&B.skinning===!1||!Se.isSkinnedMesh&&B.skinning===!0||Se.isInstancedMesh&&B.instancingColor===!0&&Se.instanceColor===null||Se.isInstancedMesh&&B.instancingColor===!1&&Se.instanceColor!==null||B.envMap!==ot||he.fog===!0&&B.fog!==qe||B.numClippingPlanes!==void 0&&(B.numClippingPlanes!==ne.numPlanes||B.numIntersection!==ne.numIntersection)||B.vertexAlphas!==dt||B.vertexTangents!==tt||B.morphTargets!==b||B.morphNormals!==A||B.morphColors!==z||B.toneMapping!==H||fe.isWebGL2===!0&&B.morphTargetsCount!==q)&&(ee=!0):(ee=!0,B.__version=he.version);let de=B.currentProgram;ee===!0&&(de=zr(he,ce,Se));let oe=!1,be=!1,te=!1;const Ie=de.getUniforms(),Oe=B.uniforms;if(ue.useProgram(de.program)&&(oe=!0,be=!0,te=!0),he.id!==T&&(T=he.id,be=!0),oe||w!==W){Ie.setValue(U,"projectionMatrix",W.projectionMatrix),Ie.setValue(U,"viewMatrix",W.matrixWorldInverse);const Ue=Ie.map.cameraPosition;Ue!==void 0&&Ue.setValue(U,et.setFromMatrixPosition(W.matrixWorld)),fe.logarithmicDepthBuffer&&Ie.setValue(U,"logDepthBufFC",2/(Math.log(W.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&Ie.setValue(U,"isOrthographic",W.isOrthographicCamera===!0),w!==W&&(w=W,be=!0,te=!0)}if(Se.isSkinnedMesh){Ie.setOptional(U,Se,"bindMatrix"),Ie.setOptional(U,Se,"bindMatrixInverse");const Ue=Se.skeleton;Ue&&(fe.floatVertexTextures?(Ue.boneTexture===null&&Ue.computeBoneTexture(),Ie.setValue(U,"boneTexture",Ue.boneTexture,le),Ie.setValue(U,"boneTextureSize",Ue.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ge=ye.morphAttributes;if((ge.position!==void 0||ge.normal!==void 0||ge.color!==void 0&&fe.isWebGL2===!0)&&we.update(Se,ye,de),(be||B.receiveShadow!==Se.receiveShadow)&&(B.receiveShadow=Se.receiveShadow,Ie.setValue(U,"receiveShadow",Se.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(Oe.envMap.value=ot,Oe.flipEnvMap.value=ot.isCubeTexture&&ot.isRenderTargetTexture===!1?-1:1),be&&(Ie.setValue(U,"toneMappingExposure",f.toneMappingExposure),B.needsLights&&wl(Oe,te),qe&&he.fog===!0&&D.refreshFogUniforms(Oe,qe),D.refreshMaterialUniforms(Oe,he,G,Z,Ye),wo.upload(U,B.uniformsList,Oe,le)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(wo.upload(U,B.uniformsList,Oe,le),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&Ie.setValue(U,"center",Se.center),Ie.setValue(U,"modelViewMatrix",Se.modelViewMatrix),Ie.setValue(U,"normalMatrix",Se.normalMatrix),Ie.setValue(U,"modelMatrix",Se.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const Ue=he.uniformsGroups;for(let Re=0,He=Ue.length;Re<He;Re++)if(fe.isWebGL2){const Je=Ue[Re];Xe.update(Je,de),Xe.bind(Je,de)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return de}function wl(W,ce){W.ambientLightColor.needsUpdate=ce,W.lightProbe.needsUpdate=ce,W.directionalLights.needsUpdate=ce,W.directionalLightShadows.needsUpdate=ce,W.pointLights.needsUpdate=ce,W.pointLightShadows.needsUpdate=ce,W.spotLights.needsUpdate=ce,W.spotLightShadows.needsUpdate=ce,W.rectAreaLights.needsUpdate=ce,W.hemisphereLights.needsUpdate=ce}function Os(W){return W.isMeshLambertMaterial||W.isMeshToonMaterial||W.isMeshPhongMaterial||W.isMeshStandardMaterial||W.isShadowMaterial||W.isShaderMaterial&&W.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(W,ce,ye){Te.get(W.texture).__webglTexture=ce,Te.get(W.depthTexture).__webglTexture=ye;const he=Te.get(W);he.__hasExternalTextures=!0,he.__hasExternalTextures&&(he.__autoAllocateDepthBuffer=ye===void 0,he.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),he.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(W,ce){const ye=Te.get(W);ye.__webglFramebuffer=ce,ye.__useDefaultFramebuffer=ce===void 0},this.setRenderTarget=function(W,ce=0,ye=0){C=W,E=ce,M=ye;let he=!0,Se=null,qe=!1,Ze=!1;if(W){const ot=Te.get(W);ot.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(U.FRAMEBUFFER,null),he=!1):ot.__webglFramebuffer===void 0?le.setupRenderTarget(W):ot.__hasExternalTextures&&le.rebindTextures(W,Te.get(W.texture).__webglTexture,Te.get(W.depthTexture).__webglTexture);const dt=W.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(Ze=!0);const tt=Te.get(W).__webglFramebuffer;W.isWebGLCubeRenderTarget?(Array.isArray(tt[ce])?Se=tt[ce][ye]:Se=tt[ce],qe=!0):fe.isWebGL2&&W.samples>0&&le.useMultisampledRTT(W)===!1?Se=Te.get(W).__webglMultisampledFramebuffer:Array.isArray(tt)?Se=tt[ye]:Se=tt,L.copy(W.viewport),k.copy(W.scissor),I=W.scissorTest}else L.copy(pe).multiplyScalar(G).floor(),k.copy(re).multiplyScalar(G).floor(),I=ae;if(ue.bindFramebuffer(U.FRAMEBUFFER,Se)&&fe.drawBuffers&&he&&ue.drawBuffers(W,Se),ue.viewport(L),ue.scissor(k),ue.setScissorTest(I),qe){const ot=Te.get(W.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ot.__webglTexture,ye)}else if(Ze){const ot=Te.get(W.texture),dt=ce||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,ot.__webglTexture,ye||0,dt)}T=-1},this.readRenderTargetPixels=function(W,ce,ye,he,Se,qe,Ze){if(!(W&&W.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=Te.get(W).__webglFramebuffer;if(W.isWebGLCubeRenderTarget&&Ze!==void 0&&(at=at[Ze]),at){ue.bindFramebuffer(U.FRAMEBUFFER,at);try{const ot=W.texture,dt=ot.format,tt=ot.type;if(dt!==ni&&Le.convert(dt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const b=tt===Ta&&(se.has("EXT_color_buffer_half_float")||fe.isWebGL2&&se.has("EXT_color_buffer_float"));if(tt!==Yi&&Le.convert(tt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(tt===Hi&&(fe.isWebGL2||se.has("OES_texture_float")||se.has("WEBGL_color_buffer_float")))&&!b){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ce>=0&&ce<=W.width-he&&ye>=0&&ye<=W.height-Se&&U.readPixels(ce,ye,he,Se,Le.convert(dt),Le.convert(tt),qe)}finally{const ot=C!==null?Te.get(C).__webglFramebuffer:null;ue.bindFramebuffer(U.FRAMEBUFFER,ot)}}},this.copyFramebufferToTexture=function(W,ce,ye=0){const he=Math.pow(2,-ye),Se=Math.floor(ce.image.width*he),qe=Math.floor(ce.image.height*he);le.setTexture2D(ce,0),U.copyTexSubImage2D(U.TEXTURE_2D,ye,0,0,W.x,W.y,Se,qe),ue.unbindTexture()},this.copyTextureToTexture=function(W,ce,ye,he=0){const Se=ce.image.width,qe=ce.image.height,Ze=Le.convert(ye.format),at=Le.convert(ye.type);le.setTexture2D(ye,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,ye.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ye.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,ye.unpackAlignment),ce.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,he,W.x,W.y,Se,qe,Ze,at,ce.image.data):ce.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,he,W.x,W.y,ce.mipmaps[0].width,ce.mipmaps[0].height,Ze,ce.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,he,W.x,W.y,Ze,at,ce.image),he===0&&ye.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(W,ce,ye,he,Se=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const qe=W.max.x-W.min.x+1,Ze=W.max.y-W.min.y+1,at=W.max.z-W.min.z+1,ot=Le.convert(he.format),dt=Le.convert(he.type);let tt;if(he.isData3DTexture)le.setTexture3D(he,0),tt=U.TEXTURE_3D;else if(he.isDataArrayTexture)le.setTexture2DArray(he,0),tt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,he.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,he.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,he.unpackAlignment);const b=U.getParameter(U.UNPACK_ROW_LENGTH),A=U.getParameter(U.UNPACK_IMAGE_HEIGHT),z=U.getParameter(U.UNPACK_SKIP_PIXELS),H=U.getParameter(U.UNPACK_SKIP_ROWS),N=U.getParameter(U.UNPACK_SKIP_IMAGES),q=ye.isCompressedTexture?ye.mipmaps[0]:ye.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,q.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,q.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,W.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,W.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,W.min.z),ye.isDataTexture||ye.isData3DTexture?U.texSubImage3D(tt,Se,ce.x,ce.y,ce.z,qe,Ze,at,ot,dt,q.data):ye.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(tt,Se,ce.x,ce.y,ce.z,qe,Ze,at,ot,q.data)):U.texSubImage3D(tt,Se,ce.x,ce.y,ce.z,qe,Ze,at,ot,dt,q),U.pixelStorei(U.UNPACK_ROW_LENGTH,b),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,A),U.pixelStorei(U.UNPACK_SKIP_PIXELS,z),U.pixelStorei(U.UNPACK_SKIP_ROWS,H),U.pixelStorei(U.UNPACK_SKIP_IMAGES,N),Se===0&&he.generateMipmaps&&U.generateMipmap(tt),ue.unbindTexture()},this.initTexture=function(W){W.isCubeTexture?le.setTextureCube(W,0):W.isData3DTexture?le.setTexture3D(W,0):W.isDataArrayTexture||W.isCompressedArrayTexture?le.setTexture2DArray(W,0):le.setTexture2D(W,0),ue.unbindTexture()},this.resetState=function(){E=0,M=0,C=null,ue.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?Ar:s_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ar?Ot:fi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class cw extends b_{}cw.prototype.isWebGL1Renderer=!0;class fw extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}const Ed={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class uw{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(p){o++,s===!1&&r.onStart!==void 0&&r.onStart(p,a,o),s=!0},this.itemEnd=function(p){a++,r.onProgress!==void 0&&r.onProgress(p,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return l?l(p):p},this.setURLModifier=function(p){return l=p,this},this.addHandler=function(p,d){return c.push(p,d),this},this.removeHandler=function(p){const d=c.indexOf(p);return d!==-1&&c.splice(d,2),this},this.getHandler=function(p){for(let d=0,g=c.length;d<g;d+=2){const S=c[d],_=c[d+1];if(S.global&&(S.lastIndex=0),S.test(p))return _}return null}}}const hw=new uw;class nu{constructor(e){this.manager=e!==void 0?e:hw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}nu.DEFAULT_MATERIAL_NAME="__DEFAULT";class dw extends nu{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ed.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=Ma("img");function l(){p(),Ed.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){p(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function p(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class pw extends nu{constructor(e){super(e)}load(e,n,i,r){const s=new An,a=new dw(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class mw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=bd();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function bd(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jf);class _w{constructor(){this.bindAll(),this.vert=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
      `,this.frag=`
      varying vec2 vUv;
  
      uniform sampler2D texture1;
      uniform sampler2D texture2;
      uniform sampler2D disp;
  
      uniform float dispPower;
      uniform float intensity;
  
      uniform vec2 size;
      uniform vec2 res;
  
      vec2 backgroundCoverUv( vec2 screenSize, vec2 imageSize, vec2 uv ) {
        float screenRatio = screenSize.x / screenSize.y;
        float imageRatio = imageSize.x / imageSize.y;
        vec2 newSize = screenRatio < imageRatio 
            ? vec2(imageSize.x * (screenSize.y / imageSize.y), screenSize.y)
            : vec2(screenSize.x, imageSize.y * (screenSize.x / imageSize.x));
        vec2 newOffset = (screenRatio < imageRatio 
            ? vec2((newSize.x - screenSize.x) / 2.0, 0.0) 
            : vec2(0.0, (newSize.y - screenSize.y) / 2.0)) / newSize;
        return uv * screenSize / newSize + newOffset;
      }
  
      void main() {
        vec2 uv = vUv;
        
        vec4 disp = texture2D(disp, uv);
        vec2 dispVec = vec2(disp.x, disp.y);
        
        vec2 distPos1 = uv + (dispVec * intensity * dispPower);
        vec2 distPos2 = uv + (dispVec * -(intensity * (1.0 - dispPower)));
        
        vec4 _texture1 = texture2D(texture1, distPos1);
        vec4 _texture2 = texture2D(texture2, distPos2);
        
        gl_FragColor = mix(_texture1, _texture2, dispPower);
      }
      `,this.el=document.querySelector(".js-slider"),this.inner=this.el.querySelector(".js-slider__inner"),this.slides=[...this.el.querySelectorAll(".js-slide")],this.bullets=[...this.el.querySelectorAll(".js-slider-bullet")],this.renderer=null,this.scene=null,this.clock=null,this.camera=null,this.images=["./images/bg1.jpg","./images/bg2.jpg","./images/bg3.jpg","./images/bg4.jpg"],this.data={current:0,next:1,total:this.images.length-1,delta:0},this.state={animating:!1,text:!1,initial:!0},this.textures=null,this.init()}bindAll(){["render","nextSlide"].forEach(e=>this[e]=this[e].bind(this))}setStyles(){this.slides.forEach((e,n)=>{n!==0&&TweenMax.set(e,{autoAlpha:0})}),this.bullets.forEach((e,n)=>{if(n===0)return;const i=e.querySelector(".js-slider-bullet__text"),r=e.querySelector(".js-slider-bullet__line");TweenMax.set(i,{alpha:.25}),TweenMax.set(r,{scaleX:0,transformOrigin:"left"})})}cameraSetup(){this.camera=new x_(this.el.offsetWidth/-2,this.el.offsetWidth/2,this.el.offsetHeight/2,this.el.offsetHeight/-2,1,1e3),this.camera.lookAt(this.scene.position),this.camera.position.z=1}setup(){this.scene=new fw,this.clock=new mw(!0),this.renderer=new b_({alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.el.offsetWidth,this.el.offsetHeight),this.inner.appendChild(this.renderer.domElement)}loadTextures(){const e=new pw;e.crossOrigin="",this.textures=[],this.images.forEach((n,i)=>{const r=e.load(n+"?v="+Date.now(),this.render);r.minFilter=Sn,r.generateMipmaps=!1,i===0&&this.mat&&(this.mat.uniforms.size.value=[r.image.naturalWidth,r.image.naturalHeight]),this.textures.push(r)}),this.disp=e.load("./images/disp_reference.png",this.render),this.disp.magFilter=this.disp.minFilter=Sn,this.disp.wrapS=this.disp.wrapT=jo}createMesh(){this.mat=new tr({uniforms:{dispPower:{type:"f",value:0},intensity:{type:"f",value:.5},res:{value:new wt(window.innerWidth,window.innerHeight)},size:{value:new wt(1,1)},texture1:{type:"t",value:this.textures[0]},texture2:{type:"t",value:this.textures[1]},disp:{type:"t",value:this.disp}},transparent:!0,vertexShader:this.vert,fragmentShader:this.frag});const e=new bl(this.el.offsetWidth,this.el.offsetHeight,1),n=new Ai(e,this.mat);this.scene.add(n)}transitionNext(){TweenMax.to(this.mat.uniforms.dispPower,2,{value:1,ease:Expo.easeInOut,onUpdate:this.render,onComplete:()=>{this.mat.uniforms.dispPower.value=0,this.changeTexture(),this.render.bind(this),this.state.animating=!1}})}prevSlide(){}nextSlide(){this.state.animating||(this.state.animating=!0,this.transitionNext(),this.data.current=this.data.current===this.data.total?0:this.data.current+1,this.data.next=this.data.current===this.data.total?0:this.data.current+1,window.clearInterval(this.autoTimer),this.timer())}previousSlide(){this.state.animating||(this.state.animating=!0,this.data.current=this.data.current===0?this.data.total:this.data.current-1,this.data.next=this.data.current===0?this.data.total:this.data.current-1,this.transitionNext())}changeTexture(){this.mat.uniforms.texture1.value=this.textures[this.data.current],this.mat.uniforms.texture2.value=this.textures[this.data.next]}listeners(){}timer(){this.autoTimer=window.setInterval(this.nextSlide,5e3)}render(){this.renderer.render(this.scene,this.camera)}init(){this.setup(),this.cameraSetup(),this.loadTextures(),this.createMesh(),this.setStyles(),this.render(),this.timer()}}const gw=[{id:"1",name:"Wedding Rings",imgSrc:"weddingrings.png"},{id:"2",name:"Gold Coins",imgSrc:"goldcoin.png"},{id:"3",name:"Pendants",imgSrc:"pendants.png"},{id:"4",name:"Earrings",imgSrc:"earrings.png"},{id:"5",name:"Neckwear",imgSrc:"neckwear.png"},{id:"6",name:"Nose Pins",imgSrc:"nosepins.png"},{id:"7",name:"Chains",imgSrc:"chains.png"},{id:"8",name:"Bangles",imgSrc:"bangles.png"},{id:"9",name:"Bracelets",imgSrc:"bracelets.png"},{id:"10",name:"Mangalsutras",imgSrc:"mangalsutras.png"}],vw=[{id:"1",name:"Dor",imgSrc:"dor.png"},{id:"2",name:"Exclusive Coins",imgSrc:"exclusivecoins.png"},{id:"3",name:"Stunnning Every Ear",imgSrc:"stunningear.png"}];let Ys;const yw=function(){return Ys=Df({props:[]},{properties:[]}),Ys.component("headercmp",{props:[],data(){return{}},created(){},mounted(){},methods:{},template:`
        <div class="headerPanel" :style="{'opacity': showPropertyMode ? '0.5':'1'}">
            <figure class="logo">
                <img src="./images/tanishqlogo.svg">
            </figure>
            <div class="searchbox"><span class="searchplaceholder">Search for Gold Jewellery, Diamond Jewellery and more...</span></div>
            <nav id="navright" class="nav">
                <ul class="slider-ul">
                    <li class="slider-li">
                    <a class="sliderA is-active" href="/Jewellery/index.html"><span class="navSpan">Home</span></a>
                    </li>
                    <li class="slider-li">
                            <a class="sliderA" href="#"><span class="navSpan">Collection</span></a>
                    </li>
                    <li class="slider-li">
                            <a class="sliderA" href="#"><span class="navSpan">About</span></a>
                    </li>
                    <li class="slider-li">
                    <a class="sliderA" href="#">
                        <span>Account</span>
                    </a>
                    </li>
                    <li class="slider-li">
                    <a class="sliderA" href="#">
                        <span>Cart</span>
                        <div class="cart-total">0</div>
                    </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="menuNavBar">
            <nav class="nav">
                <ul class="slider-ul">
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span class="navSpan">All jewellery</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span class="navSpan">Gold</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span class="navSpan">Diamond</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>Earrings</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>Rings</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>Wedding Rings</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>Rivaah</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>MIA</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>More</span></a>
                    </li>
                </ul>
            </nav>
        </div>
    `}),Ys.component("footercmp",{props:[],data(){return{}},created(){},mounted(){},methods:{},template:`
        <footer class="footerBlock">
        <div style="display:flex; flex-direction:row;">
        <div style="margin-left:4em;width:20em"><h2 class="footerTitle">Useful Links</h2>
            <ul id="collapsible-links" class="menu-footer content">
            <li><a class="gtm-footer-link" href="#" title="Delivery Information" target="_blank">Delivery Information</a></li>
            <li><a class="gtm-footer-link" href="#" title="International Shipping" target="_blank">International Shipping</a></li>
            <li><a class="gtm-footer-link" href="#" title="Payment Options" target="_blank">Payment Options</a></li>
            <li><a class="gtm-footer-link" href="#" title="Track your Order" target="_blank">Track your Order</a></li>
            <li><a class="gtm-footer-link" href="#" title="Returns" target="_blank">Returns</a></li>
            <li><a class="gtm-footer-link" href="#" title="Find a Store" target="_blank">Find a Store</a></li>
            </ul>
        </div>
        <div style="margin-left:4em;width:20em"><h2 class="footerTitle">Information</h2>
            <ul id="collapsible-links" class="menu-footer content">
            <li><a class="gtm-footer-link" href="#" title="Delivery Information" target="_blank">Careers</a></li>
            <li><a class="gtm-footer-link" href="#" title="International Shipping" target="_blank">Blog</a></li>
            <li><a class="gtm-footer-link" href="#" title="Payment Options" target="_blank">Offers & Contest Details</a></li>
            <li><a class="gtm-footer-link" href="#" title="Track your Order" target="_blank">Help & FAQs</a></li>
            <li><a class="gtm-footer-link" href="#" title="Returns" target="_blank">About Tanishq</a></li>
            </ul>
        </div>
        <div style="margin-left:4em;width:20em"><h2 class="footerTitle">Contact Us</h2>
            <ul id="collapsible-links" class="menu-footer content">
            <li><a class="gtm-footer-link" href="#" title="Delivery Information" target="_blank">Write to Us</a></li>
            <li><a class="gtm-footer-link" href="#" title="International Shipping" target="_blank">1800-266-0123</a></li>
            <li><a class="gtm-footer-link" href="#" title="Payment Options" target="_blank">Chat with Us</a></li>
            </ul>
        </div>
        <div style="margin-left:4em;width:20em"><h2 class="footerTitle">Download</h2>
            <div>
            <a class="gtm-footer-link" href="#">
                <img class="app-download appstore-img" src="./images/appstore.png" alt="appstore">
            </a>
            <a class="gtm-footer-link" href="#">
                <img class="app-download" src="./images/playstore.png" alt="sdf">
            </a>
            </div>
        </div>
        </div>
        <div>
            <p style="margin-left:2em; font-size:large; color:red">**This is a demo website for training purpose only. It has no connection with or have intention to replicate the original Tanishq website.</p>
        </div>
        </footer>
    `}),Ys.component("app",{props:[],data(){return{categories:[],categoryColSize:5,collections:[],collectionColSize:3}},created(){this.categories=gw,this.collections=vw},mounted(){this.slider=new _w},methods:{nextSlide(){this.slider.nextSlide()},previousSlide(){this.slider.previousSlide()},getCategoryRowNum(){return Math.ceil(this.categories.length/this.categoryColSize)},getCategoryIndex(t,e){return(t-1)*this.categoryColSize+e},isCellAvailable(t,e){return!(this.getCategoryIndex(t,e)>this.categories.length)},getCollectionRowNum(){return Math.ceil(this.collections.length/this.collectionColSize)},getCollectionIndex(t,e){return(t-1)*this.collectionColSize+e},isCollectionCellAvailable(t,e){return!(this.getCollectionIndex(t,e)>this.collections.length)},openCategory(t){location.href="/Jewellery/weddingrings.html"}},template:`
        <headercmp></headercmp>
        <div class="slider js-slider">
            <div class="slider__inner js-slider__inner"></div>
            <div id="sliderControl">
                <div class="sliderControlButton" @click="previousSlide()"><img src="./images/leftarrow.svg" 
                    style="object-contain:contain;height:1.5em;width:1.5em;margin-left: 0.25rem;">
                </div>
                <div class="sliderControlButton" style="right:2em;" @click="nextSlide()"><img src="./images/rightarrow.svg" 
                    style="object-contain:contain;height:1.5em;width:1.5em;margin-left: 0.5em;">
                </div>
            </div>
            <div id="sliderExploreButton">
            </div>
        </div>
        <div class="categoryHeadBlock">
            <div class="categoryHead"><h4>Shop By Category</h4></div>
            <div class="categoryHeadSub"><p>Browse through your favorite categories. We've got them all!</p></div>
            <img src="./images/Line-Design.svg" style="margin-top: -20px;"/>
        </div>
        <div class="categoryBlock">
            <table class="catagoryTable">
                <tr v-for="row in Number(getCategoryRowNum())" style="padding-bottom:1em">
                    <td class="categoryGrid" v-for="col in Number(categoryColSize)">
                        <div class="categoryItemBlock" v-if="isCellAvailable(row,col)" @click="openCategory(categories[getCategoryIndex(row,col)-1])">
                            <div class="categoryImgContainer"><img style="width:100%" :src="'./images/'+ categories[getCategoryIndex(row,col)-1].imgSrc"></div>
                            <div class="categoryTitleContainer">
                                <h4 style="text-align:center">{{categories[getCategoryIndex(row,col)-1].name}}</h4>
                                <span class="exploreButton">Explore <span class="hide">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span> ></span>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <div class="categoryHeadBlock">
            <div class="categoryHead"><h4>Shop By Collections</h4></div>
            <div class="categoryHeadSub"><p>Whatever the occasion, we've got a beautiful piece of jewellery for you.</p></div>
            <img src="./images/Line-Design.svg" style="margin-top: -20px;"/>
        </div>
        <div class="categoryBlock">
        <table class="catagoryTable">
            <tr v-for="row in Number(getCollectionRowNum())" style="padding-bottom:1em">
                <td class="categoryGrid" v-for="col in Number(collectionColSize)">
                    <div class="categoryItemBlock" style="width:95%" v-if="isCollectionCellAvailable(row,col)">
                        <div class="categoryImgContainer"><img style="width:100%" :src="'./images/'+ collections[getCategoryIndex(row,col)-1].imgSrc"></div>
                        <div class="categoryTitleContainer" style="flex-direction: row;justify-content: flex-start; margin-bottom:0">
                            <h3 style="text-align:left;margin-left:1em;width:50%">{{collections[getCollectionIndex(row,col)-1].name}}</h3>
                            <span class="exploreButton" style="float:right;justify-content: center; align-items: center;display:flex;">
                                Explore &nbsp;<span class="hide">&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;</span> ></span>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    <div class="categoryHeadBlock">
        <div class="categoryHead"><h4>Connect With Us</h4></div>
        <div class="categoryHeadSub"><p>We are always available to guide you at your convenience.</p></div>
        <img src="./images/Line-Design.svg" style="margin-top: -20px;"/>
    </div>
    
    <footercmp></footercmp>
        `}),Ys};let js;const xw=function(){return js=Df({props:[]},{properties:[]}),js.component("headercmp",{props:[],data(){return{}},created(){},mounted(){},methods:{},template:`
        <div class="headerPanel" :style="{'opacity': showPropertyMode ? '0.5':'1'}">
            <figure class="logo">
                <img src="./images/tanishqlogo.svg">
            </figure>
            <div class="searchbox"><span class="searchplaceholder">Search for Gold Jewellery, Diamond Jewellery and more...</span></div>
            <nav id="navright" class="nav">
                <ul class="slider-ul">
                    <li class="slider-li">
                    <a class="sliderA" href="/Jewellery/index.html"><span class="navSpan">Home</span></a>
                    </li>
                    <li class="slider-li">
                            <a class="sliderA" href="#"><span class="navSpan">Collection</span></a>
                    </li>
                    <li class="slider-li">
                            <a class="sliderA" href="#"><span class="navSpan">About</span></a>
                    </li>
                    <li class="slider-li">
                    <a class="sliderA" href="#">
                        <span>Account</span>
                    </a>
                    </li>
                    <li class="slider-li">
                    <a class="sliderA" href="#">
                        <span>Cart</span>
                        <div class="cart-total">0</div>
                    </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="menuNavBar">
            <nav class="nav">
                <ul class="slider-ul">
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span class="navSpan">All jewellery</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span class="navSpan">Gold</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span class="navSpan">Diamond</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>Earrings</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>Rings</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>Wedding Rings</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>Rivaah</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>MIA</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>More</span></a>
                    </li>
                </ul>
            </nav>
        </div>
        `}),js.component("footercmp",{props:[],data(){return{}},created(){},mounted(){},methods:{},template:`
            <footer class="footerBlock">
            <div style="display:flex; flex-direction:row;">
            <div style="margin-left:4em;width:20em"><h2 class="footerTitle">Useful Links</h2>
                <ul id="collapsible-links" class="menu-footer content">
                <li><a class="gtm-footer-link" href="#" title="Delivery Information" target="_blank">Delivery Information</a></li>
                <li><a class="gtm-footer-link" href="#" title="International Shipping" target="_blank">International Shipping</a></li>
                <li><a class="gtm-footer-link" href="#" title="Payment Options" target="_blank">Payment Options</a></li>
                <li><a class="gtm-footer-link" href="#" title="Track your Order" target="_blank">Track your Order</a></li>
                <li><a class="gtm-footer-link" href="#" title="Returns" target="_blank">Returns</a></li>
                <li><a class="gtm-footer-link" href="#" title="Find a Store" target="_blank">Find a Store</a></li>
                </ul>
            </div>
            <div style="margin-left:4em;width:20em"><h2 class="footerTitle">Information</h2>
                <ul id="collapsible-links" class="menu-footer content">
                <li><a class="gtm-footer-link" href="#" title="Delivery Information" target="_blank">Careers</a></li>
                <li><a class="gtm-footer-link" href="#" title="International Shipping" target="_blank">Blog</a></li>
                <li><a class="gtm-footer-link" href="#" title="Payment Options" target="_blank">Offers & Contest Details</a></li>
                <li><a class="gtm-footer-link" href="#" title="Track your Order" target="_blank">Help & FAQs</a></li>
                <li><a class="gtm-footer-link" href="#" title="Returns" target="_blank">About Tanishq</a></li>
                </ul>
            </div>
            <div style="margin-left:4em;width:20em"><h2 class="footerTitle">Contact Us</h2>
                <ul id="collapsible-links" class="menu-footer content">
                <li><a class="gtm-footer-link" href="#" title="Delivery Information" target="_blank">Write to Us</a></li>
                <li><a class="gtm-footer-link" href="#" title="International Shipping" target="_blank">1800-266-0123</a></li>
                <li><a class="gtm-footer-link" href="#" title="Payment Options" target="_blank">Chat with Us</a></li>
                </ul>
            </div>
            <div style="margin-left:4em;width:20em"><h2 class="footerTitle">Download</h2>
                <div>
                <a class="gtm-footer-link" href="#">
                    <img class="app-download appstore-img" src="./images/appstore.png" alt="appstore">
                </a>
                <a class="gtm-footer-link" href="#">
                    <img class="app-download" src="./images/playstore.png" alt="sdf">
                </a>
                </div>
            </div>
            </div>
            <div>
                <p style="margin-left:2em; font-size:large; color:red">**This is a demo website for training purpose only. It has no connection with or have intention to replicate the original Tanishq website.</p>
            </div>
            </footer>
            `}),js.component("wedapp",{props:[],data(){return{categories:[],categoryColSize:5,collections:[],collectionColSize:3}},created(){},mounted(){},methods:{},template:`
        <headercmp></headercmp>
        <div id="weddingRingAdArea">
            <div style="position:absolute;top: 25vh;left: 4em;">
            <h1 id="weddHead">Your loved ones are unique,</h1>
            <h3 id="weddSubHead">So should be their Jewels.</h3>
            <p id="weddsub">Customize your uniqe ring with realistic graphics and pure beauty of the collection.</p>
            <div id="customizeButton">
                <span style="font-size: larger;padding-left: 1em;">Start now</span>
                <div id="customizeButtonCircle"><img style="height:1.2em;width:1.2em" src="./images/edit.svg"/></div>
            </div>
            </div>
        </div>
        <footercmp></footercmp>
        `}),js},Sw=function(){yw().mount("#app")},Tw=function(){xw().mount("#weddingApp")};function Mw(){const t=document.getElementById("mainScript");t.getAttribute("page")==="mainapp"?Sw():t.getAttribute("page")==="weddingrings"&&Tw()}Mw();/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/var Nt=typeof Kn<"u"&&Kn.exports&&typeof global<"u"?global:globalThis||window;(Nt._gsQueue||(Nt._gsQueue=[])).push(function(){Nt._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,n){var i=function(v){var h=[],u=v.length,f;for(f=0;f!==u;h.push(v[f++]));return h},r=function(v,h,u){var f=v.cycle,y,E;for(y in f)E=f[y],v[y]=typeof E=="function"?E(u,h[u],h):E[u%E.length];delete v.cycle},s=function(v){if(typeof v=="function")return v;var h=typeof v=="object"?v:{each:v},u=h.ease,f=h.from||0,y=h.base||0,E={},M=isNaN(f),C=h.axis,T={center:.5,end:1}[f]||0;return function(w,L,k){var I=(k||h).length,O=E[I],F,X,Z,G,K,me,pe,re,ae;if(!O){if(ae=h.grid==="auto"?0:(h.grid||[1/0])[0],!ae){for(pe=-1/0;pe<(pe=k[ae++].getBoundingClientRect().left)&&ae<I;);ae--}for(O=E[I]=[],F=M?Math.min(ae,I)*T-.5:f%ae,X=M?I*T/ae-.5:f/ae|0,pe=0,re=1/0,me=0;me<I;me++)Z=me%ae-F,G=X-(me/ae|0),O[me]=K=C?Math.abs(C==="y"?G:Z):Math.sqrt(Z*Z+G*G),K>pe&&(pe=K),K<re&&(re=K);O.max=pe-re,O.min=re,O.v=I=h.amount||h.each*(ae>I?I-1:C?C==="y"?I/ae:ae:Math.max(ae,I/ae))||0,O.b=I<0?y-I:y}return I=(O[w]-O.min)/O.max,O.b+(u?u.getRatio(I):I)*O.v}},a=function(v,h,u){n.call(this,v,h,u),this._cycle=0,this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._repeat&&this._uncache(!0),this.render=a.prototype.render},o=1e-8,l=n._internals,c=l.isSelector,p=l.isArray,d=a.prototype=n.to({},.1,{}),g=[];a.version="2.1.3",d.constructor=a,d.kill()._gc=!1,a.killTweensOf=a.killDelayedCallsTo=n.killTweensOf,a.getTweensOf=n.getTweensOf,a.lagSmoothing=n.lagSmoothing,a.ticker=n.ticker,a.render=n.render,a.distribute=s,d.invalidate=function(){return this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),n.prototype.invalidate.call(this)},d.updateTo=function(v,h){var u=this,f=u.ratio,y=u.vars.immediateRender||v.immediateRender,E;h&&u._startTime<u._timeline._time&&(u._startTime=u._timeline._time,u._uncache(!1),u._gc?u._enabled(!0,!1):u._timeline.insert(u,u._startTime-u._delay));for(E in v)u.vars[E]=v[E];if(u._initted||y){if(h)u._initted=!1,y&&u.render(0,!0,!0);else if(u._gc&&u._enabled(!0,!1),u._notifyPluginsOfEnabled&&u._firstPT&&n._onPluginEvent("_onDisable",u),u._time/u._duration>.998){var M=u._totalTime;u.render(0,!0,!1),u._initted=!1,u.render(M,!0,!1)}else if(u._initted=!1,u._init(),u._time>0||y)for(var C=1/(1-f),T=u._firstPT,w;T;)w=T.s+T.c,T.c*=C,T.s=w-T.c,T=T._next}return u},d.render=function(v,h,u){this._initted||this._duration===0&&this.vars.repeat&&this.invalidate();var f=this,y=f._dirty?f.totalDuration():f._totalDuration,E=f._time,M=f._totalTime,C=f._cycle,T=f._duration,w=f._rawPrevTime,L,k,I,O,F,X,Z,G,K;if(v>=y-o&&v>=0?(f._totalTime=y,f._cycle=f._repeat,f._yoyo&&f._cycle&1?(f._time=0,f.ratio=f._ease._calcEnd?f._ease.getRatio(0):0):(f._time=T,f.ratio=f._ease._calcEnd?f._ease.getRatio(1):1),f._reversed||(L=!0,k="onComplete",u=u||f._timeline.autoRemoveChildren),T===0&&(f._initted||!f.vars.lazy||u)&&(f._startTime===f._timeline._duration&&(v=0),(w<0||v<=0&&v>=-o||w===o&&f.data!=="isPause")&&w!==v&&(u=!0,w>o&&(k="onReverseComplete")),f._rawPrevTime=G=!h||v||w===v?v:o)):v<o?(f._totalTime=f._time=f._cycle=0,f.ratio=f._ease._calcEnd?f._ease.getRatio(0):0,(M!==0||T===0&&w>0)&&(k="onReverseComplete",L=f._reversed),v>-o?v=0:v<0&&(f._active=!1,T===0&&(f._initted||!f.vars.lazy||u)&&(w>=0&&(u=!0),f._rawPrevTime=G=!h||v||w===v?v:o)),f._initted||(u=!0)):(f._totalTime=f._time=v,f._repeat!==0&&(O=T+f._repeatDelay,f._cycle=f._totalTime/O>>0,f._cycle!==0&&f._cycle===f._totalTime/O&&M<=v&&f._cycle--,f._time=f._totalTime-f._cycle*O,f._yoyo&&f._cycle&1&&(f._time=T-f._time,K=f._yoyoEase||f.vars.yoyoEase,K&&(f._yoyoEase||(K===!0&&!f._initted?(K=f.vars.ease,f._yoyoEase=K=K?K instanceof Ease?K:typeof K=="function"?new Ease(K,f.vars.easeParams):Ease.map[K]||n.defaultEase:n.defaultEase):f._yoyoEase=K=K===!0?f._ease:K instanceof Ease?K:Ease.map[K]),f.ratio=K?1-K.getRatio((T-f._time)/T):0)),f._time>T?f._time=T:f._time<0&&(f._time=0)),f._easeType&&!K?(F=f._time/T,X=f._easeType,Z=f._easePower,(X===1||X===3&&F>=.5)&&(F=1-F),X===3&&(F*=2),Z===1?F*=F:Z===2?F*=F*F:Z===3?F*=F*F*F:Z===4&&(F*=F*F*F*F),f.ratio=X===1?1-F:X===2?F:f._time/T<.5?F/2:1-F/2):K||(f.ratio=f._ease.getRatio(f._time/T))),E===f._time&&!u&&C===f._cycle){M!==f._totalTime&&f._onUpdate&&(h||f._callback("onUpdate"));return}else if(!f._initted){if(f._init(),!f._initted||f._gc)return;if(!u&&f._firstPT&&(f.vars.lazy!==!1&&f._duration||f.vars.lazy&&!f._duration)){f._time=E,f._totalTime=M,f._rawPrevTime=w,f._cycle=C,l.lazyTweens.push(f),f._lazy=[v,h];return}f._time&&!L&&!K?f.ratio=f._ease.getRatio(f._time/T):L&&this._ease._calcEnd&&!K&&(f.ratio=f._ease.getRatio(f._time===0?0:1))}for(f._lazy!==!1&&(f._lazy=!1),f._active||!f._paused&&f._time!==E&&v>=0&&(f._active=!0),M===0&&(f._initted===2&&v>0&&f._init(),f._startAt&&(v>=0?f._startAt.render(v,!0,u):k||(k="_dummyGS")),f.vars.onStart&&(f._totalTime!==0||T===0)&&(h||f._callback("onStart"))),I=f._firstPT;I;)I.f?I.t[I.p](I.c*f.ratio+I.s):I.t[I.p]=I.c*f.ratio+I.s,I=I._next;f._onUpdate&&(v<0&&f._startAt&&f._startTime&&f._startAt.render(v,!0,u),h||(f._totalTime!==M||k)&&f._callback("onUpdate")),f._cycle!==C&&(h||f._gc||f.vars.onRepeat&&f._callback("onRepeat")),k&&(!f._gc||u)&&(v<0&&f._startAt&&!f._onUpdate&&f._startTime&&f._startAt.render(v,!0,u),L&&(f._timeline.autoRemoveChildren&&f._enabled(!1,!1),f._active=!1),!h&&f.vars[k]&&f._callback(k),T===0&&f._rawPrevTime===o&&G!==o&&(f._rawPrevTime=0))},a.to=function(v,h,u){return new a(v,h,u)},a.from=function(v,h,u){return u.runBackwards=!0,u.immediateRender=u.immediateRender!=!1,new a(v,h,u)},a.fromTo=function(v,h,u,f){return f.startAt=u,f.immediateRender=f.immediateRender!=!1&&u.immediateRender!=!1,new a(v,h,f)},a.staggerTo=a.allTo=function(v,h,u,f,y,E,M){var C=[],T=s(u.stagger||f),w=u.cycle,L=(u.startAt||g).cycle,k,I,O,F;for(p(v)||(typeof v=="string"&&(v=n.selector(v)||v),c(v)&&(v=i(v))),v=v||[],k=v.length-1,O=0;O<=k;O++){I={};for(F in u)I[F]=u[F];if(w&&(r(I,v,O),I.duration!=null&&(h=I.duration,delete I.duration)),L){L=I.startAt={};for(F in u.startAt)L[F]=u.startAt[F];r(I.startAt,v,O)}I.delay=T(O,v[O],v)+(I.delay||0),O===k&&y&&(I.onComplete=function(){u.onComplete&&u.onComplete.apply(u.onCompleteScope||this,arguments),y.apply(M||u.callbackScope||this,E||g)}),C[O]=new a(v[O],h,I)}return C},a.staggerFrom=a.allFrom=function(v,h,u,f,y,E,M){return u.runBackwards=!0,u.immediateRender=u.immediateRender!=!1,a.staggerTo(v,h,u,f,y,E,M)},a.staggerFromTo=a.allFromTo=function(v,h,u,f,y,E,M,C){return f.startAt=u,f.immediateRender=f.immediateRender!=!1&&u.immediateRender!=!1,a.staggerTo(v,h,f,y,E,M,C)},a.delayedCall=function(v,h,u,f,y){return new a(h,0,{delay:v,onComplete:h,onCompleteParams:u,callbackScope:f,onReverseComplete:h,onReverseCompleteParams:u,immediateRender:!1,useFrames:y,overwrite:0})},a.set=function(v,h){return new a(v,0,h)},a.isTweening=function(v){return n.getTweensOf(v,!0).length>0};var S=function(v,h){for(var u=[],f=0,y=v._first;y;)y instanceof n?u[f++]=y:(h&&(u[f++]=y),u=u.concat(S(y,h)),f=u.length),y=y._next;return u},_=a.getAllTweens=function(v){return S(t._rootTimeline,v).concat(S(t._rootFramesTimeline,v))};a.killAll=function(v,h,u,f){h==null&&(h=!0),u==null&&(u=!0);var y=_(f!=!1),E=y.length,M=h&&u&&f,C,T,w;for(w=0;w<E;w++)T=y[w],(M||T instanceof e||(C=T.target===T.vars.onComplete)&&u||h&&!C)&&(v?T.totalTime(T._reversed?0:T.totalDuration()):T._enabled(!1,!1))},a.killChildTweensOf=function(v,h){if(v!=null){var u=l.tweenLookup,f,y,E,M,C;if(typeof v=="string"&&(v=n.selector(v)||v),c(v)&&(v=i(v)),p(v)){for(M=v.length;--M>-1;)a.killChildTweensOf(v[M],h);return}f=[];for(E in u)for(y=u[E].target.parentNode;y;)y===v&&(f=f.concat(u[E].tweens)),y=y.parentNode;for(C=f.length,M=0;M<C;M++)h&&f[M].totalTime(f[M].totalDuration()),f[M]._enabled(!1,!1)}};var R=function(v,h,u,f){h=h!==!1,u=u!==!1,f=f!==!1;for(var y=_(f),E=h&&u&&f,M=y.length,C,T;--M>-1;)T=y[M],(E||T instanceof e||(C=T.target===T.vars.onComplete)&&u||h&&!C)&&T.paused(v)};return a.pauseAll=function(v,h,u){R(!0,v,h,u)},a.resumeAll=function(v,h,u){R(!1,v,h,u)},a.globalTimeScale=function(v){var h=t._rootTimeline,u=n.ticker.time;return arguments.length?(v=v||o,h._startTime=u-(u-h._startTime)*h._timeScale/v,h=t._rootFramesTimeline,u=n.ticker.frame,h._startTime=u-(u-h._startTime)*h._timeScale/v,h._timeScale=t._rootTimeline._timeScale=v,v):h._timeScale},d.progress=function(v,h){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&this._cycle&1?1-v:v)+this._cycle*(this._duration+this._repeatDelay),h):this.duration()?this._time/this._duration:this.ratio},d.totalProgress=function(v,h){return arguments.length?this.totalTime(this.totalDuration()*v,h):this._totalTime/this.totalDuration()},d.time=function(v,h){if(!arguments.length)return this._time;this._dirty&&this.totalDuration();var u=this._duration,f=this._cycle,y=f*(u+this._repeatDelay);return v>u&&(v=u),this.totalTime(this._yoyo&&f&1?u-v+y:this._repeat?v+y:v,h)},d.duration=function(v){return arguments.length?t.prototype.duration.call(this,v):this._duration},d.totalDuration=function(v){return arguments.length?this._repeat===-1?this:this.duration((v-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=this._repeat===-1?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},d.repeat=function(v){return arguments.length?(this._repeat=v,this._uncache(!0)):this._repeat},d.repeatDelay=function(v){return arguments.length?(this._repeatDelay=v,this._uncache(!0)):this._repeatDelay},d.yoyo=function(v){return arguments.length?(this._yoyo=v,this):this._yoyo},a},!0),Nt._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,n){var i=function(f){e.call(this,f);var y=this,E=y.vars,M,C;y._labels={},y.autoRemoveChildren=!!E.autoRemoveChildren,y.smoothChildTiming=!!E.smoothChildTiming,y._sortChildren=!0,y._onUpdate=E.onUpdate;for(C in E)M=E[C],l(M)&&M.join("").indexOf("{self}")!==-1&&(E[C]=y._swapSelfInParams(M));l(E.tweens)&&y.add(E.tweens,0,E.align,E.stagger)},r=1e-8,s=n._internals,a=i._internals={},o=s.isSelector,l=s.isArray,c=s.lazyTweens,p=s.lazyRender,d=Nt._gsDefine.globals,g=function(f){var y={},E;for(E in f)y[E]=f[E];return y},S=function(f,y,E){var M=f.cycle,C,T;for(C in M)T=M[C],f[C]=typeof T=="function"?T(E,y[E],y):T[E%T.length];delete f.cycle},_=a.pauseCallback=function(){},R=function(f){var y=[],E=f.length,M;for(M=0;M!==E;y.push(f[M++]));return y},v=function(f,y,E,M){var C="immediateRender";return C in y||(y[C]=!(E&&E[C]===!1||M)),y},h=function(f){if(typeof f=="function")return f;var y=typeof f=="object"?f:{each:f},E=y.ease,M=y.from||0,C=y.base||0,T={},w=isNaN(M),L=y.axis,k={center:.5,end:1}[M]||0;return function(I,O,F){var X=(F||y).length,Z=T[X],G,K,me,pe,re,ae,Ne,ke,Fe;if(!Z){if(Fe=y.grid==="auto"?0:(y.grid||[1/0])[0],!Fe){for(Ne=-1/0;Ne<(Ne=F[Fe++].getBoundingClientRect().left)&&Fe<X;);Fe--}for(Z=T[X]=[],G=w?Math.min(Fe,X)*k-.5:M%Fe,K=w?X*k/Fe-.5:M/Fe|0,Ne=0,ke=1/0,ae=0;ae<X;ae++)me=ae%Fe-G,pe=K-(ae/Fe|0),Z[ae]=re=L?Math.abs(L==="y"?pe:me):Math.sqrt(me*me+pe*pe),re>Ne&&(Ne=re),re<ke&&(ke=re);Z.max=Ne-ke,Z.min=ke,Z.v=X=y.amount||y.each*(Fe>X?X-1:L?L==="y"?X/Fe:Fe:Math.max(Fe,X/Fe))||0,Z.b=X<0?C-X:C}return X=(Z[I]-Z.min)/Z.max,Z.b+(E?E.getRatio(X):X)*Z.v}},u=i.prototype=new e;return i.version="2.1.3",i.distribute=h,u.constructor=i,u.kill()._gc=u._forcingPlayhead=u._hasPause=!1,u.to=function(f,y,E,M){var C=E.repeat&&d.TweenMax||n;return y?this.add(new C(f,y,E),M):this.set(f,E,M)},u.from=function(f,y,E,M){return this.add((E.repeat&&d.TweenMax||n).from(f,y,v(this,E)),M)},u.fromTo=function(f,y,E,M,C){var T=M.repeat&&d.TweenMax||n;return M=v(this,M,E),y?this.add(T.fromTo(f,y,E,M),C):this.set(f,M,C)},u.staggerTo=function(f,y,E,M,C,T,w,L){var k=new i({onComplete:T,onCompleteParams:w,callbackScope:L,smoothChildTiming:this.smoothChildTiming}),I=h(E.stagger||M),O=E.startAt,F=E.cycle,X,Z;for(typeof f=="string"&&(f=n.selector(f)||f),f=f||[],o(f)&&(f=R(f)),Z=0;Z<f.length;Z++)X=g(E),O&&(X.startAt=g(O),O.cycle&&S(X.startAt,f,Z)),F&&(S(X,f,Z),X.duration!=null&&(y=X.duration,delete X.duration)),k.to(f[Z],y,X,I(Z,f[Z],f));return this.add(k,C)},u.staggerFrom=function(f,y,E,M,C,T,w,L){return E.runBackwards=!0,this.staggerTo(f,y,v(this,E),M,C,T,w,L)},u.staggerFromTo=function(f,y,E,M,C,T,w,L,k){return M.startAt=E,this.staggerTo(f,y,v(this,M,E),C,T,w,L,k)},u.call=function(f,y,E,M){return this.add(n.delayedCall(0,f,y,E),M)},u.set=function(f,y,E){return this.add(new n(f,0,v(this,y,null,!0)),E)},i.exportRoot=function(f,y){f=f||{},f.smoothChildTiming==null&&(f.smoothChildTiming=!0);var E=new i(f),M=E._timeline,C,T,w,L;for(y==null&&(y=!0),M._remove(E,!0),E._startTime=0,E._rawPrevTime=E._time=E._totalTime=M._time,w=M._first;w;)L=w._next,(!y||!(w instanceof n&&w.target===w.vars.onComplete))&&(T=w._startTime-w._delay,T<0&&(C=1),E.add(w,T)),w=L;return M.add(E,0),C&&E.totalDuration(),E},u.add=function(f,y,E,M){var C=this,T,w,L,k,I,O;if(typeof y!="number"&&(y=C._parseTimeOrLabel(y,0,!0,f)),!(f instanceof t))if(f instanceof Array||f&&f.push&&l(f)){for(E=E||"normal",M=M||0,T=y,w=f.length,L=0;L<w;L++)l(k=f[L])&&(k=new i({tweens:k})),C.add(k,T),typeof k!="string"&&typeof k!="function"&&(E==="sequence"?T=k._startTime+k.totalDuration()/k._timeScale:E==="start"&&(k._startTime-=k.delay())),T+=M;return C._uncache(!0)}else{if(typeof f=="string")return C.addLabel(f,y);if(typeof f=="function")f=n.delayedCall(0,f);else throw"Cannot add "+f+" into the timeline; it is not a tween, timeline, function, or string."}if(e.prototype.add.call(C,f,y),(f._time||!f._duration&&f._initted)&&(T=(C.rawTime()-f._startTime)*f._timeScale,(!f._duration||Math.abs(Math.max(0,Math.min(f.totalDuration(),T)))-f._totalTime>1e-5)&&f.render(T,!1,!1)),(C._gc||C._time===C._duration)&&!C._paused&&C._duration<C.duration())for(I=C,O=I.rawTime()>f._startTime;I._timeline;)O&&I._timeline.smoothChildTiming?I.totalTime(I._totalTime,!0):I._gc&&I._enabled(!0,!1),I=I._timeline;return C},u.remove=function(f){if(f instanceof t){this._remove(f,!1);var y=f._timeline=f.vars.useFrames?t._rootFramesTimeline:t._rootTimeline;return f._startTime=(f._paused?f._pauseTime:y._time)-(f._reversed?f.totalDuration()-f._totalTime:f._totalTime)/f._timeScale,this}else if(f instanceof Array||f&&f.push&&l(f)){for(var E=f.length;--E>-1;)this.remove(f[E]);return this}else if(typeof f=="string")return this.removeLabel(f);return this.kill(null,f)},u._remove=function(f,y){e.prototype._remove.call(this,f,y);var E=this._last;return E?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},u.append=function(f,y){return this.add(f,this._parseTimeOrLabel(null,y,!0,f))},u.insert=u.insertMultiple=function(f,y,E,M){return this.add(f,y||0,E,M)},u.appendMultiple=function(f,y,E,M){return this.add(f,this._parseTimeOrLabel(null,y,!0,f),E,M)},u.addLabel=function(f,y){return this._labels[f]=this._parseTimeOrLabel(y),this},u.addPause=function(f,y,E,M){var C=n.delayedCall(0,_,E,M||this);return C.vars.onComplete=C.vars.onReverseComplete=y,C.data="isPause",this._hasPause=!0,this.add(C,f)},u.removeLabel=function(f){return delete this._labels[f],this},u.getLabelTime=function(f){return this._labels[f]!=null?this._labels[f]:-1},u._parseTimeOrLabel=function(f,y,E,M){var C,T;if(M instanceof t&&M.timeline===this)this.remove(M);else if(M&&(M instanceof Array||M.push&&l(M)))for(T=M.length;--T>-1;)M[T]instanceof t&&M[T].timeline===this&&this.remove(M[T]);if(C=typeof f=="number"&&!y?0:this.duration()>99999999999?this.recent().endTime(!1):this._duration,typeof y=="string")return this._parseTimeOrLabel(y,E&&typeof f=="number"&&this._labels[y]==null?f-C:0,E);if(y=y||0,typeof f=="string"&&(isNaN(f)||this._labels[f]!=null)){if(T=f.indexOf("="),T===-1)return this._labels[f]==null?E?this._labels[f]=C+y:y:this._labels[f]+y;y=parseInt(f.charAt(T-1)+"1",10)*Number(f.substr(T+1)),f=T>1?this._parseTimeOrLabel(f.substr(0,T-1),0,E):C}else f==null&&(f=C);return Number(f)+y},u.seek=function(f,y){return this.totalTime(typeof f=="number"?f:this._parseTimeOrLabel(f),y!==!1)},u.stop=function(){return this.paused(!0)},u.gotoAndPlay=function(f,y){return this.play(f,y)},u.gotoAndStop=function(f,y){return this.pause(f,y)},u.render=function(f,y,E){this._gc&&this._enabled(!0,!1);var M=this,C=M._time,T=M._dirty?M.totalDuration():M._totalDuration,w=M._startTime,L=M._timeScale,k=M._paused,I,O,F,X,Z,G,K,me;if(C!==M._time&&(f+=M._time-C),M._hasPause&&!M._forcingPlayhead&&!y){if(f>C)for(I=M._first;I&&I._startTime<=f&&!G;)I._duration||I.data==="isPause"&&!I.ratio&&!(I._startTime===0&&M._rawPrevTime===0)&&(G=I),I=I._next;else for(I=M._last;I&&I._startTime>=f&&!G;)I._duration||I.data==="isPause"&&I._rawPrevTime>0&&(G=I),I=I._prev;G&&(M._time=M._totalTime=f=G._startTime,me=M._startTime+(M._reversed?M._duration-f:f)/M._timeScale)}if(f>=T-r&&f>=0)M._totalTime=M._time=T,M._reversed||M._hasPausedChild()||(O=!0,X="onComplete",Z=!!M._timeline.autoRemoveChildren,M._duration===0&&(f<=0&&f>=-r||M._rawPrevTime<0||M._rawPrevTime===r)&&M._rawPrevTime!==f&&M._first&&(Z=!0,M._rawPrevTime>r&&(X="onReverseComplete"))),M._rawPrevTime=M._duration||!y||f||M._rawPrevTime===f?f:r,f=T+1e-4;else if(f<r)if(M._totalTime=M._time=0,f>-r&&(f=0),(C!==0||M._duration===0&&M._rawPrevTime!==r&&(M._rawPrevTime>0||f<0&&M._rawPrevTime>=0))&&(X="onReverseComplete",O=M._reversed),f<0)M._active=!1,M._timeline.autoRemoveChildren&&M._reversed?(Z=O=!0,X="onReverseComplete"):M._rawPrevTime>=0&&M._first&&(Z=!0),M._rawPrevTime=f;else{if(M._rawPrevTime=M._duration||!y||f||M._rawPrevTime===f?f:r,f===0&&O)for(I=M._first;I&&I._startTime===0;)I._duration||(O=!1),I=I._next;f=0,M._initted||(Z=!0)}else M._totalTime=M._time=M._rawPrevTime=f;if(!((M._time===C||!M._first)&&!E&&!Z&&!G)){if(M._initted||(M._initted=!0),M._active||!M._paused&&M._time!==C&&f>0&&(M._active=!0),C===0&&M.vars.onStart&&(M._time!==0||!M._duration)&&(y||M._callback("onStart")),K=M._time,K>=C)for(I=M._first;I&&(F=I._next,!(K!==M._time||M._paused&&!k));)(I._active||I._startTime<=K&&!I._paused&&!I._gc)&&(G===I&&(M.pause(),M._pauseTime=me),I._reversed?I.render((I._dirty?I.totalDuration():I._totalDuration)-(f-I._startTime)*I._timeScale,y,E):I.render((f-I._startTime)*I._timeScale,y,E)),I=F;else for(I=M._last;I&&(F=I._prev,!(K!==M._time||M._paused&&!k));){if(I._active||I._startTime<=C&&!I._paused&&!I._gc){if(G===I){for(G=I._prev;G&&G.endTime()>M._time;)G.render(G._reversed?G.totalDuration()-(f-G._startTime)*G._timeScale:(f-G._startTime)*G._timeScale,y,E),G=G._prev;G=null,M.pause(),M._pauseTime=me}I._reversed?I.render((I._dirty?I.totalDuration():I._totalDuration)-(f-I._startTime)*I._timeScale,y,E):I.render((f-I._startTime)*I._timeScale,y,E)}I=F}M._onUpdate&&(y||(c.length&&p(),M._callback("onUpdate"))),X&&(M._gc||(w===M._startTime||L!==M._timeScale)&&(M._time===0||T>=M.totalDuration())&&(O&&(c.length&&p(),M._timeline.autoRemoveChildren&&M._enabled(!1,!1),M._active=!1),!y&&M.vars[X]&&M._callback(X)))}},u._hasPausedChild=function(){for(var f=this._first;f;){if(f._paused||f instanceof i&&f._hasPausedChild())return!0;f=f._next}return!1},u.getChildren=function(f,y,E,M){M=M||-9999999999;for(var C=[],T=this._first,w=0;T;)T._startTime<M||(T instanceof n?y!==!1&&(C[w++]=T):(E!==!1&&(C[w++]=T),f!==!1&&(C=C.concat(T.getChildren(!0,y,E)),w=C.length))),T=T._next;return C},u.getTweensOf=function(f,y){var E=this._gc,M=[],C=0,T,w;for(E&&this._enabled(!0,!0),T=n.getTweensOf(f),w=T.length;--w>-1;)(T[w].timeline===this||y&&this._contains(T[w]))&&(M[C++]=T[w]);return E&&this._enabled(!1,!0),M},u.recent=function(){return this._recent},u._contains=function(f){for(var y=f.timeline;y;){if(y===this)return!0;y=y.timeline}return!1},u.shiftChildren=function(f,y,E){E=E||0;for(var M=this._first,C=this._labels,T;M;)M._startTime>=E&&(M._startTime+=f),M=M._next;if(y)for(T in C)C[T]>=E&&(C[T]+=f);return this._uncache(!0)},u._kill=function(f,y){if(!f&&!y)return this._enabled(!1,!1);for(var E=y?this.getTweensOf(y):this.getChildren(!0,!0,!1),M=E.length,C=!1;--M>-1;)E[M]._kill(f,y)&&(C=!0);return C},u.clear=function(f){var y=this.getChildren(!1,!0,!0),E=y.length;for(this._time=this._totalTime=0;--E>-1;)y[E]._enabled(!1,!1);return f!==!1&&(this._labels={}),this._uncache(!0)},u.invalidate=function(){for(var f=this._first;f;)f.invalidate(),f=f._next;return t.prototype.invalidate.call(this)},u._enabled=function(f,y){if(f===this._gc)for(var E=this._first;E;)E._enabled(f,!0),E=E._next;return e.prototype._enabled.call(this,f,y)},u.totalTime=function(f,y,E){this._forcingPlayhead=!0;var M=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,M},u.duration=function(f){return arguments.length?(this.duration()!==0&&f!==0&&this.timeScale(this._duration/f),this):(this._dirty&&this.totalDuration(),this._duration)},u.totalDuration=function(f){if(!arguments.length){if(this._dirty){for(var y=0,E=this,M=E._last,C=999999999999,T,w;M;)T=M._prev,M._dirty&&M.totalDuration(),M._startTime>C&&E._sortChildren&&!M._paused&&!E._calculatingDuration?(E._calculatingDuration=1,E.add(M,M._startTime-M._delay),E._calculatingDuration=0):C=M._startTime,M._startTime<0&&!M._paused&&(y-=M._startTime,E._timeline.smoothChildTiming&&(E._startTime+=M._startTime/E._timeScale,E._time-=M._startTime,E._totalTime-=M._startTime,E._rawPrevTime-=M._startTime),E.shiftChildren(-M._startTime,!1,-9999999999),C=0),w=M._startTime+M._totalDuration/M._timeScale,w>y&&(y=w),M=T;E._duration=E._totalDuration=y,E._dirty=!1}return this._totalDuration}return f&&this.totalDuration()?this.timeScale(this._totalDuration/f):this},u.paused=function(f){if(f===!1&&this._paused)for(var y=this._first;y;)y._startTime===this._time&&y.data==="isPause"&&(y._rawPrevTime=0),y=y._next;return t.prototype.paused.apply(this,arguments)},u.usesFrames=function(){for(var f=this._timeline;f._timeline;)f=f._timeline;return f===t._rootFramesTimeline},u.rawTime=function(f){return f&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(f)-this._startTime)*this._timeScale},i},!0),Nt._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,n){var i=function(d){t.call(this,d),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=!!this.vars.yoyo,this._dirty=!0},r=1e-8,s=e._internals,a=s.lazyTweens,o=s.lazyRender,l=Nt._gsDefine.globals,c=new n(null,null,1,0),p=i.prototype=new t;return p.constructor=i,p.kill()._gc=!1,i.version="2.1.3",p.invalidate=function(){return this._yoyo=!!this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},p.addCallback=function(d,g,S,_){return this.add(e.delayedCall(0,d,S,_),g)},p.removeCallback=function(d,g){if(d)if(g==null)this._kill(null,d);else for(var S=this.getTweensOf(d,!1),_=S.length,R=this._parseTimeOrLabel(g);--_>-1;)S[_]._startTime===R&&S[_]._enabled(!1,!1);return this},p.removePause=function(d){return this.removeCallback(t._internals.pauseCallback,d)},p.tweenTo=function(d,g){g=g||{};var S={ease:c,useFrames:this.usesFrames(),immediateRender:!1,lazy:!1},_=g.repeat&&l.TweenMax||e,R,v,h;for(v in g)S[v]=g[v];return S.time=this._parseTimeOrLabel(d),R=Math.abs(Number(S.time)-this._time)/this._timeScale||.001,h=new _(this,R,S),S.onStart=function(){h.target.paused(!0),h.vars.time!==h.target.time()&&R===h.duration()&&!h.isFromTo&&h.duration(Math.abs(h.vars.time-h.target.time())/h.target._timeScale).render(h.time(),!0,!0),g.onStart&&g.onStart.apply(g.onStartScope||g.callbackScope||h,g.onStartParams||[])},h},p.tweenFromTo=function(d,g,S){S=S||{},d=this._parseTimeOrLabel(d),S.startAt={onComplete:this.seek,onCompleteParams:[d],callbackScope:this},S.immediateRender=S.immediateRender!==!1;var _=this.tweenTo(g,S);return _.isFromTo=1,_.duration(Math.abs(_.vars.time-d)/this._timeScale||.001)},p.render=function(d,g,S){this._gc&&this._enabled(!0,!1);var _=this,R=_._time,v=_._dirty?_.totalDuration():_._totalDuration,h=_._duration,u=_._totalTime,f=_._startTime,y=_._timeScale,E=_._rawPrevTime,M=_._paused,C=_._cycle,T,w,L,k,I,O,F,X,Z;if(R!==_._time&&(d+=_._time-R),d>=v-r&&d>=0)_._locked||(_._totalTime=v,_._cycle=_._repeat),_._reversed||_._hasPausedChild()||(w=!0,k="onComplete",I=!!_._timeline.autoRemoveChildren,_._duration===0&&(d<=0&&d>=-r||E<0||E===r)&&E!==d&&_._first&&(I=!0,E>r&&(k="onReverseComplete"))),_._rawPrevTime=_._duration||!g||d||_._rawPrevTime===d?d:r,_._yoyo&&_._cycle&1?_._time=d=0:(_._time=h,d=h+1e-4);else if(d<r)if(_._locked||(_._totalTime=_._cycle=0),_._time=0,d>-r&&(d=0),(R!==0||h===0&&E!==r&&(E>0||d<0&&E>=0)&&!_._locked)&&(k="onReverseComplete",w=_._reversed),d<0)_._active=!1,_._timeline.autoRemoveChildren&&_._reversed?(I=w=!0,k="onReverseComplete"):E>=0&&_._first&&(I=!0),_._rawPrevTime=d;else{if(_._rawPrevTime=h||!g||d||_._rawPrevTime===d?d:r,d===0&&w)for(T=_._first;T&&T._startTime===0;)T._duration||(w=!1),T=T._next;d=0,_._initted||(I=!0)}else h===0&&E<0&&(I=!0),_._time=_._rawPrevTime=d,_._locked||(_._totalTime=d,_._repeat!==0&&(O=h+_._repeatDelay,_._cycle=_._totalTime/O>>0,_._cycle&&_._cycle===_._totalTime/O&&u<=d&&_._cycle--,_._time=_._totalTime-_._cycle*O,_._yoyo&&_._cycle&1&&(_._time=h-_._time),_._time>h?(_._time=h,d=h+1e-4):_._time<0?_._time=d=0:d=_._time));if(_._hasPause&&!_._forcingPlayhead&&!g){if(d=_._time,d>R||_._repeat&&C!==_._cycle)for(T=_._first;T&&T._startTime<=d&&!F;)T._duration||T.data==="isPause"&&!T.ratio&&!(T._startTime===0&&_._rawPrevTime===0)&&(F=T),T=T._next;else for(T=_._last;T&&T._startTime>=d&&!F;)T._duration||T.data==="isPause"&&T._rawPrevTime>0&&(F=T),T=T._prev;F&&(Z=_._startTime+(_._reversed?_._duration-F._startTime:F._startTime)/_._timeScale,F._startTime<h&&(_._time=_._rawPrevTime=d=F._startTime,_._totalTime=d+_._cycle*(_._totalDuration+_._repeatDelay)))}if(_._cycle!==C&&!_._locked){var G=_._yoyo&&(C&1)!==0,K=G===(_._yoyo&&(_._cycle&1)!==0),me=_._totalTime,pe=_._cycle,re=_._rawPrevTime,ae=_._time;if(_._totalTime=C*h,_._cycle<C?G=!G:_._totalTime+=h,_._time=R,_._rawPrevTime=h===0?E-1e-4:E,_._cycle=C,_._locked=!0,R=G?0:h,_.render(R,g,h===0),g||_._gc||_.vars.onRepeat&&(_._cycle=pe,_._locked=!1,_._callback("onRepeat")),R!==_._time||(K&&(_._cycle=C,_._locked=!0,R=G?h+1e-4:-1e-4,_.render(R,!0,!1)),_._locked=!1,_._paused&&!M))return;_._time=ae,_._totalTime=me,_._cycle=pe,_._rawPrevTime=re}if((_._time===R||!_._first)&&!S&&!I&&!F){u!==_._totalTime&&_._onUpdate&&(g||_._callback("onUpdate"));return}else _._initted||(_._initted=!0);if(_._active||!_._paused&&_._totalTime!==u&&d>0&&(_._active=!0),u===0&&_.vars.onStart&&(_._totalTime!==0||!_._totalDuration)&&(g||_._callback("onStart")),X=_._time,X>=R)for(T=_._first;T&&(L=T._next,!(X!==_._time||_._paused&&!M));)(T._active||T._startTime<=_._time&&!T._paused&&!T._gc)&&(F===T&&(_.pause(),_._pauseTime=Z),T._reversed?T.render((T._dirty?T.totalDuration():T._totalDuration)-(d-T._startTime)*T._timeScale,g,S):T.render((d-T._startTime)*T._timeScale,g,S)),T=L;else for(T=_._last;T&&(L=T._prev,!(X!==_._time||_._paused&&!M));){if(T._active||T._startTime<=R&&!T._paused&&!T._gc){if(F===T){for(F=T._prev;F&&F.endTime()>_._time;)F.render(F._reversed?F.totalDuration()-(d-F._startTime)*F._timeScale:(d-F._startTime)*F._timeScale,g,S),F=F._prev;F=null,_.pause(),_._pauseTime=Z}T._reversed?T.render((T._dirty?T.totalDuration():T._totalDuration)-(d-T._startTime)*T._timeScale,g,S):T.render((d-T._startTime)*T._timeScale,g,S)}T=L}_._onUpdate&&(g||(a.length&&o(),_._callback("onUpdate"))),k&&(_._locked||_._gc||(f===_._startTime||y!==_._timeScale)&&(_._time===0||v>=_.totalDuration())&&(w&&(a.length&&o(),_._timeline.autoRemoveChildren&&_._enabled(!1,!1),_._active=!1),!g&&_.vars[k]&&_._callback(k)))},p.getActive=function(d,g,S){var _=[],R=this.getChildren(d||d==null,g||d==null,!!S),v=0,h=R.length,u,f;for(u=0;u<h;u++)f=R[u],f.isActive()&&(_[v++]=f);return _},p.getLabelAfter=function(d){d||d!==0&&(d=this._time);var g=this.getLabelsArray(),S=g.length,_;for(_=0;_<S;_++)if(g[_].time>d)return g[_].name;return null},p.getLabelBefore=function(d){d==null&&(d=this._time);for(var g=this.getLabelsArray(),S=g.length;--S>-1;)if(g[S].time<d)return g[S].name;return null},p.getLabelsArray=function(){var d=[],g=0,S;for(S in this._labels)d[g++]={time:this._labels[S],name:S};return d.sort(function(_,R){return _.time-R.time}),d},p.invalidate=function(){return this._locked=!1,t.prototype.invalidate.call(this)},p.progress=function(d,g){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&this._cycle&1?1-d:d)+this._cycle*(this._duration+this._repeatDelay),g):this._time/this.duration()||0},p.totalProgress=function(d,g){return arguments.length?this.totalTime(this.totalDuration()*d,g):this._totalTime/this.totalDuration()||0},p.totalDuration=function(d){return arguments.length?this._repeat===-1||!d?this:this.timeScale(this.totalDuration()/d):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=this._repeat===-1?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},p.time=function(d,g){if(!arguments.length)return this._time;this._dirty&&this.totalDuration();var S=this._duration,_=this._cycle,R=_*(S+this._repeatDelay);return d>S&&(d=S),this.totalTime(this._yoyo&&_&1?S-d+R:this._repeat?d+R:d,g)},p.repeat=function(d){return arguments.length?(this._repeat=d,this._uncache(!0)):this._repeat},p.repeatDelay=function(d){return arguments.length?(this._repeatDelay=d,this._uncache(!0)):this._repeatDelay},p.yoyo=function(d){return arguments.length?(this._yoyo=d,this):this._yoyo},p.currentLabel=function(d){return arguments.length?this.seek(d,!0):this.getLabelBefore(this._time+r)},i},!0),function(){var t=180/Math.PI,e=[],n=[],i=[],r={},s=Nt._gsDefine.globals,a=function(h,u,f,y){f===y&&(f=y-(y-u)/1e6),h===u&&(u=h+(f-h)/1e6),this.a=h,this.b=u,this.c=f,this.d=y,this.da=y-h,this.ca=f-h,this.ba=u-h},o=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",l=function(h,u,f,y){var E={a:h},M={},C={},T={c:y},w=(h+u)/2,L=(u+f)/2,k=(f+y)/2,I=(w+L)/2,O=(L+k)/2,F=(O-I)/8;return E.b=w+(h-w)/4,M.b=I+F,E.c=M.a=(E.b+M.b)/2,M.c=C.a=(I+O)/2,C.b=O-F,T.b=k+(y-k)/4,C.c=T.a=(C.b+T.b)/2,[E,M,C,T]},c=function(h,u,f,y,E){var M=h.length-1,C=0,T=h[0].a,w,L,k,I,O,F,X,Z,G,K,me,pe,re;for(w=0;w<M;w++)O=h[C],L=O.a,k=O.d,I=h[C+1].d,E?(me=e[w],pe=n[w],re=(pe+me)*u*.25/(y?.5:i[w]||.5),F=k-(k-L)*(y?u*.5:me!==0?re/me:0),X=k+(I-k)*(y?u*.5:pe!==0?re/pe:0),Z=k-(F+((X-F)*(me*3/(me+pe)+.5)/4||0))):(F=k-(k-L)*u*.5,X=k+(I-k)*u*.5,Z=k-(F+X)/2),F+=Z,X+=Z,O.c=G=F,w!==0?O.b=T:O.b=T=O.a+(O.c-O.a)*.6,O.da=k-L,O.ca=G-L,O.ba=T-L,f?(K=l(L,T,G,k),h.splice(C,1,K[0],K[1],K[2],K[3]),C+=4):C++,T=X;O=h[C],O.b=T,O.c=T+(O.d-T)*.4,O.da=O.d-O.a,O.ca=O.c-O.a,O.ba=T-O.a,f&&(K=l(O.a,T,O.c,O.d),h.splice(C,1,K[0],K[1],K[2],K[3]))},p=function(h,u,f,y){var E=[],M,C,T,w,L,k;if(y)for(h=[y].concat(h),C=h.length;--C>-1;)typeof(k=h[C][u])=="string"&&k.charAt(1)==="="&&(h[C][u]=y[u]+Number(k.charAt(0)+k.substr(2)));if(M=h.length-2,M<0)return E[0]=new a(h[0][u],0,0,h[0][u]),E;for(C=0;C<M;C++)T=h[C][u],w=h[C+1][u],E[C]=new a(T,0,0,w),f&&(L=h[C+2][u],e[C]=(e[C]||0)+(w-T)*(w-T),n[C]=(n[C]||0)+(L-w)*(L-w));return E[C]=new a(h[C][u],0,0,h[C+1][u]),E},d=function(h,u,f,y,E,M){var C={},T=[],w=M||h[0],L,k,I,O,F,X,Z,G;E=typeof E=="string"?","+E+",":o,u==null&&(u=1);for(k in h[0])T.push(k);if(h.length>1){for(G=h[h.length-1],Z=!0,L=T.length;--L>-1;)if(k=T[L],Math.abs(w[k]-G[k])>.05){Z=!1;break}Z&&(h=h.concat(),M&&h.unshift(M),h.push(h[1]),M=h[h.length-3])}for(e.length=n.length=i.length=0,L=T.length;--L>-1;)k=T[L],r[k]=E.indexOf(","+k+",")!==-1,C[k]=p(h,k,r[k],M);for(L=e.length;--L>-1;)e[L]=Math.sqrt(e[L]),n[L]=Math.sqrt(n[L]);if(!y){for(L=T.length;--L>-1;)if(r[k])for(I=C[T[L]],X=I.length-1,O=0;O<X;O++)F=I[O+1].da/n[O]+I[O].da/e[O]||0,i[O]=(i[O]||0)+F*F;for(L=i.length;--L>-1;)i[L]=Math.sqrt(i[L])}for(L=T.length,O=f?4:1;--L>-1;)k=T[L],I=C[k],c(I,u,f,y,r[k]),Z&&(I.splice(0,O),I.splice(I.length-O,O));return C},g=function(h,u,f){u=u||"soft";var y={},E=u==="cubic"?3:2,M=u==="soft",C=[],T,w,L,k,I,O,F,X,Z,G,K;if(M&&f&&(h=[f].concat(h)),h==null||h.length<E+1)throw"invalid Bezier data";for(Z in h[0])C.push(Z);for(O=C.length;--O>-1;){for(Z=C[O],y[Z]=I=[],G=0,X=h.length,F=0;F<X;F++)T=f==null?h[F][Z]:typeof(K=h[F][Z])=="string"&&K.charAt(1)==="="?f[Z]+Number(K.charAt(0)+K.substr(2)):Number(K),M&&F>1&&F<X-1&&(I[G++]=(T+I[G-2])/2),I[G++]=T;for(X=G-E+1,G=0,F=0;F<X;F+=E)T=I[F],w=I[F+1],L=I[F+2],k=E===2?0:I[F+3],I[G++]=K=E===3?new a(T,w,L,k):new a(T,(2*w+T)/3,(2*w+L)/3,L);I.length=G}return y},S=function(h,u,f){for(var y=1/f,E=h.length,M,C,T,w,L,k,I,O,F,X,Z;--E>-1;)for(X=h[E],T=X.a,w=X.d-T,L=X.c-T,k=X.b-T,M=C=0,O=1;O<=f;O++)I=y*O,F=1-I,M=C-(C=(I*I*w+3*F*(I*L+F*k))*I),Z=E*f+O-1,u[Z]=(u[Z]||0)+M*M},_=function(h,u){u=u>>0||6;var f=[],y=[],E=0,M=0,C=u-1,T=[],w=[],L,k,I,O;for(L in h)S(h[L],f,u);for(I=f.length,k=0;k<I;k++)E+=Math.sqrt(f[k]),O=k%u,w[O]=E,O===C&&(M+=E,O=k/u>>0,T[O]=w,y[O]=M,E=0,w=[]);return{length:M,lengths:y,segments:T}},R=Nt._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.9",API:2,global:!0,init:function(h,u,f){this._target=h,u instanceof Array&&(u={values:u}),this._func={},this._mod={},this._props=[],this._timeRes=u.timeResolution==null?6:parseInt(u.timeResolution,10);var y=u.values||[],E={},M=y[0],C=u.autoRotate||f.vars.orientToBezier,T,w,L,k,I;this._autoRotate=C?C instanceof Array?C:[["x","y","rotation",C===!0?0:Number(C)||0]]:null;for(T in M)this._props.push(T);for(L=this._props.length;--L>-1;)T=this._props[L],this._overwriteProps.push(T),w=this._func[T]=typeof h[T]=="function",E[T]=w?h[T.indexOf("set")||typeof h["get"+T.substr(3)]!="function"?T:"get"+T.substr(3)]():parseFloat(h[T]),I||E[T]!==y[0][T]&&(I=E);if(this._beziers=u.type!=="cubic"&&u.type!=="quadratic"&&u.type!=="soft"?d(y,isNaN(u.curviness)?1:u.curviness,!1,u.type==="thruBasic",u.correlate,I):g(y,u.type,E),this._segCount=this._beziers[T].length,this._timeRes){var O=_(this._beziers,this._timeRes);this._length=O.length,this._lengths=O.lengths,this._segments=O.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(C=this._autoRotate)for(this._initialRotations=[],C[0]instanceof Array||(this._autoRotate=C=[C]),L=C.length;--L>-1;){for(k=0;k<3;k++)T=C[L][k],this._func[T]=typeof h[T]=="function"?h[T.indexOf("set")||typeof h["get"+T.substr(3)]!="function"?T:"get"+T.substr(3)]:!1;T=C[L][2],this._initialRotations[L]=(this._func[T]?this._func[T].call(this._target):this._target[T])||0,this._overwriteProps.push(T)}return this._startRatio=f.vars.runBackwards?1:0,!0},set:function(h){var u=this._segCount,f=this._func,y=this._target,E=h!==this._startRatio,M,C,T,w,L,k,I,O,F,X,Z;if(!this._timeRes)M=h<0?0:h>=1?u-1:u*h>>0,k=(h-M*(1/u))*u;else{if(F=this._lengths,X=this._curSeg,Z=h*this._length,T=this._li,Z>this._l2&&T<u-1){for(O=u-1;T<O&&(this._l2=F[++T])<=Z;);this._l1=F[T-1],this._li=T,this._curSeg=X=this._segments[T],this._s2=X[this._s1=this._si=0]}else if(Z<this._l1&&T>0){for(;T>0&&(this._l1=F[--T])>=Z;);T===0&&Z<this._l1?this._l1=0:T++,this._l2=F[T],this._li=T,this._curSeg=X=this._segments[T],this._s1=X[(this._si=X.length-1)-1]||0,this._s2=X[this._si]}if(M=T,Z-=this._l1,T=this._si,Z>this._s2&&T<X.length-1){for(O=X.length-1;T<O&&(this._s2=X[++T])<=Z;);this._s1=X[T-1],this._si=T}else if(Z<this._s1&&T>0){for(;T>0&&(this._s1=X[--T])>=Z;);T===0&&Z<this._s1?this._s1=0:T++,this._s2=X[T],this._si=T}k=h===1?1:(T+(Z-this._s1)/(this._s2-this._s1))*this._prec||0}for(C=1-k,T=this._props.length;--T>-1;)w=this._props[T],L=this._beziers[w][M],I=(k*k*L.da+3*C*(k*L.ca+C*L.ba))*k+L.a,this._mod[w]&&(I=this._mod[w](I,y)),f[w]?y[w](I):y[w]=I;if(this._autoRotate){var G=this._autoRotate,K,me,pe,re,ae,Ne,ke;for(T=G.length;--T>-1;)w=G[T][2],Ne=G[T][3]||0,ke=G[T][4]===!0?1:t,L=this._beziers[G[T][0]],K=this._beziers[G[T][1]],L&&K&&(L=L[M],K=K[M],me=L.a+(L.b-L.a)*k,re=L.b+(L.c-L.b)*k,me+=(re-me)*k,re+=(L.c+(L.d-L.c)*k-re)*k,pe=K.a+(K.b-K.a)*k,ae=K.b+(K.c-K.b)*k,pe+=(ae-pe)*k,ae+=(K.c+(K.d-K.c)*k-ae)*k,I=E?Math.atan2(ae-pe,re-me)*ke+Ne:this._initialRotations[T],this._mod[w]&&(I=this._mod[w](I,y)),f[w]?y[w](I):y[w]=I)}}}),v=R.prototype;R.bezierThrough=d,R.cubicToQuadratic=l,R._autoCSS=!0,R.quadraticToCubic=function(h,u,f){return new a(h,(2*u+h)/3,(2*u+f)/3,f)},R._cssRegister=function(){var h=s.CSSPlugin;if(h){var u=h._internals,f=u._parseToProxy,y=u._setPluginRatio,E=u.CSSPropTween;u._registerComplexSpecialProp("bezier",{parser:function(M,C,T,w,L,k){C instanceof Array&&(C={values:C}),k=new R;var I=C.values,O=I.length-1,F=[],X={},Z,G,K;if(O<0)return L;for(Z=0;Z<=O;Z++)K=f(M,I[Z],w,L,k,O!==Z),F[Z]=K.end;for(G in C)X[G]=C[G];return X.values=F,L=new E(M,"bezier",0,0,K.pt,2),L.data=K,L.plugin=k,L.setRatio=y,X.autoRotate===0&&(X.autoRotate=!0),X.autoRotate&&!(X.autoRotate instanceof Array)&&(Z=X.autoRotate===!0?0:Number(X.autoRotate),X.autoRotate=K.end.left!=null?[["left","top","rotation",Z,!1]]:K.end.x!=null?[["x","y","rotation",Z,!1]]:!1),X.autoRotate&&(w._transform||w._enableTransforms(!1),K.autoRotate=w._target._gsTransform,K.proxy.rotation=K.autoRotate.rotation||0,w._overwriteProps.push("rotation")),k._onInitTween(K.proxy,X,w._tween),L}})}},v._mod=function(h){for(var u=this._overwriteProps,f=u.length,y;--f>-1;)y=h[u[f]],y&&typeof y=="function"&&(this._mod[u[f]]=y)},v._kill=function(h){var u=this._props,f,y;for(f in this._beziers)if(f in h)for(delete this._beziers[f],delete this._func[f],y=u.length;--y>-1;)u[y]===f&&u.splice(y,1);if(u=this._autoRotate,u)for(y=u.length;--y>-1;)h[u[y][2]]&&u.splice(y,1);return this._super._kill.call(this,h)}}(),Nt._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var n=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=n.prototype.setRatio},i=Nt._gsDefine.globals,r,s,a,o,l={},c=n.prototype=new t("css");c.constructor=n,n.version="2.1.3",n.API=2,n.defaultTransformPerspective=0,n.defaultSkewType="compensated",n.defaultSmoothOrigin=!0,c="px",n.suffixMap={top:c,right:c,bottom:c,left:c,width:c,height:c,fontSize:c,padding:c,margin:c,perspective:c,lineHeight:""};var p=/(?:\-|\.|\b)(\d|\.|e\-)+/g,d=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,S=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,_=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,R=/(?:\d|\-|\+|=|#|\.)*/g,v=/opacity *= *([^)]*)/i,h=/opacity:([^;]*)/i,u=/alpha\(opacity *=.+?\)/i,f=/^(rgb|hsl)/,y=/([A-Z])/g,E=/-([a-z])/gi,M=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,C=function(b,A){return A.toUpperCase()},T=/(?:Left|Right|Width)/i,w=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,L=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,k=/,(?=[^\)]*(?:\(|$))/gi,I=/[\s,\(]/i,O=Math.PI/180,F=180/Math.PI,X={},Z={style:{}},G=Nt.document||{createElement:function(){return Z}},K=function(b,A){var z=G.createElementNS?G.createElementNS(A||"http://www.w3.org/1999/xhtml",b):G.createElement(b);return z.style?z:G.createElement(b)},me=K("div"),pe=K("img"),re=n._internals={_specialProps:l},ae=(Nt.navigator||{}).userAgent||"",Ne,ke,Fe,Ye,Qe,$e,et=function(){var b=ae.indexOf("Android"),A=K("a");return Fe=ae.indexOf("Safari")!==-1&&ae.indexOf("Chrome")===-1&&(b===-1||parseFloat(ae.substr(b+8,2))>3),Qe=Fe&&parseFloat(ae.substr(ae.indexOf("Version/")+8,2))<6,Ye=ae.indexOf("Firefox")!==-1,(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(ae)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(ae))&&($e=parseFloat(RegExp.$1)),A?(A.style.cssText="top:1px;opacity:.55;",/^0.55/.test(A.style.opacity)):!1}(),Mt=function(b){return v.test(typeof b=="string"?b:(b.currentStyle?b.currentStyle.filter:b.style.filter)||"")?parseFloat(RegExp.$1)/100:1},st=function(b){Nt.console&&console.log(b)},U,Q,se="",fe="",ue=function(b,A){A=A||me;var z=A.style,H,N;if(z[b]!==void 0)return b;for(b=b.charAt(0).toUpperCase()+b.substr(1),H=["O","Moz","ms","Ms","Webkit"],N=5;--N>-1&&z[H[N]+b]===void 0;);return N>=0?(fe=N===3?"ms":H[N],se="-"+fe.toLowerCase()+"-",fe+b):null},Pe=typeof window<"u"?window:G.defaultView||{getComputedStyle:function(){}},Te=function(b){return Pe.getComputedStyle(b)},le=n.getStyle=function(b,A,z,H,N){var q;return!et&&A==="opacity"?Mt(b):(!H&&b.style[A]?q=b.style[A]:(z=z||Te(b))?q=z[A]||z.getPropertyValue(A)||z.getPropertyValue(A.replace(y,"-$1").toLowerCase()):b.currentStyle&&(q=b.currentStyle[A]),N!=null&&(!q||q==="none"||q==="auto"||q==="auto auto")?N:q)},Ee=re.convertToPixels=function(b,A,z,H,N){if(H==="px"||!H&&A!=="lineHeight")return z;if(H==="auto"||!z)return 0;var q=T.test(A),B=b,j=me.style,ee=z<0,de=z===1,oe,be,te;if(ee&&(z=-z),de&&(z*=100),A==="lineHeight"&&!H)be=Te(b).lineHeight,b.style.lineHeight=z,oe=parseFloat(Te(b).lineHeight),b.style.lineHeight=be;else if(H==="%"&&A.indexOf("border")!==-1)oe=z/100*(q?b.clientWidth:b.clientHeight);else{if(j.cssText="border:0 solid red;position:"+le(b,"position")+";line-height:0;",H==="%"||!B.appendChild||H.charAt(0)==="v"||H==="rem"){if(B=b.parentNode||G.body,le(B,"display").indexOf("flex")!==-1&&(j.position="absolute"),be=B._gsCache,te=e.ticker.frame,be&&q&&be.time===te)return be.width*z/100;j[q?"width":"height"]=z+H}else j[q?"borderLeftWidth":"borderTopWidth"]=z+H;B.appendChild(me),oe=parseFloat(me[q?"offsetWidth":"offsetHeight"]),B.removeChild(me),q&&H==="%"&&n.cacheWidths!==!1&&(be=B._gsCache=B._gsCache||{},be.time=te,be.width=oe/z*100),oe===0&&!N&&(oe=Ee(b,A,z,H,!0))}return de&&(oe/=100),ee?-oe:oe},Ae=re.calculateOffset=function(b,A,z){if(le(b,"position",z)!=="absolute")return 0;var H=A==="left"?"Left":"Top",N=le(b,"margin"+H,z);return b["offset"+H]-(Ee(b,A,parseFloat(N),N.replace(R,""))||0)},Be=function(b,A){var z={},H,N,q;if(A=A||Te(b))if(H=A.length)for(;--H>-1;)q=A[H],(q.indexOf("-transform")===-1||Et===q)&&(z[q.replace(E,C)]=A.getPropertyValue(q));else for(H in A)(H.indexOf("Transform")===-1||Rt===H)&&(z[H]=A[H]);else if(A=b.currentStyle||b.style)for(H in A)typeof H=="string"&&z[H]===void 0&&(z[H.replace(E,C)]=A[H]);return et||(z.opacity=Mt(b)),N=ye(b,A,!1),z.rotation=N.rotation,z.skewX=N.skewX,z.scaleX=N.scaleX,z.scaleY=N.scaleY,z.x=N.x,z.y=N.y,Pt&&(z.z=N.z,z.rotationX=N.rotationX,z.rotationY=N.rotationY,z.scaleZ=N.scaleZ),z.filters&&delete z.filters,z},m=function(b,A,z,H,N){var q={},B=b.style,j,ee,de;for(ee in z)ee!=="cssText"&&ee!=="length"&&isNaN(ee)&&(A[ee]!==(j=z[ee])||N&&N[ee])&&ee.indexOf("Origin")===-1&&(typeof j=="number"||typeof j=="string")&&(q[ee]=j==="auto"&&(ee==="left"||ee==="top")?Ae(b,ee):(j===""||j==="auto"||j==="none")&&typeof A[ee]=="string"&&A[ee].replace(_,"")!==""?0:j,B[ee]!==void 0&&(de=new _t(B,ee,B[ee],de)));if(H)for(ee in H)ee!=="className"&&(q[ee]=H[ee]);return{difs:q,firstMPT:de}},x={width:["Left","Right"],height:["Top","Bottom"]},P=["marginLeft","marginRight","marginTop","marginBottom"],D=function(b,A,z){if((b.nodeName+"").toLowerCase()==="svg")return(z||Te(b))[A]||0;if(b.getCTM&&Os(b))return b.getBBox()[A]||0;var H=parseFloat(A==="width"?b.offsetWidth:b.offsetHeight),N=x[A],q=N.length;for(z=z||Te(b);--q>-1;)H-=parseFloat(le(b,"padding"+N[q],z,!0))||0,H-=parseFloat(le(b,"border"+N[q]+"Width",z,!0))||0;return H},V=function(b,A){if(b==="contain"||b==="auto"||b==="auto auto")return b+" ";(b==null||b==="")&&(b="0 0");var z=b.split(" "),H=b.indexOf("left")!==-1?"0%":b.indexOf("right")!==-1?"100%":z[0],N=b.indexOf("top")!==-1?"0%":b.indexOf("bottom")!==-1?"100%":z[1],q;if(z.length>3&&!A){for(z=b.split(", ").join(",").split(","),b=[],q=0;q<z.length;q++)b.push(V(z[q]));return b.join(",")}return N==null?N=H==="center"?"50%":"0":N==="center"&&(N="50%"),(H==="center"||isNaN(parseFloat(H))&&(H+"").indexOf("=")===-1)&&(H="50%"),b=H+" "+N+(z.length>2?" "+z[2]:""),A&&(A.oxp=H.indexOf("%")!==-1,A.oyp=N.indexOf("%")!==-1,A.oxr=H.charAt(1)==="=",A.oyr=N.charAt(1)==="=",A.ox=parseFloat(H.replace(_,"")),A.oy=parseFloat(N.replace(_,"")),A.v=b),A||b},Y=function(b,A){return typeof b=="function"&&(b=b(Q,U)),typeof b=="string"&&b.charAt(1)==="="?parseInt(b.charAt(0)+"1",10)*parseFloat(b.substr(2)):parseFloat(b)-parseFloat(A)||0},ne=function(b,A){typeof b=="function"&&(b=b(Q,U));var z=typeof b=="string"&&b.charAt(1)==="=";return typeof b=="string"&&b.charAt(b.length-2)==="v"&&(b=(z?b.substr(0,2):0)+window["inner"+(b.substr(-2)==="vh"?"Height":"Width")]*(parseFloat(z?b.substr(2):b)/100)),b==null?A:z?parseInt(b.charAt(0)+"1",10)*parseFloat(b.substr(2))+A:parseFloat(b)||0},ie=function(b,A,z,H){var N=1e-6,q,B,j,ee,de;return typeof b=="function"&&(b=b(Q,U)),b==null?ee=A:typeof b=="number"?ee=b:(q=360,B=b.split("_"),de=b.charAt(1)==="=",j=(de?parseInt(b.charAt(0)+"1",10)*parseFloat(B[0].substr(2)):parseFloat(B[0]))*(b.indexOf("rad")===-1?1:F)-(de?0:A),B.length&&(H&&(H[z]=A+j),b.indexOf("short")!==-1&&(j=j%q,j!==j%(q/2)&&(j=j<0?j+q:j-q)),b.indexOf("_cw")!==-1&&j<0?j=(j+q*9999999999)%q-(j/q|0)*q:b.indexOf("ccw")!==-1&&j>0&&(j=(j-q*9999999999)%q-(j/q|0)*q)),ee=A+j),ee<N&&ee>-N&&(ee=0),ee},$={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},we=function(b,A,z){return b=b<0?b+1:b>1?b-1:b,(b*6<1?A+(z-A)*b*6:b<.5?z:b*3<2?A+(z-A)*(2/3-b)*6:A)*255+.5|0},xe=n.parseColor=function(b,A){var z,H,N,q,B,j,ee,de,oe,be,te;if(!b)z=$.black;else if(typeof b=="number")z=[b>>16,b>>8&255,b&255];else{if(b.charAt(b.length-1)===","&&(b=b.substr(0,b.length-1)),$[b])z=$[b];else if(b.charAt(0)==="#")b.length===4&&(H=b.charAt(1),N=b.charAt(2),q=b.charAt(3),b="#"+H+H+N+N+q+q),b=parseInt(b.substr(1),16),z=[b>>16,b>>8&255,b&255];else if(b.substr(0,3)==="hsl"){if(z=te=b.match(p),!A)B=Number(z[0])%360/360,j=Number(z[1])/100,ee=Number(z[2])/100,N=ee<=.5?ee*(j+1):ee+j-ee*j,H=ee*2-N,z.length>3&&(z[3]=Number(z[3])),z[0]=we(B+1/3,H,N),z[1]=we(B,H,N),z[2]=we(B-1/3,H,N);else if(b.indexOf("=")!==-1)return b.match(d)}else z=b.match(p)||$.transparent;z[0]=Number(z[0]),z[1]=Number(z[1]),z[2]=Number(z[2]),z.length>3&&(z[3]=Number(z[3]))}return A&&!te&&(H=z[0]/255,N=z[1]/255,q=z[2]/255,de=Math.max(H,N,q),oe=Math.min(H,N,q),ee=(de+oe)/2,de===oe?B=j=0:(be=de-oe,j=ee>.5?be/(2-de-oe):be/(de+oe),B=de===H?(N-q)/be+(N<q?6:0):de===N?(q-H)/be+2:(H-N)/be+4,B*=60),z[0]=B+.5|0,z[1]=j*100+.5|0,z[2]=ee*100+.5|0),z},Me=function(b,A){var z=b.match(Le)||[],H=0,N="",q,B,j;if(!z.length)return b;for(q=0;q<z.length;q++)B=z[q],j=b.substr(H,b.indexOf(B,H)-H),H+=j.length+B.length,B=xe(B,A),B.length===3&&B.push(1),N+=j+(A?"hsla("+B[0]+","+B[1]+"%,"+B[2]+"%,"+B[3]:"rgba("+B.join(","))+")";return N+b.substr(H)},Le="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(c in $)Le+="|"+c+"\\b";Le=new RegExp(Le+")","gi"),n.colorStringFilter=function(b){var A=b[0]+" "+b[1],z;Le.test(A)&&(z=A.indexOf("hsl(")!==-1||A.indexOf("hsla(")!==-1,b[0]=Me(b[0],z),b[1]=Me(b[1],z)),Le.lastIndex=0},e.defaultStringFilter||(e.defaultStringFilter=n.colorStringFilter);var Ce=function(b,A,z,H){if(b==null)return function(te){return te};var N=A?(b.match(Le)||[""])[0]:"",q=b.split(N).join("").match(g)||[],B=b.substr(0,b.indexOf(q[0])),j=b.charAt(b.length-1)===")"?")":"",ee=b.indexOf(" ")!==-1?" ":",",de=q.length,oe=de>0?q[0].replace(p,""):"",be;return de?A?(be=function(te){var Ie,Oe,ge,Ue;if(typeof te=="number")te+=oe;else if(H&&k.test(te)){for(Ue=te.replace(k,"|").split("|"),ge=0;ge<Ue.length;ge++)Ue[ge]=be(Ue[ge]);return Ue.join(",")}if(Ie=(te.match(Le)||[N])[0],Oe=te.split(Ie).join("").match(g)||[],ge=Oe.length,de>ge--)for(;++ge<de;)Oe[ge]=z?Oe[(ge-1)/2|0]:q[ge];return B+Oe.join(ee)+ee+Ie+j+(te.indexOf("inset")!==-1?" inset":"")},be):(be=function(te){var Ie,Oe,ge;if(typeof te=="number")te+=oe;else if(H&&k.test(te)){for(Oe=te.replace(k,"|").split("|"),ge=0;ge<Oe.length;ge++)Oe[ge]=be(Oe[ge]);return Oe.join(",")}if(Ie=te.match(ee===","?g:S)||[],ge=Ie.length,de>ge--)for(;++ge<de;)Ie[ge]=z?Ie[(ge-1)/2|0]:q[ge];return(B&&te!=="none"&&te.substr(0,te.indexOf(Ie[0]))||B)+Ie.join(ee)+j},be):function(te){return te}},Xe=function(b){return b=b.split(","),function(A,z,H,N,q,B,j){var ee=(z+"").split(" "),de;for(j={},de=0;de<4;de++)j[b[de]]=ee[de]=ee[de]||ee[(de-1)/2>>0];return N.parse(A,j,q,B)}};re._setPluginRatio=function(b){this.plugin.setRatio(b);for(var A=this.data,z=A.proxy,H=A.firstMPT,N=1e-6,q,B,j,ee,de;H;)q=z[H.v],H.r?q=H.r(q):q<N&&q>-N&&(q=0),H.t[H.p]=q,H=H._next;if(A.autoRotate&&(A.autoRotate.rotation=A.mod?A.mod.call(this._tween,z.rotation,this.t,this._tween):z.rotation),b===1||b===0)for(H=A.firstMPT,de=b===1?"e":"b";H;){if(B=H.t,!B.type)B[de]=B.s+B.xs0;else if(B.type===1){for(ee=B.xs0+B.s+B.xs1,j=1;j<B.l;j++)ee+=B["xn"+j]+B["xs"+(j+1)];B[de]=ee}H=H._next}};var _t=function(b,A,z,H,N){this.t=b,this.p=A,this.v=z,this.r=N,H&&(H._prev=this,this._next=H)};re._parseToProxy=function(b,A,z,H,N,q){var B=H,j={},ee={},de=z._transform,oe=X,be,te,Ie,Oe,ge;for(z._transform=null,X=A,H=ge=z.parse(b,A,H,N),X=oe,q&&(z._transform=de,B&&(B._prev=null,B._prev&&(B._prev._next=null)));H&&H!==B;){if(H.type<=1&&(te=H.p,ee[te]=H.s+H.c,j[te]=H.s,q||(Oe=new _t(H,"s",te,Oe,H.r),H.c=0),H.type===1))for(be=H.l;--be>0;)Ie="xn"+be,te=H.p+"_"+Ie,ee[te]=H.data[Ie],j[te]=H[Ie],q||(Oe=new _t(H,Ie,te,Oe,H.rxp[Ie]));H=H._next}return{proxy:j,end:ee,firstMPT:Oe,pt:ge}};var J=re.CSSPropTween=function(b,A,z,H,N,q,B,j,ee,de,oe){this.t=b,this.p=A,this.s=z,this.c=H,this.n=B||A,b instanceof J||o.push(this.n),this.r=j&&(typeof j=="function"?j:Math.round),this.type=q||0,ee&&(this.pr=ee,r=!0),this.b=de===void 0?z:de,this.e=oe===void 0?z+H:oe,N&&(this._next=N,N._prev=this)},ze=function(b,A,z,H,N,q){var B=new J(b,A,z,H-z,N,-1,q);return B.b=z,B.e=B.xs0=H,B},_e=n.parseComplex=function(b,A,z,H,N,q,B,j,ee,de){z=z||q||"",typeof H=="function"&&(H=H(Q,U)),B=new J(b,A,0,0,B,de?2:1,null,!1,j,z,H),H+="",N&&Le.test(H+z)&&(H=[z,H],n.colorStringFilter(H),z=H[0],H=H[1]);var oe=z.split(", ").join(",").split(" "),be=H.split(", ").join(",").split(" "),te=oe.length,Ie=Ne!==!1,Oe,ge,Ue,Re,He,Je,it,rt,nt,ft,xt,ct,Lt;for((H.indexOf(",")!==-1||z.indexOf(",")!==-1)&&((H+z).indexOf("rgb")!==-1||(H+z).indexOf("hsl")!==-1?(oe=oe.join(" ").replace(k,", ").split(" "),be=be.join(" ").replace(k,", ").split(" ")):(oe=oe.join(" ").split(",").join(", ").split(" "),be=be.join(" ").split(",").join(", ").split(" ")),te=oe.length),te!==be.length&&(oe=(q||"").split(" "),te=oe.length),B.plugin=ee,B.setRatio=de,Le.lastIndex=0,Oe=0;Oe<te;Oe++)if(Re=oe[Oe],He=be[Oe]+"",rt=parseFloat(Re),rt||rt===0)B.appendXtra("",rt,Y(He,rt),He.replace(d,""),Ie&&He.indexOf("px")!==-1?Math.round:!1,!0);else if(N&&Le.test(Re))ct=He.indexOf(")")+1,ct=")"+(ct?He.substr(ct):""),Lt=He.indexOf("hsl")!==-1&&et,ft=He,Re=xe(Re,Lt),He=xe(He,Lt),nt=Re.length+He.length>6,nt&&!et&&He[3]===0?(B["xs"+B.l]+=B.l?" transparent":"transparent",B.e=B.e.split(be[Oe]).join("transparent")):(et||(nt=!1),Lt?B.appendXtra(ft.substr(0,ft.indexOf("hsl"))+(nt?"hsla(":"hsl("),Re[0],Y(He[0],Re[0]),",",!1,!0).appendXtra("",Re[1],Y(He[1],Re[1]),"%,",!1).appendXtra("",Re[2],Y(He[2],Re[2]),nt?"%,":"%"+ct,!1):B.appendXtra(ft.substr(0,ft.indexOf("rgb"))+(nt?"rgba(":"rgb("),Re[0],He[0]-Re[0],",",Math.round,!0).appendXtra("",Re[1],He[1]-Re[1],",",Math.round).appendXtra("",Re[2],He[2]-Re[2],nt?",":ct,Math.round),nt&&(Re=Re.length<4?1:Re[3],B.appendXtra("",Re,(He.length<4?1:He[3])-Re,ct,!1))),Le.lastIndex=0;else if(Je=Re.match(p),!Je)B["xs"+B.l]+=B.l||B["xs"+B.l]?" "+He:He;else{if(it=He.match(d),!it||it.length!==Je.length)return B;for(Ue=0,ge=0;ge<Je.length;ge++)xt=Je[ge],ft=Re.indexOf(xt,Ue),B.appendXtra(Re.substr(Ue,ft-Ue),Number(xt),Y(it[ge],xt),"",Ie&&Re.substr(ft+xt.length,2)==="px"?Math.round:!1,ge===0),Ue=ft+xt.length;B["xs"+B.l]+=Re.substr(Ue)}if(H.indexOf("=")!==-1&&B.data){for(ct=B.xs0+B.data.s,Oe=1;Oe<B.l;Oe++)ct+=B["xs"+Oe]+B.data["xn"+Oe];B.e=ct+B["xs"+Oe]}return B.l||(B.type=-1,B.xs0=B.e),B.xfirst||B},De=9;for(c=J.prototype,c.l=c.pr=0;--De>0;)c["xn"+De]=0,c["xs"+De]="";c.xs0="",c._next=c._prev=c.xfirst=c.data=c.plugin=c.setRatio=c.rxp=null,c.appendXtra=function(b,A,z,H,N,q){var B=this,j=B.l;return B["xs"+j]+=q&&(j||B["xs"+j])?" "+b:b||"",!z&&j!==0&&!B.plugin?(B["xs"+j]+=A+(H||""),B):(B.l++,B.type=B.setRatio?2:1,B["xs"+B.l]=H||"",j>0?(B.data["xn"+j]=A+z,B.rxp["xn"+j]=N,B["xn"+j]=A,B.plugin||(B.xfirst=new J(B,"xn"+j,A,z,B.xfirst||B,0,B.n,N,B.pr),B.xfirst.xs0=0),B):(B.data={s:A+z},B.rxp={},B.s=A,B.c=z,B.r=N,B))};var Ge=function(b,A){A=A||{},this.p=A.prefix&&ue(b)||b,l[b]=l[this.p]=this,this.format=A.formatter||Ce(A.defaultValue,A.color,A.collapsible,A.multi),A.parser&&(this.parse=A.parser),this.clrs=A.color,this.multi=A.multi,this.keyword=A.keyword,this.dflt=A.defaultValue,this.allowFunc=A.allowFunc,this.pr=A.priority||0},Ke=re._registerComplexSpecialProp=function(b,A,z){typeof A!="object"&&(A={parser:z});var H=b.split(","),N=A.defaultValue,q;for(z=z||[N],q=0;q<H.length;q++)A.prefix=q===0&&A.prefix,A.defaultValue=z[q]||N,new Ge(H[q],A)},Dt=re._registerPluginProp=function(b){if(!l[b]){var A=b.charAt(0).toUpperCase()+b.substr(1)+"Plugin";Ke(b,{parser:function(z,H,N,q,B,j,ee){var de=i.com.greensock.plugins[A];return de?(de._cssRegister(),l[N].parse(z,H,N,q,B,j,ee)):(st("Error: "+A+" js file not loaded."),B)}})}};c=Ge.prototype,c.parseComplex=function(b,A,z,H,N,q){var B=this.keyword,j,ee,de,oe,be,te;if(this.multi&&(k.test(z)||k.test(A)?(ee=A.replace(k,"|").split("|"),de=z.replace(k,"|").split("|")):B&&(ee=[A],de=[z])),de){for(oe=de.length>ee.length?de.length:ee.length,j=0;j<oe;j++)A=ee[j]=ee[j]||this.dflt,z=de[j]=de[j]||this.dflt,B&&(be=A.indexOf(B),te=z.indexOf(B),be!==te&&(te===-1?ee[j]=ee[j].split(B).join(""):be===-1&&(ee[j]+=" "+B)));A=ee.join(", "),z=de.join(", ")}return _e(b,this.p,A,z,this.clrs,this.dflt,H,this.pr,N,q)},c.parse=function(b,A,z,H,N,q,B){return this.parseComplex(b.style,this.format(le(b,this.p,a,!1,this.dflt)),this.format(A),N,q)},n.registerSpecialProp=function(b,A,z){Ke(b,{parser:function(H,N,q,B,j,ee,de){var oe=new J(H,q,0,0,j,2,q,!1,z);return oe.plugin=ee,oe.setRatio=A(H,N,B._tween,q),oe},priority:z})},n.useSVGTransformAttr=!0;var Bt="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Rt=ue("transform"),Et=se+"transform",an=ue("transformOrigin"),Pt=ue("perspective")!==null,nr=re.Transform=function(){this.perspective=parseFloat(n.defaultTransformPerspective)||0,this.force3D=n.defaultForce3D===!1||!Pt?!1:n.defaultForce3D||"auto"},Ba=Nt.SVGElement,ri,ir=function(b,A,z){var H=G.createElementNS("http://www.w3.org/2000/svg",b),N=/([a-z])([A-Z])/g,q;for(q in z)H.setAttributeNS(null,q.replace(N,"$1-$2").toLowerCase(),z[q]);return A.appendChild(H),H},Wn=G.documentElement||{},zr=function(){var b=$e||/Android/i.test(ae)&&!Nt.chrome,A,z,H;return G.createElementNS&&Wn.appendChild&&!b&&(A=ir("svg",Wn),z=ir("rect",A,{width:100,height:50,x:100}),H=z.getBoundingClientRect().width,z.style[an]="50% 50%",z.style[Rt]="scaleX(0.5)",b=H===z.getBoundingClientRect().width&&!(Ye&&Pt),Wn.removeChild(A)),b}(),Hr=function(b,A,z,H,N,q){var B=b._gsTransform,j=ce(b,!0),ee,de,oe,be,te,Ie,Oe,ge,Ue,Re,He,Je,it,rt;B&&(it=B.xOrigin,rt=B.yOrigin),(!H||(ee=H.split(" ")).length<2)&&(Oe=b.getBBox(),Oe.x===0&&Oe.y===0&&Oe.width+Oe.height===0&&(Oe={x:parseFloat(b.hasAttribute("x")?b.getAttribute("x"):b.hasAttribute("cx")?b.getAttribute("cx"):0)||0,y:parseFloat(b.hasAttribute("y")?b.getAttribute("y"):b.hasAttribute("cy")?b.getAttribute("cy"):0)||0,width:0,height:0}),A=V(A).split(" "),ee=[(A[0].indexOf("%")!==-1?parseFloat(A[0])/100*Oe.width:parseFloat(A[0]))+Oe.x,(A[1].indexOf("%")!==-1?parseFloat(A[1])/100*Oe.height:parseFloat(A[1]))+Oe.y]),z.xOrigin=be=parseFloat(ee[0]),z.yOrigin=te=parseFloat(ee[1]),H&&j!==W&&(Ie=j[0],Oe=j[1],ge=j[2],Ue=j[3],Re=j[4],He=j[5],Je=Ie*Ue-Oe*ge,Je&&(de=be*(Ue/Je)+te*(-ge/Je)+(ge*He-Ue*Re)/Je,oe=be*(-Oe/Je)+te*(Ie/Je)-(Ie*He-Oe*Re)/Je,be=z.xOrigin=ee[0]=de,te=z.yOrigin=ee[1]=oe)),B&&(q&&(z.xOffset=B.xOffset,z.yOffset=B.yOffset,B=z),N||N!==!1&&n.defaultSmoothOrigin!==!1?(de=be-it,oe=te-rt,B.xOffset+=de*j[0]+oe*j[2]-de,B.yOffset+=de*j[1]+oe*j[3]-oe):B.xOffset=B.yOffset=0),q||b.setAttribute("data-svg-origin",ee.join(" "))},ka=function(b){var A=K("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),z=this.parentNode,H=this.nextSibling,N=this.style.cssText,q;if(Wn.appendChild(A),A.appendChild(this),this.style.display="block",b)try{q=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=ka}catch{}else this._originalGetBBox&&(q=this._originalGetBBox());return H?z.insertBefore(this,H):z.appendChild(this),Wn.removeChild(A),this.style.cssText=N,q},wl=function(b){try{return b.getBBox()}catch{return ka.call(b,!0)}},Os=function(b){return!!(Ba&&b.getCTM&&(!b.parentNode||b.ownerSVGElement)&&wl(b))},W=[1,0,0,1,0,0],ce=function(b,A){var z=b._gsTransform||new nr,H=1e5,N=b.style,q,B,j,ee,de,oe,be;if(Rt?B=le(b,Et,null,!0):b.currentStyle&&(B=b.currentStyle.filter.match(w),B=B&&B.length===4?[B[0].substr(4),Number(B[2].substr(4)),Number(B[1].substr(4)),B[3].substr(4),z.x||0,z.y||0].join(","):""),q=!B||B==="none"||B==="matrix(1, 0, 0, 1, 0, 0)",Rt&&q&&!b.offsetParent&&b!==Wn&&(ee=N.display,N.display="block",be=b.parentNode,(!be||!b.offsetParent)&&(de=1,oe=b.nextSibling,Wn.appendChild(b)),B=le(b,Et,null,!0),q=!B||B==="none"||B==="matrix(1, 0, 0, 1, 0, 0)",ee?N.display=ee:Ze(N,"display"),de&&(oe?be.insertBefore(b,oe):be?be.appendChild(b):Wn.removeChild(b))),(z.svg||b.getCTM&&Os(b))&&(q&&(N[Rt]+"").indexOf("matrix")!==-1&&(B=N[Rt],q=0),j=b.getAttribute("transform"),q&&j&&(j=b.transform.baseVal.consolidate().matrix,B="matrix("+j.a+","+j.b+","+j.c+","+j.d+","+j.e+","+j.f+")",q=0)),q)return W;for(j=(B||"").match(p)||[],De=j.length;--De>-1;)ee=Number(j[De]),j[De]=(de=ee-(ee|=0))?(de*H+(de<0?-.5:.5)|0)/H+ee:ee;return A&&j.length>6?[j[0],j[1],j[4],j[5],j[12],j[13]]:j},ye=re.getTransform=function(b,A,z,H){if(b._gsTransform&&z&&!H)return b._gsTransform;var N=z?b._gsTransform||new nr:new nr,q=N.scaleX<0,B=2e-5,j=1e5,ee=Pt&&(parseFloat(le(b,an,A,!1,"0 0 0").split(" ")[2])||N.zOrigin)||0,de=parseFloat(n.defaultTransformPerspective)||0,oe,be,te,Ie,Oe,ge;if(N.svg=!!(b.getCTM&&Os(b)),N.svg&&(Hr(b,le(b,an,A,!1,"50% 50%")+"",N,b.getAttribute("data-svg-origin")),ri=n.useSVGTransformAttr||zr),oe=ce(b),oe!==W){if(oe.length===16){var Ue=oe[0],Re=oe[1],He=oe[2],Je=oe[3],it=oe[4],rt=oe[5],nt=oe[6],ft=oe[7],xt=oe[8],ct=oe[9],Lt=oe[10],ui=oe[12],hi=oe[13],en=oe[14],on=oe[11],je=Math.atan2(nt,Lt),kt,zt,di,St,pt;N.zOrigin&&(en=-N.zOrigin,ui=xt*en-oe[12],hi=ct*en-oe[13],en=Lt*en+N.zOrigin-oe[14]),N.rotationX=je*F,je&&(St=Math.cos(-je),pt=Math.sin(-je),kt=it*St+xt*pt,zt=rt*St+ct*pt,di=nt*St+Lt*pt,xt=it*-pt+xt*St,ct=rt*-pt+ct*St,Lt=nt*-pt+Lt*St,on=ft*-pt+on*St,it=kt,rt=zt,nt=di),je=Math.atan2(-He,Lt),N.rotationY=je*F,je&&(St=Math.cos(-je),pt=Math.sin(-je),kt=Ue*St-xt*pt,zt=Re*St-ct*pt,di=He*St-Lt*pt,ct=Re*pt+ct*St,Lt=He*pt+Lt*St,on=Je*pt+on*St,Ue=kt,Re=zt,He=di),je=Math.atan2(Re,Ue),N.rotation=je*F,je&&(St=Math.cos(je),pt=Math.sin(je),kt=Ue*St+Re*pt,zt=it*St+rt*pt,di=xt*St+ct*pt,Re=Re*St-Ue*pt,rt=rt*St-it*pt,ct=ct*St-xt*pt,Ue=kt,it=zt,xt=di),N.rotationX&&Math.abs(N.rotationX)+Math.abs(N.rotation)>359.9&&(N.rotationX=N.rotation=0,N.rotationY=180-N.rotationY),je=Math.atan2(it,rt),N.scaleX=(Math.sqrt(Ue*Ue+Re*Re+He*He)*j+.5|0)/j,N.scaleY=(Math.sqrt(rt*rt+nt*nt)*j+.5|0)/j,N.scaleZ=(Math.sqrt(xt*xt+ct*ct+Lt*Lt)*j+.5|0)/j,Ue/=N.scaleX,it/=N.scaleY,Re/=N.scaleX,rt/=N.scaleY,Math.abs(je)>B?(N.skewX=je*F,it=0,N.skewType!=="simple"&&(N.scaleY*=1/Math.cos(je))):N.skewX=0,N.perspective=on?1/(on<0?-on:on):0,N.x=ui,N.y=hi,N.z=en,N.svg&&(N.x-=N.xOrigin-(N.xOrigin*Ue-N.yOrigin*it),N.y-=N.yOrigin-(N.yOrigin*Re-N.xOrigin*rt))}else if(!Pt||H||!oe.length||N.x!==oe[4]||N.y!==oe[5]||!N.rotationX&&!N.rotationY){var Zt=oe.length>=6,Xn=Zt?oe[0]:1,pn=oe[1]||0,Fs=oe[2]||0,Bs=Zt?oe[3]:1;N.x=oe[4]||0,N.y=oe[5]||0,te=Math.sqrt(Xn*Xn+pn*pn),Ie=Math.sqrt(Bs*Bs+Fs*Fs),Oe=Xn||pn?Math.atan2(pn,Xn)*F:N.rotation||0,ge=Fs||Bs?Math.atan2(Fs,Bs)*F+Oe:N.skewX||0,N.scaleX=te,N.scaleY=Ie,N.rotation=Oe,N.skewX=ge,Pt&&(N.rotationX=N.rotationY=N.z=0,N.perspective=de,N.scaleZ=1),N.svg&&(N.x-=N.xOrigin-(N.xOrigin*Xn+N.yOrigin*Fs),N.y-=N.yOrigin-(N.xOrigin*pn+N.yOrigin*Bs))}Math.abs(N.skewX)>90&&Math.abs(N.skewX)<270&&(q?(N.scaleX*=-1,N.skewX+=N.rotation<=0?180:-180,N.rotation+=N.rotation<=0?180:-180):(N.scaleY*=-1,N.skewX+=N.skewX<=0?180:-180)),N.zOrigin=ee;for(be in N)N[be]<B&&N[be]>-B&&(N[be]=0)}return z&&(b._gsTransform=N,N.svg&&(ri&&b.style[Rt]?e.delayedCall(.001,function(){Ze(b.style,Rt)}):!ri&&b.getAttribute("transform")&&e.delayedCall(.001,function(){b.removeAttribute("transform")}))),N},he=function(b){var A=this.data,z=-A.rotation*O,H=z+A.skewX*O,N=1e5,q=(Math.cos(z)*A.scaleX*N|0)/N,B=(Math.sin(z)*A.scaleX*N|0)/N,j=(Math.sin(H)*-A.scaleY*N|0)/N,ee=(Math.cos(H)*A.scaleY*N|0)/N,de=this.t.style,oe=this.t.currentStyle,be,te;if(oe){te=B,B=-j,j=-te,be=oe.filter,de.filter="";var Ie=this.t.offsetWidth,Oe=this.t.offsetHeight,ge=oe.position!=="absolute",Ue="progid:DXImageTransform.Microsoft.Matrix(M11="+q+", M12="+B+", M21="+j+", M22="+ee,Re=A.x+Ie*A.xPercent/100,He=A.y+Oe*A.yPercent/100,Je,it;if(A.ox!=null&&(Je=(A.oxp?Ie*A.ox*.01:A.ox)-Ie/2,it=(A.oyp?Oe*A.oy*.01:A.oy)-Oe/2,Re+=Je-(Je*q+it*B),He+=it-(Je*j+it*ee)),ge?(Je=Ie/2,it=Oe/2,Ue+=", Dx="+(Je-(Je*q+it*B)+Re)+", Dy="+(it-(Je*j+it*ee)+He)+")"):Ue+=", sizingMethod='auto expand')",be.indexOf("DXImageTransform.Microsoft.Matrix(")!==-1?de.filter=be.replace(L,Ue):de.filter=Ue+" "+be,(b===0||b===1)&&q===1&&B===0&&j===0&&ee===1&&(!ge||Ue.indexOf("Dx=0, Dy=0")!==-1)&&(!v.test(be)||parseFloat(RegExp.$1)===100)&&be.indexOf(be.indexOf("Alpha"))===-1&&de.removeAttribute("filter"),!ge){var rt=$e<8?1:-1,nt,ft,xt;for(Je=A.ieOffsetX||0,it=A.ieOffsetY||0,A.ieOffsetX=Math.round((Ie-((q<0?-q:q)*Ie+(B<0?-B:B)*Oe))/2+Re),A.ieOffsetY=Math.round((Oe-((ee<0?-ee:ee)*Oe+(j<0?-j:j)*Ie))/2+He),De=0;De<4;De++)ft=P[De],nt=oe[ft],te=nt.indexOf("px")!==-1?parseFloat(nt):Ee(this.t,ft,parseFloat(nt),nt.replace(R,""))||0,te!==A[ft]?xt=De<2?-A.ieOffsetX:-A.ieOffsetY:xt=De<2?Je-A.ieOffsetX:it-A.ieOffsetY,de[ft]=(A[ft]=Math.round(te-xt*(De===0||De===2?1:rt)))+"px"}}},Se=re.set3DTransformRatio=re.setTransformRatio=function(b){var A=this.data,z=this.t.style,H=A.rotation,N=A.rotationX,q=A.rotationY,B=A.scaleX,j=A.scaleY,ee=A.scaleZ,de=A.x,oe=A.y,be=A.z,te=A.svg,Ie=A.perspective,Oe=A.force3D,ge=A.skewY,Ue=A.skewX,Re,He,Je,it,rt,nt,ft,xt,ct,Lt,ui,hi,en,on,je,kt,zt,di,St,pt,Zt,Xn,pn;if(ge&&(Ue+=ge,H+=ge),((b===1||b===0)&&Oe==="auto"&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!Oe)&&!be&&!Ie&&!q&&!N&&ee===1||ri&&te||!Pt){H||Ue||te?(H*=O,Xn=Ue*O,pn=1e5,He=Math.cos(H)*B,rt=Math.sin(H)*B,Je=Math.sin(H-Xn)*-j,nt=Math.cos(H-Xn)*j,Xn&&A.skewType==="simple"&&(Re=Math.tan(Xn-ge*O),Re=Math.sqrt(1+Re*Re),Je*=Re,nt*=Re,ge&&(Re=Math.tan(ge*O),Re=Math.sqrt(1+Re*Re),He*=Re,rt*=Re)),te&&(de+=A.xOrigin-(A.xOrigin*He+A.yOrigin*Je)+A.xOffset,oe+=A.yOrigin-(A.xOrigin*rt+A.yOrigin*nt)+A.yOffset,ri&&(A.xPercent||A.yPercent)&&(je=this.t.getBBox(),de+=A.xPercent*.01*je.width,oe+=A.yPercent*.01*je.height),je=1e-6,de<je&&de>-je&&(de=0),oe<je&&oe>-je&&(oe=0)),St=(He*pn|0)/pn+","+(rt*pn|0)/pn+","+(Je*pn|0)/pn+","+(nt*pn|0)/pn+","+de+","+oe+")",te&&ri?this.t.setAttribute("transform","matrix("+St):z[Rt]=(A.xPercent||A.yPercent?"translate("+A.xPercent+"%,"+A.yPercent+"%) matrix(":"matrix(")+St):z[Rt]=(A.xPercent||A.yPercent?"translate("+A.xPercent+"%,"+A.yPercent+"%) matrix(":"matrix(")+B+",0,0,"+j+","+de+","+oe+")";return}if(Ye&&(je=1e-4,B<je&&B>-je&&(B=ee=2e-5),j<je&&j>-je&&(j=ee=2e-5),Ie&&!A.z&&!A.rotationX&&!A.rotationY&&(Ie=0)),H||Ue)H*=O,kt=He=Math.cos(H),zt=rt=Math.sin(H),Ue&&(H-=Ue*O,kt=Math.cos(H),zt=Math.sin(H),A.skewType==="simple"&&(Re=Math.tan((Ue-ge)*O),Re=Math.sqrt(1+Re*Re),kt*=Re,zt*=Re,A.skewY&&(Re=Math.tan(ge*O),Re=Math.sqrt(1+Re*Re),He*=Re,rt*=Re))),Je=-zt,nt=kt;else if(!q&&!N&&ee===1&&!Ie&&!te){z[Rt]=(A.xPercent||A.yPercent?"translate("+A.xPercent+"%,"+A.yPercent+"%) translate3d(":"translate3d(")+de+"px,"+oe+"px,"+be+"px)"+(B!==1||j!==1?" scale("+B+","+j+")":"");return}else He=nt=1,Je=rt=0;Lt=1,it=ft=xt=ct=ui=hi=0,en=Ie?-1/Ie:0,on=A.zOrigin,je=1e-6,pt=",",Zt="0",H=q*O,H&&(kt=Math.cos(H),zt=Math.sin(H),xt=-zt,ui=en*-zt,it=He*zt,ft=rt*zt,Lt=kt,en*=kt,He*=kt,rt*=kt),H=N*O,H&&(kt=Math.cos(H),zt=Math.sin(H),Re=Je*kt+it*zt,di=nt*kt+ft*zt,ct=Lt*zt,hi=en*zt,it=Je*-zt+it*kt,ft=nt*-zt+ft*kt,Lt=Lt*kt,en=en*kt,Je=Re,nt=di),ee!==1&&(it*=ee,ft*=ee,Lt*=ee,en*=ee),j!==1&&(Je*=j,nt*=j,ct*=j,hi*=j),B!==1&&(He*=B,rt*=B,xt*=B,ui*=B),(on||te)&&(on&&(de+=it*-on,oe+=ft*-on,be+=Lt*-on+on),te&&(de+=A.xOrigin-(A.xOrigin*He+A.yOrigin*Je)+A.xOffset,oe+=A.yOrigin-(A.xOrigin*rt+A.yOrigin*nt)+A.yOffset),de<je&&de>-je&&(de=Zt),oe<je&&oe>-je&&(oe=Zt),be<je&&be>-je&&(be=0)),St=A.xPercent||A.yPercent?"translate("+A.xPercent+"%,"+A.yPercent+"%) matrix3d(":"matrix3d(",St+=(He<je&&He>-je?Zt:He)+pt+(rt<je&&rt>-je?Zt:rt)+pt+(xt<je&&xt>-je?Zt:xt),St+=pt+(ui<je&&ui>-je?Zt:ui)+pt+(Je<je&&Je>-je?Zt:Je)+pt+(nt<je&&nt>-je?Zt:nt),N||q||ee!==1?(St+=pt+(ct<je&&ct>-je?Zt:ct)+pt+(hi<je&&hi>-je?Zt:hi)+pt+(it<je&&it>-je?Zt:it),St+=pt+(ft<je&&ft>-je?Zt:ft)+pt+(Lt<je&&Lt>-je?Zt:Lt)+pt+(en<je&&en>-je?Zt:en)+pt):St+=",0,0,0,0,1,0,",St+=de+pt+oe+pt+be+pt+(Ie?1+-be/Ie:1)+")",z[Rt]=St};c=nr.prototype,c.x=c.y=c.z=c.skewX=c.skewY=c.rotation=c.rotationX=c.rotationY=c.zOrigin=c.xPercent=c.yPercent=c.xOffset=c.yOffset=0,c.scaleX=c.scaleY=c.scaleZ=1,Ke("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(b,A,z,H,N,q,B){if(H._lastParsedTransform===B)return N;H._lastParsedTransform=B;var j=B.scale&&typeof B.scale=="function"?B.scale:0;j&&(B.scale=j(Q,b));var ee=b._gsTransform,de=b.style,oe=1e-6,be=Bt.length,te=B,Ie={},Oe="transformOrigin",ge=ye(b,a,!0,te.parseTransform),Ue=te.transform&&(typeof te.transform=="function"?te.transform(Q,U):te.transform),Re,He,Je,it,rt,nt,ft,xt,ct;if(ge.skewType=te.skewType||ge.skewType||n.defaultSkewType,H._transform=ge,"rotationZ"in te&&(te.rotation=te.rotationZ),Ue&&typeof Ue=="string"&&Rt)He=me.style,He[Rt]=Ue,He.display="block",He.position="absolute",Ue.indexOf("%")!==-1&&(He.width=le(b,"width"),He.height=le(b,"height")),G.body.appendChild(me),Re=ye(me,null,!1),ge.skewType==="simple"&&(Re.scaleY*=Math.cos(Re.skewX*O)),ge.svg&&(nt=ge.xOrigin,ft=ge.yOrigin,Re.x-=ge.xOffset,Re.y-=ge.yOffset,(te.transformOrigin||te.svgOrigin)&&(Ue={},Hr(b,V(te.transformOrigin),Ue,te.svgOrigin,te.smoothOrigin,!0),nt=Ue.xOrigin,ft=Ue.yOrigin,Re.x-=Ue.xOffset-ge.xOffset,Re.y-=Ue.yOffset-ge.yOffset),(nt||ft)&&(xt=ce(me,!0),Re.x-=nt-(nt*xt[0]+ft*xt[2]),Re.y-=ft-(nt*xt[1]+ft*xt[3]))),G.body.removeChild(me),Re.perspective||(Re.perspective=ge.perspective),te.xPercent!=null&&(Re.xPercent=ne(te.xPercent,ge.xPercent)),te.yPercent!=null&&(Re.yPercent=ne(te.yPercent,ge.yPercent));else if(typeof te=="object"){if(Re={scaleX:ne(te.scaleX!=null?te.scaleX:te.scale,ge.scaleX),scaleY:ne(te.scaleY!=null?te.scaleY:te.scale,ge.scaleY),scaleZ:ne(te.scaleZ,ge.scaleZ),x:ne(te.x,ge.x),y:ne(te.y,ge.y),z:ne(te.z,ge.z),xPercent:ne(te.xPercent,ge.xPercent),yPercent:ne(te.yPercent,ge.yPercent),perspective:ne(te.transformPerspective,ge.perspective)},rt=te.directionalRotation,rt!=null)if(typeof rt=="object")for(He in rt)te[He]=rt[He];else te.rotation=rt;typeof te.x=="string"&&te.x.indexOf("%")!==-1&&(Re.x=0,Re.xPercent=ne(te.x,ge.xPercent)),typeof te.y=="string"&&te.y.indexOf("%")!==-1&&(Re.y=0,Re.yPercent=ne(te.y,ge.yPercent)),Re.rotation=ie("rotation"in te?te.rotation:"shortRotation"in te?te.shortRotation+"_short":ge.rotation,ge.rotation,"rotation",Ie),Pt&&(Re.rotationX=ie("rotationX"in te?te.rotationX:"shortRotationX"in te?te.shortRotationX+"_short":ge.rotationX||0,ge.rotationX,"rotationX",Ie),Re.rotationY=ie("rotationY"in te?te.rotationY:"shortRotationY"in te?te.shortRotationY+"_short":ge.rotationY||0,ge.rotationY,"rotationY",Ie)),Re.skewX=ie(te.skewX,ge.skewX),Re.skewY=ie(te.skewY,ge.skewY)}for(Pt&&te.force3D!=null&&(ge.force3D=te.force3D,it=!0),Je=ge.force3D||ge.z||ge.rotationX||ge.rotationY||Re.z||Re.rotationX||Re.rotationY||Re.perspective,!Je&&te.scale!=null&&(Re.scaleZ=1);--be>-1;)ct=Bt[be],Ue=Re[ct]-ge[ct],(Ue>oe||Ue<-oe||te[ct]!=null||X[ct]!=null)&&(it=!0,N=new J(ge,ct,ge[ct],Ue,N),ct in Ie&&(N.e=Ie[ct]),N.xs0=0,N.plugin=q,H._overwriteProps.push(N.n));return Ue=typeof te.transformOrigin=="function"?te.transformOrigin(Q,U):te.transformOrigin,ge.svg&&(Ue||te.svgOrigin)&&(nt=ge.xOffset,ft=ge.yOffset,Hr(b,V(Ue),Re,te.svgOrigin,te.smoothOrigin),N=ze(ge,"xOrigin",(ee?ge:Re).xOrigin,Re.xOrigin,N,Oe),N=ze(ge,"yOrigin",(ee?ge:Re).yOrigin,Re.yOrigin,N,Oe),(nt!==ge.xOffset||ft!==ge.yOffset)&&(N=ze(ge,"xOffset",ee?nt:ge.xOffset,ge.xOffset,N,Oe),N=ze(ge,"yOffset",ee?ft:ge.yOffset,ge.yOffset,N,Oe)),Ue="0px 0px"),(Ue||Pt&&Je&&ge.zOrigin)&&(Rt?(it=!0,ct=an,Ue||(Ue=(le(b,ct,a,!1,"50% 50%")+"").split(" "),Ue=Ue[0]+" "+Ue[1]+" "+ge.zOrigin+"px"),Ue+="",N=new J(de,ct,0,0,N,-1,Oe),N.b=de[ct],N.plugin=q,Pt?(He=ge.zOrigin,Ue=Ue.split(" "),ge.zOrigin=(Ue.length>2?parseFloat(Ue[2]):He)||0,N.xs0=N.e=Ue[0]+" "+(Ue[1]||"50%")+" 0px",N=new J(ge,"zOrigin",0,0,N,-1,N.n),N.b=He,N.xs0=N.e=ge.zOrigin):N.xs0=N.e=Ue):V(Ue+"",ge)),it&&(H._transformType=!(ge.svg&&ri)&&(Je||this._transformType===3)?3:2),j&&(B.scale=j),N},allowFunc:!0,prefix:!0}),Ke("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),Ke("clipPath",{defaultValue:"inset(0%)",prefix:!0,multi:!0,formatter:Ce("inset(0% 0% 0% 0%)",!1,!0)}),Ke("borderRadius",{defaultValue:"0px",parser:function(b,A,z,H,N,q){A=this.format(A);var B=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],j=b.style,ee,de,oe,be,te,Ie,Oe,ge,Ue,Re,He,Je,it,rt,nt,ft;for(Ue=parseFloat(b.offsetWidth),Re=parseFloat(b.offsetHeight),ee=A.split(" "),de=0;de<B.length;de++)this.p.indexOf("border")&&(B[de]=ue(B[de])),te=be=le(b,B[de],a,!1,"0px"),te.indexOf(" ")!==-1&&(be=te.split(" "),te=be[0],be=be[1]),Ie=oe=ee[de],Oe=parseFloat(te),Je=te.substr((Oe+"").length),it=Ie.charAt(1)==="=",it?(ge=parseInt(Ie.charAt(0)+"1",10),Ie=Ie.substr(2),ge*=parseFloat(Ie),He=Ie.substr((ge+"").length-(ge<0?1:0))||""):(ge=parseFloat(Ie),He=Ie.substr((ge+"").length)),He===""&&(He=s[z]||Je),He!==Je&&(rt=Ee(b,"borderLeft",Oe,Je),nt=Ee(b,"borderTop",Oe,Je),He==="%"?(te=rt/Ue*100+"%",be=nt/Re*100+"%"):He==="em"?(ft=Ee(b,"borderLeft",1,"em"),te=rt/ft+"em",be=nt/ft+"em"):(te=rt+"px",be=nt+"px"),it&&(Ie=parseFloat(te)+ge+He,oe=parseFloat(be)+ge+He)),N=_e(j,B[de],te+" "+be,Ie+" "+oe,!1,"0px",N);return N},prefix:!0,formatter:Ce("0px 0px 0px 0px",!1,!0)}),Ke("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(b,A,z,H,N,q){return _e(b.style,z,this.format(le(b,z,a,!1,"0px 0px")),this.format(A),!1,"0px",N)},prefix:!0,formatter:Ce("0px 0px",!1,!0)}),Ke("backgroundPosition",{defaultValue:"0 0",parser:function(b,A,z,H,N,q){var B="background-position",j=a||Te(b),ee=this.format((j?$e?j.getPropertyValue(B+"-x")+" "+j.getPropertyValue(B+"-y"):j.getPropertyValue(B):b.currentStyle.backgroundPositionX+" "+b.currentStyle.backgroundPositionY)||"0 0"),de=this.format(A),oe,be,te,Ie,Oe,ge;if(ee.indexOf("%")!==-1!=(de.indexOf("%")!==-1)&&de.split(",").length<2&&(ge=le(b,"backgroundImage").replace(M,""),ge&&ge!=="none")){for(oe=ee.split(" "),be=de.split(" "),pe.setAttribute("src",ge),te=2;--te>-1;)ee=oe[te],Ie=ee.indexOf("%")!==-1,Ie!==(be[te].indexOf("%")!==-1)&&(Oe=te===0?b.offsetWidth-pe.width:b.offsetHeight-pe.height,oe[te]=Ie?parseFloat(ee)/100*Oe+"px":parseFloat(ee)/Oe*100+"%");ee=oe.join(" ")}return this.parseComplex(b.style,ee,de,N,q)},formatter:V}),Ke("backgroundSize",{defaultValue:"0 0",formatter:function(b){return b+="",b.substr(0,2)==="co"?b:V(b.indexOf(" ")===-1?b+" "+b:b)}}),Ke("perspective",{defaultValue:"0px",prefix:!0}),Ke("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),Ke("transformStyle",{prefix:!0}),Ke("backfaceVisibility",{prefix:!0}),Ke("userSelect",{prefix:!0}),Ke("margin",{parser:Xe("marginTop,marginRight,marginBottom,marginLeft")}),Ke("padding",{parser:Xe("paddingTop,paddingRight,paddingBottom,paddingLeft")}),Ke("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(b,A,z,H,N,q){var B,j,ee;return $e<9?(j=b.currentStyle,ee=$e<8?" ":",",B="rect("+j.clipTop+ee+j.clipRight+ee+j.clipBottom+ee+j.clipLeft+")",A=this.format(A).split(",").join(ee)):(B=this.format(le(b,this.p,a,!1,this.dflt)),A=this.format(A)),this.parseComplex(b.style,B,A,N,q)}}),Ke("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),Ke("autoRound,strictUnits",{parser:function(b,A,z,H,N){return N}}),Ke("border",{defaultValue:"0px solid #000",parser:function(b,A,z,H,N,q){var B=le(b,"borderTopWidth",a,!1,"0px"),j=this.format(A).split(" "),ee=j[0].replace(R,"");return ee!=="px"&&(B=parseFloat(B)/Ee(b,"borderTopWidth",1,ee)+ee),this.parseComplex(b.style,this.format(B+" "+le(b,"borderTopStyle",a,!1,"solid")+" "+le(b,"borderTopColor",a,!1,"#000")),j.join(" "),N,q)},color:!0,formatter:function(b){var A=b.split(" ");return A[0]+" "+(A[1]||"solid")+" "+(b.match(Le)||["#000"])[0]}}),Ke("borderWidth",{parser:Xe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),Ke("float,cssFloat,styleFloat",{parser:function(b,A,z,H,N,q){var B=b.style,j="cssFloat"in B?"cssFloat":"styleFloat";return new J(B,j,0,0,N,-1,z,!1,0,B[j],A)}});var qe=function(b){var A=this.t,z=A.filter||le(this.data,"filter")||"",H=this.s+this.c*b|0,N;H===100&&(z.indexOf("atrix(")===-1&&z.indexOf("radient(")===-1&&z.indexOf("oader(")===-1?(A.removeAttribute("filter"),N=!le(this.data,"filter")):(A.filter=z.replace(u,""),N=!0)),N||(this.xn1&&(A.filter=z=z||"alpha(opacity="+H+")"),z.indexOf("pacity")===-1?(H!==0||!this.xn1)&&(A.filter=z+" alpha(opacity="+H+")"):A.filter=z.replace(v,"opacity="+H))};Ke("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(b,A,z,H,N,q){var B=parseFloat(le(b,"opacity",a,!1,"1")),j=b.style,ee=z==="autoAlpha";return typeof A=="string"&&A.charAt(1)==="="&&(A=(A.charAt(0)==="-"?-1:1)*parseFloat(A.substr(2))+B),ee&&B===1&&le(b,"visibility",a)==="hidden"&&A!==0&&(B=0),et?N=new J(j,"opacity",B,A-B,N):(N=new J(j,"opacity",B*100,(A-B)*100,N),N.xn1=ee?1:0,j.zoom=1,N.type=2,N.b="alpha(opacity="+N.s+")",N.e="alpha(opacity="+(N.s+N.c)+")",N.data=b,N.plugin=q,N.setRatio=qe),ee&&(N=new J(j,"visibility",0,0,N,-1,null,!1,0,B!==0?"inherit":"hidden",A===0?"hidden":"inherit"),N.xs0="inherit",H._overwriteProps.push(N.n),H._overwriteProps.push(z)),N}});var Ze=function(b,A){A&&(b.removeProperty?((A.substr(0,2)==="ms"||A.substr(0,6)==="webkit")&&(A="-"+A),b.removeProperty(A.replace(y,"-$1").toLowerCase())):b.removeAttribute(A))},at=function(b){if(this.t._gsClassPT=this,b===1||b===0){this.t.setAttribute("class",b===0?this.b:this.e);for(var A=this.data,z=this.t.style;A;)A.v?z[A.p]=A.v:Ze(z,A.p),A=A._next;b===1&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};Ke("className",{parser:function(b,A,z,H,N,q,B){var j=b.getAttribute("class")||"",ee=b.style.cssText,de,oe,be,te,Ie;if(N=H._classNamePT=new J(b,z,0,0,N,2),N.setRatio=at,N.pr=-11,r=!0,N.b=j,oe=Be(b,a),be=b._gsClassPT,be){for(te={},Ie=be.data;Ie;)te[Ie.p]=1,Ie=Ie._next;be.setRatio(1)}return b._gsClassPT=N,N.e=A.charAt(1)!=="="?A:j.replace(new RegExp("(?:\\s|^)"+A.substr(2)+"(?![\\w-])"),"")+(A.charAt(0)==="+"?" "+A.substr(2):""),b.setAttribute("class",N.e),de=m(b,oe,Be(b),B,te),b.setAttribute("class",j),N.data=de.firstMPT,b.style.cssText!==ee&&(b.style.cssText=ee),N=N.xfirst=H.parse(b,de.difs,N,q),N}});var ot=function(b){if((b===1||b===0)&&this.data._totalTime===this.data._totalDuration&&this.data.data!=="isFromStart"){var A=this.t.style,z=l.transform.parse,H,N,q,B,j;if(this.e==="all")A.cssText="",B=!0;else for(H=this.e.split(" ").join("").split(","),q=H.length;--q>-1;)N=H[q],l[N]&&(l[N].parse===z?B=!0:N=N==="transformOrigin"?an:l[N].p),Ze(A,N);B&&(Ze(A,Rt),j=this.t._gsTransform,j&&(j.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(Ke("clearProps",{parser:function(b,A,z,H,N){return N=new J(b,z,0,0,N,2),N.setRatio=ot,N.e=A,N.pr=-10,N.data=H._tween,r=!0,N}}),c="bezier,throwProps,physicsProps,physics2D".split(","),De=c.length;De--;)Dt(c[De]);c=n.prototype,c._firstPT=c._lastParsedTransform=c._transform=null,c._onInitTween=function(b,A,z,H){if(!b.nodeType)return!1;this._target=U=b,this._tween=z,this._vars=A,Q=H,Ne=A.autoRound,r=!1,s=A.suffixMap||n.suffixMap,a=Te(b),o=this._overwriteProps;var N=b.style,q,B,j,ee,de,oe,be,te,Ie;if(ke&&N.zIndex===""&&(q=le(b,"zIndex",a),(q==="auto"||q==="")&&this._addLazySet(N,"zIndex",0)),typeof A=="string"&&(ee=N.cssText,q=Be(b,a),N.cssText=ee+";"+A,q=m(b,q,Be(b)).difs,!et&&h.test(A)&&(q.opacity=parseFloat(RegExp.$1)),A=q,N.cssText=ee),A.className?this._firstPT=B=l.className.parse(b,A.className,"className",this,null,null,A):this._firstPT=B=this.parse(b,A,null),this._transformType){for(Ie=this._transformType===3,Rt?Fe&&(ke=!0,N.zIndex===""&&(be=le(b,"zIndex",a),(be==="auto"||be==="")&&this._addLazySet(N,"zIndex",0)),Qe&&this._addLazySet(N,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(Ie?"visible":"hidden"))):N.zoom=1,j=B;j&&j._next;)j=j._next;te=new J(b,"transform",0,0,null,2),this._linkCSSP(te,null,j),te.setRatio=Rt?Se:he,te.data=this._transform||ye(b,a,!0),te.tween=z,te.pr=-1,o.pop()}if(r){for(;B;){for(oe=B._next,j=ee;j&&j.pr>B.pr;)j=j._next;(B._prev=j?j._prev:de)?B._prev._next=B:ee=B,(B._next=j)?j._prev=B:de=B,B=oe}this._firstPT=ee}return!0},c.parse=function(b,A,z,H){var N=b.style,q,B,j,ee,de,oe,be,te,Ie,Oe;for(q in A){if(oe=A[q],B=l[q],typeof oe=="function"&&!(B&&B.allowFunc)&&(oe=oe(Q,U)),B)z=B.parse(b,oe,q,this,z,H,A);else if(q.substr(0,2)==="--"){this._tween._propLookup[q]=this._addTween.call(this._tween,b.style,"setProperty",Te(b).getPropertyValue(q)+"",oe+"",q,!1,q);continue}else de=le(b,q,a)+"",Ie=typeof oe=="string",q==="color"||q==="fill"||q==="stroke"||q.indexOf("Color")!==-1||Ie&&f.test(oe)?(Ie||(oe=xe(oe),oe=(oe.length>3?"rgba(":"rgb(")+oe.join(",")+")"),z=_e(N,q,de,oe,!0,"transparent",z,0,H)):Ie&&I.test(oe)?z=_e(N,q,de,oe,!0,null,z,0,H):(j=parseFloat(de),be=j||j===0?de.substr((j+"").length):"",(de===""||de==="auto")&&(q==="width"||q==="height"?(j=D(b,q,a),be="px"):q==="left"||q==="top"?(j=Ae(b,q,a),be="px"):(j=q!=="opacity"?0:1,be="")),Oe=Ie&&oe.charAt(1)==="=",Oe?(ee=parseInt(oe.charAt(0)+"1",10),oe=oe.substr(2),ee*=parseFloat(oe),te=oe.replace(R,"")):(ee=parseFloat(oe),te=Ie?oe.replace(R,""):""),te===""&&(te=q in s?s[q]:be),oe=ee||ee===0?(Oe?ee+j:ee)+te:A[q],be!==te&&(te!==""||q==="lineHeight")&&(ee||ee===0)&&j&&(j=Ee(b,q,j,be),te==="%"?(j/=Ee(b,q,100,"%")/100,A.strictUnits!==!0&&(de=j+"%")):te==="em"||te==="rem"||te==="vw"||te==="vh"?j/=Ee(b,q,1,te):te!=="px"&&(ee=Ee(b,q,ee,te),te="px"),Oe&&(ee||ee===0)&&(oe=ee+j+te)),Oe&&(ee+=j),(j||j===0)&&(ee||ee===0)?(z=new J(N,q,j,ee-j,z,0,q,Ne!==!1&&(te==="px"||q==="zIndex"),0,de,oe),z.xs0=te):N[q]===void 0||!oe&&(oe+""=="NaN"||oe==null)?st("invalid "+q+" tween value: "+A[q]):(z=new J(N,q,ee||j||0,0,z,-1,q,!1,0,de,oe),z.xs0=oe==="none"&&(q==="display"||q.indexOf("Style")!==-1)?de:oe));H&&z&&!z.plugin&&(z.plugin=H)}return z},c.setRatio=function(b){var A=this._firstPT,z=1e-6,H,N,q;if(b===1&&(this._tween._time===this._tween._duration||this._tween._time===0))for(;A;){if(A.type!==2)if(A.r&&A.type!==-1){if(H=A.r(A.s+A.c),!A.type)A.t[A.p]=H+A.xs0;else if(A.type===1){for(q=A.l,N=A.xs0+H+A.xs1,q=1;q<A.l;q++)N+=A["xn"+q]+A["xs"+(q+1)];A.t[A.p]=N}}else A.t[A.p]=A.e;else A.setRatio(b);A=A._next}else if(b||!(this._tween._time===this._tween._duration||this._tween._time===0)||this._tween._rawPrevTime===-1e-6)for(;A;){if(H=A.c*b+A.s,A.r?H=A.r(H):H<z&&H>-z&&(H=0),!A.type)A.t[A.p]=H+A.xs0;else if(A.type===1)if(q=A.l,q===2)A.t[A.p]=A.xs0+H+A.xs1+A.xn1+A.xs2;else if(q===3)A.t[A.p]=A.xs0+H+A.xs1+A.xn1+A.xs2+A.xn2+A.xs3;else if(q===4)A.t[A.p]=A.xs0+H+A.xs1+A.xn1+A.xs2+A.xn2+A.xs3+A.xn3+A.xs4;else if(q===5)A.t[A.p]=A.xs0+H+A.xs1+A.xn1+A.xs2+A.xn2+A.xs3+A.xn3+A.xs4+A.xn4+A.xs5;else{for(N=A.xs0+H+A.xs1,q=1;q<A.l;q++)N+=A["xn"+q]+A["xs"+(q+1)];A.t[A.p]=N}else A.type===-1?A.t[A.p]=A.xs0:A.setRatio&&A.setRatio(b);A=A._next}else for(;A;)A.type!==2?A.t[A.p]=A.b:A.setRatio(b),A=A._next},c._enableTransforms=function(b){this._transform=this._transform||ye(this._target,a,!0),this._transformType=!(this._transform.svg&&ri)&&(b||this._transformType===3)?3:2};var dt=function(b){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};c._addLazySet=function(b,A,z){var H=this._firstPT=new J(b,A,0,0,this._firstPT,2);H.e=z,H.setRatio=dt,H.data=this},c._linkCSSP=function(b,A,z,H){return b&&(A&&(A._prev=b),b._next&&(b._next._prev=b._prev),b._prev?b._prev._next=b._next:this._firstPT===b&&(this._firstPT=b._next,H=!0),z?z._next=b:!H&&this._firstPT===null&&(this._firstPT=b),b._next=A,b._prev=z),b},c._mod=function(b){for(var A=this._firstPT;A;)typeof b[A.p]=="function"&&(A.r=b[A.p]),A=A._next},c._kill=function(b){var A=b,z,H,N;if(b.autoAlpha||b.alpha){A={};for(H in b)A[H]=b[H];A.opacity=1,A.autoAlpha&&(A.visibility=1)}for(b.className&&(z=this._classNamePT)&&(N=z.xfirst,N&&N._prev?this._linkCSSP(N._prev,z._next,N._prev._prev):N===this._firstPT&&(this._firstPT=z._next),z._next&&this._linkCSSP(z._next,z._next._next,N._prev),this._classNamePT=null),z=this._firstPT;z;)z.plugin&&z.plugin!==H&&z.plugin._kill&&(z.plugin._kill(b),H=z.plugin),z=z._next;return t.prototype._kill.call(this,A)};var tt=function(b,A,z){var H,N,q,B;if(b.slice){for(N=b.length;--N>-1;)tt(b[N],A,z);return}for(H=b.childNodes,N=H.length;--N>-1;)q=H[N],B=q.type,q.style&&(A.push(Be(q)),z&&z.push(q)),(B===1||B===9||B===11)&&q.childNodes.length&&tt(q,A,z)};return n.cascadeTo=function(b,A,z){var H=e.to(b,A,z),N=[H],q=[],B=[],j=[],ee=e._internals.reservedProps,de,oe,be,te;for(b=H._targets||H.target,tt(b,q,j),H.render(A,!0,!0),tt(b,B),H.render(0,!0,!0),H._enabled(!0),de=j.length;--de>-1;)if(oe=m(j[de],q[de],B[de]),oe.firstMPT){oe=oe.difs;for(be in z)ee[be]&&(oe[be]=z[be]);te={};for(be in oe)te[be]=q[de][be];N.push(e.fromTo(j[de],A,te,oe))}return N},t.activate([n]),n},!0),function(){var t=Nt._gsDefine.plugin({propName:"roundProps",version:"1.7.0",priority:-1,API:2,init:function(r,s,a){return this._tween=a,!0}}),e=function(r){var s=r<1?Math.pow(10,(r+"").length-2):1;return function(a){return(Math.round(a/r)*r*s|0)/s}},n=function(r,s){for(;r;)!r.f&&!r.blob&&(r.m=s||Math.round),r=r._next},i=t.prototype;i._onInitAllProps=function(){var r=this._tween,s=r.vars.roundProps,a={},o=r._propLookup.roundProps,l,c,p,d;if(typeof s=="object"&&!s.push)for(d in s)a[d]=e(s[d]);else for(typeof s=="string"&&(s=s.split(",")),p=s.length;--p>-1;)a[s[p]]=Math.round;for(d in a)for(l=r._firstPT;l;)c=l._next,l.pg?l.t._mod(a):l.n===d&&(l.f===2&&l.t?n(l.t._firstPT,a[d]):(this._add(l.t,d,l.s,l.c,a[d]),c&&(c._prev=l._prev),l._prev?l._prev._next=c:r._firstPT===l&&(r._firstPT=c),l._next=l._prev=null,r._propLookup[d]=o)),l=c;return!1},i._add=function(r,s,a,o,l){this._addTween(r,s,a,a+o,s,l||Math.round),this._overwriteProps.push(s)}}(),function(){Nt._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(t,e,n,i){var r,s;if(typeof t.setAttribute!="function")return!1;for(r in e)s=e[r],typeof s=="function"&&(s=s(i,t)),this._addTween(t,"setAttribute",t.getAttribute(r)+"",s+"",r,!1,r),this._overwriteProps.push(r);return!0}})}(),Nt._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(t,e,n,i){typeof e!="object"&&(e={rotation:e}),this.finals={};var r=e.useRadians===!0?Math.PI*2:360,s=1e-6,a,o,l,c,p,d;for(a in e)a!=="useRadians"&&(c=e[a],typeof c=="function"&&(c=c(i,t)),d=(c+"").split("_"),o=d[0],l=parseFloat(typeof t[a]!="function"?t[a]:t[a.indexOf("set")||typeof t["get"+a.substr(3)]!="function"?a:"get"+a.substr(3)]()),c=this.finals[a]=typeof o=="string"&&o.charAt(1)==="="?l+parseInt(o.charAt(0)+"1",10)*Number(o.substr(2)):Number(o)||0,p=c-l,d.length&&(o=d.join("_"),o.indexOf("short")!==-1&&(p=p%r,p!==p%(r/2)&&(p=p<0?p+r:p-r)),o.indexOf("_cw")!==-1&&p<0?p=(p+r*9999999999)%r-(p/r|0)*r:o.indexOf("ccw")!==-1&&p>0&&(p=(p-r*9999999999)%r-(p/r|0)*r)),(p>s||p<-s)&&(this._addTween(t,a,l,l+p,a),this._overwriteProps.push(a)));return!0},set:function(t){var e;if(t!==1)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,Nt._gsDefine("easing.Back",["easing.Ease"],function(t){var e=Nt.GreenSockGlobals||Nt,n=e.com.greensock,i=Math.PI*2,r=Math.PI/2,s=n._class,a=function(u,f){var y=s("easing."+u,function(){},!0),E=y.prototype=new t;return E.constructor=y,E.getRatio=f,y},o=t.register||function(){},l=function(u,f,y,E,M){var C=s("easing."+u,{easeOut:new f,easeIn:new y,easeInOut:new E},!0);return o(C,u),C},c=function(u,f,y){this.t=u,this.v=f,y&&(this.next=y,y.prev=this,this.c=y.v-f,this.gap=y.t-u)},p=function(u,f){var y=s("easing."+u,function(M){this._p1=M||M===0?M:1.70158,this._p2=this._p1*1.525},!0),E=y.prototype=new t;return E.constructor=y,E.getRatio=f,E.config=function(M){return new y(M)},y},d=l("Back",p("BackOut",function(u){return(u=u-1)*u*((this._p1+1)*u+this._p1)+1}),p("BackIn",function(u){return u*u*((this._p1+1)*u-this._p1)}),p("BackInOut",function(u){return(u*=2)<1?.5*u*u*((this._p2+1)*u-this._p2):.5*((u-=2)*u*((this._p2+1)*u+this._p2)+2)})),g=s("easing.SlowMo",function(u,f,y){f=f||f===0?f:.7,u==null?u=.7:u>1&&(u=1),this._p=u!==1?f:0,this._p1=(1-u)/2,this._p2=u,this._p3=this._p1+this._p2,this._calcEnd=y===!0},!0),S=g.prototype=new t,_,R,v,h;return S.constructor=g,S.getRatio=function(u){var f=u+(.5-u)*this._p;return u<this._p1?this._calcEnd?1-(u=1-u/this._p1)*u:f-(u=1-u/this._p1)*u*u*u*f:u>this._p3?this._calcEnd?u===1?0:1-(u=(u-this._p3)/this._p1)*u:f+(u-f)*(u=(u-this._p3)/this._p1)*u*u*u:this._calcEnd?1:f},g.ease=new g(.7,.7),S.config=g.config=function(u,f,y){return new g(u,f,y)},_=s("easing.SteppedEase",function(u,f){u=u||1,this._p1=1/u,this._p2=u+(f?0:1),this._p3=f?1:0},!0),S=_.prototype=new t,S.constructor=_,S.getRatio=function(u){return u<0?u=0:u>=1&&(u=.999999999),((this._p2*u|0)+this._p3)*this._p1},S.config=_.config=function(u,f){return new _(u,f)},R=s("easing.ExpoScaleEase",function(u,f,y){this._p1=Math.log(f/u),this._p2=f-u,this._p3=u,this._ease=y},!0),S=R.prototype=new t,S.constructor=R,S.getRatio=function(u){return this._ease&&(u=this._ease.getRatio(u)),(this._p3*Math.exp(this._p1*u)-this._p3)/this._p2},S.config=R.config=function(u,f,y){return new R(u,f,y)},v=s("easing.RoughEase",function(u){u=u||{};for(var f=u.taper||"none",y=[],E=0,M=(u.points||20)|0,C=M,T=u.randomize!==!1,w=u.clamp===!0,L=u.template instanceof t?u.template:null,k=typeof u.strength=="number"?u.strength*.4:.4,I,O,F,X,Z,G;--C>-1;)I=T?Math.random():1/M*C,O=L?L.getRatio(I):I,f==="none"?F=k:f==="out"?(X=1-I,F=X*X*k):f==="in"?F=I*I*k:I<.5?(X=I*2,F=X*X*.5*k):(X=(1-I)*2,F=X*X*.5*k),T?O+=Math.random()*F-F*.5:C%2?O+=F*.5:O-=F*.5,w&&(O>1?O=1:O<0&&(O=0)),y[E++]={x:I,y:O};for(y.sort(function(K,me){return K.x-me.x}),G=new c(1,1,null),C=M;--C>-1;)Z=y[C],G=new c(Z.x,Z.y,G);this._prev=new c(0,0,G.t!==0?G:G.next)},!0),S=v.prototype=new t,S.constructor=v,S.getRatio=function(u){var f=this._prev;if(u>f.t){for(;f.next&&u>=f.t;)f=f.next;f=f.prev}else for(;f.prev&&u<=f.t;)f=f.prev;return this._prev=f,f.v+(u-f.t)/f.gap*f.c},S.config=function(u){return new v(u)},v.ease=new v,l("Bounce",a("BounceOut",function(u){return u<1/2.75?7.5625*u*u:u<2/2.75?7.5625*(u-=1.5/2.75)*u+.75:u<2.5/2.75?7.5625*(u-=2.25/2.75)*u+.9375:7.5625*(u-=2.625/2.75)*u+.984375}),a("BounceIn",function(u){return(u=1-u)<1/2.75?1-7.5625*u*u:u<2/2.75?1-(7.5625*(u-=1.5/2.75)*u+.75):u<2.5/2.75?1-(7.5625*(u-=2.25/2.75)*u+.9375):1-(7.5625*(u-=2.625/2.75)*u+.984375)}),a("BounceInOut",function(u){var f=u<.5;return f?u=1-u*2:u=u*2-1,u<1/2.75?u=7.5625*u*u:u<2/2.75?u=7.5625*(u-=1.5/2.75)*u+.75:u<2.5/2.75?u=7.5625*(u-=2.25/2.75)*u+.9375:u=7.5625*(u-=2.625/2.75)*u+.984375,f?(1-u)*.5:u*.5+.5})),l("Circ",a("CircOut",function(u){return Math.sqrt(1-(u=u-1)*u)}),a("CircIn",function(u){return-(Math.sqrt(1-u*u)-1)}),a("CircInOut",function(u){return(u*=2)<1?-.5*(Math.sqrt(1-u*u)-1):.5*(Math.sqrt(1-(u-=2)*u)+1)})),h=function(u,f,y){var E=s("easing."+u,function(C,T){this._p1=C>=1?C:1,this._p2=(T||y)/(C<1?C:1),this._p3=this._p2/i*(Math.asin(1/this._p1)||0),this._p2=i/this._p2},!0),M=E.prototype=new t;return M.constructor=E,M.getRatio=f,M.config=function(C,T){return new E(C,T)},E},l("Elastic",h("ElasticOut",function(u){return this._p1*Math.pow(2,-10*u)*Math.sin((u-this._p3)*this._p2)+1},.3),h("ElasticIn",function(u){return-(this._p1*Math.pow(2,10*(u-=1))*Math.sin((u-this._p3)*this._p2))},.3),h("ElasticInOut",function(u){return(u*=2)<1?-.5*(this._p1*Math.pow(2,10*(u-=1))*Math.sin((u-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(u-=1))*Math.sin((u-this._p3)*this._p2)*.5+1},.45)),l("Expo",a("ExpoOut",function(u){return 1-Math.pow(2,-10*u)}),a("ExpoIn",function(u){return Math.pow(2,10*(u-1))-.001}),a("ExpoInOut",function(u){return(u*=2)<1?.5*Math.pow(2,10*(u-1)):.5*(2-Math.pow(2,-10*(u-1)))})),l("Sine",a("SineOut",function(u){return Math.sin(u*r)}),a("SineIn",function(u){return-Math.cos(u*r)+1}),a("SineInOut",function(u){return-.5*(Math.cos(Math.PI*u)-1)})),s("easing.EaseLookup",{find:function(u){return t.map[u]}},!0),o(e.SlowMo,"SlowMo","ease,"),o(v,"RoughEase","ease,"),o(_,"SteppedEase","ease,"),d},!0)});Nt._gsDefine&&Nt._gsQueue.pop()();(function(t,e){var n={},i=t.document,r=t.GreenSockGlobals=t.GreenSockGlobals||t,s=r[e];if(s)return typeof Kn<"u"&&Kn.exports&&(Kn.exports=s),s;var a=function(m){var x=m.split("."),P=r,D;for(D=0;D<x.length;D++)P[x[D]]=P=P[x[D]]||{};return P},o=a("com.greensock"),l=1e-8,c=function(m){var x=[],P=m.length,D;for(D=0;D!==P;x.push(m[D++]));return x},p=function(){},d=function(){var m=Object.prototype.toString,x=m.call([]);return function(P){return P!=null&&(P instanceof Array||typeof P=="object"&&!!P.push&&m.call(P)===x)}}(),g,S,_,R,v,h={},u=function(m,x,P,D){this.sc=h[m]?h[m].sc:[],h[m]=this,this.gsClass=null,this.func=P;var V=[];this.check=function(Y){for(var ne=x.length,ie=ne,$,we,xe,Me;--ne>-1;)($=h[x[ne]]||new u(x[ne],[])).gsClass?(V[ne]=$.gsClass,ie--):Y&&$.sc.push(this);if(ie===0&&P){if(we=("com.greensock."+m).split("."),xe=we.pop(),Me=a(we.join("."))[xe]=this.gsClass=P.apply(P,V),D)if(r[xe]=n[xe]=Me,typeof Kn<"u"&&Kn.exports)if(m===e){Kn.exports=n[e]=Me;for(ne in n)Me[ne]=n[ne]}else n[e]&&(n[e][xe]=Me);else typeof define=="function"&&define.amd&&define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+m.split(".").pop(),[],function(){return Me});for(ne=0;ne<this.sc.length;ne++)this.sc[ne].check()}},this.check(!0)},f=t._gsDefine=function(m,x,P,D){return new u(m,x,P,D)},y=o._class=function(m,x,P){return x=x||function(){},f(m,[],function(){return x},P),x};f.globals=r;var E=[0,0,1,1],M=y("easing.Ease",function(m,x,P,D){this._func=m,this._type=P||0,this._power=D||0,this._params=x?E.concat(x):E},!0),C=M.map={},T=M.register=function(m,x,P,D){for(var V=x.split(","),Y=V.length,ne=(P||"easeIn,easeOut,easeInOut").split(","),ie,$,we,xe;--Y>-1;)for($=V[Y],ie=D?y("easing."+$,null,!0):o.easing[$]||{},we=ne.length;--we>-1;)xe=ne[we],C[$+"."+xe]=C[xe+$]=ie[xe]=m.getRatio?m:m[xe]||new m};for(_=M.prototype,_._calcEnd=!1,_.getRatio=function(m){if(this._func)return this._params[0]=m,this._func.apply(null,this._params);var x=this._type,P=this._power,D=x===1?1-m:x===2?m:m<.5?m*2:(1-m)*2;return P===1?D*=D:P===2?D*=D*D:P===3?D*=D*D*D:P===4&&(D*=D*D*D*D),x===1?1-D:x===2?D:m<.5?D/2:1-D/2},g=["Linear","Quad","Cubic","Quart","Quint,Strong"],S=g.length;--S>-1;)_=g[S]+",Power"+S,T(new M(null,null,1,S),_,"easeOut",!0),T(new M(null,null,2,S),_,"easeIn"+(S===0?",easeNone":"")),T(new M(null,null,3,S),_,"easeInOut");C.linear=o.easing.Linear.easeIn,C.swing=o.easing.Quad.easeInOut;var w=y("events.EventDispatcher",function(m){this._listeners={},this._eventTarget=m||this});_=w.prototype,_.addEventListener=function(m,x,P,D,V){V=V||0;var Y=this._listeners[m],ne=0,ie,$;for(this===R&&!v&&R.wake(),Y==null&&(this._listeners[m]=Y=[]),$=Y.length;--$>-1;)ie=Y[$],ie.c===x&&ie.s===P?Y.splice($,1):ne===0&&ie.pr<V&&(ne=$+1);Y.splice(ne,0,{c:x,s:P,up:D,pr:V})},_.removeEventListener=function(m,x){var P=this._listeners[m],D;if(P){for(D=P.length;--D>-1;)if(P[D].c===x){P.splice(D,1);return}}},_.dispatchEvent=function(m){var x=this._listeners[m],P,D,V;if(x)for(P=x.length,P>1&&(x=x.slice(0)),D=this._eventTarget;--P>-1;)V=x[P],V&&(V.up?V.c.call(V.s||D,{type:m,target:D}):V.c.call(V.s||D))};var L=t.requestAnimationFrame,k=t.cancelAnimationFrame,I=Date.now||function(){return new Date().getTime()},O=I();for(g=["ms","moz","webkit","o"],S=g.length;--S>-1&&!L;)L=t[g[S]+"RequestAnimationFrame"],k=t[g[S]+"CancelAnimationFrame"]||t[g[S]+"CancelRequestAnimationFrame"];y("Ticker",function(m,x){var P=this,D=I(),V=x!==!1&&L?"auto":!1,Y=500,ne=33,ie="tick",$,we,xe,Me,Le,Ce=function(Xe){var _t=I()-O,J,ze;_t>Y&&(D+=_t-ne),O+=_t,P.time=(O-D)/1e3,J=P.time-Le,(!$||J>0||Xe===!0)&&(P.frame++,Le+=J+(J>=Me?.004:Me-J),ze=!0),Xe!==!0&&(xe=we(Ce)),ze&&P.dispatchEvent(ie)};w.call(P),P.time=P.frame=0,P.tick=function(){Ce(!0)},P.lagSmoothing=function(Xe,_t){if(!arguments.length)return Y<1/l;Y=Xe||1/l,ne=Math.min(_t,Y,0)},P.sleep=function(){xe!=null&&(!V||!k?clearTimeout(xe):k(xe),we=p,xe=null,P===R&&(v=!1))},P.wake=function(Xe){xe!==null?P.sleep():Xe?D+=-O+(O=I()):P.frame>10&&(O=I()-Y+5),we=$===0?p:!V||!L?function(_t){return setTimeout(_t,(Le-P.time)*1e3+1|0)}:L,P===R&&(v=!0),Ce(2)},P.fps=function(Xe){if(!arguments.length)return $;$=Xe,Me=1/($||60),Le=this.time+Me,P.wake()},P.useRAF=function(Xe){if(!arguments.length)return V;P.sleep(),V=Xe,P.fps($)},P.fps(m),setTimeout(function(){V==="auto"&&P.frame<5&&(i||{}).visibilityState!=="hidden"&&P.useRAF(!1)},1500)}),_=o.Ticker.prototype=new o.events.EventDispatcher,_.constructor=o.Ticker;var F=y("core.Animation",function(m,x){if(this.vars=x=x||{},this._duration=this._totalDuration=m||0,this._delay=Number(x.delay)||0,this._timeScale=1,this._active=!!x.immediateRender,this.data=x.data,this._reversed=!!x.reversed,!!fe){v||R.wake();var P=this.vars.useFrames?se:fe;P.add(this,P._time),this.vars.paused&&this.paused(!0)}});R=F.ticker=new o.Ticker,_=F.prototype,_._dirty=_._gc=_._initted=_._paused=!1,_._totalTime=_._time=0,_._rawPrevTime=-1,_._next=_._last=_._onUpdate=_._timeline=_.timeline=null,_._paused=!1;var X=function(){v&&I()-O>2e3&&((i||{}).visibilityState!=="hidden"||!R.lagSmoothing())&&R.wake();var m=setTimeout(X,2e3);m.unref&&m.unref()};X(),_.play=function(m,x){return m!=null&&this.seek(m,x),this.reversed(!1).paused(!1)},_.pause=function(m,x){return m!=null&&this.seek(m,x),this.paused(!0)},_.resume=function(m,x){return m!=null&&this.seek(m,x),this.paused(!1)},_.seek=function(m,x){return this.totalTime(Number(m),x!==!1)},_.restart=function(m,x){return this.reversed(!1).paused(!1).totalTime(m?-this._delay:0,x!==!1,!0)},_.reverse=function(m,x){return m!=null&&this.seek(m||this.totalDuration(),x),this.reversed(!0).paused(!1)},_.render=function(m,x,P){},_.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},_.isActive=function(){var m=this._timeline,x=this._startTime,P;return!m||!this._gc&&!this._paused&&m.isActive()&&(P=m.rawTime(!0))>=x&&P<x+this.totalDuration()/this._timeScale-l},_._enabled=function(m,x){return v||R.wake(),this._gc=!m,this._active=this.isActive(),x!==!0&&(m&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!m&&this.timeline&&this._timeline._remove(this,!0)),!1},_._kill=function(m,x){return this._enabled(!1,!1)},_.kill=function(m,x){return this._kill(m,x),this},_._uncache=function(m){for(var x=m?this:this.timeline;x;)x._dirty=!0,x=x.timeline;return this},_._swapSelfInParams=function(m){for(var x=m.length,P=m.concat();--x>-1;)m[x]==="{self}"&&(P[x]=this);return P},_._callback=function(m){var x=this.vars,P=x[m],D=x[m+"Params"],V=x[m+"Scope"]||x.callbackScope||this,Y=D?D.length:0;switch(Y){case 0:P.call(V);break;case 1:P.call(V,D[0]);break;case 2:P.call(V,D[0],D[1]);break;default:P.apply(V,D)}},_.eventCallback=function(m,x,P,D){if((m||"").substr(0,2)==="on"){var V=this.vars;if(arguments.length===1)return V[m];x==null?delete V[m]:(V[m]=x,V[m+"Params"]=d(P)&&P.join("").indexOf("{self}")!==-1?this._swapSelfInParams(P):P,V[m+"Scope"]=D),m==="onUpdate"&&(this._onUpdate=x)}return this},_.delay=function(m){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+m-this._delay),this._delay=m,this):this._delay},_.duration=function(m){return arguments.length?(this._duration=this._totalDuration=m,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&m!==0&&this.totalTime(this._totalTime*(m/this._duration),!0),this):(this._dirty=!1,this._duration)},_.totalDuration=function(m){return this._dirty=!1,arguments.length?this.duration(m):this._totalDuration},_.time=function(m,x){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(m>this._duration?this._duration:m,x)):this._time},_.totalTime=function(m,x,P){if(v||R.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(m<0&&!P&&(m+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var D=this._totalDuration,V=this._timeline;if(m>D&&!P&&(m=D),this._startTime=(this._paused?this._pauseTime:V._time)-(this._reversed?D-m:m)/this._timeScale,V._dirty||this._uncache(!1),V._timeline)for(;V._timeline;)V._timeline._time!==(V._startTime+V._totalTime)/V._timeScale&&V.totalTime(V._totalTime,!0),V=V._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==m||this._duration===0)&&(pe.length&&Pe(),this.render(m,x,!1),pe.length&&Pe())}return this},_.progress=_.totalProgress=function(m,x){var P=this.duration();return arguments.length?this.totalTime(P*m,x):P?this._time/P:this.ratio},_.startTime=function(m){return arguments.length?(m!==this._startTime&&(this._startTime=m,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,m-this._delay)),this):this._startTime},_.endTime=function(m){return this._startTime+(m!=!1?this.totalDuration():this.duration())/this._timeScale},_.timeScale=function(m){if(!arguments.length)return this._timeScale;var x,P;for(m=m||l,this._timeline&&this._timeline.smoothChildTiming&&(x=this._pauseTime,P=x||x===0?x:this._timeline.totalTime(),this._startTime=P-(P-this._startTime)*this._timeScale/m),this._timeScale=m,P=this.timeline;P&&P.timeline;)P._dirty=!0,P.totalDuration(),P=P.timeline;return this},_.reversed=function(m){return arguments.length?(m!=this._reversed&&(this._reversed=m,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},_.paused=function(m){if(!arguments.length)return this._paused;var x=this._timeline,P,D;return m!=this._paused&&x&&(!v&&!m&&R.wake(),P=x.rawTime(),D=P-this._pauseTime,!m&&x.smoothChildTiming&&(this._startTime+=D,this._uncache(!1)),this._pauseTime=m?P:null,this._paused=m,this._active=this.isActive(),!m&&D!==0&&this._initted&&this.duration()&&(P=x.smoothChildTiming?this._totalTime:(P-this._startTime)/this._timeScale,this.render(P,P===this._totalTime,!0))),this._gc&&!m&&this._enabled(!0,!1),this};var Z=y("core.SimpleTimeline",function(m){F.call(this,0,m),this.autoRemoveChildren=this.smoothChildTiming=!0});_=Z.prototype=new F,_.constructor=Z,_.kill()._gc=!1,_._first=_._last=_._recent=null,_._sortChildren=!1,_.add=_.insert=function(m,x,P,D){var V,Y;if(m._startTime=Number(x||0)+m._delay,m._paused&&this!==m._timeline&&(m._pauseTime=this.rawTime()-(m._timeline.rawTime()-m._pauseTime)),m.timeline&&m.timeline._remove(m,!0),m.timeline=m._timeline=this,m._gc&&m._enabled(!0,!0),V=this._last,this._sortChildren)for(Y=m._startTime;V&&V._startTime>Y;)V=V._prev;return V?(m._next=V._next,V._next=m):(m._next=this._first,this._first=m),m._next?m._next._prev=m:this._last=m,m._prev=V,this._recent=m,this._timeline&&this._uncache(!0),this},_._remove=function(m,x){return m.timeline===this&&(x||m._enabled(!1,!0),m._prev?m._prev._next=m._next:this._first===m&&(this._first=m._next),m._next?m._next._prev=m._prev:this._last===m&&(this._last=m._prev),m._next=m._prev=m.timeline=null,m===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},_.render=function(m,x,P){var D=this._first,V;for(this._totalTime=this._time=this._rawPrevTime=m;D;)V=D._next,(D._active||m>=D._startTime&&!D._paused&&!D._gc)&&(D._reversed?D.render((D._dirty?D.totalDuration():D._totalDuration)-(m-D._startTime)*D._timeScale,x,P):D.render((m-D._startTime)*D._timeScale,x,P)),D=V},_.rawTime=function(){return v||R.wake(),this._totalTime};var G=y("TweenLite",function(m,x,P){if(F.call(this,x,P),this.render=G.prototype.render,m==null)throw"Cannot tween a null target.";this.target=m=typeof m!="string"?m:G.selector(m)||m;var D=m.jquery||m.length&&m!==t&&m[0]&&(m[0]===t||m[0].nodeType&&m[0].style&&!m.nodeType),V=this.vars.overwrite,Y,ne,ie;if(this._overwrite=V=V==null?Q[G.defaultOverwrite]:typeof V=="number"?V>>0:Q[V],(D||m instanceof Array||m.push&&d(m))&&typeof m[0]!="number")for(this._targets=ie=c(m),this._propLookup=[],this._siblings=[],Y=0;Y<ie.length;Y++){if(ne=ie[Y],ne){if(typeof ne=="string"){ne=ie[Y--]=G.selector(ne),typeof ne=="string"&&ie.splice(Y+1,1);continue}else if(ne.length&&ne!==t&&ne[0]&&(ne[0]===t||ne[0].nodeType&&ne[0].style&&!ne.nodeType)){ie.splice(Y--,1),this._targets=ie=ie.concat(c(ne));continue}}else{ie.splice(Y--,1);continue}this._siblings[Y]=Te(ne,this,!1),V===1&&this._siblings[Y].length>1&&Ee(ne,this,null,1,this._siblings[Y])}else this._propLookup={},this._siblings=Te(m,this,!1),V===1&&this._siblings.length>1&&Ee(m,this,null,1,this._siblings);(this.vars.immediateRender||x===0&&this._delay===0&&this.vars.immediateRender!==!1)&&(this._time=-l,this.render(Math.min(0,-this._delay)))},!0),K=function(m){return m&&m.length&&m!==t&&m[0]&&(m[0]===t||m[0].nodeType&&m[0].style&&!m.nodeType)},me=function(m,x){var P={},D;for(D in m)!U[D]&&(!(D in x)||D==="transform"||D==="x"||D==="y"||D==="width"||D==="height"||D==="className"||D==="border")&&(!et[D]||et[D]&&et[D]._autoCSS)&&(P[D]=m[D],delete m[D]);m.css=P};_=G.prototype=new F,_.constructor=G,_.kill()._gc=!1,_.ratio=0,_._firstPT=_._targets=_._overwrittenProps=_._startAt=null,_._notifyPluginsOfEnabled=_._lazy=!1,G.version="2.1.3",G.defaultEase=_._ease=new M(null,null,1,1),G.defaultOverwrite="auto",G.ticker=R,G.autoSleep=120,G.lagSmoothing=function(m,x){R.lagSmoothing(m,x)},G.selector=t.$||t.jQuery||function(m){var x=t.$||t.jQuery;return x?(G.selector=x,x(m)):(i||(i=t.document),i?i.querySelectorAll?i.querySelectorAll(m):i.getElementById(m.charAt(0)==="#"?m.substr(1):m):m)};var pe=[],re={},ae=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,Ne=/[\+-]=-?[\.\d]/,ke=function(m){for(var x=this._firstPT,P=1e-6,D;x;)D=x.blob?m===1&&this.end!=null?this.end:m?this.join(""):this.start:x.c*m+x.s,x.m?D=x.m.call(this._tween,D,this._target||x.t,this._tween):D<P&&D>-P&&!x.blob&&(D=0),x.f?x.fp?x.t[x.p](x.fp,D):x.t[x.p](D):x.t[x.p]=D,x=x._next},Fe=function(m){return(m*1e3|0)/1e3+""},Ye=function(m,x,P,D){var V=[],Y=0,ne="",ie=0,$,we,xe,Me,Le,Ce,Xe;for(V.start=m,V.end=x,m=V[0]=m+"",x=V[1]=x+"",P&&(P(V),m=V[0],x=V[1]),V.length=0,$=m.match(ae)||[],we=x.match(ae)||[],D&&(D._next=null,D.blob=1,V._firstPT=V._applyPT=D),Le=we.length,Me=0;Me<Le;Me++)Xe=we[Me],Ce=x.substr(Y,x.indexOf(Xe,Y)-Y),ne+=Ce||!Me?Ce:",",Y+=Ce.length,ie?ie=(ie+1)%5:Ce.substr(-5)==="rgba("&&(ie=1),Xe===$[Me]||$.length<=Me?ne+=Xe:(ne&&(V.push(ne),ne=""),xe=parseFloat($[Me]),V.push(xe),V._firstPT={_next:V._firstPT,t:V,p:V.length-1,s:xe,c:(Xe.charAt(1)==="="?parseInt(Xe.charAt(0)+"1",10)*parseFloat(Xe.substr(2)):parseFloat(Xe)-xe)||0,f:0,m:ie&&ie<4?Math.round:Fe}),Y+=Xe.length;return ne+=x.substr(Y),ne&&V.push(ne),V.setRatio=ke,Ne.test(x)&&(V.end=null),V},Qe=function(m,x,P,D,V,Y,ne,ie,$){typeof D=="function"&&(D=D($||0,m));var we=typeof m[x],xe=we!=="function"?"":x.indexOf("set")||typeof m["get"+x.substr(3)]!="function"?x:"get"+x.substr(3),Me=P!=="get"?P:xe?ne?m[xe](ne):m[xe]():m[x],Le=typeof D=="string"&&D.charAt(1)==="=",Ce={t:m,p:x,s:Me,f:we==="function",pg:0,n:V||x,m:Y?typeof Y=="function"?Y:Math.round:0,pr:0,c:Le?parseInt(D.charAt(0)+"1",10)*parseFloat(D.substr(2)):parseFloat(D)-Me||0},Xe;if((typeof Me!="number"||typeof D!="number"&&!Le)&&(ne||isNaN(Me)||!Le&&isNaN(D)||typeof Me=="boolean"||typeof D=="boolean"?(Ce.fp=ne,Xe=Ye(Me,Le?parseFloat(Ce.s)+Ce.c+(Ce.s+"").replace(/[0-9\-\.]/g,""):D,ie||G.defaultStringFilter,Ce),Ce={t:Xe,p:"setRatio",s:0,c:1,f:2,pg:0,n:V||x,pr:0,m:0}):(Ce.s=parseFloat(Me),Le||(Ce.c=parseFloat(D)-Ce.s||0))),Ce.c)return(Ce._next=this._firstPT)&&(Ce._next._prev=Ce),this._firstPT=Ce,Ce},$e=G._internals={isArray:d,isSelector:K,lazyTweens:pe,blobDif:Ye},et=G._plugins={},Mt=$e.tweenLookup={},st=0,U=$e.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1,stagger:1},Q={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,true:1,false:0},se=F._rootFramesTimeline=new Z,fe=F._rootTimeline=new Z,ue=30,Pe=$e.lazyRender=function(){var m=pe.length,x,P;for(re={},x=0;x<m;x++)P=pe[x],P&&P._lazy!==!1&&(P.render(P._lazy[0],P._lazy[1],!0),P._lazy=!1);pe.length=0};fe._startTime=R.time,se._startTime=R.frame,fe._active=se._active=!0,setTimeout(Pe,1),F._updateRoot=G.render=function(){var m,x,P;if(pe.length&&Pe(),fe.render((R.time-fe._startTime)*fe._timeScale,!1,!1),se.render((R.frame-se._startTime)*se._timeScale,!1,!1),pe.length&&Pe(),R.frame>=ue){ue=R.frame+(parseInt(G.autoSleep,10)||120);for(P in Mt){for(x=Mt[P].tweens,m=x.length;--m>-1;)x[m]._gc&&x.splice(m,1);x.length===0&&delete Mt[P]}if(P=fe._first,(!P||P._paused)&&G.autoSleep&&!se._first&&R._listeners.tick.length===1){for(;P&&P._paused;)P=P._next;P||R.sleep()}}},R.addEventListener("tick",F._updateRoot);var Te=function(m,x,P){var D=m._gsTweenID,V,Y;if(Mt[D||(m._gsTweenID=D="t"+st++)]||(Mt[D]={target:m,tweens:[]}),x&&(V=Mt[D].tweens,V[Y=V.length]=x,P))for(;--Y>-1;)V[Y]===x&&V.splice(Y,1);return Mt[D].tweens},le=function(m,x,P,D){var V=m.vars.onOverwrite,Y,ne;return V&&(Y=V(m,x,P,D)),V=G.onOverwrite,V&&(ne=V(m,x,P,D)),Y!==!1&&ne!==!1},Ee=function(m,x,P,D,V){var Y,ne,ie,$;if(D===1||D>=4){for($=V.length,Y=0;Y<$;Y++)if((ie=V[Y])!==x)ie._gc||ie._kill(null,m,x)&&(ne=!0);else if(D===5)break;return ne}var we=x._startTime+l,xe=[],Me=0,Le=x._duration===0,Ce;for(Y=V.length;--Y>-1;)(ie=V[Y])===x||ie._gc||ie._paused||(ie._timeline!==x._timeline?(Ce=Ce||Ae(x,0,Le),Ae(ie,Ce,Le)===0&&(xe[Me++]=ie)):ie._startTime<=we&&ie._startTime+ie.totalDuration()/ie._timeScale>we&&((Le||!ie._initted)&&we-ie._startTime<=l*2||(xe[Me++]=ie)));for(Y=Me;--Y>-1;)if(ie=xe[Y],$=ie._firstPT,D===2&&ie._kill(P,m,x)&&(ne=!0),D!==2||!ie._firstPT&&ie._initted&&$){if(D!==2&&!le(ie,x))continue;ie._enabled(!1,!1)&&(ne=!0)}return ne},Ae=function(m,x,P){for(var D=m._timeline,V=D._timeScale,Y=m._startTime;D._timeline;){if(Y+=D._startTime,V*=D._timeScale,D._paused)return-100;D=D._timeline}return Y/=V,Y>x?Y-x:P&&Y===x||!m._initted&&Y-x<2*l?l:(Y+=m.totalDuration()/m._timeScale/V)>x+l?0:Y-x-l};_._init=function(){var m=this.vars,x=this._overwrittenProps,P=this._duration,D=!!m.immediateRender,V=m.ease,Y=this._startAt,ne,ie,$,we,xe,Me;if(m.startAt){Y&&(Y.render(-1,!0),Y.kill()),xe={};for(we in m.startAt)xe[we]=m.startAt[we];if(xe.data="isStart",xe.overwrite=!1,xe.immediateRender=!0,xe.lazy=D&&m.lazy!==!1,xe.startAt=xe.delay=null,xe.onUpdate=m.onUpdate,xe.onUpdateParams=m.onUpdateParams,xe.onUpdateScope=m.onUpdateScope||m.callbackScope||this,this._startAt=G.to(this.target||{},0,xe),D){if(this._time>0)this._startAt=null;else if(P!==0)return}}else if(m.runBackwards&&P!==0)if(Y)Y.render(-1,!0),Y.kill(),this._startAt=null;else{this._time!==0&&(D=!1),$={};for(we in m)(!U[we]||we==="autoCSS")&&($[we]=m[we]);if($.overwrite=0,$.data="isFromStart",$.lazy=D&&m.lazy!==!1,$.immediateRender=D,this._startAt=G.to(this.target,0,$),!D)this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null);else if(this._time===0)return}if(this._ease=V=V?V instanceof M?V:typeof V=="function"?new M(V,m.easeParams):C[V]||G.defaultEase:G.defaultEase,m.easeParams instanceof Array&&V.config&&(this._ease=V.config.apply(V,m.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(Me=this._targets.length,ne=0;ne<Me;ne++)this._initProps(this._targets[ne],this._propLookup[ne]={},this._siblings[ne],x?x[ne]:null,ne)&&(ie=!0);else ie=this._initProps(this.target,this._propLookup,this._siblings,x,0);if(ie&&G._onPluginEvent("_onInitAllProps",this),x&&(this._firstPT||typeof this.target!="function"&&this._enabled(!1,!1)),m.runBackwards)for($=this._firstPT;$;)$.s+=$.c,$.c=-$.c,$=$._next;this._onUpdate=m.onUpdate,this._initted=!0},_._initProps=function(m,x,P,D,V){var Y,ne,ie,$,we,xe;if(m==null)return!1;re[m._gsTweenID]&&Pe(),this.vars.css||m.style&&m!==t&&m.nodeType&&et.css&&this.vars.autoCSS!==!1&&me(this.vars,m);for(Y in this.vars)if(xe=this.vars[Y],U[Y])xe&&(xe instanceof Array||xe.push&&d(xe))&&xe.join("").indexOf("{self}")!==-1&&(this.vars[Y]=xe=this._swapSelfInParams(xe,this));else if(et[Y]&&($=new et[Y])._onInitTween(m,this.vars[Y],this,V)){for(this._firstPT=we={_next:this._firstPT,t:$,p:"setRatio",s:0,c:1,f:1,n:Y,pg:1,pr:$._priority,m:0},ne=$._overwriteProps.length;--ne>-1;)x[$._overwriteProps[ne]]=this._firstPT;($._priority||$._onInitAllProps)&&(ie=!0),($._onDisable||$._onEnable)&&(this._notifyPluginsOfEnabled=!0),we._next&&(we._next._prev=we)}else x[Y]=Qe.call(this,m,Y,"get",xe,Y,0,null,this.vars.stringFilter,V);return D&&this._kill(D,m)?this._initProps(m,x,P,D,V):this._overwrite>1&&this._firstPT&&P.length>1&&Ee(m,this,x,this._overwrite,P)?(this._kill(x,m),this._initProps(m,x,P,D,V)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(re[m._gsTweenID]=!0),ie)},_.render=function(m,x,P){var D=this,V=D._time,Y=D._duration,ne=D._rawPrevTime,ie,$,we,xe;if(m>=Y-l&&m>=0)D._totalTime=D._time=Y,D.ratio=D._ease._calcEnd?D._ease.getRatio(1):1,D._reversed||(ie=!0,$="onComplete",P=P||D._timeline.autoRemoveChildren),Y===0&&(D._initted||!D.vars.lazy||P)&&(D._startTime===D._timeline._duration&&(m=0),(ne<0||m<=0&&m>=-l||ne===l&&D.data!=="isPause")&&ne!==m&&(P=!0,ne>l&&($="onReverseComplete")),D._rawPrevTime=xe=!x||m||ne===m?m:l);else if(m<l)D._totalTime=D._time=0,D.ratio=D._ease._calcEnd?D._ease.getRatio(0):0,(V!==0||Y===0&&ne>0)&&($="onReverseComplete",ie=D._reversed),m>-l?m=0:m<0&&(D._active=!1,Y===0&&(D._initted||!D.vars.lazy||P)&&(ne>=0&&!(ne===l&&D.data==="isPause")&&(P=!0),D._rawPrevTime=xe=!x||m||ne===m?m:l)),(!D._initted||D._startAt&&D._startAt.progress())&&(P=!0);else if(D._totalTime=D._time=m,D._easeType){var Me=m/Y,Le=D._easeType,Ce=D._easePower;(Le===1||Le===3&&Me>=.5)&&(Me=1-Me),Le===3&&(Me*=2),Ce===1?Me*=Me:Ce===2?Me*=Me*Me:Ce===3?Me*=Me*Me*Me:Ce===4&&(Me*=Me*Me*Me*Me),D.ratio=Le===1?1-Me:Le===2?Me:m/Y<.5?Me/2:1-Me/2}else D.ratio=D._ease.getRatio(m/Y);if(!(D._time===V&&!P)){if(!D._initted){if(D._init(),!D._initted||D._gc)return;if(!P&&D._firstPT&&(D.vars.lazy!==!1&&D._duration||D.vars.lazy&&!D._duration)){D._time=D._totalTime=V,D._rawPrevTime=ne,pe.push(D),D._lazy=[m,x];return}D._time&&!ie?D.ratio=D._ease.getRatio(D._time/Y):ie&&D._ease._calcEnd&&(D.ratio=D._ease.getRatio(D._time===0?0:1))}for(D._lazy!==!1&&(D._lazy=!1),D._active||!D._paused&&D._time!==V&&m>=0&&(D._active=!0),V===0&&(D._startAt&&(m>=0?D._startAt.render(m,!0,P):$||($="_dummyGS")),D.vars.onStart&&(D._time!==0||Y===0)&&(x||D._callback("onStart"))),we=D._firstPT;we;)we.f?we.t[we.p](we.c*D.ratio+we.s):we.t[we.p]=we.c*D.ratio+we.s,we=we._next;D._onUpdate&&(m<0&&D._startAt&&m!==-1e-4&&D._startAt.render(m,!0,P),x||(D._time!==V||ie||P)&&D._callback("onUpdate")),$&&(!D._gc||P)&&(m<0&&D._startAt&&!D._onUpdate&&m!==-1e-4&&D._startAt.render(m,!0,P),ie&&(D._timeline.autoRemoveChildren&&D._enabled(!1,!1),D._active=!1),!x&&D.vars[$]&&D._callback($),Y===0&&D._rawPrevTime===l&&xe!==l&&(D._rawPrevTime=0))}},_._kill=function(m,x,P){if(m==="all"&&(m=null),m==null&&(x==null||x===this.target))return this._lazy=!1,this._enabled(!1,!1);x=typeof x!="string"?x||this._targets||this.target:G.selector(x)||x;var D=P&&this._time&&P._startTime===this._startTime&&this._timeline===P._timeline,V=this._firstPT,Y,ne,ie,$,we,xe,Me,Le,Ce;if((d(x)||K(x))&&typeof x[0]!="number")for(Y=x.length;--Y>-1;)this._kill(m,x[Y],P)&&(xe=!0);else{if(this._targets){for(Y=this._targets.length;--Y>-1;)if(x===this._targets[Y]){we=this._propLookup[Y]||{},this._overwrittenProps=this._overwrittenProps||[],ne=this._overwrittenProps[Y]=m?this._overwrittenProps[Y]||{}:"all";break}}else{if(x!==this.target)return!1;we=this._propLookup,ne=this._overwrittenProps=m?this._overwrittenProps||{}:"all"}if(we){if(Me=m||we,Le=m!==ne&&ne!=="all"&&m!==we&&(typeof m!="object"||!m._tempKill),P&&(G.onOverwrite||this.vars.onOverwrite)){for(ie in Me)we[ie]&&(Ce||(Ce=[]),Ce.push(ie));if((Ce||!m)&&!le(this,P,x,Ce))return!1}for(ie in Me)($=we[ie])&&(D&&($.f?$.t[$.p]($.s):$.t[$.p]=$.s,xe=!0),$.pg&&$.t._kill(Me)&&(xe=!0),(!$.pg||$.t._overwriteProps.length===0)&&($._prev?$._prev._next=$._next:$===this._firstPT&&(this._firstPT=$._next),$._next&&($._next._prev=$._prev),$._next=$._prev=null),delete we[ie]),Le&&(ne[ie]=1);!this._firstPT&&this._initted&&V&&this._enabled(!1,!1)}}return xe},_.invalidate=function(){this._notifyPluginsOfEnabled&&G._onPluginEvent("_onDisable",this);var m=this._time;return this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],F.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-l,this.render(m,!1,this.vars.lazy!==!1)),this},_._enabled=function(m,x){if(v||R.wake(),m&&this._gc){var P=this._targets,D;if(P)for(D=P.length;--D>-1;)this._siblings[D]=Te(P[D],this,!0);else this._siblings=Te(this.target,this,!0)}return F.prototype._enabled.call(this,m,x),this._notifyPluginsOfEnabled&&this._firstPT?G._onPluginEvent(m?"_onEnable":"_onDisable",this):!1},G.to=function(m,x,P){return new G(m,x,P)},G.from=function(m,x,P){return P.runBackwards=!0,P.immediateRender=P.immediateRender!=!1,new G(m,x,P)},G.fromTo=function(m,x,P,D){return D.startAt=P,D.immediateRender=D.immediateRender!=!1&&P.immediateRender!=!1,new G(m,x,D)},G.delayedCall=function(m,x,P,D,V){return new G(x,0,{delay:m,onComplete:x,onCompleteParams:P,callbackScope:D,onReverseComplete:x,onReverseCompleteParams:P,immediateRender:!1,lazy:!1,useFrames:V,overwrite:0})},G.set=function(m,x){return new G(m,0,x)},G.getTweensOf=function(m,x){if(m==null)return[];m=typeof m!="string"?m:G.selector(m)||m;var P,D,V,Y;if((d(m)||K(m))&&typeof m[0]!="number"){for(P=m.length,D=[];--P>-1;)D=D.concat(G.getTweensOf(m[P],x));for(P=D.length;--P>-1;)for(Y=D[P],V=P;--V>-1;)Y===D[V]&&D.splice(P,1)}else if(m._gsTweenID)for(D=Te(m).concat(),P=D.length;--P>-1;)(D[P]._gc||x&&!D[P].isActive())&&D.splice(P,1);return D||[]},G.killTweensOf=G.killDelayedCallsTo=function(m,x,P){typeof x=="object"&&(P=x,x=!1);for(var D=G.getTweensOf(m,x),V=D.length;--V>-1;)D[V]._kill(P,m)};var Be=y("plugins.TweenPlugin",function(m,x){this._overwriteProps=(m||"").split(","),this._propName=this._overwriteProps[0],this._priority=x||0,this._super=Be.prototype},!0);if(_=Be.prototype,Be.version="1.19.0",Be.API=2,_._firstPT=null,_._addTween=Qe,_.setRatio=ke,_._kill=function(m){var x=this._overwriteProps,P=this._firstPT,D;if(m[this._propName]!=null)this._overwriteProps=[];else for(D=x.length;--D>-1;)m[x[D]]!=null&&x.splice(D,1);for(;P;)m[P.n]!=null&&(P._next&&(P._next._prev=P._prev),P._prev?(P._prev._next=P._next,P._prev=null):this._firstPT===P&&(this._firstPT=P._next)),P=P._next;return!1},_._mod=_._roundProps=function(m){for(var x=this._firstPT,P;x;)P=m[this._propName]||x.n!=null&&m[x.n.split(this._propName+"_").join("")],P&&typeof P=="function"&&(x.f===2?x.t._applyPT.m=P:x.m=P),x=x._next},G._onPluginEvent=function(m,x){var P=x._firstPT,D,V,Y,ne,ie;if(m==="_onInitAllProps"){for(;P;){for(ie=P._next,V=Y;V&&V.pr>P.pr;)V=V._next;(P._prev=V?V._prev:ne)?P._prev._next=P:Y=P,(P._next=V)?V._prev=P:ne=P,P=ie}P=x._firstPT=Y}for(;P;)P.pg&&typeof P.t[m]=="function"&&P.t[m]()&&(D=!0),P=P._next;return D},Be.activate=function(m){for(var x=m.length;--x>-1;)m[x].API===Be.API&&(et[new m[x]()._propName]=m[x]);return!0},f.plugin=function(m){if(!m||!m.propName||!m.init||!m.API)throw"illegal plugin definition.";var x=m.propName,P=m.priority||0,D=m.overwriteProps,V={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},Y=y("plugins."+x.charAt(0).toUpperCase()+x.substr(1)+"Plugin",function(){Be.call(this,x,P),this._overwriteProps=D||[]},m.global===!0),ne=Y.prototype=new Be(x),ie;ne.constructor=Y,Y.API=m.API;for(ie in V)typeof m[ie]=="function"&&(ne[V[ie]]=m[ie]);return Y.version=m.version,Be.activate([Y]),Y},g=t._gsQueue,g){for(S=0;S<g.length;S++)g[S]();for(_ in h)h[_].func||t.console.log("GSAP encountered missing dependency: "+_)}v=!1})(typeof Kn<"u"&&Kn.exports&&typeof global<"u"?global:globalThis||window,"TweenMax")});export default Ew();
