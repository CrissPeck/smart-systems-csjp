import React from "react";
import WelcomeScreen from "../components/WelcomeScreen/WelcomeScreen";
import { Grid } from "@mui/material";
import { Link } from "@mui/material";
import { Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import logopng from "./../optimizadas_tamaño_original/pngsmart.png";

const WelcomePage = () => {
  return (
    <WelcomeScreen>
      <Grid
        container
        direction="column"
        justifyContent="center"
        className="full"
      >
        <div className="highlight">
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <img alt="" src={logopng} width="80" />
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Typography variant="h4" color="inherit">
                Smart Systems
              </Typography>
              <Link
                color="inherit"
                aria-label="menu"
                component={RouterLink}
                to="/main"
              >
                Entrar
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </WelcomeScreen>
  );
};

export default WelcomePage;
