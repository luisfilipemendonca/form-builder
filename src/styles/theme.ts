import { CSSProperties } from 'react';
import { css, DefaultTheme } from 'styled-components';

type MediaQuery = 'max-width' | 'min-width';
type MediaQueryValues = {
    breakpoint: keyof BaseBreakpoints;
    value: string;
};

interface BreakpointArgs {
    prop: keyof CSSProperties;
    mediaQueryType: MediaQuery;
    mediaQueryValues: MediaQueryValues[];
}

interface BaseBreakpoints {
    sm: number;
    md: number;
    lg: number;
    xl: number;
}

declare module "styled-components" {
    export interface DefaultTheme {
        breakpoints: BaseBreakpoints
    }
}

export const theme: DefaultTheme = {
    breakpoints: {
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200
    }
};

export const breakpoints = ({prop, mediaQueryType, mediaQueryValues}: BreakpointArgs) => {
    let breakpointProps = '';

    mediaQueryValues.forEach((mediaQueryValue) => {
        const {breakpoint, value} = mediaQueryValue;

        breakpointProps += `
            @media screen and (${mediaQueryType}: ${theme.breakpoints[breakpoint]}px) {
                ${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: ${value}
            }
        `
    });

    console.log(breakpointProps)

    return css`${breakpointProps}`;
}