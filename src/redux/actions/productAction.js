function getProduct(searchQuery){
    return async(dispatch, getState) => {
        console.log("데이터는",data);

        let url = `https://my-json-server.typicode.com/renoa1990/hnm/products?q=${searchQuery}`
        let reponse = await fetch(url);
        let data = await reponse.json();
        console.log("데이터는",data);
    }
}
export const productAction={getProduct}