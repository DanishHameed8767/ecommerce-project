// A mock function to mimic making an async request for data

export function fetchAllWishlistProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5000/wishlist",{
      method:"GET",
      headers:{
        "auth-token": localStorage.getItem("token")
      }
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function addToWishlist(item) {
    return new Promise(async (resolve) => {
      const response = await fetch("http://localhost:5000/wishlist/add", {
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

export function delFromWishlist(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5000/wishlist/del", {
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

