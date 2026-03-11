import { Link } from "react-router-dom"
import { FaHome,FaUserCircle,FaUsers} from "react-icons/fa";


export default function Navbar() {
  return (
    <nav className="navbar">
       <h2 className="logo">
        
        <Link to="/users">
          <FaUserCircle className="logo-icon" style={{fontSize:"40px",color:"#0a474d"}} />
        </Link>
        
      </h2>

      <div className="nav-links">
        <Link to="/">
          <FaHome className="icon" /> Home
        </Link>

        <Link to="/users">
          <FaUsers className="icon" /> Users
        </Link>
      </div>
    </nav>
  )
}