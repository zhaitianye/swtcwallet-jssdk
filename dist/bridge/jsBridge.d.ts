export declare const isAndroid: boolean;
export declare const isIos: boolean;
export declare const init: (time?: number) => Promise<{
    success: boolean;
    msg: string;
    code: number;
}>;
export declare const connection: (name: string, data: any, callback: any) => void;
