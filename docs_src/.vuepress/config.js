module.exports = {
  title: "SWTCWALLET_JS_SDK", // 名称
  description: "作为 SWTC 钱包的链接桥,对钱包内DAPP提供SDK服务", // 描述
  head: [
    [
      "link", // 设置 favicon.ico，注意图片放在 public 文件夹下
      { rel: "icon", href: "/logo.png" },
    ],
  ],
  base: "/swtcwallet-jssdk/",
  dest: "docs",
  themeConfig: {
    nav: [],
    sidebar: [
      ["/", "首页"],
      ["/started/getting-started.md", "指南"],
      ["/connected/connected.md", "连接"],
      ["/app/app.md", "APP"],
      ["/wallet/wallet.md", "钱包"],
      ["/node/node.md", "节点"],
      ["/sign/sign.md", "签名"],
      ["/transaction/transaction.md", "事务"],
      ["/update/update.md", "更新说明"],
    ],
  },
};
