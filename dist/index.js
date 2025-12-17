"use strict";var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var E=l(function(p,t){
var o=require('@stdlib/complex-float32-base-assert-is-almost-equal/dist'),q=require('@stdlib/complex-float64-base-assert-is-almost-equal/dist'),u=require('@stdlib/assert-is-number/dist').isPrimitive,m=require('@stdlib/number-float64-base-assert-is-almost-equal/dist'),s=require('@stdlib/assert-is-complex-like/dist');function n(e,r,i){return e===r?!0:u(e)&&u(r)?m(e,r,i):s(e)&&s(r)?e.BYTES_PER_ELEMENT===4&&r.BYTES_PER_ELEMENT===4?o(e,r,i):q(e,r,i):!1}t.exports=n
});var v=E();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
