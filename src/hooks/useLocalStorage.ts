// 'use client';
// import { useState } from "react";

// export const useLocalStorage = () => {
//   const [user, setUser] = useState<string | null>(null);

//   const setItem = (key: string, value: string) => {
//     localStorage.setItem(key, value);
//     setUser(value);
//   };

//   const getItem = (key: string) => {
//     const value = localStorage.getItem(key);
//     setUser(value);
//     return value;
//   };

//   console.log("value anterior ahora user", user);

//   const removeItem = (key: string) => {
//     localStorage.removeItem(key);
//     setUser(null);
//   };

//   return { user, setItem, getItem, removeItem, setUser };
// };
