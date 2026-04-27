import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

function ErrorPage() { 
  return (
    <>
        <Header />
        <main>
          <h1>An error occurred!</h1>
          <p>Could not find this page!</p>
        </main>
        <Footer />
    </>
  );
}

export default ErrorPage;