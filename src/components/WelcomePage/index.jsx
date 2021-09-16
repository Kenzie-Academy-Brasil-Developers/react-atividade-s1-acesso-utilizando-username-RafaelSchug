import './style.css';

const WelcomePage = ({user, setIsLoggedIn}) => {

    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <h3 className='welcome'>Bem vindo, {user}!</h3>
            <button className='logout' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default WelcomePage;