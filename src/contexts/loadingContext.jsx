import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const Context = createContext(false);

const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const toggleLoading = () => setIsLoading(!isLoading);

  return (
    <Context.Provider value={{ isLoading, toggleLoading }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { Context, Provider };
