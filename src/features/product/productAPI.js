// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:5000/allproducts',) 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchAllProductsByCategory(item) {
  console.log(item)
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:5000/category/products',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item)
    }) 
    const data = await response.json();
    resolve({data});
  }
  );
}
