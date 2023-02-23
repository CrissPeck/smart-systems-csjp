import React from "react";
import AppBar from "../components/AppBar";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";


function QuienesSomosPage() {
  return (
    <div>
      <AppBar></AppBar>
      <Grid
        className="agg"
        item
        container
        xs={12}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          marginLeft={8}
          marginRight={8}
          textAlign="justify"
          variant="h5"
          color="White"
        >
          ¿Quienes somos?
        </Typography>
      </Grid>
      <Grid item container xs={12} justifyContent="center" alignItems="center">
        <Typography
          marginLeft={2}
          marginRight={2}
          textAlign="justify"
          variant="h8"
          color="black"
        >
          Bienvenido a nuestra página de instalación de GPS para automóviles y
          motocicletas, donde ofrecemos una amplia variedad de opciones para
          ayudarle a agregar capacidades de navegación a su vehículo. En nuestra
          página, encontrará información detallada sobre nuestros productos y
          servicios de instalación de GPS, así como herramientas útiles para
          ayudarle a elegir la mejor opción para sus necesidades.
          <br />
          <br />
          Ofrecemos sistemas de navegación GPS para automóviles y motocicletas
          de marcas líderes en el mercado, con características avanzadas como
          posicion en tiempo real, historial de recorrido entre otras mas
          funciones. Nuestros servicios de instalación son llevados a cabo por
          técnicos capacitados y experimentados, que aseguran que su GPS esté
          funcionando correctamente en poco tiempo. También ofrecemos soporte
          post-venta para resolver cualquier problema que pueda surgir después
          de la instalación.
          <br />
          <br />
          Además, en nuestra página encontrará recursos útiles para ayudarle a
          sacar el máximo provecho de su GPS. En resumen, si está buscando
          agregar capacidades de navegación a su vehículo o motocicleta, nuestra
          página de instalación de GPS para automóviles es el lugar ideal para
          encontrar todo lo que necesita, estamos seguros de que encontrará lo
          que necesita para satisfacer sus necesidades de navegación.
        </Typography>
      </Grid>
    </div>
  );
}

export default QuienesSomosPage;
