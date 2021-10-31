import './Footer.css';
import React from 'react';

//import iconsLibrary and each icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

import { faShoppingBag, faUserAlt, faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

import logo1 from '../assets/cardLogos/cc-visa-brands.svg';
import logo2 from '../assets/cardLogos/cc-mastercard-brands.svg';
import logo3 from '../assets/cardLogos/cc-amex-brands.svg';
import logo4 from '../assets/cardLogos/cc-diners-club-brands.svg';
import logo5 from '../assets/cardLogos/pse.png';
import logo6 from '../assets/cardLogos/epayco.png';

class Footer extends React.Component {
    render() {
        return(
            <>
            <div class="container">
                <div>
                    <div class="info">
                        <div>
                            <label>EMPRESA</label>
                            <span>Información legal</span>
                            <span>Política de privacidad</span>
                            <span>Política de devoluciones</span>
                        </div>
                        <div>
                            <label>AYUDA Y APOYO</label>
                            <a href = "mailto: correoelectronico@hotmail.com">correoelectronico@hotmail.com</a>
                            <span>Solicitudes</span>
                        </div>
                        <div>
                            <label>SOY ADMIN</label>
                            <a href="/login">Iniciar sesión</a>                        
                        </div>
                    </div>    
                </div>           
                <div class="subscribe">
                </div>
                <div class="bottom">
                    <span style={{marginLeft:'3.5rem'}}>Copyright © 2021 Tsakana. Todos los derechos reservados.</span>
                    <div class="cards">
                        <strong>ACEPTAMOS</strong>
                        <div class="cardLogos">
                            <img src={logo1}></img>
                            <img src={logo2}></img>
                            <img src={logo3}></img>
                            <img src={logo4}></img>
                            <img style={{width: '70px'}}src={logo5}></img>
                            <img style={{width: '50px'}}src={logo6}></img>
                        </div>
                    </div>
                </div>
            </div>            
            </>
        )
    }
}

export default Footer;