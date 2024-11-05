import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
      <nav>
        <Link to="/">Home</Link>
        {isAuthenticated ? (
          <button onClick={() => setIsAuthenticated(false)}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
