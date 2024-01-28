import "./App.css";
import ModuleBtn from "./components/ModuleBtn";
import SassBtn from "./components/SassBtn";
import StyledBtn from "./components/StyledBtn";
import TailwindBtn from "./components/TailwindBtn";

function App() {
  return (
    <>
      <div className="App">
        <ModuleBtn />
        <ModuleBtn variant="blue" />
        <ModuleBtn variant="green" />
        <ModuleBtn color="#000" />
        <br />
        <br />
        <SassBtn />
        <SassBtn variant="blue" />
        <SassBtn variant="green" />
        <br />
        <br />
        <StyledBtn />
        <StyledBtn variant="blue" />
        <StyledBtn variant="green" />
        <StyledBtn color="#000" />
        <br />
        <br />
        <TailwindBtn />
        <TailwindBtn color="blue" />
        <TailwindBtn color="green" />
      </div>
    </>
  );
}

export default App;
