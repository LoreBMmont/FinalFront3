
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    
      <div className="App">
       
          <Navbar/>
          <Outlet />
          <Footer/>
      </div>
      
  );
}

export default App;



