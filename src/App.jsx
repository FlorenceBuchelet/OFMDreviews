import "./App.scss";
import CardsZone from "./components/CardsZone/CardsZone";
import Menu from "./components/Menu/Menu";

// Create a card using

function App() {
  return (
    <>
      <div className="CardsZone">
        <img
          className="logo"
          src="src/assets/pictures/ofmd logo.png"
          alt="Our Flag Means Death logo"
        />
        <CardsZone />
      </div>
      <nav>
        <Menu />
      </nav>
    </>
  );
}

export default App;
