import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to='/' className='nav-links'>Home</Link>
            <Link to='/characters' className='nav-links'>Characters</Link>
            <Link to='/episodes' className='nav-links'>Episodes</Link>
            <Link to='/quotes' className='nav-links'>Quotes</Link>
            <Link to='/deaths' className='nav-links'>Deaths</Link>
        </nav>
    );
}

export default Navbar;