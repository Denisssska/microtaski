import React from 'react';
import {CorrectValue} from "./CorrectValue";
import {RealizationCount} from "./RealizationCount";
import {Count} from "../clicker/Count";
import {useDispatch, useSelector} from "react-redux";
import {StateAppCountType} from "../countReducers/reduxStore";
import {
    addClickHandlerAC, changeErrorAC,
    checkNumberOneAC,
    checkNumberTwoAC,
    InitialCountStateType, removeHandlerAC, sentCheckNumberAC
} from "../countReducers/countReducer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navigation} from "./Navigation";

export const DualClicker = () => {
    const countState = useSelector<StateAppCountType>(state => state.count) as InitialCountStateType
    const dispatch = useDispatch()

    const checkNumberOne = (value: number) => {
        dispatch(checkNumberOneAC(value))
    }
    const checkNumberTwo = (value: number) => {
        dispatch(checkNumberTwoAC(value))
    }
    const addHandler = () => {
        dispatch(addClickHandlerAC())
    }
    const removeHandler = () => {
        dispatch(removeHandlerAC())
    }
    const sentCheckNumber = () => {
        dispatch(sentCheckNumberAC())
    }
    const changeError = (value: boolean) => {
        dispatch(changeErrorAC(value))
    }
    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path={'/first/*'} element={<div>
                    {countState.nuance && <RealizationCount
                        addHandler={addHandler}
                        sentCheckNumber={sentCheckNumber}
                        checkNumberMax={countState.checkNumberMax}
                        click={countState.click} error={countState.error}
                        removeHandler={removeHandler}/>}

                    {!countState.nuance && <CorrectValue
                        checkNumberStart={countState.checkNumberStart}
                        changeError={(value) => changeError(value)} error={countState.error}
                        checkNumberOne={checkNumberOne}
                        checkNumberTwo={checkNumberTwo}
                        checkNumberMax={countState.checkNumberMax}
                        sentCheckNumber={sentCheckNumber}/>}
                </div>
                }/>
                <Route path={'/second/*'} element={<div>
                        <Count
                            info={countState.nuance}
                            addHandler={addHandler}
                            checkNumberMax={countState.checkNumberMax}
                            click={countState.click} error={countState.error}
                            removeHandler={removeHandler}/>

                        <CorrectValue
                            checkNumberStart={countState.checkNumberStart}
                            changeError={(value) => changeError(value)} error={countState.error}
                            checkNumberOne={checkNumberOne}
                            checkNumberTwo={checkNumberTwo}
                            checkNumberMax={countState.checkNumberMax}
                            sentCheckNumber={sentCheckNumber}/>
                    </div>
                }/>
            </Routes>
        </BrowserRouter>
    );
};

