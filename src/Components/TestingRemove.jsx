import React, { useState } from 'react';
import DataRemove from './DataRemove'

const TestingRemove = () => {
    const[data,setData]=useState(DataRemove);
    const removeItem=(id)=>{
        let newPeople=data.filter((person)=>person.id !==id)
        setData(newPeople);
    }
    console.log(data);
    const clearList=()=>{
        setData([]);
    }


    
  return (
    <div>
        <h1>{data.length}</h1>
        {data.map((value)=>{
            const{name,id,quantity}=value
            return <div key={id}>

                <h2>{name}</h2>
                <h4>{quantity}</h4>
                <button onClick={()=>removeItem(id)}>remove</button>
            </div>
        })}

<button onClick={clearList}>clearAll</button>

    </div>
  )
}

export default TestingRemove