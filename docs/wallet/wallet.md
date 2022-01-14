# 钱包

## 创建钱包

### 类型

`Async Funciton`

### 描述

打开创建钱包页面

### 方法名称

```js
walletCreate();
```

### 参数说明

无

### 请求样例

```js
import { walletCreate } from "swtcwallet-jssdk";
async function() {
  const result = await walletCreate();
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

> 注：此接口需要先登录

```JSON
{
    "success": false,
    "msg": "Please login first",
    "code": -1
}
```

### 返回值解析

| 参数    | 类型    | 说明                    |
| ------- | ------- | ----------------------- |
| success | Boolean | 此次请求是否成功        |
| msg     | String  | 返回的信息              |
| code    | Integer | 状态码，0 成功，-1 失败 |

## 获取当前钱包地址

### 类型

`Async Funciton`

### 描述

获取当前钱包地址

### 方法名称

```js
walletCurrent();
```

### 参数说明

无

### 请求样例

```js
import { walletCurrent } from "swtcwallet-jssdk";
async function() {
  const result = await walletCurrent();
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
      "pulicKey":"jfxxxxxxxxxxxxxxxxxxxx"
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

### 返回值解析

| 参数          | 类型    | 说明                    |
| ------------- | ------- | ----------------------- |
| success       | Boolean | 此次请求是否成功        |
| msg           | String  | 返回的信息              |
| code          | Integer | 状态码，0 成功，-1 失败 |
| data          | Object  | 数据                    |
| data.pulicKey | String  | 用户当前的钱包地址      |

## 切换钱包地址

### 类型

`Async Funciton`

### 描述

切换当前钱包地址

### 方法名称

```js
walletSwitch();
```

### 参数说明

无

### 请求样例

```js
import { walletSwitch } from "swtcwallet-jssdk";
async function() {
  const result = await walletSwitch();
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
      "pulicKey":"jfxxxxxxxxxxxxxxxxxxxx"
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

### 返回值解析

| 参数          | 类型    | 说明                       |
| ------------- | ------- | -------------------------- |
| success       | Boolean | 此次请求是否成功           |
| msg           | String  | 返回的信息                 |
| code          | Integer | 状态码，0 成功，-1 失败    |
| data          | Object  | 数据                       |
| data.pulicKey | String  | 用户切换后的当前的钱包地址 |
