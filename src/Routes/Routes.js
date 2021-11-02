import React from 'react';
import { HashRouter, Route, Redirect, Switch} from 'react-router-dom';
 
//import components
import Header from '../Templates/Header';

import Login from '../Components/Login/Login';
import Main from '../Components/Main/Main';

function Routes({component: Component, ...restOfProps }) {       

    return (        
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Header/>
            <Route>
                {// Switch view when changing url
                }
                <Switch>
                    <Route exact path="/" component={Main}/>          
                    <Route exact path="/main" component={Main}/> 
                    <Route exact path="/login" component={Login}/>                          
                </Switch>
            </Route>   
        </HashRouter>     
    );
}
export default Routes;
