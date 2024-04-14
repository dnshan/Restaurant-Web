import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '@app_constants/images';
import Modal from '@app_pages/Login';
import LoginForm from '@app_components/Form/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line at the top of your file


import './Navbar.css';
import { useState } from 'react';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <nav className='app__navbar'>
        <div className='app__navbar-logo'>
          <img src={images.vitoPizza} alt="app logo" />
        </div>

        <ul className='app__navbar-links'>
          <li className='p__opensans'><a href='#home'>Home</a></li>
          <li className='p__opensans'><a href='#about'>About</a></li>
          <li className='p__opensans'><a href='#menu'>Menu</a></li>
          <li className='p__opensans'><a href='#awards'>Awards</a></li>
          <li className='p__opensans'><a href='#contact'>Contact</a></li>
        </ul>

        <div className='app__navbar-login'>
          <a href="/" onClick={handleOpenModal} className='p__opensans'>Log In / Register</a>

          <div />
          <a href='/' className='p__opensans'>Book Table</a>
        </div>

        <div className='app__navbar-smallscreen'>
          <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

          {toggleMenu && (
            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
              <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
              <ul className='app__navbar-smallscreens-links'>
                <li className='p__opensans'><a href='#home'>Home</a></li>
                <li className='p__opensans'><a href='#about'>About</a></li>
                <li className='p__opensans'><a href='#menu'>Menu</a></li>
                <li className='p__opensans'><a href='#awards'>Awards</a></li>
                <li className='p__opensans'><a href='#contact'>Contact</a></li>
              </ul>
            </div>
          )}
        </div>
      </nav>

            {/* Modal component here if you have a separate Modal component */}
            {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          {/* Modal content goes here, such as a login form */}
          <h2>Log In</h2>
          <LoginForm/>
          {/* Log in form or content */}
        </Modal>
      )}

    </>
  )
};

export default Navbar;
