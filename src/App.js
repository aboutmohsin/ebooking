import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import ListedProperty from "./components/ListedProperty/ListedProperty";
import Footer from "./components/Footer/Footer";
import Features from "./components/Features/Features";
import Guest from "./components/Guest/Guest";
import ListProperty from "./components/ListProperty/ListProperty";
import Amenities from "./components/Amenities/Amenities";
import Benefits from "./components/Benefits/Benefits";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <ListProperty />
      <Benefits />
      <Guest />
      <ListedProperty />
      <Amenities />
      <Footer />
      {/* <ListFeatureSection />
      <ListPropertySection />
      <ListGuestSection />
      <ListedPropertySection />
      <ListFooter /> */}
    </>
  );
}

export default App;
