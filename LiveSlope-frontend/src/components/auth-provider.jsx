import AuthContext from "../assets/auth-context";

const AuthProvider = ({ children }) => {
    /**
     * Context provider for authentication state
     */

    function login(username, password) {
        // Placeholder login function
        console.log(`Logging in with username: ${username} and password: ${password}`);
    }

    function register(username, password) {
        // Placeholder register function
        console.log(`Registering with username: ${username} and password: ${password}`);
    }


    function logout() {
        // Placeholder logout function
        console.log("User logged out");
    }

    const contextValue = {
        loggedIn: true,
        username: "Benutzer",
        login: login,
        register: register,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;