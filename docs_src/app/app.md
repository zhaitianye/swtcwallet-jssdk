# APP

## App 信息

### 类型

`Async Funciton`

### 描述

获取 APP 的基础信息

### 方法名称

```js
appInfo();
```

### 参数说明

无

### 请求样例

```js
import { appInfo } from "swtcwallet-jssdk";
async function() {
  const result = await appInfo();
};
```

### 返回值示例

#### 成功

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data":{
      "name": "SWTC Wallet",
      "system": "Android",
      "version_code": "1619",
      "version_name": "4.7.1",
    }
}
```

#### 失败

```JSON
{
    "success": false,
    "msg": "未连接到SWTC钱包",
    "code": -1
}
```

### 返回值解析

| 参数              | 类型    | 说明                    |
| ----------------- | ------- | ----------------------- |
| success           | Boolean | 此次请求是否成功        |
| msg               | String  | 返回的信息              |
| code              | Integer | 状态码，0 成功，-1 失败 |
| data              | Object? | 数据                    |
| data.name         | String  | 名称                    |
| data.system       | String  | 平台                    |
| data.version_code | String  | 版本号                  |
| data.version_name | String  | 版本号名称              |

## APP 弹窗

### 类型

`Async Funciton`

### 描述

调用 APP 弹窗

### 方法名称

```js
appToast();
```

### 参数说明

| 参数 | 类型   | 说明           |
| ---- | ------ | -------------- |
| msg  | String | 需要弹出的信息 |

### 请求样例

```js
import { appToast } from "swtcwallet-jssdk";
async function() {
  const result = await appToast('这是测试信息');
};
```

### 返回值示例

#### 成功

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data":"Toast success"
}
```

#### 失败

```JSON
{
    "success": false,
    "msg": "未连接到SWTC钱包",
    "code": -1
}
```

### 返回值解析

| 参数              | 类型    | 说明                    |
| ----------------- | ------- | ----------------------- |
| success           | Boolean | 此次请求是否成功        |
| msg               | String  | 返回的信息              |
| code              | Integer | 状态码，0 成功，-1 失败 |
| data              | Object? | 数据                    |
| data.name         | String  | 名称                    |
| data.system       | String  | 平台                    |
| data.version_code | String  | 版本号                  |
| data.version_name | String  | 版本号名称              |


## APP 扫一扫

### 类型

`Async Funciton`

### 描述

调用 APP 扫一扫

### 方法名称

```js
appQr();
```

### 参数说明

无

### 请求样例

```js
import { appQr } from "swtcwallet-jssdk";
async function() {
  const result = await appQr();
};
```

### 返回值示例

#### 成功

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data":{
      "qrcode": "测试扫描的二维码信息",
    }
}
```

#### 失败

> 说明，用户取消扫描时，会以失败返回

```JSON
{
    "success": false,
    "msg": "scan failed",
    "code": -1
}
```

### 返回值解析

| 参数              | 类型    | 说明                    |
| ----------------- | ------- | ----------------------- |
| success           | Boolean | 此次请求是否成功        |
| msg               | String  | 返回的信息              |
| code              | Integer | 状态码，0 成功，-1 失败 |
| data              | Object? | 数据                    |
| data.qrcode       | String  | 扫描出的二维码信息        |

## APP 回退

### 类型

`Async Funciton`

### 描述

调用 APP 回退

### 方法名称

```js
appBack();
```

### 参数说明

无

### 请求样例

```js
import { appBack } from "swtcwallet-jssdk";
async function() {
  const result = await appBack();
};
```

### 返回值示例

#### 成功

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
}
```

#### 失败

```JSON
{
    "success": false,
    "msg": "未连接到SWTC钱包",
    "code": -1
}
```

### 返回值解析

| 参数              | 类型    | 说明                    |
| ----------------- | ------- | ----------------------- |
| success           | Boolean | 此次请求是否成功        |
| msg               | String  | 返回的信息              |
| code              | Integer | 状态码，0 成功，-1 失败 |

## APP 刷新

### 类型

`Async Funciton`

### 描述

调用 APP 刷新

### 方法名称

```js
appRefresh();
```

### 参数说明

无

### 请求样例

```js
import { appRefresh } from "swtcwallet-jssdk";
async function() {
  const result = await appRefresh();
};
```

### 返回值示例

#### 成功

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
}
```

#### 失败

```JSON
{
    "success": false,
    "msg": "未连接到SWTC钱包",
    "code": -1
}
```

### 返回值解析

| 参数              | 类型    | 说明                    |
| ----------------- | ------- | ----------------------- |
| success           | Boolean | 此次请求是否成功        |
| msg               | String  | 返回的信息              |
| code              | Integer | 状态码，0 成功，-1 失败 |

## APP 关闭

### 类型

`Async Funciton`

### 描述

调用 APP 关闭

### 方法名称

```js
appClose();
```

### 参数说明

无

### 请求样例

```js
import { appClose } from "swtcwallet-jssdk";
async function() {
  const result = await appClose();
};
```

### 返回值示例

#### 成功

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
}
```

#### 失败

```JSON
{
    "success": false,
    "msg": "未连接到SWTC钱包",
    "code": -1
}
```

### 返回值解析

| 参数              | 类型    | 说明                    |
| ----------------- | ------- | ----------------------- |
| success           | Boolean | 此次请求是否成功        |
| msg               | String  | 返回的信息              |
| code              | Integer | 状态码，0 成功，-1 失败 |
