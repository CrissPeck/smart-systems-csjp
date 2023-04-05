import React from "react";

function buttonfloat() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <div class="floating-container">
        <div class="floating-button">+</div>
        <div class="element-container">
          <a href="tel:+50581655166">
            <span class="float-element tooltip-left">
              <i class="material-icons">phone</i>
            </span>
          </a>
          <a href="mailto:smartsystems120304@gmail.com">
          <span class="float-element">
            <i class="material-icons">email</i>
          </span>
          </a>
          <a href="https://wa.me/50582013323">
          <span class="float-element">
            <i class="material-icons">chat</i>
          </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default buttonfloat;
