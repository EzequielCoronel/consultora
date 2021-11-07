import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { postConsulta } from "../../redux/actions/index";
import Navbar from "../home-page/Navbar/Navbar";
import "./FormCita.css";

export function validate(input) {
  let errors = {};
  if (!input.nombre) {
    errors.nombre = "nombre es requerido";
  } else if (!/\S+\S+/.test(input.nombre)) {
    errors.nombre = "nombre is invalid";
  }

  if (!input.apellido) {
    errors.apellido = "apellido es requerido";
  } else if (!/\S+\S+/.test(input.apellido)) {
    errors.apellido = "apellido is invalid";
  }

  // if (!input.telefono) {
  //   errors.telefono = "Teléfono es requerido";
  // } else if (/\n# $&:\n\t/.test(input.telefono)) {
  //   errors.telefono = "el Teléfono ingresado contiene errores";
  // }

  if (!input.email) {
    errors.email = "email is required";
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = "email is invalid";
  }

  if (!input.mensaje) {
    errors.mensaje = "Se debe escribir la consulta que desea realizar";
  } else if (input.mensaje === "") {
    errors.mensaje = "El texto se encuentra vacio";
  }
  return errors;
}

export default function FormCita() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({});
  const [error, setError] = useState({});

  const handleChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(error).length === 0) {
      dispatch(postConsulta(input));
      alert("consulta enviada con exito");
      setInput(" ");
    } else {
      alert("Hay campos que no se ingresaron correctamente por favor revise");
    }
  };

  return (<>
    
    <Navbar navId={"menu"}/>
    
    <div classnombre="formulario-cita">
      <form onSubmit={handleSubmit} className="form-cita mt-5">
        <label className="form-label">Nombre</label>
        <input className="form-control" name="nombre" type="text" required onChange={handleChange} />

        <label className="form-label">Apellido</label>
        <input className="form-control" name="apellido" type="text" required onChange={handleChange} />

        <label className="form-label">DNI</label>
        <input className="form-control" name="dni" type="number" required onChange={handleChange} />

        <label className="form-label">Teléfono</label>
        <input className="form-control" name="telefono" type="tel" required onChange={handleChange} />

        <label className="form-label">Email</label>
        <input className="form-control" type="email" name="email" required onChange={handleChange} />

        <label className="form-label">Mensaje</label>
        <textarea
          name="mensaje"
          cols="30"
          rows="10"
          required
          onChange={handleChange}
        ></textarea>
        <button className="btn btn-secondary mt-1">Enviar</button>
      </form>
    </div>
  </>);
}
