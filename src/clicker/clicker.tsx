import React, {ChangeEvent, useState} from 'react';
import c from './clicker.module.css'
import {Button} from "./button";
import {Input} from "./correctionClicker/input";


export const Clicker = () => {
    let [checkNumberMax, setCheckNumberMax] = useState<number>(0)
    let [checkNumberStart, setCheckNumberStart] = useState<number>(0)
    let [error, setError] = useState(false)
    const checkNumberOne = (event: ChangeEvent<HTMLInputElement>) => {
        setCheckNumberMax(+event.currentTarget.value)
    }
    const checkNumberTwo = (event: ChangeEvent<HTMLInputElement>) => {
        setCheckNumberStart(+event.currentTarget.value)
    }

    let [click, setClick] = useState(0)
    const addHandler = () => {
        setClick(++click)
    }
    const removeHandler = () => {
        setClick(0)
    }
    const sentCheckNumber = () => {
        if (checkNumberStart >= checkNumberMax) {
            setError(true)
            return
        }
        setClick(checkNumberStart)

    }
    let clickError = 'Err';
    let addNumb = 'press';
    return (
        <div className={c.global}>
            <div className={c.head}>
                <div
                    className={click === checkNumberMax ? c.countRed : c.count}>{error ? clickError : checkNumberMax === 0 ? addNumb : click}</div>
                <div className={c.buttons}>
                    <Button error={error}
                            click={click} name='add'
                            callBack={addHandler}
                            checkNumberStart={checkNumberStart}
                            checkNumberMax={checkNumberMax}
                    />
                    <Button error={error}
                            click={click} name='remove'
                            callBack={removeHandler}
                            checkNumberMax={checkNumberMax}
                            checkNumberStart={checkNumberStart}
                    />
                </div>

            </div>

            <div className={c.counterValue}>
                <div className={c.counterInput}>
                    <div>
                        <span className={c.text}>max value:</span>
                        <Input setError={setError} error={error}
                               checkNumberOne={(event) => checkNumberOne(event)}/>
                    </div>
                    <div><span className={c.text}>start value:</span>
                        <Input setError={setError} error={error}
                               checkNumberTwo={(event) => checkNumberTwo(event)}/>
                    </div>
                </div>
                <div className={c.counterButton}>
                    <Button error={error} name='sent'
                            checkNumberMax={checkNumberMax}
                            checkNumberStart={checkNumberStart}
                            callBack={sentCheckNumber}/>
                </div>

            </div>

        </div>

    );
};

