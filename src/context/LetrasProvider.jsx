import { createContext, useState } from "react";

const LetrasContext = createContext();

function LetrasProvider({ children }) {
  return <LetrasContext.Provider value={{}}>{children}</LetrasContext.Provider>;
}

export { LetrasProvider };
export default LetrasContext;
