import React, { useState } from "react";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <AppContext.Provider value={{ isLoading, toggleLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
