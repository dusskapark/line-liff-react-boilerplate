import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const liff = window.liff;

const Menu = () => {

  const activeStyle = {
    color: "green",
    fontSize: "2rem",
  };
  const handleCloseLIFFAppButton = () => {
    if (!liff.isInClient()) {
      sendAlertIfNotInClient();
    } else {
      liff.closeWindow();
    }
  };

  const handleOpenExternalWindowButton = () => {
    liff.openWindow({
      url: "https://line.me",
      external: true,
    });
  };

  const sendAlertIfNotInClient = () => {
    alert(
      "This button is unavailable as LIFF is currently being opened in an external browser."
    );
  };
  return (
    <Fragment>
      <div>
        <lui-navigation-bar-spacer />
        <lui-navigation-bar title='Title' level='2' menu-style='plain'>
          <lui-navigation-back slot='left' />
          <a href="#" slot='right' onClick={handleOpenExternalWindowButton}>
            <i class='lar la-arrow-out-square'></i>
          </a>
          <a href="#" slot='right' onClick={handleCloseLIFFAppButton}>
            <i class='lar la-times'></i>
          </a>
        </lui-navigation-bar>
        <ul>
          <li>
            <NavLink exact to='/' activeStyle={activeStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/about' activeStyle={activeStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/about/foo' activeStyle={activeStyle}>
              About Foo
            </NavLink>
          </li>
          <li>
            <NavLink to='/posts' activeStyle={activeStyle}>
              Posts
            </NavLink>
          </li>
        </ul>
        <hr />
      </div>
    </Fragment>
  );
};

export default Menu;
