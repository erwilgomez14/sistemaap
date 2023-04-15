export const initialState = {
    systems: [
      { id: 1, name: 'System 1' },
      { id: 2, name: 'System 2' },
      { id: 3, name: 'System 3' }
    ]
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      // Si se agrega un sistema, actualizamos el estado agregando el nuevo sistema al array
      case 'ADD_SYSTEM':
        return {
          ...state,
          systems: [...state.systems, action.system]
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  