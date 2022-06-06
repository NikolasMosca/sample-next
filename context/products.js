import { useState, useEffect , createContext } from 'react'
import { useRouter } from 'next/router'
import { getProductsByCategory } from '../services/products'

export const ProductsContext = createContext()

export function ProductsContextProvider({children}) {
    const router = useRouter()
    const { id } = router.query
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if(id) {
            getProductsByCategory(id).then(data => setProducts(data))
        }
    }, [id])

    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}