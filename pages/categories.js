import { useState, useEffect } from 'react'
import { Container } from '../styles/Categories.module.css'
import { getProducts } from '../services/products'
import { useSelector, useDispatch } from 'react-redux'
import { selectPublicCategories, selectProductsAlreadyLoaded, setProducts } from '../features/productSlice'

export default function Categories() {
    const dispatch = useDispatch();
    const alreadyLoaded = useSelector(selectProductsAlreadyLoaded);
    const categories = useSelector(selectPublicCategories);
    //const [categories, setCategories] = useState([])

    useEffect(() => {
        //getCategories().then((data) => setCategories(data))
        if(!alreadyLoaded) {
            getProducts().then((data) => dispatch(setProducts(data)))
        }
    }, [alreadyLoaded])

    return (
        <>
            <h1>Categorie</h1>
            {categories.map(({id, name, description}) => (
                <div key={id} className={Container}>
                    <h3>{name}</h3>
                    <h4>{description}</h4>
                    <a href={`/categories/${id}`}>Vai al dettaglio</a>
                </div>
            ))}
        </>
    )
}