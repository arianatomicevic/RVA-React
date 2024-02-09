import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavMenu from "./components/NavMenu";
import Parfumes from "./components/Parfumes";

function App() {
  return (
    <div className="App">
      <NavMenu></NavMenu>
      <Home></Home>
      <About></About>
      <Parfumes></Parfumes>
      <Contact></Contact>
    </div>
  );
}

export default App;
