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
        <a className={`logoText`} href="#" style={{color: "turquoise"}}>
          Janus Softwares
        </a>
      }
      centerChildren
      id="mobile-nav"
      menuIcon={<Icon style={{ color: "turquoise" }}>menu</Icon>}
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
      <NavItem className="" href="" style={{color: "turquoise", "font-size": "1.4rem"}}>
        Home
      </NavItem>
      <NavItem className="" href="components.html" style={{color: "turquoise", "font-size": "1.4rem"}}>
        Services
      </NavItem>
      <NavItem className="" href="components.html" style={{color: "turquoise", "font-size": "1.4rem"}}>
        Contacts
      </NavItem>
    </Navbar>
  );
};

export default Header;
