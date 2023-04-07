import React from "react";
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {

  const {dispatch} = useContext(ContextGlobal);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({type:"add_fav" , payload:{name, username, id} })
  }

  return (
    <div class="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link to={`/detail/${id}`}><div>
          <h5>{id} - {name}</h5>
          <img src="../images/doctor.jpg" alt="doctor" width="100px" height="100px"/>
          <h4>{username}</h4>
          </div>
          </Link>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
    
  );
};

export default Card;
