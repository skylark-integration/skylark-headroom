/**
 * skylark-headroom - A version of headroom that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-headroom/
 * @license MIT
 */
define(["./features","./scroller"],function(e,t){var n=e.passiveEventsSupported;return function(e,r,o){var s,c=n(),i=!1,a=t(e),l=a.scrollY(),u={};function d(){var e=Math.round(a.scrollY()),t=a.height(),n=a.scrollHeight();u.scrollY=e,u.lastScrollY=l,u.direction=e>l?"down":"up",u.distance=Math.abs(e-l),u.isOutOfBounds=e<0||e+t>n,u.top=e<=r.offset,u.bottom=e+t>=n,u.toleranceExceeded=u.distance>r.tolerance[u.direction],o(u),l=e,i=!1}function f(){i||(i=!0,s=requestAnimationFrame(d))}var v=!!c&&{passive:!0,capture:!1};return e.addEventListener("scroll",f,v),d(),{destroy:function(){cancelAnimationFrame(s),e.removeEventListener("scroll",f,v)}}}});
//# sourceMappingURL=sourcemaps/trackScroll.js.map
