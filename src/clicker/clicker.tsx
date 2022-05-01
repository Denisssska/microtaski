import React, {ChangeEvent, useEffect, useState} from 'react';
import {CorrectValue} from "../dualClicker/CorrectValue";
import {Count} from "./Count";


export const Clicker = () => {
    let [checkNumberMax, setCheckNumberMax] = useState<number>(0)
    let [checkNumberStart, setCheckNumberStart] = useState<number>(0)
    let [error, setError] = useState(false)
    let[info,setInfo]=useState(true)

    useEffect(()=>{
        let lastStartNumber = localStorage.getItem('start')
        if (lastStartNumber)
            setCheckNumberStart(JSON.parse(lastStartNumber))
    },[])
    useEffect(()=>{
        let lastMaxNumber = localStorage.getItem('Max')
        if (lastMaxNumber)
            setCheckNumberMax(JSON.parse(lastMaxNumber))
    },[])


    const checkNumberOne = (event: ChangeEvent<HTMLInputElement>) => {
        setCheckNumberMax(+event.currentTarget.value)
        setInfo(true)
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
            setInfo(false)
            setClick(checkNumberStart)
            localStorage.setItem('start', JSON.stringify(checkNumberStart))
            localStorage.setItem('Max', JSON.stringify(checkNumberMax))
        }
    }
    return (
        <div>
            <Count
                info={info}
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

