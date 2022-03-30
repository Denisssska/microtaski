import React from 'react';

type NewArrMoneyType ={
    banknots: string,
    value: number,
    number: string
}
type MoneysPropType = {
    arr: Array<NewArrMoneyType>
}
export const Money = (props: MoneysPropType)=> {
return(
    <div>
    <div>aaa</div>
        {props.arr.map((item) =>{
            return(
                <div>
                    <span>{item.banknots}</span>
                    <span>{item.value}</span>
                    <span>{item.number}</span>
                </div>
            )
        })}
    </div>
)
   }



