import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from './components/Results'


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0 
});

const inputIsValid = userInput.duration >= 1;

function handleChange(inputIdentifier, newValue) {
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentifier]: +newValue
      };
  });
}


  return (
  <>
    <Header />
    <UserInput userInput={userInput} onInputChange={handleChange} />
    {!inputIsValid && <p className='center'>Please enter a valid duration (1 year or more)</p>}
    {inputIsValid && <Results input={userInput} />}
  </>
  )
}

export default App
