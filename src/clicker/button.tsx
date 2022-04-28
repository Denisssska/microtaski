import React from 'react';
import c from './clicker.module.css'

type ButtonType = {
    name: string
    callBack: () => void
    click: number
}
export const Button: React.FC<ButtonType> = ({click, name, callBack}) => {
    return (
        <span>
            <button disabled={click === 0 && name === 'remove' || click === 5 && name === 'add'}
                    className={name === 'add' ? c.button1 : c.button2}

                    onClick={callBack}>{name}</button>
        </span>
    );
};

