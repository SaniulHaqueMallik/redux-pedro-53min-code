import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { newColor } from '../features/theme'

function ChangeColor() {
  const dispatch = useDispatch()
  const [color, setColor] = useState("")
  return (
    <div>
      <input type="text" className="text" onChange={(event)=>setColor(event.target.value)} />
      <button onClick={()=>dispatch(newColor(color))}>ChangeColor</button>
      <h1>{color}</h1>
    </div>
  )
}

export default ChangeColor
