import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux'
import Chats from './chats';
import { Home } from './home';
import { Profile } from './profile';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Link to="/chats">Chats</Link>
            <Switch>
                <Route path="/" exact>
                    <Home />                    
                </Route>
                <Route path="/chats/:chatId?" >
                    <Chats />
                </Route>
                <Route path="/profile">
                    <Provider store={store}>
                        <Profile />
                    </Provider>    
                </Route> 
                <Route>
                    <h4>404</h4>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

