import React from "react";
import {useDataLayerValue} from '../././../ContextApi/DataLayer';

function Navbar() {
  const [{ user }, dispatch] = useDataLayerValue();

  window.onscroll = function () {
    bar();
  };

  var navbar = document.querySelector(".navbar");

  function bar() {
    if (window.pageYOffset > 1) {
      navbar.classList.add("sticky");
    }
    if (window.pageYOffset == 0) {
      navbar.classList.remove("sticky");
    }
  }



  return (
    
    <nav className="navbar">
      <div className="navbar__options-box">
        <img src={user?.images[0]?.url} className="navbar__avatar" alt="" />
        <div className="porfile">
          <h5 className="navbar__item">
            Name: <span className="porfile__items">{user?.display_name}</span>
          </h5>
          <h5 className="navbar__item">
            Email: <span className="porfile__items">{user?.email}</span>
          </h5>
          <h5 className="navbar__item">
            country: <span className="porfile__items">{user?.country}</span>
          </h5>
          <h5 className="navbar__item">
            followers:{" "}
            <span className="porfile__items">{user?.followers.total}</span>
          </h5>
        </div>
      </div>
    </nav>

  
    
  );
}

export default Navbar;
