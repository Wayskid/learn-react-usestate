import React from "react"
import AddItem from "./AddItem";



export default function Counter() {
    const [initial, setCount] = React.useState(0);

    function decreaseCount(){
        setCount(initial - 1)
    }

    function increaseCount(){
        setCount(initial + 1)
    }
    
  return (
    <div className="containerBody">
        <div className="main">
            <h1>Increase or Decrease Me</h1>
            <div className="count">
                <button onClick={decreaseCount} className="minus">&#8211;</button>
                <p className="number">{initial}</p>
                <button onClick={increaseCount} className="plus">+</button>
            </div>
        </div>
        <AddItem />
    </div>
  )
}
