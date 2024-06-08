// A mock function to mimic making an async request for data
// export function fetchAllProducts() {
//   return new Promise(async (resolve) => {
//     //TODO: we will not hard-code server URL here
//     const response = await fetch("http://localhost:5000/allproducts");
//     const data = await response.json();
//     resolve({ data });
//   });
// }

export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("http://localhost:5000/products?type=product");
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
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("http://localhost:5000/products/" + id);
    const data = await response.json();
    resolve({ data });
  });
}


export function fetchArrivalsById(id) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("http://localhost:5000/arrivals/" + id);
    const data = await response.json();
    resolve({ data });
  });
}

export function searchProducts(keyword) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("http://localhost:5000/search?q=" + keyword);
    const data = await response.json();
    if (data.error) {
      reject(data.error);
    } else {
      resolve({ data });
    }
  });
}
