import "./App.scss";
import FooterSection from "./Components/FooterSection/FooterSection";
import HeroSection from "./Components/HeroSection/HeroSection";
import MailSection from "./Components/MailSection/MailSection";
import Navbar from "./Components/Navbar/Navbar";
import SecSection from "./Components/SecSection/SecSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <SecSection />
      <MailSection />
      <FooterSection/>
    </div>
  );
}

export default App;
