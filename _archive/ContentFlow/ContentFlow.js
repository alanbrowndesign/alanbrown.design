import styled from "@emotion/styled";

const StyledContentFlow = styled.div`
    > * + * {
        margin-top: ${(props) => `var(--space-${props.gap})`};
    }
`;

export function ContentFlow(props) {
    const { gap, children, isFluid } = props;
    return (
        <StyledContentFlow gap={gap} isFluid={isFluid}>
            {children}
        </StyledContentFlow>
    );
}

ContentFlow.defaultProps = {
    isFluid: true,
    gap: "m",
};
