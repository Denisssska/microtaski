import React, {ChangeEvent} from 'react';
import style from "./DualClicker.module.css"
import {Input} from "../clicker/correctionClicker/input";
import {Button} from "../clicker/button";

type CorrectValueType = {
    setError: (value: boolean) => void
    error: boolean
    checkNumberOne: (event: ChangeEvent<HTMLInputElement>) => void
    checkNumberTwo: (event: ChangeEvent<HTMLInputElement>) => void
    checkNumberMax: number
    sentCheckNumber: () => void
    checkNumberStart: number
}
export const CorrectValue: React.FC<CorrectValueType> = ({
                                                             checkNumberStart,
                                                             setError, error,
                                                             checkNumberOne, checkNumberTwo,
                                                             checkNumberMax,
                                                             sentCheckNumber
                                                         }) => {
    return (
        <div>
            <div className={style.counterValue}>
                <div className={style.counterInput}>
                    <div>
                        <span className={style.text}>max value:</span>
                        <Input setError={setError} error={error}
                               value={checkNumberMax}
                               checkNumberOne={(event) => checkNumberOne(event)}/>
                    </div>
                    <div><span className={style.text}>start value:</span>
                        <Input value={checkNumberStart}
                               setError={setError} error={error}
                               checkNumberTwo={(event) => checkNumberTwo(event)}/>
                    </div>
                </div>
                <div className={style.counterButton}>
                    <Button error={error}
                            checkNumberMax={checkNumberMax}
                            callBack={sentCheckNumber} name='setV'/>
                </div>

            </div>
        </div>
    );
};

