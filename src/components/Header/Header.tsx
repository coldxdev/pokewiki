import React from 'react'
import Logo from "../../assets/images/logo.svg";
import "./Header.scss";
import {Link} from "react-router-dom"
import { AppRoutes } from '../../routes';

const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <Link className="logo" to={AppRoutes.HOME}>
          <img src={Logo} alt="Logo" />
      </Link>
      </div>
    </div>
  )
}

export default Header
