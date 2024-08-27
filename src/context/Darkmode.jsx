import { createContext, useState } from "react";

export const DarkmodeContext = createContext();

const DarkmodeContextProvider = ({ children }) => {
  const [isDarkmode, setIsDarkmode] = useState(false);
  return (
    <DarkmodeContext.Provider value={{ isDarkmode, setIsDarkmode }}>
      {children}
    </DarkmodeContext.Provider>
  );
};

export default DarkmodeContextProvider;
