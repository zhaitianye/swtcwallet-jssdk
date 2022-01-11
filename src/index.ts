// 引入js连接桥
import { init, connection } from "./bridge/jsBridge";

// ----js主动调用App----
declare const window: Window & {
  WebViewJavascriptBridge: any;
  WVJBCallbacks: any;
  webkit: any;
};

// 判断是否钱包环境
export async function isConnected() {
  return await init();
}

// 获取App信息
export async function getAppInfo() {
  return await new Promise((resolve) => {
    connection("getAppInfo", "", (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 调用App toast
export async function handleAndroidToast(msg: string) {
  return await new Promise((resolve) => {
    connection("toast", msg, (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 调起扫一扫
export async function invokeQRScanner() {
  return await new Promise((resolve) => {
    connection("invokeQRScanner", "", (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 回退
export async function back() {
  return await new Promise((resolve) => {
    connection("back", "", (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 刷新
export async function refresh() {
  return await new Promise((resolve) => {
    connection("refresh", "", (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 关闭
export async function close() {
  return await new Promise((resolve) => {
    connection("close", "", (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 获取钱包列表
export async function getWalletList() {
  return await new Promise((resolve) => {
    connection("getWalletList", "", (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 创建钱包、导入钱包
export async function createWallet() {
  return await new Promise((resolve) => {
    connection("createWallet", "", (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 获取当前钱包地址
export async function getCurrentWallet() {
  return await new Promise((resolve) => {
    connection("getCurrentWallet", "", (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 切换钱包地址
export async function switchWallet() {
  return await new Promise((resolve) => {
    connection("switchWallet", "", (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 请求账号余额（多币种）
interface GetAccountBalancesParams {
  account: string;
}
export async function getAccountBalances({
  account,
}: GetAccountBalancesParams) {
  return await new Promise((resolve) => {
    connection(
      "getAccountBalances",
      {
        account,
      },
      (res) => {
        resolve(JSON.parse(res));
      }
    );
  });
}

// 请求地址指定币种余额
interface GetCurrencyBalancesParams {
  account: string;
  currency: string;
  issuer: string;
}
export async function getCurrencyBalances({
  account,
  currency,
  issuer,
}: GetCurrencyBalancesParams) {
  return await new Promise((resolve) => {
    connection("getCurrencyBalances", { account, currency, issuer }, (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 请求账号信息
interface GetAccountInfoParams {
  account: string;
}
export async function getAccountInfo({ account }: GetAccountInfoParams) {
  return await new Promise((resolve) => {
    connection("getAccountInfo", { account }, (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 签名

interface SignParams {
  from: string;
  to: string;
  value: string;
  currency: string;
  issuer?: string;
  secret: string;
  addMemo?: string;
  sequence?: string;
}
export async function sign({
  from,
  to,
  value,
  currency,
  issuer,
  secret,
  addMemo,
  sequence,
}: SignParams) {
  return await new Promise((resolve) => {
    connection(
      "sign",
      { from, to, value, currency, issuer, secret, addMemo, sequence },
      (res) => {
        resolve(JSON.parse(res));
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
    connection(
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
        resolve(JSON.parse(res));
      }
    );
  });
}

// 切换节点
export async function selectNode() {
  return await new Promise((resolve) => {
    connection("selectNode", "", (res) => {
      resolve(JSON.parse(res));
    });
  });
}
