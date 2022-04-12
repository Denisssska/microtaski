import React, {ChangeEvent} from 'react';
type InputOnlyType={
    setText:(text:string)=>void,
    setTexttwo:(textwo:string)=>void,
    textwo:string,
    text:string
}
export const Inputonly = (props:InputOnlyType) => {

    const onChangeInputHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        props.setText(event.currentTarget.value)
    }
    const onChangeInputHandlerTwo=(event:ChangeEvent<HTMLInputElement>)=>{
        props.setTexttwo(event.currentTarget.value)

    }
    return (
        <div>
            <input value={props.text} onChange={onChangeInputHandler}/>
            <input value={props.textwo} onChange={onChangeInputHandlerTwo}/>
        </div>
    );
};

