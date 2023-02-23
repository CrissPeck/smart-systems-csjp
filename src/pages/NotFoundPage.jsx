import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Grid container direction="column" justifyContent="center" className="full">
      <div className="nofount">
        <Grid
          item
          container
          xs={12}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <br />
            <div class="loader">
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
            </div>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography variant="h4" color="inherit">
              404 | La página no existe
            </Typography>
            <Link
              color="inherit"
              aria-label="menu"
              component={RouterLink}
              to="/"
            >
              Volver al inicio
            </Link>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default NotFoundPage;
