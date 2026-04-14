import AuthContext from "../assets/auth-context";

const AuthProvider = ({ children }) => {
    /**
     * Context provider for authentication state
     */
    const contextValue = {
        loggedIn: true,
        username: "Benutzer",
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;