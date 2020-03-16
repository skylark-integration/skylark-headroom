/**
 * skylark-headroom - A version of headroom that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-headroom/
 * @license MIT
 */
define(["skylark-jquery","./Headroom"],function(o,a){o.fn.headroom=function(e){return this.each(function(){var t=o(this),n=t.data("headroom"),r="object"==typeof e&&e;r=o.extend(!0,{},a.options,r),n||((n=new a(this,r)).init(),t.data("headroom",n)),"string"==typeof e&&(n[e](),"destroy"===e&&t.removeData("headroom"))})},o("[data-headroom]").each(function(){var a=o(this);a.headroom(a.data())})});
//# sourceMappingURL=sourcemaps/jQuery.headroom.js.map
