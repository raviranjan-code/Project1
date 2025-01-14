
import { Link } from "react-router-dom";
import "../../Assets/Styles/Navstyle.css";
export const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            {" "}
            <i classn="fas fa-camera" onclick="openCamera()"></i>CAPTURE IT!
          </div>
          <div>
            <ul>
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">LogIn</Link>
              </li>
              <li>
               <Link to="/studentregistration">Student Registration</Link>
              </li>
              <li>
                <Link to="/teacherregistration">Teacher Registration</Link>
              </li>
            </ul>
          </div>
          <div class="social-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};
