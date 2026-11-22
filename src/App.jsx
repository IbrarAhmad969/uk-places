import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Places from "./pages/Places.jsx";
import PlaceDetails from "./pages/PlaceDetails.jsx";
import Regions from "./pages/Regions.jsx";
import About from "./pages/About.jsx";

export default function App() {
  return (
    <>
      <Navbar />

      <main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places/:slug" element={<PlaceDetails />} />
          <Route path="/regions" element={<Regions />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div className="wrap page"><h1>Page not found</h1><p>Check the address, or head back to the home page.</p></div>} />
        </Routes>

      </main>
      <Footer />
    </>
  );
}