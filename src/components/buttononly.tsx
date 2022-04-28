import React from 'react';
type OnliButtonPropsType={
    name:string,
    callback:()=>void
}
export const Buttononly:React.FC<OnliButtonPropsType> = ({name,callback}) => {
    return (
        <div>
<button onClick={callback}>{name}</button>
        </div>
    );
};

