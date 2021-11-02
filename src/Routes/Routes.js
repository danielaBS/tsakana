import React from 'react';
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
 
//import components
import Header from '../Templates/Header';

import Login from '../Components/Login/Login';
import Main from '../Components/Main/Main';

function Routes({component: Component, ...restOfProps }) {       

    return (        
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header/>
            <Route>
                {// Switch view when changing url
                }
                <Switch>
                    <Route exact path="/" component={Main}/>          
                    <Route  path={process.env.PUBLIC_URL+ "/main"} component={Main}/> 
                    <Route path= {process.env.PUBLIC_URL +"/login"}component={Login}/>                          
                </Switch>
            </Route>   
        </BrowserRouter>     
    );
}
export default Routes;
