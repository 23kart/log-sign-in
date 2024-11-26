import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
    const navigate = useNavigate();


    const handleLogout = () => {        
        console.log("User logged out");
        navigate('/login'); 
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Welcome to the Main Page!</h1>
            <button 
                onClick={handleLogout} 
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Logout
            </button>
        </div>
    );
}