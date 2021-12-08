import React from "react";
import {useDataLayerValue} from '../././../ContextApi/DataLayer';


function Navbar() {
  const [{ user }, dispatch] = useDataLayerValue();

  // window.onscroll = function () {
  //   bar();
  // };



  // var navbar = document.querySelector(".navbar");

  // function bar() {
  //   if (window.pageYOffset > 1) {
  //     navbar.classList.add("sticky");
  //   }
  //   if (window.pageYOffset == 0) {
  //     navbar.classList.remove("sticky");
  //   }
  // }



  return (
    
    // <nav className="navbar">
    //   <div className="navbar__options-box">
    //     <img src={user?.images[0]?.url} className="navbar__avatar" alt="" />
    //     <div className="porfile">
    //       <h5 className="navbar__item">
    //         Name: <span className="porfile__items">{user?.display_name}</span>
    //       </h5>
    //       <h5 className="navbar__item">
    //         Email: <span className="porfile__items">{user?.email}</span>
    //       </h5>
    //       <h5 className="navbar__item">
    //         country: <span className="porfile__items">{user?.country}</span>
    //       </h5>
    //       <h5 className="navbar__item">
    //         followers:{" "}
    //         <span className="porfile__items">{user?.followers.total}</span>
    //       </h5>
    //     </div>
    //   </div>
    // </nav>
    <header className="bg-white flex w-full justify-between font-bold pl-3 pr-3 pb-1 pt-2 items-center text-base shadow-sm">
     <div className="flex space-x-4 items-center">
      <a href="" className="">Logo</a>
 
    </div>
    <div className="flex space-x-4 items-center">
    <img src={user?.images[0]?.url} className="rounded-full h-12 w-12" alt="" />
 
    <span className="text-sm hidden lg:inline md:inline">{user?.display_name}</span>
    <svg  class="h-5 w-5 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />  <polyline points="16 17 21 12 16 7" />  <line x1="21" y1="12" x2="9" y2="12" /></svg>
    </div>
    </header>
  
    
  );
}

export default Navbar;
