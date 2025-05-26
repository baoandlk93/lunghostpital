import { PrimeReactProvider } from "primereact/api";
import Layout from "../components/Layout";
import HomePage from "../components/Home";
export default function Home() {
  return (
    <PrimeReactProvider>
      <Layout>
        <HomePage />
      </Layout>
    </PrimeReactProvider>
  );
}
