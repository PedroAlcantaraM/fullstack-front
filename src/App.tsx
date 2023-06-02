import { AuthProvider } from "./contexts/UserContext/AuthContext";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
}
