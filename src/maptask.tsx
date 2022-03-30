import React from 'react';

type NewComponentType = {
    arr: Array<NewArrType>
}
type NewArrType = {
    manufacturer: string,
    model: string
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <table>
            <tr>
                <th>Number</th>
                <th>Auto</th>
                <th>Model</th>
            </tr>
            {props.arr.map((item, index) => {

                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.manufacturer}</td>
                            <td>{item.model}</td>
                        </tr>
                    )
                }
            )
            }
        </table>

    )
}