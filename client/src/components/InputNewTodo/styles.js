import { makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => {
    return {form: {
      display: "flex",
      flexDirection: "column",
      minWidth: "50%",
      [theme.breakpoints.down('md')]: {
          width: "100%",
      },
    },
}})


export default useStyles;