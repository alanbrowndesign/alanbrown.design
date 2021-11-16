import { createStitches } from "@stitches/react";

const remCalc = (size) => {
    const remValue = size / 16;
    return `${remValue}rem`;
};

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            black: "#000",
            white: "#fff",
            darkNavy: "#0F0B5C",
            navy: "#04006F",
            bluePurple: "#544EF5",
            turquoise: "#00BAC6",
            turquoiseDark: "#009099",
            sand: "#FFFDF0",
            sky: "#E5F9FC",

            primaryDarker: "$darkNavy",
            primaryDark: "$navy",
            primary: "$bluePurple",

            accent: "$turquoise",
            accentDark: "$turquoiseDark",

            accent2: "$sand",
            accent3: "$sky",
        },
        fontSizes: {
            "-3": "clamp(0.71rem, 0.7rem + 0.07vw, 0.76rem)",
            "-2": "clamp(0.8rem, 0.77rem + 0.16vw, 0.91rem)",
            "-1": "clamp(0.89rem, 0.84rem + 0.29vw, 1.09rem)",
            0: "clamp(1rem, 0.91rem + 0.45vw, 1.31rem)",
            1: "clamp(1.12rem, 0.99rem + 0.65vw, 1.58rem)",
            2: "clamp(1.25rem, 1.07rem + 0.91vw, 1.89rem)",
            3: "clamp(1.41rem, 1.16rem + 1.23vw, 2.27rem)",
            4: "clamp(1.57rem, 1.25rem + 1.64vw, 2.72rem)",
            5: "clamp(1.76rem, 1.33rem + 2.15vw, 3.27rem)",
            6: "clamp(1.97rem, 1.42rem + 2.78vw, 3.92rem)",
            7: "clamp(2.21rem, 1.5rem + 3.56vw, 4.7rem)",

            hero: "$7",
            headline: "$6",
            titleAlpha: "$5",
            titleBravo: "$4",
            titleCharlie: "$3",
            heading: "$2",
            subhead: "$1",
            body: "$0",
            footnote: "$-1",
            caption: "$-2",
            micro: "$-3",
        },
        fontWeights: {
            light: 400,
            medium: 500,
            heavy: 700,
        },
        fonts: {
            display: "program, sans-serif",
        },
        space: {
            "4xs": "var(--spacing-4xs)",
            "3xs": "var(--spacing-3xs)",
            "2xs": "var(--spacing-2xs)",
            xs: "var(--spacing-xs)",
            s: "var(--spacing-s)",
            m: "var(--spacing-m)",
            l: "var(--spacing-l)",
            xl: "var(--spacing-xl)",
            "2xl": "var(--spacing-2xl)",
            "3xl": "var(--spacing-3xl)",
            "s-l": "var(--spacing-s-l)",
            "xs-s": "var(--spacing-xs-s)",
        },
        lineHeights: {
            none: 1.02,
            xtight: 1.1,
            tight: 1.2,
            snug: 1.3,
            normal: 1.4,
            relaxed: 1.5,
            loose: 1.6,
        },
        radii: {
            rounded: "999em",
        },
        sizes: {
            narrow: remCalc(992),
            medium: remCalc(1280),
            max: remCalc(1440),
        },
        zIndices: {
            level0: 0,
            level1: 10,
            level2: 20,
            level3: 30,
            level4: 40,
            level5: 50,
            levelMax: 999,
        },
    },
    media: {
        xs: `(min-width: ${remCalc(480)})`,
        sm: `(min-width: ${remCalc(768)})`,
        md: `(min-width: ${remCalc(992)})`,
        lg: `(min-width: ${remCalc(1280)})`,
        xl: `(min-width: ${remCalc(1440)})`,
        xxl: `(min-width: ${remCalc(1600)})`,
    },
    utils: {
        mx: (value) => ({ marginLeft: value, marginRight: value }),
        my: (value) => ({ marginTop: value, marginBottom: value }),

        px: (value) => ({ paddingLeft: value, paddingRight: value }),
        py: (value) => ({ paddingTop: value, paddingBottom: value }),

        size: (value) => ({ width: value, height: value }),
        spaceY: (value) => ({
            "& > :not([hidden]) ~ :not([hidden])": {
                marginTop: value,
            },
        }),
        spaceX: (value) => ({
            "& > :not([hidden]) ~ :not([hidden])": {
                marginLeft: value,
            },
        }),

        absolute: (value = [0, 0, 0, 0]) => ({
            position: "absolute",
            top: value[0],
            right: value[1],
            bottom: value[2],
            left: value[3],
        }),
        text: (value) =>
            value == "$hero"
                ? {
                      fontSize: "$hero",
                      lineHeight: "$xtight",
                      fontWeight: "$medium",
                  }
                : value == "$headline"
                ? {
                      fontSize: "$headline",
                      lineHeight: "$tight",
                      fontWeight: "$medium",
                  }
                : value == "$titleAlpha"
                ? {
                      fontSize: "$titleAlpha",
                      lineHeight: "$tight",
                      fontWeight: "$medium",
                  }
                : value == "$titleBravo"
                ? {
                      fontSize: "$titleBravo",
                      lineHeight: "$tight",
                      fontWeight: "$medium",
                  }
                : value == "$titleCharlie"
                ? {
                      fontSize: "$titleCharlie",
                      lineHeight: "$tight",
                      fontWeight: "$medium",
                  }
                : value == "$heading"
                ? {
                      fontSize: "$heading",
                      lineHeight: "$snug",
                      fontWeight: "$medium",
                  }
                : null,
    },
});
