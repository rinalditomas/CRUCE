import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import adminMenuStyles from "../utils/adminStyles";


const CadeteriaPanel = () => {

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
                    to="/cadeteria/listOrders"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Button variant="contained" color="primary">
                      Ordenes
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link
                    to="/cadeteria/listCadetes"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Button variant="contained" color="primary">
                     Cadetes
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link
                    to="/cadeteria/perfil"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Button variant="contained" color="primary">
                      Perfil
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link
                    to="/cadeteria/solicitudes"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Button variant="contained" color="primary">
                      Solicitudes pendientes
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link
                    to="/cadeteria/metricas"
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
};

export default CadeteriaPanel;
