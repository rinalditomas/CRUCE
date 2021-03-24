import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  margin: {
   /*  display: 'flex', */
    margin: theme.spacing(1),
    padding: "20px",
   /*  justifyContent: 'space-between' */

  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },

  buttonspace:{
    padding: "10px"
  }

}));
  
  export default useStyles;