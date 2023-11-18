// A mock function to mimic making an async request for data
export function loginUser(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5000/login", {
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

export function checkUser() {
  return new Promise(async (resolve,reject) => {
    const response = await fetch("http://localhost:5000/getuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    if(data.error){
      reject({...data.error})
    }
    else{
      resolve({ data });
    }
  });
}
