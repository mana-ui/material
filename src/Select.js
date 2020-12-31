import Color from "color";
import { createUseStyles } from "react-jss";

export const useSelectStyles = createUseStyles({
  wrapper: `
    position: relative;
    background-color: #f5f5f5;
    height: 48px;
    display: flex;
    flex-direction: column;
    border-radius: 4px 4px 0 0;
    cursor: pointer;
  `,
  "@keyframes autofill": {
    "0%, 100%": {
      color: "#495057",
      background: "transparent",
    },
  },
  selected: ({theme: {color: {primary}}}) => ( {
    width: "100%",
    height: "100%",
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '.009375em',
    alignSelf: 'flex-end',
    border: 0,
    borderBottom: `1px solid #ced4da`,
    padding: '20px 16px 6px',
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
  label: ({ active, focus, theme: {color: {primary}}}) => {
    return ({
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: ".009375em",
    position: "absolute",
    lineHeight: "1.15rem",
    top: '50%',
    left: 16,
    color: focus ? primary: "rgba(0,0,0,.6)",
    cursor: "text",
    transform: active
      ? "translateY(-106%) scale(0.75)"
      : "translateY(-50%)",
    transition:
      "transform 0.15s cubic-bezier(.4,0,.2,1), color 0.15s cubic-bezier(.4,0,.2,1)",
    transformOrigin: "left top",
    willChange: 'transform',
  }) },
  dropdown: {
      position: 'absolute',
      top: '100%',
      background: '#fff',
      left: 0,
      right: 0,
      boxShadow: '0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)',
      color: 'rgba(0,0,0,.87)',
      padding: '8px 0',
      zIndex: 8,
  },
});

export const useListItemStyles = createUseStyles({
    listItem: ({active, theme: {color: {primary}}}) => {
        const style = {
        padding: '0 16px',
        height: 48,
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: Color('#000').fade(.96).string()
        }
    }
    if (active) {
        style.backgroundColor = Color(primary).fade(0.96).string()
    }
        return style }
})
