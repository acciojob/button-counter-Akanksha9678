import React,{useState} from 'react';

const CounterApp=()=>{

    const [count,setCount]=useState(0);

    return(
        <div>
             <p>Button clicked {count} times</p>
             <button onClick={()=>{setCount(count+1)}}>Click me</button>
             {
                // console.log("hello world...")
             }
        </div>
    )
}

export default CounterApp;