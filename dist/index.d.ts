export declare function isConnected(): Promise<{
    success: boolean;
    msg: string;
    code: number;
}>;
export declare function getAppInfo(): Promise<{}>;
export declare function handleAndroidToast(msg: string): Promise<{}>;
export declare function invokeQRScanner(): Promise<{}>;
export declare function back(): Promise<{}>;
export declare function refresh(): Promise<{}>;
export declare function close(): Promise<{}>;
export declare function getWalletList(): Promise<{}>;
export declare function createWallet(): Promise<{}>;
export declare function getCurrentWallet(): Promise<{}>;
export declare function switchWallet(): Promise<{}>;
interface SignParams {
    from: string;
    to: string;
    value: string;
    currency: string;
    issuer?: string;
    secret: string;
    addMemo?: string;
    sequence?: string;
}
export declare function sign({ from, to, value, currency, issuer, secret, addMemo, sequence, }: SignParams): Promise<{}>;
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
export {};
