import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav id="menu">
        <div class="barra">
          <input type="checkbox" />
          <label>
            <i aria-hidden="true" class="fa fa-bars" />
          </label>
          <ul class="principal">
            <li>
              <Link to='/'>Inicio</Link>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Registro</a>
            </li>
            <li>
              <a href="/about">Sobre nosotros</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
          <div class="iconos">
            <a href="#">
              <i aria-hidden="true" class="fa fa-twitter" />
            </a>
            <a href="#">
              <i aria-hidden="true" class="fa fa-facebook" />
            </a>
            <a href="#">
              <i aria-hidden="true" class="fa fa-instagram" />
            </a>
            <a href="#">
              <i aria-hidden="true" class="fa fa-pinterest-p" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
