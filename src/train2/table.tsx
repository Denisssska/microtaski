import React from 'react';
import c from './table.module.css'
type TablePropsType = {
    manufacturer: string
    model: string

}
type CarsPropsType = {
    cars: Array<TablePropsType>
    remFun:(id:number)=>void
}
export const Table = (props: CarsPropsType) => {
    /////////////////////////delete auto
    const removeFunction=(id:number)=>{
        props.remFun(id)
    }

    ////////////////////////
    return (
        <div>
            <table>
                <thead >
                <tr className={c.tr}>
                    <th>numb</th>
                    <th>Butt</th>
                    <th>auto</th>
                    <th>model</th>
                </tr>

                </thead>
                {props.cars.map((item, index) =>
                    <tbody>
                    <tr className={c.tbody}>
                        <td><button className={c.button} onClick={()=>removeFunction(index)}></button></td>
                        <td>{index + 1}</td>
                        <td>{item.manufacturer}</td>
                        <td>{item.model}</td>
                    </tr>

                    </tbody>
                )}
            </table>
        </div>
    );
};

