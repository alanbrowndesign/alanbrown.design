import { forwardRef } from "react";
import { styled } from "styles/stitchesConfig";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";




const StyledButton = styled(motion.a, {
    display: "flex",
    alignItems: "center",
    maxWidth: "max-content",
    borderRadius: "$rounded",
    transition: "background-color 0.5s ease",
    textDecoration: "none",

    variants: {
        type: {
            primary: {
                backgroundColor: "$primary",
                color: "$white",
                "&:hover": {
                    backgroundColor: "#2F69FF",
                },
            },
        },
        white: {
            true: {
                backgroundColor: "$white",
                color: "$primary",
            },
        },
        icon: {
            true: {},
        },
        size: {
            medium: {
                text: "$heading",
                lineHeight: "$none",
                px: "$s",
                py: "$2xs",
                spaceX: "$2xs",
                "& svg": {
                    size: "$space$xs",
                },
            },
            large: {
                text: "$titleCharlie",
                lineHeight: "$xtight",
                px: "$s",
                py: "$2xs",
                gap: "$2xs",
                "& svg": {
                    size: "$space$xs",
                },
            },
        },
    },
    compoundVariants: [
        {
            icon: true,
            size: "medium",
            css: {
                paddingRight: "$xs",
            },
        },
    ],
    defaultVariants: {
        type: "primary",
        size: "medium",
    },
});


interface ButtonProps {
    text: string;
    href: string;
    size?: any;
    icon?: any;
}

export const Button = forwardRef(({ href, text, icon, size } : ButtonProps, ref: any) => {
    return (
        <Link href={href} passHref>
            <StyledButton
                ref={ref}
                size={size}
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
        </Link>
    );
});

Button.displayName = "Button";

Button.defaultProps = {
    text: "Button",
    icon: false,
    href: "/",
    size: "medium"
};
