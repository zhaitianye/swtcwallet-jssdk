# [swtcwallet-jssdk](https://github.com/zhaitianye/swtcwallet-jssdk)

[![version](https://img.shields.io/npm/v/swtcwallet-jssdk.svg)](https://www.npmjs.com/package/swtcwallet-jssdk) [![downloads](https://img.shields.io/npm/dm/swtcwallet-jssdk.svg)](https://www.npmjs.com/package/swtcwallet-jssdk) [![LICENSE](https://img.shields.io/npm/l/swtcwallet-jssdk.svg)](https://github.com/zhaitianye/swtcwallet-jssdk/blob/master/LICENSE) ![repo-types](https://img.shields.io/npm/types/swtcwallet-jssdk.svg) ![repo-size](https://img.shields.io/github/repo-size/zhaitianye/swtcwallet-jssdk) ![minzip](https://img.shields.io/bundlephobia/minzip/swtcwallet-jssdk)


`swtc wallet` JS-SDK

## 特性

- 支持ES6+或TypeScript编写源码，编译生成生产代码
- 多环境支持（支持浏览器原生，支持AMD，CMD，支持Webpack，Rollup，fis等，支持Node）

## 目录介绍

```
.
├── demo 使用demo
├── dist 编译产出代码
├── src 源代码目录
```

## 使用者指南

通过npm下载安装代码

```bash
$ npm install --save swtcwallet-jssdk
```

通过yarn下载安装代码

```bash
$ yarn add swtcwallet-jssdk
```

如果你是node环境

```js
const wt = require('swtcwallet-jssdk');
```

如果你是webpack等环境

```js
import * as wt from 'swtcwallet-jssdk';
```

如果你是requirejs环境

```js
requirejs(['node_modules/swtcwallet-jssdk/dist/index.aio.js'], function (wt) {
    // xxx
})
```

如果你是浏览器环境

```html
<script src="node_modules/swtcwallet-jssdk/dist/index.aio.js"></script>
```

## API文档
[API](./doc/api.md)
