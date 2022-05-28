import React from 'react';
import style from "./DualClicker.module.css"
import {Input} from "../clicker/correctionClicker/input";
import {Button} from "../clicker/button";

type CorrectValueType = {
    changeError:(value:boolean)=>void
    error: boolean
    checkNumberOne: (value:number) => void
    checkNumberTwo: (value:number) => void
    checkNumberMax: number
    sentCheckNumber: (checkNumberStart:number) => void
    checkNumberStart: number
}
export const CorrectValue: React.FC<CorrectValueType> = ({
                                                             checkNumberStart,
                                                             changeError, error,
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
                        <Input changeError={(value)=>changeError(value)} error={error}
                               value={checkNumberMax}
                               checkNumberOne={(value) => checkNumberOne(value)}/>
                    </div>
                    <div><span className={style.text}>start value:</span>
                        <Input value={checkNumberStart}
                               changeError={(value)=>changeError(value)} error={error}
                               checkNumberTwo={(value) => checkNumberTwo(value)}/>
                    </div>
                </div>
                <div className={style.counterButton}>
                    <Button error={error}
                            checkNumberMax={checkNumberMax}
                            checkNumberStart={checkNumberStart}
                            callBack={()=>sentCheckNumber(checkNumberStart)} name='setV'/>
                </div>

            </div>
        </div>
    );
};

