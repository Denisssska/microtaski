import React from 'react';

// export const Fun = () => {
//     // const OnclickFun = (name:string) => {
//     //     console.log(name)
//     // }
//     // const OnclickFun2 = (name:number) => {
//     //     console.log(typeof name)
//     // }
//     // let OnclickFun3 = () => {
//     //     console.log(100200)
//     // }
//     // return(
//     //     <>
//     //     <button onClick={(_) => OnclickFun('Den')}> My name1</button>
//     //     <button onClick={() =>OnclickFun('Stas')}> My name2</button>
//     //     <button onClick={() =>OnclickFun2(100200)}>1</button>
//     //     <button onClick={OnclickFun3}>2</button>
//     //     </>
//     // )
// }
type ButtonNamePropsType = {
    name: string
    callback: () => void
}
export const Button = (props: ButtonNamePropsType) => {
    const OnclickHandler = () => {
        props.callback()

    }
    return (
        <button onClick={OnclickHandler}>{props.name}</button>


    )
}