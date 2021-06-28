import styled from "@emotion/styled";
import { createUseStyles } from "react-jss";
import Actions from "./Actions";

const useDialogStyles = createUseStyles({
  scrim: `
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    z-index: 7;
    background: rgba(0,0,0,.32);
  `,
  dialog: `
    position: absolute;
    border-radius: 4px;
    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0,0,0,.12);
    display: flex;
    flex-direction: column;
    background: #fff;
  `,
  title: `
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 500;
    letter-spacing: .0125em;
    padding: 0 24px 9px;
    border-bottom: 1px solid rgba(0,0,0,.12);
    color: rgba(0,0,0,.87);
  `,
  content: `
    padding: 0 24px 20px;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    letter-spacing: .03125em;
		flex: 1;
		overflow: hidden;
  `
});

export const DialogFooter = styled(Actions)`
	padding: 8px 20px;
	justify-content: flex-end;
	border-top: 1px solid rgba(0,0,0,.12);
`

export default useDialogStyles;
