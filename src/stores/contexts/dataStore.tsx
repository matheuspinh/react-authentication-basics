import { ReactNode, useEffect, useState, useCallback } from "react";
import { createContext } from "use-context-selector";
import { api } from "../../lib/axios";

interface Data {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string | null;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string | null;
  following_url: string | null;
  gists_url: string | null;
  starred_url: string | null;
  subscriptions_url: string | null;
  organizations_url: string | null;
  repos_url: string | null;
  events_url: string | null;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string | null;
  location: string;
  email: string | null;
  hireable: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

interface DataProviderProps {
  children: ReactNode;
}

interface DataContextType {
  data?: Data;
  fetchData: () => Promise<void>;
}

export const DataContext = createContext<DataContextType>(
  {} as DataContextType
);

export function DataProvider({ children }: DataProviderProps) {
  const [data, setData] = useState<Data>();

  const userString = localStorage.getItem("@residencia:user");

  const fetchData = useCallback(async () => {
    if (!userString) {
      return;
    }

    const user = JSON.parse(userString).user;
    try {
      const response = await api.get(`/users/${user}`);
      setData(response.data);
    } catch (err) {
      return;
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <DataContext.Provider value={{ data, fetchData }}>
      {children}
    </DataContext.Provider>
  );
}
