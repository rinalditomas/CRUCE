import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import useStyles from "../utils/stylesFooter";
import Copyright from "../utils/Copyright";

export default function Error() {
  const classes = useStyles();

  return <div className={classes.root}>No autorizado</div>;
}
