// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("http://localhost:5000/allproducts");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllProductsByCategory(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5000/category/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    resolve({ data });
  });
}


export function updateProductStock(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5000/updatemany", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductById(id) {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:5000/products/'+id) 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchSalesById(id) {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:5000/sale/products/'+id) 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchArrivalsById(id) {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:5000/arrivals/'+id) 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchAllSales() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("http://localhost:5000/allsales");
    const data = await response.json();
    resolve({ data });
  });
}