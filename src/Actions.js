import { createUseStyles } from "react-jss"

const useActionsStyles = createUseStyles({
  actions: {
    padding: 8,
    display: "flex",
    alignItems:"center",
    justifyContent: "flex-end",
    minHeight: '52px',
    borderTop: '1px solid rgba(0,0,0,.12)',
    '& > *': {
        marginLeft: '8px',
    }
    },
})

export default useActionsStyles
