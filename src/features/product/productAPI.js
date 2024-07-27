// A mock function to mimic making an async request for data
// export function fetchAllProducts() {
//   return new Promise(async (resolve) => {
//     //TODO: we will not hard-code server URL here
//     const response = await fetch("https://urban-cart-backend.vercel.app/allproducts");
//     const data = await response.json();
//     resolve({ data });
//   });
// }

export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("https://urban-cart-backend.vercel.app/products?type=product");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllProductsByCategory(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://urban-cart-backend.vercel.app/category/products", {
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
    const response = await fetch("https://urban-cart-backend.vercel.app/updatemany", {
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
    const response = await fetch("https://urban-cart-backend.vercel.app/products/" + id);
    const data = await response.json();
    resolve({ data });
  });
}


export function fetchArrivalsById(id) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("https://urban-cart-backend.vercel.app/arrivals/" + id);
    const data = await response.json();
    resolve({ data });
  });
}

export function searchProducts(keyword) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("https://urban-cart-backend.vercel.app/search?q=" + keyword);
    const data = await response.json();
    if (data.error) {
      reject(data.error);
    } else {
      resolve({ data });
    }
  });
}
