import { Logout, SearchContainer, SearchInput, SearchIcon } from "./styles";
import MagnifyingGlass from "../../../assets/magnifying-glass.svg";
import { useContextSelector } from "use-context-selector";
import { AuthContext } from "../../../stores/contexts/authStore";
import { useNavigate } from "react-router-dom";

type Props = {};

function SearchBox({}: Props) {
  const navigate = useNavigate();
  const signOut = useContextSelector(AuthContext, (context) => {
    return context.signOut;
  });

  async function handleLogout() {
    await signOut();
    navigate("/login");
    return;
  }

  return (
    <SearchContainer>
      <Logout onClick={() => handleLogout()}>Sair</Logout>
      <SearchIcon src={MagnifyingGlass}></SearchIcon>
      <SearchInput placeholder="Pesquisar" />
    </SearchContainer>
  );
}

export default SearchBox;
