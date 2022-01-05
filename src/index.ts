import jsBridge from "./bridge/jsBridge";

export function add(a: number, b: number): number {
  return a + b;
}

export function getAPPDate() {
  jsBridge.registerHandler("dataToJs", (data, responseCallback) => {
    alert("app主动调用js方法，传入数据:" + data);
    responseCallback(data);
  });
}

// 获取App信息
export function getAppInfo() {
  jsBridge.callHandler("getAppInfo", "", (res) => {
    alert(res);
  });
}
