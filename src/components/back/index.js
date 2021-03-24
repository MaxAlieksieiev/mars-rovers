import React from "react";
import style from "./index.module.css";
import {useHistory} from "react-router-dom";
import ButtonBase from "../buttons/BaseButton";

const WelcomePage = () => {
    const history = useHistory();

    const moveToGame = () => {
        history.push("/game");
    };

    return (
        <div className={style.page}>
            <div className={style.page__inner}>
                <span className={style.title}>Welcome user!</span>
                <div className={style.buttons}>
                    <ButtonBase title="Game" clickAction={moveToGame} />
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
