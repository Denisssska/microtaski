import React from 'react';

import './App.css';
// import {NewComponent} from "./maptask";
import {Button} from "./button";
import {Moneybackbutton} from "./moneyback";
import {Money} from "./money";

// import {Fun} from "./button";

function App() {
    const Moneys = [
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ]
    // const topCars = [
    //     {manufacturer: 'BMW', model: 'm5cs'},
    //     {manufacturer: 'Mercedes', model: 'e63s'},
    //     {manufacturer: 'Audi', model: 'rs6'},
    //     {manufacturer: 'BMW', model: 'm5cs'},
    //     {manufacturer: 'Mercedes', model: 'e63s'},
    //     {manufacturer: 'Audi', model: 'rs6'}
    // ]
    const Funk1 = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Funk2 = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Funk3 = () => {
        console.log("I'm a stupid button")
    }
    const Allmoney = () => {
        console.log('all')
    }
    const Banknots = () => {
        console.log('bank')
    }
    const Value = () => {
        console.log(1212)
    }
    return (
        <div className='header'>
            <Moneybackbutton name={"all money"} callback={Allmoney}/>
            <Moneybackbutton name={"banknots"} callback={Banknots}/>
            <Moneybackbutton name={"value"} callback={Value}/>
            <Money arr={Moneys}/>
            <Button name={'one'} callback={() => Funk1('ivan', 11)}/>
            <Button name={'two'} callback={() => Funk2('petr', 21)}/>
            <Button name={'three'} callback={Funk3}/>
            {/*<Fun/>*/}
            {/*<div className='newcom'>*/}
            {/*<NewComponent  arr={topCars}/></div>*/}
        </div>
    );
}

export default App;
