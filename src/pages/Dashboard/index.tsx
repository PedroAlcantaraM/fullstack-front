import { StyleHeader, StyledMain } from "./style";
import { useNavigate } from "react-router-dom";
import { Contact } from "../../components/Contacts";
import { ContactsForm } from "../../components/AddContactsForm";

export const Dashboard = () => {
  const navigate = useNavigate();

  function LogoutUser() {
    window.localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <StyleHeader>
        <h1>Your Contacts</h1>
        <button
          className="btnLogout"
          onClick={() => {
            LogoutUser();
          }}
        >
          Logout
        </button>
      </StyleHeader>
      <StyledMain>
        <ContactsForm />
        <section className="sectionContacts">
          <Contact />
        </section>
      </StyledMain>
    </>
  );
};
