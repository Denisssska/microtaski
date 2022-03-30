import React from 'react';

type MoneyBackPropsType ={
    name:string
    callback: ()=> void
}
export const Moneybackbutton = (props:MoneyBackPropsType) => {
    const OnclickHandler2 = () =>{
        props.callback()
    }

    return(
        <button onClick={OnclickHandler2}>{props.name}</button>
    )
}