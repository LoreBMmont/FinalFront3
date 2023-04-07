
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";

function App() {
  const{state}=useContext(ContextGlobal)
  return (
    
      <div className={state.theme ? 'dark':'light'}>
       
          <Navbar/>
          <Outlet />
          <Footer/>
      </div>
      
  );
}

export default App;



