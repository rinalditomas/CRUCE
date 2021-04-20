import React from "react";
import { CustomButtonB } from "../../utils/Buttons";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import adminMenuStyles from "../../utils/stylesAdmin";

const AdminPanel = () => {
  const classes = adminMenuStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <div className={classes.heroButtons}>
              <Grid container spacing={4} justify="center">
                <Grid item xs={14}>
                  <Link
                    to="/admin/listCadeterias"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <CustomButtonB color="admin" variant="contained">
                      Cadeteria
                    </CustomButtonB>
                  </Link>
                </Grid>
                <Grid item xs={15}>
                  <Link
                    to="/admin/listCadetes"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <CustomButtonB color="admin" variant="contained">
                      Cadete
                    </CustomButtonB>
                  </Link>
                </Grid>
                <Grid item xs={16}>
                  <Link
                    to="/admin/metrics"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <CustomButtonB color="admin" variant="contained">
                      Metricas
                    </CustomButtonB>
                  </Link>
                </Grid>
                <Grid item xs={17}>
                  <Link
                    to="/admin/cadeteriaRequest"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <CustomButtonB color="admin" variant="contained">
                      Solicitudes
                    </CustomButtonB>
                  </Link>
                </Grid>
                <Grid item xs={18}>
                  <Link
                    to="/admin/uploadorders"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <CustomButtonB color="admin" variant="contained">
                      Cargar Ordenes
                    </CustomButtonB>
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

export default AdminPanel;
