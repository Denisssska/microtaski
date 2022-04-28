import React from 'react';
import './App.module.css';
import {Trep} from "./trepachev";
import c from './App.module.css'
import {Massive} from "./train2/massive";
import {Star} from "./train/star";
import {Clicker} from "./clicker/clicker";
import {Board} from "./chess/board";
import {OnOff} from "./onOffButton/OnOff";
import {Buble} from "./buble/Buble";

function App() {

    return (
        <div className={c.header}>
            <Trep/>
            <div><Massive/></div>
           <div>
               <Star/>
               <Clicker/>
               <OnOff/>
               <Buble/>
           </div>
            <Board />
        </div>
    );
}

export default App;
