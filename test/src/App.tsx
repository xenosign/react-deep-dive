import "./App.css";
import ModuleBtn from "./components/ModuleBtn";
import SassBtn from "./components/SassBtn";
import StyledBtn from "./components/StyledBtn";
import TailwindBtn from "./components/TailwindBtn";

function App() {
  return (
    <>
      <div className="App">
        <SassBtn variant="blue" />
        <SassBtn variant="" />
        <SassBtn variant="green" />
        <br />
        <br />
        <StyledBtn variant="blue" />
        <StyledBtn color="#000" />
        <StyledBtn variant="green" />
        <br />
        <br />
        <TailwindBtn color="blue" />
        <TailwindBtn color="" />
        <br />
        <br />
        <ModuleBtn variant="blue" />
        <ModuleBtn variant="" />
      </div>
    </>
  );
}

export default App;
