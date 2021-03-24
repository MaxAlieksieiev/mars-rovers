import React, {useState} from "react";
import style from "./index.module.css";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";

const FormLogin = ({setIsAuthenticated}) => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const login = (event) => {
        const rootEmail = "root@gmail.com";
        const rootPassword = "123456";

        if (email === rootEmail && password === rootPassword) {
            event.preventDefault();
            setIsAuthenticated(true);
            history.push("/welcome");
        } else {
            setError(true);
        }
    };

    return (
        <div className={style.form}>
            <form className={style.form__inner}>
                <label className={style.label}>Email:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} className={style.input} required />
                <label className={style.label}>Password:</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} className={style.input} required />
                <button type="submit" className={style.button} onClick={e => login(e)}>
                    Login
                </button>
                {error && (
                    <div className={style.errors}>
                        <span className={style.text_error}>User not found.</span>
                    </div>
                )}
            </form>
        </div>
    );
};
FormLogin.propTypes = {
    setIsAuthenticated: PropTypes.func,
};

export default FormLogin;
