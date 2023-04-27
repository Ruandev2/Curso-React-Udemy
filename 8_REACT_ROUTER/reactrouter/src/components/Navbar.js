import  './Navbar.css';
import { Link ,NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        {/*<Link to="/">Home</Link>
        <Link to="/About">Sobre</Link>*/}
        {/*9 - LINK ATIVE*/}
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/abount"}>Sobre</NavLink>
    </nav>
  )
}

export default Navbar