import styled from "@emotion/styled";
import { colors, mediaQuery } from "tokens";

const StyledWrapper = styled.button`
  background: ${colors.accent.base};
  color: #fff;
  font-size: var(--type-0);
  padding-inline: 16px;
  padding-block: 4px;
  height: 32px;
  display: block;
  width: max-content;
  /* ${mediaQuery("sm")} {
    color: #ffffff;
    background: ${colors.primary.dark};
  } */
`;

export function Button(props) {
  const { text, href } = props;
  return (
    <StyledWrapper as={href && "a"} href={href}>
      {text}
    </StyledWrapper>
  );
}

Button.defaultProps = {
  text: "Button",
};
