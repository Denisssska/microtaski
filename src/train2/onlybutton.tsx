import React from 'react';
type ButtonType ={
    callBack:()=>void
    name:string
}

export const Onlybutton = (props:ButtonType) => {
    const addFunction = ()=>{
        props.callBack()
    }

    return (
        <div>
<button onClick={addFunction}>{props.name}</button>
        </div>
    );
};

