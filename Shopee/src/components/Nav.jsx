import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const isActive = (path) => location.pathname === path;

  return (
    <div className="hidden md:flex flex-col md:flex-row justify-between items-center w-full px-44 py-2 bg-shopee">
      {/* Adjust text size for mobile */}
      <div className="flex flex-wrap items-center gap-2 md:gap-2 text-white font-extralight">
        <CustomLink className="text-xs md:text-[17px]" href="/Login">
          Seller Centre
        </CustomLink>
        <span className="hidden md:inline border-r border-white h-4"></span>
        <CustomLink className="text-xs md:text-[17px]" href="/Login">
          Start Selling
        </CustomLink>
        <span className="hidden md:inline border-r border-white h-4"></span>
        <CustomLink className="text-xs md:text-[17px]" href="/Login">
          Download
        </CustomLink>
        <span className="hidden md:inline border-r border-white h-4"></span>
        <CustomLink className="text-xs md:text-[17px]" href="/Login">
          Follow us on
        </CustomLink>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248a4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008a3.004 3.004 0 0 1 0 6.008"/><circle cx="16.806" cy="7.207" r="1.078" fill="white"/><path fill="white" d="M20.533 6.111A4.6 4.6 0 0 0 17.9 3.479a6.6 6.6 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.6 6.6 0 0 0-2.184.42a4.6 4.6 0 0 0-2.633 2.632a6.6 6.6 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71s0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632a6.6 6.6 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.6 6.6 0 0 0 2.186-.419a4.6 4.6 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186c.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.6 6.6 0 0 0-.421-2.217m-1.218 9.532a5 5 0 0 1-.311 1.688a3 3 0 0 1-1.712 1.711a5 5 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055c-2.438 0-2.687 0-3.655-.055a5 5 0 0 1-1.669-.311a3 3 0 0 1-1.719-1.711a5.1 5.1 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654s0-2.686.053-3.655a5 5 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5 5 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a5 5 0 0 1 1.67.311a3 3 0 0 1 1.712 1.712a5.1 5.1 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655s0 2.698-.043 3.654z"/></svg>
      </div>
      {/* Adjust text size for mobile */}
      <div className="flex flex-wrap items-center gap-2 md:gap-4 text-white font-extralight mt-2 md:mt-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M5 18.77v-1h1.616V9.845q0-1.96 1.24-3.447T11 4.546V4q0-.417.291-.708q.291-.292.707-.292t.709.292T13 4v.546q1.904.365 3.144 1.853t1.24 3.447v7.923H19v1zm6.997 2.615q-.668 0-1.14-.475t-.472-1.14h3.23q0 .67-.475 1.142q-.476.472-1.143.472M7.616 17.77h8.769V9.846q0-1.823-1.281-3.104T12 5.462t-3.104 1.28t-1.28 3.104z"/></svg>
        <CustomLink className="text-xs md:text-[17px]" href="/Login">
          Notification
        </CustomLink>
        <span className="hidden md:inline border-r border-white h-4"></span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12.028 17.23q.332 0 .56-.228t.228-.56t-.23-.56q-.228-.228-.56-.228t-.56.229t-.227.56q0 .332.228.56q.23.228.561.228m-.517-3.312h.966q.038-.652.245-1.06q.207-.407.851-1.04q.67-.669.996-1.199t.327-1.226q0-1.182-.83-1.884q-.831-.702-1.966-.702q-1.079 0-1.832.586q-.753.587-1.103 1.348l.92.381q.24-.546.687-.965q.447-.42 1.29-.42q.972 0 1.42.534q.449.534.449 1.174q0 .52-.281.928q-.28.409-.73.822q-.87.802-1.14 1.36t-.269 1.363M12.003 21q-1.866 0-3.51-.7q-1.644-.699-2.859-1.91q-1.215-1.212-1.918-2.86q-.703-1.648-.703-3.517q0-1.866.703-3.51q.703-1.644 1.918-2.859q1.215-1.215 2.859-1.918q1.644-.703 3.51-.703q1.869 0 3.517.703q1.648.703 2.86 1.918q1.212 1.215 1.911 2.86q.7 1.644.7 3.51q0 1.869-.7 3.517q-.699 1.648-1.911 2.86q-1.212 1.211-2.86 1.91q-1.648.7-3.517.7M12 2.012q-2.083 0-3.943.792q-1.86.791-3.24 2.174q-1.381 1.381-2.173 3.24q-.792 1.86-.792 3.943q0 2.083.792 3.943q.792 1.86 2.173 3.24q1.38 1.381 3.24 2.173q1.86.792 3.943.792q2.083 0 3.943-.792q1.86-.792 3.24-2.173q1.381-1.38 2.173-3.24q.792-1.86.792-3.943q0-2.083-.792-3.943q-.792-1.86-2.173-3.24q-1.38-1.383-3.24-2.174q-1.86-.792-3.943-.792z"/></svg>
        <CustomLink className="text-xs md:text-[17px]" href="/Login">
          Help
        </CustomLink>
        <span className="hidden md:inline border-r border-white h-4"></span>
        <CustomLink className="text-xs md:text-[17px]" href="/Login">
          Sign Up
        </CustomLink>
        <span className="hidden md:inline border-r border-white h-4"></span>
        <CustomLink className="text-xs md:text-[17px]" href="/Login">
          Login
        </CustomLink>
      </div>
    </div>
  );
}

function CustomLink({ href, children, className }) {
  const isActive = (path) => location.pathname === path;

  return (
    <Link to={href}>
      <p className={`px-2 py-2 rounded-lg ${isActive(href) ? 'bg-[#E4E5EA] text-black' : 'text-white hover:text-[#E4E5EA]'} ${className}`}>
        {children}
      </p>
    </Link>
  );
}

export default Nav;
