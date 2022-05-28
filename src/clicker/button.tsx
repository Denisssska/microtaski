import React from 'react';
import style from '../dualClicker/DualClicker.module.css'

type ButtonType = {
    name: string
    callBack: () => void
    click?: number
    checkNumberMax?: number
    error?: boolean
    checkNumberStart?: number
    info?:boolean
}
export const Button: React.FC<ButtonType> = ({info,
                                                 error, checkNumberMax,
                                                 click, name, callBack
                                             }) => {

    return (
        <div>

            <button disabled={(error && name === 'setV')|| (info && name === 'add')||(info && name === 'remove')||
                (click === checkNumberMax && name === 'add')}

                    className={name === 'add' ? style.button1 : style.button2}
                    onClick={callBack}>{name}</button>
        </div>
    );
};

