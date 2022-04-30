import React from 'react';
import {Button} from "../clicker/button";
import style from './DualClicker.module.css'

type RealizationCountType = {
    click: number
    error: boolean
    addHandler: () => void
    checkNumberMax: number
    removeHandler: () => void
    sentCheckNumber: () => void
}
export const RealizationCount: React.FC<RealizationCountType> = ({
                                                                     click, error, sentCheckNumber,
                                                                     addHandler,
                                                                     checkNumberMax, removeHandler
                                                                 }) => {

    let clickError = 'Err';
    let addNumb = 'Enter please';
    return (

        <div className={style.head}>
            <div
                className={click === checkNumberMax ? style.countRed : style.count}>{error ? clickError : checkNumberMax === 0 ? addNumb : click}
            </div>
            <div className={style.buttons}>
                <Button error={error}
                        click={click} name='add'
                        callBack={addHandler}
                        checkNumberMax={checkNumberMax}
                />
                <Button error={error}
                        click={click} name='remove'
                        callBack={removeHandler}
                        checkNumberMax={checkNumberMax}

                />
                <Button error={error}
                        checkNumberMax={checkNumberMax}
                        callBack={sentCheckNumber}
                        name='setC'
                />
            </div>

        </div>

    );
};

