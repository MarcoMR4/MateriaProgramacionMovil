import AuthContextProvider from "./src/context/authContext";
import Layout from "./src/Layout/Layout";


export default function App() {
  return (
    <AuthContextProvider>
      <Layout />
    </AuthContextProvider>
  );
}

