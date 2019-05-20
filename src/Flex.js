import styled from "styled-components";
import {
  space,
  width,
  color,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex
} from "styled-system";
import theme from "./theme";

export const Flex = styled.div`
  display: flex;
  ${flex}
  ${space}
  ${width}
  ${color}
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  ${flexWrap}
`;

Flex.propTypes = {
  ...flex.propTypes,
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes
};

Flex.defaultProps = {
  theme
};

Flex.displayName = "Flex";
