import React from "react";
import {Route, Redirect} from "react-router-dom";
import PropTypes from "prop-types";

const GuardedRoute = ({component: Component, setIsAuthenticated, auth, ...rest}) => (
    <Route
        {...rest}
        render={(props) =>
            auth === true ? <Component {...props} setIsAuthenticated={setIsAuthenticated} /> : <Redirect to="/" />
        }
    />
);

GuardedRoute.propTypes = {
    component: PropTypes.elementType,
    auth: PropTypes.bool,
    setIsAuthenticated: PropTypes.func,
};
export default GuardedRoute;
