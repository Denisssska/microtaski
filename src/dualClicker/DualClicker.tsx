import React, {ChangeEvent, useState} from 'react';
import {CorrectValue} from "./CorrectValue";
import {RealizationCount} from "./RealizationCount";

export const DualClicker = () => {
    let [checkNumberMax, setCheckNumberMax] = useState<number>(0)
    let [checkNumberStart, setCheckNumberStart] = useState<number>(0)
    let [error, setError] = useState(false)
    let [nuance, setNuance] = useState(true)
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
        let lastStartNumber = localStorage.getItem('startNumber')
        if (lastStartNumber)
            setClick(JSON.parse(lastStartNumber))
    }
    const sentCheckNumber = () => {
        if (checkNumberStart >= checkNumberMax) {
            setError(true)
            setNuance(!nuance)
        } else {
            setClick(checkNumberStart)
            setNuance(!nuance)
            localStorage.setItem('startNumber', JSON.stringify(checkNumberStart))
            localStorage.setItem('MaxNumber', JSON.stringify(checkNumberMax))
        }
    }


    return (
        <div>
            {nuance && <RealizationCount
                addHandler={addHandler}
                sentCheckNumber={sentCheckNumber}
                checkNumberMax={checkNumberMax}
                click={click} error={error}
                removeHandler={removeHandler}/>}

            {!nuance && <CorrectValue
                checkNumberStart={checkNumberStart}
                setError={setError} error={error}
                checkNumberOne={checkNumberOne}
                checkNumberTwo={checkNumberTwo}
                checkNumberMax={checkNumberMax}
                sentCheckNumber={sentCheckNumber}/>}
        </div>
    );
};

