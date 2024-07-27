// A mock function to mimic making an async request for data
export async function loginUser(item) {
    try {
      const response = await fetch("https://urban-cart-backend.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      const data = await response.json();
    if(data.message){
      throw data;
    }
      return data;
    } catch (error) {
      throw error;
    }
}

export async function createUser(item) {
  try {
    const response = await fetch("https://urban-cart-backend.vercel.app/signup/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();
  if(data.message){
    throw data;
  }
    return data;
  } catch (error) {
    throw error;
  }
}

export function checkUser() {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("https://urban-cart-backend.vercel.app/getuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    if (data.error) {
      reject({ ...data.error });
    } else {
      resolve({ data });
    }
  });
}
