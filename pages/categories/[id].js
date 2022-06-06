import { ProductsContextProvider } from '../../context/products'
import ProductsList from '../../components/ProductsList'
import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmount, selectCounterValue } from '../../features/counterSlice'

export default function CategoriesDetail() {
    const dispatch = useDispatch();
    const counterValue = useSelector(selectCounterValue)

    const onIncrementCounter = () => dispatch(incrementByAmount(3))

    return (
        <ProductsContextProvider>
            <h1>Counter: {counterValue}</h1>
            <button onClick={onIncrementCounter}>Increment</button>
            <h1>Pagina Dettaglio Categoria</h1>
            <ProductsList />
        </ProductsContextProvider>
    )
}