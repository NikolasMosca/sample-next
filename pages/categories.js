import { useState, useEffect } from 'react'
import { Container } from '../styles/Categories.module.css'
import { getCategories } from '../services/products'

export default function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then((data) => setCategories(data))
    }, [])

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