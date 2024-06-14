import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen"
      style={{ backgroundColor: color }}
    >
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-xl gap-3 bg-amber-950 rounded-3xl px-2 py-2">
          <button
          onClick={()=> setColor("red") }
           className=" outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "red"}}
          >Red</button>
        
          <button 
          onClick={()=> setColor("Yellow") }
          className=" outline-none px-4 py-1 rounded-full text-black shadow-xl"
          style={{backgroundColor: "Yellow"}}
          >Yellow</button>
        
          <button
          onClick={()=> setColor("black") }
           className=" outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "black"}}
          >Black</button>
          <button
          onClick={()=> setColor("brown") }
           className=" outline-none px-4 py-1  rounded-full text-white shadow-xl"
          style={{backgroundColor: "brown"}}
          >Brown</button>
          <button
          onClick={()=> setColor("green") }
           className=" outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={()=> setColor("white") }
           className=" outline-none px-4 py-1 rounded-full text-black shadow-xl"
          style={{backgroundColor: "white"}}
          >White</button>
          <button
          onClick={()=> setColor("blue") }
           className=" outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
          onClick={()=> setColor("orange") }
           className=" outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "orange"}}
          >Orange</button>
        </div>
      </div>

    </div>
  )
}

export default App
