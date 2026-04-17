import { useState } from "react";
import AuthContext from "../assets/auth-context";
import { useNavigate } from "react-router-dom";
/**
 * Provides authentication state and placeholder auth actions to the app.
 */
export default function AuthProvider({ children }) {

    const API_URL = "http://localhost:8000/";

    const navigate = useNavigate();

    const [username, setUsername] = useState(null);

    async function login(username, password) {
        try{
            const response = await fetch(API_URL + "auth/login", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });
            const body = await response.json();
            if (!response.ok) {
                alert("Login fehlgeschlagen: " + body.detail);
                return;
            }
            setUsername(username);
            navigate("/");
        } catch (error) {
            console.error("Fehler:", error);
        }
    }

    async function register(username, password) {
        try{
            const response = await fetch(API_URL + "auth/register", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });
            const body = await response.json();
            if (!response.ok) {
                alert("Registrieren fehlgeschlagen: " + body.detail);
                return;
            }
            setUsername(username);

            navigate("/");
        } catch (error) {
            console.error("Fehler:", error);
        }
    }

    function changePassword(oldPassword, newPassword) {
        // Placeholder change password function
        console.log(`Changing password from ${oldPassword} to ${newPassword}`);
    }


    async function logout() {
        try{
            const response = await fetch(API_URL + "auth/logout", {
                method: "POST",
                credentials: "include",
            });
            if (!response.ok) {
                alert("Logout fehlgeschlagen: " + response.status + " " + response.statusText);
                return;
            }
            navigate("/login");
        } catch (error) {
            console.error("Fehler:", error);
        }
        setUsername(null);
    }

    const contextValue = {
        username: username,
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