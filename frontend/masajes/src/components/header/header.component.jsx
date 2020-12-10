import React from 'react';
import {Link} from 'react-router-dom'

import {ReactComponent as Logo} from '../../assets/logo.svg'

import './header.styles.scss'

const Header = (props) => (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='header-options'>
                <Link className='option' to='/clientes'>
                    Clientes
                </Link>
                <Link className='option' to='/citas'>
                    Citas
                </Link>
                <Link className='option' to='/servicios'>
                    Servicios
                </Link>
            </div>


        </div>
    );

export default Header;