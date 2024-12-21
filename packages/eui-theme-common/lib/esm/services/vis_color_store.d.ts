import { _EuiThemeVisColors } from '../global_styling';
export declare const VIS_COLOR_STORE_EVENTS: {
    readonly UPDATE: "UPDATE";
};
export declare type VisColorStoreEvents = keyof typeof VIS_COLOR_STORE_EVENTS;
declare type EventId = string;
export declare type _EuiVisColorStore = {
    visColors: _EuiThemeVisColors;
    hasVisColorAdjustment: boolean;
    setVisColors: (colors: _EuiThemeVisColors, hasVisColorAdjustment?: boolean) => void;
    subscribe: (eventName: VisColorStoreEvents, callback: any) => EventId;
    unsubscribe: (eventName: VisColorStoreEvents, id: EventId) => void;
};
declare class EuiVisColorStoreImpl implements _EuiVisColorStore {
    private _visColors;
    private _hasVisColorAdjustment;
    private events;
    constructor(dependencies: {
        defaultColors: _EuiThemeVisColors;
        hasVisColorAdjustment: boolean;
    });
    get visColors(): _EuiVisColorStore['visColors'];
    get hasVisColorAdjustment(): _EuiVisColorStore['hasVisColorAdjustment'];
    setVisColors: (colors: _EuiThemeVisColors, hasColorAdjustment?: boolean | undefined) => void;
    subscribe: (eventName: VisColorStoreEvents, callback: NonNullable<any>) => string;
    unsubscribe: (eventName: VisColorStoreEvents, id: EventId) => void;
    private publishUpdate;
}
export declare class EuiVisColorStore {
    private static instance;
    static getInstance(defaultColors: _EuiThemeVisColors, hasVisColorAdjustment: boolean): EuiVisColorStoreImpl;
}
export {};
