import React, { Component, Fragment } from "react";
import logo from "./assets/logo.png";

import Navbar from '../components/Navbar';


class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Se requiere Correo");
      return;
    } 
    
    if (!e.target.email.value) {
      alert("Se requier correo Valido");
      return;
    } 
    
    if (!e.target.password.value) {
      alert("Se requiere Contraseña");
      return;
    } 
    
    if (
      e.target.email.value === "correo@rhcloud.cl" &&
      e.target.password.value === "123456"
    ) {
        <Navbar/>
    } else {
      alert("Combinacion de Correo o Contraseña Erronea");
    }
  };

  handleClick = (e) => {
    e.preventDefault();

    alert("A pagina de registro");
  };

  render() {
    return (
        <div className='container mt-5'>
        <form className="form" onSubmit={this.handleSubmit}>
            <div className="container col-3">
                <img src={logo} className="rounded mx-auto d-block" alt="RH Cloud" />

                <div className="mt-4">
                    <label className="form-label">Usuario</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        name="email" 
                        aria-describedby="emailHelp"
                        placeholder="correo@dominio.cl"
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        name="password"
                        placeholder="****"
                    />
                </div>
                <div className="d-flex justify-content-center my-3">
                    <button className="btn btn-primary col-5">Ingresar</button>
                    <button className="btn btn-secondary col-5 ms-5" onClick={this.handleClick}>
                        Recuperar Contraseña
                    </button>
                </div>
                <div className="d-flex justify-content-center">
                </div>
            </div>
        </form>
        </div>
    );
  }
}

export default Login;
