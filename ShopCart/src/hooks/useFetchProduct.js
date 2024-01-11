import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getProductData } from "../utils/productSlice"

const useFetchProduct = () => {
    const dispatch = useDispatch()

    const fetchProduct = async () => {
        const data = await fetch("https://fakestoreapi.com/products")
        const jsonData = await data.json()
        dispatch(getProductData(jsonData))

    }

    useEffect(()=>{
        fetchProduct()
    },[])

}

export default useFetchProduct