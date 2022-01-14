# 连接
## 是否连接到钱包

### 类型

`Async Funciton`

### 描述

判断当前环境是否为钱包环境，并确认是否连接到钱包。

### 方法名称

```js
isConnected();
```

### 参数说明

无

### 请求样例

```js
import { isConnected } from "swtcwallet-jssdk";
async function() {
  const result = await isConnected();
};
```

### 返回值示例

#### 成功

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0
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

| 参数    | 类型    | 说明                    |
| ------- | ------- | ----------------------- |
| success | Boolean | 此次请求是否成功        |
| msg     | String  | 返回的信息              |
| code    | Integer | 状态码，0 成功，-1 失败 |
