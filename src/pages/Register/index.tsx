import { z } from "zod";
import { AccessContainer, FormContainer, AccessForm } from "./styles";
import { Form } from "../../components/Form";
import LeftAccessBox from "../../components/LeftAccessBox";
import CopyRight from "../../components/CopyRight";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const registerUserFormSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email é obrigatório." })
    .email({ message: "Insira um email válido" }),
  user: z.string().nonempty({ message: "Usuário Github obrigatório" }),
  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(6, "A senha deve conter ao menos 6 caracteres"),
  confirmPassword: z.string(),
  nickname: z.string().nonempty({ message: "Insira um apelido" }),
});

type RegisterUserFormData = z.infer<typeof registerUserFormSchema>;

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<RegisterUserFormData>({
    resolver: zodResolver(registerUserFormSchema),
  });

  const { password, confirmPassword } = getValues();
  const passwordConfirmError = confirmPassword && password !== confirmPassword;

  function handleRegister(data: RegisterUserFormData) {
    try {
      //bloco para requisição de cadastro
      window.alert("Sucesso");
      navigate("/login");
      return;
    } catch (err) {
      console.log(err);
      navigate("/login");
      return;
    }
  }

  return (
    <AccessContainer>
      <FormContainer>
        <LeftAccessBox />
        <AccessForm>
          <p>
            Acesse o <strong>login</strong> com seu usuário do Github
          </p>

          <form onSubmit={handleSubmit(handleRegister)}>
            <Form.Root>
              <Form.Field
                register={register("email")}
                placeholder="Digite seu email"
                type="text"
              />
              {errors.email && (
                <Form.Error errorMessage={errors.email.message as string} />
              )}
              <Form.Field
                register={register("password")}
                placeholder="Digite sua senha"
                type="password"
              />
              {errors.password && (
                <Form.Error errorMessage={errors.password.message as string} />
              )}
              <Form.Field
                register={register("confirmPassword")}
                placeholder="Repita sua senha"
                type="password"
              />
              {passwordConfirmError && (
                <Form.Error errorMessage={"As senhas devem ser iguais"} />
              )}
              <Form.Field
                register={register("user")}
                placeholder="Usuário Github"
                type="text"
              />
              {errors.user && (
                <Form.Error errorMessage={errors.user.message as string} />
              )}
              <Form.Field
                register={register("nickname")}
                placeholder="Apelido"
                type="text"
              />
              {errors.nickname && (
                <Form.Error errorMessage={errors.nickname.message as string} />
              )}
              <Form.Button text="Login" />
            </Form.Root>
          </form>
        </AccessForm>
      </FormContainer>
      <CopyRight />
    </AccessContainer>
  );
}

export default Register;
