import { styled } from "styles/stitchesConfig";
import { Container, HeadingLockup, Structure, WaveSVG } from "components";
import SkyLogo from "assets/images/skylogoframe.png";
import Image from "next/image";

const SectionWrapper = styled("div", {
    background: "linear-gradient(180deg, #E5FAFC 0%, #F1F8F9 16.84%);",
    paddingTop: "$3xl",
    paddingBottom: "calc($3xl * 2.6)",
    overflow: "hidden",
    position: "relative",
});

const LogoContainer = styled("div", {
    width: "clamp(11rem, 25vw, 14rem)",
});

const LogoInner = styled("div", {
    background: "white",
    boxShadow:
        "inset 0px 0px 4.5px 1.86px rgba(0, 0, 0, 0.085), 0px 4px 36px rgba(0, 100, 150, 0.36), 0px 4px 6px rgba(0, 0, 0, 0.08), 0px -2px 1px rgba(0, 0, 0, 0.02)",
    width: "100%",
    height: 0,
    paddingTop: "75%",
    overflow: "hidden",
    borderRadius: "1rem",
    zIndex: "$level1",
    transform: "translate(-24px, 32px)",
    position: "relative",
    "&::before": {
        content: "",
        display: "block",
        background:
            "radial-gradient(86.7% 86.7% at 50% 50%, #FFFFFF 43.48%, #F2F0FF 100%)",
        absolute: ["0.6rem", "0.6rem", "0.6rem", "0.6rem"],
        borderRadius: "0.4rem",
    },
});

const FrameContainer = styled("div", {
    width: 700,
    height: "25rem",
    backgroundColor: "$white",
    position: "absolute",
    zIndex: "$level0",
    borderRadius: "$space$2xs",
    boxShadow:
        "0px 0px 4.5px 2px rgba(0, 0, 0, 0.03), 0px 0px 20px 10px rgba(0, 90, 160, 0.07)",
});

const GridWrapper = styled("div", {
    display: "grid",
    gap: "$m",
    "@md": {
        gridTemplateColumns: "4fr 3fr",
    },
});

export function ExperienceSection(props) {
    const { text } = props;
    return (
        <SectionWrapper>
            <Container width="max">
                <GridWrapper>
                    <HeadingLockup
                        smallHeading={"Experience"}
                        mainHeading={
                            "I can help you build a scalable Design System for your business"
                        }
                    />
                    <Structure
                        horizontal
                        items={"end"}
                        css={{
                            overflowX: "visible",
                            minHeight: "25rem",
                            position: "relative",
                        }}
                    >
                        <LogoContainer>
                            <LogoInner>
                                <Image src={SkyLogo} layout={"fill"} />
                            </LogoInner>
                        </LogoContainer>
                        <FrameContainer></FrameContainer>
                    </Structure>
                </GridWrapper>
            </Container>
            <WaveSVG color={"#FFFDF0"} />
        </SectionWrapper>
    );
}
