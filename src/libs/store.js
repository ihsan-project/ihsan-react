import React, { createContext, useReducer } from 'react';

const initialState = {
    isLoading: false,
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'displayLoading':
        return {
            ...state,
            isLoading: true,
        };
      case 'hideLoading':
        return {
            ...state,
            isLoading: false
        };
      default:
        return state;
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
