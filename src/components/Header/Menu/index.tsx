import React from "react";
import { MenuContainer, MenuItem, LastMenuItem } from "./styles";

type Props = {};

function Menu({}: Props) {
  return (
    <MenuContainer>
      <MenuItem>Início</MenuItem>
      <MenuItem>Pull Requests</MenuItem>
      <MenuItem>Issues</MenuItem>
      <MenuItem>Marketplace</MenuItem>
      <LastMenuItem>Explore</LastMenuItem>
    </MenuContainer>
  );
}

export default Menu;
