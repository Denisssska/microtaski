import React, {useState} from 'react';
import d from './board.module.css'
import {Buble} from "../buble/Buble";

export const Board = () => {

    let [obj, setObj] = useState({
        black: [{id: '1'},
            {id: '3'}, {id: '5'}, {id: '7'},
            {id: '10'}, {id: '12'}, {id: '14'},
            {id: '16'}, {id: '19'}, {id: '21'},
            {id: '23'}, {id: '25'}
        ]
    })
    let a = obj.black.map((item) => item.id)
    return (

        <div className={d.container}>

            <table cellSpacing="0" cellPadding="0" className={d.table}>
                <tr>
                    <td id={'1'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                    <td>
                        <div></div>
                    </td>
                    <td id={'3'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                    <td>
                        <div></div>
                    </td>
                    <td id={'5'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                    <td>
                        <div></div>
                    </td>
                    <td id={'7'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                    <td>
                        <div></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div></div>
                    </td>
                    <td id={'10'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                    <td>
                        <div></div>
                    </td>
                    <td id={'12'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                    <td>
                        <div></div>
                    </td>
                    <td id={'14'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                    <td>
                        <div></div>
                    </td>
                    <td id={'16'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                </tr>
                <tr>
                    <td id={'17'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                    <td>
                        <div></div>
                    </td>
                    <td id={'19'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                    <td>
                        <div></div>
                    </td>
                    <td id={'21'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                    <td>
                        <div></div>
                    </td>
                    <td id={'23'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                    <td>
                        <div></div>
                    </td>
                </tr>
                <tr>
                    <td id={'25'}>
                        <div className={d.member}></div>
                    </td>
                    <td id={'26'}>
                        <div className={d.member}></div>
                    </td>
                    <td id={'27'}>
                        <div className={d.member}></div>
                    </td>
                    <td id={'28'}>
                        <div className={d.member}></div>
                    </td>
                    <td id={'29'}>
                        <div className={d.member}></div>
                    </td>
                    <td id={'30'}>
                        <div className={d.member}></div>
                    </td>
                    <td id={'31'}>
                        <div className={d.member}></div>
                    </td>
                    <td id={'32'}>
                        <div className={d.member}></div>
                    </td>
                </tr>
                <tr>
                    <td id={'33'}>
                        <div className={d.member}></div>
                    </td>
                    <td id={'34'}>
                        <div className={d.member}></div>
                    </td>
                    <td id={'35'}>
                        <div className={d.member}></div>
                    </td>
                    <td id={'36'}>
                        <div className={d.member}></div>
                    </td>
                    <td id={'37'}>
                        <div className={d.member}></div>
                    </td>
                    <td id={'38'}>
                        <div className={d.member}></div>
                    </td>
                    <td id={'39'}>
                        <div className={d.member}></div>
                    </td>
                    <td id={'40'}>
                        <div className={d.member}></div>
                    </td>
                </tr>
                <tr>
                    <td id={'41'}>
                        <div className={d.member}></div>
                    </td>
                    <td id={'42'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                    <td id={'43'}>

                    </td>
                    <td id={'44'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                    <td id={'45'}>

                    </td>
                    <td id={'46'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                    <td id={'47'}>

                    </td>
                    <td id={'48'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                </tr>
                <tr>
                    <td id={'49'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                    <td id={'50'}>

                    </td>
                    <td id={'51'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                    <td id={'52'}>

                    </td>
                    <td id={'53'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                    <td id={'54'}>

                    </td>
                    <td id={'55'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                    <td id={'56'}>

                    </td>
                </tr>
                <tr>
                    <td id={'57'}>

                    </td>
                    <td id={'58'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                    <td id={'59'}>

                    </td>
                    <td id={'60'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                    <td id={'61'}>

                    </td>
                    <td id={'62'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                    <td id={'63'}>

                    </td>
                    <td id={'64'}>
                        <div className={d.member}><Buble/></div>
                    </td>
                </tr>
            </table>
        </div>
    );
};

