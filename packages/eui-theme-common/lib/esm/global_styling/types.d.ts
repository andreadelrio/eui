import type { CSSObject } from '@emotion/react';
import type { RecursivePartial, ValueOf } from '../types';
import { _EuiThemeAnimation } from './variables/animations';
import { _EuiThemeBreakpoints } from './variables/breakpoint';
import { _EuiThemeBorder } from './variables/borders';
import { _EuiThemeColors } from './variables/colors';
import { _EuiThemeBase, _EuiThemeSizes } from './variables/size';
import { _EuiThemeFont } from './variables/typography';
import { _EuiThemeFocus } from './variables/states';
import { _EuiThemeLevels } from './variables/levels';
import { _EuiThemeComponents } from './variables/components';
import { _EuiThemeFlags } from './variables';
export declare const COLOR_MODES_STANDARD: {
    readonly light: "LIGHT";
    readonly dark: "DARK";
};
export declare const COLOR_MODES_INVERSE: "INVERSE";
export declare type EuiThemeColorModeInverse = typeof COLOR_MODES_INVERSE;
export declare type EuiThemeColorModeStandard = ValueOf<typeof COLOR_MODES_STANDARD>;
export declare type EuiThemeColorMode = 'light' | 'dark' | EuiThemeColorModeStandard | 'inverse' | EuiThemeColorModeInverse;
export declare type ColorModeSwitch<T = string> = {
    [key in EuiThemeColorModeStandard]: T;
} | T;
export declare type StrictColorModeSwitch<T = string> = {
    [key in EuiThemeColorModeStandard]: T;
};
export declare type EuiThemeShape = {
    colors: _EuiThemeColors;
    /** - Default value: 16 */
    base: _EuiThemeBase;
    /**
     * @see {@link https://eui.elastic.co/#/theming/sizing | Reference} for more information
     */
    size: _EuiThemeSizes;
    font: _EuiThemeFont;
    border: _EuiThemeBorder;
    focus: _EuiThemeFocus;
    animation: _EuiThemeAnimation;
    breakpoint: _EuiThemeBreakpoints;
    levels: _EuiThemeLevels;
    components: _EuiThemeComponents;
    flags: _EuiThemeFlags;
};
export declare type EuiThemeSystem<T = {}> = {
    root: EuiThemeShape & T;
    model: EuiThemeShape & T;
    key: string;
};
export declare type EuiThemeModifications<T = {}> = RecursivePartial<EuiThemeShape & T>;
export declare type ComputedThemeShape<T, P = string | number | bigint | boolean | null | undefined> = T extends P | ColorModeSwitch<infer X> ? T extends ColorModeSwitch<X> ? X extends P ? X : {
    [K in keyof (X & Exclude<T, keyof X | keyof StrictColorModeSwitch>)]: ComputedThemeShape<(X & Exclude<T, keyof X | keyof StrictColorModeSwitch>)[K], P>;
} : T : {
    [K in keyof T]: ComputedThemeShape<T[K], P>;
};
export declare type EuiThemeComputed<T = {}> = ComputedThemeShape<EuiThemeShape & T> & {
    themeName: string;
};
export declare type EuiThemeNested = {
    isGlobalTheme: boolean;
    hasDifferentColorFromGlobalTheme: boolean;
    bodyColor: string;
    colorClassName: string;
    setGlobalCSSVariables: Function;
    globalCSSVariables?: CSSObject;
    setNearestThemeCSSVariables: Function;
    themeCSSVariables?: CSSObject;
};
