/*!
 * swtcwallet-jssdk 0.1.0 (https://github.com/zhaitianye/swtcwallet-jssdk)
 * API https://github.com/zhaitianye/swtcwallet-jssdk/blob/master/doc/api.md
 * Copyright 2017-2022 zhaitianye. All Rights Reserved
 * Licensed under MIT (https://github.com/zhaitianye/swtcwallet-jssdk/blob/master/LICENSE)
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.swtcwallet = {})));
}(this, (function (exports) { 'use strict';

  var isAndroid = navigator.userAgent.indexOf("Android") > -1 ||
      navigator.userAgent.indexOf("Adr") > -1;
  var isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  function setupWebViewJavascriptBridge(callback) {
      if (isAndroid) {
          if (window.WebViewJavascriptBridge) {
              callback(window.WebViewJavascriptBridge);
          }
          else {
              document.addEventListener("WebViewJavascriptBridgeReady", function () {
                  callback(window.WebViewJavascriptBridge);
              }, false);
          }
          console.log("Android environment");
          sessionStorage.phoneType = "android";
      }
      if (isiOS) {
          if (window.WebViewJavascriptBridge) {
              return callback(window.WebViewJavascriptBridge);
          }
          if (window.WVJBCallbacks) {
              return window.WVJBCallbacks.push(callback);
          }
          window.WVJBCallbacks = [callback];
          var WVJBIframe = document.createElement("iframe");
          WVJBIframe.style.display = "none";
          WVJBIframe.src = "wvjbscheme://__BRIDGE_LOADED__";
          document.documentElement.appendChild(WVJBIframe);
          setTimeout(function () {
              document.documentElement.removeChild(WVJBIframe);
          }, 0);
          console.log("iOS environment");
          sessionStorage.phoneType = "ios";
      }
  }
  setupWebViewJavascriptBridge(function (bridge) {
      if (isAndroid) {
          bridge.init(function (message, responseCallback) {
              var data = {
                  "Javascript Responds": "init success !",
              };
              responseCallback(data);
          });
      }
  });
  var jsBridge = {
      callHandler: function (name, data, callback) {
          setupWebViewJavascriptBridge(function (bridge) {
              bridge.callHandler(name, data, callback);
          });
      },
      registerHandler: function (name, callback) {
          setupWebViewJavascriptBridge(function (bridge) {
              bridge.registerHandler(name, function (data, responseCallback) {
                  callback(data, responseCallback);
              });
          });
      },
  };

  function add(a, b) {
      return a + b;
  }
  function getAPPDate() {
      jsBridge.registerHandler("dataToJs", function (data, responseCallback) {
          alert("app主动调用js方法，传入数据:" + data);
          responseCallback(data);
      });
  }
  function getAppInfo() {
      jsBridge.callHandler("getAppInfo", "", function (res) {
          alert(res);
      });
  }

  exports.add = add;
  exports.getAPPDate = getAPPDate;
  exports.getAppInfo = getAppInfo;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
