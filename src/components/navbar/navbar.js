import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container">
            <div>
                <p className="logo">
                    <Link as={Link} to="/">
                        John Gibbs
                    </Link>
                </p>
            </div>
            <div className="links">
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
