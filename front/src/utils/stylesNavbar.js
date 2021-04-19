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

  base: {
    background: "linear-gradient(45deg, #eeeeee, 30%, #9e9e9e 90%)",
    color: "black",
  },
  cadete: {
    background: "linear-gradient(-60deg, #3f51b5 30%, #21CBF3 90%)",
    color: "white",
  },

  admin: {
    background: "linear-gradient(45deg, #fdd04c 30%, #FF8E53 90%)",
    color: "white",
  },
  cadeteria: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
}));

export default useStyles;
