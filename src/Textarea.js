import { createUseStyles } from "react-jss";

const useTextareaStyles = createUseStyles({
  wrapper: `
    position: relative;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    border-radius: 4px 4px 0 0;
  `,
  "@keyframes autofill": {
    "0%, 100%": {
      color: "#495057",
      background: "transparent",
    },
  },
  textarea: ({theme: {color: {primary}}}) => ( {
    width: "100%",
    height: "100%",
    fontSize: '16px',
    fontFamily: 'Arial',
    fontWeight: 400,
    letterSpacing: '.009375em',
    alignSelf: 'flex-end',
    border: 0,
    borderBottom: `1px solid #ced4da`,
    padding: '0 16px 6px',
    marginTop: 20,
    outline: 0,
    caretColor: primary,
    "&:-webkit-autofill::first-line": {
      fontSize: 16,
      fontFamily: "Sans-Serif",
    },
    animationDelay: "1s" /* Safari support - any positive time runs instantly */,
    animationName: "$autofill",
    animationFillMode: "both",
    "&:focus": {
      borderBottom: `1px solid ${primary}`,
      "& + label": {
        color: primary,
        transform: "translateY(-106%) scale(0.75)",
      },
    },
    "&:-internal-autofill-selected + label": {
      transform: "translateY(-106%) scale(0.75)",
    },
  } ),
  label: ({ active }) => {
    return ({
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: ".009375em",
    position: "absolute",
    lineHeight: "1.15rem",
    top: 24,
    left: 16,
    color: "rgba(0,0,0,.6)",
    cursor: "text",
    transform: active
      ? "translateY(-106%) scale(0.75)"
      : "translateY(-50%)",
    transition:
      "transform 0.15s cubic-bezier(.4,0,.2,1), color 0.15s cubic-bezier(.4,0,.2,1)",
    transformOrigin: "left top",
    willChange: 'transform',
    pointerEvents: 'none',
  }) },
});

export default useTextareaStyles;
