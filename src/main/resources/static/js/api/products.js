

async function list(){
    const response = await fetch('/api/products');
    return await response.json();
}

export { list }