# 指南

通过 npm 下载安装代码

```bash
$ npm install --save swtcwallet-jssdk
```

通过 yarn 下载安装代码

```bash
$ yarn add swtcwallet-jssdk
```

如果你是 node 环境

```js
const wt = require("swtcwallet-jssdk");
```

如果你是 webpack 等环境

```js
import * as wt from "swtcwallet-jssdk";
```

如果你是 requirejs 环境

```js
requirejs(["node_modules/swtcwallet-jssdk/dist/index.aio.js"], function (wt) {
  // xxx
});
```

如果你是浏览器环境

```html
<script src="node_modules/swtcwallet-jssdk/dist/index.aio.js"></script>
```
