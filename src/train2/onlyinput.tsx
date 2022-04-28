import React, {ChangeEvent} from 'react';

type InputPropsType ={
    setAuto:(auto:string)=>void
    auto:string
    model:string
    setModel:(model:string)=>void
    setError:(obj:string)=>void
}

export const OnlyInput = (props:InputPropsType) => {

    const changeInputHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        props.setAuto(event.currentTarget.value)
            props.setError('')
    }
    const changeInputHandlerTwo=(event:ChangeEvent<HTMLInputElement>)=>{
        props.setModel(event.currentTarget.value)
        props.setError('')
    }
    return (
        <div>
            <input placeholder='name' value={props.auto} onChange={changeInputHandler}/>
           <div>
               <input placeholder='model' value={props.model} onChange={changeInputHandlerTwo}/>
           </div>
            </div>
    );
};

