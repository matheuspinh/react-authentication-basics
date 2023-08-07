import { useContextSelector } from "use-context-selector";
import { HomeContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../stores/contexts/dataStore";
import { user as userData } from "../../utils/userObject";
import { useEffect } from "react";
import { Header } from "../../components/Header";
import Profile from "./Profile";

export function Home() {
  const navigate = useNavigate();

  // const data = useContextSelector(DataContext, (context) => {
  //   return context.data;
  // });

  const data = userData;
  console.log(data);

  const userString = localStorage.getItem("@residencia:user");
  let user: string;

  useEffect(() => {
    if (!userString) {
      navigate("/login");
      return;
    }
    try {
      const parsedUser = JSON.parse(userString);
      user = parsedUser.user;
    } catch (err) {
      window.alert("Algo deu errado, refaça o login.");
      navigate("/login");
      return;
    }
    if (!user) {
      window.alert("Usuário não encontrado no objeto, refaça o login.");
      navigate("/login");
      return;
    }
  }, []);

  let stringResponse: string | null;

  return (
    <>
      <Header />
      <HomeContainer>
        <Profile data={data} />
      </HomeContainer>
    </>
  );
}
