import React from 'react'
import { Link } from 'react-router-dom';
import Image_One from '../assets/img/pexels-cytonn-photography-955395.jpg'
import Image_Two from '../assets/img/pexels-pixabay-261679.jpg';
import Image_Three from '../assets/img/pexels-sora-shimazaki-5668481.jpg';
import './Header.css'

const Header = () => {
    return (
        <div className="bg-opacity-100 bg-black">
            <div id="carouselExampleFade" className="opacity-75 carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="height_image carousel-item active">
                        <img src={Image_One} className="d-block w-100" alt="Image_One" />
                        <div className="carousel-caption d-none d-md-block m_top_header caption_one text-white">
                            <h5>Bienvenido a Buffet Law</h5>
                            <p>Tu lugar de Justicia Garantizada</p>
                        </div>
                    </div>
                    <div className="height_image carousel-item">
                        <img src={Image_Two} className=" d-block w-100" alt="Image_Two" />
                        <div className="carousel-caption d-none d-md-block m_top_header caption_two">
                            <h5>¿Quieres una Consulta rápida?</h5>
                            <Link className="btn" to="#">Presiona aquí</Link>
                        </div>
                    </div>
                    <div className="height_image carousel-item">
                        <img src={Image_Three} className=" d-block w-100" alt="Image_Three" />
                        <div className="carousel-caption d-none d-md-block  caption_three">
                            <h5>Nuestro Equipo esta lleno de expertos versatiles para que sean tu</h5>
                            <h5>SOLUCIÓN</h5>
                            <Link className="btn" to="#">Ver el Equipo</Link>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <div className="color_pn">
                        <span className="color_pn carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </div>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <div className="color_pn">
                        <span className="color_pn carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Header;