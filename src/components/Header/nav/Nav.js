import React from "react";
import NavLink from "./NavLink";
import { navLinks } from "./navLinks";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      {/* <img src="./janus.png" height={"120px"} width={"120px"} /> */}
      <div class="div" >
        <h3>Janus Softwares</h3>
      </div>
      <div>
        {navLinks.map(({ navLinkId, scrollToId }, idx) => (
          <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
        ))}
      </div>
    </nav>
  );
};

export default Nav;
