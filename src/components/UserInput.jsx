export default function UserInput() {
    return (
        <form id="user-input">
            <div className="input-group">
                <span>
                    <label>Initial Investment</label>
                    <input type="number" required />
                </span>
                <span>
                    <label>Annual Investment</label>
                    <input type="number" required />
                </span>
            </div>
            <div className="input-group">
                <span>
                    <label>Expected Return</label>
                    <input type="number" required />
                </span>
                <span>
                    <label>Duration</label>
                    <input type="number" required />
                </span>
            </div>
        </form>
    )
}