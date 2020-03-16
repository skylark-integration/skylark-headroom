/**
 * skylark-headroom - A version of headroom that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-headroom/
 * @license MIT
 */
define([],function(){function e(){return"undefined"!=typeof window}return{isBrowser:e,passiveEventsSupported:function(){var e=!1;try{var n={get passive(){e=!0}};window.addEventListener("test",n,n),window.removeEventListener("test",n,n)}catch(n){e=!1}return e},isSupported:function(){return!!(e()&&function(){}.bind&&"classList"in document.documentElement&&Object.assign&&Object.keys&&requestAnimationFrame)}}});
//# sourceMappingURL=sourcemaps/features.js.map
