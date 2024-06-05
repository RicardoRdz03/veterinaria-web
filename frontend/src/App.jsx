import "./App.css";
import Carousel from "./components/Carousel";
import Entrada from "./components/Entrada";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Seccion1 from "./components/Seccion1";
import Seccion2 from "./components/Seccion2";

function App() {
  return (
    <>
      <Entrada />
      <Carousel />
      <Seccion1 />
      <Seccion2 />
      <Footer />
    </>
  );
}

export default App;
