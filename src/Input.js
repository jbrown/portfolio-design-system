import styled from "styled-components";
import { flex, space, themeGet } from "styled-system";
import PropTypes from "prop-types";
import defaultTheme from "./theme";

const borders = ({ color, theme }) => {
  const borderColor = color ? theme.colors[color] : theme.colors.borderGray;
  const focusColor = color ? borderColor : theme.colors.blue;
  return {
    "border-color": borderColor,
    "box-shadow": `0 0 0 1px ${borderColor}`,
    ":focus": {
      outline: 0,
      "border-color": focusColor,
      "box-shadow": `0 0 0 2px ${focusColor}`
    }
  };
};

export const Input = styled.input`
  appearance: none;
  display: block;
  font-family: inherit;
  font-size: ${themeGet("fontSizes.1")}px;
  color: inherit;
  background-color: transparent;
  border-radius: ${themeGet("radius")};
  border-width: 0px;
  border-style: solid;
  border-color: ${themeGet("colors.borderGray")};

  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 12px;
  padding-right: 12px;

  margin: 0;

  ::placeholder {
    color: ${themeGet("colors.gray")};
  }

  ::-ms-clear {
    display: none;
  }

  ${borders} ${space} ${flex};
`;

Input.displayName = "Input";
Input.isField = true;
Input.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string,
  ...borders.propTypes,
  ...space.propTypes,
  ...flex.propTypes
};

Input.defaultProps = {
  theme: defaultTheme
};
