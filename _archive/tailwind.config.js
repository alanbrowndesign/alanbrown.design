const plugin = require("tailwindcss/plugin");

const remCalc = (size) => {
    const remValue = size / 16;
    return `${remValue}rem`;
};

module.exports = {
    mode: "jit",
    theme: {
        colors: {
            black: "var(--colors-black)",
            white: "var(--colors-white)",
            white: "#fff",
            primary: "var(--colors-primary)",
            primaryDark: "var(--colors-primaryDark)",
            primaryDarker: "var(--colors-primaryDarker)",
            accent: "var(--colors-accent)",
            accentDark: "var(--colors-accentDark)",
            accent2: "var(--colors-accent2)",
            accent3: "var(--colors-accent3)",
        },
        spacing: {
            "4xs": "var(--space-4xs)",
            "3xs": "var(--space-3xs)",
            "2xs": "var(--space-2xs)",
            xs: "var(--space-xs)",
            s: "var(--space-s)",
            m: "var(--space-m)",
            l: "var(--space-l)",
            xl: "var(--space-xl)",
            "2xl": "var(--space-2xl)",
            "3xl": "var(--space-3xl)",
            "s-l": "var(--space-s-l)",
            "xs-s": "var(--space-xs-s)",
        },
        fontSize: {
            "size--3": "var(--fontSizes--3)",
            "size--2": "var(--fontSizes--2)",
            "size--1": "var(--fontSizes--1)",
            "size-0": "var(--fontSizes-0)",
            "size-1": "var(--fontSizes-1)",
            "size-2": "var(--fontSizes-2)",
            "size-3": "var(--fontSizes-3)",
            "size-4": "var(--fontSizes-4)",
            "size-5": "var(--fontSizes-5)",
            "size-6": "var(--fontSizes-6)",
            "size-7": "var(--fontSizes-7)",
        },
        fontWeight: {
            light: "var(--fontWeights-light)",
            medium: "var(--fontWeights-medium)",
            heavy: "var(--fontWeights-heavy)",
        },
        lineHeight: {
            none: "var(--lineHeights-none)",
            xtight: "var(--lineHeights-xtight)",
            tight: "var(--lineHeights-tight)",
            snug: "var(--lineHeights-snug)",
            normal: "var(--lineHeights-normal)",
            relaxed: "var(--lineHeights-relaxed)",
            loose: "var(--lineHeights-loose)",
        },
        screens: {
            xs: remCalc(480),
            sm: remCalc(768),
            md: remCalc(992),
            lg: remCalc(1280),
            xl: remCalc(1440),
            xxl: remCalc(1600),
        },
    },
    variants: {
        extend: {
            borderColor: ["focus-visible"],
            opacity: ["disabled"],
        },
    },
};
