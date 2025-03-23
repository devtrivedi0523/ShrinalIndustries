import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Products from "./Components/Products";
import Contact from "./Components/ContactUs";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="font-sans">
      {/* <Header /> */}
      {/* Navbar - Stays Fixed */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Products />
        {/* <Contact /> */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
