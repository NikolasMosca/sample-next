export default function Card({ item }) {
    const { description, imageUrl } = item;
    return (
        <div className="container">
            <div className="item">
                <h2>{description}</h2>
                <img src={imageUrl}/>
            </div>
        </div>
    )
}