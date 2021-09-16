import { useState } from "react";

const GetUserComponent = ({setIsLoggedIn, setUser}) => {

    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState('');

    const HandleLogin = (user) => {
        if(user.length > 0){
            setIsLoggedIn(true);
            setUser(user);
        } else {
            setError('Input inválido')
        }
    }

    return (
        <form action="" onSubmit={e=> e.preventDefault()}>
            {error && <label>{error}</label>}
            <input type="text" placeholder='Nome' value={userInput} onChange={e => setUserInput(e.target.value)}/>
            <button onClick={() => HandleLogin(userInput)}>Acessar com nome</button>
        </form>
    )
}

export default GetUserComponent;