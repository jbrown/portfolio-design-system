import styled from "styled-components";
import { flex, space, width, color, textAlign } from "styled-system";
import theme from "./theme";

export const Box = styled.div`
  ${flex}
  ${space}
  ${width}
  ${color}
  ${textAlign}
`;

Box.propTypes = {
  ...flex.propTypes,
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes,
  ...textAlign.propTypes
};

Box.defaultProps = {
  theme
};
