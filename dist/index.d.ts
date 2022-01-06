export declare function getAPPDate(): void;
export declare function isConnected(): Promise<boolean>;
export declare function getAppInfo(): Promise<{}>;
export declare function handleAndroidToast(msg: any): Promise<{}>;
export declare function invokeQRScanner(): Promise<{}>;
export declare function back(): Promise<{}>;
export declare function refresh(): Promise<{}>;
export declare function close(): Promise<{}>;
export declare function getWalletList(): Promise<{}>;
export declare function createWallet(): Promise<{}>;
export declare function getCurrentWallet(): Promise<{}>;
export declare function switchWallet(): Promise<{}>;
export declare function getAccountBalances({ account }: {
    account: any;
}): Promise<{}>;
export declare function getCurrencyBalances({ account, currency, issuer }: {
    account: any;
    currency: any;
    issuer: any;
}): Promise<{}>;
export declare function getAccountInfo({ account }: {
    account: any;
}): Promise<{}>;
export declare function sign({ from, to, value, currency, issuer, secret, addMemo, sequence, }: {
    from: any;
    to: any;
    value: any;
    currency: any;
    issuer: any;
    secret: any;
    addMemo: any;
    sequence: any;
}): Promise<{}>;
export declare function sendTransaction({ from, to, data, gasPrice, value, currency, issuer, memo, action, }: {
    from: any;
    to: any;
    data: any;
    gasPrice: any;
    value: any;
    currency: any;
    issuer: any;
    memo: any;
    action: any;
}): Promise<{}>;
export declare function selectNode(): Promise<{}>;
