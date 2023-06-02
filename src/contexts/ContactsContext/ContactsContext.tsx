import { ReactNode, createContext, useEffect, useState } from "react";
import { ContactData } from "../../components/AddContactsForm/validator";
import { api } from "../../api/api";
import { toast } from "react-toastify";

interface IContactsProviderProps {
  children: ReactNode;
}

interface IContactsContextValues {
  contactRegister: (formData: ContactData) => void;
  contacts: ContactData[];
}

export const ContactContext = createContext<IContactsContextValues>(
  {} as IContactsContextValues
);

export const ContactProvider = ({ children }: IContactsProviderProps) => {
  const [contacts, setContacts] = useState<ContactData[]>([]);

  async function contactRegister(formData: ContactData) {
    try {
      const response = await api.post("/contacts", formData);

      setContacts((previousContacts) => [response.data, ...previousContacts]);

      toast.success("Contato cadastrado com sucesso!", {
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Oops, algo deu errado...");
    }
  }

  return (
    <ContactContext.Provider value={{ contactRegister, contacts }}>
      {children}
    </ContactContext.Provider>
  );
};
