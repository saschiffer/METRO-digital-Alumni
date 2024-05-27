// HeaderLogin.tsx
import React, { useState } from 'react';
import './Header Login.css';
import logo from "../../logo/logo metro digital alumni.png";
import { useNavigate } from "react-router";
import { isValidAccount } from "./account";

export const HeaderLoginComponent: React.FC = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (isValidAccount(username, password)) {
            navigate("/home");
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <div className='LoginHeader__container'>
            <div className="LoginHeaderContent">
                <div className="LoginHeaderItem">
                    <img className="logo" src={logo} alt="Logo" />
                </div>
                <div className="LoginHeaderItem">
                    <button className="LogIn" onClick={() => setShowModal(true)}>LOGIN</button>
                </div>
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modalContent">
                        <h2 id="modalTitle">Login</h2>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className="error">{error}</p>}
                        <div className="modalButton">
                            <button id="windowButton" onClick={handleLogin}>Submit</button>
                            <button id="windowButton" onClick={() => setShowModal(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
