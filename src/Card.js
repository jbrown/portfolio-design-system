import styled from "styled-components";
import { Box } from "./Box";
import theme from "./theme";
import PropTypes from "prop-types";
import { borderRadius } from "styled-system";

const boxShadow = props => {
  const boxShadows = {
    sm: {
      "box-shadow": props.theme.boxShadows[0]
    },
    md: {
      "box-shadow": props.theme.boxShadows[1]
    },
    lg: {
      "box-shadow": props.theme.boxShadows[2]
    },
    xl: {
      "box-shadow": props.theme.boxShadows[3]
    }
  };
  return boxShadows[props.boxShadowSize];
};

const boxBorder = props => ({
  border:
    props.borderWidth === 0
      ? "0"
      : `${props.borderWidth}px solid ${props.theme.colors[props.borderColor]}`
});

export const Card = styled(Box)`
  ${boxShadow} ${boxBorder} ${borderRadius};
`;

Card.propTypes = {
  ...borderRadius.propTypes,
  boxShadowSize: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  borderColor: PropTypes.string,
  borderWidth: PropTypes.oneOf([0, 1, 2])
};

Card.defaultProps = {
  borderColor: "borderGray",
  borderRadius: 1,
  borderWidth: 1,
  theme: theme
};

Card.displayName = "Card";
