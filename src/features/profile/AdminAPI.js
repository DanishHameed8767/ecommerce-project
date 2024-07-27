//   export function delFromCart(item) {
//     return new Promise(async (resolve) =>{
//       const response = await fetch('https://urban-cart-backend.vercel.app/cart/del',{
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(item)
//       })
//       const data = await response.json();
//       resolve({data});
//     }
//     );
//   }

export function addProduct(item) {
  return new Promise(async (resolve) => {
    await fetch("https://urban-cart-backend.vercel.app/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    resolve();
  });
}

export function uploadImage(formData) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://urban-cart-backend.vercel.app/uploadimage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllArrivals() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://urban-cart-backend.vercel.app/allproducts?type=arrival");
    const data = await response.json();
    resolve({ data });
  });
}


export function updateArrival(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://urban-cart-backend.vercel.app/updatearrival", {
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