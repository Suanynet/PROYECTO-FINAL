async function updateProductos(Name, Price, Image, id) {
    try {
     
        const DataProducts = { 
            Name,
            Price,
            Image
        
        };
        const response = await fetch("http://localhost:3001/productos/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(DataProducts)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export default updateProductos