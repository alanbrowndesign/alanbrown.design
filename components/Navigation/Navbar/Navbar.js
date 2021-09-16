import { styled } from "styles/stitchesConfig";

import { remcalc } from "tokens/tools";

const NavWrapper = styled("div", {
    position: "fixed",
    zIndex: "$level1",
    color: "$primaryDarker",
    height: "4rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

const NavInner = styled("div", {
    width: "100%",
    maxWidth: "$max",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    px: "$s",
});

const LogoName = styled("div", {
    fontSize: "$subhead",
    fontWeight: "$medium",

    "& > span": {
        fontWeight: "$light",
    },
});

const Nav = styled("nav", {
    display: "none",
    fontSize: "$0",

    "@sm": {
        display: "flex",
        gap: "$xs",
    },
});

export function Navbar(props) {
    const { text } = props;
    return (
        <NavWrapper>
            <NavInner>
                <LogoName>
                    Alan Brown <span>Design</span>
                </LogoName>
                <Nav>
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                </Nav>
            </NavInner>
        </NavWrapper>
    );
}
