import { useContext } from "react";
import { ContactContext } from "../contexts/ContactsContext/ContactsContext";

export const useContact = () => {
  const contactContext = useContext(ContactContext);

  return contactContext;
};
