import "./App.scss";
import CardsZone from "./components/CardsZone/CardsZone";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <>
      <div className="CardsZone">
        <img
          className="logo"
          src="/pictures/ofmd logo.png"
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
