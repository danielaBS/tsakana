import React from 'react';
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
 
//import components
import Login from '../Components/Login/Login';
import Main from '../Components/Main/Main';

function Routes({component: Component, ...restOfProps }) {       

    return (        
        <BrowserRouter> 
            <Route>
                {// Switch view when changing url
                }
                <Switch>
                    <Route exact path="/" component={Main}/>          
                    <Route path="/main" component={Main}/> 
                    <Route path="/login" component={Login}/>                          
                </Switch>
            </Route>            
        </BrowserRouter>     
    );
}
export default Routes;