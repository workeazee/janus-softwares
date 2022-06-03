import React from "react";
import styled from "styled-components";
import M from "materialize-css";
import { Button, Icon, Navbar, NavItem } from "react-materialize";
import "../styles/Header.css";

const Header = () => {
  return (
    <Navbar
      className="white darken-4"
      alignLinks="right"
      brand={
        <a className={`logoText blue-text`} href="#">
          Janus Softwares
        </a>
      }
      centerChildren
      id="mobile-nav"
      menuIcon={<Icon style={{ color: "blue" }}>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <NavItem className="blue-text" href="">
        Home
      </NavItem>
      <NavItem className="blue-text" href="components.html">
        Services
      </NavItem>
      <NavItem className="blue-text" href="components.html">
        Contacts
      </NavItem>
    </Navbar>
  );
};

export default Header;
