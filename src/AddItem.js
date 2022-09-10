import React, {useState} from 'react'

export default function AddItem() {

    const [listArr, setArray] = useState([]);

    function addMe(){
        setArray(prevState=>{
            return [...prevState, `Item ${prevState.length + 1}`]
        })
    }

    const mapListArr = listArr.map(item => {
        return <p>{item}</p>
    })

  return (
    <div className='addMain'>
        <button className='addBtn' onClick={addMe}>ADD ITEM</button>
        <div className="list">{mapListArr}</div>
    </div>
  )
  
}
