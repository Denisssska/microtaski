import React from 'react';
import './App.module.css';
import {Trep} from "./trepachev";
import c from './App.module.css'
import {Massive} from "./train2/massive";
function App() {
    return (
        <div className={c.header}>
                <Trep/>
            <div><Massive/></div>
        </div>
    );
}
export default App;
