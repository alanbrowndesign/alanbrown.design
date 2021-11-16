import { styled } from "styles/stitchesConfig";

export const Structure = styled("div", {
    display: "flex",

    variants: {
        horizontal: {
            true: {
                flexDirection: "row",
            },
        },
        vertical: {
            true: {
                flexDirection: "column",
            },
        },
        items: {
            start: {
                alignItems: "start",
            },
            center: {
                alignItems: "center",
            },
            end: {
                alignItems: "end",
            },
            baseline: {
                alignItems: "baseline",
            },
        },
        justify: {
            start: {
                justifyContent: "start",
            },
            center: {
                justifyContent: "center",
            },
            end: {
                justifyContent: "end",
            },
            between: {
                justifyContent: "space-between",
            },
            around: {
                justifyContent: "space-around",
            },
            evenly: {
                justifyContent: "space-evenly",
            },
        },
    },
    defaultVariants: {
        vertical: true,
        items: "start",
        justify: "start",
    },
});
