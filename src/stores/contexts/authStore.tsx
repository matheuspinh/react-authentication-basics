import { useCallback, useState, ReactNode } from "react";
import { createContext } from "use-context-selector";

interface SignInCredencials {
  user: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credencials: SignInCredencials): Promise<void>;
  signOut(): void;
}

interface AuthState {
  user: object;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

interface CounterStoreProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: CounterStoreProviderProps) {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem("@residencia:user");

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ user, password }: SignInCredencials) => {
    localStorage.setItem("@residencia:user", JSON.stringify({ user }));

    setData({ user: { user } });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@residencia:user");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
