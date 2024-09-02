import React, { createContext, useState, useEffect, useContext } from 'react';

// Criação do contexto
const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Recuperar o usuário do localStorage quando o componente for montado
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    // Salvar o usuário no estado e no localStorage
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    // Remover o usuário do estado e do localStorage
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider 
      value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider as AuthProvider, AuthContext };