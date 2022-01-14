/*!
 * swtcwallet-jssdk 0.0.4 (https://github.com/zhaitianye/swtcwallet-jssdk)
 * API https://github.com/zhaitianye/swtcwallet-jssdk/blob/master/doc/api.md
 * Copyright 2017-2022 zhaitianye. All Rights Reserved
 * Licensed under MIT (https://github.com/zhaitianye/swtcwallet-jssdk/blob/master/LICENSE)
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
var isIos = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
var init = function (time) {
    if (time === void 0) { time = 1000; }
    return __awaiter(this, void 0, void 0, function () {
        var getWebViewJavascriptBridge, timeOutPromise, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (isIos) {
                        return [2, { success: false, msg: "IOS系统暂不支持", code: -1 }];
                    }
                    if (!isIos && !isAndroid) {
                        return [2, { success: false, msg: "其他平台暂不支持", code: -1 }];
                    }
                    getWebViewJavascriptBridge = new Promise(function (resolve) {
                        if (window.WebViewJavascriptBridge) {
                            resolve(true);
                        }
                        document.addEventListener("WebViewJavascriptBridgeReady", function () {
                            resolve(true);
                        }, false);
                    });
                    timeOutPromise = new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve(false);
                        }, time);
                    });
                    return [4, new Promise(function (resolve) {
                            Promise.race([getWebViewJavascriptBridge, timeOutPromise]).then(function (value) {
                                if (value === true) {
                                    resolve(true);
                                }
                                else {
                                    document.removeEventListener("WebViewJavascriptBridgeReady", function () {
                                        alert("removeEventListener");
                                    }, false);
                                    resolve(false);
                                }
                            });
                        })];
                case 1:
                    result = _a.sent();
                    if (result === true) {
                        return [2, { success: true, msg: "成功", code: 0 }];
                    }
                    else {
                        return [2, { success: false, msg: "未连接到SWTC钱包", code: -1 }];
                    }
                    return [2];
            }
        });
    });
};
var connection = function (name, data, callback) {
    init().then(function (res) {
        if (!res.success) {
            callback(JSON.stringify(res));
            return;
        }
        window.WebViewJavascriptBridge.callHandler(name, data, callback);
    });
};

function isConnected() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, init()];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
function appInfo() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, new Promise(function (resolve) {
                        connection("getAppInfo", "", function (res) {
                            resolve(JSON.parse(res));
                        });
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
function appToast(msg) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, new Promise(function (resolve) {
                        connection("toast", msg, function (res) {
                            resolve(JSON.parse(res));
                        });
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
function appQr() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, new Promise(function (resolve) {
                        connection("invokeQRScanner", "", function (res) {
                            resolve(JSON.parse(res));
                        });
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
function appBack() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, new Promise(function (resolve) {
                        connection("back", "", function (res) {
                            resolve(JSON.parse(res));
                        });
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
function appRefresh() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, new Promise(function (resolve) {
                        connection("refresh", "", function (res) {
                            resolve(JSON.parse(res));
                        });
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
function appClose() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, new Promise(function (resolve) {
                        connection("close", "", function (res) {
                            resolve(JSON.parse(res));
                        });
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
function walletList() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, new Promise(function (resolve) {
                        connection("getWalletList", "", function (res) {
                            resolve(JSON.parse(res));
                        });
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
function walletCreate() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, new Promise(function (resolve) {
                        connection("createWallet", "", function (res) {
                            resolve(JSON.parse(res));
                        });
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
function walletCurrent() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, new Promise(function (resolve) {
                        connection("getCurrentWallet", "", function (res) {
                            resolve(JSON.parse(res));
                        });
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
function walletSwitch() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, new Promise(function (resolve) {
                        connection("switchWallet", "", function (res) {
                            resolve(JSON.parse(res));
                        });
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
function txSign(_a) {
    var to = _a.to, value = _a.value, currency = _a.currency, issuer = _a.issuer, memo = _a.memo, sequence = _a.sequence;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, new Promise(function (resolve) {
                        connection("sign", { to: to, value: value, currency: currency, issuer: issuer, memo: memo, sequence: sequence }, function (res) {
                            resolve(JSON.parse(res));
                        });
                    })];
                case 1: return [2, _b.sent()];
            }
        });
    });
}
function txSend(_a) {
    var blob = _a.blob;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, new Promise(function (resolve) {
                        connection("sendTransaction", {
                            blob: blob,
                        }, function (res) {
                            resolve(JSON.parse(res));
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
                        connection("selectNode", "", function (res) {
                            resolve(JSON.parse(res));
                        });
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}

exports.isConnected = isConnected;
exports.appInfo = appInfo;
exports.appToast = appToast;
exports.appQr = appQr;
exports.appBack = appBack;
exports.appRefresh = appRefresh;
exports.appClose = appClose;
exports.walletList = walletList;
exports.walletCreate = walletCreate;
exports.walletCurrent = walletCurrent;
exports.walletSwitch = walletSwitch;
exports.txSign = txSign;
exports.txSend = txSend;
exports.selectNode = selectNode;
