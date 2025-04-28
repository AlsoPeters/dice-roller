import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import Dice from './components/Dice'
import { useState } from 'react'

import { Button } from './components/ui/button'


function App() {
  const [diceValue, setDiceValue] = useState(1)
  const [selectedOption, setSelectedOption] = useState(null)
  const [diceArray, setDiceArray] = useState([<Dice />])

  const handleSelect = (option) => {
    setSelectedOption(option)
  }

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

  function handleAddDice() {
    setDiceArray(prev => [...prev, <Dice />])
  }

  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <div className='flex'>
          <div className='ml-auto p-4'>
            <ModeToggle />
          </div>
        </div>
        <div className='flex justify-center items-center space-y-6 flex-col p-12'>
          <div>
            <p className='text-blue-300 text-4xl'>How many dice?</p>
            <Button onClick={handleAddDice}>Add Dice</Button>
          </div>
          <div className='flex space-x-4'>
            {diceArray.map((_, index) => (
              <Dice key={index} />
            ))}
          </div>
        </div>
      </ThemeProvider>

    </>
  )
}

export default App
