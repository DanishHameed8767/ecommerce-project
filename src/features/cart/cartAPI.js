// A mock function to mimic making an async request for data

export function fetchAllCartProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5000/cart", {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5000/cart/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    resolve({ data });
  });
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
