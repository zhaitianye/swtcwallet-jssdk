# SWTCWALLET_JS_SDK

> 作为SWTC钱包的连接桥,对钱包内DAPP提供SDK服务


## 说明

基于SWTC钱包，为其中DAPP提供服务。

## 约定

* 安全第一，私钥不会暴露给第三方DAPP。
* 安全第一，与区块链的通讯全部采用本地签名，确保私钥不出应用。
* 高易用性，支持 AMD、UMD、RequireJS、CommonJS。覆盖业界主流开发模式。
* 高易用性，支持不仅限于 Vue、React、Angular、原生H5等。具体写法参照[样例](https://github1s.com/zhaitianye/swtcwallet-jssdk/blob/HEAD/demo)。
* 主流的开发模式，此SDK基于TypeScript开发，使用 Rollup 打包。
* 所有SDK调用均为 JSON， 包括数据和错误。
* 支持异步，async await 形式。
* MD 标准文档。
* 完整的 [更新说明](../update/update.md)。
