import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/a9176967613739.5b3f984f5e0e9.jpg" width={221}
        margin={10}
        alt="logo"
      />
      <ul className="list">
        <Link>
          <span>Home</span>
        </Link>
        <Link>
          About
        </Link>
        <Link>
          Contact
        </Link>
        <Link to="/instamart">
          <li>Instamart</li>
        </Link>
      </ul>
      <div>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
      <div>{isLoggedIn ? <h1>Logged In..</h1> : <h1>Logged Out..</h1>}</div>
    </div>
  );
};

export default Header;
