import './Login.css';
import Footer from '../../Templates/Footer';
import React from 'react';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
                email :'',
                password: '',
                validated: false ,
                buttonDisabled: true,
                 }
  };
  handlesubmit(e){
    e.preventDefault();
  }
  componentDidMount = e =>  {       
    let link = document.getElementsByClassName('linksLogin')[0].getElementsByClassName('after');
    for(var i=0; i<link.length;i++) {
      link[i].className= "after"
    }
    link[0].className+= " show"
  
    if (e) {
      if (e.target.nodeName === "SPAN") {
        for (var i=0; i<link.length;i ++){
          link[i].className = "after"
        }
        e.target.parentNode.getElementsByClassName("after")[0].className+=" show"
      }   
    }        
  }
  validate = (e) => {
    var expression = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);    
    var emailValidated = false;
    var passwordValidated = false;
    if(e.id ==="correo") {
      if (expression.test(e.value) === false) {
        console.log("El correo no es correcto");
        this.setState({ email: e.value })
        return false;
      }
      else {
        this.setState({ email: e.value })
        emailValidated= true;
        console.log("El correo es correcto");
      }
    } else if (e.id="password") { 
      if (e.value.search(/[a-z]/) < 0 || e.value.search(/[A-Z]/) < 0 || e.value.search(/[0-9]/) < 0 ) {
      } else {
        this.setState({password: e.value})
        passwordValidated = true;
      }
    }
    if(this.state.email && this.state.password) {
      console.log("validated")
      this.setState({buttonDisabled: false})
    }
    
  }

  render () {
    return (
      <>
        <div class="container-login">        
          <div class="form">
          <div className ="linksLogin">
                <div>
                  <span onClick={e => this.componentDidMount(e)}>INICIAR SESIÓN</span>
                  <div className="after"></div>
                </div>
                <div>
                  <span onClick={e => this.componentDidMount(e)}>CREAR CUENTA</span>
                  <div className="after"></div>
                </div>
              </div>
            <form submit={e=>this.handlesubmit(e)}>
              <div class="inputs">
                <label>Correo electrónico:</label>
                <input id="correo" type="text" placeholder="Ingrese su correo" onChange={e => this.validate(e.target)}/>
              </div>
              <div class="inputs">
                <label>Contraseña:</label>
                <input id="password" type="password" placeholder="Ingrese su contraseña" onChange={e => this.validate(e.target)}/>
              </div>    
              <div class="inputs">
                <a href="">He olvidado mi contraseña</a>     
                <div>
                  <input type="checkbox"/> Quiero mantener mi sesión iniciada para personalizar mi experiencia de compra.
                </div>
              </div>   
              <input class="btn" type="submit" value="Iniciar sesión" disabled={this.state.buttonDisabled}/>            
            </form>
          </div>
          <Footer/>         
        </div>
  
      </>
    );

  }
  
}

export default Login;
