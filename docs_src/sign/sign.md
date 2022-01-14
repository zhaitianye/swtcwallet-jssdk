# 签名

## 单笔支付签名

### 类型

`Async Funciton`

### 描述

当前钱包进行单笔支付的签名

### 方法名称

```js
txSign();
```

### 参数说明

| 参数     | 类型    | 说明                                         |
| -------- | ------- | -------------------------------------------- |
| to       | String  | 接收方地址                                   |
| value    | String  | 支付数量                                     |
| currency | String  | 货币种类，三到六个字母或 20 字节的自定义货币 |
| issuer   | String  | 货币发行方，无则留 ''                        |
| memo     | String? | 备注信息                                     |

### 请求样例

```js
import { txSign } from "swtcwallet-jssdk";
async function() {
  const params = {
    to: "jUGP9LXNySXgnjvCJYvcezAxaGqD6a6d5R",
    value: "1",
    currency: "SWT",
    memo: "测试一下",
  };
  const result = await txSign(params);
};
```

```js
import { txSign } from "swtcwallet-jssdk";
async function() {
  const params = {
    to: "jUGP9LXNySXgnjvCJYvcezAxaGqD6a6d5R",
    value: "1",
    currency: "TEST",
    issuer: "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
  };
  const result = await txSign(params);
};
```

### 返回值示例

#### 成功

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
      "blob":"xxxxxxxx",
    }
}
```

#### 失败

> 注：此接口需要先登录

```JSON
{
    "success": false,
    "msg": "Please login first",
    "code": -1
}
```

```JSON
{
    "success": false,
    "msg": "密码错误",
    "code": -1
}
```

### 返回值解析

| 参数      | 类型    | 说明                               |
| --------- | ------- | ---------------------------------- |
| success   | Boolean | 此次请求是否成功                   |
| msg       | String  | 返回的信息                         |
| code      | Integer | 状态码，0 成功，-1 失败            |
| data      | Object  | 数据                               |
| data.blob | String  | 此笔交易的签名信息，可以提交到节点 |
