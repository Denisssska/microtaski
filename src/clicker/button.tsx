import React from 'react';
import style from '../dualClicker/DualClicker.module.css'

type ButtonType = {
    name: string
    callBack: () => void
    click?: number
    checkNumberMax?: number
    error?: boolean
    checkNumberStart?: number
}
export const Button: React.FC<ButtonType> = ({
                                                 error, checkNumberMax,
                                                 click, name, callBack
                                             }) => {
    return (
        <div>

            {/* eslint-disable-next-line no-mixed-operators */}
            <button disabled={error && name === 'setV' ||
                // eslint-disable-next-line no-mixed-operators
                click === 0 && name === 'remove' || click === checkNumberMax && name === 'add'}
                    className={name === 'add' ? style.button1 : style.button2}
                    onClick={callBack}>{name}</button>
        </div>
    );
};

