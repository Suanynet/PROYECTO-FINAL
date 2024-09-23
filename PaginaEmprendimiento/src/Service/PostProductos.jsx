async function postProductos(Image,Name, Price) {
    try {
     
   
        const DataProducts = { 
            Image,
            Name,
            Price
        
        };

        const response = await fetch("http://localhost:3001/productos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(DataProducts)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export default postProductos