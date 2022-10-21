// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5LyA0":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "3d3089e824ca2391";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"gdpHN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _rellax = require("rellax");
var _rellaxDefault = parcelHelpers.interopDefault(_rellax);
var rellax = new (0, _rellaxDefault.default)(".rellax", {
    center: true,
    breakpoints: [
        576,
        768,
        1150,
        1201,
        1250,
        1550
    ],
    offset: true
});

},{"rellax":"64yfe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"64yfe":[function(require,module,exports) {
var global = arguments[3];
// ------------------------------------------
// Rellax.js
// Buttery smooth parallax library
// Copyright (c) 2016 Moe Amaya (@moeamaya)
// MIT license
//
// Thanks to Paraxify.js and Jaime Cabllero
// for parallax concepts
// ------------------------------------------
(function(root, factory) {
    if (typeof define === "function" && define.amd) // AMD. Register as an anonymous module.
    define([], factory);
    else if (module.exports) // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
    else // Browser globals (root is window)
    root.Rellax = factory();
})(typeof window !== "undefined" ? window : global, function() {
    var Rellax = function(el, options) {
        "use strict";
        var self = Object.create(Rellax.prototype);
        var posY = 0;
        var screenY = 0;
        var posX = 0;
        var screenX = 0;
        var blocks = [];
        var pause = true;
        // check what requestAnimationFrame to use, and if
        // it's not supported, use the onscroll event
        var loop = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(callback) {
            return setTimeout(callback, 1000 / 60);
        };
        // store the id for later use
        var loopId = null;
        // Test via a getter in the options object to see if the passive property is accessed
        var supportsPassive = false;
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function() {
                    supportsPassive = true;
                }
            });
            window.addEventListener("testPassive", null, opts);
            window.removeEventListener("testPassive", null, opts);
        } catch (e) {}
        // check what cancelAnimation method to use
        var clearLoop = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout;
        // check which transform property to use
        var transformProp = window.transformProp || function() {
            var testEl = document.createElement("div");
            if (testEl.style.transform === null) {
                var vendors = [
                    "Webkit",
                    "Moz",
                    "ms"
                ];
                for(var vendor in vendors){
                    if (testEl.style[vendors[vendor] + "Transform"] !== undefined) return vendors[vendor] + "Transform";
                }
            }
            return "transform";
        }();
        // Default Settings
        self.options = {
            speed: -2,
            verticalSpeed: null,
            horizontalSpeed: null,
            breakpoints: [
                576,
                768,
                1201
            ],
            center: false,
            wrapper: null,
            relativeToWrapper: false,
            round: true,
            vertical: true,
            horizontal: false,
            verticalScrollAxis: "y",
            horizontalScrollAxis: "x",
            callback: function() {}
        };
        // User defined options (might have more in the future)
        if (options) Object.keys(options).forEach(function(key) {
            self.options[key] = options[key];
        });
        function validateCustomBreakpoints() {
            if (self.options.breakpoints.length === 3 && Array.isArray(self.options.breakpoints)) {
                var isAscending = true;
                var isNumerical = true;
                var lastVal;
                self.options.breakpoints.forEach(function(i) {
                    if (typeof i !== "number") isNumerical = false;
                    if (lastVal !== null) {
                        if (i < lastVal) isAscending = false;
                    }
                    lastVal = i;
                });
                if (isAscending && isNumerical) return;
            }
            // revert defaults if set incorrectly
            self.options.breakpoints = [
                576,
                768,
                1201
            ];
            console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted");
        }
        if (options && options.breakpoints) validateCustomBreakpoints();
        // By default, rellax class
        if (!el) el = ".rellax";
        // check if el is a className or a node
        var elements = typeof el === "string" ? document.querySelectorAll(el) : [
            el
        ];
        // Now query selector
        if (elements.length > 0) self.elems = elements;
        else {
            console.warn("Rellax: The elements you're trying to select don't exist.");
            return;
        }
        // Has a wrapper and it exists
        if (self.options.wrapper) {
            if (!self.options.wrapper.nodeType) {
                var wrapper = document.querySelector(self.options.wrapper);
                if (wrapper) self.options.wrapper = wrapper;
                else {
                    console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
                    return;
                }
            }
        }
        // set a placeholder for the current breakpoint
        var currentBreakpoint;
        // helper to determine current breakpoint
        var getCurrentBreakpoint = function(w) {
            var bp = self.options.breakpoints;
            if (w < bp[0]) return "xs";
            if (w >= bp[0] && w < bp[1]) return "sm";
            if (w >= bp[1] && w < bp[2]) return "md";
            return "lg";
        };
        // Get and cache initial position of all elements
        var cacheBlocks = function() {
            for(var i = 0; i < self.elems.length; i++){
                var block = createBlock(self.elems[i]);
                blocks.push(block);
            }
        };
        // Let's kick this script off
        // Build array for cached element values
        var init = function() {
            for(var i = 0; i < blocks.length; i++)self.elems[i].style.cssText = blocks[i].style;
            blocks = [];
            screenY = window.innerHeight;
            screenX = window.innerWidth;
            currentBreakpoint = getCurrentBreakpoint(screenX);
            setPosition();
            cacheBlocks();
            animate();
            // If paused, unpause and set listener for window resizing events
            if (pause) {
                window.addEventListener("resize", init);
                pause = false;
                // Start the loop
                update();
            }
        };
        // We want to cache the parallax blocks'
        // values: base, top, height, speed
        // el: is dom object, return: el cache values
        var createBlock = function(el) {
            var dataPercentage = el.getAttribute("data-rellax-percentage");
            var dataSpeed = el.getAttribute("data-rellax-speed");
            var dataXsSpeed = el.getAttribute("data-rellax-xs-speed");
            var dataMobileSpeed = el.getAttribute("data-rellax-mobile-speed");
            var dataTabletSpeed = el.getAttribute("data-rellax-tablet-speed");
            var dataDesktopSpeed = el.getAttribute("data-rellax-desktop-speed");
            var dataVerticalSpeed = el.getAttribute("data-rellax-vertical-speed");
            var dataHorizontalSpeed = el.getAttribute("data-rellax-horizontal-speed");
            var dataVericalScrollAxis = el.getAttribute("data-rellax-vertical-scroll-axis");
            var dataHorizontalScrollAxis = el.getAttribute("data-rellax-horizontal-scroll-axis");
            var dataZindex = el.getAttribute("data-rellax-zindex") || 0;
            var dataMin = el.getAttribute("data-rellax-min");
            var dataMax = el.getAttribute("data-rellax-max");
            var dataMinX = el.getAttribute("data-rellax-min-x");
            var dataMaxX = el.getAttribute("data-rellax-max-x");
            var dataMinY = el.getAttribute("data-rellax-min-y");
            var dataMaxY = el.getAttribute("data-rellax-max-y");
            var mapBreakpoints;
            var breakpoints = true;
            if (!dataXsSpeed && !dataMobileSpeed && !dataTabletSpeed && !dataDesktopSpeed) breakpoints = false;
            else mapBreakpoints = {
                "xs": dataXsSpeed,
                "sm": dataMobileSpeed,
                "md": dataTabletSpeed,
                "lg": dataDesktopSpeed
            };
            // initializing at scrollY = 0 (top of browser), scrollX = 0 (left of browser)
            // ensures elements are positioned based on HTML layout.
            //
            // If the element has the percentage attribute, the posY and posX needs to be
            // the current scroll position's value, so that the elements are still positioned based on HTML layout
            var wrapperPosY = self.options.wrapper ? self.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            // If the option relativeToWrapper is true, use the wrappers offset to top, subtracted from the current page scroll.
            if (self.options.relativeToWrapper) {
                var scrollPosY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                wrapperPosY = scrollPosY - self.options.wrapper.offsetTop;
            }
            var posY = self.options.vertical ? dataPercentage || self.options.center ? wrapperPosY : 0 : 0;
            var posX = self.options.horizontal ? dataPercentage || self.options.center ? self.options.wrapper ? self.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0;
            var blockTop = posY + el.getBoundingClientRect().top;
            var blockHeight = el.clientHeight || el.offsetHeight || el.scrollHeight;
            var blockLeft = posX + el.getBoundingClientRect().left;
            var blockWidth = el.clientWidth || el.offsetWidth || el.scrollWidth;
            // apparently parallax equation everyone uses
            var percentageY = dataPercentage ? dataPercentage : (posY - blockTop + screenY) / (blockHeight + screenY);
            var percentageX = dataPercentage ? dataPercentage : (posX - blockLeft + screenX) / (blockWidth + screenX);
            if (self.options.center) {
                percentageX = 0.5;
                percentageY = 0.5;
            }
            // Optional individual block speed as data attr, otherwise global speed
            var speed = breakpoints && mapBreakpoints[currentBreakpoint] !== null ? Number(mapBreakpoints[currentBreakpoint]) : dataSpeed ? dataSpeed : self.options.speed;
            var verticalSpeed = dataVerticalSpeed ? dataVerticalSpeed : self.options.verticalSpeed;
            var horizontalSpeed = dataHorizontalSpeed ? dataHorizontalSpeed : self.options.horizontalSpeed;
            // Optional individual block movement axis direction as data attr, otherwise gobal movement direction
            var verticalScrollAxis = dataVericalScrollAxis ? dataVericalScrollAxis : self.options.verticalScrollAxis;
            var horizontalScrollAxis = dataHorizontalScrollAxis ? dataHorizontalScrollAxis : self.options.horizontalScrollAxis;
            var bases = updatePosition(percentageX, percentageY, speed, verticalSpeed, horizontalSpeed);
            // ~~Store non-translate3d transforms~~
            // Store inline styles and extract transforms
            var style = el.style.cssText;
            var transform = "";
            // Check if there's an inline styled transform
            var searchResult = /transform\s*:/i.exec(style);
            if (searchResult) {
                // Get the index of the transform
                var index = searchResult.index;
                // Trim the style to the transform point and get the following semi-colon index
                var trimmedStyle = style.slice(index);
                var delimiter = trimmedStyle.indexOf(";");
                // Remove "transform" string and save the attribute
                if (delimiter) transform = " " + trimmedStyle.slice(11, delimiter).replace(/\s/g, "");
                else transform = " " + trimmedStyle.slice(11).replace(/\s/g, "");
            }
            return {
                baseX: bases.x,
                baseY: bases.y,
                top: blockTop,
                left: blockLeft,
                height: blockHeight,
                width: blockWidth,
                speed: speed,
                verticalSpeed: verticalSpeed,
                horizontalSpeed: horizontalSpeed,
                verticalScrollAxis: verticalScrollAxis,
                horizontalScrollAxis: horizontalScrollAxis,
                style: style,
                transform: transform,
                zindex: dataZindex,
                min: dataMin,
                max: dataMax,
                minX: dataMinX,
                maxX: dataMaxX,
                minY: dataMinY,
                maxY: dataMaxY
            };
        };
        // set scroll position (posY, posX)
        // side effect method is not ideal, but okay for now
        // returns true if the scroll changed, false if nothing happened
        var setPosition = function() {
            var oldY = posY;
            var oldX = posX;
            posY = self.options.wrapper ? self.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
            posX = self.options.wrapper ? self.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;
            // If option relativeToWrapper is true, use relative wrapper value instead.
            if (self.options.relativeToWrapper) {
                var scrollPosY = (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
                posY = scrollPosY - self.options.wrapper.offsetTop;
            }
            if (oldY != posY && self.options.vertical) // scroll changed, return true
            return true;
            if (oldX != posX && self.options.horizontal) // scroll changed, return true
            return true;
            // scroll did not change
            return false;
        };
        // Ahh a pure function, gets new transform value
        // based on scrollPosition and speed
        // Allow for decimal pixel values
        var updatePosition = function(percentageX, percentageY, speed, verticalSpeed, horizontalSpeed) {
            var result = {};
            var valueX = (horizontalSpeed ? horizontalSpeed : speed) * (100 * (1 - percentageX));
            var valueY = (verticalSpeed ? verticalSpeed : speed) * (100 * (1 - percentageY));
            result.x = self.options.round ? Math.round(valueX) : Math.round(valueX * 100) / 100;
            result.y = self.options.round ? Math.round(valueY) : Math.round(valueY * 100) / 100;
            return result;
        };
        // Remove event listeners and loop again
        var deferredUpdate = function() {
            window.removeEventListener("resize", deferredUpdate);
            window.removeEventListener("orientationchange", deferredUpdate);
            (self.options.wrapper ? self.options.wrapper : window).removeEventListener("scroll", deferredUpdate);
            (self.options.wrapper ? self.options.wrapper : document).removeEventListener("touchmove", deferredUpdate);
            // loop again
            loopId = loop(update);
        };
        // Loop
        var update = function() {
            if (setPosition() && pause === false) {
                animate();
                // loop again
                loopId = loop(update);
            } else {
                loopId = null;
                // Don't animate until we get a position updating event
                window.addEventListener("resize", deferredUpdate);
                window.addEventListener("orientationchange", deferredUpdate);
                (self.options.wrapper ? self.options.wrapper : window).addEventListener("scroll", deferredUpdate, supportsPassive ? {
                    passive: true
                } : false);
                (self.options.wrapper ? self.options.wrapper : document).addEventListener("touchmove", deferredUpdate, supportsPassive ? {
                    passive: true
                } : false);
            }
        };
        // Transform3d on parallax element
        var animate = function() {
            var positions;
            for(var i = 0; i < self.elems.length; i++){
                // Determine relevant movement directions
                var verticalScrollAxis = blocks[i].verticalScrollAxis.toLowerCase();
                var horizontalScrollAxis = blocks[i].horizontalScrollAxis.toLowerCase();
                var verticalScrollX = verticalScrollAxis.indexOf("x") != -1 ? posY : 0;
                var verticalScrollY = verticalScrollAxis.indexOf("y") != -1 ? posY : 0;
                var horizontalScrollX = horizontalScrollAxis.indexOf("x") != -1 ? posX : 0;
                var horizontalScrollY = horizontalScrollAxis.indexOf("y") != -1 ? posX : 0;
                var percentageY = (verticalScrollY + horizontalScrollY - blocks[i].top + screenY) / (blocks[i].height + screenY);
                var percentageX = (verticalScrollX + horizontalScrollX - blocks[i].left + screenX) / (blocks[i].width + screenX);
                // Subtracting initialize value, so element stays in same spot as HTML
                positions = updatePosition(percentageX, percentageY, blocks[i].speed, blocks[i].verticalSpeed, blocks[i].horizontalSpeed);
                var positionY = positions.y - blocks[i].baseY;
                var positionX = positions.x - blocks[i].baseX;
                // The next two "if" blocks go like this:
                // Check if a limit is defined (first "min", then "max");
                // Check if we need to change the Y or the X
                // (Currently working only if just one of the axes is enabled)
                // Then, check if the new position is inside the allowed limit
                // If so, use new position. If not, set position to limit.
                // Check if a min limit is defined
                if (blocks[i].min !== null) {
                    if (self.options.vertical && !self.options.horizontal) positionY = positionY <= blocks[i].min ? blocks[i].min : positionY;
                    if (self.options.horizontal && !self.options.vertical) positionX = positionX <= blocks[i].min ? blocks[i].min : positionX;
                }
                // Check if directional min limits are defined
                if (blocks[i].minY != null) positionY = positionY <= blocks[i].minY ? blocks[i].minY : positionY;
                if (blocks[i].minX != null) positionX = positionX <= blocks[i].minX ? blocks[i].minX : positionX;
                // Check if a max limit is defined
                if (blocks[i].max !== null) {
                    if (self.options.vertical && !self.options.horizontal) positionY = positionY >= blocks[i].max ? blocks[i].max : positionY;
                    if (self.options.horizontal && !self.options.vertical) positionX = positionX >= blocks[i].max ? blocks[i].max : positionX;
                }
                // Check if directional max limits are defined
                if (blocks[i].maxY != null) positionY = positionY >= blocks[i].maxY ? blocks[i].maxY : positionY;
                if (blocks[i].maxX != null) positionX = positionX >= blocks[i].maxX ? blocks[i].maxX : positionX;
                var zindex = blocks[i].zindex;
                // Move that element
                // (Set the new translation and append initial inline transforms.)
                var translate = "translate3d(" + (self.options.horizontal ? positionX : "0") + "px," + (self.options.vertical ? positionY : "0") + "px," + zindex + "px) " + blocks[i].transform;
                self.elems[i].style[transformProp] = translate;
            }
            self.options.callback(positions);
        };
        self.destroy = function() {
            for(var i = 0; i < self.elems.length; i++)self.elems[i].style.cssText = blocks[i].style;
            // Remove resize event listener if not pause, and pause
            if (!pause) {
                window.removeEventListener("resize", init);
                pause = true;
            }
            // Clear the animation loop to prevent possible memory leak
            clearLoop(loopId);
            loopId = null;
        };
        // Init
        init();
        // Allow to recalculate the initial values whenever we want
        self.refresh = init;
        return self;
    };
    return Rellax;
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["5LyA0","gdpHN"], "gdpHN", "parcelRequiree693")

//# sourceMappingURL=mySKills.24ca2391.js.map
