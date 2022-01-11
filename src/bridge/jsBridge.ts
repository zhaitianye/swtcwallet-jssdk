export const isAndroid =
  navigator.userAgent.indexOf("Android") > -1 ||
  navigator.userAgent.indexOf("Adr") > -1;
export const isIos = !!navigator.userAgent.match(
  /\(i[^;]+;( U;)? CPU.+Mac OS X/
);

declare const window: Window & {
  WebViewJavascriptBridge: any;
  WVJBCallbacks: any;
};

// 初始化函数
export const init = async function (time: number = 1000) {
  if (isIos) {
    return { success: false, msg: "IOS系统暂不支持", code: -1 };
  }
  if (!isIos && !isAndroid) {
    return { success: false, msg: "其他平台暂不支持", code: -1 };
  }
  // 获取连接桥函数
  var getWebViewJavascriptBridge = new Promise(function (resolve) {
    if (window.WebViewJavascriptBridge) {
      resolve(true);
    }
    document.addEventListener(
      "WebViewJavascriptBridgeReady",
      () => {
        resolve(true);
      },
      false
    );
  });

  // 超时取消函数
  var timeOutPromise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve(false);
    }, time);
  });

  // 初始化结果
  const result = await new Promise(function (resolve) {
    Promise.race([getWebViewJavascriptBridge, timeOutPromise]).then(function (
      value
    ) {
      if (value === true) {
        resolve(true);
      } else {
        document.removeEventListener(
          "WebViewJavascriptBridgeReady",
          () => {
            alert("removeEventListener");
          },
          false
        );
        resolve(false);
      }
    });
  });
  if (result === true) {
    return { success: true, msg: "成功", code: 0 };
  } else {
    return { success: false, msg: "未连接到SWTC钱包", code: -1 };
  }
};

// 连接桥
export const connection = function (
  name: string,
  data: string | any,
  callback
) {
  init().then((res) => {
    if (!res.success) {
      callback(JSON.stringify(res));
      return;
    }
    window.WebViewJavascriptBridge.callHandler(name, data, callback);
  });
};
