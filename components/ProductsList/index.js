import { useContext } from 'react';
import { Container } from '../../styles/Categories.module.css'
import { ProductsContext } from '../../context/products';
import CustomContainer from '../CustomContainer';

export default function ProductsList() {
    const { products } = useContext(ProductsContext);
    return (
        <>
            {products.map(({id, name, description}) => (
                <CustomContainer key={id}>
                    <h3>{name}</h3>
                    <h4>{description}</h4>
                </CustomContainer>
            ))}
        </>
    )
}