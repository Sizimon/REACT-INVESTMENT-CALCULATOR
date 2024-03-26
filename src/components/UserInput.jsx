export default function UserInput({ onInputChange, userInput }) {
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
                            onInputChange('initialInvestment', event.target.value)
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
                            onInputChange('annualInvestment', event.target.value)
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
                            onInputChange('expectedReturn', event.target.value)
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
                            onInputChange('duration', event.target.value)
                        }
                    />
                </span>
            </div>
        </form>
    )
}