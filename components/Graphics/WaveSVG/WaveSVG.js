import { styled } from "styles/stitchesConfig";

const StyledWaveSVG = styled("svg", {
    width: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
});

export const WaveSVG = ({ color }) => {
    return (
        <StyledWaveSVG
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1992 98"
        >
            <path
                d="M1458.49 48c-96.28 9.56-189.5 26.7-285.52 37.08-136.76 14.81-279.2 15.71-415.74.35-132.7-14.9-270.3-51.21-401.43-69.67C239.52-.6 112.56-7.34 0 13.11V98h1992V73.77C1821.91 39.35 1637.4 30.44 1458.49 48Z"
                fill={color}
            />
        </StyledWaveSVG>
    );
};

WaveSVG.defaultProps = {
    color: "#CC0000",
};
