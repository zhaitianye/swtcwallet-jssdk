export declare function isConnected(): Promise<{
    success: boolean;
    msg: string;
    code: number;
}>;
export declare function appInfo(): Promise<{}>;
export declare function appToast(msg: string): Promise<{}>;
export declare function appQr(): Promise<{}>;
export declare function appBack(): Promise<{}>;
export declare function appRefresh(): Promise<{}>;
export declare function appClose(): Promise<{}>;
export declare function walletCreate(): Promise<{}>;
export declare function walletCurrent(): Promise<{}>;
export declare function walletSwitch(): Promise<{}>;
export declare function selectNode(): Promise<{}>;
interface TxSignParams {
    to: string;
    value: string;
    currency: string;
    issuer: string;
    memo?: string;
}
export declare function txSign({ to, value, currency, issuer, memo, }: TxSignParams): Promise<{}>;
interface TxSendParams {
    blob: string;
}
export declare function txSend({ blob }: TxSendParams): Promise<{}>;
export {};
