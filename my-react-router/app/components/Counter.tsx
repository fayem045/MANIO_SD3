import {useState} from "react";
import "./Counter.css"; //import css file for styling

export default function Counter() {
    const [count, setCount] = useState(0);
    return(
        <div className="counter">
            {" "}
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <div className="button-container">
        <button onClick={() => setCount(count + 1)}>Increment</button>  
        <button onClick={() => setCount(count - 1)}>Decrement</button>  
         </div>
        </div>
    );
}