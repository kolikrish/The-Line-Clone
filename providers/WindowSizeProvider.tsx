"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const WindowSizeContext = createContext<boolean | null>(null);

export const WindowSizeProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowSizeContext.Provider value={isDesktop}>
      {children}
    </WindowSizeContext.Provider>
  );
};

export const useIsDesktop = () => useContext(WindowSizeContext);
