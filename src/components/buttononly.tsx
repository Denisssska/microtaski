import React from 'react';
type OnliButtonPropsType={
    name:string,
    callback:()=>void
}
export const Buttononly = (props:OnliButtonPropsType) => {

    const onlyButtonFunc =()=>{
       props.callback()
    }

    return (
        <div>
<button onClick={onlyButtonFunc}>{props.name}</button>
        </div>
    );
};

