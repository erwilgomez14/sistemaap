import React, { createContext, useContext, useReducer } from 'react';

// Creamos el contexto del estado global
export const StateContext = createContext();

// StateProvider es un componente de orden superior que envuelve la aplicación
export const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// useGlobalState es un hook personalizado para acceder al estado global desde cualquier componente
export const useGlobalState = () => useContext(StateContext);
