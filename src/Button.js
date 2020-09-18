import { createUseStyles } from "react-jss";

const useButtonStyles = createUseStyles({
  button: `
    position: relative;
    overflow: hidden;
    cursor: pointer;
    appearance: none;
    background: none;
    border: none;
    outline: none;
  `,
});

export default useButtonStyles;
