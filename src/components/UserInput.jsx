import { useState } from 'react';

export default function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: null,
        annualInvestment: null,
        expectedReturn: null,
        duration: null
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            };

        });
    }

    return (
        <form id="user-input">
            <div className="input-group">
                <span>
                    <label>Initial Investment</label>
                    <input 
                        type="number"
                        required
                        value={userInput.initialInvestment} 
                        onChange={(event) => 
                            handleChange('initialInvestment', event.target.value)
                        } 
                    />
                </span>
                <span>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.annualInvestment}
                        onChange={(event) => 
                            handleChange('annualInvestment', event.target.value)
                        }  
                    />
                </span>
            </div>
            <div className="input-group">
                <span>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        required
                        value={userInput.expectedReturn}
                        onChange={(event) => 
                            handleChange('expectedReturn', event.target.value)
                        }  
                    />
                </span>
                <span>
                    <label>Duration</label>
                    <input
                        type="number"
                        required 
                        value={userInput.duration}
                        onChange={(event) => 
                            handleChange('duration', event.target.value)
                        }  
                    />
                </span>
            </div>
        </form>
    )
}