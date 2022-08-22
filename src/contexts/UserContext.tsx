import { createContext, ReactNode, useState } from "react";
import {API} from '../types/API'

type UserContextProps = {
    children: ReactNode;
}

type UserContextType = {
    name: string;
    setName: (newState: string) => void;
    email: string;
    setEmail: (newState: string) => void;
    phone: string;
    setPhone: (newState: string) => void;
    city: string;
    setCity: (newState: string) => void;
    users: API[];
    setUsers: (value: API[]) => void;
}


const initialValue = {
    name: '',
    setName: () => {},
    email: '',
    setEmail: () => {},
    phone: '',
    setPhone: () => {},
    city: '',
    setCity: () => {},
    users: [],
    setUsers: () => {}
}

export const UserContext = createContext<UserContextType>(initialValue);


export const UserContextProvider = ({children}: UserContextProps) => {
    const [name, setName] = useState(initialValue.name)
    const [email, setEmail] = useState(initialValue.email)
    const [phone, setPhone] = useState(initialValue.phone)
    const [city, setCity] = useState(initialValue.city)

    const [users, setUsers] = useState<API[]>(initialValue.users)

    return (
        <UserContext.Provider 
            value={{name, setName, email, setEmail, phone, setPhone, city, setCity, users, setUsers}}>
                {children}
        </UserContext.Provider>
    )
}
























