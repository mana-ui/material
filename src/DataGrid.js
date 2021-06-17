import styled from "@emotion/styled";
import { createUseStyles } from "react-jss";

const useDataGridStyles = createUseStyles({
    container:`
        background-color: #fff;
        background-color: var(--color-surface, #fff);
        border-radius: 4px;
        border: 1px solid rgba(0,0,0,.12);
        -webkit-overflow-scrolling: touch;
        display: inline-flex;
        flex-direction: column;
        box-sizing: border-box;
        overflow-x: auto;
    `,
    table: `
        min-width: 100%;
        border: 0;
        white-space: nowrap;
        border-collapse: collapse;
        table-layout: fixed;
    `,
    tbody:`
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: .875rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: .0178571429em;
    text-decoration: inherit;
    text-transform: inherit;
    `,
    headerTr: `background-color: inherit;`,
  tr: `
    border-top: 1px solid rgba(0,0,0,.12);
  `,
    cell: `
    padding: 0 16px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: .875rem;
    text-decoration: inherit;
    text-transform: inherit;
    box-sizing: border-box;
    text-overflow: ellipsis;
    overflow: hidden;
    color: rgba(0,0,0,.87);
    `,
  th: `
    height: 56px;
    line-height: 1.375rem;
    font-weight: 500;
    letter-spacing: .0071428571em;
    text-align: left;
  `,
  td: `
    height: 52px;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: .0178571429em;
  `
});

const Empty = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100px;
`

export {Empty,  useDataGridStyles };
