import { createUseStyles } from "react-jss";

const useInputStyles = createUseStyles({
  wrapper: `position: relative;`,
  "@keyframes autofill": {
    "0%, 100%": {
      color: "#495057",
      background: "transparent",
    },
  },
  input: {
    width: "100%",
    border: 0,
    borderBottom: "1px solid #ced4da",
    outline: 0,
    
    "&:-webkit-autofill::first-line": {
      fontSize: 16,
      fontFamily: "Sans-Serif",
    },
    animationDelay:
      "1s" /* Safari support - any positive time runs instantly */,
    animationName: "$autofill",
    animationFillMode: "both",
    "&:focus": {
      borderBottom: "1px solid #77cbe7",
      boxShadow: "0 1px 0 0 #77cbe7",
      "& + label": {
        color: "var(--color-primary)",
        transform: "translateY(-1.2rem) scale(0.8)",
      },
    },
    "&:-internal-autofill-selected + label": {
      transform: "translateY(-1.2rem) scale(0.8)",
    },
  },
  label: ({ active }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    color: "#757575",
    cursor: "text",
    transform: active
      ? "transform: translateY(-16px) scale(0.8)"
      : "translateY(8px)",
    transition:
      "transform 0.2s ease-out, color 0.2s ease-out, -webkit-transform 0.2s ease-out",
    transformOrigin: "0 100%",
  }),
});

export default useInputStyles;
