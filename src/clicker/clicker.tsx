import React, {ChangeEvent, useEffect, useState} from 'react';
import {CorrectValue} from "../dualClicker/CorrectValue";
import {Count} from "./Count";


export const Clicker = () => {
    let [checkNumberMax, setCheckNumberMax] = useState<number>(0)
    let [checkNumberStart, setCheckNumberStart] = useState<number>(0)
    let [error, setError] = useState(false)

    useEffect(()=>{
        localStorage.setItem('start', JSON.stringify(checkNumberStart))
    },[checkNumberStart])

    useEffect(()=>{
        localStorage.setItem('Max', JSON.stringify(checkNumberMax))
    },[checkNumberMax])

    useEffect(()=>{
        let lastStartNumber = localStorage.getItem('start')
        if (lastStartNumber)
            setClick(JSON.parse(lastStartNumber))
    },[])
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
        let lastStartNumber = localStorage.getItem('start')
        if (lastStartNumber)
            setClick(JSON.parse(lastStartNumber))
    }
    const sentCheckNumber = () => {
        if (checkNumberStart >= checkNumberMax) {
            setError(true)

        } else {
            setClick(checkNumberStart)
        }
    }
    return (
        <div>
            <Count
                addHandler={addHandler}
                checkNumberMax={checkNumberMax}
                click={click} error={error}
                removeHandler={removeHandler}/>

            <CorrectValue
                checkNumberStart={checkNumberStart}
                setError={setError} error={error}
                checkNumberOne={checkNumberOne}
                checkNumberTwo={checkNumberTwo}
                checkNumberMax={checkNumberMax}
                sentCheckNumber={sentCheckNumber}/>
        </div>
    );
};

