import samples from '../data/sample.json'
import Card from '../components/Card';

export default function About() {
    const { sample } = samples;
    console.log('sample', sample)

    return (
        <div>
            <h1>Pagina About</h1>
            {sample.map((item) => (
                <div key={item.id}>
                    <Card item={item}/>
                    <a href={`/about/${item.id}`}>
                        Vai al dettaglio
                    </a>
                </div>
            ))}
        </div> 
    )
}