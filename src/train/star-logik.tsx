import React from 'react';
import c from "./star.module.css";

type StarType={
    selected:boolean
    setValue:(id:number)=>void
    id:string

}
export const StarLogik:React.FC<StarType> = ({selected,setValue,id}) => {

    const boldFun =()=>{
        if(id === '1'){
            setValue(1)
        }
        if(id === '2'){
            setValue(2)
        }
        if(id === '3'){
            setValue(3)
        }
        if(id === '4'){
            setValue(4)
        }
        if(id === '5'){
            setValue(5)
        }
    }
    return(
            (selected ? <span className={c.star + ' ' + c.blue} onClick={boldFun}>star</span> : <span
            className={c.star} onClick={boldFun}>star</span>)
    )
};
