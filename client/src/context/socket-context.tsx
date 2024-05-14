"use client";
import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

import { useAuthContext } from "./auth-context";

interface SocketContextProviderProps {
  children: React.ReactNode;
}

export const SocketContext = createContext({});

export const SocketContextProvider = ({
  children,
}: SocketContextProviderProps) => {
  const [socket, setSocket]: any = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser }: any = useAuthContext();

  useEffect((): any => {
    if (authUser) {
      const socket = io("http://localhost:5000");

      setSocket(socket);

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, []);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
