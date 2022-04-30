import React from 'react';
import './App.module.css';
import {Trep} from "./trepachev";
import c from './App.module.css'
import {Massive} from "./train2/massive";
import {Star} from "./train/star";
import {Board} from "./chess/board";
import {DualClicker} from "./dualClicker/DualClicker";

function App() {

    return (

        <div className={c.header}>
            <Trep/>
            <div><Massive/></div>
           <div>
               <Star/>
               <DualClicker/>
               {/*<OnOff/>*/}
               {/*<Buble/>*/}
           </div>
            <Board />
        </div>

    );
}

export default App;
