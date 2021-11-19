import { styled } from "styles/stitchesConfig";
import { Button } from "components";

const StyledLockUp = styled("div", {
    fontSize: "$subhead",
    maxWidth: "60ch",
    spaceY: "$s",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "$primaryDarker",
    ".heading-group": {
        spaceY: "$2xs",
    },
    h2: {
        fontSize: "$titleCharlie",
        fontWeight: "$medium",
        color: "$accentDark",
    },
    h3: {
        fontSize: "$titleAlpha",
        fontWeight: "$medium",
        color: "$primaryDark",
        maxWidth: "28ch",
        lineHeight: "$xtight",
    },
});

export function HeadingLockup(props: any) {
    const { cssOverride, smallHeading, mainHeading } = props;
    return (
        <StyledLockUp css={cssOverride}>
            <div className={"heading-group"}>
                <h2>{smallHeading}</h2>
                <h3>{mainHeading}</h3>
            </div>
            <p>
                I’ve helped some of the UK’s largest businesses set up
                enterprise-scale Design System solutions. Etiam habebis sem
                dicantur magna mollis euismod. Vivamus sagitti lacus vel augue
                laoreet rutrum faucibus.
            </p>
            <Button icon text="Design Systems" href="#" />
        </StyledLockUp>
    );
}

HeadingLockup.defaultProps = {
    smallHeading: "Small Heading",
    mainHeading:
        "Main Heading goes here omnes lingua, institutis, legibus inter se differunt.",
};
