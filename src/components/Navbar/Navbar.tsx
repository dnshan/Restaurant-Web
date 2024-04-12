import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '@app_constants/images';

import './Navbar.css';


const Navbar = () => (
  <>
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="image" />

    </div>
  </nav>
    
  </>
);

export default Navbar;
