// A mock function to mimic making an async request for data

export function fetchAllCartProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5000/cart");
    const data = await response.json();
    resolve({ data });
  });
}

export function addToCart(item) {
  console.log(item);
  if(item.saleStarts || item.saleStock){
    return new Promise(async (resolve) => {
      const response = await fetch("http://localhost:5000/cart/sales/add", {
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
  else{
    return new Promise(async (resolve) => {
      const response = await fetch("http://localhost:5000/cart/add", {
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
}

export function delFromCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5000/cart/del", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5000/cart/update", {
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

export function clearCart() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5000/cart/clear", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}
