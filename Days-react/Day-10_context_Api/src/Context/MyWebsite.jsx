import { createContext,useState } from "react";

 export let MyShop = createContext();

export const MyContextProvider = ({children}) =>{
    const [isOpenData, setIsOpenData]= useState(false);
  const [cartItem, setCartItem]= useState([]);

return( <MyShop.Provider value={{isOpenData, setIsOpenData ,cartItem, setCartItem}}> {children} </MyShop.Provider> )
}