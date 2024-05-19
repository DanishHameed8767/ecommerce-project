export function addOrder(item) {
  return new Promise(async (resolve) => {
    const order = localStorage.getItem("order");
    const response = await fetch("http://localhost:5000/cart/clear", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: order,
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function showOrders() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5000/order", {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token")
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function startStripeCheckout(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5000/order/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    resolve({ data });
  });
}