
export async function list({ listName } = { listName: 'featured' }){
    const response = await fetch(`/api/products?listName=${listName}`);
    return await response.json();
}