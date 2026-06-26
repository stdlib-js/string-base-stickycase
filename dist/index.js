"use strict";var u=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var o=u(function(f,i){
var c=require('@stdlib/random-base-bernoulli/dist');function n(t,r){var a="",e,s;for(r=typeof r=="number"&&r>=0&&r<=1?r:.5,s=0;s<t.length;s++)e=t.charAt(s),c(r)?e=e.toUpperCase():e=e.toLowerCase(),a+=e;return a}i.exports=n
});var l=o();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
