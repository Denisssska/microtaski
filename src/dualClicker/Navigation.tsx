import React from 'react';
import {NavLink} from "react-router-dom";
import {Button} from "../clicker/button";

type NavigationType = {

    name: string
    error?: boolean
    checkNumberStart?: number
    checkNumberMax?: number
    sentCheckNumber: () => void
}
export const Navigation: React.FC<NavigationType> = ({
                                                         name,
                                                         sentCheckNumber,
                                                         checkNumberMax,
                                                         checkNumberStart,
                                                         error
                                                     }) => {
    return (
        <nav>
            {name=== 'setV'?<NavLink to='/RealizationCount'>
                <Button  name={name}
                        callBack={sentCheckNumber}
                        error={error}
                        checkNumberStart={checkNumberStart}
                        checkNumberMax={checkNumberMax}
                />

            </NavLink>:
            <NavLink to='/CorrectValue'>
                <Button name={name}
                        callBack={sentCheckNumber}
                        error={error}
                        checkNumberStart={checkNumberStart}
                        checkNumberMax={checkNumberMax}
                />
            </NavLink>}
        </nav>
    );
};

