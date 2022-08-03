import React from "react";
import { Icon, Navbar, NavItem } from "react-materialize";
import "../styles/Header.css";
// header
const Header = () => {
  return (
    <Navbar
      className="white darken-4"
      alignLinks="right"
      brand={
        <a className={`logoText`} href="/" style={{ color: "turquoise" }}>
          Janus Softwares
        </a>
      }
      style={{
        position: "fixed",
        zIndex: "2",
      }}
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
      <NavItem
        className=""
        href=""
        style={{ color: "turquoise", "fontSize": "1.4rem" }}
      >
        Home
      </NavItem>
      <NavItem
        className=""
        href="components.html"
        style={{ color: "turquoise", "fontSize": "1.4rem" }}
      >
        Services
      </NavItem>
      <NavItem
        className=""
        href="components.html"
        style={{ color: "turquoise", "fontSize": "1.4rem" }}
      >
        Contacts
      </NavItem>
    </Navbar>
  );
};

export default Header;
