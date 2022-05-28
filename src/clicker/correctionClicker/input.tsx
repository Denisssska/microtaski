import React, {ChangeEvent} from 'react';
import style from '../.././dualClicker/DualClicker.module.css'

type InputType = {
    checkNumberOne?: (value:number) => void
    checkNumberTwo?: (value:number) => void
    error?: boolean
    changeError:(value:boolean)=>void
    value: number
}
export const Input: React.FC<InputType> = ({value, changeError, error, checkNumberOne, checkNumberTwo}) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {

        if (checkNumberOne) {
            checkNumberOne(+event.currentTarget.value)
            changeError(false)
        }
        if (checkNumberTwo) {
            checkNumberTwo(+event.currentTarget.value)
            changeError(false)
        }

    }
    return (
        <span>
            <input className={error ? style.inputRed : style.input}
                   value={value}
                   onChange={onChangeHandler}
                   type='number'
                   placeholder='insert '
                   min='0'
                   max='10'
            />
        </span>
    );
};

