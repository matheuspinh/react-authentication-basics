import React from "react";
import { AccessContainer, FormContainer, AccessForm } from "./styles";
import { Form } from "../../components/Form";
import LeftAccessBox from "../../components/LeftAccessBox";
import CopyRight from "../../components/CopyRight";

type Props = {};

function Recover({}: Props) {
  return (
    <AccessContainer>
      <FormContainer>
        <LeftAccessBox />
        <AccessForm>
          <p>
            Recupere o acesso ao <strong>login</strong> com o e-mail cadastrado
          </p>

          <form action="">
            <Form.Root>
              <Form.Field placeholder="Digite seu email" type="text" />
              <Form.Button text="Enviar" />
            </Form.Root>
            {/* <input
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleLogin}>
            Login
          </button> */}
          </form>
        </AccessForm>
      </FormContainer>
      <CopyRight />
    </AccessContainer>
  );
}

export default Recover;
