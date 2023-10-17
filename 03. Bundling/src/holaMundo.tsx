import React from "react";
import classes from "./holaMundoStyles.scss";

console.log(`Api base: ${process.env.API_BASE}`);

interface Props {
    name: string;
}

export const HolaMundo : React.FC = (props: Props) => {

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>
                Hola {props.name}!
            </h1>
        </div>
    );
};