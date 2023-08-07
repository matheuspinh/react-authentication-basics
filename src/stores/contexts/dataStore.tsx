import { ReactNode, useEffect, useState, useCallback } from "react";
import { createContext } from "use-context-selector";
import { api } from "../../lib/axios";
import { Data } from "../../@types/apiResponse";

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
