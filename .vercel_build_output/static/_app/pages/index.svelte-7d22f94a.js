var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,r=(e,s,n)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,a=(t,a)=>{for(var o in a||(a={}))e.call(a,o)&&r(t,o,a[o]);if(s)for(var o of s(a))n.call(a,o)&&r(t,o,a[o]);return t};import{_ as o}from"../chunks/preload-helper-9f12a5fd.js";import{S as c,i as l,s as $,T as i,e as f,j as p,k as u,c as m,a as d,m as g,n as h,d as x,b as w,f as y,o as v,P as b,v as P,r as j,w as k,D as E,l as C,B as _,u as A,t as I,g as N,Q as O,h as D,R as M,H as L,L as S,ad as U,ae as V,af as z,ag as H,O as B,C as G,ah as R,a8 as T,_ as J,z as Q,ai as q,aj as F,a0 as K,J as W,a6 as X}from"../chunks/vendor-6f77cb67.js";import{B as Y}from"../chunks/config-cd4c144b.js";import{P as Z}from"../chunks/PostCard-4ac14582.js";import{t as tt,a as et}from"../chunks/auth-ed8453e1.js";import{g as st}from"../chunks/navigation-9e49acea.js";import{p as nt}from"../chunks/post-a16affd8.js";import"../chunks/singletons-6b53f818.js";function rt(t){let e,s;return e=new M({props:{path:L}}),{c(){p(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){v(e,t,n),s=!0},p:O,i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function at(t){let e,s,n,r;const a=[ct,ot],o=[];function c(t,e){return t[1].user.profilePic?0:1}return e=c(t),s=o[e]=a[e](t),{c(){s.c(),n=C()},l(t){s.l(t),n=C()},m(t,s){o[e].m(t,s),y(t,n,s),r=!0},p(t,r){let l=e;e=c(t),e===l?o[e].p(t,r):(_(),j(o[l],1,1,(()=>{o[l]=null})),A(),s=o[e],s?s.p(t,r):(s=o[e]=a[e](t),s.c()),P(s,1),s.m(n.parentNode,n))},i(t){r||(P(s),r=!0)},o(t){j(s),r=!1},d(t){o[e].d(t),t&&x(n)}}}function ot(t){let e,s;return e=new i({props:{class:"blue white-text",$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c(){p(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){v(e,t,n),s=!0},p(t,s){const n={};6&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function ct(t){let e,s;return e=new i({props:{size:60,$$slots:{default:[$t]},$$scope:{ctx:t}}}),{c(){p(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){v(e,t,n),s=!0},p(t,s){const n={};6&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function lt(t){var e;let s,n=(null==(e=t[1].user)?void 0:e.name.split("")[0].toUpperCase())+"";return{c(){s=I(n)},l(t){s=N(t,n)},m(t,e){y(t,s,e)},p(t,e){var r;2&e&&n!==(n=(null==(r=t[1].user)?void 0:r.name.split("")[0].toUpperCase())+"")&&D(s,n)},d(t){t&&x(s)}}}function $t(t){let e,s;return{c(){e=f("img"),this.h()},l(t){e=m(t,"IMG",{src:!0,alt:!0}),this.h()},h(){e.src!==(s=t[1].user.profilePic)&&w(e,"src",s),w(e,"alt","profile")},m(t,s){y(t,e,s)},p(t,n){2&n&&e.src!==(s=t[1].user.profilePic)&&w(e,"src",s)},d(t){t&&x(e)}}}function it(t){let e,s,n,r;const a=[at,rt],o=[];function c(t,e){return t[1].isAuthenticated?0:1}return e=c(t),s=o[e]=a[e](t),{c(){s.c(),n=C()},l(t){s.l(t),n=C()},m(t,s){o[e].m(t,s),y(t,n,s),r=!0},p(t,r){let l=e;e=c(t),e===l?o[e].p(t,r):(_(),j(o[l],1,1,(()=>{o[l]=null})),A(),s=o[e],s?s.p(t,r):(s=o[e]=a[e](t),s.c()),P(s,1),s.m(n.parentNode,n))},i(t){r||(P(s),r=!0)},o(t){j(s),r=!1},d(t){o[e].d(t),t&&x(n)}}}function ft(t){let e;return{c(){e=I("Login account")},l(t){e=N(t,"Login account")},m(t,s){y(t,e,s)},p:O,d(t){t&&x(e)}}}function pt(t){let e,s=t[1].user.name+"";return{c(){e=I(s)},l(t){e=N(t,s)},m(t,s){y(t,e,s)},p(t,n){2&n&&s!==(s=t[1].user.name+"")&&D(e,s)},d(t){t&&x(e)}}}function ut(t){let e,s,n,r,a,o;function c(t,e){return t[1].isAuthenticated?pt:ft}s=new i({props:{size:60,$$slots:{default:[it]},$$scope:{ctx:t}}});let l=c(t),$=l(t);return{c(){e=f("div"),p(s.$$.fragment),n=u(),r=f("h6"),$.c(),this.h()},l(t){e=m(t,"DIV",{class:!0});var a=d(e);g(s.$$.fragment,a),n=h(a),r=m(a,"H6",{class:!0});var o=d(r);$.l(o),o.forEach(x),a.forEach(x),this.h()},h(){w(r,"class","ml-4 font-weight-bold"),w(e,"class",a="theme-"+t[0]+" d-flex align-center pa-2")},m(t,a){y(t,e,a),v(s,e,null),b(e,n),b(e,r),$.m(r,null),o=!0},p(t,[n]){const i={};6&n&&(i.$$scope={dirty:n,ctx:t}),s.$set(i),l===(l=c(t))&&$?$.p(t,n):($.d(1),$=l(t),$&&($.c(),$.m(r,null))),(!o||1&n&&a!==(a="theme-"+t[0]+" d-flex align-center pa-2"))&&w(e,"class",a)},i(t){o||(P(s.$$.fragment,t),o=!0)},o(t){j(s.$$.fragment,t),o=!1},d(t){t&&x(e),k(s),$.d()}}}function mt(t,e,s){let n,r;return E(t,tt,(t=>s(0,n=t))),E(t,et,(t=>s(1,r=t))),[n,r]}class dt extends c{constructor(t){super(),l(this,t,mt,ut,$,{})}}function gt(t,e,s){const n=t.slice();return n[3]=e[s],n}function ht(t){let e;return{c(){e=I("Connected users")},l(t){e=N(t,"Connected users")},m(t,s){y(t,e,s)},d(t){t&&x(e)}}}function xt(t){let e;return{c(){e=I("Suggestions for you")},l(t){e=N(t,"Suggestions for you")},m(t,s){y(t,e,s)},d(t){t&&x(e)}}}function wt(t){let e;function s(t,e){return t[1].isAuthenticated?xt:ht}let n=s(t),r=n(t);return{c(){r.c(),e=C()},l(t){r.l(t),e=C()},m(t,s){r.m(t,s),y(t,e,s)},p(t,a){n!==(n=s(t))&&(r.d(1),r=n(t),r&&(r.c(),r.m(e.parentNode,e)))},d(t){r.d(t),t&&x(e)}}}function yt(t){let e,s,n=t[3].name+"";return{c(){e=I(n),s=u()},l(t){e=N(t,n),s=h(t)},m(t,n){y(t,e,n),y(t,s,n)},p(t,s){1&s&&n!==(n=t[3].name+"")&&D(e,n)},d(t){t&&x(e),t&&x(s)}}}function vt(t){let e,s;return e=new i({props:{class:"blue white-text",$$slots:{default:[Pt]},$$scope:{ctx:t}}}),{c(){p(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){v(e,t,n),s=!0},p(t,s){const n={};65&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function bt(t){let e,s;return e=new i({props:{size:40,$$slots:{default:[jt]},$$scope:{ctx:t}}}),{c(){p(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){v(e,t,n),s=!0},p(t,s){const n={};65&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function Pt(t){let e,s=t[3].name.split("")[0].toUpperCase()+"";return{c(){e=I(s)},l(t){e=N(t,s)},m(t,s){y(t,e,s)},p(t,n){1&n&&s!==(s=t[3].name.split("")[0].toUpperCase()+"")&&D(e,s)},d(t){t&&x(e)}}}function jt(t){let e,s,n;return{c(){e=f("img"),this.h()},l(t){e=m(t,"IMG",{src:!0,alt:!0}),this.h()},h(){e.src!==(s=t[3].profilePic)&&w(e,"src",s),w(e,"alt",n=t[3].name)},m(t,s){y(t,e,s)},p(t,r){1&r&&e.src!==(s=t[3].profilePic)&&w(e,"src",s),1&r&&n!==(n=t[3].name)&&w(e,"alt",n)},d(t){t&&x(e)}}}function kt(t){let e,s,n,r,a;const o=[bt,vt],c=[];function l(t,e){return t[3].profilePic?0:1}return s=l(t),n=c[s]=o[s](t),{c(){e=f("span"),n.c(),r=u(),this.h()},l(t){e=m(t,"SPAN",{slot:!0});var s=d(e);n.l(s),r=h(s),s.forEach(x),this.h()},h(){w(e,"slot","prepend")},m(t,n){y(t,e,n),c[s].m(e,null),b(e,r),a=!0},p(t,a){let $=s;s=l(t),s===$?c[s].p(t,a):(_(),j(c[$],1,1,(()=>{c[$]=null})),A(),n=c[s],n?n.p(t,a):(n=c[s]=o[s](t),n.c()),P(n,1),n.m(e,r))},i(t){a||(P(n),a=!0)},o(t){j(n),a=!1},d(t){t&&x(e),c[s].d()}}}function Et(t,e){let s,n,r;return n=new B({props:{$$slots:{prepend:[kt],default:[yt]},$$scope:{ctx:e}}}),n.$on("click",(function(){return e[2](e[3])})),{key:t,first:null,c(){s=C(),p(n.$$.fragment),this.h()},l(t){s=C(),g(n.$$.fragment,t),this.h()},h(){this.first=s},m(t,e){y(t,s,e),v(n,t,e),r=!0},p(t,s){e=t;const r={};65&s&&(r.$$scope={dirty:s,ctx:e}),n.$set(r)},i(t){r||(P(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){t&&x(s),k(n,t)}}}function Ct(t){let e,s,n=[],r=new Map,a=t[0];const o=t=>t[3]._id;for(let c=0;c<a.length;c+=1){let e=gt(t,a,c),s=o(e);r.set(s,n[c]=Et(s,e))}return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=C()},l(t){for(let e=0;e<n.length;e+=1)n[e].l(t);e=C()},m(t,r){for(let e=0;e<n.length;e+=1)n[e].m(t,r);y(t,e,r),s=!0},p(t,s){1&s&&(a=t[0],_(),n=z(n,s,o,1,t,a,r,e.parentNode,H,Et,e,gt),A())},i(t){if(!s){for(let t=0;t<a.length;t+=1)P(n[t]);s=!0}},o(t){for(let e=0;e<n.length;e+=1)j(n[e]);s=!1},d(t){for(let e=0;e<n.length;e+=1)n[e].d(t);t&&x(e)}}}function _t(t){let e,s,n,r;return e=new U({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),n=new V({props:{value:"[1]",$$slots:{default:[Ct]},$$scope:{ctx:t}}}),{c(){p(e.$$.fragment),s=u(),p(n.$$.fragment)},l(t){g(e.$$.fragment,t),s=h(t),g(n.$$.fragment,t)},m(t,a){v(e,t,a),y(t,s,a),v(n,t,a),r=!0},p(t,s){const r={};66&s&&(r.$$scope={dirty:s,ctx:t}),e.$set(r);const a={};65&s&&(a.$$scope={dirty:s,ctx:t}),n.$set(a)},i(t){r||(P(e.$$.fragment,t),P(n.$$.fragment,t),r=!0)},o(t){j(e.$$.fragment,t),j(n.$$.fragment,t),r=!1},d(t){k(e,t),t&&x(s),k(n,t)}}}function At(t){let e,s;return e=new S({props:{class:"elevation-0",style:"width:300px",$$slots:{default:[_t]},$$scope:{ctx:t}}}),{c(){p(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){v(e,t,n),s=!0},p(t,[s]){const n={};67&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function It(t,e,s){let n;E(t,et,(t=>s(1,n=t)));let{users:r}=e;return t.$$set=t=>{"users"in t&&s(0,r=t.users)},[r,n,t=>st(`/profile/${t._id}`)]}class Nt extends c{constructor(t){super(),l(this,t,It,At,$,{users:0})}}const{set:Ot,subscribe:Dt,update:Mt}=G({users:[]}),Lt={subscribe:Dt,addUsers:t=>Mt((e=>a(a({},e),{users:t})))};function St(t,e,s){const n=t.slice();return n[11]=e[s],n}function Ut(t){let e,s;return e=new F({props:{class:"pa-6 mb-8",style:"display: flex;align-items: center;justify-content: center;",$$slots:{default:[zt]},$$scope:{ctx:t}}}),{c(){p(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){v(e,t,n),s=!0},p(t,s){const n={};16384&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function Vt(t){let e,s,n;return e=new M({props:{path:W}}),{c(){p(e.$$.fragment),s=I("\n            Create Post")},l(t){g(e.$$.fragment,t),s=N(t,"\n            Create Post")},m(t,r){v(e,t,r),y(t,s,r),n=!0},p:O,i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){k(e,t),t&&x(s)}}}function zt(t){let e,s;return e=new K({props:{size:"large",class:"blue white-text",$$slots:{default:[Vt]},$$scope:{ctx:t}}}),e.$on("click",t[9]),{c(){p(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){v(e,t,n),s=!0},p(t,s){const n={};16384&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function Ht(t,e){let s,n,r;return n=new Z({props:{post:e[11]}}),{key:t,first:null,c(){s=f("div"),p(n.$$.fragment),this.h()},l(t){s=m(t,"DIV",{class:!0});var e=d(s);g(n.$$.fragment,e),e.forEach(x),this.h()},h(){w(s,"class","mb-8"),this.first=s},m(t,e){y(t,s,e),v(n,s,null),r=!0},p(t,s){e=t;const r={};8&s&&(r.post=e[11]),n.$set(r)},i(t){r||(P(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){t&&x(s),k(n)}}}function Bt(t){let e,s,n;return s=new K({props:{class:"blue white-text",$$slots:{default:[Tt]},$$scope:{ctx:t}}}),s.$on("click",t[6]),{c(){e=f("div"),p(s.$$.fragment),this.h()},l(t){e=m(t,"DIV",{class:!0});var n=d(e);g(s.$$.fragment,n),n.forEach(x),this.h()},h(){w(e,"class","d-flex justify-center")},m(t,r){y(t,e,r),v(s,e,null),n=!0},p(t,e){const n={};16386&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(P(s.$$.fragment,t),n=!0)},o(t){j(s.$$.fragment,t),n=!1},d(t){t&&x(e),k(s)}}}function Gt(t){let e;return{c(){e=I("Load More")},l(t){e=N(t,"Load More")},m(t,s){y(t,e,s)},i:O,o:O,d(t){t&&x(e)}}}function Rt(t){let e,s;return e=new X({props:{indeterminate:!0,color:"white"}}),{c(){p(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){v(e,t,n),s=!0},i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function Tt(t){let e,s,n,r;const a=[Rt,Gt],o=[];function c(t,e){return t[1]?0:1}return e=c(t),s=o[e]=a[e](t),{c(){s.c(),n=C()},l(t){s.l(t),n=C()},m(t,s){o[e].m(t,s),y(t,n,s),r=!0},p(t,r){let l=e;e=c(t),e!==l&&(_(),j(o[l],1,1,(()=>{o[l]=null})),A(),s=o[e],s||(s=o[e]=a[e](t),s.c()),P(s,1),s.m(n.parentNode,n))},i(t){r||(P(s),r=!0)},o(t){j(s),r=!1},d(t){o[e].d(t),t&&x(n)}}}function Jt(t){let e,s,n,r,a=[],o=new Map,c=t[2].isAuthenticated&&Ut(t),l=t[3].posts;const $=t=>t[11]._id;for(let f=0;f<l.length;f+=1){let e=St(t,l,f),s=$(e);o.set(s,a[f]=Ht(s,e))}let i=t[5]>=t[0]+1&&Bt(t);return{c(){c&&c.c(),e=u();for(let t=0;t<a.length;t+=1)a[t].c();s=u(),i&&i.c(),n=C()},l(t){c&&c.l(t),e=h(t);for(let e=0;e<a.length;e+=1)a[e].l(t);s=h(t),i&&i.l(t),n=C()},m(t,o){c&&c.m(t,o),y(t,e,o);for(let e=0;e<a.length;e+=1)a[e].m(t,o);y(t,s,o),i&&i.m(t,o),y(t,n,o),r=!0},p(t,r){t[2].isAuthenticated?c?(c.p(t,r),4&r&&P(c,1)):(c=Ut(t),c.c(),P(c,1),c.m(e.parentNode,e)):c&&(_(),j(c,1,1,(()=>{c=null})),A()),8&r&&(l=t[3].posts,_(),a=z(a,r,$,1,t,l,o,s.parentNode,H,Ht,s,St),A()),t[5]>=t[0]+1?i?(i.p(t,r),1&r&&P(i,1)):(i=Bt(t),i.c(),P(i,1),i.m(n.parentNode,n)):i&&(_(),j(i,1,1,(()=>{i=null})),A())},i(t){if(!r){P(c);for(let t=0;t<l.length;t+=1)P(a[t]);P(i),r=!0}},o(t){j(c);for(let e=0;e<a.length;e+=1)j(a[e]);j(i),r=!1},d(t){c&&c.d(t),t&&x(e);for(let e=0;e<a.length;e+=1)a[e].d(t);t&&x(s),i&&i.d(t),t&&x(n)}}}function Qt(t){let e,s,n,r,a;return s=new dt({}),r=new Nt({props:{users:t[4].users}}),{c(){e=f("div"),p(s.$$.fragment),n=u(),p(r.$$.fragment),this.h()},l(t){e=m(t,"DIV",{style:!0});var a=d(e);g(s.$$.fragment,a),n=h(a),g(r.$$.fragment,a),a.forEach(x),this.h()},h(){J(e,"position","sticky"),J(e,"top","64px")},m(t,o){y(t,e,o),v(s,e,null),b(e,n),v(r,e,null),a=!0},p(t,e){const s={};16&e&&(s.users=t[4].users),r.$set(s)},i(t){a||(P(s.$$.fragment,t),P(r.$$.fragment,t),a=!0)},o(t){j(s.$$.fragment,t),j(r.$$.fragment,t),a=!1},d(t){t&&x(e),k(s),k(r)}}}function qt(t){let e,s,n,r;return e=new q({props:{sm:12,cols:12,md:8,$$slots:{default:[Jt]},$$scope:{ctx:t}}}),n=new q({props:{sm:12,md:4,class:"d-none d-md-block",$$slots:{default:[Qt]},$$scope:{ctx:t}}}),{c(){p(e.$$.fragment),s=u(),p(n.$$.fragment)},l(t){g(e.$$.fragment,t),s=h(t),g(n.$$.fragment,t)},m(t,a){v(e,t,a),y(t,s,a),v(n,t,a),r=!0},p(t,s){const r={};16399&s&&(r.$$scope={dirty:s,ctx:t}),e.$set(r);const a={};16400&s&&(a.$$scope={dirty:s,ctx:t}),n.$set(a)},i(t){r||(P(e.$$.fragment,t),P(n.$$.fragment,t),r=!0)},o(t){j(e.$$.fragment,t),j(n.$$.fragment,t),r=!1},d(t){k(e,t),t&&x(s),k(n,t)}}}function Ft(t){let e,s,n,r;return n=new R({props:{style:"margin:auto",$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){e=u(),s=f("div"),p(n.$$.fragment),this.h()},l(t){T('[data-svelte="svelte-1nb0ry8"]',document.head).forEach(x),e=h(t),s=m(t,"DIV",{style:!0});var r=d(s);g(n.$$.fragment,r),r.forEach(x),this.h()},h(){document.title="Home | Sveltegram",J(s,"max-width","1200px "),J(s,"margin","auto")},m(t,a){y(t,e,a),y(t,s,a),v(n,s,null),r=!0},p(t,[e]){const s={};16415&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){r||(P(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){t&&x(e),t&&x(s),k(n)}}}async function Kt({fetch:t}){const e=await t(`${Y}/api/post?page=0&limit=3`),s=await t(`${Y}/api/user?page=0&limit=5`),n=await Promise.all([e,s]);return{props:{posts:await n[0].json(),users:await n[1].json()}}}function Wt(t,e,s){let n,r,a;E(t,et,(t=>s(2,n=t))),E(t,nt,(t=>s(3,r=t))),E(t,Lt,(t=>s(4,a=t)));let c,{posts:l}=e,{users:$}=e,i=0,f=l.data.pagination.totalPage,p=!1;Q((async()=>{c=await o((()=>import("../chunks/axiosApi-9cda58a5.js")),["/_app/chunks/axiosApi-9cda58a5.js","/_app/chunks/config-cd4c144b.js","/_app/chunks/index-e21d43e3.js"])})),nt.addPosts(l.data.posts),Lt.addUsers($.data.users);return t.$$set=t=>{"posts"in t&&s(7,l=t.posts),"users"in t&&s(8,$=t.users)},[i,p,n,r,a,f,async function(){try{s(1,p=!0),s(0,i+=1);const t=await c.getAllPosts({page:i,limit:3});"success"===t.type&&nt.addMorePosts(t.data.posts)}catch(t){console.log(t)}finally{s(1,p=!1)}},l,$,()=>st("/createPost")]}export default class extends c{constructor(t){super(),l(this,t,Wt,Ft,$,{posts:7,users:8})}}export{Kt as load};