import React, { useState, useEffect } from "react";
import "../Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    // Adding event listener to window
    // then telling if scroll is done to 100px then handleShow will be true or false
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        handleShow(true);
      } else {
        handleShow(false);
      }
      // The return statement is telling if the useEffect fires up again just remove the scroll effect
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    // telling it will always have flex-nav-container class
    // but also add nav-black class when show  is true

    <div className={`flex-nav-container ${show && "nav-black"}`}>
      <div>
        <img
          className='netflix-logo'
          src='https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1047&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F10%2Fnetflix-logo-2000.jpg'
          alt='Netflix_Logo'
        ></img>
      </div>
      <div>
        <img
          className='avatar'
          src='https://avatarfiles.alphacoders.com/591/thumb-59122.jpg'
          alt='Your Avatar'
        ></img>
      </div>
    </div>
  );
}

export default Nav;
