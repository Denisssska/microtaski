import React, {useState} from 'react';
import c from './OnOff.module.css'
import {OnOffButt} from "./OnOffButt";

export const OnOff = () => {
    let [on, setOn] = useState(false)
    return (
        <div className={c.container}>
            <OnOffButt name='on' on={on} callBack={() => setOn(true)}/>
            <div className={on ? c.yellow : c.gray}></div>
            <OnOffButt name='off' on={on} callBack={() => setOn(false)}/>

        </div>
    );
};
