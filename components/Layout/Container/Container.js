import { styled } from "styles/stitchesConfig";

const StyledContainer = styled("div", {
    width: "100%",
    mx: "auto",
    px: "$s",

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

export const Container = (props) => {
    const { width, children } = props;
    return <StyledContainer width={width}>{children}</StyledContainer>;
};
