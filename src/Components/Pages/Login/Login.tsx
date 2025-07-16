import { useState } from "react";
import { useLocation } from "wouter"; // ✅ Import from Wouter
import styles from "./Login.module.css";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [, setLocation] = useLocation(); // ✅ setLocation changes the current route

    async function handleLogin() {
        setError("");
        setLoading(true);

        try {
            const response = await fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || "Login failed");
            }

            const data = await response.json();

            // ✅ Save token to localStorage
            localStorage.setItem("access_token", data.access_token);

            // ✅ Redirect to /map
            setLocation("/home");

        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={styles.loginContainer}>
            <p className={styles.loginTitle}>Join the Textile Community in Mittweida!</p>

            <input className={styles.loginInput}
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input className={styles.loginInput}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button className={styles.loginButton} onClick={handleLogin} disabled={loading}>
                {loading ? "Logging in..." : "Login"}
            </button>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}