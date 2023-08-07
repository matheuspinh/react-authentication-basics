import { useContextSelector } from "use-context-selector";
import { HomeContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../stores/contexts/dataStore";

export function Home() {
  const navigate = useNavigate();

  // const results = useContextSelector(ExamplesContext, (context) => {
  //   return context.result;
  // });
  const data = useContextSelector(DataContext, (context) => {
    return context.data;
  });

  console.log(data);

  const userString = localStorage.getItem("@residencia:user");

  if (!userString) {
    navigate("/login");
    return;
  }

  let user: string;

  try {
    const parsedUser = JSON.parse(userString);
    user = parsedUser.user;
  } catch (err) {
    window.alert("Algo deu errado, refaça o login.");
    navigate("login");
    return;
  }

  if (!user) {
    window.alert("Usuário não encontrado no objeto, refaça o login.");
    navigate("/login");
    return;
  }

  let stringResponse: string | null;

  return (
    <div>
      <HomeContainer>{data ? data.login : "NotLogin"}</HomeContainer>
    </div>
  );
}
