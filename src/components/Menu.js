import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/AddOutlined';



const liff = window.liff;

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '44px',
    right: '90px',
  },
});

const Menu = () => {
  const classes = useStyles();

  const activeStyle = {
    color: "green",
    fontSize: "2rem",
  };
  // const handleCloseLIFFAppButton = () => {
  //   if (!liff.isInClient()) {
  //     sendAlertIfNotInClient();
  //   } else {
  //     liff.closeWindow();
  //   }
  // };

  const sendAlertIfNotInClient = () => {
    alert(
      "This button is unavailable as LIFF is currently being opened in an external browser."
    );
  };
  return (
    <Fragment>
      <div>
      <lui-navigation-bar-spacer/>
        <lui-navigation-bar title='Title' level='3' menu-style='light'>
          <lui-navigation-back slot='left' />
          <Fab color="primary" aria-label="Close" onClick={sendAlertIfNotInClient} slot="right" size="small" className={classes.root}>
            <AddIcon />
          </Fab>
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
