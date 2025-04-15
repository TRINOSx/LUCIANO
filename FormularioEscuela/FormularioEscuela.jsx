import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Icon10 } from "../../icons/Icon10";
import { Icon11 } from "../../icons/Icon11";
import "./style.css";

export const FormularioEscuela = () => {
  return (
    <div className="formulario-escuela">
      <div className="group-wrapper-2">
        <div className="registrarse-wrapper">
          <div className="registrarse">
            <div className="modal-edit-deal">
              <div className="title">
                <div className="text-wrapper-21">ESCUELA</div>

                <Button
                  className="button-instance"
                  icon={<Icon10 className="icon-10" color="#7E92A2" />}
                  style="white"
                  type="icon-only"
                />
              </div>

              <div className="form-edit-deal-form">
                <div className="content-SCROLL">
                  <div className="form">
                    <div className="upload-image">
                      <div className="label-3">Nombre de la escuela</div>

                      <div className="div-4">
                        <div className="placeholder-2">Nombre</div>
                      </div>
                    </div>

                    <div className="div-4">
                      <div className="placeholder-3">Sector Escolar</div>
                    </div>

                    <Input
                      className="input-instance"
                      hasInput={false}
                      label
                      text="Dirección"
                    />
                    <div className="div-4">
                      <div className="placeholder-3">Calle y número</div>
                    </div>

                    <div className="div-5">
                      <Input
                        className="design-component-instance-node"
                        label={false}
                        text1="Colonia"
                        visible={false}
                        visible1={false}
                      />
                      <Input
                        className="state"
                        divClassName="input-2"
                        label={false}
                        text1="Municipio"
                        visible={false}
                        visible1={false}
                      />
                      <Input
                        className="zip-code"
                        divClassName="input-2"
                        label={false}
                        text1="CP"
                        visible={false}
                        visible1={false}
                      />
                    </div>

                    <div className="div-5">
                      <Input
                        className="design-component-instance-node"
                        label
                        text="Clave (CCT)"
                        text1="Clave"
                        visible2={false}
                        visible3={false}
                      />
                      <Input
                        className="design-component-instance-node"
                        label
                        text="Nivel educativo"
                        text1="Nivel"
                        visible2={false}
                        visible3={false}
                      />
                    </div>

                    <Input
                      className="input-instance"
                      icon={<Icon11 className="icon-11" />}
                      label
                      text="Modalidad"
                      text1="Modalidad"
                      visible2={false}
                    />
                    <Input
                      className="input-instance"
                      icon={<Icon11 className="icon-11" />}
                      label
                      text="Sostenimiento"
                      text1="Sostenimiento"
                      visible2={false}
                    />
                  </div>
                </div>

                <div className="action">
                  <div className="progress">
                    <div className="text-wrapper-22">
                      Control Administrativo
                    </div>

                    <Input
                      className="progress-2"
                      divClassName="progress-3"
                      label={false}
                      text1="Público"
                      visible={false}
                      visible1={false}
                    />
                  </div>

                  <div className="action-2">
                    <Button
                      className="button-4"
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
