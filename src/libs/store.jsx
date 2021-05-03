import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
    isLoading: false,
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [context, dispatch] = useReducer((state, action) => {
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

  return <Provider value={{ context, dispatch }}>{children}</Provider>;
};

StateProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export { store, StateProvider }
