import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white text-black "
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;",
      }}
    >
      <div className="container d-flex justify-content-between ">
        <div className="navbar-brand">React Router Task</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/">
                All
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/fullstack">
                Full Stack Development
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/datascience">
                Data Science
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/cybersecurity">
                Cyber Security
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/career">
                Career
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
