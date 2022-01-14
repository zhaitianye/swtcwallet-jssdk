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
export async function appInfo() {
  return await new Promise((resolve) => {
    connection("getAppInfo", "", (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 调用App toast
export async function appToast(msg: string) {
  return await new Promise((resolve) => {
    connection("toast", msg, (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 调起扫一扫
export async function appQr() {
  return await new Promise((resolve) => {
    connection("invokeQRScanner", "", (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 回退
export async function appBack() {
  return await new Promise((resolve) => {
    connection("back", "", (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 刷新
export async function appRefresh() {
  return await new Promise((resolve) => {
    connection("refresh", "", (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 关闭
export async function appClose() {
  return await new Promise((resolve) => {
    connection("close", "", (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 创建钱包、导入钱包
export async function walletCreate() {
  return await new Promise((resolve) => {
    connection("createWallet", "", (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 获取当前钱包地址
export async function walletCurrent() {
  return await new Promise((resolve) => {
    connection("getCurrentWallet", "", (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 切换钱包地址
export async function walletSwitch() {
  return await new Promise((resolve) => {
    connection("switchWallet", "", (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 获取当前节点
export async function nodeCurrent() {
  return await new Promise((resolve) => {
    connection("getCurrentNode", "", (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 切换节点
export async function nodeSelect() {
  return await new Promise((resolve) => {
    connection("selectNode", "", (res) => {
      resolve(JSON.parse(res));
    });
  });
}

// 签名
interface TxSignParams {
  to: string;
  value: string;
  currency: string;
  issuer: string;
  memo?: string;
}
export async function txSign({
  to,
  value,
  currency,
  issuer,
  memo,
}: TxSignParams) {
  return await new Promise((resolve) => {
    connection(
      "sign",
      { to, value, currency, issuer, memo },
      (res) => {
        resolve(JSON.parse(res));
      }
    );
  });
}

// 提交事务
interface TxSendParams {
  blob: string;
}
export async function txSend({ blob }: TxSendParams) {
  return await new Promise((resolve) => {
    connection(
      "sendTransaction",
      {
        blob,
      },
      (res) => {
        resolve(JSON.parse(res));
      }
    );
  });
}
