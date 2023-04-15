import React, { createContext, useReducer } from 'react';

const initialState = {
  systems: [
    { id: 1, name: 'Sistema 1' },
    { id: 2, name: 'Sistema 2' },
    { id: 3, name: 'Sistema 3' },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SYSTEM':
      return {
        ...state,
        systems: [...state.systems, action.payload],
      };
    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
