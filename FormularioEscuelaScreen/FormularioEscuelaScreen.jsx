import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Icon10 } from "../../icons/Icon10";
import "./style.css";

export const FormularioEscuelaScreen = () => {
  return (
    <div className="formulario-escuela-screen">
      <div className="formulario-escuela-2">
        <div className="group-8">
          <div className="modal-edit-deal-wrapper">
            <div className="modal-edit-deal-2">
              <div className="title-2">
                <div className="text-wrapper-25">DIRECTOR/A</div>

                <Button
                  className="button-5"
                  icon={
                    <Icon10
                      className="vuesax-bold-close-circle"
                      color="#7E92A2"
                    />
                  }
                  style="white"
                  type="icon-only"
                />
              </div>

              <div className="form-edit-deal-form-2">
                <div className="content-SCROLL-2">
                  <div className="overlap-group-7">
                    <div className="form-2">
                      <div className="upload-image-2">
                        <div className="label-4">Datos</div>

                        <div className="div-6">
                          <div className="placeholder-4">
                            Nombre del director
                          </div>
                        </div>
                      </div>

                      <div className="div-6">
                        <div className="placeholder-5">Número de celular</div>
                      </div>

                      <div className="div-6">
                        <div className="placeholder-5">Correo electrónico</div>
                      </div>

                      <Input
                        className="input-3"
                        hasInput={false}
                        label
                        text="Esta próximo a jubilarse? si es asi, cuando?"
                      />
                      <div className="radio-buttons">
                        <div className="radio-button-default" />

                        <div className="text-wrapper-26">SI</div>

                        <div className="text-wrapper-27">No</div>

                        <div className="radio-button">
                          <div className="rectangle-10" />
                        </div>
                      </div>

                      <div className="address-line">
                        <Input
                          className="state-2"
                          divClassName="state-3"
                          label={false}
                          text1="Año"
                          visible={false}
                          visible1={false}
                        />
                      </div>

                      <div className="count">
                        <Input
                          className="room-area"
                          label
                          text="Cuantos años lleva en ese puesto en la escuela?"
                          text1="Años"
                          visible2={false}
                          visible3={false}
                        />
                      </div>

                      <Input
                        className="input-3"
                        hasInput={false}
                        label
                        text="Ha solicitado cambio de escuela?"
                      />
                      <div className="radio-buttons">
                        <div className="radio-button-default" />

                        <div className="text-wrapper-26">SI</div>

                        <div className="text-wrapper-27">No</div>

                        <div className="radio-button">
                          <div className="rectangle-10" />
                        </div>
                      </div>
                    </div>

                    <div className="street">
                      <div className="placeholder-5">Número de celular</div>
                    </div>
                  </div>
                </div>

                <div className="action-3">
                  <div className="progress-4">
                    <div className="text-wrapper-28">
                      Control Administrativo
                    </div>

                    <Input
                      className="progress-5"
                      divClassName="progress-6"
                      label={false}
                      text1="Público"
                      visible={false}
                      visible1={false}
                    />
                  </div>

                  <div className="action-4">
                    <Button
                      className="button-6"
                      style="primary"
                      text="Siguiente"
                      type="default"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
