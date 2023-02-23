import React from "react";
import { Grid } from "@mui/material";
import { Link } from "@mui/material";
import logo from "./../../optimizadas_tamaño_original/vehi2.png";
import logom from "./../../optimizadas_tamaño_original/vehi.png";

function Vehiculos() {
  return (
    <div>
      <div>
        <Grid
          item
          container
          xs={12}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item container justify="center" alignItems="center">
            <div class="card">
              <div class="header">
                <div class="img-box">
                  <img loading="lazy" src={logo} alt="" width="150" />
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="rgba(66,193,110,1)"
                    d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
                  ></path>
                </div>
                <h1 class="title">Vehiculos</h1>
              </div>

              <div class="content">
                <p>
                  Equipo para todo tipo de vehiculo sin importar su tamaño.
                  <br />
                  $60 (Unico Pago)
                </p>
                <Link
                  class="btn-link"
                  href="https://wa.me/50582013323? text=Hola, buen dia me interesa el servicio de gps para autos"
                  aria-label="menu"
                >
                  Solicitar{" "}
                </Link>
              </div>
            </div>

            <div class="card">
              <div class="header">
                <div class="img-box">
                  <img loading="lazy"  src={logom} alt="" width="150" />
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="rgba(66,193,110,1)"
                    d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
                  ></path>
                </div>
                <h1 class="title">Motocicletas</h1>
              </div>

              <div class="content">
                <p>
                  Equipo para todo tipo de motocicleta sin importar su tamaño.
                  <br />
                  $60 (Unico Pago)
                </p>
                <Link
                  class="btn-link"
                  href="https://wa.me/50582013323? text=Hola, buen dia me interesa el servicio de gps para motocicletas"
                  aria-label="menu"
                >
                  Solicitar
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Vehiculos;
