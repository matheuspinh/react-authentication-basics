import { useContextSelector } from "use-context-selector";
import { AccessContainer, AccessForm, FormContainer } from "./styles";
import { AuthContext } from "../../stores/contexts/authStore";
import { Form } from "../../components/Form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import LeftAccessBox from "../../components/LeftAccessBox";
import CopyRight from "../../components/CopyRight";

const signInUserFormSchema = z.object({
  user: z.string().nonempty({ message: "Usuário é obrigatório" }),
  password: z
    .string()
    .nonempty("A senha é obrigatória")
    .min(6, "A senha deve conter ao menos 6 caracteres."),
});

type SignInFormData = z.infer<typeof signInUserFormSchema>;

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInUserFormSchema),
  });

  const signIn = useContextSelector(AuthContext, (context) => {
    return context.signIn;
  });

  async function handleLogin(data: SignInFormData) {
    await signIn(data);
  }

  return (
    <AccessContainer>
      <FormContainer>
        <LeftAccessBox />
        <AccessForm>
          <p>
            Acesse o <strong>login</strong> com seu usuário do Github
          </p>

          <form onSubmit={handleSubmit(handleLogin)}>
            <Form.Root>
              <Form.Field
                placeholder="Usuário Github"
                type="text"
                register={register("user")}
              />
              {errors.user && (
                <Form.Error errorMessage={errors.user.message as string} />
              )}
              <Form.Field
                placeholder="Senha"
                type="password"
                register={register("password")}
              />
              {errors.password && (
                <Form.Error errorMessage={errors.password.message as string} />
              )}
              <Form.Link text="esqueceu a senha?" link="/recover" />
              <Form.Link text="novo por aqui?" link="/register" />
              <Form.Button text="Login" />
            </Form.Root>
          </form>
        </AccessForm>
      </FormContainer>
      <CopyRight />
    </AccessContainer>
  );
}

export default Login;
