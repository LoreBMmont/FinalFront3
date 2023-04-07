import { createContext } from "react";
import { useReducer } from "react";

const getFavsFromStorage = () => {
  const localData = localStorage.getItem("favs");
  return localData ? JSON.parse(localData) : [];
};
const estadoInicial = {darkMode: false}


const saveFavsFromStorage = (fav) => {
  localStorage.setItem("favs", JSON.stringify(fav));
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add_fav":
      saveFavsFromStorage([...state, action.payload]);
      return [...state, action.payload];
      case "cambiar_tema":
        return { darkMode: !state.darkMode }; 
      default:
      return;
  }
};





export const initialState = {theme: "", data: []}


export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, {}, getFavsFromStorage);
 
  return (
    <ContextGlobal.Provider value={{state , dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
//const cambiarTema = () => {	dispatch({ type: "cambiar_tema" });	};
//export default estadoInicial

