import React, {useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import FormLogin from "./components/login";
import Game from "./components/game";
import GuardedRoute from './components/guardedRoute'
import WelcomePage from "./components/back";

function App() {
    const[ isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <FormLogin setIsAuthenticated={setIsAuthenticated} />
                </Route>
                <GuardedRoute path="/welcome" component={WelcomePage} auth={isAuthenticated}/>
                <GuardedRoute path="/game" component={Game} auth={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
