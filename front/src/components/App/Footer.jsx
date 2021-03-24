import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import useStyles from "../../utils/stylesFooter";

import Copyright from "../../utils/Copyright";

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            About - Contacto - Direccion - Privacidad - Seguinos en (redes
            sociales aqui)
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
