import { ReactNode } from "react";
import { NavThemeProvider } from "./NavThemeProvider";
import { WindowSizeProvider } from "./WindowSizeProvider";

export default function RootProviders({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <WindowSizeProvider>
      <NavThemeProvider>{children}</NavThemeProvider>
    </WindowSizeProvider>
  );
}
