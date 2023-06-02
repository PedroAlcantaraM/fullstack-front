import { ReactNode, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../api/api";
import { RegisterData } from "../../pages/Register/validator";
import { LoginData } from "../../components/ModalLogin/validator";
import { useNavigate } from "react-router-dom";
import { object } from "zod";

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContextValues {
  userRegister: (formData: RegisterData) => void;
  onModal: boolean;
  setOnModal: React.Dispatch<React.SetStateAction<boolean>>;
  loginUser: (data: LoginData) => void;
  loading: boolean;
}

export const AuthContext = createContext<IAuthContextValues>(
  {} as IAuthContextValues
);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [onModal, setOnModal] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("@Token");

    if (!token) {
      setLoading(false);
      return;
    }
    api.defaults.headers.common.authorizarion = `Bearer ${token}`;
    setLoading(false);
  }, []);

  async function loginUser(data: LoginData) {
    try {
      const response = await api.post("/login", data);
      toast.success("Usuário Logado! 😎");

      const { token, userId } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("@Token", token);
      localStorage.setItem("@UserID", userId);

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch {
      toast.error("Email ou senha incorreto! ");
    }
  }

  async function userRegister(formData: RegisterData) {
    try {
      await api.post("/users", formData);

      toast.success("Cadastro realizado com sucesso!", {
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Oops, algo deu errado...");
    }
  }

  return (
    <AuthContext.Provider
      value={{ userRegister, onModal, setOnModal, loginUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
