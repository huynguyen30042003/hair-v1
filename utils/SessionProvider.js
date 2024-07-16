"use client";
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default AuthProvider;


// utils/SessionProvider.js
// import React, { createContext, useContext, useState } from "react";

// const SessionContext = createContext();

// export const useSession = () => useContext(SessionContext);

// export const SessionProvider = ({ children, initialSession }) => {
//   const [session, setSession] = useState(initialSession);

//   const updateSession = (newSession) => {
//     setSession(newSession);
//   };

//   return (
//     <SessionContext.Provider value={{ session, updateSession }}>
//       {children}
//     </SessionContext.Provider>
//   );
// };

// export default SessionProvider;
