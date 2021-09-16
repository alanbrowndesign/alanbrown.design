import { styled } from "styles/stitchesConfig";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

const StyledButton = styled(motion.button, {
    backgroundColor: "$primary",
    transition: "background-color 0.5s ease",
    text: "$heading",
    lineHeight: "$none",
    color: "$white",
    px: "$s",
    py: "$2xs",
    borderRadius: "$rounded",
    display: "flex",
    alignItems: "center",
    gap: "$2xs",
    maxWidth: "max-content",

    "& svg": {
        size: "$space$xs",
    },

    variants: {
        icon: {
            true: {
                paddingRight: "$xs",
            },
        },
        size: {
            small: {},
        },
    },
});

export function Button(props) {
    const { text, icon } = props;
    return (
        <StyledButton
            icon={icon}
            whileHover={{
                scale: 1.05,
            }}
            whileTap={{
                scale: 0.95,
            }}
        >
            <div>{text}</div>
            {icon && <FaChevronRight />}
        </StyledButton>
    );
}

Button.defaultProps = {
    text: "Button",
    icon: false,
};
