import React from "react";
import { BoxContainer, ContentContainer } from "./styles";
import Code from "../../assets/code.svg";

type Props = {};

function LeftAccessBox({}: Props) {
  return (
    <BoxContainer>
      <ContentContainer>
        <img src={Code}></img>
        <div>
          <p>
            <span>Siga</span> amigos e outros devs do seu interesse usando o
            botão seguir
          </p>
          <p>
            <span>Conheça</span> novos devs e repositórios através da aba
            explorar
          </p>
          <p>
            <span>Compartilhe</span> ideias e soluções em um só lugar
          </p>
        </div>
      </ContentContainer>
    </BoxContainer>
  );
}

export default LeftAccessBox;
