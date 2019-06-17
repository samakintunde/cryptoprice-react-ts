import React, { createContext, useReducer } from "react";
import {
  favoritesReducer,
  initialState
} from "../reducers/favorites/favorites-reducer";

const FavoritesContext = createContext(initialState);

interface Props {
  children: any;
}

const FavoritesContextProvider = ({ children }: Props) => {
  const [favorites, dispatchFavorites] = useReducer(
    favoritesReducer,
    initialState
  );

  return (
    <FavoritesContext.Provider value={{ favorites, dispatchFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesContextProvider };
