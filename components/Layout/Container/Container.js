import { styled } from "styles/stitchesConfig";

export const Container = styled("div", {
    width: "100%",
    mx: "auto",
    px: "$s",
    "@sm": {
        px: "$m",
    },

    variants: {
        width: {
            narrow: {
                maxWidth: "$narrow",
            },
            medium: {
                maxWidth: "$medium",
            },
            max: {
                maxWidth: "$max",
            },
        },
    },

    defaultVariants: {
        width: "max",
    },
});
