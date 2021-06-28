import styled from "@emotion/styled";

const Actions = styled.div({
  display: "flex",
  alignItems: "center",
  "& > *": {
    marginLeft: "8px",
  },
	"& > *:first-of-type": {
		marginLeft: 0,
	}
});

export default Actions;
