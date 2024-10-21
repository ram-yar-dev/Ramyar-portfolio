import React from 'react';
//link
import {Link} from 'react-scroll'
//images
import logo from'../assets/logo.svg'
const Header = () => {
  return <div className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/*logo */}
        <a href='#'>
          <img src={logo} alt=''/>
        </a>
        
         <Link
          activeClass='active' 
          smooth= {true}
          spy={true}
           to='contact'>
            <button className='btn btn-sm '>
          Work with me
          </button>
          </Link>  
        
      </div>
    </div>
  </div>;
};

export default Header;
