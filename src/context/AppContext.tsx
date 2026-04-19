import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface AppContextType {
  country: string;
  setCountry: (country: string) => void;
  language: string;
  setLanguage: (language: string) => void;
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
  user: { name: string; email: string; avatar: string } | null;
  setUser: (user: any) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [country, setCountry] = useState("Angola");
  const [language, setLanguage] = useState("Português");
  const [primaryColor, setPrimaryColor] = useState(() => localStorage.getItem("muiomba-primary-color") || "#6d28d9");
  const [user, setUser] = useState({
    name: "Utilizador Alfa",
    email: "muiombaalfa@gmail.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Muiomba"
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.style.setProperty("--primary", primaryColor);
    localStorage.setItem("muiomba-primary-color", primaryColor);
  }, [primaryColor]);

  return (
    <AppContext.Provider value={{ 
      country, setCountry, 
      language, setLanguage, 
      primaryColor, setPrimaryColor,
      user, setUser 
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
