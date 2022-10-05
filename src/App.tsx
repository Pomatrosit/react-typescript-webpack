import ClickCounter from "./components/ClickCouter";
import ReactLogo from "./react.png";
import Vector from "./vector.svg";

const App = () => {
  return (
    <div>
      <h1>
        React Typescript Template {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={ReactLogo} alt="react-logo" />
      <img src={Vector} alt="vector" />
      <ClickCounter />
    </div>
  );
};

export default App;
