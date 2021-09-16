import { styled } from "styles/stitchesConfig";
import { Container } from "components";
import tw from "twin.macro";

const SectionWrapper = styled("div", {
    background: "linear-gradient(180deg, #E5FAFC 0%, #F1F8F9 16.84%);",
    py: "$3xl",
});

const StyledLockUp = styled("div", {
    fontSize: "$subhead",
    maxWidth: "60ch",
    spaceY: "$2xs",
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
        lineHeight: "$tight",
    },
});

const HeadingLockup = (props) => {
    const {} = props;
    return (
        <StyledLockUp>
            <h2>Experience</h2>
            <h3>
                I can help you build a scalable Design System for your business
            </h3>
            <p>
                I’ve helped some of the UK’s largest businesses set up
                enterprise-scale Design System solutions. Etiam habebis sem
                dicantur magna mollis euismod. Vivamus sagittis lacus vel augue
                laoreet rutrum faucibus.
            </p>
        </StyledLockUp>
    );
};

export function ExperienceSection(props) {
    const { text } = props;
    return (
        <SectionWrapper>
            <Container width="max">
                <HeadingLockup />
            </Container>
        </SectionWrapper>
    );
}
