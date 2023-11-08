import React, { useState, useRef, useEffect, useDebugValue } from "react";
import JoditEditor from "jodit-react";
import { Link, useNavigate } from "react-router-dom";
import { addProduct } from "../product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllWishlistProducts } from "../wishlist/wishlistSlice";
import { selectAllCartProducts } from "../cart/cartSlice";

export default function AdminProfile() {
    const [image,setImage] = useState('');
    const wishProducts = useSelector(selectAllWishlistProducts);
    const cartProducts = useSelector(selectAllCartProducts);
    const dispatch = useDispatch();
    const isLoggedIn = localStorage.getItem("token");
  const [credentials, setCredentials] = useState({ title: "", price: 0,stock:0,discountPercentage:0,thumbnail:"",category:"",description:"",longDescription:"",rating:0,images:[] });
  let navigate = useNavigate();
  const editor = useRef(null);
  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/addproduct", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        const json = await response.json();
        console.log(json);
        dispatch(addProduct(json));
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const onChangeEditor = (e) => {
    setCredentials({ ...credentials, longDescription: e });
  };
  const onChangeNum = (e) => {
    setCredentials({ ...credentials, [e.target.name]: parseInt(e.target.value) });
  };
  useEffect(()=>{
    if(!isLoggedIn){
        navigate("/login");
    }
  },[])
  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-light bg-white sticky-top border-bottom p-4">
        <div className="container-fluid">
          <Link className="navbar-brand fs-3" to="/">
            E-Commerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/order/list">
                  Add Category
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/login">
                  Add Product
                </Link>
              </li>
            </ul>
            <Link to="/wishlist" className="link-dark">
              <i role="button" className="fa-regular fa-heart fa-xl"></i>
            <span className="badge bg-danger" id="lblWishCount">
              {wishProducts.length}
            </span>
            </Link>
            <Link to="/cart" className="link-dark">
              <i role="button" className="fa-solid fa-cart-shopping fa-xl"></i>
            <span className="badge bg-danger" id="lblCartCount">
              {cartProducts.length}
            </span>
            </Link>
          </div>
        </div>
      </nav>
    <div className="container">
      <h1>Admin Panel</h1>
    </div>
      <form className="container" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="product-title" className="form-label">
            Product Title
          </label>
          <input
            type="text"
            className="form-control"
            id="product-title"
            name="title"
            value={credentials.title}
            aria-describedby="emailHelp"
            onChange={(e)=>onChange(e)}
            />
        </div>
        <div className="mb-3">
          <label htmlFor="product-price" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            value={credentials.price}
            className="form-control"
            name="price"
            id="product-price"
            aria-describedby="emailHelp"
            onChange={(e)=>onChangeNum(e)}
            />
        </div>
        <div className="mb-3">
          <label htmlFor="product-discount" className="form-label">
            Product Discount
          </label>
          <input
            type="number"
            className="form-control"
            id="product-discount"
            value={credentials.discountPercentage}
            name="discountPercentage"
            aria-describedby="emailHelp"
          onChange={(e)=>onChangeNum(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="product-stock" className="form-label">
            Product Stock
          </label>
          <input
            type="number"
            className="form-control"
            name="stock"
            id="product-stock"
            value={credentials.stock}
            aria-describedby="emailHelp"
            onChange={(e)=>onChangeNum(e)}
            />
        </div>
        <div className="mb-3">
          <label htmlFor="product-thumbnail" className="form-label">
            Product Thumbnail
          </label>
          <input
            type="url"
            className="form-control"
            id="product-thumbnail"
            name="thumbnail"
            value={credentials.thumbnail}
            aria-describedby="emailHelp"
            onChange={(e)=>onChange(e)}
            />
        </div>
        <div class="mb-3">
          <label for="product-category" class="form-label">
            Product Category
          </label>
          <select id="product-category" class="form-select" name="category"
            onChange={(e)=>onChange(e)}
          >
              <option value={credentials.category}>Choose Category</option>
            <option value="smartphones">smartphones</option>
            <option value="laptops">laptops</option>
            <option value="fragrances">fragrances</option>
            <option value="skincare"> skincare</option>
            <option value="groceries">groceries</option>
            <option value="home-decoration">home-decoration</option>
            <option value="furniture">furniture</option>
            <option value="tops">tops</option>
            <option value="womens-dresses">womens-dresses</option>
            <option value="womens-shoes">womens-shoes</option>
            <option value="mens-shirts">mens-shirts</option>
            <option value="mens-shoes">mens-shoes</option>
            <option value="mens-watches">mens-watches</option>
            <option value="womens-watches">womens-watches</option>
            <option value="womens-bags">womens-bags</option>
            <option value="womens-jewellery">womens-jewellery</option>
            <option value="sunglasses">sunglasses</option>
            <option value="automotive">automotive</option>
            <option value="motorcycle">motorcycle</option>
            <option value="lighting">lighting</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="product-short-desc" className="form-label">
            Product Short Description
          </label>
          <input
            type="text"
            className="form-control"
            value={credentials.description}
            id="product-short-desc"
            aria-describedby="emailHelp"
            name="description"
            onChange={(e)=>onChange(e)}
            />
        </div>

        <div className="mb-3">
          <label htmlFor="product-description" className="form-label">
            Product Long Description
          </label>
          <JoditEditor
            ref={editor}
            value={credentials.longDescription}
            name="longDescription"
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => {
            }} // preferred to use only this option to update the content for performance reasons
            onChange={(e) => {
                onChangeEditor(e);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
