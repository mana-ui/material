import { createUseStyles } from "react-jss";
import Color from "color";

const useButtonStyles = createUseStyles({
  button: ({theme: {color: {primary}}}) => {
    const primaryColor = Color(primary);
    return {
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    appearance: "none",
    background:"none",
    border:"none",
    outline:"none",
    padding: "0 8px",
    height:"36px",
    color: primary,
    borderRadius: "4px",
    "&:hover": {
      background: primaryColor.fade(0.96).string()
    }
  } },
});

export default useButtonStyles;
