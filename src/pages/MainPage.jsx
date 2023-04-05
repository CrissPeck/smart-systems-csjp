import React from "react";
import AppBar from "../components/AppBar";
import Card from "../components/Card";
import Beneficios from "../components/Beneficios/Beneficios";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Vehiculos from "../components/Vehiculos/Vehiculos";
import AppEnd from "../components/AppEnd";
import Buttonfloat from "../components/buttonfloat/buttonfloat";

function MainPage() {
  return (
    <div>
      <AppBar/>
      <Card/>
      <Vehiculos/>
      <div className="font">
        <Grid
          item
          container
          xs={12}
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Typography marginLeft={1} variant="h6" color="white">
              Beneficios
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Beneficios/>
      <div className="font">
        <Grid
          item
          container
          xs={12}
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Typography marginLeft={1} variant="h6" color="white">
              Acceder a nuestro sistema
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid
          item
          container
          xs={12}
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            marginLeft={1}
            marginRight={1}
            textAlign="justify"
            variant="h8"
            color="black"
          >
            Nuestro sistema en línea es una herramienta fácil de usar y
            conveniente que le permite acceder a su cuenta y administrar sus
            servicios de instalación de GPS desde cualquier lugar y en cualquier
            momento. Además, nuestro sistema en línea es seguro y confiable, lo
            que significa que sus datos personales están protegidos. Con un
            proceso de inicio de sesión fácil y seguro, puede estar seguro de
            que solo usted puede acceder a su cuenta.
            <br />
            En nuestra página de inicio de sesión, encontrará instrucciones
            detalladas sobre cómo iniciar sesión en su cuenta en línea. También
            proporcionamos soporte al cliente en línea, por lo que si tiene
            alguna pregunta o necesita ayuda con su cuenta, estamos aquí para
            ayudarle.
            <br />
            En resumen, nuestro sistema en línea es una herramienta poderosa que
            hace que la administración de su servicio de instalación de GPS para
            carros sea más fácil y conveniente que nunca. ¡Regístrese hoy para
            comenzar a disfrutar de los beneficios de Smart Systems!
          </Typography>
        </Grid>
      </div>
      <AppEnd/>
      <Buttonfloat/>

    </div>
  );
}

export default MainPage;
