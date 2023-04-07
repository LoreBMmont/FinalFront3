import { createContext } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
const getFavsFromStorage = () => {
  const localData = localStorage.getItem("favs");
  return localData ? JSON.parse(localData) : [];
};



const saveFavsFromStorage = (fav) => {
  localStorage.setItem("favs", JSON.stringify(fav));
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add_fav":
      saveFavsFromStorage([...state.data, action.payload])
      return { ...state, data: [...state.data, action.payload] };
      case 'LOAD_DENTISTS_FAVS': {
        return { ...state, data: getFavsFromStorage() };
      }
      case "cambiar_tema":
        localStorage.setItem('tema', action.theme);
        return { ...state, theme: action.payload };
              default:
        return state;
  }
};





export const initialState = {theme: localStorage.getItem('tema') || 'ligth', data: []}


export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState );
  useEffect(() => {
    dispatch({ type: "LOAD_DENTISTS_FAVS" });
  }, [])
  return (
    <ContextGlobal.Provider value={{state , dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
//const cambiarTema = () => {	dispatch({ type: "cambiar_tema" });	};
//export default estadoInicial

