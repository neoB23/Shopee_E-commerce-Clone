import React from 'react';
import { Link } from 'react-router-dom';

function SubNav() {
    return (
    <div className="flex flex-col items-center justify-center w-full bg-shopee p-2">
      <div className="flex items-center space-x-5">
        <img 
          src="images/logo1.png" 
          alt="logo" 
          className="w-[180px] h-auto object-contain hidden md:inline" 
        />
        <input 
          type="search" 
          id="search-input" 
          placeholder="Search..." 
          className="border rounded px-4 py-1 w-[200px] sm:w-[1000px] focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M5.2 4h16.5l-4.975 9H8.1L7 15h12v2H3.625L6.6 11.6L3 4H1V2h3.25z"/></svg>
        <img src="images/profile_icon.png" alt="profile icon" className="block md:hidden" />

      </div>
  <div className="flex flex-wrap gap-5 ml-16">  
  <CustomLink className ="hidden md:inline text-white"  style={{ fontSize: '13px' }}>Claim Your Free Phone Now!</CustomLink>
  <CustomLink className ="hidden md:inline text-white" style={{ fontSize: '13px' }}>Bluetooth Earphone Original</CustomLink>
  <CustomLink className ="hidden md:inline text-white" style={{ fontSize: '13px' }}>Piso iPhone</CustomLink>
  <CustomLink className ="hidden md:inline text-white" style={{ fontSize: '13px' }}>Samba Shoes</CustomLink>
  <CustomLink className ="hidden md:inline text-white" style={{ fontSize: '13px' }}>1piso Cellphone</CustomLink>
  <CustomLink className ="hidden md:inline text-white" style={{ fontSize: '13px' }}>Victoria Secret Vanilla Buy 1 Take 1</CustomLink>
</div>
<div> 
</div>
</div>


    );
}
function CustomLink({ href, children, ...props }) {
    return (
      <Link
        to={href}
        className="text-white hover:text-blue-500 transition-colors duration-300"
        {...props}
      >
        {children}
      </Link>
    );
  }
export default SubNav;
