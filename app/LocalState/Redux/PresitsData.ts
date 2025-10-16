import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "react-use";
import { RootState } from "./store";
import { addcount } from "../CartSlice";


export const PresisData = () => {
    const { count} = useSelector((state :RootState) => state.CartSlice)
    const [value,setValue] = useLocalStorage<number | null>('Cart',null)
    const dispath = useDispatch()
      useEffect(()=>{

        if ( value !== null && value !== undefined){
           dispath(addcount(value))
        }
    },[])  

    useEffect(()=>{

        setValue(count)
    },[count])    
    console.log(value)
}