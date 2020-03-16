/**
 * skylark-headroom - A version of headroom that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-headroom/
 * @license MIT
 */
define([],function(){return function(t){return(r=t)&&r.document&&function(t){return 9===t.nodeType}(r.document)?(n=(e=t).document,i=n.body,o=n.documentElement,{scrollHeight:function(){return Math.max(i.scrollHeight,o.scrollHeight,i.offsetHeight,o.offsetHeight,i.clientHeight,o.clientHeight)},height:function(){return e.innerHeight||o.clientHeight||i.clientHeight},scrollY:function(){return void 0!==e.pageYOffset?e.pageYOffset:(o||i.parentNode||i).scrollTop}}):function(t){return{scrollHeight:function(){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},height:function(){return Math.max(t.offsetHeight,t.clientHeight)},scrollY:function(){return t.scrollTop}}}(t);var e,n,i,o,r}});
//# sourceMappingURL=sourcemaps/scroller.js.map
