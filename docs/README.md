<div style="text-align:center; padding: 30px;">
  <img style="width:200px; height:200px;" src="./.vuepress/public/logo.png" />
</div>

[![version](https://img.shields.io/npm/v/swtcwallet-jssdk.svg)](https://www.npmjs.com/package/swtcwallet-jssdk) ![downloads](https://img.shields.io/npm/dm/swtcwallet-jssdk.svg) ![LICENSE](https://img.shields.io/npm/l/swtcwallet-jssdk.svg) ![repo-types](https://img.shields.io/npm/types/swtcwallet-jssdk.svg) ![repo-size](https://img.shields.io/github/repo-size/zhaitianye/swtcwallet-jssdk) ![minzip](https://img.shields.io/bundlephobia/minzip/swtcwallet-jssdk)

## 说明

作为 SWTC 钱包的连接桥,对钱包内 DAPP 提供 SDK 服务。

## 约定

- 安全第一，私钥不会暴露给第三方 DAPP。
- 高隔离性，与区块链的通讯全部采用本地签名，确保私钥不出应用。
- 高易用性，支持 AMD、UMD、RequireJS、CommonJS。覆盖业界主流开发模式。
- 多环境支持，支持不仅限于 Vue、React、Angular、原生 H5 等。具体写法参照[样例](https://github1s.com/zhaitianye/swtcwallet-jssdk/blob/HEAD/demo)。
- 主流的开发模式，此 SDK 基于 TypeScript 开发，使用 Rollup 打包。
- 所有 SDK 通讯均为 JSON， 包括数据和错误。
- 支持异步，async await 形式。
- MD 标准文档。
- 完整的 [更新说明](../update/update.md)。
