import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import adminMenuStyles from "../utils/adminStyles";


export default function adminPanel() {

  const classes = adminMenuStyles();


  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item xs={12}>
                  <Link
                    to="/admin/uploadorders"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Button variant="contained" color="primary">
                      Cargar Ordenes
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link
                    to="/admin/listCadeterias"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Button variant="contained" color="primary">
                      Cadeteria
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link
                    to="/admin/listCadetes"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Button variant="contained" color="primary">
                      Cadete
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link
                    to="/admin/cadeteriaRequest"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Button variant="contained" color="primary">
                      Solicitudes
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link
                    to="/admin/orders"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Button variant="contained" color="primary">
                      Metricas
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}
