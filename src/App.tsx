import ClickCounter from "./components/ClickCouter";
import ReactLogo from "./assets/react.png";
import Vector from "./assets/vector.svg";

const App = () => {
  return (
    <div>
      <h1>
        React Typescript {process.env.NODE_ENV} {process.env.NAME}
      </h1>
      <img src={ReactLogo} alt="react-logo" />
      <img src={Vector} alt="vector" />
      <ClickCounter />
    </div>
  );
};

export default App;
