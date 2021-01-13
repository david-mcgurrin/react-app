import { Link } from "react-router-dom";
import Nav from '../Nav/Nav';

import './header.css';

function Header() {
  return <header>
    <h1 className="logo"><Link to="/">Micro Quote</Link></h1>
    <Nav/>
  </header>;
}

export default Header;
