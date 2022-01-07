/*!
 * swtcwallet-jssdk 0.0.2 (https://github.com/zhaitianye/swtcwallet-jssdk)
 * API https://github.com/zhaitianye/swtcwallet-jssdk/blob/master/doc/api.md
 * Copyright 2017-2022 zhaitianye. All Rights Reserved
 * Licensed under MIT (https://github.com/zhaitianye/swtcwallet-jssdk/blob/master/LICENSE)
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.swtcwallet = {})));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

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

    function getAPPDate() {
        jsBridge.registerHandler("dataToJs", function (data, responseCallback) {
            alert("app主动调用js方法，传入数据:" + data);
            responseCallback(data);
        });
    }
    function isConnected() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, !!(window.WebViewJavascriptBridge ||
                        (window.webkit && window.webkit.messageHandlers))];
            });
        });
    }
    function getAppInfo() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, new Promise(function (resolve) {
                            jsBridge.callHandler("getAppInfo", "", function (res) {
                                resolve(res);
                            });
                        })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    }
    function handleAndroidToast(msg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, new Promise(function (resolve) {
                            jsBridge.callHandler("toast", msg, function (res) {
                                resolve(res);
                            });
                        })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    }
    function invokeQRScanner() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, new Promise(function (resolve) {
                            jsBridge.callHandler("invokeQRScanner", "", function (res) {
                                resolve(res);
                            });
                        })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    }
    function back() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, new Promise(function (resolve) {
                            jsBridge.callHandler("back", "", function (res) {
                                resolve(res);
                            });
                        })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    }
    function refresh() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, new Promise(function (resolve) {
                            jsBridge.callHandler("refresh", "", function (res) {
                                resolve(res);
                            });
                        })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    }
    function close() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, new Promise(function (resolve) {
                            jsBridge.callHandler("close", "", function (res) {
                                resolve(res);
                            });
                        })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    }
    function getWalletList() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, new Promise(function (resolve) {
                            jsBridge.callHandler("getWalletList", "", function (res) {
                                resolve(res);
                            });
                        })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    }
    function createWallet() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, new Promise(function (resolve) {
                            jsBridge.callHandler("createWallet", "", function (res) {
                                resolve(res);
                            });
                        })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    }
    function getCurrentWallet() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, new Promise(function (resolve) {
                            jsBridge.callHandler("getCurrentWallet", "", function (res) {
                                resolve(res);
                            });
                        })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    }
    function switchWallet() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, new Promise(function (resolve) {
                            jsBridge.callHandler("switchWallet", "", function (res) {
                                resolve(res);
                            });
                        })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    }
    function getAccountBalances(_a) {
        var account = _a.account;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, new Promise(function (resolve) {
                            jsBridge.callHandler("getAccountBalances", {
                                account: account,
                            }, function (res) {
                                resolve(res);
                            });
                        })];
                    case 1: return [2, _b.sent()];
                }
            });
        });
    }
    function getCurrencyBalances(_a) {
        var account = _a.account, currency = _a.currency, issuer = _a.issuer;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, new Promise(function (resolve) {
                            jsBridge.callHandler("getCurrencyBalances", { account: account, currency: currency, issuer: issuer }, function (res) {
                                resolve(res);
                            });
                        })];
                    case 1: return [2, _b.sent()];
                }
            });
        });
    }
    function getAccountInfo(_a) {
        var account = _a.account;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, new Promise(function (resolve) {
                            jsBridge.callHandler("getAccountInfo", { account: account }, function (res) {
                                resolve(res);
                            });
                        })];
                    case 1: return [2, _b.sent()];
                }
            });
        });
    }
    function sign(_a) {
        var from = _a.from, to = _a.to, value = _a.value, currency = _a.currency, issuer = _a.issuer, secret = _a.secret, addMemo = _a.addMemo, sequence = _a.sequence;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, new Promise(function (resolve) {
                            jsBridge.callHandler("sign", { from: from, to: to, value: value, currency: currency, issuer: issuer, secret: secret, addMemo: addMemo, sequence: sequence }, function (res) {
                                resolve(res);
                            });
                        })];
                    case 1: return [2, _b.sent()];
                }
            });
        });
    }
    function sendTransaction(_a) {
        var from = _a.from, to = _a.to, data = _a.data, gasPrice = _a.gasPrice, value = _a.value, currency = _a.currency, issuer = _a.issuer, memo = _a.memo, action = _a.action;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, new Promise(function (resolve) {
                            jsBridge.callHandler("sendTransaction", {
                                from: from,
                                to: to,
                                data: data,
                                gasPrice: gasPrice,
                                value: value,
                                currency: currency,
                                issuer: issuer,
                                memo: memo,
                                action: action,
                            }, function (res) {
                                resolve(res);
                            });
                        })];
                    case 1: return [2, _b.sent()];
                }
            });
        });
    }
    function selectNode() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, new Promise(function (resolve) {
                            jsBridge.callHandler("selectNode", "", function (res) {
                                resolve(res);
                            });
                        })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    }

    exports.getAPPDate = getAPPDate;
    exports.isConnected = isConnected;
    exports.getAppInfo = getAppInfo;
    exports.handleAndroidToast = handleAndroidToast;
    exports.invokeQRScanner = invokeQRScanner;
    exports.back = back;
    exports.refresh = refresh;
    exports.close = close;
    exports.getWalletList = getWalletList;
    exports.createWallet = createWallet;
    exports.getCurrentWallet = getCurrentWallet;
    exports.switchWallet = switchWallet;
    exports.getAccountBalances = getAccountBalances;
    exports.getCurrencyBalances = getCurrencyBalances;
    exports.getAccountInfo = getAccountInfo;
    exports.sign = sign;
    exports.sendTransaction = sendTransaction;
    exports.selectNode = selectNode;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
