import './Main.css';
import React from 'react';
import Footer from '../../Templates/Footer';

import carrusel1 from '../../assets/carrusel1.png';
import carrusel2 from '../../assets/carrusel2.png';
import carrusel3 from '../../assets/carrusel3.png';
import img1 from '../../assets/carruselProducts/img (1).jpg';
import img2 from '../../assets/carruselProducts/img (2).jpg';
import img3 from '../../assets/carruselProducts/img (3).jpg';
import img4 from '../../assets/carruselProducts/img (4).jpg';
import img5 from '../../assets/carruselProducts/img (5).jpg';
import img6 from '../../assets/carruselProducts/img (6).jpg';
import img7 from '../../assets/carruselProducts/img (7).jpg';
import img8 from '../../assets/carruselProducts/img (8).jpg';
import img9 from '../../assets/carruselProducts/img (9).jpg';
import img10 from '../../assets/carruselProducts/img (10).jpg';
import img11 from '../../assets/carruselProducts/img (11).jpg';
import img12 from '../../assets/carruselProducts/img (12).jpg';
import banner from '../../assets/banner.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

let index=0;
let index1=0;
let index2=0;
let index3=0;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };
  }
  
  componentDidMount = e =>  {   
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
            .then(
              (result) => {
                this.setState({
                  isLoaded: true,
                  products: result
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

    if (e) {   
      let carruselImg = document.getElementsByClassName('imgCrrusel');
      let productCard = document.getElementsByClassName('productCard');
      let mockProdCard = document.getElementsByClassName('mockProdCard');
      let productCard3 = document.getElementsByClassName('productCard3');

      for (var i=0; i<carruselImg.length; i++) {
        carruselImg[i].className= "imgCrrusel";
      }    
      for(var i=0; i<productCard.length; i++) {
        productCard[i].className="productCard";
      }
      for(var i=0; i<mockProdCard.length; i++) {
        mockProdCard[i].className="mockProdCard";
      }
      for(var i=0; i<productCard3.length; i++) {
        productCard3[i].className="productCard3";
      }

      if(e.target.className === "left1") {
        index1+=-4;
        if (index1<0){
          index1= 8;
        }
      }
      else if(e.target.className === "right1") {
        index1+=4;
        if (index1>11){
          index1= 0;
        }
      }
      if(e.target.className === "left2") {
        index2+=-5;
        if (index2<0){
          index2= 15;
        }
      }
      else if(e.target.className === "right2") {
        index2+=5;
        if (index2>19){
          index2= 0;
        }
      }
      if(e.target.className === "left3") {
        index3+=-4;
        if (index3<0){
          index3= 4;
        }
      }
      else if(e.target.className === "right3") {
        index3+=4;
        if (index3>7){
          index3= 0;
        }
      }
      
      if(e.target.id === "left") {
        index+=-1;
        if (index<0){
          index= 2;
        }       
      } else if(e.target.id === "right") {
        index++;
        if (index>2){
          index= 0;
        }
      }
      carruselImg[index].className +=" active";
      for (var j=index1; j<index1+4; j++) {                         
        productCard[j].className+=" active1"
      }
      for (var j=index2; j<index2+5; j++) {     
        mockProdCard[j].className+=" active1"
      }
      for (var j=index3; j<index3+4; j++) {                         
        productCard3[j].className+=" active1"
      }

    }    
  }

  render () {
    const { error, isLoaded, products } = this.state;

    return (
      <>
        <div class="main-content">
          <div class="carrusel">
            <img class="imgCrrusel active" src ={carrusel1} width="100%"></img>
            <img class="imgCrrusel" src ={carrusel2} width="100%"></img>
            <img class="imgCrrusel" src ={carrusel3} width="100%"></img>
            <div class="arrows">
              <div id="left" onClick={e=>this.componentDidMount(e)}><FontAwesomeIcon id="left" className="icons" icon={faChevronLeft} size="1x" color="dimgray"/></div>
              <div class="carruselLabel">Summer Outlet</div>
              <div id="right" onClick={e=>this.componentDidMount(e)}><FontAwesomeIcon id="right" className="icons" icon={faChevronRight} size="1x" color="dimgray"/></div>
            </div>
          </div>
          <div class="sectionTitle">
            <span style={{marginRight:'1.2rem'}}>NOVEDADES DIARIAS</span>
            <div class="linebreak"></div>
          </div>
          <div class="section1">        
            <div class="arrows">
              <div class="left1" onClick={e=>this.componentDidMount(e)}><FontAwesomeIcon class="left1 icons" icon={faChevronLeft} size="1x" color="dimgray"/></div>
              <div class="right1" onClick={e=>this.componentDidMount(e)}><FontAwesomeIcon class="right1 icons" icon={faChevronRight} size="1x" color="dimgray"/></div>
            </div>    
            <div class="productCard active1">
              <img class="fill" src={img1} alt="productImg"/>
              <div class="cardFooter">
                <span>Camisa de rayas blanco y negro</span>
                <strong>$27.900</strong>
              </div>
            </div>
            <div class="productCard active1">
              <img class="fill" src={img2} alt="productImg"/>
              <div class="cardFooter">
                <span>Camisa de rayas blanco y negro</span>
                <strong>$27.900</strong>
              </div>
            </div>  
            <div class="productCard active1">
              <img class="fill" src={img4} alt="productImg"/>
              <div class="cardFooter">
                <span>Camisa de rayas blanco y negro</span>
                <strong>$27.900</strong>
              </div>
            </div>  
            <div class="productCard active1">
              <img class="fill" src={img7} alt="productImg"/>
              <div class="cardFooter">
                <span>Camisa de rayas blanco y negro</span>
                <strong>$27.900</strong>
              </div>
            </div>  
            <div class="productCard">
              <img class="fill" src={img12} alt="productImg"/>
              <div class="cardFooter">
                <span>Camisa de rayas blanco y negro</span>
                <strong>$27.900</strong>
              </div>
            </div>   
            <div class="productCard">
              <img class="fill" src={img3} alt="productImg"/>
              <div class="cardFooter">
                <span>Camisa de rayas blanco y negro</span>
                <strong>$27.900</strong>
              </div>
            </div>                                                   
            <div class="productCard">
              <img class="fill" src={img9} alt="productImg"/>
              <div class="cardFooter">
                <span>Camisa de rayas blanco y negro</span>
                <strong>$27.900</strong>
              </div>
            </div>   
            <div class="productCard">
              <img class="fill" src={img5} alt="productImg"/>
              <div class="cardFooter">
                <span>Camisa de rayas blanco y negro</span>
                <strong>$27.900</strong>
              </div>
            </div> 
            <div class="productCard">
              <img class="fill" src={img6} alt="productImg"/>
              <div class="cardFooter">
                <span>Camisa de rayas blanco y negro</span>
                <strong>$27.900</strong>
              </div>
            </div>   
            <div class="productCard">
              <img class="fill" src={img8} alt="productImg"/>
              <div class="cardFooter">
                <span>Camisa de rayas blanco y negro</span>
                <strong>$27.900</strong>
              </div>
            </div>                                                   
            <div class="productCard">
              <img class="fill" src={img10} alt="productImg"/>
              <div class="cardFooter">
                <span>Camisa de rayas blanco y negro</span>
                <strong>$27.900</strong>
              </div>
            </div>   
            <div class="productCard">
              <img class="fill" src={img11} alt="productImg"/>
              <div class="cardFooter">
                <span>Camisa de rayas blanco y negro</span>
                <strong>$27.900</strong>
              </div>
            </div>
          </div>
          <div class="sectionTitle">
            <span style={{marginRight:'1.2rem'}}>NUEVA COLECCIÓN</span>
            <div class="linebreak"></div>
          </div>
          <div class="section2">        
            <div class="arrows">
              <div class="left2" onClick={e=>this.componentDidMount(e)}><FontAwesomeIcon className="left2 icons" icon={faChevronLeft} size="1x" color="dimgray"/></div>
              <div class="right2" onClick={e=>this.componentDidMount(e)}><FontAwesomeIcon className="right2 icons" icon={faChevronRight} size="1x" color="dimgray"/></div>
            </div>    
              {
                !error && isLoaded? (
                  products.map((item, index) => {
                    return <div class="mockProdCard active1">
                      <img src={item.image} class="contain" alt="productImg"/>
                      <div class="cardFooter">
                        <strike style={{color:'lightgrey', fontSize:'12px'}}>${item.price}</strike>                      
                        <strong>{(Number(item.price)*0.4).toFixed(1)} <span style={{color: 'red'}}>60% OFF</span></strong> 
                        <span style={{height:'20px', overflow:'hidden'}}>{item.title}</span>
                        <span style={{color:'red', fontSize: '12px'}}>Envío Gratis</span>
                      </div>
                    </div>

                  })

                ) :(
                  <span>Cargando..</span>
                )              
              }              
          </div>
          <div class="banner">
            <img src={banner}></img>
          </div>
          <div class="section3">        
            <div class="arrows">
              <div class="left3" onClick={e=>this.componentDidMount(e)}><FontAwesomeIcon class="left1 icons" icon={faChevronLeft} size="1x" color="dimgray"/></div>
              <div class="right3" onClick={e=>this.componentDidMount(e)}><FontAwesomeIcon class="right1 icons" icon={faChevronRight} size="1x" color="dimgray"/></div>
            </div>    
            <div class="productCard3 active1">
              <img class="fill" src={img1} alt="productImg"/>
              <div class="overlay">
                <span>CAMISAS</span>
                <a href="">Ver más</a>
              </div>
            </div>
            <div class="productCard3 active1">
              <img class="fill" src={img2} alt="productImg"/>
              <div class="overlay">
                <span>JEANS</span>
                <a href="">Ver más</a>
              </div>
            </div>  
            <div class="productCard3 active1">
              <img class="fill" src={img4} alt="productImg"/>
              <div class="overlay">
                <span>ZAPATOS</span>
                <a href="">Ver más</a>
              </div>
            </div>  
            <div class="productCard3 active1">
              <img class="fill" src={img7} alt="productImg"/>
              <div class="overlay">
                <span>VESTIDOS</span>
                <a href="">Ver más</a>
              </div>
            </div>  
            <div class="productCard3">
              <img class="fill" src={img5} alt="productImg"/>
              <div class="overlay">
                <span>CAMISAS</span>
                <a href="">Ver más</a>
              </div>
            </div>
            <div class="productCard3">
              <img class="fill" src={img11} alt="productImg"/>
              <div class="overlay">
                <span>JEANS</span>
                <a href="">Ver más</a>
              </div>
            </div>  
            <div class="productCard3">
              <img class="fill" src={img12} alt="productImg"/>
              <div class="overlay">
                <span>ZAPATOS</span>
                <a href="">Ver más</a>
              </div>
            </div>  
            <div class="productCard3">
              <img class="fill" src={img8} alt="productImg"/>
              <div class="overlay">
                <span>VESTIDOS</span>
                <a href="">Ver más</a>
              </div>
            </div>            
          </div>
        </div>
        <Footer/>
      </>
  
    );

  }
  
}

export default Main;

