import Header from "./Header";
import Footer from "./Footer";
import CallWidget from "./CallWidget";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-black">{children}</main>
      <CallWidget />
      <Footer />
    </>
  );
}
