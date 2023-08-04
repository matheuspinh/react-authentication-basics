import { useCallback, useState, ReactNode } from "react";
// import { api } from '../../lib/axios'
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
  token: string;
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
    const token = localStorage.getItem("@residencia:token");
    const user = localStorage.getItem("@residencia:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ user, password }: SignInCredencials) => {
    window.alert(`email: ${user} password: ${password}`);

    localStorage.setItem("@residencia:token", user);
    localStorage.setItem("@residencia:user", JSON.stringify({ user }));
    setData({ token: password, user: { user } });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@residencia:token");
    localStorage.removeItem("@residencia:user");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
