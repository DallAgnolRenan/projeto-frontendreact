import React from "react";
import logoImage from "./logo.png";
import Nave from "./nave.png";
import {
  Nav,
  LogoImage,
  Slogan,
  Navee1,
  Navee2,
} from "./HeaderStyle";

const Header = () => {
  return (
    <Nav>
      <Navee1 src={Nave} alt="Nave" />
      <Navee2 src={Nave} alt="Nave" />
      <LogoImage src={logoImage} alt="Logo" />
      <Slogan>
        Vista-se das estrelas. Descubra o universo em cada camiseta.
      </Slogan>
    </Nav>
  );
};

export default Header;
