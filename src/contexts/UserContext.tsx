import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

import { UserType } from "../types/UserType";
import { UserContextType } from "../types/UserContextType";

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [users, setUsers] = useState<UserType[]>([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const response = await api.get("/users");
      const data = response.data;

      setUsers(data);
    };

    fetchApi();
  }, []);

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        city,
        setCity,
        users,
        setUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
