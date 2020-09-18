import { createUseStyles } from "react-jss";
import Color from "color";

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
  button: ({active, theme: {color: {primary}}}) => {
    const primaryColor = Color(primary);
      return ( {
      height: '100%',
      width: '100%',
      fontSize: 14,
      fontWeight: 500,
      color: active ? primary : "rgba(0, 0, 0, .6)",
      padding: "0 24px",
      "&:hover": {
        background: primaryColor.fade(0.96).string(),
      },
      "&:focus": {
        background: primaryColor.fade(0.88).string(),
      },
  } ) },
  indicator: ({theme}) => ({
    position: 'absolute',
    content: '""',
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

export { useTabListStyles, useTabStyles, useTabPanelStyles, useTabPanelsStyles };
