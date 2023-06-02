import * as S from "./style";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { ContactResponseData } from "../AddContactsForm/validator";

export const Contact = () => {
  const token = localStorage.getItem("@Token");
  const [contacts, setContacts] = useState<ContactResponseData[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get<ContactResponseData[]>("/contacts", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setContacts(response.data);
    })();
  }, []);

  return (
    <S.StyleUl>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <p>Nome: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Telefone: {contact.phone}</p>
        </li>
      ))}
    </S.StyleUl>
  );
};
