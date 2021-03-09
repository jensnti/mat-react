import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AuthService from '../services/auth-service';

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  // const [currentUser, setCurrentUser] = useState(undefined);

  // useEffect(() => {
  //   const user = AuthService.getCurrentUser();

  //   if (user) {
  //     setCurrentUser(user);
  //     // setShowModeratorBoard(user.roles.includes('ROLE_MODERATOR'));
  //     // setShowAdminBoard(user.roles.includes('ROLE_ADMIN'));
  //   }
  // }, []);

  function signOut(e) {
    e.preventDefault();
    AuthService.signOut();
    window.location.reload();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container-fluid">
        <Link className="navbar-brand" to={'/'}>
          <img src="/images/tallrik.svg" alt="" width="32" height="32" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
          id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={'/'}>
                Hem
              </Link>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <form>
              <button onClick={signOut} className="btn btn-link">
                Logga ut
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;