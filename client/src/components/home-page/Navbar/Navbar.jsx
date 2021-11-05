/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Logo from '../assets/img/buffet-buffet-law.png'
import ButtonsNav from '../../ButtonsNav/ButtonsNav';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import './Navbar.css'
import { getAuth, signOut } from '@firebase/auth';
import { getUsuario } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
const Navbar = ({ navId }) => {

    let usuario = useSelector(state => state.usuario);
    const dispatch = useDispatch();
    const auth = getAuth();
    const history = useHistory();


    const logout = () => {
        signOut(auth).then(() => {
            dispatch(getUsuario({}));
            history.push('/');
            toast.info('La sesión fue finalizada')
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <nav id={navId} className="col-md-12">
            <ul className="widht_li border-bottom">
                <li className="col-md-1">
                <ButtonsNav link="/" text='Home' />
                </li>

                <li className="col-md-1">
                    <ButtonsNav link="#" text='Nosotros' />
                </li>

                <img
                    src={Logo}
                    alt="Logo"
                    className="col-md-1"
                />

                <li className="col-md-1">
                    {/* <a className="textDecoration" href="#contain_title_abogado">Nuestro Equipo</a> */}                    
                    <ButtonsNav link="/abogados" text='Nuestro Equipo' />
                </li>

                {usuario.firstName ?
                    <li>
                        {(!usuario.abogadoId && !usuario.dataValues) &&
                            <div class="dropdown">
                                <a class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {usuario.firstName}
                                </a>



                            <ul class="dropdown-menu bg-light shadow border-0" aria-labelledby="dropdownMenuButton1">
                            <ButtonsNav link={'/cita'} text='Consulta' />
                                <span onClick={logout} class="dropdown-item pointer">Cerrar sesión</span>
                            </ul>

                            </div>
                        }

                        {(usuario?.abogadoId || usuario?.dataValues?.abogado?.id) &&
                            <div class="dropdown">
                                <a class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {usuario.firstName}
                                </a>

                                <ul class="dropdown-menu bg-light shadow border-0" aria-labelledby="dropdownMenuButton1">
                                    {/* { <ul class="dropdown-menu bg-light shadow border-0" aria-labelledby="dropdownMenuButton1"> */}
                                    {/* <span class="dropdown-item pointer" href="#">Panel</span> */}
                                    <Link to="/user/abogado">
                                        <span class="dropdown-item pointer" >Panel</span>
                                    </Link>
                                    <Link to="/modificar-perfil">
                                        <span class="dropdown-item pointer" >Perfil</span>
                                    </Link>

                                    <span onClick={logout} class="dropdown-item pointer">Cerrar sesión</span>
                                </ul>

                            </div>
                        }
                    </li>
                    :
                    <li className="col-md-1">
                        {/* <Link to="/signup"> */}
                        <ButtonsNav link={'/signup'} text='Registrate Ahora' />
                        {/* Registrate Ahora */}
                        {/* </Link> */}
                    </li>
                }
            </ul>
        </nav>
    )
}

export default Navbar;
