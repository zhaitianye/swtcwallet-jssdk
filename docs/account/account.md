## 请求账号信息

### 类型 

GET 

### 描述

请求账号信息

### 请求地址
```
{{host}}/account/:account/info
```
### 参数说明

#### 参数介绍

| 参数    | 位置 | 类型   | 说明         |
|---------|------|--------|------------|
| account | Path | String | 井通钱包地址 |

### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "account_data": {
            "Account": "jJCtKD2MbfYoVdQEbjTmbXmNiVkLBTknLC",
            "Balance": "760169232",
            "Flags": 0,
            "LedgerEntryType": "AccountRoot",
            "OwnerCount": 8,
            "PreviousTxnID": "A749406C4510BF857548B463D6C11D337B64AF9D564EA5E30C6FAF170D77FEC3",
            "PreviousTxnLgrSeq": 14507953,
            "Sequence": 4129,
            "index": "AE6D3CDFAE02DB31C48C784932FEE86709D554F1FB5E86D7636A2858D396130E"
        },
        "ledger_hash": "5339FFB91BA077BF6E0B198EAD7D6DD410C14906D47AE5CFA11A9F2D45C3361A",
        "ledger_index": 14508309,
        "validated": true
    }
}
```
### 返回值解析

| 参数                                | 类型    | 说明                                     |
|-------------------------------------|---------|----------------------------------------|
| success                             | Boolean | 此次请求是否成功                         |
| msg                                 | String  | 返回的信息                               |
| code                                | Integer | 服务器返回的请求状态码                   |
| data                                | Object  | SWTC-LIB 返回的数据                      |
| data.account_data                   | Object  | 账号信息                                 |
| data.account_data.Account           | String  | 钱包地址                                 |
| data.account_data.Balance           | String  | swt 数量                                 |
| data.account_data.Flags             | Integer | 属性标志                                 |
| data.account_data.LedgerEntryType   | String  | 账本数据结构类型，AccountRoot表示账号类型 |
| data.account_data.OwnerCount        | Integer | 用户拥有的挂单数和信任线数量的总和       |
| data.account_data.PreviousTxnID     | String  | 操作该帐号的上一笔交易 hash              |
| data.account_data.PreviousTxnLgrSeq | Integer | 该帐号上一笔交易所在的账本号             |
| data.account_data.Sequence          | Integer | 账号当前序列号                           |
| data.account_data.index             | String  | 该数据所在索引 hash                      |
| data.ledger_hash                    | String  | 账本 hash                                |
| data.ledger_index                   | Integer | 账本高度                                 |
| data.validated                      | Boolean | 交易是否通过验证                         |

## 请求账号余额

### 类型 

GET 

### 描述

请求账号余额信息


### 请求地址
```
{{host}}/account/:account/balances
```

### 参数说明

#### 参数介绍

| 参数     | 位置  | 类型    | 说明             |
|----------|-------|---------|----------------|
| account  | Path  | String  | 井通钱包地址     |
| currency | Query | String? | 特定的币种       |
| issuer   | Query | String? | 特定币种的发行商 |


### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "balances": [
            {
                "value": "760.169232",
                "currency": "SWT",
                "issuer": "",
                "freezed": "60.000000"
            },
            {
                "value": "97.000000",
                "currency": "TFG",
                "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                "freezed": "0.000000"
            },
            {
                "value": "11.000000",
                "currency": "JSLASH",
                "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                "freezed": "0.000000"
            },
            ......
        ],
        "sequence": 4129
    }
}
```
### 返回值解析

| 参数                      | 类型    | 说明                   |
|---------------------------|---------|----------------------|
| success                   | Boolean | 此次请求是否成功       |
| msg                       | String  | 返回的信息             |
| code                      | Integer | 服务器返回的请求状态码 |
| data                      | Object  | SWTC-LIB 返回的数据    |
| data.balances             | Array   | 余额信息的数组         |
| data.balances[n].value    | String  | 余额，小数点后六位      |
| data.balances[n].currency | String  | 币种                   |
| data.balances[n].issuer   | String  | 发行商                 |
| data.balances[n].freezed  | String  | 冻结数，小数点后六位    |
| data.sequence             | Integer | 账号当前可用的sequence |

## 请求账号通证

### 类型 

GET 

### 描述

请求账号可发送/接收的通证


### 请求地址
```
{{host}}/account/:account/tums
```
### 参数说明

#### 参数介绍

| 参数    | 位置 | 类型   | 说明         |
|---------|------|--------|------------|
| account | Path | String | 井通钱包地址 |


### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "ledger_hash": "9307F13346B148FC57A7DF2FFABD028A3AE93CE53D527655535EB404A1124C19",
        "ledger_index": 15405033,
        "receive_currencies": [
            "CSP",
            "GSL",
            "HJT",
            "KVC",
            "TFG",
            "JBIZ",
            "TEST",
            "JSLASH"
        ],
        "send_currencies": [
            "CSP",
            "GSL",
            "HJT",
            "KVC",
            "TFG",
            "JBIZ",
            "TEST",
            "JSLASH"
        ],
        "validated": true
    }
}
```
### 返回值解析

| 参数                       | 类型    | 说明                   |
|----------------------------|---------|----------------------|
| success                    | Boolean | 此次请求是否成功       |
| msg                        | String  | 返回的信息             |
| code                       | Integer | 服务器返回的请求状态码 |
| data                       | Object  | SWTC-LIB 返回的数据    |
| data.ledger_hash           | String  | 账本hash               |
| data.ledger_index          | String  | 账本高度               |
| data.receive_currencies    | Array   | 可接收的通证列表       |
| data.receive_currencies[n] | String  | 具体可接收的通证       |
| data.send_currencies       | Array   | 可发送的货币列表       |
| data.send_currencies[n]    | String  | 具体可发送的通证       |
| data.validated             | Boolean | 交易是否通过验证       |

## 请求账号关系

### 类型 

GET 

### 描述

获得账号关系


### 请求地址
```
{{host}}/account/:account/relations/:type
```
### 参数说明

#### 参数介绍

| 参数    | 位置 | 类型   | 说明                                                           |
|---------|------|--------|--------------------------------------------------------------|
| account | Path | String | 井通钱包地址                                                   |
| type    | Path | String | 关系类型，固定的三个值：信任(trust)、授权(authorize)、冻结(freeze) |


### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "account": "jJCtKD2MbfYoVdQEbjTmbXmNiVkLBTknLC",
        "ledger_hash": "B02179D7D1F4F814F30C75D49D1288360479FBAA6AFBCD17F6B74D7BF559E68F",
        "ledger_index": 15405240,
        "lines": [
            {
                "account": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                "balance": "96",
                "currency": "TFG",
                "limit": "10000000000",
                "limit_peer": "0",
                "no_skywell": true,
                "quality_in": 0,
                "quality_out": 0
            },
            {
                "account": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                "balance": "10.99",
                "currency": "JSLASH",
                "limit": "10000000000",
                "limit_peer": "0",
                "no_skywell": true,
                "quality_in": 0,
                "quality_out": 0
            },
            {
                "account": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                "balance": "8.9998",
                "currency": "HJT",
                "limit": "10000000000",
                "limit_peer": "0",
                "no_skywell": true,
                "quality_in": 0,
                "quality_out": 0
            }
        ],
        "validated": true
    }
}
```
### 返回值解析

| 参数                      | 类型    | 说明                     |
|---------------------------|---------|------------------------|
| success                   | Boolean | 此次请求是否成功         |
| msg                       | String  | 返回的信息               |
| code                      | Integer | 服务器返回的请求状态码   |
| data                      | Object  | SWTC-LIB 返回的数据      |
| data.account              | String  | 井通账号                 |
| data.ledger_hash          | String  | 账本hash                 |
| data.ledger_index         | String  | 账本高度                 |
| data.lines                | Array   | 该账号的信任线           |
| data.lines[n].account     | String  | 信任的银关               |
| data.lines[n].balance     | String  | 余额                     |
| data.lines[n].currency    | String  | 货币种类                 |
| data.lines[n].limit       | String  | 信任额度                 |
| data.lines[n].limit_peer  | String  | 对方设置的信任额度，默认0 |
| data.lines[n].no_skywell  | Boolean | 默认为true               |
| data.lines[n].quality_in  | Integer | 兑换比例，默认0，暂时未用  |
| data.lines[n].quality_out | Integer | 兑换比例，默认0，暂时未用  |
| data.validated            | Boolean | 交易是否通过验证         |


## 请求账号事务

### 类型 

GET 

### 描述

获得账号事务列表，事务列表内包含了交易，挂单等不同的事务。如业务方需要使用特定的可以根据Type进行判断。


### 请求地址
```
{{host}}/account/:account/tx
```

### 参数说明

#### 参数介绍

| 参数          | 位置  | 类型    | 说明                                                       |
|---------------|-------|---------|----------------------------------------------------------|
| account       | Path  | String  | 井通钱包地址                                               |
| limit         | Query | String? | 查询多少条(默认20,最大值200)                               |
| forward       | Query | String? | 按交易时间排序，固定的两个值：asc(升序)、desc(降序)(默认desc) |
| marker_ledger | Query | String? | 上一个查询的marker.ledger这里起到分页的作用                |
| marker_seq    | Query | String? | 上一个查询的marker.seq这里起到分页的作用                   |


### 返回值示例

```JSON
{
    "success": true,
    "msg": "获取交易列表成功",
    "code": 0,
    "data": {
        "account": "jJCtKD2MbfYoVdQEbjTmbXmNiVkLBTknLC",
        "ledger_index_max": 14508365,
        "ledger_index_min": 266955,
        "limit": 1,
        "marker": {
            "ledger": 14264153,
            "seq": 8
        },
        "transactions": [
            {
                "date": 1572485910,
                "hash": "3B0B6C9E5FAB5172F67C2E431D286DED6123418DEF5050EC7BD95337AB80CEED",
                "type": "received",
                "fee": "0.01",
                "result": "tesSUCCESS",
                "memos": [
                    {
                        "MemoData": "remark=测试"
                    }
                ],
                "counterparty": "jLamHt9mBcoiaAjf5huKuX5iFnrNPfBpWV",
                "amount": {
                    "currency": "TFG",
                    "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                    "value": "100"
                },
                "effects": [],
                "balances": {
                    "TFG": 100
                },
                "balancesPrev": {
                    "TFG": 0
                }
            }
        ]
    }
}
```
### 返回值解析

| 参数                                 | 类型    | 说明                         |
|--------------------------------------|---------|----------------------------|
| success                              | Boolean | 此次请求是否成功             |
| msg                                  | String  | 返回的信息                   |
| code                                 | Integer | 服务器返回的请求状态码       |
| data                                 | Object  | SWTC-LIB 返回的数据          |
| data.account                         | String  | 钱包地址                     |
| data.ledger_index_max                | Integer | 当前节点缓存的账本区间最大值 |
| data.ledger_index_min                | Integer | 当前节点缓存的账本区间最小值 |
| data.marker                          | Object  | 查到的当前记录标记           |
| data.transactions                    | Array   | 交易记录列表                 |
| data.transactions[n].date            | Integer | 时间戳                       |
| data.transactions[n].hash            | String  | 交易hash                     |
| data.transactions[n].type            | String  | 交易类型                     |
| data.transactions[n].fee             | String  | 手续费                       |
| data.transactions[n].result          | String  | 交易结果                     |
| data.transactions[n].memos           | Array   | 备注                         |
| data.transactions[n].counterparty    | String  | 交易对家                     |
| data.transactions[n].amount          | Object  | 交易金额对象                 |
| data.transactions[n].amount.value    | String  | 金额                         |
| data.transactions[n].amount.currency | String  | 货币种类                     |
| data.transactions[n].amount.issuer   | String  | 货币                         |
| data.transactions[n].effects         | Array   | 交易效果                     |
| data.transactions[n].balances        | Object  | 每笔交易后变动的币种余额     |
| data.transactions[n].balancesPrev    | Object  | 每笔交易后变动前的币种余额   |

## 请求账号挂单

### 类型 

GET 

### 描述

查询账号挂单列表


### 请求地址
```
{{host}}/account/:account/orders
```

### 参数说明

#### 参数介绍

| 参数    | 位置  | 类型    | 说明                                                           |
|---------|-------|---------|--------------------------------------------------------------|
| account | Path  | String  | 井通钱包地址                                                   |
| ledger  | Query | String? | 账本，可选值为validated, closed, current, 指定账本号：(14530000) |
| limit   | Query | String? | 限制返回的条数，最小值为10，最大值为200                          |
| marker  | Query | String? | 标记点，从此标记点开始查询，上次请求返回的marker值               |


### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "account": "j4cAYiFDT1t7chSDK91EuSA1qR5t74WyrX",
        "ledger_hash": "D971E5F750BD431379915B1C77B7959E41D0E20D3B867A9D9F6EF44D3260D2C7",
        "ledger_index": 15406643,
        "limit": 10,
        "marker": "01E3A92A0228174DF3741A73864FECB61B3007307BA98C233F20914A36DD8A8D",
        "offers": [
            {
                "FeeCurrency": "CNY",
                "OfferFeeRateDen": "1000",
                "OfferFeeRateNum": "2",
                "Platform": "jDXCeSHSpZ9LiX6ihckWaYDeDt5hFrdTto",
                "flags": 131072,
                "seq": 15744,
                "taker_gets": {
                    "currency": "CSP",
                    "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                    "value": "54573"
                },
                "taker_pays": {
                    "currency": "CNY",
                    "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                    "value": "1146.033"
                }
            },
            {
                "FeeCurrency": "CNY",
                "OfferFeeRateDen": "1000",
                "OfferFeeRateNum": "2",
                "Platform": "jDXCeSHSpZ9LiX6ihckWaYDeDt5hFrdTto",
                "flags": 131072,
                "seq": 8913,
                "taker_gets": {
                    "currency": "CSP",
                    "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                    "value": "16151"
                },
                "taker_pays": {
                    "currency": "CNY",
                    "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                    "value": "465.1488"
                }
            }
            ......
        ],
        "validated": true
    }
}
```
### 返回值解析

| 参数                               | 类型     | 说明                                                   |
|------------------------------------|----------|------------------------------------------------------|
| success                            | Boolean  | 此次请求是否成功                                       |
| msg                                | String   | 返回的信息                                             |
| code                               | Integer  | 服务器返回的请求状态码                                 |
| data                               | Object   | SWTC-LIB 返回的数据                                    |
| data.account                       | String   | 钱包地址                                               |
| data.ledger_hash                   | String   | 账本hash                                               |
| data.ledger_index                  | String   | 账本高度                                               |
| data.limit                         | Integer? | 返回当前查询的条数                                     |
| data.marker                        | String?  | 当前的标记点                                           |
| data.offers                        | Array    | 该账号的挂单列表                                       |
| data.offers[n].flags               | Integer  | 买卖类型(131072表示卖，否则是买)                        |
| data.offers[n].seq                 | Integer  | 挂单标记点，取消挂单的时候需要用到                      |
| data.offers[n].taker_gets          | String   | 对方得到的。（当货币是swt时，数据类型为string，否则为对象） |
| data.offers[n].taker_gets.value    | String   | 金额                                                   |
| data.offers[n].taker_gets.currency | String   | 货币种类                                               |
| data.offers[n].taker_gets.issuer   | String   | 货币发行商                                             |
| data.offers[n].taket_pays          | String   | 对方支付的。（当货币是swt时，数据类型为string，否则为对象） |
| data.offers[n].taker_gets.value    | String   | 金额                                                   |
| data.offers[n].taker_gets.currency | String   | 货币种类                                               |
| data.offers[n].taker_gets.issuer   | String   | 货币发行商                                             |
| data.validated                     | Boolean  | 交易是否通过验证                                       |

## 请求账号多签

### 类型 

GET 

### 描述

获得账号的多重签名列表,data.account_objects[n].LedgerEntryType 的值为SignerList为账号下的多签账号的列表。
具体参数请参照返回值解析


### 请求地址
```
{{host}}/account/:account/signerlist
```

### 参数说明

#### 参数介绍

| 参数    | 位置 | 类型   | 说明     |
|---------|------|--------|--------|
| account | Path | String | 井通账号 |


### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "account": "jwDQAAh3aEH74cSx5kLvxHGf9t248pFqyk",
        "account_objects": [
            {
                "Flags": 0,
                "LedgerEntryType": "SignerList",
                "OwnerNode": "0000000000000000",
                "PreviousTxnID": "73A21DC2E4B97031E180B476B85ECBDA411430DD06E4DCE75D112A55166AC5A2",
                "PreviousTxnLgrSeq": 14880234,
                "SignerEntries": [
                    {
                        "SignerEntry": {
                            "Account": "jEdMhnqsN228jvqnedtY8QGbmH99Pq63MM",
                            "SignerWeight": 6
                        }
                    },
                    {
                        "SignerEntry": {
                            "Account": "jGg9QzGsMTtPU9DgU4TEMi69LLyrPzfdqf",
                            "SignerWeight": 5
                        }
                    }
                ],
                "SignerQuorum": 7,
                "index": "F41626CCEEFC90C61AE07B716F28D4CB0E37C06A4F4713AFCAF5203DF9CF18C7"
            },
            {
                "Balance": {
                    "currency": "TFG",
                    "issuer": "jjjjjjjjjjjjjjjjjjjjBZbvri",
                    "value": "0.9998"
                },
                "Flags": 1114112,
                "HighLimit": {
                    "currency": "TFG",
                    "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                    "value": "0"
                },
                "HighNode": "000000000000B6CA",
                "LedgerEntryType": "SkywellState",
                "LowLimit": {
                    "currency": "TFG",
                    "issuer": "jwDQAAh3aEH74cSx5kLvxHGf9t248pFqyk",
                    "value": "10000000000"
                },
                "LowNode": "0000000000000000",
                "PreviousTxnID": "99DDFA6124AA76AADD34F35098EF2B9D293C7C7824F0A38C246CB0467EF5B4D5",
                "PreviousTxnLgrSeq": 14908330,
                "index": "91DD5C0C12A045306AFBD490C17376390D6038903A8960E79056EDBD2BD67A5B"
            }
        ],
        "ledger_current_index": 14913831,
        "validated": false
    }
}
```
### 返回值解析

| 参数                                                              | 类型    | 说明                                                                         |
|-------------------------------------------------------------------|---------|----------------------------------------------------------------------------|
| success                                                           | Boolean | 此次请求是否成功                                                             |
| msg                                                               | String  | 返回的信息                                                                   |
| code                                                              | Integer | 服务器返回的请求状态码                                                       |
| data                                                              | String  | 数据或者错误信息                                                             |
| data.account                                                      | String  | 设置签名列表的源账号                                                         |
| data.account_objects                                              | Array   | 签名列表相关信息                                                             |
| data.account_objects[-]                                           | Object  | 签名列表内其他相关信息                                                        |
| data.account_objects[n].Flags                                     | Integer | 交易标记                                                                     |
| data.account_objects[n].LedgerEntryType                           | String  | 账本数据结构类型，SignerList表示签名列表类型,SkywellState为账号的信任关系列表    |
| data.account_objects[n].OwnerNode                                 | String  | 列表索引标记                                                                 |
| data.account_objects[n].PreviousTxnID                             | String  | 上一笔交易hash                                                               |
| data.account_objects[n].PreviousTxnLgrSeq                         | Integer | 上一笔交易所在账本号                                                         |
| data.account_objects[n].SignerEntries                             | Array   | 签名列表                                                                     |
| data.account_objects[n].SignerEntries[n].SignerEntry              | Object  | 单个签名对象                                                                 |
| data.account_objects[n].SignerEntries[n].SignerEntry.Account      | String  | 签名者账号地址                                                               |
| data.account_objects[n].SignerEntries[n].SignerEntry.SignerWeight | Integer | 该签名者在签名列表中的权重                                                   |
| data.account_objects[n].SignerQuorum                              | Integer | 签名列表阈值                                                                 |
| data.account_objects[n].index                                     | String  | 列表id                                                                       |
| data.ledger_current_index                                         | String  | 当前账本号                                                                   |
| data.validated                                                    | Boolean | 当前账本中，交易是否通过验证                                                  |

## 请求账号代理

### 类型 

GET 

### 描述

查询代理收费，和 swtc-proxy 保持一致。可以查询特定账号的代理收费信息。

说明：只有挂单平台的账号有相应的代理收费(挂单手续费)。可以查询平台账号下面收取手续费的账号以及手续费收取的比例。


### 请求地址
```
{{host}}/account/:account/brokers
```
### 参数说明

#### 参数介绍

| 参数    | 位置 | 类型   | 说明         |
|---------|------|--------|------------|
| account | Path | String | 井通钱包地址 |

### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "account": "jGxW97eCqxfAWvmqSgNkwc2apCejiM89bG",
        "brokerages": [
            {
                "FeeCurrency": "CNY",
                "FeeCurrencyIssuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                "OfferFeeRateDen": "1000",
                "OfferFeeRateNum": "1",
                "Platform": "jGxW97eCqxfAWvmqSgNkwc2apCejiM89bG",
                "fee_account": "jGxW97eCqxfAWvmqSgNkwc2apCejiM89bG"
            }
        ],
        "ledger_hash": "F979D5499CD2CC229AA264E096393267848F4CE6EB31D868713AF696AF1547D2",
        "ledger_index": 15406958,
        "validated": true
    }
}
```
### 返回值解析

| 参数                                 | 类型    | 说明                   |
|--------------------------------------|---------|----------------------|
| success                              | Boolean | 此次请求是否成功       |
| msg                                  | String  | 返回的信息             |
| code                                 | Integer | 服务器返回的请求状态码 |
| data                                 | Object  | SWTC-LIB 返回的数据    |
| data.account                         | String  | 查询的账号             |
| data.brokerages                      | Array   | 代理收费信息的数组     |
| data.brokerages[n].FeeCurrency       | String  | 收费通证               |
| data.brokerages[n].FeeCurrencyIssuer | String  | 货币发行方             |
| data.brokerages[n].OfferFeeRateDen   | String  | 分母                   |
| data.brokerages[n].OfferFeeRateNum   | String  | 分子                  |
| data.brokerages[n].Platform          | String  | 平台标识账号           |
| data.brokerages[n].fee_account       | String  | 收取手续费的账号       |
| data.ledger_hash                     | String  | 账本 hash              |
| data.ledger_index                    | String  | 账本高度/区块高度      |
| data.validated                       | Boolean | 是否通过了验证         |

## 请求账号黑名单

### 类型 

GET 

### 描述

查询账号是否是黑名单账号

### 请求地址
```
{{host}}/account/:account/blacklist
```
### 参数说明

#### 参数介绍

| 参数    | 位置 | 类型   | 说明         |
|---------|------|--------|------------|
| account | Path | String | 井通钱包地址 |

### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "account": "jfkgNWMZWYsYD6PzB4braCtQQNSNrstUmi",
        "blacklist": true,
        "ledger_hash": "56B0740E99C3FA9662C219CCA4E0538156966BD7AD84FE4B63A51D7CFB47D38B",
        "ledger_index": "16737995"
    }
}
```
### 返回值解析

| 参数              | 类型    | 说明                   |
|-------------------|---------|----------------------|
| success           | Boolean | 此次请求是否成功       |
| msg               | String  | 返回的信息             |
| code              | Integer | 服务器返回的请求状态码 |
| data              | Object  | SWTC-LIB 返回的数据    |
| data.account      | String  | 查询的账号             |
| data.blacklist    | Boolean | 是否被黑名单禁用       |
| data.ledger_hash  | String  | 账本 hash              |
| data.ledger_index | String  | 账本高度/区块高度      |