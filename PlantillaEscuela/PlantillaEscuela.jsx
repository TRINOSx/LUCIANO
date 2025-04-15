import React from "react";
import { ArrowsArrowDown1 } from "../../icons/ArrowsArrowDown1";
import { ArrowsArrowDown1_2 } from "../../icons/ArrowsArrowDown1_2";
import "./style.css";

export const PlantillaEscuela = () => {
  return (
    <div className="plantilla-escuela">
      <div className="group-wrapper-3">
        <div className="group-7">
          <div className="aceptar-modificar-wrapper">
            <div className="aceptar-modificar">
              <div className="text-wrapper-23">Crear proyecto</div>

              <div className="info">
                <div className="name">
                  <img
                    className="rectangle-7"
                    alt="Rectangle"
                    src="/img/rectangle-3.svg"
                  />

                  <div className="name-2">Titulo</div>
                </div>

                <div className="email">
                  <img
                    className="rectangle-copy"
                    alt="Rectangle copy"
                    src="/img/rectangle-3-copy.svg"
                  />

                  <div className="email-2">Resumen</div>
                </div>

                <div className="university">
                  <img
                    className="rectangle-copy-2"
                    alt="Rectangle copy"
                    src="/img/rectangle-3-copy-2.svg"
                  />

                  <div className="education">
                    Categoría
                    <br />
                    de apoyo
                  </div>
                </div>
              </div>

              <div className="overlap-10">
                <div className="name-wrapper">
                  <div className="name-3">
                    <img
                      className="rectangle-8"
                      alt="Rectangle"
                      src="/img/rectangle-3-1.svg"
                    />

                    <div className="name-4">Meta</div>
                  </div>
                </div>

                <ArrowsArrowDown1 className="arrows-arrow-down" />
                <ArrowsArrowDown1_2 className="arrows-arrow-down-1-2" />
              </div>

              <div className="info-2">
                <div className="name-5">
                  <div className="overlap-group-6">
                    <img
                      className="rectangle-9"
                      alt="Rectangle"
                      src="/img/rectangle-3-2.svg"
                    />

                    <div className="name-6">Cupo max.</div>
                  </div>
                </div>

                <div className="email-3">
                  <img
                    className="rectangle-copy-3"
                    alt="Rectangle copy"
                    src="/img/rectangle-3-copy-1.svg"
                  />

                  <div className="email-4">
                    Fecha
                    <br />
                    Inicio
                  </div>
                </div>

                <div className="email-5">
                  <div className="overlap-11">
                    <img
                      className="rectangle-copy-4"
                      alt="Rectangle copy"
                      src="/img/rectangle-3-copy-3.svg"
                    />

                    <div className="email-6">
                      Fecha
                      <br />
                      Fin
                    </div>
                  </div>
                </div>

                <div className="university-2">
                  <div className="education-wrapper">
                    <div className="education-2">Publica</div>
                  </div>

                  <div className="education-3">Visibilidad</div>
                </div>
              </div>

              <div className="overlap-12">
                <div className="text-wrapper-24">Guardar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
