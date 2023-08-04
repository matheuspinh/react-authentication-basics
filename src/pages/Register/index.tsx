import React from "react";
import { AccessContainer, FormContainer, AccessForm } from "./styles";
import { Form } from "../../components/Form";
import LeftAccessBox from "../../components/LeftAccessBox";
import CopyRight from "../../components/CopyRight";

type Props = {};

function Register({}: Props) {
  return (
    <AccessContainer>
      <FormContainer>
        <LeftAccessBox />
        <AccessForm>
          <p>
            Acesse o <strong>login</strong> com seu usuário do Github
          </p>

          <form action="">
            <Form.Root>
              <Form.Field placeholder="Digite seu email" type="text" />
              <Form.Field placeholder="Digite sua senha" type="password" />
              <Form.Field placeholder="Repita sua senha" type="password" />
              <Form.Field placeholder="Usuário Github" type="text" />
              <Form.Field placeholder="Apelido" type="text" />
              <Form.Button text="Login" />
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

export default Register;
