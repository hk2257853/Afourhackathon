import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import decode from "jwt-decode";
import { useLocation, useNavigate } from "react-router";

function Navbar() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile"))); //get user from local storage
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(
        () => {            
          const token = user?.response.token;

          if (token) {
              const decodedToken = decode(token);              
              if (decodedToken.exp * 1000 < new Date().getTime()) {
              logout();
            }
        }
        setUser(JSON.parse(localStorage.getItem("profile")));
        }, [location]);    
        /*on location change run this to set user. No no need to refresh to get profile in navbar on login */

      const logout = () => {
        localStorage.clear();
        navigate("/");
      };
    

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">                
                <i className=" bi bi-door-open fa-5x"></i>
                
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="items">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            {                                
                                user?.response.result.utype === "user" &&
                            <li className="nav-item">
                                <Link to="/uskilldata" className="nav-link active">Myskills</Link>
                            </li>
                            }
                            {                                
                                user?.response.result.utype === "mentor" &&
                            <li className="nav-item">
                                <Link to="/mentordata" className="nav-link active">skills</Link>
                            </li>
                            }                                                        
                            {                                
                                user?.response.result.utype === "user" &&
                            <li className="nav-item">
                                <Link to="/skillform" className="nav-link active">Skillform</Link>
                            </li>
                            }
                            {                                
                                user?.response.result.utype === "mentor" &&
                            <li className="nav-item">
                                <Link to="/mentorform" className="nav-link active">Addskill</Link>
                            </li>
                            }
                            <li className="nav-item">
                                <Link to="/contactus" className="nav-link active">Contactus</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/aboutus" className="nav-link active">About us</Link>
                            </li>
                        </ul>

                        {!user /* user exist? */ ? (
                        <div className="form-inline my-2 my-lg-0">
                        <Link to="/">
                           <button className='btn btn-danger'>Sign In</button>
                        </Link>
                        </div>):(
                        <div className="row">
                        <h1 className="col">{user.response.result.name}</h1>
                        <button className='btn btn-danger col' onClick={logout}>Logout</button>
                        </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;