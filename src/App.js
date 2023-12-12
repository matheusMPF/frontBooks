
import { Outlet } from "react-router-dom";
import "./app.css"
import NavBar from "./components/navBar/NavBar";



function App() {
  return (

    <div className="app">
      <NavBar/>
      <Outlet/>
    </div>

  );
}

export default App;
