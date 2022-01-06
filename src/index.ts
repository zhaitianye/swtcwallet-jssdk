// 引入js连接桥
import jsBridge from "./bridge/jsBridge";

// ----App主动调用js----
export function getAPPDate() {
  jsBridge.registerHandler("dataToJs", (data, responseCallback) => {
    alert("app主动调用js方法，传入数据:" + data);
    responseCallback(data);
  });
}

// ----js主动调用App----

declare const window: Window & {
  WebViewJavascriptBridge: any;
  WVJBCallbacks: any;
  webkit: any;
};

// 判断是否钱包环境
export async function isConnected() {
  return !!(
    window.WebViewJavascriptBridge ||
    (window.webkit && window.webkit.messageHandlers)
  );
}

// 获取App信息
export async function getAppInfo() {
  return await new Promise((resolve) => {
    jsBridge.callHandler("getAppInfo", "", (res) => {
      resolve(res);
    });
  });
}

// 调用App toast
export async function handleAndroidToast(msg) {
  return await new Promise((resolve) => {
    jsBridge.callHandler("toast", msg, (res) => {
      resolve(res);
    });
  });
}

// 调起扫一扫
export async function invokeQRScanner() {
  return await new Promise((resolve) => {
    jsBridge.callHandler("invokeQRScanner", "", (res) => {
      resolve(res);
    });
  });
}

// 回退
export async function back() {
  return await new Promise((resolve) => {
    jsBridge.callHandler("back", "", (res) => {
      resolve(res);
    });
  });
}

// 刷新
export async function refresh() {
  return await new Promise((resolve) => {
    jsBridge.callHandler("refresh", "", (res) => {
      resolve(res);
    });
  });
}

// 关闭
export async function close() {
  return await new Promise((resolve) => {
    jsBridge.callHandler("close", "", (res) => {
      resolve(res);
    });
  });
}

// 获取钱包列表
export async function getWalletList() {
  return await new Promise((resolve) => {
    jsBridge.callHandler("getWalletList", "", (res) => {
      resolve(res);
    });
  });
}

// 创建钱包、导入钱包
export async function createWallet() {
  return await new Promise((resolve) => {
    jsBridge.callHandler("createWallet", "", (res) => {
      resolve(res);
    });
  });
}

// 获取当前钱包地址
export async function getCurrentWallet() {
  return await new Promise((resolve) => {
    jsBridge.callHandler("getCurrentWallet", "", (res) => {
      resolve(res);
    });
  });
}

// 切换钱包地址
export async function switchWallet() {
  return await new Promise((resolve) => {
    jsBridge.callHandler("switchWallet", "", (res) => {
      resolve(res);
    });
  });
}

// 请求账号余额（多币种）
export async function getAccountBalances({ account }) {
  return await new Promise((resolve) => {
    jsBridge.callHandler(
      "getAccountBalances",
      {
        account,
      },
      (res) => {
        resolve(res);
      }
    );
  });
}

// 请求地址指定币种余额
export async function getCurrencyBalances({ account, currency, issuer }) {
  return await new Promise((resolve) => {
    jsBridge.callHandler(
      "getCurrencyBalances",
      { account, currency, issuer },
      (res) => {
        resolve(res);
      }
    );
  });
}

// 请求账号信息
export async function getAccountInfo({ account }) {
  return await new Promise((resolve) => {
    jsBridge.callHandler("getAccountInfo", { account }, (res) => {
      resolve(res);
    });
  });
}

// 签名
export async function sign({
  from,
  to,
  value,
  currency,
  issuer,
  secret,
  addMemo,
  sequence,
}) {
  return await new Promise((resolve) => {
    jsBridge.callHandler(
      "sign",
      { from, to, value, currency, issuer, secret, addMemo, sequence },
      (res) => {
        resolve(res);
      }
    );
  });
}

// 提交事务，参数不确定，待商讨
export async function sendTransaction({
  from,
  to,
  data,
  gasPrice,
  value,
  currency,
  issuer,
  memo,
  action,
}) {
  return await new Promise((resolve) => {
    jsBridge.callHandler(
      "sendTransaction",
      {
        from,
        to,
        data,
        gasPrice,
        value,
        currency,
        issuer,
        memo,
        action,
      },
      (res) => {
        resolve(res);
      }
    );
  });
}

// 切换节点
export async function selectNode() {
  return await new Promise((resolve) => {
    jsBridge.callHandler("selectNode", "", (res) => {
      resolve(res);
    });
  });
}
