import Color from "color";
import styled from "@emotion/styled";

const Button = styled.button(
  {
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    appearance: "none",
    background: "none",
    border: "none",
    outline: "none",
    padding: "0 8px",
    height: "36px",
    color: primary,
    borderRadius: "4px",
    "&:hover": {
      background: primaryColor.fade(0.96).string(),
    },
  },
  ({
    theme: {
      color: { primary },
    },
  }) => ({ color: primary, '&:hover': {background: Color(primary).fade(0.96).string()} })
);

export default Button;
