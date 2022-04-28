import React, {useState} from 'react';
import {OnlyInput} from "./onlyinput";
import {Onlybutton} from "./onlybutton";
import {Table} from "./table";

export const Massive = () => {

    const [cars, setCars] = useState([
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ])
    let [auto, setAuto] = useState('')
    let [model, setModel] = useState('')
    let [error, setError] = useState<string|null>('')

    const funcAdd = (auto: string, model: string) => {
        if (auto.trim() === '' && model.trim() === '') {
            setError('Please enter text')
            return
        }
        let newcar = {manufacturer: auto, model: model}
        setCars([...cars, newcar])

    }

    const visovFuncAdd = () => {
        funcAdd(auto, model)
        setAuto('')
        setModel('')

    }
/////delete auto//////////////////////////////////////////////////////////////////
    const remFun = (id: number) => {
        setCars(cars.filter((item, index: number) => index !== id))
        console.log(id)
    }
///////////////////////////////////////////////////////////////////////////////////

    /////filter auto////////////////////////////////////////////////
    const filteredFunction = () => {
        setCars(cars.filter((item) => item.manufacturer === auto))
    }
    return (
        <div>
            <Table remFun={remFun} cars={cars} error={error} />
            <OnlyInput auto={auto} setAuto={setAuto} model={model} setModel={setModel} setError={setError}/>

            <Onlybutton name='add' callBack={visovFuncAdd}/>
            <Onlybutton name='filter' callBack={filteredFunction}/>
        </div>
    );
};

