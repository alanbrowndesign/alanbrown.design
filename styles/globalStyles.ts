import { globalCss } from "./stitchesConfig";

export const global = globalCss(
    {
        "*, *::before, *::after": {
            boxSizing: "border-box",
        },
        "h1, h2, h3, h4, h5, h6, p, figure, blockquote, dl, dd": {
            margin: 0,
        },
        "html, body": {
            margin: 0,
            padding: 0,
        },

        "input, button, textarea, select": {
            font: "inherit",
        },
        button: {
            border: 0,
            cursor: "pointer",
        },
        ":root": {

            "--fluid-min-width": 320,
            "--fluid-max-width": 1440,

            "--fluid-screen": "100vw",
            "--fluid-bp":
                "calc((var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) / (var(--fluid-max-width) - var(--fluid-min-width)))",


            "--fc-4xs-min": "(var(--fc-s-min) * 0.125)",
            "--fc-4xs-max": "(var(--fc-s-max) * 0.125)",
            "--fc-3xs-min": "(var(--fc-s-min) * 0.25)",
            "--fc-3xs-max": "(var(--fc-s-max) * 0.25)",
            "--fc-2xs-min": "(var(--fc-s-min) * 0.5)",
            "--fc-2xs-max": "(var(--fc-s-max) * 0.5)",
            "--fc-xs-min": "(var(--fc-s-min) * 0.75)",
            "--fc-xs-max": "(var(--fc-s-max) * 0.75)",
            "--fc-s-min": "(var(--f-0-min, 24))",
            "--fc-s-max": "(var(--f-0-max, 32))",
            "--fc-m-min": "(var(--fc-s-min) * 1.25)",
            "--fc-m-max": "(var(--fc-s-max) * 1.25)",
            "--fc-l-min": "(var(--fc-s-min) * 1.5)",
            "--fc-l-max": "(var(--fc-s-max) * 1.5)",
            "--fc-xl-min": "(var(--fc-s-min) * 1.75)",
            "--fc-xl-max": "(var(--fc-s-max) * 1.75)",
            "--fc-2xl-min": "(var(--fc-s-min) * 2)",
            "--fc-2xl-max": "(var(--fc-s-max) * 2)",
            "--fc-3xl-min": "(var(--fc-s-min) * 2.5)",
            "--fc-3xl-max": "(var(--fc-s-max) * 2.5)",
            "--space-4xs":
                "calc(((var(--fc-4xs-min) / 16) * 1rem) + (var(--fc-4xs-max) - var(--fc-4xs-min)) * var(--fluid-bp))",
            "--space-3xs":
                "calc(((var(--fc-3xs-min) / 16) * 1rem) + (var(--fc-3xs-max) - var(--fc-3xs-min)) * var(--fluid-bp))",
            "--space-2xs":
                "calc(((var(--fc-2xs-min) / 16) * 1rem) + (var(--fc-2xs-max) - var(--fc-2xs-min)) * var(--fluid-bp))",
            "--space-xs":
                "calc(((var(--fc-xs-min) / 16) * 1rem) + (var(--fc-xs-max) - var(--fc-xs-min)) * var(--fluid-bp))",
            "--space-s":
                "calc(((var(--fc-s-min) / 16) * 1rem) + (var(--fc-s-max) - var(--fc-s-min)) * var(--fluid-bp))",
            "--space-m":
                "calc(((var(--fc-m-min) / 16) * 1rem) + (var(--fc-m-max) - var(--fc-m-min)) * var(--fluid-bp))",
            "--space-l":
                "calc(((var(--fc-l-min) / 16) * 1rem) + (var(--fc-l-max) - var(--fc-l-min)) * var(--fluid-bp))",
            "--space-xl":
                "calc(((var(--fc-xl-min) / 16) * 1rem) + (var(--fc-xl-max) - var(--fc-xl-min)) * var(--fluid-bp))",
            "--space-2xl":
                "calc(((var(--fc-2xl-min) / 16) * 1rem) + (var(--fc-2xl-max) - var(--fc-2xl-min)) * var(--fluid-bp))",
            "--space-3xl":
                "calc(((var(--fc-3xl-min) / 16) * 1rem) + (var(--fc-3xl-max) - var(--fc-3xl-min)) * var(--fluid-bp))",
            "--space-4xs-3xs":
                "calc(((var(--fc-4xs-min) / 16) * 1rem) + (var(--fc-3xs-max) - var(--fc-4xs-min)) * var(--fluid-bp))",
            "--space-3xs-2xs":
                "calc(((var(--fc-3xs-min) / 16) * 1rem) + (var(--fc-2xs-max) - var(--fc-3xs-min)) * var(--fluid-bp))",
            "--space-2xs-xs":
                "calc(((var(--fc-2xs-min) / 16) * 1rem) + (var(--fc-xs-max) - var(--fc-2xs-min)) * var(--fluid-bp))",
            "--space-xs-s":
                "calc(((var(--fc-xs-min) / 16) * 1rem) + (var(--fc-s-max) - var(--fc-xs-min)) * var(--fluid-bp))",
            "--space-s-m":
                "calc(((var(--fc-s-min) / 16) * 1rem) + (var(--fc-m-max) - var(--fc-s-min)) * var(--fluid-bp))",
            "--space-m-l":
                "calc(((var(--fc-m-min) / 16) * 1rem) + (var(--fc-l-max) - var(--fc-m-min)) * var(--fluid-bp))",
            "--space-l-xl":
                "calc(((var(--fc-l-min) / 16) * 1rem) + (var(--fc-xl-max) - var(--fc-l-min)) * var(--fluid-bp))",
            "--space-xl-2xl":
                "calc(((var(--fc-xl-min) / 16) * 1rem) + (var(--fc-2xl-max) - var(--fc-xl-min)) * var(--fluid-bp))",
            "--space-2xl-3xl":
                "calc(((var(--fc-2xl-min) / 16) * 1rem) + (var(--fc-3xl-max) - var(--fc-2xl-min)) * var(--fluid-bp))",
            "--space-s-l":
                "calc(((var(--fc-s-min) / 16) * 1rem) + (var(--fc-l-max) - var(--fc-s-min)) * var(--fluid-bp))",
            "--space-xs-m":
                "calc(((var(--fc-xs-min) / 16) * 1rem) + (var(--fc-m-max) - var(--fc-xs-min)) * var(--fluid-bp))",

            "@media (min-width: 1440px)": {
                "--fluid-screen": "calc(var(--fluid-max-width) * 1px)",
            },
        },
        body: {
            "min-height": "100vh",
            minHeight: "-webkit-fill-available",
            scrollBehavior: "smooth",
            textRendering: "optimizeSpeed",
            lineHeight: "var(--lineHeights-normal)",
            letterSpacing: "0.0125em",
            width: "100%",
            fontFamily: "var(--fonts-display)",
            fontWeight: "var(--fontWeights-light)",
            minWidth: "20rem",
            fontSize: "var(--fontSizes-0)",
            fontSmooth: "antialiased",
            "-webkit-font-smoothing": "antialiased",
        },

    });
