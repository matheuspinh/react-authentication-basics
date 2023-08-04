import React from "react";
import { CopyRightContainer } from "./styles";

type Props = {};

function CopyRight({}: Props) {
  return (
    <CopyRightContainer>
      <p>
        © 2022 Login - <a>Sobre o Login</a> - <a>Centro de segurança</a> -{" "}
        <a>Privacidade</a> - <a>Termos</a> - <a>Contato</a>{" "}
      </p>
    </CopyRightContainer>
  );
}

export default CopyRight;
