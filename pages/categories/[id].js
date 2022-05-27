import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { getProductsByCategory } from '../../services/products'
import { Container } from '../../styles/Categories.module.css'
import { ProductsContext } from '../../context/products'
import ProductsList from '../../components/ProductsList'

export default function CategoriesDetail() {
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
            <h1>Pagina Dettaglio Categoria</h1>
            <ProductsList />
        </ProductsContext.Provider>
    )
}