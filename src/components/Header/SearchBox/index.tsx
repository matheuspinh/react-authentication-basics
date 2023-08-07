import { Logout, SearchContainer, SearchInput, SearchIcon } from "./styles";
import MagnifyingGlass from "../../../assets/magnifying-glass.svg";

type Props = {};

function SearchBox({}: Props) {
  return (
    <SearchContainer>
      <Logout>Sair</Logout>
      <SearchIcon src={MagnifyingGlass}></SearchIcon>
      <SearchInput placeholder="Pesquisar" />
    </SearchContainer>
  );
}

export default SearchBox;
