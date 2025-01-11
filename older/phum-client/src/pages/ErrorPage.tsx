import React from 'react';

const ErrorPage: React.FC = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f8f9fa',
                color: '#343a40',
                textAlign: 'center',
                padding: '20px',
            }}
        >
            <h1
                style={{
                    fontSize: '8rem',
                    fontWeight: 'bold',
                    color: '#ff4d4f',
                    margin: '0',
                }}
            >
                404
            </h1>
            <h2
                style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginTop: '20px',
                }}
            >
                Oops! Page Not Found
            </h2>
            <p
                style={{
                    fontSize: '1.2rem',
                    marginTop: '10px',
                    color: '#6c757d',
                }}
            >
                The page you're looking for doesn't exist or has been moved.
            </p>
            <button
                onClick={() => (window.location.href = '/')}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#fff',
                    backgroundColor: '#007bff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Back to Home
            </button>
        </div>
    );
};

export default ErrorPage;
