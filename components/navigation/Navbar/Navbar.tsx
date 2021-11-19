import { styled } from "styles/stitchesConfig";
import { Container } from "components";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimateSharedLayout } from "framer-motion";

const LogoName = styled("div", {
    fontSize: "$subhead",
    fontWeight: "$medium",
    position: "relative",
    zIndex: "$level1",

    a: {
        textDecoration: "none",
        color: "inherit",
    },
    "& span": {
        fontWeight: "$light",
    },
});

const Nav = styled("nav", {
    display: "none",
    fontSize: "$0",
    fontWeight: "$medium",
    color: "inherit",
    position: "relative",
    zIndex: "$level1",
    $$motionTiming: "0.35s ease",

    a: {
        textDecoration: "none",
        color: "inherit",
        transition: "color $$motionTiming",
        position: "relative",
        display: "flex",
        py: "0.5rem",
        width: "max-content",
        "&::after": {
            content: "",
            position: "absolute",
            height: 2,
            background: "$primary",
            left: 0,
            bottom: "0.5rem",
            width: "0%",
            transition: "width $$motionTiming",
        },

        "&:hover": {
            color: "$primary",
            "&::after": {
                width: "100%",
            },
        },

        "&.active": {
            color: "$primary",
        },
    },

    "@sm": {
        display: "flex",
        spaceX: "$xs",
    },
});

const NavWrapper = styled("div", {
    position: "fixed",
    zIndex: "$level3",
    height: "4rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&::before": {
        content: "",
        "--backing-light": "rgba(255,255,255,0.6)",
        "--backing-dark": "rgba(11, 8, 66, 0.9)",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        display: "block",
        transition: "opacity 0.5s ease, background-color 0.5s ease",
        opacity: 0,
        backdropFilter: "blur(0.9rem)",
        boxShadow: "0 0 40px 2px rgba(0, 124, 133, 0.15)",
        background: "var(--backdrop)",
    },

    variants: {
        backingActive: {
            true: {
                "&::before": {
                    opacity: 1,
                },
            },
        },
        theme: {
            light: {
                color: "$primaryDarker",
                "&::before": {
                    "--backdrop": "var(--backing-light)",
                },
            },
            dark: {
                color: "$white",
                "&::before": {
                    "--backdrop": "var(--backing-dark)",
                },
            },
        },
    },

    defaultVariants: {
        theme: "light",
        backingActive: false,
    },
});

const NavInner = styled(Container, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
});

const NavIndicator = styled(motion.div, {
    $$indicatorsize: "8px",
    borderRadius: "$rounded",
    width: "$$indicatorsize",
    height: "$$indicatorsize",
    background: "$accent",
    position: "absolute",
    left: "calc(50% - $$indicatorsize/2)",
    top: -4,
});

const NavLink = ({ href = "/about", name = "About" }) => {
    const router = useRouter();
    return (
        <Link href={href}>
            <a className={router.pathname == href ? "active" : ""}>
                {router.pathname == href && (
                    <NavIndicator layoutId="underline" />
                )}
                {name}
            </a>
        </Link>
    );
};

export function Navbar(props: any) {
    const { navBacking } = props;
    const router = useRouter();
    return (
        <NavWrapper backingActive={navBacking}>
            <NavInner>
                <LogoName>
                    <Link href="/">
                        <a>
                            Alan Brown <span>Design</span>
                        </a>
                    </Link>
                </LogoName>
                <AnimateSharedLayout>
                    <Nav>
                        <NavLink name={"About"} href={"/about"} />
                        <NavLink
                            name={"Design Systems"}
                            href={"/design-systems"}
                        />
                        <NavLink name={"Projects"} href={"/projects"} />

                        <a href="https://blog.alanbrown.design" target="_blank">
                            Blog
                        </a>
                        <NavLink name={"Contact"} href={"/contact"} />
                    </Nav>
                </AnimateSharedLayout>
            </NavInner>
        </NavWrapper>
    );
}
