import styled from "@emotion/styled";

const Actions = styled.div({
  padding: "8px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  minHeight: "52px",
  borderTop: "1px solid rgba(0,0,0,.12)",
  "& > *": {
    marginLeft: "8px",
  },
});

export default Actions;
