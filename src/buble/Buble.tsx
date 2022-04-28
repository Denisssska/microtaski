import React, {useState} from 'react';

import cl from './buble.module.css'

export const Buble = () => {
    let[change,setChange]=useState(false)
    const changed=()=> change? setChange(false):setChange(true)

    return <div className={change?cl.black:cl.blue} onClick={changed}></div>


};

