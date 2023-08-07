import { HeaderContainer, LeftBox, Logo } from "./styles";
import Menu from "./Menu";
import SearchBox from "./SearchBox";

export function Header() {
  return (
    <HeaderContainer>
      <LeftBox>
        <Logo />
        <Menu />
      </LeftBox>
      <SearchBox />
    </HeaderContainer>
  );
}
