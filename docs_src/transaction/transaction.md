# 事务

## 提交事务

### 类型

`Async Funciton`

### 描述

提交各种类型的签名 Blob 数据，包括不仅限于，单笔支付签名，挂单签名，取消挂单签名等。

### 方法名称

```js
txSend();
```

### 参数说明

| 参数 | 类型   | 说明               |
| ---- | ------ | ------------------ |
| blob | String | 签名后的 blob 数据 |

### 请求样例

```js
import { txSend } from "swtcwallet-jssdk";
async function() {
  const params = {
    blob: "xxxxxxxxxxxxx",
  };
  const result = await txSend(params);
};
```

### 返回值示例

#### 成功

> 此返回值示例为普通交易的事务返回，其他事务需要根据具体情况处理

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "engine_result": "tesSUCCESS",
        "engine_result_code": 0,
        "engine_result_message": "The transaction was applied. Only final in a validated ledger.",
        "tx_blob": "120000220000000024000018B461D4038D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000271073210256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C74473045022100EBF00D6DA4AFABD85871EE8779A020D52D8F424C221AA657830F28E1FE6BCE20022060E33DB8A6B54E9F1A2EA236D7BBDDF031AD0269FE56910B8180E7D48A6D601A8114C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8A83140D2C803B102F69C7AF902747C0CE6B0C90CF869AF9EA7D06E6B58BE8AF95E1F1",
        "tx_json": {
            "Account": "jJCtKD2MbfYoVdQEbjTmbXmNiVkLBTknLC",
            "Amount": {
                "currency": "TEST",
                "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                "value": "0.01"
            },
            "Destination": "jpUCa7JwSbwvU1adNXRN7BWzTeVsTiNp1i",
            "Fee": "10000",
            "Flags": 0,
            "Memos": [
                {
                    "Memo": {
                        "MemoData": "E6B58BE8AF95"
                    }
                }
            ],
            "Sequence": 6324,
            "SigningPubKey": "0256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C",
            "TransactionType": "Payment",
            "TxnSignature": "3045022100EBF00D6DA4AFABD85871EE8779A020D52D8F424C221AA657830F28E1FE6BCE20022060E33DB8A6B54E9F1A2EA236D7BBDDF031AD0269FE56910B8180E7D48A6D601A",
            "hash": "9EF75982726A5B32EC8417C3D3427572DA6342C50D39A83A47D68CD22181A9C6"
        }
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

| 参数                         | 类型    | 说明                   |
| ---------------------------- | ------- | ---------------------- |
| success                      | Boolean | 此次请求是否成功       |
| msg                          | String  | 返回的信息             |
| code                         | Integer | 服务器返回的请求状态码 |
| data                         | Object  | SWTC-LIB 返回的数据    |
| data.engine_result           | String  | 请求结果               |
| data.engine_result_code      | Array   | 请求结果编码           |
| data.engine_result_message   | String  | 请求结果 message 信息  |
| data.tx_blob                 | String  | 16 进制签名后的交易    |
| data.tx_json                 | Object  | 交易内容               |
| data.tx_json.Account         | String  | 账号地址               |
| data.tx_json.Amount          | String  | 交易金额               |
| data.tx_json.Destination     | String  | 对家                   |
| data.tx_json.Fee             | String  | 交易费                 |
| data.tx_json.Flags           | Integer | 交易标记               |
| data.tx_json.Memos           | Array   | 备注                   |
| data.tx_json.Sequence        | Integer | 单子序列号             |
| data.tx_json.SigningPubKey   | Object  | 签名公钥               |
| data.tx_json.TransactionType | String  | 交易类型               |
| data.tx_json.TxnSignature    | String  | 交易签名               |
| data.tx_json.hash            | String  | 交易 hash              |
