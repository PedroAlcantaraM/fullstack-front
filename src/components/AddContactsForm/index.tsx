import { Input } from "../Input";
import { StyleAddContacts } from "./style";
import { ContactData, ContactFormData, formSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContact } from "../../hooks/useContact";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../../api/api";
import { useState } from "react";

export const ContactsForm = () => {
  //const { contactRegister } = useContact();
  const userId = localStorage.getItem("@UserID");
  const token = localStorage.getItem("@Token");

  const [contacts, setContacts] = useState<ContactData[]>([]);

  async function contactRegister(formData: ContactData) {
    try {
      const response = await api.post("/contacts", formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setContacts((previousContacts) => [response.data, ...previousContacts]);

      toast.success("Contato cadastrado com sucesso!", {
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Oops, algo deu errado...");
    }
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
  });

  function submit(data: ContactFormData) {
    const newData = { ...data, userId: userId! };
    contactRegister(newData);
    reset();
  }

  return (
    <>
      <StyleAddContacts onSubmit={handleSubmit(submit)}>
        <div className="divheader">
          <h2>Criar Contato</h2>
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
        <button className="btnConfirm" type="submit">
          Confirmar
        </button>
      </StyleAddContacts>
    </>
  );
};
