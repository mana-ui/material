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
    padding: "0 16px",
    height: "36px",
    borderRadius: "4px",
    color: "#fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  (props) => {
    const {
			disabled,
      theme: {
        color: { primary },
      },
    } = props;
		if (disabled) {
			return {
				backgroundColor: 'rgba(0,0,0,.12)',
				color: 'rgba(0,0,0,.26)',
				cursor: 'default'
			}
		}
    return {
      backgroundColor: primary,
      "&:hover": { background: Color(primary).fade(0.08).string() },
    };
  }
);

const Text = styled(Button)`
  color: ${(props) => props.theme.color.primary};
  background: none;
  &:hover {
    background: ${(props) =>
      Color(props.theme.color.primary).fade(0.96).string()};
  }
`;

const Outlined = styled(Text)`
  border-style: solid;
  padding: 0 15px 0 15px;
  border-width: 1px;
  border-color: ${(props) => props.theme.color.primary};
`;

export { Button, Text, Outlined };
