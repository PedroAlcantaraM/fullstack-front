import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { Input } from "../Input";
import { StyleModalLogin } from "./style";
import { LoginData, schema } from "./validator";
import { SubmitHandler, useForm } from "react-hook-form";

export const LoginModal = () => {
  const { setOnModal, onModal, loginUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });
  const submit: SubmitHandler<LoginData> = (data) => {
    loginUser(data);
    setOnModal(!onModal);
  };

  return (
    <StyleModalLogin>
      <div className="divContainer">
        <div className="divheader">
          <h2>Login</h2>
          <button
            onClick={() => {
              setOnModal(!onModal);
            }}
          >
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            label="Email"
            placeholder="Digite seu email"
            type="text"
            register={register}
            nameError="email"
            msgerror={errors.email?.message}
          />
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            register={register}
            nameError="password"
            msgerror={errors.password?.message}
          />
          <button type="submit" className="btnLogar">
            Entrar
          </button>
        </form>
      </div>
    </StyleModalLogin>
  );
};
