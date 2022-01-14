# 节点

## 获取当前节点

### 类型

`Async Funciton`

### 描述

获取当前 DAPP 连接的节点

### 方法名称

```js
nodeCurrent();
```

### 参数说明

无

### 请求样例

```js
import { nodeCurrent } from "swtcwallet-jssdk";
async function() {
  const result = await nodeCurrent();
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
      "name":"井通-明清节点",
      "url":"https://eji39bdbd155a03.swtc.top"
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

| 参数      | 类型    | 说明                    |
| --------- | ------- | ----------------------- |
| success   | Boolean | 此次请求是否成功        |
| msg       | String  | 返回的信息              |
| code      | Integer | 状态码，0 成功，-1 失败 |
| data      | Object  | 数据                    |
| data.name | String  | 用户当前选择的节点名称    |
| data.url  | String  | 用户当前选择的节点地址    |


## 切换节点

### 类型

`Async Funciton`

### 描述

切换当前 DAPP 连接的节点

### 方法名称

```js
nodeSelect();
```

### 参数说明

无

### 请求样例

```js
import { nodeSelect } from "swtcwallet-jssdk";
async function() {
  const result = await nodeSelect();
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
      "name":"井通-明清节点",
      "url":"https://eji39bdbd155a03.swtc.top"
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

| 参数      | 类型    | 说明                    |
| --------- | ------- | ----------------------- |
| success   | Boolean | 此次请求是否成功        |
| msg       | String  | 返回的信息              |
| code      | Integer | 状态码，0 成功，-1 失败 |
| data      | Object  | 数据                    |
| data.name | String  | 用户切换后的节点名称    |
| data.url  | String  | 用户切换后的节点地址    |
