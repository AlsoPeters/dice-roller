import './App.css'
import Dice from './components/Dice'
import { useState } from 'react'


function App() {
  const [diceValue, setDiceValue] = useState(1)

  // Fisher-Yates Shuffle Algorithm
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }

  function HandleRoll() {
    let sides = [1, 2, 3, 4, 5, 6]
    shuffleArray(sides)
    setDiceValue(sides[0])
  }

  return (
    <>
      <div className='flex justify-center items-center space-y-6 flex-col p-12'>
        <button onClick={HandleRoll} className=' text-blue-400 text-4xl border-2 p-2 rounded-md cursor-pointer hover:bg-gray-800'>Roll</button>
        <div className='flex flex-row space-x-6'>
          <Dice value={diceValue} />
        </div>

      </div>
    </>
  )
}

export default App
