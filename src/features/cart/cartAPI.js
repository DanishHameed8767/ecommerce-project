// A mock function to mimic making an async request for data

export function fetchAllCartProducts() {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("https://urban-cart-backend.vercel.app/cart", {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    if (data.error) {
      reject(data.error);
    } else {
      resolve(data);
    }
  });
}

export function addToCart(item) {
  return new Promise(async (resolve, reject) => {
      const response = await fetch("https://urban-cart-backend.vercel.app/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(item),
      });
      const data = await response.json();
      if (data.error) {
        reject(data.error);
      } else {
        resolve(data);
      }
  });
}

export function delFromCart(item) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("https://urban-cart-backend.vercel.app/cart/del", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    if (data.error) {
      reject(data.error);
    } else {
      resolve(data);
    }
  });
}

export function updateCart(item) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("https://urban-cart-backend.vercel.app/cart/update", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    if (data.error) {
      reject(data.error);
    } else {
      resolve(data);
    }
  });
}


export function mergeCarts(item) {
  return new Promise(async (resolve, reject) => {
      const response = await fetch("https://urban-cart-backend.vercel.app/cart/merge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(item),
      });
      const data = await response.json();
      if (data.error) {
        reject(data.error);
      } else {
        
        resolve(data);
      }
  });
}