import { createContext } from 'react';

// ...
export const AuthContext = createContext({
  user: null,
  setUser: (_user) => {},
});
// This context will be used to provide user authentication state throughout the app.

// You can import this context in your components to access the user state and setUser function.