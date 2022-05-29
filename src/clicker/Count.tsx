import React from 'react';
import style from '../dualClicker/DualClicker.module.css'
import {Button} from "./button";

type RealizationCountType = {
    click: number
    error: boolean
    addHandler: () => void
    checkNumberMax: number
    removeHandler: () => void
    info: boolean
}
export const Count: React.FC<RealizationCountType> = ({
                                                          info,
                                                          click, error,
                                                          addHandler,
                                                          checkNumberMax, removeHandler
                                                      }) => {

    let clickError = 'Err';
    let addNumb = 'Enter please';
    return (
        <div className={style.head}>
            <div
                className={click === checkNumberMax ? style.countRed : style.count}>
                {error ? clickError : info ? addNumb : click}
            </div>
            <div className={style.buttons}>
                <Button error={error} info={info}
                        click={click} name='add'
                        callBack={addHandler}
                        checkNumberMax={checkNumberMax}
                />
                <Button error={error} info={info}
                        click={click} name='remove'
                        callBack={removeHandler}
                        checkNumberMax={checkNumberMax}

                />
            </div>

        </div>

    );
};

