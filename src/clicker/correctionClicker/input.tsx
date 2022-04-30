import React, {ChangeEvent} from 'react';
import style from '../.././dualClicker/DualClicker.module.css'

type InputType = {
    checkNumberOne?: (event: ChangeEvent<HTMLInputElement>) => void
    checkNumberTwo?: (event: ChangeEvent<HTMLInputElement>) => void
    error?: boolean
    setError: (value: boolean) => void
    value: number
}
export const Input: React.FC<InputType> = ({value, setError, error, checkNumberOne, checkNumberTwo}) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {

        if (checkNumberOne) {
            checkNumberOne(event)
            setError(false)
        }
        if (checkNumberTwo) {
            checkNumberTwo(event)
            setError(false)
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

