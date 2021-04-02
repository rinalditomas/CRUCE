import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  admin: {
    background: "#e8e810",
    color: 'black',
  },
  cadeteria: {
    background: "red",
  },
}));

export default useStyles;
