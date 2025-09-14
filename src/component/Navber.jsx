import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-blue-500 text-white'>
      <h1>Navbar</h1>
      <div>
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;