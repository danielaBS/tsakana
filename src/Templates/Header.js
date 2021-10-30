import './Header.css';
import logo from '../assets/logo.svg';
import React from 'react';

//import iconsLibrary and each icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

import { faSearch, faShoppingBag, faUserAlt, faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
  //Array to store data from fakestoreapi.com
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  handleClick = e => {            
  }

  componentDidMount = e =>  {   
    //fetch mock data
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(
              (result) => {
                this.setState({
                  isLoaded: true,
                  items: result
                });
              },
              // Nota: es importante manejar errores aquí y no en 
              // un bloque catch() para que no interceptemos errores
              // de errores reales en los componentes.
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )

    let link = document.getElementsByClassName('after');
    let dropbtn = document.getElementsByClassName('dropdown-content');

    //Add and remove class active both to links in header and to dropdown-contents from categories

    for (var i=0; i<dropbtn.length; i++) {
      dropbtn[i].className= "dropdown-content";
    }    
    if (e) {
      if (e.target.nodeName === "SPAN") {
        for (var i=0; i<link.length;i ++){
          link[i].className = "after"
        }
        e.target.parentNode.getElementsByClassName("after")[0].className+=" show"
      } else if (e.target.nodeName === "BUTTON") {
        e.target.parentNode.getElementsByClassName("dropdown-content")[0].className+=" show"
      }
    }   
     
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  // Close dropdown content when clicked outside
  handleClickOutside(event) {
    let dropbtn = document.getElementsByClassName('dropdown-content');
    if (event.target.className!=="dropbtn") {
      for (var i=0; i<dropbtn.length; i++) {
        dropbtn[i].className= "dropdown-content";
      } 
    }
  }
  
  render () {           
    const { error, isLoaded, items } = this.state;
     return (
      <> 
        <div className ="navbar">
          <div className="brandCategories">
            <div className="brand" style={{marginRight: ' 3rem'}}>
              <img src={logo} className="cover" width="160px"></img>
            </div>
            <div className ="links">
              <div>
                <span onClick={e => this.componentDidMount(e)}>MUJER</span>
                <div className="after"></div>
              </div>
              <div className="separator"></div>

              <div>
                <span onClick={e => this.componentDidMount(e)}>HOMBRE</span>
                <div className="after"></div>
              </div>
              <div className="separator"></div>
              <div>
                <span onClick={e => this.componentDidMount(e)}>NIÑAS</span>
                <div className="after"></div>
              </div>                  
            </div>
          </div>        
          <div className="searchBar">
            <input type="text" placeholder="BUSCAR"/>
            <FontAwesomeIcon className="icons" icon={faSearch} size="lg" color="gray"/>
          </div>
          <div className="icons">
            <div style={{display:'flex'}}>
              <FontAwesomeIcon className="icons" icon={faShoppingBag} size="lg" color="gray"/>
              <div className="dot">0</div>
            </div>          
            <FontAwesomeIcon className="icons" icon={faUserAlt} size="lg" color="gray"/>
          </div>
        </div>
        <div className="categories">
          <div class="dropdown">
            <button onClick={e => this.componentDidMount(e)} class="dropbtn">NUEVO</button>
            <FontAwesomeIcon className="iconsDropdown" icon={faSortDown} size="sm" color="gray"/>
            <div id="myDropdown" class="dropdown-content">
              {
                //render mock data from fakestoreapi
                !error && isLoaded? (                  
                  items.map((item, index) => {
                    return <a>{item}</a>
                  })
                ) : (
                  <span>Cargando..</span>
                )                                                               
              }                            
            </div>
          </div>
          <div class="dropdown">
            <button onClick={e => this.componentDidMount(e)} class="dropbtn">JEANS</button>
            <FontAwesomeIcon className="iconsDropdown" icon={faSortDown} size="sm" color="gray"/>
            <div id="myDropdown" class="dropdown-content">
              <a href="#home">TIRO ALTO</a>
              <a href="#about">SKINNY</a>
              <a href="#contact">BOTA ANCHA</a>
            </div>
          </div>
          <div class="dropdown">
            <button onClick={e => this.componentDidMount(e)} class="dropbtn">ROPA</button>
            <FontAwesomeIcon className="iconsDropdown" icon={faSortDown} size="sm" color="gray"/>
            <div id="myDropdown" class="dropdown-content">
              <a href="#home">CAMISAS</a>
              <a href="#about">CAMISETAS</a>
              <a href="#contact">BLUSAS</a>
            </div>
          </div>
          <div class="dropdown">
            <button onClick={e => this.componentDidMount(e)} class="dropbtn">ZAPATOS</button>
            <FontAwesomeIcon className="iconsDropdown" icon={faSortDown} size="sm" color="gray"/>
            <div id="myDropdown" class="dropdown-content">
              <a href="#home">BOTAS</a>
              <a href="#about">SANDALIAS</a>
              <a href="#contact">TENIS</a>
            </div>
          </div>
          <div class="dropdown">
            <button onClick={e => this.componentDidMount(e)} class="dropbtn">VESTIDOS</button>
            <FontAwesomeIcon className="iconsDropdown" icon={faSortDown} size="sm" color="gray"/>
            <div id="myDropdown" class="dropdown-content">
              <a href="#home">CORTOS</a>
              <a href="#about">LARGOS</a>
              <a href="#contact">ENTERIZOS</a>
            </div>
          </div>          
          {
            //render mock data from fakestoreapi
            !error && isLoaded? (
              items.map((item, index) => {
                return <div class="category"><span>{item.toUpperCase()}</span></div>
              })
            ) : (
              <span>Cargando..</span>
            )                                                               
          }          
          <div class="category" style={{backgroundColor:'peachpuff'}}>
            <span>DESCUENTOS</span>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
