import { UserType } from "./UserType";

export type UserContextType = {
  name: string;
  setName: (newState: string) => void;
  email: string;
  setEmail: (newState: string) => void;
  phone: string;
  setPhone: (newState: string) => void;
  city: string;
  setCity: (newState: string) => void;
  users: UserType[];
  setUsers: (value: UserType[]) => void;
};
