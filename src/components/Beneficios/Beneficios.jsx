import React from "react";
import { Grid } from "@mui/material";
import billete from "./../../optimizadas_tamaño_original/billete-de-banco.png"
import map from "./../../optimizadas_tamaño_original/map.png"
import tiempo from "./../../optimizadas_tamaño_original/tiempo.png"
import com from "./../../optimizadas_tamaño_original/com.png"
import Ca from "./../../optimizadas_tamaño_original/Ca.png"
import am from "./../../optimizadas_tamaño_original/aplicacion-movil.png"
import geo from "./../../optimizadas_tamaño_original/geolocalizacion.png"
import veloc from "./../../optimizadas_tamaño_original/velocimetro.png"


function Beneficios() {
  return (
    <div>
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
            <div class="bene">
              <div class="cab">
                <div class="img-b">
                  <img loading="lazy"  src={billete} alt="" width="80" />
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="rgba(66,193,110,1)"
                    d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
                  ></path>
                </div>
              </div>

              <div class="content">
                <p>
                  Pago Unico
                </p>
              </div>
            </div>
            <div class="bene">
              <div class="cab">
                <div class="img-b">
                  <img loading="lazy" src={map} alt="" width="80" />
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="rgba(66,193,110,1)"
                    d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
                  ></path>
                </div>
              </div>

              <div class="content">
                <p>
                Posición de Vehículo en tiempo real
                </p>
              </div>
            </div>
            <div class="bene">
              <div class="cab">
                <div class="img-b">
                  <img loading="lazy" src={com} alt="" width="80" />
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="rgba(66,193,110,1)"
                    d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
                  ></path>
                </div>
              </div>

              <div class="content">
                <p>
                Monitoreo desde computadora o Teléfono
                </p>
              </div>
            </div>
            <div class="bene">
              <div class="cab">
                <div class="img-b">
                  <img loading="lazy" src={tiempo} alt="" width="80" />
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="rgba(66,193,110,1)"
                    d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
                  ></path>
                </div>
              </div>

              <div class="content">
                <p>
                Reporte completo de Historial de recorrido
                </p>
              </div>
            </div>
            <div class="bene">
              <div class="cab">
                <div class="img-b">
                  <img loading="lazy" src={Ca} alt="" width="80" />
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="rgba(66,193,110,1)"
                    d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
                  ></path>
                </div>
              </div>

              <div class="content">
                <p>
                Cobertura nacional y Centro Americana
                </p>
              </div>
            </div>
            <div class="bene">
              <div class="cab">
                <div class="img-b">
                  <img loading="lazy" src={am} alt="" width="80" />
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="rgba(66,193,110,1)"
                    d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
                  ></path>
                </div>
              </div>
              <div class="content">
                <p>
                Bloque preventivo del Vehículo
                </p>
              </div>
            </div>
            <div class="bene">
              <div class="cab">
                <div class="img-b">
                  <img loading="lazy" src={geo} alt="" width="80" />
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="rgba(66,193,110,1)"
                    d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
                  ></path>
                </div>
              </div>

              <div class="content">
                <p>
                Geolocalización
                </p>
              </div>
            </div>
            <div class="bene">
              <div class="cab">
                <div class="img-b">
                  <img loading="lazy" src={veloc} alt="" width="80" />
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="rgba(66,193,110,1)"
                    d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
                  ></path>
                </div>
              </div>

              <div class="content">
                <p>
                Alerta de Exceso de velocidad
                </p>
              </div>
            </div>

          </Grid>
        </Grid>
      </div>
    </div>

    </div>
  );
}

export default Beneficios;
