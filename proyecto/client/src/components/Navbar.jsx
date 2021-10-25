import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

  
import Inicio from './Inicio';
import Login from './Login';

//Administracion
import Modulo from './routes/administracion/modulo/Modulo';
import Empresa from './routes/administracion/empresa/Empresa';
import Usuario from './routes/administracion/usuario/Usuario';
import ModuloEmpresa from './routes/administracion/moduloEmpresa/ModuloEmpresa';
import UsuarioEmpresa from './routes/administracion/usuarioEmpresa/UsuarioEmpresa';

//Gestion Personas
import Afp from './routes/gestionPersona/afp/Afp';
import Salud from './routes/gestionPersona/salud/Salud';
import TipoContrato from './routes/gestionPersona/tipoContrato/TipoContrato';
import Personal from './routes/gestionPersona/personal/Personal';


const Navbar = () => {
    return ( 
        <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-dar">
        <div className="container-fluid">
            <button className="btn btn-none" >
            <Link to="/" className="navbar-brand">
                RH Cloud
            </Link>
            </button>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button className="btn btn-none dropdown-toggle"   data-bs-toggle="dropdown" aria-expanded="false">
                  Administracion
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li>
                        <button className="dropdown-item">
                            <NavLink to="/modulo" className="nav-link active" activeClassName="active">
                                Módulos
                            </NavLink>
                        </button>
                    </li>
                    <li>
                        <button className="dropdown-item" >
                            <NavLink to="/empresa" className="nav-link active" activeClassName="active">
                                Empresa
                            </NavLink>
                        </button>
                    </li>
                    <li>
                        <button className="dropdown-item" >
                            <NavLink to="/usuario" className="nav-link active" activeClassName="active">
                                Usuario
                            </NavLink>
                        </button>
                    </li>
                    <li>
                        <button className="dropdown-item" >
                            <NavLink to="/moduloempresa" className="nav-link active" activeClassName="active">
                                Modulo por Empresa
                            </NavLink>
                        </button>
                    </li>
                    <li>
                        <button className="dropdown-item" >
                            <NavLink to="/usuarioempresa" className="nav-link active" activeClassName="active">
                                Usuarios por Empresa
                            </NavLink>
                        </button>
                    </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <button className="btn btn-none dropdown-toggle"   data-bs-toggle="dropdown" aria-expanded="false">
                  Gestión Personas
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li>
                        <button className="dropdown-item">
                            <NavLink to="/afp" className="nav-link active" activeClassName="active">
                                AFP
                            </NavLink>
                        </button>
                    </li>
                    <li>
                        <button className="dropdown-item" >
                            <NavLink to="/salud" className="nav-link active" activeClassName="active">
                                Salud
                            </NavLink>
                        </button>
                    </li>
                    <li>
                        <button className="dropdown-item" >
                            <NavLink to="/tipocontrato" className="nav-link active" activeClassName="active">
                                Tipo Contato
                            </NavLink>
                        </button>
                    </li>
                    <li>
                        <button className="dropdown-item" >
                            <NavLink to="/personal" className="nav-link active" activeClassName="active">
                                Trabajadores
                            </NavLink>
                        </button>
                    </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

        <Switch>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/modulo">
                <Modulo/>
            </Route>
            <Route path="/empresa">
                <Empresa/>
            </Route>
            <Route path="/usuario">
                <Usuario/>
            </Route>
            <Route path="/moduloempresa">
                <ModuloEmpresa/>
            </Route>
            <Route path="/usuarioempresa">
                <UsuarioEmpresa/>
            </Route>
            <Route path="/afp">
                <Afp/>
            </Route>
            <Route path="/salud">
                <Salud/>
            </Route>
            <Route path="/tipocontrato">
                <TipoContrato/>
            </Route>
            <Route path="/personal">
                <Personal/>
            </Route>
            <Route path="/">
                <Inicio/>
            </Route>
        </Switch>
      </Router>
    );
}

export default Navbar
