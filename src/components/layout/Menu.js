import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";
import { Outlet, Link, useLocation } from "react-router-dom";
import axios from "axios";
const Menu = (props) => {
  const [open, setOpen] = useState(true);
  const [user, setUser] = useState();
  const [roles, setRoles] = useState([]);
  const location = useLocation();

  const handleLogout = () => {
    props.logout();
    window.location.reload();
  };

  const fetchUser = () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Token ${my_token}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .get("http://who.ubuzima.rw/who/rest-auth/user/", config)
      .then((res) => {
        setUser(res.data);
        var roles_ = [];
        for (var i = 0; i < res.data.roles.length; i++) {
          roles_.push(res.data.roles[i].name);
        }
        setRoles(roles_);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="layout-wrapper layout-content-navbar">
  <div className="layout-container" style={{ height: "100vh", overflow: "hidden" }}>
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
      style={{ overflowY: "auto" }} // Add this line to enable scrolling
    >
      <style>
        {`
          #layout-menu::-webkit-scrollbar {
            width: 0;
            height: 0;
          }
          #layout-menu {
            -ms-overflow-style: none; /* Internet Explorer 10+ */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>
      <div className="app-brand demo">
        <span className="demo menu-text fw-bolder ms-2">
          <img
            src="../assets/img/layouts/WHO.jpg"
            style={{ width: "100%" }}
            className="h-auto"
            alt="WHO"
          />
        </span>
        <a
          href="javascript:void(0);"
          className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
        >
          <i className="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
      </div>
      <div className="menu-inner-shadow"></div>
      <ul className="menu-inner py-3">
        <li className={location.pathname === "/coming-soon" ? "menu-item active" : "menu-item"}>
          <span onClick={() => setOpen(!open)} className="menu-link">
            <i className="menu-icon tf-icon bx bxs-group" style={{}}></i>
            <div style={{ width: "95%" }} data-i18n="Analytics">
              Departments
            </div>
            <i
              className={open ? "menu-icon tf-icons bx bx-chevron-down" : "menu-icon tf-icons bx bx-chevron-right"}
              style={{ marginTop: 3 }}
            ></i>
          </span>
          <ul className="menu-sub" style={{ display: open ? "block" : "none" }}>
            <li className={location.pathname === "/conditions" || location.pathname === "/symptoms" ? "menu-item active" : "menu-item"}>
              <span onClick={() => setOpen(!open)} className="menu-link">
                <div style={{ width: "95%", color: 'black', fontWeight: 'black' }} data-i18n="Analytics">
                  Ophthalmology
                </div>
                <i
                  className={open ? "menu-icon tf-icons bx bx-chevron-down" : "menu-icon tf-icons bx bx-chevron-right"}
                  style={{ marginTop: 3 }}
                ></i>
              </span>
              <ul className="menu-sub" style={{ display: open ? "block" : "none", marginLeft: 20 }}>
                <li className="menu-item">
                  <Link to="/conditions" className="menu-link">
                    <div style={{}}>Conditions</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/symptoms" className="menu-link">
                    <div style={{}}>Symptoms</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={location.pathname === "/coming-soon" ? "menu-item active" : "menu-item"}>
              <span onClick={() => setOpen(!open)} className="menu-link">
                <div style={{ width: "95%", color: 'black', fontWeight: 'black' }} data-i18n="Analytics">
                  Internal Medicine
                </div>
                <i
                  className={open ? "menu-icon tf-icons bx bx-chevron-down" : "menu-icon tf-icons bx bx-chevron-right"}
                  style={{ marginTop: 3 }}
                ></i>
              </span>
              <ul className="menu-sub" style={{ display: open ? "block" : "none", marginLeft: 20 }}>
                <li className="menu-item">
                  <Link to="/coming-soon" className="menu-link">
                    <div style={{}}>Conditions</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/coming-soon" className="menu-link">
                    <div style={{}}>Symptoms</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/coming-soon" className="menu-link">
                    <div style={{}}>Figures</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={location.pathname === "/coming-soon" ? "menu-item active" : "menu-item"}>
              <span onClick={() => setOpen(!open)} className="menu-link">
                <div style={{ width: "95%", color: 'black', fontWeight: 'black' }} data-i18n="Analytics">
                  Surgery
                </div>
                <i
                  className={open ? "menu-icon tf-icons bx bx-chevron-down" : "menu-icon tf-icons bx bx-chevron-right"}
                  style={{ marginTop: 3 }}
                ></i>
              </span>
              <ul className="menu-sub" style={{ display: open ? "block" : "none", marginLeft: 20 }}>
                <li className="menu-item">
                  <Link to="/coming-soon" className="menu-link">
                    <div style={{}}>Conditions</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/coming-soon" className="menu-link">
                    <div style={{}}>Symptoms</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/coming-soon" className="menu-link">
                    <div style={{}}>Figures</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={location.pathname === "/coming-soon" ? "menu-item active" : "menu-item"}>
              <span onClick={() => setOpen(!open)} className="menu-link">
                <div style={{ width: "95%", color: 'black', fontWeight: 'black' }} data-i18n="Analytics">
                  Pediatrics
                </div>
                <i
                  className={open ? "menu-icon tf-icons bx bx-chevron-down" : "menu-icon tf-icons bx bx-chevron-right"}
                  style={{ marginTop: 3 }}
                ></i>
              </span>
              <ul className="menu-sub" style={{ display: open ? "block" : "none", marginLeft: 20 }}>
                <li className="menu-item">
                  <Link to="/coming-soon" className="menu-link">
                    <div style={{}}>Conditions</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/coming-soon" className="menu-link">
                    <div style={{}}>Symptoms</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/coming-soon" className="menu-link">
                    <div style={{}}>Figures</div>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className={location.pathname === "/operator" ? "menu-item active" : "menu-item"}>
          <Link to="operator" className="menu-link">
            <i className="menu-icon tf-icon bx bxs-cog"></i>
            <div data-i18n="Analytics">Operators</div>
          </Link>
        </li>
        <li className="menu-header small text-uppercase">
          <span className="menu-header-text"></span>
        </li>
        <li className={location.pathname === "/changePassword" ? "menu-item active" : "menu-item"}>
          <Link to="changePassword" className="menu-link">
            <i className="menu-icon tf-icon bx bxs-lock"></i>
            <div data-i18n="Analytics">Change password</div>
          </Link>
        </li>
        <li className="menu-item">
          <a className="menu-link">
            <button onClick={handleLogout} className="btn btn-outline-primary ml-4" type="button">
              <i className="fa-duotone bg-primary fa-solid fa-right-from-bracket fa-lg me-6"></i>
              Logout
            </button>
          </a>
        </li>
      </ul>
      <li className="menu-item p-4">
        <script>document.write(new Date().getFullYear());</script>
        <br />
      </li>
    </aside>
    <div className="layout-page" style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
          <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
            <i className="bx bx-menu bx-sm"></i>
          </a>
        </div>
        <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
          <div className="navbar-nav align-items-center">
            <div className="nav-item d-flex align-items-center">
              <h3 className="card-title text-primary">
                Welcome {user?.email}
              </h3>
            </div>
          </div>
          <ul className="navbar-nav flex-row align-items-center ms-auto">
            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                <div className="avatar avatar-online">
                  <img src="../assets/img/avatars/1.png" alt="avatar" className="w-px-40 h-auto rounded-circle" />
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar avatar-online">
                        <img src="../assets/img/avatars/1.png" alt="avatar" className="w-px-40 h-auto rounded-circle" />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <span className="fw-semibold d-block">
                        {user?.email}
                      </span>
                      <small className="text-muted">
                        {roles.join(", ")}
                      </small>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    <i className="bx bx-power-off me-2"></i>
                    <span className="align-middle">Log Out</span>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <div className="content-wrapper" style={{ flexGrow: 1, overflowY: "auto" }}>
        <Outlet />
        <div className="content-backdrop fade"></div>
      </div>
    </div>
  </div>
  <div className="layout-overlay layout-menu-toggle"></div>
</div>

  );
};

export default connect(null, { logout })(Menu);
