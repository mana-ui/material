import { createUseStyles } from "react-jss";
import Color from "color";
import styled from "@emotion/styled";
import { Text } from "./Button";

const useTabListStyles = createUseStyles({
  tabList: () => ( {
        display: 'flex',
  } )
});

const useTabStyles = createUseStyles({
  tab: () => {
    return {
        position: 'relative',
      height: 48,
      overflow: 'visible',
    };
  },
  indicator: ({theme}) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    background: theme.color.primary
  })
});

const useTabPanelsStyles = createUseStyles({
    tabPanels: {
        position: 'relative',
        overflow: 'hidden',
    },
    scroll: {
        height: '100%',
        display: 'flex',
    }
})

const useTabPanelStyles = createUseStyles({
    tabPanel: {
        height: '100%',
        width: '100%',
    }
})

const TabButton = styled(Text)({
	height: '100%',
	fontSize: 14,
	fontWeight: 500,
	padding: "0 24px",
  }, ({active, theme: {color: {primary}}}) => {

    const primaryColor = Color(primary);
    return {
      color: active ? primary : "rgba(0, 0, 0, .6)",
      "&:hover": {
        background: primaryColor.fade(0.96).string(),
      },
      "&:focus": {
        background: primaryColor.fade(0.88).string(),
      },
    }
  })

export { useTabListStyles, useTabStyles, useTabPanelStyles, useTabPanelsStyles, TabButton };
