import { ReactNode } from "react";
import { AuthProvider } from "./authStore";
import { DataProvider } from "./dataStore";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <DataProvider>{children}</DataProvider>
    </AuthProvider>
  );
}
