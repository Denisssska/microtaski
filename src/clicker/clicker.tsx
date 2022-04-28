import React, {useState} from 'react';
import c from './clicker.module.css'
import {Button} from "./button";

export const Clicker = () => {

    let [click, setClick] = useState(0)


    const addHandler = () => {
        setClick(++click)

    }

    const removeHandler = () => {
        setClick(0)
    }

    return (
        <div className={c.global}>
            <div className={c.head}>
                <div className={click === 5 ? c.countRed : c.count}>{click}</div>
                <Button click={click}  name='add' callBack={addHandler}/>
                <Button click={click}  name='remove' callBack={removeHandler}/>
            </div>
        </div>

    );
};

