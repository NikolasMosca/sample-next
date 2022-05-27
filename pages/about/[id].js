import { useRouter } from 'next/router'
import samples from '../../data/sample.json'
import Card from '../../components/Card'
import Example from '../../components/Example'

export default function AboutDetail() {
    const router = useRouter()
    const { id } = router.query

    const { sample } = samples;
    console.log('sample', sample)
    const item = sample.find(item => item.id === Number(id))

    if(!item) {
        return <h1>Elemento non trovato</h1>
    }

    return (
        <div>
            <h1>Pagina Dettaglio About</h1>
            <Card item={item}/>
            
            <a href={`/about`}>Vai alla lista</a> 
            <Example />      
        </div>
    )
}