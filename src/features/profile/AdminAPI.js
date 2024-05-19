export function fetchAllCategories() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("http://localhost:5000/showcategory");
    const data = await response.json();
    resolve({ data });
  });
}

export function addCategory(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5000/addcategory", {
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

//   export function delFromCart(item) {
//     return new Promise(async (resolve) =>{
//       const response = await fetch('http://localhost:5000/cart/del',{
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

export function addSubCategory(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5000/addsubcategory", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function addProduct(item) {
  return new Promise(async (resolve) => {
    await fetch("http://localhost:5000/addproduct", {
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
    const response = await fetch("http://localhost:5000/uploadimage", {
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
    const response = await fetch("http://localhost:5000/allproducts?type=arrival");
    const data = await response.json();
    resolve({ data });
  });
}


export function updateArrival(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5000/updatearrival", {
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