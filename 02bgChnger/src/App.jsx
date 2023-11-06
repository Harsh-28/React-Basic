import { useEffect, useState } from "react"

function App() {
  const [bgColor, setBgColor] = useState("pink")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: bgColor}}>
      <div className="flex flex-col">
        <button onClick={() => setBgColor("green")}>green</button>
        <button onClick={() => setBgColor("yellow")}>yellow</button>
        <button onClick={() => setBgColor("blue")}>blue</button>
        <button onClick={() => setBgColor("red")}>red</button>
        <button onClick={() => setBgColor("white")}>white</button>
        <button onClick={() => setBgColor("pink")}>reset/</button>
      </div>
    </div>
  )
}

export default App
