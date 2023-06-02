import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input";
import { StyleFormRegister, StyleHeader, StyledRegisterPage } from "./style";
import { RegisterData, schema } from "./validator";
import { useAuth } from "../../hooks/useAuth";
import { LoginModal } from "../../components/ModalLogin";

export const Register = () => {
  const { userRegister, setOnModal, onModal } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(schema),
  });

  function submit(data: RegisterData) {
    userRegister(data);
    reset();
  }

  return (
    <>
      <StyleHeader>
        <h1>Your Contacts</h1>
        <button
          className="btnLogin"
          onClick={() => {
            setOnModal(!onModal);
          }}
        >
          Login
        </button>
      </StyleHeader>
      <StyledRegisterPage>
        <div className="divText">
          <h3>
            <strong>Salve seus contatos</strong> <br /> de forma segura!
          </h3>
        </div>
        <StyleFormRegister
          className="registerForm"
          onSubmit={handleSubmit(submit)}
        >
          <div className="divheader">
            <h2>Cadastre-se</h2>
          </div>
          <Input
            label="Nome"
            nameError="name"
            placeholder="Digite seu nome aqui"
            register={register}
            type="text"
            msgerror={errors.name?.message}
          />
          <Input
            label="E-mail"
            nameError="email"
            placeholder="Digite seu email aqui"
            register={register}
            type="email"
            msgerror={errors.email?.message}
          />
          <Input
            label="Telefone"
            nameError="phone"
            placeholder="Digite seu telefone"
            register={register}
            type="text"
            msgerror={errors.phone?.message}
          />
          <Input
            label="Senha"
            nameError="password"
            placeholder="Digite sua senha aqui"
            register={register}
            type="password"
            msgerror={errors.password?.message}
          />
          <button className="btnRegister" type="submit">
            Confirmar
          </button>
        </StyleFormRegister>
      </StyledRegisterPage>
      {onModal ? <LoginModal /> : null}
    </>
  );
};
