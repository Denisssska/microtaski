import React from 'react';
import c from "./OnOff.module.css";

type ButtonType={
    name:string
    callBack:()=>void
    on:boolean
}
export const OnOffButt:React.FC<ButtonType> = ({on,name,callBack}) => {
    return (
        <div>
            <button className={on && name==='on'?c.green:c.red} onClick={callBack}>{name}</button>
        </div>
    );
};

