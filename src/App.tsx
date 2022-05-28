import React from 'react';
import './App.module.css';
import c from './App.module.css'
import {Massive} from "./train2/massive";
import {Board} from "./chess/board";
import {DualClicker} from "./dualClicker/DualClicker";




function App() {
    return (
        <div className={c.header}>
            <Massive/>
            <div>
                {/*<Star/>*/}
                <DualClicker/>
                {/*<Clicker/>*/}

                {/*<OnOff/>*/}
                {/*<Buble/>*/}
            </div>
            <Board/>
        </div>
    );
}

export default App;
