import React from 'react';
import style from '../dualClicker/DualClicker.module.css'

type ButtonType = {
    name: string
    callBack: () => void
    click?: number
    checkNumberMax?: number
    checkNumberStart?:number
    error?:boolean
}
export const Button: React.FC<ButtonType> = ({error, checkNumberStart,checkNumberMax, click, name, callBack}) => {
    return (
        <div>

            {/* eslint-disable-next-line no-mixed-operators */}
            <button disabled={error  ||  name === 'sent' && checkNumberStart === 0 && checkNumberMax === 0 ||
                // eslint-disable-next-line no-mixed-operators
                click === 0 && name === 'remove' || click === checkNumberMax && name === 'add'}
                    className={name === 'add' ? style.button1 : style.button2}
                    onClick={callBack}>{name}</button>
        </div>
    );
};

