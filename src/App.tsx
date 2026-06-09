import Header from "./components/Header";

import "./App.css";
import Main from "./components/Main";
import Section from "./components/Section";
import Article from "./components/Article";
import Location from "./components/Location";
import Footer from "./components/Footer";

// npm install leaflet react-leaflet
// npm install --save-dev @types/leaflet @types/react-leaflet

function App() {
  return (
    <div className="container">
      <Header />
      <div id="home">
        <Main />
      </div>
      <div id="about">
        <Section />
      </div>

      <div id="membership">
        <Article />
      </div>

      <div id="blog">
        <Location />
      </div>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;
