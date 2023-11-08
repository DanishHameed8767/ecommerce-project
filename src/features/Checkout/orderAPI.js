export function addOrder(item) {
    return new Promise(async (resolve) =>{
      const response = await fetch('http://localhost:5000/order/add',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item)
      }) 
      const data = await response.json();
      resolve({data});
    }
    );
  }

export function showOrders() {
    return new Promise(async (resolve) =>{
      const response = await fetch('http://localhost:5000/order',{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      }) 
      const data = await response.json();
      resolve({data});
    }
    );
  }
