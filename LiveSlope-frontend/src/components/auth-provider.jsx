import AuthContext from "../assets/auth-context";

export default function AuthProvider({ children }) {
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

    function changePassword(oldPassword, newPassword) {
        // Placeholder change password function
        console.log(`Changing password from ${oldPassword} to ${newPassword}`);
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
        changePassword: changePassword,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};