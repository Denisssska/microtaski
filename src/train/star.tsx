import React, {useState} from 'react';
import c from './star.module.css'
import {StarLogik} from "./star-logik";

export const Star = () => {
    let [value,setValue]=useState<number>(  0  )

    return(
        <div className={c.rating}>
            <StarLogik selected={value >= 1} id='1' setValue={setValue}/>
            <StarLogik selected={value >= 2} id='2' setValue={setValue}/>
            <StarLogik selected={value >= 3} id='3' setValue={setValue}/>
            <StarLogik selected={value >= 4} id='4' setValue={setValue}/>
            <StarLogik selected={value >= 5} id='5' setValue={setValue}/>
        </div>

)

};



