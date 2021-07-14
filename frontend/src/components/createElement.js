

const createElement = () => {
    return (
        <form>
            <h2>Create a new account...</h2>

            <div>
                <label>Username: <input className='inputField' id='userName' /></label>
            </div>

            <div>
                <label>Password: <input className='inputField' id='password' /></label>
            </div>

            <div>
                <button onClick={handleClick}> Create </button>
            </div>
        </form>
    )
}

export default createElement