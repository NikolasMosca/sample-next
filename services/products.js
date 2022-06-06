export const getCategories = async () => {
    const {status, data} = await fetch('/products.json').then(response => response.json());
    if(status !== 'success') {
        console.log('qualcosa è andato storto', data)
        throw new Error('status non valido');
    }

    const categories = data.reduce((previous, current) => {
        //controllo se dentro il mio accumulatore ho già quella categoria 
        const find = previous.find(item => item.id === current.category_id)
        if(!find) {
            previous.push({
                id: current.category_id,
                name: current.category_name,
                image: current.category_image,
                description: current.category_description,
                public: current.category_public,
            })
        }
        return previous;
    }, [])

    //togliere tutti le categorie che hanno public a 0
    return categories.filter(item => item.public)
}

export const getProductsByCategory = async (id) => {
    const {status, data} = await fetch('/products.json').then(response => response.json());
    if(status !== 'success') {
        console.log('qualcosa è andato storto', data)
        throw new Error('status non valido');
    }

    //Fitlro i prodotti in base alla categoria 
    return data.filter(({category_id}) => category_id === Number(id))
}

export const getProducts = async () => {
    const {status, data} = await fetch('/products.json').then(response => response.json());
    if(status !== 'success') {
        console.log('qualcosa è andato storto', data)
        throw new Error('status non valido');
    }

    return data
}