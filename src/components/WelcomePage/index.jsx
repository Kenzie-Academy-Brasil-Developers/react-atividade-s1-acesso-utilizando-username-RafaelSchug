const WelcomePage = ({user, setIsLoggedIn}) => {

    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <h3>Bem vindo, {user}!</h3>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default WelcomePage;